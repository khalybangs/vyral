function Start() {

    // post date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secnds = date.getSeconds();
    if (month === 0) { month = 'January' }
    if (month === 1) { month = 'Febuary' }
    if (month === 2) { month = 'March' }
    if (month === 3) { month = 'April' }
    if (month === 4) { month = 'May' }
    if (month === 5) { month = 'June' }
    if (month === 6) { month = 'July' }
    if (month === 7) { month = 'August' }
    if (month === 8) { month = 'September' }
    if (month === 9) { month = 'October' }
    if (month === 10) { month = 'November' }
    if (month === 11) { month = 'December' }
    
    const Loader = () => {
        return `
            <div id="flowLoader-top" style="display:none;">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#dropbox-strindextops').before(Loader());
    $('#opnTopsfd, #opnTopsfd-xs').click(()=>{
        $('#opnTopsfd').css('color', 'orange');
        $('#opnMainfd, #opnExplrfd').css('color', 'grey');
        $('#mainflow, #explflow, #reaOrStr').css('display', 'none');
        $('#topsflow').fadeIn();
        // for xs
        $('#opnTopsfd-xs').css('border', 'solid 1px orange');
        $('#opnExplrfd-xs, #opnMainfd-xs').css('border', 'solid 1px #dddddd');
        $('#flowLoader-top').slideDown();
        var x = window.matchMedia("(max-width: 600px)");
        if (x.matches) {
            $('#trndStrAr').css('display', 'none');
        };
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((udata)=>{
            fetch('/shop/getTops', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((tops)=>{
                getTops(udata, tops);
            });
        });
    });
    // control
    const getTops = (udata, tops) => {
        $('.stylePostsTop').remove();
        
        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
            return response.json();
        }).then((users)=>{
            fetch(`/getGlbCol`, { method: 'get' }).then((response)=>{
                return response.json();
            }).then((lcl)=>{
                var cont = ''; var count = '';
                if (lcl) {
                    for (let i = 0; i < lcl.locales.length; i++) {
                        for (let p = 0; p < lcl.locales[i].Countries.length; p++) {
                            if (lcl.locales[i].Countries[p] == udata.country) {
                                cont  = lcl.locales[i].Continent; count = lcl.locales[i].Countries[p];
                            }
                        }
                    }
                    for (let i = 0; i < tops.length; i++) {
                        if (tops[i].location == cont && cont == udata.location || tops[i].location == count && count == udata.location[1] || tops[i].location == 'International') {
                            dispTops(tops[i], udata, users);
                        }                        
                    }
                    $('#flowLoader-top').slideUp();
                }
            });
        });

    };
    const checkMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.stylePostsTop').css('background-color', 'white');
                $('.stylePostsTop').css('border-top', 'solid 1px #f0f0f0');
                $('.postInfoCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postDatefrst').css('color', 'grey');
                $('.postHeaderfrst').css('color', '#1a1a1a');
                $('.postBodyCon, .edtPstBd').css('background-color', '#f9f9f9');
                $('.areYSPCon, .strHdBd').css('background-color', 'white');
                $('.yesesP').css('border-right', 'solid 1px #f0f0f0');
                $('.postBodyCon').css('border', 'solid 1px #f0f0f0');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postBodtxt').css('color', '#1a1a1a');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #f0f0f0');
                $('.commentInput').css('border', 'solid 1px #f0f0f0');
                $('.commentInput').css('background-color', 'white');
                $('.checkTagBody2, .strHdBd').css('border', 'solid 1px #f0f0f0');
                $('.checkTagBody2').css('background-color', 'white');
                // alrts
                $('.edt_jrn_alrt').css('background-color', 'white');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 20px -5px #1a1a1a');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #f0f0f0');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #f0f0f0');
                $('.bodyComNoti').css('background-color', 'white');
            }
            if (mode === 'dark') {
                $('.stylePostsTop').css('background-color', '#262626');
                $('.stylePostsTop').css('border-top', 'solid 1px #404040');
                $('.postInfoCon').css('border-bottom', 'solid 1px #404040');
                $('.postDatefrst').css('color', 'silver');
                $('.postHeaderfrst').css('color', 'white');
                $('.postBodyCon, .edtPstBd').css('background-color', '#333333');
                $('.areYSPCon').css('background-color', '#1a1a1a');
                $('.yesesP').css('border-right', 'solid 1px #333333');
                $('.postBodyCon, .strHdBd').css('border', 'solid 1px #404040');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #404040');
                $('.postBodtxt').css('color', 'white');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #404040');
                $('.commentInput').css('border', 'solid 1px #404040');
                $('.commentInput, .strHdBd').css('background-color', '#262626');
                $('.checkTagBody2').css('border', 'solid 1px #404040');
                $('.checkTagBody2').css('background-color', '#292929');
                // alrts
                $('.edt_jrn_alrt').css('background-color', '#262626');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 20px -5px #0d0d0d');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #404040');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #404040');
                $('.bodyComNoti').css('background-color', '#262626');
            }
        });
    };

    // tops body
    const shopBod = (data, ids) => {
        var price = '';
        if (data.currency == 'Dollar') {
            price = `<img src="img/dollar.png" style="width:8px; height:10px;">${data.price}`;
        }
        if (data.currency == 'Naira') {
            price = `<img src="img/naira.png" style="width:10px; height:10px;">${data.price}`;
        }
        return `
        <div class="stylePostsTop" style="width:100%;" id="">
            <div style="width:100%; height:30px;" class="">
                <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/shop.png); background-size:100% 100%; margin:5px;"></div>
                <div style="float:left; width:0.8px; height:20px; background-color:grey; margin:5px;"></div>
                <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/authand.png); background-size:100% 100%; margin:5px;"></div>
                <p style="float:left; font-size:10px; margin:0px; padding:5px; color:grey;"> 
                    <span id="">threadal Author</span>
                </p>
                <img src="img/opt.png" class="${ids.openPopId}" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                <i class="postDatefrst" style="float:right; margin:5px; color:silver; font-size:10px;" id="${ids.dateFlow}"></i>
            </div>
            <div class="edtPstBd" id="${ids.popBodId}" style="width:95%; margin:auto; margin-bottom:5px; border-radius:5px; display:none;">
                <div class="edtPstFlw" style="width:100%; height:30px;">
                    <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsePopId}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                </div>
                <!-- report cons -->
                <div id="${ids.reprtId}" class="" style="width:100%; height:35px;">
                    <p style="margin:8px; color:grey; cursor:pointer;"> <img src="img/flag.png" width="15px" height="15px" style="margin-right:10px;"> Report post</p>
                </div>
                <div id="${ids.repConId}" class="areYSPCon" style="width:100%; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.inApRep}"> Inapproriate content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.abusRep}"> Abusive content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:grey; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.clsRep}"> cancel </p>
                    </div>
                </div>
            </div>
            <div class="strHdBd" style="width:95%; margin:auto; border-radius:5px; margin-bottom:15px;">
                <!-- binary section -->
                <video id="${ids.vidId}" style="width:100%; display:none;"></video>
                <div id="${ids.vidCntrlDiv}" class="postInfoCon" style="height:30px; width:100%; display:none;">
                    <img id="${ids.vidPlay}" src="img/playn.png" width="17.5px" height="17.5px" style="margin:5px; float:left; cursor:pointer;">
                    <img id="${ids.vidPause}" src="img/pausen.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;">
                    <!-- <img id="${ids.vidStop}" src="img/stopy.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;"> -->
                    <img id="${ids.vidMute}" src="img/muten.png" width="15px" height="15px" style="margin:7.5px; float:right; cursor:pointer;">
                    <p style="float:right; margin:5px; font-size:13px; color:grey;"> <span id="${ids.vidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${ids.vidOrgT}" style="font-size:10px; color:grey;"></span> </p>    
                </div>
                <!-- video done -->
                <img id="${ids.ImgId}" src="" width="100%" height="100%" style="display:none;">
                <div class="postInfoCon" id="${ids.imSldId}" style="width:100%; height:45px; display:none;">
                    <div style="width:30%; height:100%; float:left;">
                        <img id="${ids.leftId}" src="img/backa.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:left;">
                    </div>
                    <div style="width:40%; height:100%; float:left;">
                        <p style="text-align:center; margin:10px; color:darkorange;"> <span id="${ids.imgNow}"></span> <i style="font-size:13px; color:grey;">/<span id="${ids.imgAll}"></span></i> </p>
                    </div>
                    <div style="width:30%; height:100%; float:right;">
                        <img id="${ids.rightId}" src="img/backb.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:right;">
                    </div>
                </div>
                <!-- img done -->
                <p class="postHeaderfrst" style="padding:5px; margin:5px;" id="">${data.heading}</p>
                <p class="" style="padding:5px; margin:5px; font-size:11px; color:grey;" id="">price: ${price}</p>
                <div style="width:100%; height:35px;">
                    <div style="float:left; margin:5px;"><img id="${ids.likeId}" src="img/like.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.likedBy}" style="font-size:11px; color:darkorange;">${data.likedBy.length}</i> </div>
                    <div style="float:left;"><img id="${ids.openCom}" src="img/comment.png" alt="" width="20px" height="20px" style="margin:5px; cursor:pointer;"> <i id="${ids.comntLen}" style="font-size:11px; color:darkorange;">${data.comments.length}</i> </div>
                    <img id="${ids.shrPst}" src="img/share.png" alt="" width="20px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                </div>
                <!-- comment area bellow -->
                <div class="postBodyCon" id="${ids.comBod}" style="width:98%; margin:auto; height:290px; border-radius:5px; padding-bottom:5px; margin-bottom:5px; display:none;">
                    <div style="width:100%; height:200px; overflow-y:auto;">
                        <br>
                        <span id="${ids.comFlow}" class="comFlow"></span>
                        <br>
                    </div>
                    <div class="commentIn" style="height:50px;">
                        <textarea class="commentInput" placeholder="comment" style="margin:5px; width:70%; float:left; border-radius:5px; color:darkorange;" id="${ids.comIn}"></textarea>
                        <img src="img/send.png" width="35px" height="35px" style="float:left; margin:5px;" id="${ids.comBt}">
                    </div>
                    <div class="closeRdCon" style="width:100%; height:40px; overflow-y:auto;">
                        <p id="${ids.closeCom}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <!-- share content area -->
                <div class="postBodyCon" id="${ids.shrPstBd}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; margin-bottom:5px; display:none;">
                    <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <input id="${ids.shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:2.5px; border:none; background-color:transparent; color:grey;" class="srchCon">
                            <img src="img/searcha.png" width="15px" height="15px" style="float:right; margin:2.5px;">
                        </p>
                    </div>
                    <div style="width:100%; height:175px; overflow-y:auto;">
                        <span id="${ids.shrPstFlw}"></span>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="${ids.shrPstCls}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
            </div>
            <!-- author cont area -->
            <div style="width:100%;" class="">
                <p style="padding:3px; margin:0px; font-size:12px; color:skyblue;" id=""> <strong>-</strong> <i style="font-size:10px;">${data.location}</i> </p>
                <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
                <div style="height:20px;">
                    <p style="color:grey; font-size:10px; margin:0px; padding:5px;"> Source : <a href="${data.source_page}"> <i style="color:grey; font-size:11.5px;">${data.source}</i> </a></p>
                </div>
            </div>
            <div style="height:10px;"></div>
        </div>
        `;
    }

    /**
     * FUNCS
     */
    // image functionalities
    const ImgFunc = (data, ImgId, rightId, leftId, imSldId, imgNow, imgAll) => {
        $(`#${ImgId}`).attr('src', data.img[0].path);
        $(`#${ImgId}`).css('display', 'block');
        $(`#${ImgId}`).attr('class', data.img[0].class);
        if (data.img.length > 1) {
            $(`#${imSldId}`).css('display', 'block');
            $(`#${ImgId}`).attr('class', data.img[0].class);
            $(`#${imgAll}`).text(data.img.length);
            $(`#${imgNow}`).text('1');
            var right = $(`#${rightId}`);
            var left = $(`#${leftId}`);
            var num = 0;
    
            right.click(function() {
                $(`#${ImgId}`).css('display', 'none');
                num++;
                if (num >= data.img.length) {
                    num = 0;
                }
                $(`#${ImgId}`).attr("src", data.img[num].path);
                $(`#${ImgId}`).attr("class", data.img[num].class);
                $(`#${ImgId}`).fadeIn();
                $(`#${imgNow}`).text(num+1);
            });
    
            left.click(function() {
                $(`#${ImgId}`).css('display', 'none');
                num--;
                if (num < 0) {
                    num = data.img.length-1;
                }
                $(`#${ImgId}`).attr("src", data.img[num].path);
                $(`#${ImgId}`).attr("class", data.img[num].class);
                $(`#${ImgId}`).fadeIn();
                $(`#${imgNow}`).text(num+1);
            });
        }else {
            $(`#${imSldId}`).css('display', 'none');
        }
    };

    // video funcs
    const VidFunc = (data, vidId, vidCntrlDiv, vidPlay, vidPause, vidStop, vidMute, vidCrntT, vidOrgT) => {
        $(`#${vidId}, #${vidCntrlDiv}`).css('display', 'block');
        $(`#${vidId}`).attr('class', `${data.vid.class}`);
        $(`#${vidId}`).attr('src', `${data.vid.path}`);
        var video = document.getElementById(`${vidId}`);
        video.muted = true;
        //$(`#${vidCrntT}`).text(video.currentTime);
        var dur = document.getElementById(`${vidId}`);
        //alert(`chck duration: ${video.muted}`);
        dur.onloadedmetadata = function() {
            var curmins = Math.floor(dur.currentTime / 60);
            var cursecs = Math.floor(dur.currentTime - curmins * 60);
            var durmins = Math.floor(dur.duration / 60);
            var dursecs = Math.round(dur.duration - durmins * 60);
            //if(cursecs < 10){ cursecs = "0"+cursecs; }
            //if(dursecs < 10){ dursecs = "0"+dursecs; }
            //if(curmins < 10){ curmins = "0"+curmins; }
            //if(durmins < 10){ durmins = "0"+durmins; }
            //document.getElementById('cur').innerText = cursecs;
            $(`#${vidCrntT}`).text(cursecs);
            $(`#${vidOrgT}`).text(dursecs);
        };
        const getTimer = () => {
            var curmins = Math.floor(dur.currentTime / 60);
            var cursecs = Math.floor(dur.currentTime - curmins * 60);
            $(`#${vidCrntT}`).text(cursecs);
        };
        const getCurT = () => {
            var targetDate = new Date();
            targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
            var countDownDate = targetDate.getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                // check duration to currentime
                getTimer();
                var curmins = Math.floor(dur.currentTime / 60);
                var cursecs = Math.floor(dur.currentTime - curmins * 60);
                var durmins = Math.floor(dur.duration / 60);
                var dursecs = Math.round(dur.duration - durmins * 60);
                if (cursecs == dursecs || cursecs > dursecs) {
                    $(`#${vidCrntT}`).text(0);
                    clearInterval(x);
                }
                if (distance < 0) {
                    getCurT();
                    //clearInterval(x);
                }
            }, 1000);
        };
        
        // video control buttons
        // play
        var muter = 0;
        $(`#${vidPlay}`).click(()=>{
            video.play();
            getCurT();
            //$(`#${vidCrntT}`).text(video.currentTime);
            $(`#${vidPlay}`).attr('src', 'img/playy.png');
            if (muter < 1) {
                $(`#${vidMute}`).click();
            }
            $(`#${vidPause}`).attr('src', 'img/pausen.png');
            $(`#${vidStop}`).attr('src', 'img/stopn.png');
        });
        // pause
        $(`#${vidPause}`).click(()=>{
            video.pause();
            getCurT();
            $(`#${vidPause}`).attr('src', 'img/pausey.png');
            $(`#${vidPlay}`).attr('src', 'img/playn.png');
            $(`#${vidStop}`).attr('src', 'img/stopn.png');
        });
        // stop
        $(`#${vidStop}`).click(()=>{
            video.stop();
            $(`#${vidStop}`).attr('src', 'img/stopy.png');
            $(`#${vidPause}`).attr('src', 'img/pausen.png');
            $(`#${vidPlay}`).attr('src', 'img/playn.png');
        });
        // mute fun
        $(`#${vidMute}`).click(()=>{
            if (muter > 0) {
                $(`#${vidMute}`).attr('src', 'img/muten.png');
                video.muted = true;
                muter = 0;
            } else {
                if (muter < 1) {
                    $(`#${vidMute}`).attr('src', 'img/mutey.png');
                    muter = 1;
                    video.muted = false;
                }
            }
        });

    };

    // check if liked function
    const likedImg = (data, udata, likeId, likedBy) => {
        for (let i = 0; i < data.likedBy.length; i++) { 
            if (data.likedBy[i] == udata._id) {
                $(`#${likeId}`).attr('src', 'img/liked.png');
            }
        }
        if (data.likedBy.length < 1) {
            $(`#${likedBy}`).css('display', 'none');
        }
        if (data.likedBy.length > 0) {
            $(`#${likedBy}`).css('display', 'inline-block');
        }
    }
    // like post function
    const getPInfo = (data, likedBy) => {
        fetch( `/shop/${data._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((accData)=>{
            if (accData.length < 1) {
                $(`#${likedBy}`).css('display', 'none');
            }
            if (accData.length > 0) {
                $(`#${likedBy}`).css('display', 'inline-block');
            }
            $(`#${likedBy}`).text(accData.length);
        });
    };
    const LikePost = (data, udata, likeId, likedBy) => {
        let alertbtn = $(`#${likeId}`);
        alertbtn.click(function() {
            fetch( `/shop/${data._id}`, { method: 'get' }).then((responce)=>{
                return responce.json()
            }).then((accData)=>{
                var imply = '';
                var act = '';
                var dateNow = [year, day, month, hour, minute, secnds];
                if (accData.length > 0) {
                    for (let i = 0; i < accData.length; i++) {
                        if (accData[i] == udata._id) {
                            imply = 'liked';
                            fetch(`/shop/unlike/${data._id}`, { method: 'put', body: JSON.stringify({ likedBy: accData[i] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                                return response.json();
                            }).then((deldata)=>{
                                if (deldata) {
                                    alertbtn.attr('src', 'img/like.png');
                                    act = 'unlike';
                                    getPInfo(data, likedBy);
                                    /*if (data.likedBy.length < 1) {
                                        $(`#${likedBy}`).css('display', 'none');
                                    }*/
                                }
                            });
                        }
                    }
                }else {
                    imply = 'liked';
                    fetch(`/shop/${data._id}`, {
                        method : "put",
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body : JSON.stringify({ likedBy: udata._id })
                    }).then((responce) => {
                        return responce.json();
                    }).then((LikeData)=>{
                        if (LikeData.ok === 1) {
                            $(`#${likeId}`).attr('src', 'img/liked.png');
                            act = 'like';
                            getPInfo(data, likedBy);
                        }
                    });
                }
                if (imply == '') {
                    fetch(`/shop/${data._id}`, {
                        method : "put",
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body : JSON.stringify({ likedBy: udata._id })
                    }).then((responce) => {
                        return responce.json();
                    }).then((LikeData)=>{
                        if (LikeData.ok === 1) {
                            $(`#${likeId}`).attr('src', 'img/liked.png');
                            act = 'like';
                            getPInfo(data, likedBy);
                        }
                    });
                }
            });
            /**/
        });
    };
    // comment functionaltes section
    //----------------------------------------
    // comment bodies
    const comBodLyt = (coms, realN, cids, slc) => { 
        var path = '';
        if (realN.profile_pic == 'none') {
            path = 'img/profb.png';
        }else {
            path = `${realN.profile_pic.path}`;
        }
    return  `
    <div id="${cids.comBodId}" class="commentBodySec" style="width:100%;">
        <div style="width:65%; margin:5px; box-shadow:0px 0px 20px -10px #1a1a1a; border-radius:5px;">
            <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:white; border-bottom:solid 1px #dddddd;">
                <div style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="font-size:10px; margin: 0px; padding:1px; float: left; color:skyblue;">${realN.user_name}</p>
                <p style="font-size:8px; margin: 0px; padding:2px; float: right; color:grey;" id="${cids.dateFlwCom}"></p>
            </div>
            <div class="" style="width:100%; background-color:white;">
                <p class="cmntShrt" style="font-size:13px; color:grey; margin: 0px; padding:1px;">${slc}</p>
            </div>
            <div style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: white; height:20px;">
                <p style="float:left; color:skyblue; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;">reply</p>
                <span style="float: right; color: orange; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;" id="${cids.delId}">&times;</spa>
            </div>
        </div>
    </div>
    `};
    const comBodDrk = (coms, realN, cids, slc) => { 
        var path = '';
        if (realN.profile_pic == 'none') {
            path = 'img/profb.png';
        }else {
            path = `${realN.profile_pic.path}`;
        }
    return `
    <div id="${cids.comBodId}" style="width:100%;">
        <div class="commentBodySec" style="width:65%; margin:5px; box-shadow:0px 0px 20px -10px black; border-radius:5px;">
            <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:#1a1a1a;">
                <div style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="font-size:10px; margin: 0px; padding:1px; float: left; color:skyblue;">${realN.user_name}</p>
                <p style="font-size:8px; margin: 0px; padding:2px; float: right; color:silver;" id="${cids.dateFlwCom}"></p>
            </div>
            <div class="" style="width:100%; background-color:#262626;">
                <p class="cmntShrt" style="font-size:13px; color:grey; margin: 0px; padding:1px;">${slc}</p>
            </div>
            <div style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: #262626; height:20px;">
                <p style="float:left; color:skyblue; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;">reply</p>
                <span style="float: right;color: red; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;" id="${cids.delId}">&times;</spa>
            </div>
        </div>
    </div>
    `};
    // refresh comment length and img
    const rfrshComs = (data, udata, openCom, comntLen) => {
        fetch( `/shop/comments/${data._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((comData)=>{
            // comments length
            $(`#${comntLen}`).text(comData.length);
            if (comData.length > 0) {
                $(`#${comntLen}`).css('display', 'inline-block');
                for (let i = 0; i < comData.length; i++) {
                    if (comData[i].user == udata._id) {
                        $(`#${openCom}`).attr('src', 'img/commentd.png');
                    }else {
                        $(`#${openCom}`).attr('src', 'img/comment.png');
                    }
                }
            }else {
                $(`#${openCom}`).attr('src', 'img/comment.png');
                $(`#${comntLen}`).css('display', 'none');
            }
        });
    };
    // extract comments and apply funcs
    const comsFuncs = (data, udata, openCom, comBod, bodyId, comFlow, comntLen) => {
        fetch( `/shop/comments/${data._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((comData)=>{
            $('.commentBodySec').remove();
            // comments length
            $(`#${comntLen}`).text(comData.length);
            if (comData.length > 0) {
                $(`#${comntLen}`).css('display', 'inline-block');
                for (let i = 0; i < comData.length; i++) {
                    const len = i;
                    displayComs(comData[i], len);
                    // comments img
                    if (comData[i].user == udata._id) {
                        $(`#${openCom}`).attr('src', 'img/commentd.png');
                    }else {
                        $(`#${openCom}`).attr('src', 'img/comment.png');
                    }
                }
            }else {
                $(`#${openCom}`).attr('src', 'img/comment.png');
                $(`#${comntLen}`).css('display', 'none');
            }
            
        });

        // del com func
        const delCom = (coms, delId, comBodId) => {
            const delBtn = $(`#${delId}`);
            delBtn.click(function() {
                fetch(`/shop/remComment/${data._id}`, { method: 'put', body: JSON.stringify({ comments: coms }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((deldata)=>{
                    if (deldata) {
                        var act = 'del-coment';
                        if (data.type == 'User') {
                            likeNoti(data, udata, act, coms.date);
                        }
                        rfrshComs(data, udata, openCom, comntLen);
                        $(`#${comBodId}`).remove();
                    }
                });
            });
        };
        // disp/not rem but
        const dispRem = (data, coms, delId, comBodId) => {
            if (data.user == udata._id && coms.user == udata._id) {
                $(`#${delId}`).css('display', 'block');
            }
            if (data.user !== udata._id && coms.user == udata._id) {
                $(`#${delId}`).css('display', 'block');
            }
            if (data.user !== udata._id && coms.user !== udata._id) {
                $(`#${delId}`).css('display', 'none');
            }
        };
        const comsIds = (len) => {
            return {
                delId: 'delComId_' + len,
                comBodId: 'comBodId_' + len,
                dateFlwCom: 'dateFlwCom_' + len
            }
        };
        const displayComs = (coms, len) => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                const cids = comsIds(len);
                var realN = '';
                fetch(`/shop/searchUsers`, { method: 'post', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: coms.user }) }).then((response)=>{
                    return response.json();
                }).then((cdata)=>{
                    if (cdata) {
                        if(mode === 'light') {
                            if (coms.comment.length>30) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                $(`#${comFlow}`).prepend(comBodLyt(coms, cdata, cids, slc));
                            }else {
                                var slc = coms.comment;
                                $(`#${comFlow}`).prepend(comBodLyt(coms, cdata, cids, slc));
                            }
                        }else {
                            if (coms.comment.length>30) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                $(`#${comFlow}`).prepend(comBodDrk(coms, cdata, cids, slc));
                            }else {
                                var slc = coms.comment;
                                $(`#${comFlow}`).prepend(comBodDrk(coms, cdata, cids, slc));
                            }
                        }
                        smartDate(coms, cids.dateFlwCom);
                        delCom(coms, cids.delId, cids.comBodId);
                        dispRem(data, coms, cids.delId, cids.comBodId );
                        commentImg(data, udata, openCom, comntLen);
                    }
                });
            });
        };
    };
    // comments img
    const commentImg = (data, udata, openCom, comntLen) => {
        if (data.comments.length > 0) {
            $(`#${comntLen}`).css('display', 'inline-block');
            var inot = '';
            for (let i = 0; i < data.comments.length; i++) {
                if (data.comments[i].user == udata._id) {
                    inot = 'exists';
                    $(`#${openCom}`).attr('src', 'img/commentd.png');
                }
            }
            if(inot == '') {
                $(`#${openCom}`).attr('src', 'img/comment.png');
            }
        } else {
            $(`#${comntLen}`).css('display', 'none');
        }
    }
    // get existing comments
    const commentSec = (data, udata, openCom, comBod, bodyId, comFlow, comntLen) => {
        
        let openCombtn = $(`#${openCom}`);
        openCombtn.click(function() {
            comsFuncs(data, udata, openCom, comBod, bodyId, comFlow, comntLen);
            $('.postBodyCon, .bodyComNoti').slideUp();
            $(`#${comBod}`).slideDown();
        });
        
    };
    // close comment section
    const closeComment = (data, closeCom, comBod) => {
        let clseCombtn = $(`#${closeCom}`);
        clseCombtn.click(function() {
            $(`#${comBod}`).slideUp();
        });
    };
    // push comment functions
    const pushComment = (data, udata, comBod, bodyId, comIn, comBt, comFlow, openCom, cmntBy, comntLen) => {
        let pushCom = $(`#${comBt}`);
        let comInput = $(`#${comIn}`);
        pushCom.click(function(){
            if (comInput.val() !== '') {
                    var dateNow = [year, day, month, hour, minute, secnds];
                    var mth = Math.random();var strn = mth.toString();var dif = strn.slice(2, mth.length);
                    fetch(`/shop/comment/${data._id}`, { method: 'put', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({
                         user: udata._id, comment: comInput.val(), date: [year, day, month, hour, minute, secnds], replies: [], id: dif
                    }) }).then((response)=>{
                        return response.json();
                    }).then((cdata)=>{
                        if (cdata.ok == 1) {
                            $(`#${comntLen}`).css('display', 'inline-block');
                            var act = 'coment';
                            if (data.type == 'User') {
                                likeNoti(data, udata, act, dateNow);
                            }
                            comsFuncs(data, udata, openCom, comBod, bodyId, comFlow, comntLen);
                        }
                    });
            }else {
                $($(`#${comIn}`)).click();
            }
        });
    };

    // share
    const shrBd = (user, path, ids) => {
        return `
        <div class="shrPstBod" id="${ids.shrPstBodyId}" style="width:95%; margin:auto; height:35px; border-radius:5px; margin-top:10px;">
            <div style="width:30%; height:100%; float:left;">
                <div style="width:25px; height:25px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:50%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${user}"><p style="color:skyblue; padding:2.5px; margin:5px; font-size:12px;">${user}</p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p style="text-align:center; margin:2.5px;">
                    <img id="${ids.shrPstSndBtn}" src="img/send.png" width="20px" height:="20px" style="margin:2.5px; cursor:pointer; display:none;">
                    <button id="${ids.shrPstRtrnBtn}" class="btn btn-default btn-xs" style="color:orange; background-color:transparent; border:solid 1px darkorange; border-radius:5px; margin:2.5px; display:none;">sent</button>
                </p>
            </div>
        </div>
        `
    };
    // share funcs
    const sharePst = (data, udata, shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls) => {

        // space-under
        $(`#${shrPstSrch}`).on('input', function(key){
            var value = $(this).val();
            $(this).val(value.replace(/ /g, '_'));
        });

        //opn
        $(`#${shrPst}`).click(function() {
            $('.postBodyCon').slideUp();
            $(`#${shrPstBd}`).slideDown();
            $('.shrPstBod').remove();
            if ($(`#${shrPstSrch}`).val() == '') {
                flowknwn();
            }else {
                flowFrndsrch($(`#${shrPstSrch}`).val());
            }
        });
        //cls
        $(`#${shrPstCls}`).click(function() {
            $(`#${shrPstBd}`).slideUp();
        });

        const chkMdeShr = () => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $('.shrPstBod').css('border', 'solid 1px #dddddd');
                    $('.shrPstBod').css('background-color', 'white');
                }else {
                    $('.shrPstBod').css('border', 'solid 1px #404040');
                    $('.shrPstBod').css('background-color', '#1a1a1a');
                }
            });
        }

        // value search
        $(`#${shrPstSrch}`).keyup(()=>{
            $('.shrPstBod').remove();
            if ($(`#${shrPstSrch}`).val() == '') {
                flowknwn();
            }else {
                flowFrndsrch($(`#${shrPstSrch}`).val());
            }
        });
        const flowFrndsrch = (tagSrc) => {
            fetch('/searcher/searchFrnd', {
                method: 'post',
                body: JSON.stringify({ srch: tagSrc }),
                headers: { "Content-type" : "application/json; charset=utf-8" }
            }).then((response) => { 
                return response.json();
            }).then((data)=>{
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    $('.shrPstBod').remove();
                    for (let i = 0; i < data.length; i++) {
                    
                        var usr = ''; var genUsrr = '';
                        for (let z = 0; z < users.length; z++) {
                            if (data[i]._id == users[z]._id) {
                                genUsrr = users[z]
                                usr = users[z].user_name;
                            }
                        }
                        chkMdeShr()
                        passMe(usr, genUsrr);

                        
                    }
                });
                /*$('.tagUflowBod, .checkTagBody').remove();
                for (let i = 0; i < data.length; i++) {
                    if (pass.length > 0) {
                        lon(data[i]._id);
                    }else {
                        dispTags(data[i]._id);
                    }
                }*/
    
            });
        };

        // create share Isd
        const createShrIds = (user) => {
            return {
                shrPstSndBtn: 'shrPstSndBtn_' + user,
                shrPstBodyId: 'shrPstBodyId_' + user,
                shrPstRtrnBtn: 'shrPstRtrnBtn_' + user
            }
        };
        const flowknwn = () => {
            for (let z = 0; z < udata.following.length; z++) {
                for (let x = 0; x < udata.chats.length; x++) {
                    
                    if (udata.following[z].user == udata.chats[x].user) {
                        
                        fetch('/getUsers', { method: 'get' }).then((responce)=>{
                            return responce.json();
                        }).then((users)=>{
                            
                            var usr = ''; var genUsrr = '';
                            for (let i = 0; i < users.length; i++) {
                                if (udata.following[z].user == users[i]._id && udata.chats[x].user == users[i]._id) {
                                    genUsrr = users[i]
                                    usr = users[i].user_name;
                                }
                            }
                            chkMdeShr()
                            passMe(usr, genUsrr);
                        });

                    }

                }
            }
        };
        // pass con
        const passMe = (usr, genUsrr) => {
            var user = '';
            if (usr.length > 15) {
                user = usr.slice(0, 15)+'..';
            }else {
                user = usr;
            }
            var path = '';
            if (genUsrr.profile_pic == 'none') {
                path = 'img/profb.png';
            }else {
                path = `${genUsrr.profile_pic.path}`;
            }
            const ids = createShrIds(genUsrr._id);
            $(`#${shrPstFlw}`).prepend(shrBd(user, path, ids));
            shrFuncs(user, genUsrr, ids.shrPstSndBtn, ids.shrPstRtrnBtn);
            if (udata.user_name == usr) {
                $(`#${ids.shrPstBodyId}`).remove();
            }
        };
        // UN/SEND
        const shrFuncs = (user, genUsr, send, rtrn) => {
            // UI check
            if (genUsr.notifications.length > 0) {
                var flag = '';
                for (let i = 0; i < genUsr.notifications.length; i++) {
                    if (genUsr.notifications[i].noti_type == 'shared_post' && genUsr.notifications[i].post == data._id && genUsr.notifications[i].user == udata._id) {
                        flag = 'white';
                        $(`#${rtrn}`).css('display', 'inline');
                    }
                }
                if (flag == '') {
                    $(`#${send}`).css('display', 'inline');
                }
            }else {
                $(`#${send}`).css('display', 'inline');
            }

            //BTNS - send
            $(`#${send}`).click(function() {
                var act = 'shr';
                var dateNow = [year, day, month, hour, minute, secnds];
                tagNoti(genUsr, data, udata, act, dateNow);
            });

        };

    };

    // top opt
    // post edt config
    const postPop = (data, udata, openPopId, popBodId, clsePopId, reprtId) => {
        const openBtn = $(`.${openPopId}`);
        const clseBtn = $(`#${clsePopId}`);
                
        $(`#${reprtId}`).css('display', 'block');

        //open
        $(openBtn).click(()=>{
            $(`#${popBodId}`).slideDown();
        });
        //close
        $(clseBtn).click(()=>{
            $(`#${popBodId}`).slideUp();
        })
    };

    // report
    // report jrn
    const reportJrn = (data, udata, reprtId, repConId, inApRep, abusRep, clsRep) => {
        // opn/ls
        $(`#${reprtId}`).click(()=>{
            $(`#${reprtId}`).slideUp();
            $(`#${repConId}`).slideDown();
        });
        $(`#${clsRep}`).click(()=>{
            $(`#${repConId}`).slideUp();
            $(`#${reprtId}`).slideDown();
        });

        // snd inap
        $(`#${inApRep}`).click(()=>{
           var con = 'Inappropriate content'; 
           pushRep(con);
        });
        // snd abus
        $(`#${abusRep}`).click(()=>{
            var con = 'Inappropriate content'; 
            pushRep(con);
        });

        // report func
        const pushRep = (con) => {

            var nme = '';
            if (data.type == 'User') {
                nme = data.user;
            }else {
                nme = data.mail;
            }
            
            fetch('/post/reportJrn', {
                method: 'post',
                body: JSON.stringify({ content: con, type: 'top_shop', from: udata._id, by: nme, journal: data._id, date: [year, day, month, hour, minute]  }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if (data) {
                    alert('report sent');
                    $(`#${repConId}`).slideUp();
                    $(`#${reprtId}`).slideDown();
                }
            });
            
        };

    };

    // smart date
    // SmartDate Func
    const smartDate = (data, dateFlow) => {
        
        if (data.date[0] !== year) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[0]}`);
        }
        if (data.date[0] == year && data.date[2] == month && data.date[1] == day) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px;">Today.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] == 1) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px;">Yesterday.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] !== 1 && data.date[1] !== day) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] !== month) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }

    }; 
 
    // build ids for functionalities
    const buildIDS = (data) => {
        return {
            // smart date func
            dateFlow: 'dateFlow_' + data._id, 
            dateFlowAut: 'dateFlowAut_' + data._id, 
            // like func
            likeId : 'like_' + data._id,
            likedBy: 'liked_'+ data._id,
            // comnt func
            openCom: 'openCom_' + data._id,
            comBod: 'comBod_' + data._id,
            closeCom: 'closeCom_' + data._id,
            comIn: 'comIn_' + data._id,
            comBt: 'comBtn_' + data._id,
            comFlow: 'comFlow_' + data._id,
            cmntBy: 'cmntBy_' + data._id,
            comntLen: 'cmntLen_' + data._id,
            // share pst funcs
            shrPst: 'shrPst_' + data._id,
            shrPstBd: 'shrPstBd_' + data._id,
            shrPstFlw: 'shrPstFlw_' + data._id,
            shrPstCls: 'shrPstCls_' + data._id,
            shrPstSrch: 'shrPstSrch_' + data._id,
            // img func
            ImgId: 'ImgId_' + data._id,
            imSldId: 'imgSld_' + data._id,
            rightId: 'rghId_' + data._id,
            leftId: 'lftId_' + data._id,
            imgNow: 'imgNow_' + data._id,
            imgAll: 'imgAll_' + data._id,
            // video func
            vidId: 'vidId_' + data._id,
            vidCntrlDiv: 'vidCntrlDiv_' + data._id,
            vidPlay: 'vidPlay_' + data._id,
            vidPause: 'vidPause_' + data._id,
            vidStop: 'vidStop_' + data._id,
            vidMute: 'vidMute_' + data._id,
            vidCrntT: 'vidCrntT_' + data._id,
            vidOrgT: 'vidOrgT_' + data._id,
            // post pop up funcs
            openPopId: 'openPop_' + data._id,
            popBodId: 'popBod_' + data._id,
            clsePopId: 'clsePop_' + data._id,
            // report post func
            reprtId: 'reprtId_' + data._id,
            repConId: 'repConId_' + data._id,
            inApRep: 'inApRep_' + data._id,
            abusRep: 'abusRep_' + data._id,
            clsRep: 'clsRep_' + data._id,
        }
    }
    // display tops
    const dispTops = (top, udata, users) => {
        let ids = buildIDS(top);
        checkMode();
        $('#dropbox-strindextops').append(shopBod(top, ids));
        // with/without imgs
        if (top.img.length > 0) {
            ImgFunc(top, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // with a video
        if (top.vid !== '') {
            VidFunc(top, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
        }
        // functionalities
        LikePost(top, udata, ids.likeId, ids.likedBy);
        likedImg(top, udata, ids.likeId, ids.likedBy);
        // comments functionalities
        commentSec(top, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
        commentImg(top, udata, ids.openCom, ids.comntLen);
        closeComment(top, ids.closeCom, ids.comBod);
        pushComment(top, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
        // share funcs
        sharePst(top, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
        // post opt funcs
        postPop(top, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId);
        // report p
        reportJrn(top, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
        // edit p
        smartDate(top, ids.dateFlow);
    };

}
Start();
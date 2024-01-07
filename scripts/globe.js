function clsAlphaNoOnly (e) {  // Accept only alpha numerics, no special characters 
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
  
    e.preventDefault();
    return false;
  }
  function clsAlphaNoOnly2 () {  // Accept only alpha numerics, no special characters 
    return clsAlphaNoOnly (this.event); // window.event
  }
 function Globe() {

    const magicNumbers = (tId, num) => {
        // var curn
        var curn = num;
        if (curn > 9999) {
            // curn - thousands
            if (curn < 1000000) {
                // ten thousands
                if (curn < 100000) {
                    var prnt = curn.toString().slice(0, 2);
                    var prnt1 = curn.toString().slice(2, 3);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}k`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}k`);
                    }
                }
                // hundred thousands
                if (curn > 99999) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}k`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}k`);
                    }
                }
            }
            // curn - millions
            if (curn < 1000000000 && curn >= 1000000) {
                // millions
                if (curn < 10000000) {
                    var prnt = curn.toString().slice(0, 1);
                    var prnt1 = curn.toString().slice(1, 2);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}m`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}m`);
                    }
                }
                // ten millions
                if (curn > 9999999 && curn < 100000000) {
                    var prnt = curn.toString().slice(0, 2);
                    var prnt1 = curn.toString().slice(2, 3);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}m`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}m`);
                    }
                }  
                // hundred millions
                if (curn > 99999999) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}m`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}m`);
                    }
                }  
            }
            // curn - billions
            if (curn >= 1000000000) {
                // billions
                if (curn < 10000000000) {
                    var prnt = curn.toString().slice(0, 1);
                    var prnt1 = curn.toString().slice(1, 2);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}b`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }
                // ten billions
                if (curn > 9999999999 && curn < 100000000000) {
                    var prnt = curn.toString().slice(0, 2);
                    var prnt1 = curn.toString().slice(2, 3);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}b`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }  
                // hundred billions
                if (curn >= 100000000000) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`${tId}`).text(`${prnt}b`);
                    }else {
                        $(`${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }  
            }
        }else {
            $(`${tId}`).text(num);
        }

    };
     
     // checkk
     const getUser = () => {
         
        fetch('/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((data) => {
            if (data == '') {
                location.replace('/Login');
            } else {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json()
                }).then((data2) => { 
                    if (data2 == 'none') {
                        location.replace('/Login');
                    }else {
                        if (data2.user_type.type) {
                            $('#pblsSP').text('Manage Author Settings');
                            if (data2.user_type.status == 'on') {
                                $('.usrAutUiBodss, .usrAutUiBodssN').fadeIn();
                                $('#profInfoCol').css('display', 'none');
                                const hive = (hi) => {
                                    return `
                                    <div class="hiveBody" id="" style="float:left; margin:3px; height:25px; border-radius:15px; border:none; margin-bottom:5px;z">
                                        <p style="float:left; margin:3px; padding:2px; color:rgb(255, 149, 0); font-size:11.5px; margin-top:3px;"> ${hi} </p>
                                    </div>
                                    `
                                }
                                console.log();
                                for (let i = 0; i < data2.user_type.categories.length; i++) {
                                    $('.drpCatsAtt').append(hive(data2.user_type.categories[i]));
                                    if (data2.mode == 'light') {
                                        $('.hiveBody').css('background-color', 'white');
                                    } else {
                                        $('.hiveBody').css('background-color', '#262626');
                                    }
                                }
                                magicNumbers('.subsLen', data2.user_type.subscribers.length);
                                if (data2.user_type.background == 'none') {
                                    $('#autBckImgCon').css('background-image', `url(img/cb2.png)`);
                                }else {
                                    $('#autBckImgCon').css('background-image', `url(${data2.user_type.background.path})`);
                                    $('#autBckImgCon').addClass(`${data2.user_type.background.class}`);
                                }
                                if (data2.mode == 'light') {
                                    $('#profPicdivA').css('background-color', 'white');
                                    $('#profPicdivA').css('border', 'solid 3px #f0f0f0');
                                } else {
                                    $('#profPicdivA').css('background-color', '#1a1a1a');
                                    $('#profPicdivA').css('border', 'solid 3px #404040');
                                }
                            }
                            // get location
                            fetch('/lclJs', { method: 'get' }).then((res)=>{
                                return res.json();
                            }).then((tpe)=>{
                                if (tpe == 'pf') {
                                    const pub = () => {
                                        return `
                                        <div class="row all_right_lsts clearfix visible-lg" id="">
                                            <!-- settin the position -->
                                            <br>
                                            <div class="col-xs-12 col-md-12">
                                                <div class="row">
                                                    <div class="col-xs-12 col-lg-12">
                                                        <div id="pblshAskCon" style="width:100%; border-radius:5px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.4);"> 
                                                            <br>
                                                            <div style="margin:auto; margin-top:-10px; width:65px; height:65px; background-image:url(img/authand.png); background-size:100% 100%;"></div>
                                                            <p class="p_subHs" style="text-align:center; font-size:16.5px; margin:0px; padding:5px;">Upload Journals & books as a threadal publisher!</p>
                                                            <p style="text-align:center; margin:0px; padding:5px;">
                                                                <img src="img/addPlaylists.png" width="35px" height="35px" style="cursor:pointer;" id="opn_pubCrt">
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `
                                    }
                                    $('#lsts-pc').after(pub());
                                    if (data2.mode == 'light') {
                                        $('#pblshAskCon').css('background-color', 'white');
                                        $('.p_subHs').css('color', 'grey');
                                    } else {
                                        $('#pblshAskCon').css('background-color', '#262626');
                                        $('.p_subHs').css('color', 'silver');
                                    }
                                    $('#opn_pubCrt').click(()=>{
                                        var targetDate = new Date();
                                        targetDate.setSeconds(targetDate.getSeconds() + 1);
                                        var countDownDate = targetDate.getTime();
                                        var x = setInterval(function() {
                                            $('#openwj').click();
                                            var now = new Date().getTime();
                                            // Find the distance between now and the count down date
                                            var distance = countDownDate - now;
                                            // check duration to currentime
                                            if (distance < 0) {
                                                $('#anavo').click();
                                                clearInterval(x);
                                            }
                                        }, 1000);
                                    });
                                }
                            });
                        }else {
                            $('#pblsSP').text('Upgrade profile to Author Account');
                            // get location
                            fetch('/lclJs', { method: 'get' }).then((res)=>{
                                return res.json();
                            }).then((tpe)=>{
                                if (tpe == 'pf') {
                                    const pub = () => {
                                        return `
                                        <div class="row all_right_lsts clearfix visible-lg" id="">
                                            <!-- settin the position -->
                                            <br>
                                            <div class="col-xs-12 col-md-12">
                                                <div class="row">
                                                    <div class="col-xs-12 col-lg-12">
                                                        <div id="pblshAskCon" style="width:100%; border-radius:5px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.4);"> 
                                                            <br>
                                                            <div style="margin:auto; margin-top:-10px; width:100px; height:100px; background-image:url(img/pblshicon.png); background-size:100% 100%;"></div>
                                                            <p class="p_subHs" style="text-align:center; font-size:16.5px; margin:0px; padding:5px;">Become a threadal author and publish contents and set a subscription for your content access!</p>
                                                            <p style="text-align:center; margin:0px; padding:5px;">
                                                                <a href="/publish" style="text-decoration:none;"><button class="btn btn-default btn-xs uppbl_btn" style="">upgrade</button></a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `
                                    }
                                    $('#lsts-pc').after(pub());
                                    if (data2.mode == 'light') {
                                        $('#pblshAskCon').css('background-color', 'white');
                                        $('.p_subHs').css('color', 'grey');
                                        $('.uppbl_btn').attr('style', 'color:grey; border:solid 1px grey; background-color:transparent;');
                                    } else {
                                        $('#pblshAskCon').css('background-color', '#262626');
                                        $('.p_subHs').css('color', 'silver');
                                        $('.uppbl_btn').attr('style', 'color:silver; border:solid 1px silver; background-color:transparent;');
                                    }
                                }
                            });
                        }
                        $('.profuname').text(data2.user_name);
                        $('.profusername').text(data2.name);
                        $('.mailInf').attr('href', `http://${data2.email}`);
                        $('.statusbod').text(data2.user_status);
                        $('#getFlwnMe').text(data2.following.length);
                        $('#getFlwrsMe').text(data2.followers.length);
                        var ttF = data2.following.length+data2.followers.length;
                        magicNumbers('.frndLen', ttF);
                        if (data2.verification == "on") {
                            $('#verifTag').css("display", "inline");
                        }
                        if (data2.profile_pic == 'none') {
                            $('#profpicdiv, #profPicdivA, #profnav, #profnavXs').css('background-image', 'url(img/profpic.png)');
                            $('#profpicdiv, #profnav, #profnavXs, #profPicdivA').css('background-size', '100% 100%');
                        }else {
                            $('#profpicdiv, #profPicdivA, #profnav, #profnavXs').css('background-image', `url(${data2.profile_pic.path})`);
                            $('#profpicdiv, #profnav, #profnavXs, #profPicdivA').addClass(`${data2.profile_pic.class}`);
                            $('#profpicdiv, #profnav, #profnavXs, #profPicdivA').css('background-size', 'cover');
                        }
                    }
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((psts)=>{
                        var reads = 0;
                        for (let i = 0; i < psts.length; i++) {
                            if (psts[i].content_type == 'journal' && psts[i].user == data2._id) {
                                if (psts[i].body !== '') {
                                    reads = reads+psts[i].reads.length;
                                }
                            }
                        }
                        $('#myReadsLen').text(reads);
                    });
                });
            }
        });
    };
    getUser();

     // user random
     var randis = `<div style="display:none; position:fixed; z-index:2;"><p id="randis"><p/></div>`;
     $('#fgspan').before(randis);

     // global style
     //$('body').css('font-family', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
     $('a').css('text-decoration', 'none');
 }
 Globe();
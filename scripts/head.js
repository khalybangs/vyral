function Header() {
    
    var setData = () => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data)=>{ 

            //$('#goToProfb, #goToProfx').attr('href', '/'+data.user_name); 
            $('#goToProfb, #goToProfx').click(()=>{
                var curnt = 'home';
                var take = 'prf';
                funCer(curnt, take);
            });

            $('#tkeMeToCht, #tkeMeToCht-xs').click(()=>{
                var curnt = 'chat';
                var take = 'cht';
                funCer(curnt, take);
            });

            $('#mainButb, #mainButx').click(()=>{
                var curnt = 'home';
                var take = 'hme';
                funCer(curnt, take);
            });

            // crt alocator
            const funCer = (curnt, take) => {
                fetch('/post/chngCart', { method: 'post', body: JSON.stringify({ current: curnt }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=>{
                    return res.json();
                }).then((sent)=>{
                    if (sent) {
                        if (take == 'prf') {
                            location.replace(`/${data.user_name}`);
                        }
                        if (take == 'cht') {
                            location.replace(`/chat`);
                        }
                        if (take == 'hme') {
                            location.replace(`/home`);
                        }
                    }
                });
            };
            
        });
    };
    setData();
    var mhd = `
                <div class="row">
                <div class="clearfix visible-lg col-lg-12" id="topnav" style="height:40px; position:fixed; z-index:3;">
                    <div style="float:left; margin:5px;">
                        <a id="mainButb"><div alt="" style="background-image:url(img/greyL.png); background-size:100% 100%; float:left; width:25px; height:25px; cursor:pointer; margin-right:50px;"></div></a>
                        <div id="navopener" alt="" style="background-image:url(img/log4.png); background-size:100% 100%; float:left; margin-left:30px; width:23px; height:23px; cursor:pointer;"></div>
                        <a id="goToProfb"><div id="profnav" alt="" style="margin-left:30px; float:left; width:25px; height:25px; cursor:pointer;"></div></a>
                        <!--<img id="openwj" src="img/wa.png" alt="" width="25px" height="25px" style="margin-left:30px; cursor:pointer;">-->
                        <div id="openNotilg" alt="" style="float:left; margin-left:30px; width:23px; height:23px; cursor:pointer;"></div>
                        <!--i id="notiNot" style="float:left; margin:1px; font-size:11px; color:darkorange;"></i-->
                        <div id="tkeMeToCht" class="tkeMeToCht" alt="" style="float:left; background-image:url(img/chat.png); background-size:100% 100%; margin-left:30px; width:23px; height:23px; cursor:pointer;"></div>
                    </div>
                    <div style="float:right; margin:5px;">
                        <div style="float:left; width:50px;">
                            <img id="setopid" src="img/light.png" alt="" width="20px" height="20px" style="margin-right:20px; margin-top:3.5px; cursor:pointer;">
                            <div id="navd2" style="width:150px; margin-top:10px; background-color:white; border-radius:5px; display:none; position:fixed; z-index:4;">
                                <p class="p_subHs" style="margin:5px; font-size:12px; cursor:pointer;" id="onDarkN">Dark mode</p>
                                <div id="darknavarea" style="display:none; border-bottom-left-radius:5px; border-bottom-right-radius:5px; height:30px;">
                                    <div id="darkBgCon" style="border-radius:5px; width:40px; height:15px; margin:5px; float:left;">
                                        <div id="darkg" onclick="PrivButOn()" class="" style="width:20px; height:20px; border-radius:100%; background-color:#dddddd; margin-top:-3px; border:solid 0.5px #dddddd; cursor:pointer; float:left;"></div>
                                        <div id="darkb" onclick="PrivButOff()" class="" style="width:20px; height:20px; border-radius:100%; background-color:skyblue; margin-top:-3px; border:solid 0.5px lightblue; cursor:pointer; float:right; display:none;"></div>
                                    </div>
                                    <img id="clseSmDrk" src="img/up.png" width="10px" height:8px; style="float:right; margin:5px; cursor:pointer;">
                                </div>
                                <!-- <p style="margin:5px; color:grey; font-size:12px; cursor:pointer;">Set account to private</p> -->
                            </div>
                        </div>
                        <div style="float:left; width:50px;">
                            <img id="locateid" src="img/locate.png" alt="" width="12.5px" height="20px" style="margin-right:20px; cursor:pointer;">
                            <div id="navd1" style="width:100px; margin-top:10px; border-radius:5px; display:none; position:fixed; z-index:4;">
                                <p class="countLoc p_subHs" style="margin:5px; font-size:12px; cursor:pointer;"></p>
                                <p class="contiLoc p_subHs" style="margin:5px; font-size:12px; cursor:pointer;"></p>
                                <p class="worldLoc p_subHs" style="margin:5px; font-size:12px; cursor:pointer;">International</p>
                            </div>
                        </div>
                        <form action="/logout" method="post" style="display: none;">
                            <button style="margin:5px; font-size:13px; color:red;" id="logOutMain">Logout</button>
                        </form>
                        <p style="color:orangered; font-size:12px; cursor:pointer; float:left; font-weight:normal;" id="logOut">logout</p>
                    </div>
                    <div id="openwj" style="bottom:0; left:0; display:none; position:fixed; z-index:3; border-radius:100%; width:50px; height:50px; margin:30px; box-shadow:0px 0px 9px -1px rgba(0, 0, 0, 0.25); cursor:pointer;">
                        <p style="text-align:center; margin:8px;">
                            <img src="img/wa.png" width="30px" height="30px" style:;>
                        </p>
                    </div>
                </div>
                <!-- navbar drop down bellow -->
                <div class="col-lg-7" style="position:fixed; z-index:4; margin:10px;">
                    <div id="navmain" style="border-radius:5px; height:50px; width:85 %; display:none;">
                            <img id="ind" class="indexs" src="img/home.png" alt="" width="25px" height="25px" style="margin:10px; cursor:pointer;">
                            <img id="ind2" src="img/home3.png" alt="" width="25px" height="25px" style="margin:10px; cursor:pointer;">
                            <!-- trending button done -->
                            <p class="p_divider" style="font-size:20px; Display:inline;"> | </p>
                            <span id="dropBgNav"></span>
                            <img id="closenav" src="img/up.png" alt="" width="20px" height="10px" style="margin:10px; margin-top:17.5px; float:right; cursor:pointer;"> 
                    </div>
                </div>
            </div>
            <div class="clearfix visible-lg" style="height:50px; width:100%;"></div>

    `;
    $('#hspan').before(mhd);
    /**
        <button id="mus"  type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Music</button>
        <!-- music buttons done -->
        <button id="pol" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Politics</button>
        <!-- politics done -->
        <button id="spo" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Sports</button>
        <!-- sports done -->
        <button id="ent" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Entertainment</button>
        <!-- entertainment done -->
        <button id="fas" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Fashion</button>
        <!-- fashion done -->
        <button id="bus" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Business</button>
        <!-- business done -->
        <button id="peo" type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">People</button>
        <!-- people done -->
        <button type="button" id="art" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Art</button>
        <!-- art done
        <a id="tic" href="/articles"><button type="button" name="button" class="btn btn-warning btn-xs" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">Articles</button></a> -->
        <!-- articles done -->
        */

    // check wether post-btn shld show
    fetch('/post/getCart', { method: 'get' }).then((res)=>{
        return res.json();
    }).then((cart)=>{
        if (cart == 'home') {
            
        }
    });

    // nav opener/close
    $('#navopener').click(function(){
        $('#navmain').slideDown();
        $('#navd2').fadeOut();
        $('#navd1').fadeOut();
    });
    $('#closenav').click(function(){
        $('#navmain').slideUp();
        $('#navd2').fadeOut();
        $('#navd1').fadeOut();
    });

    // top navbar dropdon functions
    $('#locateid').click(function(){
        $('#navd1').fadeIn();
        $('#navd2').fadeOut();
    });
    $('#setopid').click(function(){
        $('#navd2').fadeIn();
        $('#navd1').fadeOut();
    });

    // close dark
    $('#clseSmDrk').click(()=>{
        $('#darknavarea').slideUp();
    });

    
     // search/explore area functionalities
     $('#srchbtn-xs, #srchbtn').click(function() {
        $('#mainflow').css('display', 'none');
        $('#srchflow').fadeIn();
        $('#srchbtn-xs, #srchbtn').attr('src', 'img/searcheda.png');
     });
     // close search/explore
     $('#closesearch').click(function() {
        $('#mainflow').fadeIn();
        $('#srchflow').css('display', 'none');
        $('#srchbtn-xs, #srchbtn').attr('src', 'img/searcha.png');
     });

    // top navbar settings
    // open write journal area
    $('#openj').click(function() {
        $('#writepc-alert').slideDown();
    })
    
    $('#mainbod').click(function() {
        $('#navd2, #navd1').fadeOut();
    });

    // XS navbar functions
    var xsnav = `
    <div class="row clearfix visible-xs ">
        <div id="nav-xs" class="col-xs-12" style="height:50px; position:fixed; z-index:3;"> 
            <a id="mainButx"><img src="img/name_log2.png" width="90px" height="25px" style="margin-top:10px;"></a>
            <span style="float:right;">
                <div id="srchbtn-xs" alt="" style="background-image:url(img/searcha.png); background-size:100% 100%; float:left; margin-right:20px; margin:5px; width:23px; height:23px; cursor:pointer;"></div>
                <p class="p_divider" style="font-size:20px; float:left; margin-right:7.5px;"> | </p>
                <div id="navopener-xs" alt="" style="background-image:url(img/log4.png); background-size:100% 100%; float:left; margin-right:20px; margin:5px; width:23px; height:23px; cursor:pointer;"></div>
                <a id="goToProfx"><div id="profnavXs" alt="" style="margin-right:20px; margin:5px; float:left; width:25px; height:25px; cursor:pointer;"></div></a>
                <div id="openNotilg2" alt="" style="float:left; margin-right:20px; margin:5px; width:23px; height:23px; cursor:pointer;"></div>
                <div id="tkeMeToCht" class="tkeMeToCht" alt="" style="float:left; margin-right:20px; margin:5px; width:23px; height:23px; cursor:pointer;"></div>
            </span>
        </div>
        <div id="naverxs" class="col-xs-12" style="height:40px; display:none; position:fixed; z-index:4; margin-top:40px;">
            <div class="marg_right_d" style="width:80%; height:100%; float:left; overflow-x:auto;">
                <div style="width:720px; height:100%;">
                    <img id="ind2-xs" src="img/home3.png" alt="" width="25px" height="25px" style="cursor:pointer;">
                    <img id="ind-xs" class="indexs" src="img/home.png" alt="" width="25px" height="25px" style="margin:10px; cursor:pointer;"> 
                    <!-- trending button done -->
                    <!-- trending button done -->
                    <p class="p_divider" style="font-size:20px; Display:inline;"> | </p>
                    <span id="dropBgNav-xs"></span>
                </div>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p style="margin:5px; text-align:center;">
                <img src="img/up.png" alt="" width="30px" height="20px" id="closenaver">
                </p>
            </div>
        </div>
        <div id="minnaver" class="col-xs-12" style="height:40px; position:fixed; z-index:3; margin-top:40px;">
            
        </div>
        <div id="headPusher-xs" class="" style="height:100px; width:100%;">

        </div>
        <div id="locatecon-xs" style="bottom:0; right:0; position:fixed; z-index:3; border-radius:5px; width:180px; height:125px; margin:10px; box-shadow:0px 0px 9px -1px rgba(0, 0, 0, 0.25); margin-bottom:115px; margin-right:12px; background-color:white; display:none;">
            <div style="width:100%; height:20px;">
                <p style="font-size:15px; text-align:center; margin:2px;" id="closelocate-xs"><img src="img/can.png" width="15px" height="15px"></p>
            </div>
            <p class="countLoc" style="padding:5px; margin:0px; font-size:15px;"></p>
            <p class="contiLoc" style="padding:5px; margin:0px; font-size:15px;"></p>
            <p class="worldLoc" style="padding:5px; margin:0px; font-size:15px;">International</p>
        </div>
        <div id="openlocate-xs" style="bottom:0; right:0; position:fixed; z-index:3; border-radius:100%; width:35px; height:35px; margin:10px; box-shadow:0px 0px 9px -1px rgba(0, 0, 0, 0.25); margin-bottom:65px; margin-right:12px;">
            <p style="text-align:center; margin:6px;">
                <img src="img/locate.png" width="16px" height="23px" style:;>
            </p>
        </div>
        <div id="openwj-xs" style="bottom:0; right:0; position:fixed; z-index:3; border-radius:100%; width:40px; height:40px; margin:10px; box-shadow:0px 0px 9px -1px rgba(0, 0, 0, 0.25);">
            <p style="text-align:center; margin:5px;">
                <img src="img/wa.png" width="25px" height="27px" style:;>
            </p>
        </div>
    </div>
    `;
    $('#hspan').before(xsnav);

    // update buttons
    var jrns = 0; var autJrns = 0; var strn = 0;
    const strtUpd = () => {
        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 5);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {
                jrns = 0; autJrns = 0;
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((udata)=>{
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((data)=>{
                        // displayPosts(data);
                        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                            return response.json();
                        }).then((alldata)=>{
        
                            if (data.length > 0) {
                                for (let i = 0; i < data.length; i++) {
                                    
                                    if (data[i].type == 'User') {
                                        
                                            if (udata.following.length > 0) {
                                                for (let z = 0; z < udata.following.length; z++) {
                                                    if (data[i].user === udata._id) {
                                                        jrns++;
                                                    }
                                                    if (udata.following[z].user === data[i].user) {
                                                        for (let y = 0; y < alldata.length; y++) {
                                                            if (alldata[y]._id == data[i].user) {
                                                                jrns++;
                                                            }
                                                        }
                                                    }
                                                }
                                            }else {
                                                if (data[i].user === udata._id) {
                                                    jrns++;
                                                }
                                            }
                                        
                                    }else{
                                        autJrns++;
                                    }
                                }
                                updtBtns(udata);
                            }else {
                                $('.indexs').attr('src', 'img/home.png');
                                updtBtns(udata);
                            }
        
                        })
                    })
                });
                clearInterval(x);
            }
        }, 1000);
    };
    strtUpd();
    const updtBtns = (udata) => {

        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 2.5);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {

                fetch('/lclJs', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((tpe)=>{

                        // fetch noties
                        const fetchNots = () => {
                            fetch('/notifications/all_notis', { method: 'get' }).then((res)=>{
                                return res.json();
                            }).then((noti)=>{
                                if (noti.new_notis.length > 0 || noti.terms == 'unsigned') {
                                    $('#openNotilg2, #openNotilg').css('background-image', 'url(img/noti.png)');
                                    $('#openNotilg2, #openNotilg').css('background-size', '100% 100%');
                                    fetchChats();
                                }else {
                                    $('#openNotilg2, #openNotilg').css('background-image', 'url(img/notis.png)');
                                    $('#openNotilg2, #openNotilg').css('background-size', '100% 100%');
                                    fetchChats();
                                }
                            });
                        };
                        fetchNots();

                        // fetch chats
                        const fetchChats = () => {
                            if (tpe !== 'cht') {
                                var chk = '';
                                for (let z = 0; z < udata.chats.length; z++) {
                                    if (udata.chats[z].situ == 'rec') {
                                        chk = 'y';
                                        $('.tkeMeToCht').css('background-image', 'url(img/chat2.png)');
                                        $('.tkeMeToCht').css('background-size', '100% 100%');
                                        break;
                                    }
                                }
                                if (chk == '') {
                                    $('.tkeMeToCht').css('background-image', 'url(img/chat.png)');
                                    $('.tkeMeToCht').css('background-size', '100% 100%');
                                }
                                fetchPsts();
                            }else {
                                fetchPsts()
                            }
                        };
                        
                    // fetch posts
                    const fetchPsts = () => {
                        if (tpe !== 'hom') {
                            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                                return response.json();
                            }).then((data)=>{
                                // displayPosts(data);
                                fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                                    return response.json();
                                }).then((alldata)=>{
                                    var jrnsNx = 0; var autJrnsNx = 0;
                                    if (data.length > 0) {
                                        for (let i = 0; i < data.length; i++) {
                                            
                                            if (data[i].type == 'User') {
                                                
                                                    if (udata.following.length > 0) {
                                                        for (let z = 0; z < udata.following.length; z++) {
                                                            if (data[i].user === udata._id) {
                                                                jrnsNx++;
                                                            }
                                                            if (udata.following[z].user === data[i].user) {
                                                                for (let y = 0; y < alldata.length; y++) {
                                                                    if (alldata[y]._id == data[i].user) {
                                                                        jrnsNx++;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }else {
                                                        if (data[i].user === udata._id) {
                                                            jrnsNx++;
                                                        }
                                                    }
                                                
                                            }else{
                                                autJrnsNx++;
                                            }
                                        }
                                        if (jrnsNx > jrns || autJrnsNx > autJrns) {
                                            $('.indexs').attr('src', 'img/home2.png');
                                            strtUpd();
                                        }else {
                                            updtBtns(udata);
                                        }
                                    }else {
                                        updtBtns(udata);
                                    }
                                });
                            });
                        }else {
                            strtUpd();
                        }
                    };

                });

                clearInterval(x);
            };
        });
    };

    // location funcs
    $('#openlocate-xs').click(()=>{
        $('#locatecon-xs').fadeIn();
    });
    $('#closelocate-xs').click(()=>{
        $('#locatecon-xs').fadeOut();
    });
    // CHANGE LOCATE FUNCS
    // get present location
    const Locate = () => {
        fetch('/settings/genLocales', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((lcls)=>{
            fetch('/settings/get_loc', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json()
                }).then((udata)=>{
                    if (udata.profile_pic == 'none') {
                        $('#profnav, #profnavXs').css('background-image', 'url(img/profpic.png)');
                        $('#profnav, #profnavXs').css('background-size', '100% 100%');
                    }else {
                        $('#profnav, #profnavXs').css('background-image', `url(${udata.profile_pic.path})`);
                        $('#profnav, #profnavXs').addClass(`${udata.profile_pic.class}`);
                        $('#profnav, #profnavXs').css('background-size', 'cover');
                        $('#profnav, #profnavXs').css('border-radius', '100%')
                    }
                   for (let i = 0; i < lcls.length; i++) {
                        for (let x = 0; x < lcls[i].Countries.length; x++) {
                            if (lcls[i].Countries[x] == udata.country) {
                                $('.countLoc').text(`${lcls[i].Continent}`);
                                $('.contiLoc').text(`${lcls[i].Countries[x]}`);
                            }
                        }
                    }
                    if (data == 'world') {
                        $('.worldLoc').css('color', 'orange');
                        $('.contiLoc, .countLoc').css('color', 'grey');
                    }
                    if (data == 'continent') {
                        $('.contiLoc').css('color', 'orange');
                        $('.worldLoc, .countLoc').css('color', 'grey');
                    }
                    if (data == 'country') {
                        $('.countLoc').css('color', 'orange');
                        $('.contiLoc, .worldLoc').css('color', 'grey');
                    }
                });
            });
        });
    };
    Locate();
    // world
    $('.worldLoc').click(()=>{
        fetch('/settings/world_loc', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data) {
                location.reload();
            }
        });
    });
    // continent
    $('.contiLoc').click(()=>{
        fetch('/settings/conti_loc', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data) {
                location.reload();
            }
        });
    });
    // country
    $('.countLoc').click(()=>{
        fetch('/settings/count_loc', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data) {
                location.reload();
            }
        });
    });
    

    
    // open navbar XS
    $('#navopener-xs').click(function() {
        $('#naverxs').slideDown();
        $('#navopener-xs').attr('src', 'img/flowed.png');
    });
    // close navbar XS
    $('#closenaver').click(function() {
        $('#naverxs').slideUp();
        $('#navopener-xs').attr('src', 'img/log4.png');
    });
    // open-xs write journal area
    $('#openwj-xs').click(function() {
       // $('#writej-alert').css('margin-top', '-80px');
        $('#container-one').css('filter', 'blur(5px)');
        $('#writej-alert').slideDown();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data2) => { 
            if (data2.user_type.type && data2.user_type.status == 'on') {
                $('#anavo').fadeIn();
            }else {
                $('#anavo').css('display', 'none');
            }
        });
    });
    // open xs chats
    $('#chatsopen-xs').click(function() {
        $('#headPusher-xs, #profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #flowbod, .profbody, #profNavbar').css('display', 'none');
        $('#chatsCol').slideDown();
    });
    // open xsm noti
    $('#notifOpener').click(function() {
        $('#container-noti-xs').css('display', 'block');
        $('#container-one').css('display', 'none');
    });
    // search xs
    $('#srchbtn-xs').click(()=>{
        $('#headPusher-xs, #profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #flowbod, #reaOrStr').css('display', 'none');
        $('#srchflow-al').slideDown();
    });

    //logout mehn!!!!!!!
    $('#logOut').click(function() {
        $('#logOutMain').click();
    })

}
Header();

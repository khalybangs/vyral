function Chats() {
    
    $('#openlocate-xs, openwj-xs').fadeOut();

    /**
     * <div id="${ids.bodyId}" style="margin-top:5px; margin: auto; width: 98%; background-color:#f9f9f9; border-radius:5px; border:solid 1px #f0f0f0; display: none;">
                <!-- chat header cone -->
                <div style="width:100%; height:35px; background-color:white; border-bottom:solid 1px #f0f0f0; border-top-right-radius:5px; border-top-left-radius: 5px;">
                  <div style="width:50%; height:100%; float: left;">
                    <img src="img/profb.png" alt="" width="25px" height="25px" style="margin:5px; cursor: pointer; float:left;">
                    <p style="margin:0px; padding:8px; color:skyblue; font-size:11px; float:left;"></p>
                  </div>    
                  <div style="width:15%; height:100%; float: left;">
                    <img id="${ids.clsBodId}" src="img/can.png" alt="" style="width:20px; height:20px; margin: 5px; cursor: pointer;">
                  </div>    
                  <div style="width:35%; height:100%; float: right;">
                    <img id="${ids.optOpen}" src="img/opt.png" alt="" width="10px" height="25px" style="margin:5px; float:right; cursor: pointer;">
                    <img id="${ids.shareOpen}" src="img/shared.png" alt="" width="23px" height="25px" style="margin:5px; float: right; cursor: pointer;">
                  </div>
                </div>
                <!-- share con -->
                <div id="${ids.shareBd}" class="shreCon" style="width:100%; height:55px; background-color:white; border-bottom:solid 1px #f0f0f0; display:none;">
                    <div style="width:35%; height:100%; float:left;">
                        <div style="width:25px; height:40px; margin:auto; cursor:pointer;"> 
                            <img src="img/imgtype.png" width="100%" height="30px" style="margin-top:5px;">
                        </div>
                        <p style="text-align:center; color:grey; font-size:8px; margin:0px;">Share images</p>
                    </div>
                    <div style="width:30%; height:100%; float:left;">
                        <div style="width:35px; height:40px; margin:auto; cursor:pointer;"> 
                            <img src="img/imgtype2.png" width="100%" height="30px" style="margin-top:5px;">
                        </div>
                        <p style="text-align:center; color:grey; font-size:8px; margin:0px;">Share files</p>
                    </div>
                    <div style="width:35%; height:100%; float:right;">
                        <div style="width:45px; height:40px; margin:auto; cursor:pointer;"> 
                            <img src="img/up.png" width="100%" height="25px" style="margin-top:10px;">
                        </div>
                        <p style="text-align:center; color:orange res; font-size:8px; margin:0px;">Cancel</p>
                    </div>
                </div>
                <!-- options con -->
                <div class="edtPstBd" id="${ids.optBd}" style="width:100%; display:none;">
                    <div class="edtPstFlw" style="width:100%; height:23px;">
                        <p style="text-align:center; margin:0px; padding:0px;"><img id="" src="img/up.png" width="20px" height="10px" style="cursor:pointer;"></p>
                    </div>
                    <!-- delp cons -->
                    <div id="" class="edtPstFlw" style="width:100%; height:28px;">
                        <p id="" style="margin:5px; color:grey; cursor:pointer; font-size:11px;"> Visit profile</p>
                    </div>
                    <!-- hide cons -->
                    <div id="" class="edtPstFlw" style="width:100%; height:28px;">
                        <p id="" style="margin:5px; color:grey; cursor:pointer; font-size:11px;"> <span id="">Block</span> chat</p>
                    </div>
                    <!-- prom cons -->
                    <div id="" class="edtPstFlw" style="width:100%; height:28px;">
                        <p style="margin:5px; color:grey; cursor:pointer; font-size:11px;"> Report user</p>
                    </div>
                    <!-- report cons -->
                    <div id="" class="edtPstFlw" style="width:100%; height:28px;">
                        <p style="margin:5px; color:orangered; cursor:pointer; font-size:11px;"> Delete chat</p>
                    </div>
                </div>
                <!-- chat body con -->    
                <div style="width: 100%; height:180px; overflow-y:auto;" id="${ids.chtFlwBd}" class="theChnCon">
                    <span id="${ids.prepMess}"></span>
                </div>
                <!-- chat text-area con -->
                <div style="height:33px; width:100%; background-color:white; border-top:solid 1px #f0f0f0; border-bottom-right-radius:5px; border-bottom-left-radius: 5px;">
                  <textarea id="${ids.tareaId}" style="width:80%; height:28px; margin:2.5px; background-color:#f9f9f9; border:solid 1px #f0f0f0; border-radius:5px; float:left;"></textarea>
                  <img id="${ids.sendId}" src="img/send.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor: pointer;">
                </div>
            </div>
     */



    // post date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
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

    // mode uncalled
    fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
        if(mode === 'light') {
            $('#minnaver').css('background-color', 'white');
        }
        if (mode === 'dark') {
            $('#minnaver').css('background-color', '#262626');
        }
    });

    // for desktop
    var chatSrch = `
    <div id="chatcon" class="" style="height:35px; width: 100%;">
        <p class="p_subHs" style="font-size:15px; padding:6px; float:left;">Chats <img src="img/chat.png" alt="" width="15px" height="15px"> <i id="chatlen" style="color:orange; font-size:12px;"></i> </p>
        <!-- <img src="img/opt.png" alt="" width="10px" height="20px" style="float:right; margin:5px; cursor:pointer;" id="OpenChatSrh"> -->
        <img src="img/searcheda.png" alt="" width="20px" height="20px" style="float:right; margin:5px; cursor:pointer;" id="openSrchFrnds">
    </div>
    <!-- search container bellow -->
    <div class="" style="height:100%; width: 100%; display:none;" id="frndsSrchr">
        <input type="search" name="" id="chtFrndsSrch" class="p_subHs" style="margin:5px; width:80%; float:left; border: none; background-color:transparent; font-size:13px;" placeholder="search friends">
        <div class="brd-lft" style="float:right; width:40px; height:100%;">
            <img src="img/up.png" alt="" width="20px" height="15px" style="margin:8px; float:right; cursor: pointer;" id="closeFrndsSrchr">
        </div>                    
        <!--<img src="img/searcha.png" alt="" width="20px" height="20px" style="float:right; margin:5px; cursor:pointer;">-->
    </div>
    `;
    var x = window.matchMedia("(max-width: 600px)")
    if (x.matches) {
        $('#minnaver').append(chatSrch);
    } else {
        $('#chtSrchr').append(chatSrch);
    }

    // chats container
    var chatHolder = `
        <div class="row" id="chatsCol">
            <!-- settin the position -->
            <div class="col-xs-12 col-md-12">
                <div class="row">
                <!-- chats heading bellow -->
                
                <!-- chats container bellow -->
                <div id="chatbod-xs" class="col-xs-12">
                    <br>
    
                    <div id="checknum-cht" style="margin:auto; width:150px; cursor:pointer;">
                        <div  style="margin:auto; width:70px; cursor:pointer;">
                            <div style="width:100%; height:70px; border-radius:100%; border:solid 1px #dddddd;">
                                <p class="pL_subHs" style="margin:0px; font-size:50px; text-align:center; margin-top:-5px;">+</p>
                            </div>
                        </div>
                        <p class="p_subHs" style="margin:5px; font-size:12px; text-align:center;"> Add Chats </p>
                    </div>
                    
                    <span id="dropchat"></span>
                    
                    <br>
                </div>
                </div>
            </div>
        </div>
    `;
    $('#').before(chatHolder);

    // fetch user data
    const Start = () => {
        $('.chatHead').remove();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((mainUser) => { addChat(mainUser); getChat(mainUser); checkExists(mainUser);});
    };
    Start();

    const Loader = () => {
        return `
            <div id="flowLoader2" style="margin:auto;">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#dropchat').before(Loader());

    const checkChanges = (me) => {
        var chats = me.chats;
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((user) => { 
            var upChats = user.chats; var change = 'n';
            if (chats.length < upChats.length || chats.length > upChats.length) {
                change = 'y';
            }
            for (let i = 0; i < chats.length; i++) {
                var nowC = upChats.find(z=>z.chat==chats[i].chat);
                if (nowC !== undefined) {
                    if (nowC.situ !== chats[i].situ) {
                        change = 'y';
                    }
                }
            }
            if (change == 'y') {
                getChat(user);
            }else {
                setTimeout(() => {
                    checkChanges(me);
                }, 500);
            }
        });
    }

    // extract chats
    var globLen = 0;
    const getChat = (mainUser) => {
        fetch('/chats/getChats', { method: 'get' }).then((response) => {
            return response.json();
        }).then((data) => {
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                $('.chatHead').remove();
                globLen = 0;
                if (data) {
                    for (let z = 0; z < mainUser.chats.length; z++) {
                        
                        for (let i = 0; i < data.length; i++) {
                            if (data[i]._id == mainUser.chats[z].chat) {
                                $('#checknum-cht').css('display', 'none');
                                displayChats(data[i], mainUser, mainUser.chats[z].situ, users);
                                if (mainUser.chats[z].situ == 'rec') {
                                    globLen += 1;
                                    applyLen();
                                }
                            }
                        }

                    }
                    $('#flowLoader2').slideUp();
                } 
                checkChanges(mainUser);
            });
        });
    };
    const applyLen = () => {
        $('#chatlen').text(globLen);
    };

    // add data
    const addChat = (mainUser) => {
        $('.chatUser').click(function(){
            fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((exdata)=>{
                fetch('/chats/addChat', { method: 'post', body: JSON.stringify({ uone: {user: mainUser._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, utwo: {user: exdata._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, messages: [] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((datam) => { 
                    getChat(mainUser);
                });;
            });
            
        });
    };

    // get mode for design
    const getMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.clsSubOptBtn').css('border-bottom', 'solid 1px #f0f0f0');
                $('.sendMessTxt, .chatBodTop, .chatBodBttm, .edtPstBd').css('border', 'solid 1px #f0f0f0');
                $('.chatBodTop, .chatBodBttm, .optOpts').css('background-color', '#f9f9f9');
                $(`.chatHead, .sendMessTxt, .shrBdy, .edtPstBd`).css('background-color', 'white');
                $('.sendMessTxt').css('color', '#1a1a1a');
                $('.subH_chts').css('color', 'grey');
                $(`.edtPstFlw`).css('border-bottom', 'solid 0.6px #f0f0f0');
            }
            if (mode === 'dark') {
                $('.clsSubOptBtn').css('border-bottom', 'solid 1px #404040');
                $('.sendMessTxt, .chatBodTop, .chatBodBttm, .edtPstBd').css('border', 'solid 1px #404040');
                $('.chatBodTop, .chatBodBttm, .optOpts').css('background-color', '#262626');
                $(`.chatHead, .sendMessTxt, .shrBdy, .edtPstBd`).css('background-color', '#1a1a1a');
                $('.sendMessTxt').css('color', 'white');
                $('.subH_chts').css('color', 'silver');
                $(`.edtPstFlw`).css('border-bottom', 'solid 0.6px #404040');
            }
        });
    };

    const chtBody = (data, ids, wit,pat) => {
        var puta = ''; var clas = '';
        if (pat == 'none') {
            puta = 'img/profb.png';
            clas = 'none';
        }else {
            puta = `${pat.path}`;
            clas = `${pat.class}`;
        }
        return `
        <div class="chatBodClass row">
            <div class="chatBodTop" style="position: fixed; z-index: 3;">
                <div style="width:100%; height:50px;">
                    <div class="chtBodClsCon" style="width: 20%; height: 50px; float: left;">
                        <img src="img/backa.png" alt="" id="${ids.closeBtn}" width="20px" height="30px" style="margin:5px; margin-top: 10px; cursor: pointer; float:left;">
                    </div>
                    <div style="width: 40%; height:  50px; float: left;">
                        <div class="${clas}" style="width:30px; height:30px; margin:5px; cursor: pointer; borde-radius:100% 100%; background-image:url(${puta}); background-size:cover; border-radius:100%; float:left; margin-top:10px;"></div>
                        <a href="/${wit}"><p class="subH_chts" style="margin:0px; padding-top: 15px; font-size:13px; float:left;">${wit}</p></a>
                    </div>
                    <div style="width: 40%; height:  50px; float:right;">
                        <img id="${ids.bgOptOpn}" src="img/opt.png" alt="" width="5px" height="20px" style="float: right; margin: 15px; cursor: pointer;">
                        <img id="${ids.shareOpen}" src="img/shared.png" alt="" width="20px" height="20px" style="float: right; margin: 15px; cursor: pointer;">
                    </div>
                </div>
                <!-- opt area -->
                <div class="bgOptArea" id="${ids.bgOptBod}" style="width:98%; margin:auto;">
                    <div id="${ids.drpBgOpt}" style="widht:100%;"></div>
                </div>
                <!-- share contents sec -->
                <div class="shrBdy" id="${ids.shareBd}" style="display:none; width:95%; overflow-y:auto; margin:auto; margin-bottom:10px; margin-top:5px; border-radius:3px;">
                    <div class="shareOptBod" style="height:90px;">
                        <div style="width:35%; height:80px; float:left; margin-top:10px;">
                            <div style="width:35px; height:55px; margin:auto; cursor:pointer;"> 
                                <img id="${ids.shareImg}" src="img/imgtype.png" width="100%" height="45px" style="margin-top:5px; cursor:pointer;">
                            </div>
                            <p class="subH_chts" style="text-align:center; font-size:8px; margin:0px;">Share image</p>
                        </div>
                        <!-- <div style="width:30%; height:80px; float:left; margin-top:5px;">
                            <div style="width:35px; height:40px; margin:auto; cursor:pointer;"> 
                                <img src="img/imgtype2.png" width="100%" height="30px" style="margin-top:5px; cursor:pointer;">
                            </div>
                            <p class="subH_chts" style="text-align:center; font-size:8px; margin:0px;">Share files</p>
                        </div> -->
                        <div style="width:35%; height:80px; float:right; margin-top:15px;">
                            <div style="width:45px; height:40px; margin:auto; cursor:pointer;"> 
                                <img src="img/up.png" id="${ids.shareCls}" width="100%" height="25px" style="margin-top:10px; cursor:pointer;">
                            </div>
                            <p style="text-align:center; color:orangered; font-size:8px; margin:0px;">Cancel</p>
                        </div>
                    </div>
                    <!-- scroll thr img -->
                    <div class="scrllCht">
                        <div class="row scrlimgCon imgAlignDiv-cht" style="width:98%; height:260px; margin:auto; margin-top:5px; margin-bottom:5px; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                            <div class="closeImgFlwCon" id="closeImgFlwCon-jrn" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="${ids.clsScrlImg}">cancel</p>
                            </div>
                            <div style="width:100%; height:200px; overflow-y:auto;">
                                <br>
                                <span id="${ids.shrImgFlw}"></span>
                            </div>
                            <div class="closeImgFlwCon" id="closeImgFlwCon-jrn" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center; color:skyblue; margin:5px; cursor:pointer;" id="${ids.sndImgs}">send</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- share contents sec -->
                <div class="shrBdy" id="${ids.shrdImgsCon}" style="display:none; width:95%; margin:auto; margin-bottom:10px; margin-top:5px; border-radius:3px;">
                    <div class="shareOptBod" style="height:250px; width:100%;">
                        <div class="clsSubOptBtn" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center;"><img id="${ids.shareImgCls}" src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="${ids.clsShrdImg}"></p>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12" style="height:220px; overflow-y:auto;">
                                <div class="row">
                                    <span id="${ids.dropShrdImgs}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chtng-flw" id="${ids.chtFlwBd}" style="width:100%; overflow-y:auto; margin-top: 50px;">
                <br>
                <span id="${ids.prepMess}"></span>
                <br>
            </div>
            <div class="clearfix visible-xs col-xs-12" style="height:60px;"></div>
            <div class="chatBodBttm" style="height: 60px; width:100%;">
                <textarea name="" id="${ids.tareaId}" style="width: 70%; height: 50px; margin: 5px; float: left; border-radius: 5px; color:grey;" class="sendMessTxt"></textarea>
                <img src="img/send.png" width="35px" height="35px" style="float:left; margin:5px; cursor:pointer;" id="${ids.sendId}">
            </div>
        </div>
        `;
    };

    const nothing = () => {

    };

    const chatHead = (data, wit, usr, ids, pat) => {
        nothing();
        var puta = '';
        if (pat == 'none') {
            puta = 'img/profb.png';
        }else {
            puta = `${pat.path}`;
        }
        return `
          <div id="${ids.chatBodId}" class="chatHead" style="width:98%; margin: auto; background-color:white; border-radius:5px; margin-top:5px; display:none;">
            <div class="dispChtHdBd" style="width:100%; height:35px; display:none;">
                <div style="width:15%; height:100%; float: left;">
                    <div style="width:25px; height:25px; margin:5px; cursor: pointer; borde-radius:100% 100%; background-image:url(${puta}); background-size:cover; border-radius:100%;"></div>
                </div>    
                <div style="width:45%; height:100%; float: left;">
                    <p style="margin:0px; padding:8px; font-size:11px;" class="subH_chts">${wit}</p>
                </div>    
                <div style="width:40%; height:100%; float: right;">
                    <img id="${ids.situIcon}" src="" alt="" width="15px" height="15px" style="margin:10px; cursor: pointer;">
                    <img id="${ids.opnHdOpt}" src="img/opt.png" alt="" width="5px" height="25px" style="margin:5px; float:right; cursor: pointer; margin-right:10px;">
                    <img id="${ids.openBodId}" src="img/chat.png" alt="" width="25px" height="25px" style="margin:5px; float: right; cursor: pointer; margin-right:10px;">
                    <img id="${ids.blckdIcn}" src="img/block.png" alt="" width="25px" height="25px" style="margin:5px; float:right; margin-right:10px;">
                </div>
            </div>
            <div id="${ids.chtHdOPt}" style="width:98%; margin:auto; margin-bottom:5px; display:none;">  
            </div> 
          </div>
        `;
    };
    const addOpts = (wit, close, bodClss, ids) => {
        return `
        <div class="edtPstBd ${bodClss}" style="width:100%; margin:auto; border-radius:5px; margin-bottom:10px;">
            <div class="edtPstFlw" style="width:100%; height:23px; border-radius:3px;">
                <p style="text-align:center; margin:0px; padding:0px;"><img id="${close}" src="img/up.png" width="20px" height="10px" style="cursor:pointer;"></p>
            </div>
            <!-- vis cons -->
            <div id="" class="edtPstFlw" style="width:100%;">
                <a href="/${wit}" class="subH_chts" style="text-decoration:none;"><p id="" style="margin:5px; cursor:pointer; font-size:14.5px; padding:6px;"> Visit profile</p></a>
            </div>
            <!-- block cons -->
            <!--<div id="" class="edtPstFlw" style="width:100%;">
                <p id="${ids.opnBlckCon}" class="subH_chts" style="margin:5px; padding:6px; cursor:pointer; font-size:14.5px;"> <span id="">Block</span> chat</p>
                <div id="${ids.blkckCon}" style="width:95%; margin:auto; border-radius:7.5px; display:none;" class="optOpts">
                    <p class="subH_chts" style="font-size:13px; text-align:center; margin:0px; padding:5px;">Are you sure you want to <span id="${ids.blckChk}"></span> this user?</p>
                    <p class="subH_chts" style="font-size:11.5px; text-align:center; margin:0px; padding:5px;">
                        <span style="margin-right:10px; color:orangered; cursor:pointer;" id="${ids.blckYes}">Yes</span>
                        <span style="margin-left:10px; cursor:pointer;" id="${ids.blckNo}">No</span>
                    </p>
                </div>
            </div>-->
            <!-- reprt cons -->
            <div id="" class="edtPstFlw" style="width:100%;">
                <p id="${ids.rprtUsr}" class="subH_chts" style="margin:5px; padding:6px; cursor:pointer; font-size:14.5px;"> Report user</p>
                <div id="${ids.rprtCon}" style="width:95%; margin:auto; border-radius:7.5px; cursor:pointer; display:none;" class="optOpts">
                    <p id="${ids.canRprt}" class="subH_chts" style="font-size:13px; text-align:center; margin:0px; padding:5px;">cancel</p>
                    <p id="${ids.inapRprt}" style="font-size:13px; color:orangered; text-align:center; margin:0px; padding:5px;">Inapropriate Content</p>
                    <p id="${ids.abusRprt}" style="font-size:13px; color:orangered; text-align:center; margin:0px; padding:5px;">Abusive Content</p>
                </div>
            </div>
            <!-- del cons -->
            <div id="" style="width:100%;">
                <p id="${ids.delChtOpn}" style="margin:5px; padding:6px; color:orangered; cursor:pointer; font-size:14.5px;"> Delete chat</p>
                <div id="${ids.delChtCon}" style="width:95%; margin:auto; margin-bottom:10px; border-radius:7.5px; display:none;" class="optOpts">
                    <p class="subH_chts" style="font-size:13px; text-align:center; margin:0px; padding:5px;">Are you sure you want to delete this chat?</p>
                    <p class="subH_chts" style="font-size:11.5px; text-align:center; margin:0px; padding:5px;">
                        <span style="margin-right:10px; color:orangered; cursor:pointer;" id="${ids.delChtY}">Yes</span>
                        <span style="margin-left:10px; cursor:pointer;" id="${ids.delChtN}">No</span>
                    </p>
                </div>
            </div>
        </div>
        `
    };

    // ACTION BUTTONS
    //----------------
    // creating chat ids
    const CreateChtIds = (data) => {
        return {
            clsBodId: 'clsBod_' + data._id,
            bodyId: 'body_' + data._id,
            sendId: 'send_' + data._id,
            tareaId: 'tarea_' + data._id,
            prepMess: 'prepMess_' + data._id,
            chtFlwBd: 'chtFlwBd_' + data._id,
            // share funcs
            shareOpen: 'shareOpn_' + data._id,
            shareCls: 'shareCls_' + data._id,
            shareBd: 'shareBd_' + data._id,
            // opt 
            bgOptOpn: 'bgOptOpn_' + data._id,
            bgOptArea: 'bgOptArea_' + data._id,
            drpBgOpt: 'bgOptArea_' + data._id,
            clsBgOpt: 'clsBgOpt_' + data._id,
            // share images
            shareImg: 'shareImg_' + data._id,
            shrImgFlw: 'shrImgFlw_' + data._id,
            sndImgs: 'sndImgs_' + data._id,
            clsShrdImg: 'clsShrdImg_' + data._id,
            shareImgCls: 'shareImCls_' + data._id,
            clsScrlImg: 'clsScrlImg_' + data._id,
            // shared imgs
            shrdImgsCon: 'shrdImgsCon_' + data._id,
            dropShrdImgs: 'dropShrdImgs_' + data._id,
            // opt func
            optOpen: 'optOpen_' + data._id,
            optBd: 'optBd_' + data._id,
            // close funcs
            closeBtn: 'closeBtn_' + data._id
        }
    };
    var nowCHat = {status: '', chat: ''};
    // open chat body btn
    const OpenCbod = (data, chatBodId, openBodId, situIcon, wit, mainUser, pat, situ) => {
        const openBtn = $(`#${openBodId}`);
        const updtSitu = () => {
            

                for (let i = 0; i < udata.chats.length; i++) {
                    if (udata.chats[z].chat == data._id) {
                        situ = udata.chats[z].situ;
                    }
                }
            

        };
        const getThisMode = () => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $(`#${chatBodId}`).css('border', 'solid 1px #f0f0f0');
                }else {
                    $(`#${chatBodId}`).css('border', 'solid 1px #404040');
                }
            });
        };

        if (situ == 'rec') {
            //alert('shorrage on ya funds!');
            $(`#${chatBodId}`).css('border', 'solid 0.6px darkorange');
            $(`#${situIcon}`).css('display', 'none');
        }
        if (situ == 'rec_seen') {
            $(`#${situIcon}`).css('display', 'none');
            getThisMode();
        }
        if (situ == 'sent') {
            $(`#${situIcon}`).css('display', 'inline');
            $(`#${situIcon}`).attr('src', 'img/sent.png');
            getThisMode();
        }
        if (situ == 'sent_seen') {
            $(`#${situIcon}`).css('display', 'inline');
            $(`#${situIcon}`).attr('src', 'img/seensent.png');
            $(`#${situIcon}`).css('height', '8.5px');
            $(`#${situIcon}`).css('margin-top', '12.5px');
            getThisMode();
        }
        if (situ == 'none') {
            $(`#${situIcon}`).css('display', 'none');
        }

        openBtn.click(()=>{
            //chkRec = 'off';
            $(`#${chatBodId}`).remove();
            var uone = ''; var utwo = '';
            if (data.uone.user == mainUser._id) {
                uone = data.uone.user;
                utwo = data.utwo.user;
            }else {
                utwo = data.uone.user;
                uone = data.utwo.user;
            }
            if (situ == 'rec') {
                fetch('/chats/rec_seen', {method: 'post', body: JSON.stringify({ id: data._id, uone: uone, utwo: utwo }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((chekId) => {
                    //updtSitu();
                    loadIt();
                });
                
            }else {
                loadIt();
            }
            /*$(`#${two}`).slideUp();
            $(`#${bodyId}`).slideDown();
            chtFlw.scrollBy(0, 100);*/
        });
        const loadIt = () => {
            fetch('/chats/getChats', { method: 'get' }).then((response) => {
                return response.json();
            }).then((chts) => {
                for (let i = 0; i < chts.length; i++) {
                    if (data._id == chts[i]._id) {
                        
                        $('.chatBodClass').remove();
                        const ids = CreateChtIds(chts[i]);
                        $('#noChatsClckd').css('display', 'none');
                        getMode();
                        var x = window.matchMedia("(max-width: 600px)")
                        if (x.matches) {
                            $('#headPusher-xs, #profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #flowbod, .profbody, #profNavbar, #chtFlwAll, #openwj-xs').css('display', 'none');
                            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                                if(mode === 'light') {
                                    $('body').css('background-color', 'white');
                                    $(`body`).css('background-image', 'url(img/chatbL.png)');
                                    $(`body`).css('background-size', '100% 100%');
                                    $(`body`).css('background-attachment', 'fixed');
                                }else {
                                    $('body').css('background-color', '#1a1a1a');
                                    $(`body`).css('background-image', 'url(img/chatbD.png)');
                                    $(`body`).css('background-size', '100% 100%');
                                    $(`body`).css('background-attachment', 'fixed');
                                }
                            });
                            $('#hspan').append(chtBody(chts[i], ids, wit, pat));
                            $('.chatBodTop').css('width', '100%');
                        } else {
                            $('#dropChatBody').append(chtBody(data, ids, wit, pat));
                            $('.chatBodTop').addClass('col-md-5');
                            $('.chtBodClsCon').css('display', 'none');
                            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                                if(mode === 'light') {
                                    $(`#${ids.chtFlwBd}`).css('background-image', 'url(img/chatbL.png)');
                                    $(`#${ids.chtFlwBd}`).css('background-size', 'cover');
                                }else {
                                    $(`#${ids.chtFlwBd}`).css('background-image', 'url(img/chatbD.png)');
                                    $(`#${ids.chtFlwBd}`).css('background-size', 'cover');
                                }
                            });
                        }
                        nowCHat.status = 'on'; nowCHat.chat = data._id;
                        incMess = 5;
                        SendM(chts[i], ids.tareaId, ids.sendId, ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, mainUser);
                        var scrl = 'y';
                        getMess(chts[i], ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, mainUser, scrl);
                        closeBody(chts[i], ids.closeBtn);
                        Share(chts[i], ids.shareOpen, ids.shareBd, ids.shareCls, ids.optBd);
                        shareImg(chts[i], mainUser, ids.shareImg, ids.shrImgFlw, ids.sndImgs, ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, ids.shareImgCls, ids.clsScrlImg);
                        opnBgOpt(chts[i], mainUser, wit, ids.bgOptOpn, ids.bgOptArea, ids.drpBgOpt, ids.clsBgOpt);
                        Start();
                    }
                }
            });
            //getChat(mainUser);
        };
        /*clsBtn.click(()=>{
            $(`#${bodyId}`).slideUp();
            $(`#${chatBodId}`).slideDown();
        });*/
    };
    // open already exists
    const checkExists = (mainUser) => {
        fetch('/chats/getAlreadyNte', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((alData)=>{
            if (alData == 'Yes') {
                fetch('/chats/getAlreadyId', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((dataId)=>{
                    getSpecAl(dataId, mainUser);
                });
            }
        });
        var getSpecAl = (dataId, mainUser) => {
            fetch('/chats/getspecChat', { method: 'post', body: JSON.stringify({ id: dataId }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((datam) => { 
                var wit = ''; var usr = ''; var witno = ''; var usrno = '';
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    var dt1 = ''; var dt2 = ''; var no1 = ''; var no2 = '';
                    if (users) {
                        for (let i = 0; i < users.length; i++) {
                            if (datam.uone.user == users[i]._id) {
                                dt1 = users[i].user_name;
                                no1 = datam.uone.user;
                            }
                            if (datam.utwo.user == users[i]._id) {
                                dt2 = users[i].user_name;
                                no2 = datam.utwo.user;
                            }
                        }
                        if (dt1.length > 15 || dt2.length > 15) {
                            dt1 = dt1.slice(0, 15)+'..';
                            dt2 = dt2.slice(0, 15)+'..';
                        }
                        if (dt1 == mainUser.user_name) {
                            usr = dt1;
                            wit = dt2;
                        }else {
                            usr = dt2;
                            wit = dt1;
                        }
                        getMode();
                        opnBod(datam, wit, mainUser, users);
                    }
                });
            });;
        };
        const opnBod = (data, wit, mainUser, users) => {
            const ids = CreateChtIds(data);
            $('#noChatsClckd').css('display', 'none');
            getMode();
            var pat = '';
            for (let x = 0; x < users.length; x++) {
                if (users[x]._id == data.utwo.user && data.utwo.user !== mainUser._id) {
                    pat = users[x].profile_pic;
                }
                if (users[x]._id == data.uone.user && data.uone.user !== mainUser._id) {
                    pat = users[x].profile_pic;
                }
            }
            var x = window.matchMedia("(max-width: 600px)")
            if (x.matches) {
                $('#headPusher-xs, #profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #flowbod, .profbody, #profNavbar, #chtFlwAll, #openwj-xs').css('display', 'none');
                fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                    if(mode === 'light') {
                        $('body').css('background-color', 'white');
                        $(`body`).css('background-image', 'url(img/chatbL.png)');
                        $(`body`).css('background-size', '100% 100%');
                        $(`body`).css('background-attachment', 'fixed');
                    }else {
                        $('body').css('background-color', '#1a1a1a');
                        $(`body`).css('background-image', 'url(img/chatbD.png)');
                        $(`body`).css('background-size', '100% 100%');
                        $(`body`).css('background-attachment', 'fixed');
                    }
                });
                $('#hspan').append(chtBody(data, ids, wit, pat));
                $('.chatBodTop').css('width', '100%');
            }else {
                $('#dropChatBody').append(chtBody(data, ids, wit, pat));
                $('.chatBodTop').addClass('col-md-5');
                $('.chtBodClsCon').css('display', 'none');
                fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                    if(mode === 'light') {
                        $(`#${ids.chtFlwBd}`).css('background-image', 'url(img/chatbL.png)');
                        $(`#${ids.chtFlwBd}`).css('background-size', 'cover');
                    }else {
                        $(`#${ids.chtFlwBd}`).css('background-image', 'url(img/chatbD.png)');
                        $(`#${ids.chtFlwBd}`).css('background-size', 'cover');
                    }
                });
            }
            incMess = 5;
            nowCHat.status = 'on'; nowCHat.chat = data._id;
            SendM(data, ids.tareaId, ids.sendId, ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, mainUser);
            var scrl = 'y';
            getMess(data, ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, mainUser, scrl);
            closeBody(data, ids.closeBtn);
            Share(data, ids.shareOpen, ids.shareBd, ids.shareCls, ids.optBd);
            shareImg(data, mainUser, ids.shareImg, ids.shrImgFlw, ids.sndImgs, ids.prepMess, ids.chtFlwBd, ids.shrdImgsCon, ids.dropShrdImgs, ids.shareImgCls, ids.clsScrlImg);
            opnBgOpt(data, mainUser, wit, ids.bgOptOpn, ids.bgOptArea, ids.drpBgOpt, ids.clsBgOpt);
            fetch('/chats/setAlreadyNte', { method: 'get' });
            getMode();
        };

    };

    // close chat bod
    const closeBody = (data, closeBtn) => {
        $(`#${closeBtn}`).click(()=>{
            nowCHat.status = 'off'; nowCHat.chat = '';
            $('body').css('background-image', '');
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $('body').css('background-color', '#f0f0f0');
                }else {
                    $('body').css('background-color', '#333333');
                }
            });
            $('#headPusher-xs, #profInfoCol, #profNavCol, #nav-xs, #minnaver, #flowbod, .profbody, #profNavbar, #chtFlwAll, #openwj-xs').css('display', 'block');
            $('.chatBodClass').css('display', 'none');
        })
    };

    // opn bg opt
    const opnBgOpt = (data, mainUser, wit, bgOptOpn, bgOptArea, drpBgOpt, clsBgOpt) => {
        // open opt
        $(`#${bgOptOpn}`).click(()=>{
            $('.bgOptCht').remove();
            $(`#${bgOptArea}`).slideDown();
            var clas = 'bgOptCht'; 
            getMode();
            allOptFUncs(mainUser, data, `set_bg_ids_${data._id}`, wit, clas, drpBgOpt, clsBgOpt, bgOptArea);
        });
    };

    //send message 
    const SendM = (data, tareaId, sendId, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser) => {
        const sendBtn = $(`#${sendId}`);
        const tarea = $(`#${tareaId}`);
        sendBtn.click(function(){
            if (tarea.val() !== '') {
                // message for me
                /*fetch(`/chats/messagem/${data._id}`, {method: 'put', body: JSON.stringify({ type: 'sen', chat: tarea.val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((chekId) => {
                    alert();
                });*/
                var uone = ''; var utwo = '';
                if (data.uone.user == mainUser._id) {
                    uone = data.uone.user;
                    utwo = data.utwo.user;
                }else {
                    utwo = data.uone.user;
                    uone = data.utwo.user;
                }
                fetch('/chats/addMessage', {method: 'put', body: JSON.stringify({ id: data._id, uone: uone, utwo: utwo, mess: {user: mainUser._id, type: 'text', chat: tarea.val(), date: [year, day, month, hour, minute]} }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((chekId) => { 
                    if (chekId) {
                        $('.MessBod').remove();
                        $(tarea).val('');
                        incMess += 1;
                        var scrl = 'y';
                        var ids = ceateMId(data);
                        refreshMess(data, prepMess, chtFlwBd, ids.loadMId, shrdImgsCon, dropShrdImgs, mainUser);
                        //getMess(data, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser, scrl);
                        Start();
                    }
                });
            }
        });
    };

    // FOR TEXT (add = .innerText by calling the chat <p>-chat text)
    const senMess = (data, ids) => {
        return `<div class="MessBod" style="width:70%; float:right; margin:5px;">
                        <p class="subH_chts" style="font-size:10.5px; padding:2.5px; width:100%; margin:0px; margin-right:10px; margin-bottom:7.5px;"><i  id="${ids.dispTdy}" style="float:right;"></i></p>
                        <div style="width:100%; float:right;"></div>
                        <div style="border-radius:10px; background-color:darkorange; float:right; margin-right:10px; margin-bottom:5px;">
                            <p style="padding:5px; color:white; margin:0px; font-size:17.5px; float:left; font-weight:normal; white-space: pre;">${data.chat}</p>
                            <span style="float:right; font-size:12px; color:white; padding:3px; cursor:pointer;" id="${ids.delSenM}">&times;</span>
                        </div>
                    </div>
                    `;
    };
    const recMess = (data, ids) => {
        return `<div class="MessBod" style="width:70%; float:left; margin:5px;">
                        <p class="subH_chts" style="float:left; font-size:10.5px; padding:2.5px; width:100%; margin:0px; margin-left:10px;"><i  id="${ids.dispTdy}"></i></p>
                        <div style="border-radius:10px; background-color:#f0f0f0; float:left; margin-left:10px; margin-bottom:5px;">
                            <p style="padding:5px; color:#1a1a1a; margin:0px; font-size:17.5px; float:left; font-weight:normal; white-space: pre;">${data.chat}</p>
                        </div>
                    </div>
                    `;
    };
    // FOR IMG's
    const senMessImg = (data, ids) => {
        return `<div class="MessBod" style="width:70%; float:right; margin:5px;">
                        <p class="subH_chts" style="font-size:10.5px; padding:2.5px; width:100%; margin:0px; margin-right:10px;"><i  id="${ids.dispTdy}" style="float:right;"></i></p>
                        <div style="width:100%; float:right;"></div>
                        <div style="border-radius:10px; background-color:darkorange; float:right; margin-right:10px;"">
                            <div id="${ids.openShrImgs}" style="width:150px; height:65px; float:left; margin:7.5px; cursor:pointer;">
                                <div style="float:left; width:60px; height:60px;">
                                    <div class="${data.chat[0].class}" style="border-radius:5px; width:100%; height:100%; background-image:url(${data.chat[0].path}); background-size:cover;"></div>
                                </div>
                                <div style="float:right; width:80px; height:60px;">
                                    <p style="color:white; padding:10px; text-align:center; font-size:12px; margin:0px;"> <strong>${data.chat.length}</strong> images Attached</p>
                                </div>
                            </div>
                            <span style="float:right; font-size:8px; color:white; padding:5px; cursor:pointer;" id="${ids.delSenM}">&times;</span>
                        </div>
                    </div>
                    `;
    };
    const recMessImg = (data, ids) => {
        return `<div class="MessBod" style="width:70%; float:left; margin:5px;">
                        <p class="subH_chts" style="float:left; font-size:10.5px; padding:2.5px; width:100%; margin:0px; margin-left:10px;"><i  id="${ids.dispTdy}"></i></p>
                        <div style="border-radius:10px; background-color:#f0f0f0; float:left; margin-left:10px;"">
                            <div id="${ids.openShrImgs}" style="width:150px; height:65px; float:left; margin:7.5px; cursor:pointer;">
                                <div style="float:left; width:60px; height:60px;">
                                    <div class="${data.chat[0].class}" style="border-radius:5px; width:100%; height:100%; background-image:url(${data.chat[0].path}); background-size:cover;"></div>
                                </div>
                                <div style="float:right; width:80px; height:60px;">
                                    <p style="color:#1a1a1a; padding:10px; text-align:center; font-size:12px; margin:0px;"> <strong>${data.chat.length}</strong> images Attached</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    };

    // Shared imgs con
    const shrdImgs = (data, ids) => {
        return `
            <div id="${ids.conId}" class="col-md-6 col-xs-6" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <img src="${data.path}" class="${data.class}" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
            </div>
        `
    };

    // IMG Shrd revwr
    const imgRev = (ids) => {
        return `
                <div class="row" id="${ids.containId}">
                    <div class="col-md-12 col-xs-12" style="position:fixed; z-index:4; width:100%; height:100%; background-color:#1a1a1a; opacity:0.9;">
                    </div>
                    <div class="col-md-12 col-xs-12" style="position:fixed; z-index:5; width:100%; height:100%;">
                        <div class="row" style="height:100%;">
                            <div class="col-md-12 col-xs-12" style="height:5%;">
                                <img src="img/can.png" width="20px" height="20px" style="margin:7.5px; float:left; cursor:pointer;" id="${ids.closeRevedCon}">
                            </div>
                            <div class="col-md-12 col-xs-12" style="height:90%; overflow-y:auto;">
                                <div class="row">
                                    <div class="col-md-3"></div>
                                    <div class="col-md-6 col-xs-12">
                                        <span id="${ids.dispCurnt}"></span>
                                    </div>
                                    <div class="col-md-3"></div>
                                </div>
                            </div>
                            <div id="${ids.multRevBtnCon}" class="col-md-12 col-xs-12" style="height:15%;">
                                <div class="row">
                                    <div class="col-md-3"></div>
                                    <div class="col-md-6 col-xs-12">
                                        <img src="img/backa.png" width="15px" height="20px" style="margin:2.5px; float:left; cursor:pointer;" id="${ids.prevImg}">
                                        <img src="img/backb.png" width="15px" height="20px" style="margin:2.5px; float:right; cursor:pointer;" id="${ids.nextImg}">
                                    </div>
                                    <div class="col-md-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    };

    // increase/decrease messages viewed
    var incMess = 5;
    // load more button
    var loadMMess = (loadMId) => {
        return `
            <p id="${loadMId}" style="margin:0px; padding:5px; color:darkorange; text-align:center; font-size:13.5px; cursor:pointer; margin-top:-10px;">more</p>
        `
    };
    var ceateMId = (data) => {
        return {
            loadMId: 'loadId_' + data._id,
            MessBodId: 'MessBod_' + data._id
        }
    };
    // display loader func
    const dspMLoader = (data2, data, prepMess, loadMId, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser) => {
        if (data2.length > incMess) {
            $(`#${prepMess}`).before(loadMMess(loadMId));
        } else {
            $(`#${loadMId}`).remove();
        }
        $(`#${loadMId}`).click(()=>{ 
            incMess += 5;
            $(`#${loadMId}, .MessBod`).remove();
            var scrl = 'n';
            getMess(data, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser, scrl);
        });
    };
    // refresh chats
    const refreshMess = (data, prepMess, chtFlwBd, loadMId, shrdImgsCon, dropShrdImgs, mainUser) => {
         // get messsages
         fetch('/chats/getspecChat', { method: 'post', body: JSON.stringify({ id: data._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((data2) => {
            if (data2) {
                $(`#${loadMId}`).remove();
                $('.MessBod').remove();
                var scrl = 'y';
                getMess(data2, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser, scrl);
            } 
        });
    };
    var chkRec = 'off';
    const getMess = (data, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser, scrl) => {
        $('.MessBod').remove();
        //chkRec = 'on';
        /*const checkNwMess = () => {
            fetch('/chats/getspecChat', { method: 'post', body: JSON.stringify({ id: data._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((data2) => {
                if (chkRec == 'on') {
                    if (data.messages.length > data2.messages.length || data.messages.length < data2.messages.length) {
                        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json()
                        }).then((mainUser2) => {
                            var uone = ''; var utwo = '';
                            if (data.uone.user == mainUser._id) {
                                uone = data.uone.user;
                                utwo = data.utwo.user;
                            }else {
                                utwo = data.uone.user;
                                uone = data.utwo.user;
                            }
                            fetch('/chats/rec_seen', {method: 'post', body: JSON.stringify({ id: data._id, uone: uone, utwo: utwo }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                return response.json();
                            }).then((chekId) => {
                                $('.MessBod').remove();
                                var ids = ceateMId(data);
                                //updtSitu();
                                refreshMess(data2, prepMess, chtFlwBd, ids.loadMId, shrdImgsCon, dropShrdImgs, mainUser2);
                                var targetDate = new Date();
                                targetDate.setSeconds(targetDate.getSeconds() + 1);
                                var countDownDate = targetDate.getTime();
                                var x = setInterval(function() {
                                    //$(`#${strBgId}`).addClass('backStrEffct');
                                    var now = new Date().getTime();
                                    // Find the distance between now and the count down date
                                    var distance = countDownDate - now;
                                    // check duration to currentime
                                
                                    if (distance < 0) {
                                        Start();
                                        clearInterval(x);
                                    }
                                }, 1000);
                            });
                        });
                    }else {
                        checkNwMess()
                    }
                }
            });
        }*/
        //checkNwMess()
        const checkNMess = () => {
            if (nowCHat.status == 'on') {
                fetch('/chats/getChats', { method: 'get' }).then((response) => {
                    return response.json();
                }).then((newC) => {
                    var cht = newC.find(i=>i._id==data._id);
                    if (cht !== undefined) {
                        if (cht.messages.length > data.messages.length || cht.messages.length < data.messages.length) {
                            $('.MessBod').remove();
                            getMess(cht, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser, scrl);
                            var uone = ''; var utwo = '';
                            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                return response.json()
                            }).then((meUsr) => { 
                                var nowC = meUsr.chats.find(i=>i.chat == cht._id);
                                console.log(nowC);
                                if (cht.uone.user == meUsr._id) {
                                    uone = cht.uone.user;
                                    utwo = cht.utwo.user;
                                }else {
                                    utwo = cht.uone.user;
                                    uone = cht.utwo.user;
                                }
                                if (nowC.situ == 'rec') {
                                    fetch('/chats/rec_seen', {method: 'post', body: JSON.stringify({ id: cht._id, uone: uone, utwo: utwo }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                        return response.json();
                                    }).then((chekId) => {
                                        //updtSitu();
                                        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                            return response.json()
                                        }).then((usr) => { 
                                            getChat(usr);
                                        });
                                    });
                                }
                            });
                        } else {
                            setTimeout(() => {
                                checkNMess();
                            }, 1);
                        }
                    }
                });
            }
        }
        checkNMess();
        // get messsages
        fetch('/chats/getMessages', { method: 'post', body: JSON.stringify({ id: data._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data2) => {
            var ids = ceateMId(data);
            $(`#${ids.loadMId}`).remove();
            dspMLoader(data2, data, prepMess, ids.loadMId, chtFlwBd, shrdImgsCon, dropShrdImgs, mainUser);
            // cht date conditions
            const dispTimem = (data2, dispTdy) => {
                if (data2.date[0] !== year) {
                    $(`#${dispTdy}`).html(`${data2.date[2]} ${data2.date[1]}, ${data2.date[0]}`);
                }
                if (data2.date[0] == year && data2.date[2] == month && data2.date[1] == day) {
                    $(`#${dispTdy}`).html(`<strong style="font-size:10px;">Today.</strong> ${data2.date[3]}:${data2.date[4]}`);
                }
                if (data2.date[0] == year && data2.date[2] == month && day - data2.date[1] == 1) {
                    $(`#${dispTdy}`).html(`<strong style="font-size:10px;">Yesterday.</strong> ${data2.date[3]}:${data2.date[4]}`);
                }
                if (data2.date[0] == year && data2.date[2] == month && day - data2.date[1] !== 1 && data2.date[1] !== day) {
                    $(`#${dispTdy}`).html(`${data2.date[2]} ${data2.date[1]}, ${data2.date[3]}:${data2.date[4]}`);
                }
                if (data2.date[0] == year && data2.date[2] !== month) {
                    $(`#${dispTdy}`).html(`${data2.date[2]} ${data2.date[1]}, ${data2.date[3]}:${data2.date[4]}`);
                }
            };
            const delMess = (data2, data, delSenM, prepMess, chtFlwBd, i) => {

                // delete recieved message
                $(`#${delSenM}`).click(()=>{
                    fetch(`/chats/delMessage/${data._id}`, { method: 'put', body: JSON.stringify({ messages: data2 }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                        return response.json();
                    }).then((deldata)=>{
                        if (deldata) {
                            var ids = ceateMId(data);
                            refreshMess(data, prepMess, chtFlwBd, ids.loadMId, shrdImgsCon, dropShrdImgs, mainUser);
                        }
                    });
                });

            };

            // IMG REV FUNCS
            const opndRevImg = (chat, data2, z, conId, ids) => {

                //close rev
                $(`#${ids.closeRevedCon}`).click(()=>{
                    $(`#${ids.containId}`).remove()
                });
                if (data2.chat.length > 1) {
                    var num = z;
                    // loop thr imgs
                    $(`#${ids.nextImg}`).click(()=>{
                        $(`#${ids.shrdImgId}`).css('display', 'none');
                        num++;
                        if (num >= data2.chat.length) {
                            num = 0;
                        }
                        $(`#${ids.shrdImgId}`).attr("src", data2.chat[num].path);
                        $(`#${ids.shrdImgId}`).attr("class", data2.chat[num].class);
                        $(`#${ids.shrdImgId}`).fadeIn();
                        //$(`#${ids.dispCurnt}`).text(num+1);
                    });
                    $(`#${ids.prevImg}`).click(()=>{
                        $(`#${ids.shrdImgId}`).css('display', 'none');
                        num--;
                        if (num < 0) {
                            num = data2.chat.length-1;
                        }
                        $(`#${ids.shrdImgId}`).attr("src", data2.chat[num].path);
                        $(`#${ids.shrdImgId}`).attr("class", data2.chat[num].class);
                        $(`#${ids.shrdImgId}`).fadeIn();
                        //$(`#${ids.dispCurnt}`).text(num+1);
                    });
                } else {
                    $(`#${ids.multRevBtnCon}`).css('display', 'none');
                }

            };
            // Img Ids
            const createRevShrdId = (chat) => {
                const lrn = chat.path.slice(8, 20);
                return {
                    containId: `container_${lrn}_reviewImgShrd`,
                    dispCurnt: `displayCurnt_${lrn}_reviewImgShrd`,
                    // img id
                    shrdImgId: `shrdImgId_${lrn}_reviewImgShrd`,
                    // imgs after click
                    closeRevedCon: `closeRevedCon_${lrn}_reviewImgShrd`,
                    multRevBtnCon: `multRevBtnCon_${lrn}_reviewImgShrd`,
                    prevImg: `prevImg_${lrn}_reviewImgShrd`,
                    nextImg: `nextImg_${lrn}_reviewImgShrd`,
                }
            };
            const clickImg = (chat, data2, z, conId) => {
                $(`#${conId}`).click(()=>{
                    const revImgIds = createRevShrdId(chat);
                    $(`#dropChat`).after(imgRev(revImgIds));
                    $(`#${revImgIds.dispCurnt}`).prepend(`
                        <img src="${data2.chat[z].path}" class="${data2.chat[z].class}" width="100%" id="${revImgIds.shrdImgId}">
                    `);
                    // opened rev btns
                    opndRevImg(chat, data2, z, conId, revImgIds);
                });
            };

            var SILen = 0;
            const createShrIds = (data) => {
                const lrn = data.path.slice(8, 20);
                return {
                    conId: `conId_${lrn}_shrdImg`,
                }
            };
            const imgBod = (shrIds, chat) => {
                return `
                <div id="${shrIds.conId}" class="col-md-4 col-xs-4 opnShrd" style="height:140px; margin-top:10px; margin-bottom:10px; cursor:pointer;">
                    <div class="${chat.class}" style="border-radius:5px; width:95%; margin:auto; height:100%; background-image:url(${chat.path}); background-size:cover;"></div>
                </div>
                `
            };
            const opnShrImg = (data2, data, openShrImgs) => {
                $(`#${openShrImgs}`).click(()=>{
                    //aler
                    $('.opnShrd').remove();
                    $(`#${shrdImgsCon}`).slideDown();
                    for (let z = 0; z < data2.chat.length; z++) {
                        const shrIds = createShrIds(data2.chat[z]);
                        $(`#${dropShrdImgs}`).append(imgBod(shrIds, data2.chat[z]));
                        //alert($(`#${shrIds.conId}`).attr('class'));
                        clickImg(data2.chat[z], data2, z, shrIds.conId);
                    }
                    /*for (let i = 0; i < SILen.length; i++) {
                        
                    }
                    SILen = data2.chat.length;*/
                });
            };

            const ScrollDiv = () => {
                //document.getElementById(`${chtFlwBd}`).scrollTop= 0;
                var targetDate = new Date();
                targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
                var countDownDate = targetDate.getTime();
                var x = setInterval(function() {
                    var now = new Date().getTime();
                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;
                    var p = window.matchMedia("(max-width: 600px)")
                    if (p.matches) {
                        window.scrollTo(0, document.body.scrollHeight);
                    } else {
                        document.getElementById(`${chtFlwBd}`).scrollTop = document.getElementById(`${chtFlwBd}`).scrollHeight - document.getElementById(`${chtFlwBd}`).clientHeight;
                    }
                    if (distance < 0) {
                        scrl = 'n';
                        clearInterval(x);
                    }
                }, 1000);
            };
            const chatScroll = (data2, chtFlwBd) => {
                ScrollDiv();
            };

            const createMinId = (data2, i) => {
                return {
                    // date ID
                    dispTdy: 'dispTdyMess_' + i,
                    // delete mes ID
                    delSenM: 'delSenMess_' + i,
                    // open imgs Id
                    openShrImgs: 'openShrImgs_' + i
                }
            };
            // if (data2.length > incMess) {}else {}
            const displayMess = (data2, chtFlwBd, i) => {
                /*if (data.date[0] == year && data.date[1] == day && data.date[2] == month) {
                    const tdyDiv = ` <></div> `;
                }*/
                const mids = createMinId(data2, i);
                if (data2.user == mainUser._id) {
                    if (data2.type == 'text') {
                        $(`#${prepMess}`).prepend(senMess(data2, mids, i));
                        delMess(data2, data, mids.delSenM, prepMess, chtFlwBd, i);
                    }
                    if (data2.type == 'imgs') {
                        //alert(data2.chat);
                        $(`#${prepMess}`).prepend(senMessImg(data2, mids, i));
                        delMess(data2, data, mids.delSenM, prepMess, chtFlwBd, i);
                        opnShrImg(data2, data, mids.openShrImgs);
                    }
                } else {
                    if (data2.type == 'text') {
                        $(`#${prepMess}`).prepend(recMess(data2, mids));
                    }
                    if (data2.type == 'imgs') {
                        $(`#${prepMess}`).prepend(recMessImg(data2, mids));
                        opnShrImg(data2, data, mids.openShrImgs);
                    }
                }
                if (scrl == 'y') {
                    chatScroll(data2, chtFlwBd);
                }
                dispTimem(data2, mids.dispTdy);
                getMode();
                //objDiv = document.getElementById(`${chtFlwBd}`);
                //objDiv.scrollTop = objDiv.scrollHeight;
                // display time conditions 
            };
            console.log('message remains lenght: '+incMess);
            for (let i = data2.length - 1; i >= data2.length-incMess; i--) {
                if (i >= 0) {
                    displayMess(data2[i], chtFlwBd, i);
                }
            }
        });
    };

    // share funcs
    const Share = (data, shareOpen, shareBd, shareCls, optBd) => {
        // opn
        $(`#${shareOpen}`).click(()=>{
            $(`#${optBd}`).css('display', 'none');
            $('.shareOptBod').css('display', 'block');
            $(`#${shareBd}`).slideDown();
        });
        //clse
        $(`#${shareCls}`).click(()=>{
            $(`#${shareBd}`).slideUp();
        });
    };

    // share IMg
    // add loader
    const DropLoad = () => {
        return `
            <div id="dropLoad-sentCht" style="margin-top:75px; margin:auto;">
                <img src="img/refresh.png" width="30px" height="30px">
            </div>
        `
    };
     // add thread
     const sendImgbut = () => {
         return `
        <form action="/chats/shareImg" method="post" enctype="multipart/form-data" style="display:none;">
            <input type="file" name="file" id="shareImgCht" accept="image/*" multiple>
        </form>
         `
     };
     //alert($('#shareImgCht').val().length);
     $('.container-fluid').before(sendImgbut());
    const shareImg = (data, mainUser, shareImg, shrImgFlw, sndImgs, prepMess, chtFlwBd, shrdImgsCon, dropShrdImgs, shareImgCls, clsScrlImg) => {
        $(`#${shareImg}`).click(()=>{
            fetch('/chats/shrImgId', {method: 'post', body: JSON.stringify({ flowId: shrImgFlw }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((dat)=>{
                if (dat) {
                    $(`#shareImgCht`).click();
                    //$(`#ShareImgChat`).click();
                }
            });
        });
        // cancel
        $(`#${clsScrlImg}`).click(()=>{
            $('.allImgs_app').remove();
            $('.imgAlignDiv-cht').slideUp();
        });
        // send imgs
        $(`#${sndImgs}`).click(()=>{
            $(`#${shrImgFlw}`).before(DropLoad());
            fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((test)=>{
                //alert(test);
                var testar = [];
                for (let i = 0; i < test; i++) {
                    testar[i] = `imgHangerFltrd-cht${i}`;
                }
                //alert(testar[0]);
                var encount = [];
                for (let i = 0; i < test; i++) {
                    var tter = testar[i];
                    encount[i] = {
                        path: $(`#${tter}`).attr('src'),
                        class: $(`#${tter}`).attr('class')
                    };
                }
                var uone = ''; var utwo = '';
                if (data.uone.user == mainUser._id) {
                    uone = data.uone.user;
                    utwo = data.utwo.user;
                }else {
                    utwo = data.uone.user;
                    uone = data.utwo.user;
                }
                for (let i = 0; i < test; i++) {
                    $(`#imgHangerFltrd-cht${i}`).css('display', 'none');
                }
                fetch('/chats/addMessage', {method: 'put', body: JSON.stringify({ id: data._id, uone: uone, utwo: utwo, type: 'binary', mess: {user: mainUser._id, type: 'imgs', chat: encount, date: [year, day, month, hour, minute]} }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((chekId) => { 
                    if (chekId) {
                        $('.MessBod, #dropLoad-sentCht').remove();
                        var targetDate = new Date();
                        targetDate.setSeconds(targetDate.getSeconds() + 2);
                        var countDownDate = targetDate.getTime();
                        var x = setInterval(function() {
                            $('#dropLoad-sentCht').remove()
                            $(`#${shrImgFlw}`).before(`
                                <div style="width:30px; height:30px; margin-top:30px; margin:auto;">
                                    <img id="${shareImg}_done" src="img/sent.png" width="100%" height="100%">
                                </div>
                            `);
                            var now = new Date().getTime();
                            // Find the distance between now and the count down date
                            document.getElementById(`${chtFlwBd}`).scrollTop = document.getElementById(`${chtFlwBd}`).scrollHeight -  document.getElementById(`${chtFlwBd}`).clientHeight;
                            var distance = countDownDate - now;
                            if (distance < 0) {
                                $(`#${shareImg}_done`).fadeOut();
                                $(`#${shareImg}_done`).css('display', 'none');
                                clearInterval(x);
                            }
                        }, 1000);
                        incMess += 1;
                        $('.imgAlignDiv-cht').slideUp();
                        var scrl = 'y';
                        var ids = ceateMId(data);
                        refreshMess(data, prepMess, chtFlwBd, ids.loadMId, shrdImgsCon, dropShrdImgs, mainUser);
                        $('.sentImgNte, .dropLoad-sentCht, .allImgs_app').remove();
                        Start();
                    }
                });
                
            });
        });
        $(`#${shareImgCls}`).click(()=>{
            $(`#${shrdImgsCon}`).slideUp();
        });
    };

    // opt funcs
    const OptFunc = (mainUser, data, opnHdOpt, chtHdOPt, clsHdOPt, ids, wit) => {
        // chk if blckd
        // block chk
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{
            var user = '';
            for (let x = 0; x < users.length; x++) {
                if (users[x].user_name == wit) {
                    user = users[x];
                }
            }
            
            // bock usr
            var ckr = '';
            if (user.blocked_list.length < 1) {
                $(`#${ids.blckdIcn}`).css('display', 'none');;
            }else {
                for (let i = 0; i < user.blocked_list.length; i++) {
                    if (user.blocked_list[i].user == mainUser._id) {
                        ckr = 'y';
                    }
                }
            }
            if (ckr == 'y') {
                $(`#${ids.openBodId}`).css('display', 'none');
            }else {
                $(`#${ids.blckdIcn}`).css('display', 'none');;
            }
        });
        // open opt
        $(`#${opnHdOpt}`).click(()=>{
            $('.smOptCht').remove();
            $(`#${chtHdOPt}`).slideDown();
            var clas = 'smOptCht'; 
            getMode();
            allOptFUncs(mainUser, data, `set_sm_ids_${data._id}`, wit, clas, chtHdOPt, clsHdOPt, chtHdOPt);
        });
        $('.dispChtHdBd').fadeIn();
    };
    // optall-funcs
    const optGenFUncs = (mainUser, data, wit, clas, ids) => {

        // block chk
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{
            var user = ''; var usrCon = '';
            for (let x = 0; x < users.length; x++) {
                if (users[x].user_name == wit) {
                    user = users[x]._id;
                    usrCon = users[x];
                }
            }
            
            // bock usr
            var ckr = '';
            if (mainUser.blocked_list.length < 1) {
                $(`#${ids.blckChk}`).text(`block`);
            }else {
                for (let i = 0; i < mainUser.blocked_list.length; i++) {
                    if (mainUser.blocked_list[i].user == user) {
                        ckr = 'y';
                        $(`#${ids.blckChk}`).text(`un-block`);
                    }
                }
            }
            if (ckr == '') {
                $(`#${ids.blckChk}`).text(`block`);
            }
            $(`#${ids.opnBlckCon}`).click(()=>{
                $(`#${ids.blkckCon}`).slideDown();
            });
            $(`#${ids.blckNo}`).click(()=>{
                $(`#${ids.blkckCon}`).slideUp();
            });
            $(`#${ids.blckYes}`).click(()=>{
                if (ckr == 'y') {
                    fetch('/settings/unblock', { method: 'put', body: JSON.stringify({ user: user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((result)=>{
                        if (result) {
                            Start();
                        }
                    });
                }else {
                    fetch('/settings/block', { method: 'put', body: JSON.stringify({ user: user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((result)=>{
                        if (result) {
                            Start();
                        }
                    });
                }
            });

            // report user
            $(`#${ids.rprtUsr}`).click(()=>{
                $(`#${ids.rprtCon}`).slideDown();
            });
            $(`#${ids.canRprt}`).click(()=>{
                $(`#${ids.rprtCon}`).slideUp();
            });
            $(`#${ids.inapRprt}`).click(()=>{
                var con = 'Inapproriate contents';
                pushRep(con);
            });
            $(`#${ids.abusRprt}`).click(()=>{
                alert('here');
                var con = 'Abusive contents';
                pushRep(con);
            });
            // report func
            const pushRep = (con) => {

                fetch('/post/reportJrn', {
                    method: 'post',
                    body: JSON.stringify({ content: con, type: 'Profile', from: mainUser._id, user: user, date: [year, day, month, hour, minute]  }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    } 
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    if (data) {
                        alert('report sent');
                        Start();
                    }
                });
                
            };

            // del cht
            $(`#${ids.delChtOpn}`).click(()=>{
                $(`#${ids.delChtCon}`).slideDown();
            });
            $(`#${ids.delChtN}`).click(()=>{
                $(`#${ids.delChtCon}`).slideUp();
            });
            $(`#${ids.delChtY}`).click(()=>{
                var fnd = '';
                for (let x = 0; x < usrCon.chats.length; x++) {
                    if (usrCon.chats[x].user == mainUser._id) {
                        fnd = 'y';
                    }
                }
                if (fnd == 'y') {
                    delUsrCOn()
                }else {
                    delChtBx()
                }
            });
            // delete current chatbx
            const delChtBx = () => {
                var remThis = '';
                for (let z = 0; z < mainUser.chats.length; z++) {
                    if (mainUser.chats[z].user == user) {
                        remThis = mainUser.chats[z];
                    }
                }
                fetch(`/chats/pull/${mainUser._id}`, { method: 'put', body: JSON.stringify({ chats: remThis }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((deldata)=>{
                    if (deldata) {
                        fetch(`/chats/delete/${data._id}`, {
                            method : "delete"
                        }).then((response) => {
                            return response.json();
                        }).then((data) => {
                            if (data.ok == 1) {
                                $('.chatBodClass').remove();
                                $('#noChatsClckd').fadeIn();
                                Start();
                            }
                        });
                    }
                });
            };
            // delete mnUsr connection
            const delUsrCOn = () => {
                var remThis = '';
                for (let z = 0; z < mainUser.chats.length; z++) {
                    if (mainUser.chats[z].user == user) {
                        remThis = mainUser.chats[z];
                    }
                }
                fetch(`/chats/pull/${mainUser._id}`, { method: 'put', body: JSON.stringify({ chats: remThis }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((deldata)=>{
                    if (deldata) {
                        $('.chatBodClass').remove();
                        $('#noChatsClckd').fadeIn();
                        Start();
                    }
                });
            };

        });

    };
    // create op ids
    const crtOptId = (id) => {
        return {
            // bock sec
            opnBlckCon:  'opnBlckCon_' + id,
            blkckCon:  'blkckCon_' + id,
            blckChk: 'blckChk_' + id,
            blckYes: 'blckYes_' + id,
            blckNo: 'blckNo_' + id,
            // report
            rprtUsr: 'rprtUsr_' + id,
            rprtCon: 'rprtCon_' + id,
            canRprt: 'canRprt' + id,
            inapRprt: 'inapRprt_' + id,
            abusRprt: 'abusRprt_' + id,
            // del chat
            delChtOpn: 'delChtOpn_' + id,
            delChtCon: 'delChtCon_' + id,
            delChtY: 'delChtY_' + id,
            delChtN: 'delChtN_' + id,
        }
    };
    const allOptFUncs = (mainUser, data, setIds, wit, clas, dropHere, close, body) => {
        const ids = crtOptId(setIds);
        $(`#${dropHere}`).append(addOpts(wit, close, clas, ids));
        $(`#${close}`).click(()=>{
            if (clas = 'smOptCht') {
            // close Opt
                $('.smOptCht').remove();
            }
            if (clas = 'bgOptCht') {
                // close Opt
                    $('.bgOptCht').remove();
                }
            $(`#${body}`).slideUp();
        });
        optGenFUncs(mainUser, data, wit, clas, ids);
        getMode();
    };

    // creating ids
    const CreateIds = (data) => {
        return {
            chatBodId: 'chatBod_' + data._id,
            openBodId: 'openBod_' + data._id,
            situIcon: 'situIcon_' + data._id,
            // opt sec
            opnHdOpt: 'opnHdOpt_' + data._id,
            chtHdOPt: 'chtHdOPt_' + data._id,
            clsHdOPt: 'clsHdOPt_' + data._id,
            // blck icn
            blckdIcn: 'blckdIcn_' + data._id
        }
    };

    // display chats
    const displayChats = (data, mainUser, situ, users) => {
        const ids = CreateIds(data);
        var wit = ''; var usr = ''; var witno = ''; var usrno = '';
        var dt1 = ''; var dt2 = ''; var no1 = ''; var no2 = ''; 
        var witId = '';
        if (users) {
            for (let i = 0; i < users.length; i++) {
                if (data.uone.user == users[i]._id) {
                    dt1 = users[i].user_name;
                    no1 = data.uone.user;
                }
                if (data.utwo.user == users[i]._id) {
                    dt2 = users[i].user_name;
                    no2 = data.utwo.user;
                }
            }
            if (dt1.length > 15 || dt2.length > 15) {
                dt1 = dt1.slice(0, 15)+'..';
                dt2 = dt2.slice(0, 15)+'..';
                }
            if (dt1 == mainUser.user_name) {
                usr = dt1;
                wit = dt2;
            }else {
                usr = dt2;
                wit = dt1;
                for (let z = 0; z < users.length; z++) {
                    if (users[z]._id) {
                        
                    }                    
                }
            }
        }
            var pat = '';
            for (let x = 0; x < users.length; x++) {
                if (users[x]._id == data.utwo.user && data.utwo.user !== mainUser._id) {
                    pat = users[x].profile_pic;
                }
                if (users[x]._id == data.uone.user && data.uone.user !== mainUser._id) {
                    pat = users[x].profile_pic;
                }
            }
            getMode();
            $('#dropchat').prepend(chatHead(data, wit, usr, ids, pat));
            $(`#${ids.chatBodId}`).fadeIn();
            // situation check and adj
            OpenCbod(data, ids.chatBodId, ids.openBodId, ids.situIcon, wit, mainUser, pat, situ);
            SendM(data, ids.tareaId, ids.sendId, ids.prepMess, ids.chtFlwBd);
            //getMess(data, ids.prepMess, ids.chtFlwBd, mainUser);
            OptFunc(mainUser, data, ids.opnHdOpt, ids.chtHdOPt, ids.clsHdOPt, ids, wit);
            /*Share(data, ids.shareOpen, ids.shareBd, ids.optBd);*/
            const newMessC = () => {
                fetch('/chats/getChats', { method: 'get' }).then((response) => {
                    return response.json();
                }).then((newC) => {
                    var fnd = newC.find(i=>i._id==data._id);
                    if (fnd !== undefined) {
                        if (fnd.messages.length > data.messages.length || fnd.messages.length < data.messages.length) {
                            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                return response.json()
                            }).then((meUsr) => { 
                                getChat(meUsr);
                            });
                        } else {
                            setTimeout(() => {
                                newMessC();
                            }, 1);
                        }
                    }
                });
            }
            newMessC();
    }

        /* chats - xsm
        var chatxsml = `
        <div class="container-fluid" id="container-chats-xs" style="display:none;">
            <div class="row">
            <!-- settin the position -->
            <div class="col-xs-12">
                <div class="row">
                <!-- chats heading bellow -->
                <div id="chatcon-xs" class="col-xs-12" style="height:35px; position:fixed; z-index:2;">
                    <img src="img/backa.png" alt="" width="15px" height="25px" style="margin:5px; float:left; margin-right:20px;" id="closeChatterXs">
                    <p style="color:grey; font-size:15px; padding:5px; float:left;">Chats <img src="images/chat.png" alt="" width="15px" height="15px"> <strong id="chatlen" style="color:orange;"></strong> </p>
                    <img src="img/opt.png" alt="" width="10px" height="20px" style="float:right; margin:5px; cursor:pointer;" id="OpenChatSrh">
                    <img src="img/searcheda.png" alt="" width="20px" height="20px" style="float:right; margin:5px; cursor:pointer;" id="openSrchFrnds">
                </div>
                    <!-- search container bellow -->
                    <div class="col-xs-12" style="position:fixed; z-index:3; background-color:#f9f9f9; border-bottom:solid 1px #f0f0f0; height:35px; margin-top:35px; display:none;" id="frndsSrchr-xs">
                        <input type="text" name="" id="" style="margin:5px; width:70%; float:left; border:none; background-color:transparent; border-bottom:solid 1px #dddddd; font-size:13px; color:grey;" placeholder="search friends">
                        <div style="float:right; width:40px; height:100%; border-left:solid 1px #f0f0f0;">
                            <img src="img/up.png" alt="" width="30px" height="20px" style="margin:5px; float:right;" id="closeFrndsSrchr-xs">
                        </div>                    
                        <img src="img/searcha.png" alt="" width="20px" height="20px" style="float:right; margin:5px; cursor:pointer;">
                    </div>
                <!-- chats container bellow -->
                <div id="chatbod-xs" class="col-xs-12" style="margin-top:35px;">
                    <div style="height:35px;"></div>
    
                    <div style="margin:auto; width:150px; cursor:pointer;">
                        <div  style="margin:auto; width:70px; cursor:pointer;">
                            <img src="img/addxs.png" alt="" width="100%" height="70px">
                        </div>
                            <p style="margin:5px; color:skyblue; font-size:12px; text-align:center;"> <strong style="font-size:15px;">+</strong> Add Chats</p>
                    </div>
                    
                    <span id="dropchats"></span>
                    
                    
                    <br>
                </div>
                </div>
            </div>
            </div>
        </div>
        `;
        $('#dropChat').append(chatxsml)*/

        // chats con functionalities
        $('#closeChatterXs').click(function() {
            $('#chatsCol').fadeOut();
            $('#profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #headPusher-xs, #flowbod, .profbody, #profNavbar').css('display', 'block');
        });
        $('#openSrchFrnds').click(function() {
            $('#chatcon, #conDropCht').css('display', 'none');
            $('#frndsSrchr, #conDropCht-srch').slideDown();
        });
        $('#closeFrndsSrchr').click(function() {
            $('#frndsSrchr, #conDropCht-srch').css('display', 'none');        
            $('#chatcon, #conDropCht').slideDown();
        });

        /**
         * SEARCH FRIENDS FUNCS
         */
        // search input funcs
        $('#chtFrndsSrch').keyup(()=>{
            $('.srchdCon-3').remove();
            if ($('#chtFrndsSrch').val() !== '') {
                fetchUsers($('#chtFrndsSrch').val());
            }else {
                $('.srchdCon-3').remove();
            }
        });

        const checkModeSrc = (data, conId) => {
            // light or dark effects
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $(`#${conId}`).css('border', 'solid 1px #f0f0f0');
                }
                if (mode === 'dark') {
                    $(`#${conId}`).css('border', 'solid 1px #404040');
                }
            });
        };

        // for usrs
    const srchUser = (data, ids) => {
        var path = '';
        if (data.profile_pic == 'none') {
            path = 'img/profb.png';
        }else {
            path = `${data.profile_pic.path}`;
        }
        return `
        <div id="${ids.conId}" class="srchdCon-3" style="width:97.5%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:20%; height:100%; float:left;">
                <div style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${data.user_name}"><p class="subH_chts" style="padding:5px; margin:5px;">${data.user_name} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <div id="${ids.chatUpSrc}" style="width:20px; height:20px; margin:auto; background-size:100% 100%; margin-top:10px; cursor:pointer;"></div>
            </div>
        </div>
        `
    };
        const fetchUsers = (srch) => {
            fetch('/searcher/searchFrnd', {
                method: 'post',
                body: JSON.stringify({ srch: srch }),
                headers: { "Content-type" : "application/json; charset=utf-8" }
            }).then((response) => {
                return response.json();
            }).then((data)=>{
                if (data) {
                    /*if (data.length > 1) {
                        delrem = data.length;
                    }
                    if (data.length == 1) {
                        delrem = 2;
                    }
                    if (data.length == 0) {
                        delrem = 2;
                    }*/
                    //delApp();
                    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                        return response.json()
                    }).then((dataFlwn)=>{
    
                        $('.srchdCon-3').remove();
                        for (let i = 0; i < data.length; i++) {
                            if (srch.length > 0) {
                                displayUsers(data[i]);
                            }
                            if (srch.length == 0) {
                                for (let z = 0; z < dataFlwn.following.length; z++) {
                                    if (dataFlwn.following[z].user == data[i]._id) {
                                        displayUsers(data[i]);
                                    }
                                }
                            }
                        }
    
                    });
                }
            })
        };

    // CHAT_BTN FUNCS
    const chatUp = (data, chatUpSrc) => {

        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((user)=>{
            if (user) {

                var flag = '';
                for (let i = 0; i < user.chats.length; i++) {
                    if (user.chats[i].user == data._id) {
                        flag = 'white';
                        $(`#${chatUpSrc}`).css('background-image', 'url(img/chatd.png)');
                    }
                }
                if (flag == '') {
                    $(`#${chatUpSrc}`).css('background-image', 'url(img/chat.png)');
                }
                // display none
                if (user._id == data._id) {
                    $(`#${chatUpSrc}`).css('display', 'none');
                }

            }
        });

        // BTN_CLICK
        $(`#${chatUpSrc}`).click(()=>{
            var getBoth = () => {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                    checkInfo(mainUser, data._id);
                });
            };
            var checkInfo = (mainUser, exdata) => {
                fetch('/chats/getChats', { method: 'get' }).then((response) => {
                    return response.json();
                }).then((allChats) => {
                    var already = (chat) => {
                        fetch('/chats/alreadyEx', { method: 'post', body: JSON.stringify({ chat: chat }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((datam) => { 
                            location.reload();
                        });
                    };
                    var doesnt = (mainUser, exdata) => {
                        fetch('/chats/addChat', { method: 'post', body: JSON.stringify({ uone: {user: mainUser._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, utwo: {user: exdata, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, messages: [] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((datam) => { 
                            location.reload();
                        });
                    };
    
                    if (allChats.length > 0) {
                        var check = 'none';
                        for (let i = 0; i < allChats.length; i++) {
                            if (allChats[i].uone.user == mainUser._id && allChats[i].utwo.user == exdata || allChats[i].uone.user == exdata && allChats[i].utwo.user == mainUser._id) {
                                check = 'exists'; 
                                already(allChats[i]);
                            }
                        }
                        if (check == 'none') {
                            doesnt(mainUser, exdata);
                        }
                    }else {
                        doesnt(mainUser, exdata);
                    }
    
                });
            };
            getBoth();
        });

    };

    // create ids
    const createId = (data) => {
        return {
            conId: 'conId_' + data._id,
            chatUpSrc: 'chatUpSrchr_' + data._id,
            verIcon: 'verIconChay_srchr_' + data._id,
        }
    };
    // display function
    const displayUsers = (data) => {
        const ids = createId(data);
        $('#dropchat-srch').prepend(srchUser(data, ids));
        checkModeSrc(data, ids.conId);
        chatUp(data, ids.chatUpSrc);
        if (data.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
        getMode();
    };


    /**
     * for media size check
     * var x = window.matchMedia("(max-width: 600px)")
            if (x.matches) {
                $('.strFlowDiv').css('display', 'none');
                $('body').css('background-color', 'white');
            }
     */

}
Chats();
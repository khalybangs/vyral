function Search() {

    /* SEARCH FRIeNDS/TAGS AREAS AND FUNCTIONALITIES
    -------------------------------------------------
    */
    var srch = `
    <div class="row" id="srchflow-al">
        <!-- settin the position -->
        <div class="col-xs-12 col-md-12">
            <div class="row">
                <div class="col-xs-12 col-lg-12">
                    <div id="callSrchCon" style="width:100%; height:40px; border-radius:20px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.4);">
                        <img src="img/backa.png" alt="" width="15px" height="25px" style="margin:5px; float:left; margin-right:5px;" id="closeSrchrXs">
                        <input class="pL_subHs" type="text" name="search" id="srchfrndstags" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" placeholder="search" style="color:grey; border:none; background-color:transparent; width:70%; float:left; margin:5px; margin-top:10px;">
                        <img id="srcherbtn" src="img/searcha.png" alt="" width="25px" height="25px" style="float:right; cursor:pointer; margin:8px; margin-left:5px; opacity:0.7;">  
                    </div>
                </div>
                <div class="col-md-12 col-xs-12" id="searcherCon" style="display:none; margin-top:10px;">
                    <div class="row">
                        <div id="searcherNav" class="col-md-12 col-xs-12" style="height:30px; border-top-right-radius:5px; border-top-left-radius:5px;">
                            <p style="margin:0px; padding:5px; color:orange; float:left; cursor:pointer;" id="onSrchUsr">users</p>
                            <p style="margin:0px; padding:5px; color:grey; float:left; cursor:pointer;" id="onSrchStr">strings</p>
                        </div>
                    </div>
                    <!-- search friends drop div bellow -->
                    <div id="srchrFrnds" style="width:100%; overflow-y:auto;">
                        <span id="drpsrchfrnd"></span>
                        <br>
                    </div>
                    <!-- search tags drop div bellow -->
                    <div id="srchrStrngs" style="width:100%; display:none; overflow-y:auto;">
                        <span id="drpsrchstrs"></span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    $('#chats-pc, #mainchats-pc').after(srch);
    var searcher = $('#srchfrndstags');
    // smart value
    $('#srchfrndstags').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
    });

    // search type nav and func
    var locNow = 'Usr';
    $('#onSrchUsr').click(()=>{
        locNow = 'Usr';
        $('#onSrchUsr').css('color', 'orange');
        $('#onSrchStr').css('color', 'grey');
        $('#srchrStrngs').css('display', 'none');
        $('#srchrFrnds').css('display', 'block');
    });
    $('#onSrchStr').click(()=>{
        locNow = 'Str';
        $('#onSrchStr').css('color', 'orange');
        $('#onSrchUsr').css('color', 'grey');
        $('#srchrFrnds').css('display', 'none');
        $('#srchrStrngs').css('display', 'block');
    });

    // close searcher
    $('#closeSrchrXs').click(()=>{
        $('#srchflow-al').fadeOut();
        $('#profInfoCol, #profNavCol, #nav-xs, #naverxs, #minnaver, #headPusher-xs, #flowbod, #reaOrStr').css('display', 'block');
    });

    /**
     * BODIES
     */
    // for usrs
    const srchUser = (data, ids) => {
        var path = ''; var clas = '';
        if (data.profile_pic == 'none') {
            path = 'img/profb.png';
            clas = '';
        }else {
            path = `${data.profile_pic.path}`;
            clas = `${data.profile_pic.class}`;
        }
        return `
        <div id="${ids.conId}" class="srchdCon-2" style="width:100%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:20%; height:100%; float:left;">
                <div class="${clas}" style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${data.user_name}"><p class="srchd_hd" style="padding:5px; margin:5px;">${data.user_name} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <div id="${ids.chatUpSrc}" style="width:20px; height:20px; margin:auto; background-image:url(img/chatd.png); background-size:100% 100%; margin-top:10px; cursor:pointer;"></div>
            </div>
        </div>
        `
    };
    // for strs
    const srchStr = (data, ids) => {
        return `
        <div id="${ids.conId}" class="srchdCon-2" style="width:100%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:20%; height:100%; float:left;">
                <div style="width:28px; height:28px; margin:auto; background-image:url(img/strings.png); background-size:100% 100%; border-radius:100%; margin-top:5px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <p style="color:grey; padding:5px; margin:5px;">${data.name}</p>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p styl="text-align:center; margin:0px;">
                    <button id="${ids.viewId}" class="btn btn-default btn-xs view-srchdStrCon" style="border:solid 1px orange; margin-top:7.5px; color:darkorange; background-color:transparent;"><i>VIEW</i></button>
                </p>
            </div>
        </div>
        `
    };
    // search friends
    //var delrem = 1;
    var con = 'none';
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
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((dataFlwn)=>{

                    $('.srchdCon-2').remove();
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
    // fetch str
    const fetchStr = (srch, udata) => {
        fetch('/searcher/searchStr', {
            method: 'post',
            body: JSON.stringify({ srch: srch }),
            headers: { "Content-type" : "application/json; charset=utf-8" }
        }).then((response) => {
            return response.json();
        }).then((data)=>{
            if (data) {

                fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{ return responce.json() }).then((thrdata)=>{
                        
                    $('.srchdCon-2').remove();
                    for (let i = 0; i < data.length; i++) {
                        if (srch.length > 0) {
                            displayStr(data[i]);
                        }
                        if (srch.length == 0) {
                            for (let z = 0; z < thrdata.length; z++) {
                                if (thrdata[z].user == udata._id) {
                                    if (thrdata[z].tied_to == data[i]._id) {
                                        displayStr(data[i]);
                                        break;
                                    }
                                }
                            }
                        }
                    }

                });

            }
        })
    };

    const checkMode = (data, conId) => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $(`#${conId}`).css('border', 'solid 1px #f0f0f0');
                $('.srchd_hd').css('color', '#1a1a1a')
            }
            if (mode === 'dark') {
                $(`#${conId}`).css('border', 'solid 1px #404040');
                $('.srchd_hd').css('color', 'white')
            }
        });
    };

    /*const delApp = () => {
        for (let i = 0; i < delrem; i++) {
            $('#srchdCon-2').remove();
        }
    };*/
    
    // onkey up test
    $("#srchfrndstags").keyup(function(){
        $('.srchdCon-2').remove();
        $('.all_right_lsts').fadeOut();
        if (searcher.val() !== '') {
            $('#searcherCon').slideDown();
            if (locNow == 'Usr') {
                fetchUsers(searcher.val());
            }else {
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((udata) => {
                    fetchStr(searcher.val(), udata);
                });
            }
        }else {
            $('#searcherCon').slideUp();
            $('.all_right_lsts').fadeIn();
        }
    });

    /**
     * for users
     */
    // mssage searched user
    const chatUp = (exdata, chatUpSrc) => {

        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((user)=>{
            if (user) {

                var flag = '';
                for (let i = 0; i < user.chats.length; i++) {
                    if (user.chats[i].user == exdata._id) {
                        flag = 'white';
                        $(`#${chatUpSrc}`).css('background-image', 'url(img/chatd.png)');
                    }
                }
                if (flag == '') {
                    $(`#${chatUpSrc}`).css('background-image', 'url(img/chat.png)');
                }
                if (user._id == exdata._id) {
                    $(`#${chatUpSrc}`).css('display', 'none');
                }

            }
        });

        $(`#${chatUpSrc}`).click(()=>{
            var getBoth = () => {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                    checkInfo(mainUser, exdata._id);
                });
            };
            getBoth();
            var checkInfo = (mainUser, exdata) => {
                fetch('/chats/getChats', { method: 'get' }).then((response) => {
                    return response.json();
                }).then((allChats) => {
                    var already = (chat) => {
                        fetch('/chats/alreadyEx', { method: 'post', body: JSON.stringify({ chat: chat }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((datam) => { 
                            location.replace('/chat');
                            //getChat(mainUser);
                        });
                    };
                    var doesnt = (mainUser, exdata) => {
                        fetch('/chats/addChat', { method: 'post', body: JSON.stringify({ uone: {user: mainUser._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, utwo: {user: exdata, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, messages: [] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((datam) => { 
                            location.replace('/chat');
                            //getChat(mainUser);
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
        });

    };

    // create ids
    const createId = (data) => {
        return {
            conId: 'conId_' + data._id,
            chatUpSrc: 'chatUpSrchr_' + data._id,
            verIcon: 'verIconSchr_' + data._id,
        }
    };
    // display function
    const displayUsers = (data) => {
        const ids = createId(data);
        $('#drpsrchfrnd').append(srchUser(data, ids));
        checkMode(data, ids.conId);
        chatUp(data, ids.chatUpSrc);
        if (data.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
    };
    
    /**
     * for str
     */
    // view str
    const viewStr = (data, viewId) => {
        $(`#${viewId}`).click(()=>{
            fetch('strings/attachSrchd', { method: 'post', body: JSON.stringify({ att: data._id }), headers: { "Content-type" : "application/json; charset=utf-8" } });
        });
    };
    // create ids
    const createStrIds = (data) => {
        return {
            conId: 'conId_' + data._id,
            viewId: 'viewId_' + data._id
        }
    };
    // display func
    const displayStr = (data) => {
        const ids = createStrIds(data);
        $('#drpsrchstrs').append(srchStr(data, ids));
        checkMode(data, ids.conId);
        viewStr(data, ids.viewId);
    };

    $('#srcherbtn').click(()=>{
        $('.srchdCon-2').remove();
    });

    /* start search friends
    $('#srcherbtn').click(function(){
        $('#srchdCon').remove();
        if ($('#srchfrndstags').val() !== '') {
            fetch('/searcher/searchFrnd', {
                method: 'post',
                body: JSON.stringify({ srch: searcher.val() }),
                headers: { "Content-type" : "application/json; charset=utf-8" }
            }).then((response) => {
                return response.json();
            }).then((data)=>{
                if (data) {
                            $('#drpsrchfrnd').prepend(`
                                <div id="srchdCon" style="width:95%; margin:auto; height:40px; border:solid 1px #f0f0f0; border-radius:5px; margin-top:10px;">
                                    <div style="width:20%; height:100%; float:left;">
                                        <div style="width:20px; height:20px; margin:auto; background-image:url(img/profb.png); background-size:100% 100%; border-radius:100%; margin-top:10px;"></div>
                                    </div>
                                    <div style="width:40%; height:100%; float:left;">
                                        <a style="text-decoration:none;" href="/${data.user_name}"><p style="color:skyblue; padding:5px; margin:5px;">${data.user_name}</p></a>
                                    </div>
                                    <div style="width:40%; height:100%; float:right;"></div>
                                </div>
                            `);
                }
            })
        }
    });*/

}
Search();
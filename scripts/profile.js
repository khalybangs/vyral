function Profile() {

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

    const subsL = `
        <!-- friends pop-up -->
        <div class="row">

            <div id="opnSubcrs" class="col-xs-12 col-md-4" style="position:fixed; margin-top:25px; z-index:4; display:none;">
              <div id="subsMainCon" style="width:100%; height:447.5px; box-shadow:0px 0px 15px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="subssNavCon" style="width:100%; height:35px; border-top-right-radius:5px; border-top-left-radius:5px;">
                  <div id="" style="height:30px; width:100%;">
                    <p style="float:left; padding:5px; font-size:13px; color:orange; margin:0px;">subscribers</p>
                    <span style="padding:3.5px; margin-right:5px; float:right; cursor:pointer;" id="closeSubers"><img src="img/can.png" width="15px" height="15px"></span>
                  </div>
                </div>
                <div style="height:295px; width:100%; overflow-y:auto;">
                
                    <span id="drop-subers"></span>

                </div>
            </div>
          </div>

        </div>
        `;
    const frndsLC = `
        <!-- friends pop-up -->
        <div class="row">

            <div id="openFriends" class="col-xs-12 col-md-4" style="position:fixed; margin-top:25px; z-index:4; display:none;">
              <div id="frndsMainCon" style="width:100%; height:447.5px; box-shadow:0px 0px 15px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="frndsNavCon" style="width:100%; height:92.5px; border-top-right-radius:5px; border-top-left-radius:5px;">
                  <div id="frndsHd" style="height:30px; width:100%;">
                    <p style="float:left; padding:5px; font-size:13px; color:orange; margin:0px;">friends</p>
                    <span style="padding:3.5px; margin-right:5px; float:right; cursor:pointer;" id="closeFriends"><img src="img/can.png" width="15px" height="15px"></span>
                  </div>
                  <div style="height:62.5px; width:100%;">
                    <div style="width:50%; height:62.5px; float:left; cursor:pointer;">
                      <div id="opnFlwn" style="width: 100%; height: 40px; border-bottom:solid 1px skyblue;">
                        <p class="p_subHs" style="padding:10px; margin:0p; text-align:center;">FOLLOWING</p>
                      </div>
                      <div style="width: 100%; height: 22.5px;">
                        <p id="getFlwnMe" class="pL_subHs" style="text-align:center; font-size:12px; margin:0px; padding:5px;"></p>
                      </div>
                    </div>
                    <div style="width:50%; height:62.5px; float:right; margin-top:-1.5px; cursor:pointer;">
                      <div id="opnFlwr" style="width: 100%; height: 40px;">
                        <p class="p_subHs" style="padding:10px; margin:0px; text-align:center;">FOLLOWERS</p>
                      </div>
                      <div style="width: 100%; height: 22.5px;">
                        <p id="getFlwrsMe" class="pL_subHs" style="text-align:center; font-size:12px; margin:0px; padding:5px;"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div id="frndsSrchCon" style="width:100%; height:35px;">
                  <input id="frndsSrchFrnds" type="search" style="border:none; background-color:transparent; margin:5px; float:left; width:80%; float:left;" placeholder="search">
                  <img src="img/searcha.png" alt="" width="25px" height="25px" style="margin:5px; float:left;">
                </div> -->
                <div style="height:295px; width:100%; overflow-y:auto;">

                  <div style="width:100%; height:293px; overflow-y:auto;" id="flwnDiv">
                    <span id="drop-flwn"></span>
                  </div>
                  <div style="width:100%; height:293px; overflow-y:auto; display:none;" id="flwrDiv">
                    <span id="drop-flwr"></span>
                  </div>

                </div>
            </div>
          </div>

        </div>
        `;
    $('#dropChat').prepend(frndsLC, subsL);
        // detailes edit prof but
        $('.editProfprofy').click(function(){
            $('#editprofile').slideDown();
            $('#setAr').css('border-bottom', 'solid 2px skyblue');
            $('#mediaAr').css('border-bottom', '');
            $('#strAr').css('border-bottom', '');
            $('#myflow, #mystr').css('display', 'none');
            $('#myset').fadeIn();
        });
        // profile css
        $('#srchdiv, #srchbtn-xs').css('display', 'none');
        $('#naverxs').slideDown();
        $('#naverxs').css('display', 'block');
        $('#navopener-xs').attr('src', 'img/flowed.png');
        $('#openlocate-xs').css('display', 'none');
        // friends settings/open/close&others buttons
        var locNow = 'flwn';
        $('.frnAr').click(function(){
            $('#container-one').css('filter', 'blur(5px)');
            $('#openFriends').fadeIn();
            $('#flwnDiv').css('display', 'block');
            $('#flwrDiv').css('display', 'none');
            $('#opnFlwn').css('border-bottom', 'solid 1px skyblue');
            $('#opnFlwr').css('border-bottom', '');
            $('.frndsChild').remove();
            locNow = 'flwn';
            getFlwnp()
            addFrndsLen()
        })
        $('#closeFriends').click(function(){
            $('#container-one').css('filter', '');
          $('#openFriends').fadeOut();
        });
        $('#opnFlwn').click(function(){
          $('#flwnDiv').css('display', 'block');
          $('#flwrDiv').css('display', 'none');
          $('#opnFlwn').css('border-bottom', 'solid 1px skyblue');
          $('#opnFlwr').css('border-bottom', '');
          $('.frndsChild').remove();
            locNow = 'flwn';
            getFlwnp()
            addFrndsLen()
        });
        $('#opnFlwr').click(function(){
          $('#flwrDiv').css('display', 'block');
          $('#flwnDiv').css('display', 'none');
          $('#opnFlwr').css('border-bottom', 'solid 1px skyblue');
          $('#opnFlwn').css('border-bottom', '');
          $('.frndsChild').remove();
            locNow = 'flwrs';
            getFlwrs();
            addFrndsLen()
        });
        // subs
        $('.subArBtns').click(()=>{
            $('#container-one').css('filter', 'blur(5px)');
            $('#opnSubcrs').fadeIn();
            $('.frndsChild').remove();
            getSubs();
        });
        $('#closeSubers').click(function(){
            $('#container-one').css('filter', '');
            $('#opnSubcrs').fadeOut();
        });

          // min navbar settings for PC
          $('#mediaAr').css('border-bottom', 'solid 2px skyblue');
          $('#mediaAr').click(function() {
            $('#seeFlow').click();
            $('#mediaAr').css('border-bottom', 'solid 2px skyblue');
            $('#setAr').css('border-bottom', '');
            $('#strAr, #autAr').css('border-bottom', '');
            $('#myset, #mystr, #myAutc').css('display', 'none');
            $('#myflow').fadeIn();
          });
          $('#setAr, #setAr2').click(function() {
              $('#setAr').css('border-bottom', 'solid 2px skyblue');
              $('#mediaAr').css('border-bottom', '');
              $('#strAr, #autAr').css('border-bottom', '');
              $('#myflow, #mystr, #myAutc').css('display', 'none');
              $('#myset').fadeIn();
          });
          
          
          // edit profile settings
          // -----------------------
          // BUTTONS
          $('#editprofilebut').click(() => {
              $('#editprofile').slideDown();
            });
          $('#doneedit').click(() => {
            $('#editprofile').slideUp();                    
          });

          // EXTRACTION AND NODES FUNCTIONALITIES
          //--------------------------------------
          // fetch followers
          const getFlwrs = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json()
            }).then((udata) => { 
                  
                    if (udata) {
                        var user = '';
                        user = udata;
                        //alert(udata.followers.length);
                        for (let y = 0; y < udata.followers.length; y++) {
                            display(udata.following, udata.followers[y]);
                        }
                    }
            });
          };
          // fetch following
          const getFlwnp = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json()
            }).then((data) => { 
                    if (data) {
                        for (let i = 0; i < data.following.length; i++) {
                            displayFlwn(data.following[i].user);
                        }
                    }
                });
            }; 
          
          const addFrndsLen = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json()
            }).then((data) => { 
                if (data) {
                    $('#getFlwnMe').text(data.following.length);
                    $('#getFlwrsMe').text(data.followers.length);
                }
            });
          };

          // FRIENDS BOD TYPES
          // following
          const Folwn = (data, ids) => {
              return `
                <div class="frndsChild" style="width:98%; margin:auto; height:40px; border-radius:5px; margin-top:7.5px;">
                    <div style="width:25%; height:100%; float:left;">
                        <img src="img/profb.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left;">
                        <img src="img/chat.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left; cursor:pointer;">
                    </div>
                    <div style="width:50%; height:100%; float:left;">
                        <a href="/${data}" style="text-decoration:none;"><p class="nameTtles" style="margin:0px; padding:8px; font-size:12px;">${data} <img src="img/verification.png" id="${ids.verIcon}" width="13.5px" height="13.5px" style="margin-top:-3.5px; display:none;"></p></a>
                    </div>
                    <div style="width:25%; height:100%; float:right;">
                        <button id="${ids.unfllwId}" class="btn btn-default btn-xs" style="margin:5px; color:white; background-color:orange; border:solid 1px orange; margin-top:8px;">unfollow</button>
                    </div>
                </div>
              `
          };
          // following
          const Folwn2 = (user, ids) => {
              return `
                <div class="frndsChild" style="width:98%; margin:auto; height:40px; border-radius:5px; margin-top:7.5px;">
                    <div style="width:25%; height:100%; float:left;">
                        <img src="img/profb.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left;">
                        <img src="img/chat.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left; cursor:pointer;" id="${ids.chatUp2}">
                    </div>
                    <div style="width:50%; height:100%; float:left;">
                        <a href="/${user}" style="text-decoration:none;"><p class="nameTtles" style="margin:0px; padding:8px; font-size:12px;">${user} <img src="img/verification.png" id="${ids.verIcon}" width="13.5px" height="13.5px" style="margin-top:-3.5px; display:none;"></p></a>
                    </div>
                    <div style="width:25%; height:100%; float:right;">
                        <button id="${ids.unfllwId2}" class="btn btn-default btn-xs" style="margin:5px; color:white; background-color:orange; border:solid 1px orange; margin-top:8px;">unfollow</button>
                    </div>
                </div>
              `
          };
          // not following
          const Folwr = (data, ids) => {
            return `
              <div class="frndsChild" style="width:98%; margin:auto; height:40px; border-radius:5px; margin-top:7.5px;">
                    <div style="width:25%; height:100%; float:left;">
                        <img src="img/profb.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left;">
                        <img src="img/chat.png" width="25px" height="25px" style="margin:5px; margin-top:7px; float:left; cursor:pointer;">
                    </div>
                    <div style="width:50%; height:100%; float:left;">
                        <a href="/${data}" style="text-decoration:none;"><p class="nameTtles" style="margin:0px; padding:8px; font-size:12px;">${data} <img src="img/verification.png" id="${ids.verIcon}" width="13.5px" height="13.5px" style="margin-top:-3.5px; display:none;"></p></a>
                    </div>
                    <div style="width:25%; height:100%; float:right;">
                        <button id="${ids.followId}" class="btn btn-default btn-xs" style="margin:5px; color:grey; background-color:transparent; border:solid 1px orange; margin-top:8px;">follow</button>
                    </div>
              </div>
            `
         };

         // ACTION BUTTONS
         //----------------
         const checkBtns = (user, followId, unfllwId) => {

            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{ 
                if (users) {
                    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                        for (let i = 0; i < users.length; i++) {
                                if (users[i]._id == user) {
                                    thrw(users[i], mainUser);
                                }                       
                        }
                    });
                }
            });
            const thrw = (usr, main) => {
                for (let i = 0; i < usr.waiting_list.length; i++) {
                    if (usr.waiting_list[i].user == main._id) {
                        $(`#${followId}`).text('requested');
                        $(`#${followId}`).css('color', 'white');
                        $(`#${followId}`).css('background-color', 'orange');
                    }
                }                        
            };

         };
        const checkIf = (data, moment, mainUser) => {
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                 return responce.json();
            }).then((users)=>{ 
                if (users.length > 0) {
                    for (let i = 0; i < users.length; i++) {
                        if (data == users[i]._id) {
                            sendUser(users[i])
                        }
                    }
                }
                
            });
            
            const sendUser = (user) => {
                fetch('/notifications/sendNotiUser', { method: 'post', body: JSON.stringify({
                    user: user._id 
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                        if (sent) {
                            search(user);
                        }
                    });
                };
                const search = (user) => {
                    if (user.notifications.length > 0) {
                        var check = 'none';
                        for (let z = 0; z < user.notifications.length; z++) {
                            if (user.notifications[z].noti_type == 'follow' && user.notifications[z].user == mainUser._id) {
                                check = 'found';
                                if (moment == 'flw') {
                                    remNoti(user);
                                    addNoti();
                                }
                                if (moment == 'unflw') {
                                    remNoti(user);
                                }
                            }
                        }
                        if (check == 'none' && moment == 'flw') {
                            addNoti();
                        }
                        if (check == 'none' && moment == 'unflw') {
                            remNoti(user);
                        }
                    }else {
                        if (moment == 'flw') {
                            addNoti();
                        }
                        if (moment == 'unflw') {
                            remNoti(user);
                        }
                    }
                };
                const addNoti = () => {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: mainUser._id,
                        noti_type: 'follow',
                        date: [year, day, month, hour, minute, secnds] 
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                        }
                    });
                };
                const remNoti = (user) => {
                    fetch('/notifications/remNoti', { method: 'put', body: JSON.stringify({
                        user: mainUser._id,
                        noti_type: 'follow' 
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                        }
                    });
                };
    
        };
         // follow button
         const follow = (data, followId, unfllwId) => {
            const btn = $(`#${followId}`);
            btn.click(function(){
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                    if (mainUser) {
                        fetch('/getUsers', { method: 'get' }).then((responce)=>{
                            return responce.json();
                        }).then((users)=>{
                            for (let i = 0; i < users.length; i++) {
                                if (users[i]._id == data) {
                                    priv(users[i], mainUser)
                                }                               
                           }
                        });
                    }
                });
                const priv = (usr, mainUser) => {
                    if (usr.publicity == 'private') {
                         addReq(mainUser);
                     }else {
                         cnct(mainUser);
                     }
                };
                const addReq = (mainUser) => {
                    fetch('/notifications/AddReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/notifications/AddReqNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq', date: [year, day, month, hour, minute, secnds]}, to: data }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                                if (followedDt2) {
                                    $('.frndsChild').remove();
                                    getFlwrs();
                                }
                            });
                        }
                    });
                };
                const cnct = (mainUser) => {
                    fetch('/profiles/FollowUser', { method: 'put', body: JSON.stringify({ user: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                        if (followedDt) {
                            if (locNow == 'flwrs') {
                                $('.frndsChild').remove();
                                var moment = 'flw';
                                checkIf(data, moment, mainUser);
                                getFlwrs();
                            }
                        };
                    });
                    addFrndsLen()
                };
            });
         };
         // unfollow button
         const unfollow = (data, unfllwId) => {
            const btn = $(`#${unfllwId}`);
            btn.click(function(){
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                    cnct(mainUser);
                });
                const cnct = (mainUser) => {
                    fetch('/profiles/UnFollow', { method: 'put', body: JSON.stringify({ user: data, me: mainUser._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            var moment = 'unflw';
                            checkIf(data, moment, mainUser);
                            if (locNow == 'flwn') {
                                $('.frndsChild').remove();
                                getFlwnp();
                                reqs(mainUser);
                            }else {
                                $('.frndsChild').remove();
                                getFlwrs();
                            }
                        }
                    });
                    addFrndsLen()
                };
            })
            // requests
            const reqs = (mainUser) => {
                fetch('/notifications/RemReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    if (unfollow) {
                        fetch('/notifications/RemReqNoti', { method: 'put', body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq'}, to: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow2)=>{
                            if (unfollow2) {
                                getFlwrs();
                            }
                        });
                    }
                });
            };
         };
         // chat-up friend
         const chatUp = (exdata, chatUp) => {

            $(`#${chatUp}`).click(()=>{
                var getBoth = () => {
                    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                        checkInfo(mainUser, exdata);
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

         // create ids for followers
         const createIds = (user2) => {
             return {
                 followId: 'follow_' + user2.user,
                 unfllwId: 'unfllw_prof_' + user2.user,
                 // cat up funcs
                 chatUp: 'chatUp_' + user2.user,
                 verIcon: 'verIcon_you_' + user2.user,
                // vrification check done
             }
         };

         // create ids for following
         const createIds2 = (data) => {
             return {
                followId2: 'follow_me_' + data,
                unfllwId2: 'unfllw2_me_' + data,
                 // cat up funcs
                chatUp2: 'chatUp2_me_' + data,
                verIcon: 'verIcon_me_' + data,
                // vrification check done
             }
         };

         // DISPLAY FRIENDS
         //-----------------
         // display followers
         const colorTimes = () => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if (mode == 'light') {
                    $('.frndsChild').css('border', 'solid 1px #dddddd');
                    $('.frndsChild').css('background-color', 'white');
                    $('.nameTtles').css('color', 'grey');
                }else {
                    $('.frndsChild').css('border', 'solid 1px #404040');
                    $('.frndsChild').css('background-color', '#1a1a1a');
                    $('.nameTtles').css('color', 'silver');
                }
            });
         }
         const display = (user, user2) => {
             const ids = createIds(user2);
            var unme = ''; var ver = '';
            fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                // light or dark effects
                for (let z = 0; z < data3.length; z++) {
                    if (data3[z]._id == user2.user) {
                        unme = data3[z].user_name;
                        ver = data3[z].verification;
                    }
                }
                var whoIs = '';
                for (let i = 0; i < user.length; i++) {
                    if (user[i].user == user2.user) {
                        whoIs = user[i].user;
                        $('#drop-flwr').prepend(Folwn(unme, ids));
                    }
                }
                if (whoIs == '') {
                    $('#drop-flwr').prepend(Folwr(unme, ids));
                }
                if (ver == 'on') {
                    $(`#${ids.verIcon}`).css('display', 'inline');
                }
                checkBtns(user2.user, ids.followId, ids.unfllwId);
                follow(user2.user, ids.followId, ids.unfllwId);
                unfollow(user2.user, ids.unfllwId);
                chatUp(user2.user, ids.chatUp);
                colorTimes();
            });
        };

        const displayFlwn = (data) => {
            const ids = createIds2(data);
            var unme2 = ''; var ver = '';
            fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                // light or dark effects
                for (let z = 0; z < data3.length; z++) {
                    if (data3[z]._id == data) {
                        unme2 = data3[z].user_name;
                        ver = data3[z].verification;
                    }
                }
                $('#drop-flwn').prepend(Folwn2(unme2, ids));
                if (ver == 'on') {
                    $(`#${ids.verIcon}`).css('display', 'inline');
                }
                unfollow(data, ids.unfllwId2);
                chatUp(data, ids.chatUp2);
                colorTimes();
            });
        };

    /**
     * Subs
     */
    const displaySubs = (user, user2) => {
        const ids = createIds(user2);
            var unme = ''; var ver = '';
        fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
            // light or dark effects
            for (let z = 0; z < data3.length; z++) {
                if (data3[z]._id == user2.user) {
                    unme = data3[z].user_name;
                    ver = data3[z].verification;
                }
            }
            var whoIs = '';
            for (let i = 0; i < user.length; i++) {
                if (user[i].user == user2.user) {
                    whoIs = user[i].user;
                    $('#drop-subers').prepend(Folwn(unme, ids));
                }
            }
            if (whoIs == '') {
                $('#drop-subers').prepend(Folwr(unme, ids));
            }
            if (ver == 'on') {
                $(`#${ids.verIcon}`).css('display', 'inline');
            }
            checkBtns(user2.user, ids.followId, ids.unfllwId);
            follow(user2.user, ids.followId, ids.unfllwId);
            unfollow(user2.user, ids.unfllwId);
            chatUp(user2.user, ids.chatUp);
            colorTimes();
        });
    }
    const getSubs = () => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((udata) => { 
              
                if (udata) {
                    var user = '';
                    user = udata;
                    if (udata.user_type !== 'user' && udata.user_type.subscribers.length > 0) {
                        for (let i = 0; i < udata.user_type.subscribers.length; i++) {
                            displaySubs(udata.following, udata.user_type.subscribers[i]);
                        }
                    }
                }
        });
    }

}
Profile();
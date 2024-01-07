import { convert, tr } from "./gateway.js";
function Checkers() {
    
    fetch('/sess', {method: "get"}).then((responce) => {
        return responce.json();
    }).then((data) => {
        if (data === '' || data == null) {
            location.replace('/Login');
        }
    });
    
    // check if user exists
    fetch('/getExNode', {method: "get"}).then((responce) => {
        return responce.json();
    }).then((data) => {
        if (data == '') {
            $('#mainbod').css('display', 'none');
            $('#noExist').css('display', 'block');
        }
        if (data == '404') {
            $('#mainbod').css('display', 'none');
            $('#404None').css('display', 'block');;
        }
        if (data !== '' && data !== '404') {
            ExtractEd();
        }
    });

}
Checkers();

function ExtractEd() {

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
    
    $('.UnfollowUser').text(" F O L L O W I N G ");
    $('.UnfollowUser').hover(function(){
        $(this).text(" U N F O L L O W ");
      }, function(){
        $(this).text(" F O L L O W I N G ");
    });
    $('.UnfollowUser2').text(" R E Q U E S T E D ");
    $('.UnfollowUser2').hover(function(){
        $(this).text(" U N F O L L O W ");
      }, function(){
        $(this).text(" R E Q U E S T E D ");
    });
      $('#openwj, #openwj-xs').css('display', 'none');
    // detailes edit prof but
    $('.editProfprofy').click(function(){
        $('#setAr').css('border-bottom', 'solid 2px skyblue');
        $('#mediaAr').css('border-bottom', '');
        $('#strAr').css('border-bottom', '');
        $('#myflow, #mystr').css('display', 'none');
        $('#myset').fadeIn();
        $('#editprofile').slideDown();
    });
    // profile css
    $('#minnaver, #srchdiv, #srchbtn-xs, #openlocate-xs').css('display', 'none');
    $('#naverxs').slideDown();
  
      // min navbar settings for PC
      $('#mediaAr-ex').css('border-bottom', 'solid 2px skyblue');
      /*$('#setAr, #setAr2').click(function() {
          $('#setAr').css('border-bottom', 'solid 2px skyblue');
          $('#mediaAr').css('border-bottom', '');
          $('#strAr').css('border-bottom', '');
          $('#myflow, #mystr').css('display', 'none');
          $('#myset').fadeIn();
      });*/
      $('#strAr-ex').click(function() {
          $('#strAr-ex').css('border-bottom', 'solid 2px skyblue');
          $('#mediaAr-ex, #autAr-ex').css('border-bottom', '');
          $('#myflow-ex, #myaut-ex').css('display', 'none');
          $('#mystr-ex').fadeIn();
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
    

    // Asign external user info
    const getData = () => {
        fetch('/extractEx/getData', { method: 'get' }).then((response)=>{ return response.json() }).then((data)=>{
            $('.profuname').text(data.user_name);
            $('.profusername').text(data.name);
            $('.mailInf').attr('href', `http://${data.email}`);
            $('.statusbod').text(data.user_status);
            $('#chatlen').text(data.chats.length);
            if (data.verification == "on") {
                $('#verifTag').css("display", "inline");
            }
            if (data.user_type.type && data.user_type.status == 'on') {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() 
                }).then((mainUser)=>{
                    $('.usrAutUiBodss, .usrAutUiBodssN').fadeIn();
                    $('#profInfoCol').css('display', 'none');
                    const hive = (hi) => {
                        return `
                        <div class="hiveBody" id="" style="float:left; margin:3px; height:25px; background-color:white; border-radius:15px; border:none; margin-bottom:5px;z">
                            <p style="float:left; margin:3px; padding:2px; color:rgb(255, 149, 0); font-size:11.5px; margin-top:3px;"> ${hi} </p>
                        </div>
                        `
                    }
                    var ttF = data.following.length+data.followers.length;
                    magicNumbers('.frndLen', ttF);
                    for (let i = 0; i < data.user_type.categories.length; i++) {
                        $('.drpCatsAtt').append(hive(data.user_type.categories[i]));
                        if (mainUser.mode == 'light') {
                            $('.hiveBody').css('background-color', 'white');
                        } else {
                            $('.hiveBody').css('background-color', '#262626');
                        }
                    }
                    if (data.user_type.background == 'none') {
                        $('#autBckImgCon').css('background-image', `url(img/cb2.png)`);
                        $('#autBckImgCon').css('background-size', `cover`);
                    }else {
                        $('#autBckImgCon').css('background-image', `url(${data.user_type.background.path})`);
                        $('#autBckImgCon').addClass(`${data.user_type.background.class}`);
                    }
                    if (data.profile_pic == 'none') {
                        if (mainUser.mode == 'light') {
                            $('#profPicdivA').css('background-color', '#f9f9f9');
                            $('#profPicdivA').css('border', 'solid 3px #f0f0f0');
                        } else {
                            $('#profPicdivA').css('background-color', '#1a1a1a');
                            $('#profPicdivA').css('border', 'solid 3px #404040');
                        }
                    }
                    magicNumbers('.subsLen', data.user_type.subscribers.length);
                });
            }else {
                $('.usrAutUiBodss, .usrAutUiBodssN').fadeIn();
                $('#aithProfI').css('display', 'none')
            }
            if (data.profile_pic == 'none') {
                $('#profpicdiv, #profPicdivA').css('background-image', 'url(img/profpic.png)');
                $('#profpicdiv, #profPicdivA').css('background-size', '100% 100%');
            }else {
                $('#profpicdiv, #profPicdivA').css('background-image', `url(${data.profile_pic.path})`);
                $('#profpicdiv, #profPicdivA').attr('class', `${data.profile_pic.class}`);
                $('#profpicdiv, #profPicdivA').css('background-size', 'cover');
            }
            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((psts)=>{
                var reads = 0;
                for (let i = 0; i < psts.length; i++) {
                    if (psts[i].user == data._id && psts[i].content_type !== 'thread' && psts[i].content_type !== 'string') {
                        if (psts[i].body !== '') {
                            reads = reads+psts[i].reads.length;
                        }
                    }
                }
                $(`#readLenExprof`).text(reads);
            });
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                
                var ckr = '';
                if (data.blocked_list.length < 1) {
                    ckr = '';
                }else {
                    for (let i = 0; i < data.blocked_list.length; i++) {
                        if (data.blocked_list[i].user == mainUser._id) {
                            ckr = 'y';
                        }
                    }
                }

                // PUBLICITY SETTINGS
                if (ckr == 'y') {
                    $('.checkBlck').css('display', 'block');
                    $('.askFollowCon2, .askFollowCon, #exprofNavArea, .chatUser').css('display', 'none');
                    $('#dropbox-exj, #checknum-exj').remove();
                }else {
                    if (data.publicity == 'public') {
                        $('.checkpriv').css('display', 'none');
                        $('.askFollowCon2').css('display', 'none');
                        $('#exprofNavArea').css('display', 'block');
                        $('.askFollowCon').css('display', 'block');
                    } else {
                        var ch = 'n';
                        for (let i = 0; i < data.followers.length; i++) {
                            if (data.followers[i].user == mainUser._id) {
                                $('.checkpriv').css('display', 'none');
                                $('.askFollowCon2').css('display', 'none');
                                $('#exprofNavArea').css('display', 'block');
                                $('.askFollowCon').css('display', 'block');
                                ch = 'y';
                            }
                        }
                        if (ch == 'n') {
                            $('.askFollowCon').css('display', 'none');
                            $('#dropbox-exj, #checknum-exj').remove();
                            $('#exprofNavArea').css('display', 'none');
                            $('.checkpriv').css('display', 'block');
                            $('.askFollowCon2').css('display', 'block');
                        }
                    }
                }

                // block funcs
                // opn clk
                var ckrx = '';
                const checkBlocked = () => {
                    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() 
                    }).then((udata)=>{
                        mainUser = udata;
                        if (mainUser.blocked_list.length < 1) {
                            ckrx = '';
                        }else {
                            for (let i = 0; i < mainUser.blocked_list.length; i++) {
                                if (mainUser.blocked_list[i].user == data._id) {
                                    ckrx = 'y';
                                }
                            }
                        }
                        if (ckrx == 'y') {
                            $('#chkBlckEx').text('un-block');
                        } else {
                            $('#chkBlckEx').text('block');
                        }
                    });
                }
                checkBlocked();
                $('#blockExUsr').click(()=>{
                    checkBlocked();
                    $('#blockExUsr').slideUp();  
                    $('#blockExCon').slideDown();  
                });
                $('#noBlckEx').click(()=>{
                    $('#blockExCon').slideUp();    
                    $('#blockExUsr').slideDown();  
                });
                $('#yesBlckEx').click(()=>{
                    if (ckrx == 'y') {
                        fetch('/settings/unblock', { method: 'put', body: JSON.stringify({ user: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((result)=>{
                            if (result) {
                                location.reload();
                            }
                        });
                    }else {
                        fetch('/settings/block', { method: 'put', body: JSON.stringify({ user: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((result)=>{
                            if (result) {
                                location.reload();
                            }
                        });
                    }
                });
                
                // ADD/REMOVE/REQUEST USER AS FRIEND
                //------------------------------------
                // fetch friend-functionalities
                const Follow = () => {
                    fetch('/extractEx/FollowUser', { method: 'put', body: JSON.stringify({ user: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                        if (followedDt) {
                            fetch('/extractEx/FolToNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: mainUser._id, noti_type: 'follow', date: [year, day, month, hour, minute, secnds] }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                                if (followedDt2) {
                                    $('.followExUser').css('display', 'none');
                                    $('.followExUser2').css('display', 'none');
                                    $('.UnfollowUser').css('display', 'block');
                                    $('.UnfollowUser2').css('display', 'block');
                                }
                            });
                        }
                    });
                };
                const AddReq = () => {
                    fetch('/extractEx/AddReq', { method: 'put', body: JSON.stringify({ user: mainUser._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/extractEx/AddReqNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: mainUser._id, noti_type: 'frnd_rq', date: [year, day, month, hour, minute, secnds] }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                                if (followedDt2) {
                                    $('.followExUser2').css('display', 'none');
                                    $('.followExUser').css('display', 'none');
                                    $('.UnfollowUser2').css('display', 'block');
                                    $('.UnfollowUser').css('display', 'block');
                                }
                            });
                        }
                    });
                };
                const UnFollow = () => {
                    fetch('/extractEx/UnFollow', { method: 'put', body: JSON.stringify({ user: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/extractEx/UnFolToNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: mainUser._id, noti_type: 'follow' }) }).then((response)=>{ return response.json() }).then((unfollow2)=>{
                                if (unfollow2) {
                                    $('.UnfollowUser').css('display', 'none');
                                    $('.UnfollowUser2').css('display', 'none');
                                    $('.followExUser').css('display', 'block');
                                    $('.followExUser2').css('display', 'block');
                                }
                            });
                        }
                    });
                };
                const RemReq = () => {
                    fetch('/extractEx/RemReq', { method: 'put', body: JSON.stringify({ user: mainUser._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/extractEx/RemReqNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: mainUser._id, noti_type: 'frnd_rq' }) }).then((response)=>{ return response.json() }).then((unfollow2)=>{
                                if (unfollow2) {
                                    $('.UnfollowUser2').css('display', 'none');
                                    $('.UnfollowUser').css('display', 'none');
                                    $('.followExUser2').css('display', 'block');
                                    $('.followExUser').css('display', 'block');
                                }
                            });
                        }
                    });
                };
                // tap friends functions
                $('.UnfollowUser').click(function() {
                    UnFollow();
                });
                $('.UnfollowUser2').click(function() {
                    RemReq();
                });
                $('.followExUser').click(function() {
                    Follow();
                });
                $('.followExUser2').click(function() {
                    AddReq();
                });
                // publicity/waiting list nuerons
                var pubCheck = () => {
                    if (data.publicity == 'private') {
                        if (data.waiting_list.length > 0) {
                            for (let i = 0; i < data.waiting_list.length; i++) {
                                if (data.waiting_list[i].user == mainUser._id) { 
                                    $('.followExUser2').css('display', 'none');
                                    $('.UnfollowUser2').css('display', 'block');
                                    break; 
                                }
                                $('.UnfollowUser2').css('display', 'none');
                                $('.followExUser2').css('display', 'block');
                            }
                        }else {
                            $('.UnfollowUser2').css('display', 'none');
                            $('.followExUser2').css('display', 'block');
                        }
                    }else {
                        console.log('not following');
                        $('.UnfollowUser').css('display', 'none');
                        $('.followExUser').css('display', 'block');
                    }
                }
                // external profile conditions
                if (mainUser.following.length > 0) {
                    var folF = '';
                    for (let i = 0; i < mainUser.following.length; i++) {
                        if (mainUser.following[i].user == data._id) {
                            folF = 'y';
                            $('.followExUser').css('display', 'none');
                            $('.followExUser2').css('display', 'none');
                            $('.UnfollowUser').css('display', 'block');
                            $('.UnfollowUser2').css('display', 'block');
                            break;
                        } 
                    }
                    if (folF == '') {
                        pubCheck();
                    }
                }else {
                    pubCheck();
                }

                // subs check funcs
                // ----------------
                if (data.user_type.type && data.user_type.status == 'on') {

                    // ectract check
                    $('#autAr-ex').fadeIn();
                    const typeN = (nw) => {
                        if (nw == 'n') {
                            $('.subsExProf').attr('style', 'border:solid 1px darkorange; color:darkorange; border-radius:5px; background:transparent;');
                            $('.subsExProf').html(`SUBSCRIBE <img src="img/sub.png" width="20px" height="13px" style="margin-top:-3px; margin-left:3px;">`);
                        }else {
                            $('.subsExProf').attr('style', 'border:none; color:silver; border-radius:5px; background:transparent;');
                            $('.subsExProf').html(`SUBSCRIBED <img src="img/subs.png" width="20px" height="13px" style="margin-top:-3px; margin-left:3px;">`);
                        }
                    };
                    var nwS = '';
                    if (data.user_type.subscribers.length > 0) {
                        for (let i = 0; i < data.user_type.subscribers.length; i++) {
                            if (data.user_type.subscribers[i].user == mainUser._id) {
                                nwS = 'y';
                                typeN(nwS);
                                break;
                            }else {
                                nwS = 'n';
                                typeN(nwS);
                            }  
                        }
                    } else {
                        nwS = 'n';
                        typeN(nwS);
                    }
                }
                // pay sub edtstatalert editPopBod editPopHead
                const paySub = (neData) => {
                    const checkMode = () => {
                        if (mainUser.mode == 'light') {
                            $('#askPayBod').css('background-color', 'white');
                            $('#askPayHd').css('border-bottom', 'solid 1px #f0f0f0');
                            $('.pay_con').css('background-color', '#f0f0f0');
                            $('.p_divider').css('color', '#f0f0f0');
                        }else {
                            $('#askPayBod').css('background-color', '#262626');
                            $('#askPayHd').css('border-bottom', 'solid 1px #404040');
                            $('.pay_con').css('background-color', '#404040');
                            $('.p_divider').css('color', '#262626');
                        }
                    }
                    const askSubCons = () => {
                        return `
                        <div class="row sub_m_con">
                            <div class="col-lg-4"></div>
                            <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="askPayCon">
                                <div id="askPayBod" class="" style="width:100%; height:450px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                                    <div id="askPayHd" class=""style="width:100%; height:35px; margin-bottom:15px;">
                                        <p style="margin:5px; color:orange; float:left;"> edit status </p>
                                        <span style="float:right; margin:3px; margin-right:5px; color:red; font-size:18px; cursor:pointer;" id="clsPaySUB"><img src="img/can.png" width="13px" height="13px"></span>
                                    </div>
                                    <div style="width:100%; height:365px; border-bottom:solid 1px orange;">
                                        <div style="width:100%; height:165px;">
                                            <p class="p_subHs" style="text-align:center; margin:0px; padding:5px;"> Make payment to subscribe to <span style="font-weight:normal;">${neData.user_name}</span>'s Author Contents </p>
                                            <p class="postHeaderfrst" style="margin:0px; padding:5px; text-align:center;"> <span class="p_subHs" style="font-weight:normal; font-size:18px;">NGN</span> <span class="p_subHs" style="font-size:35px;" id="subExPrcT"></span> </p>
                                            <hr style="margin:5px; width:90%;">
                                            <p class="p_subHs" style="text-align:center; margin:0px; padding:3px; font-size:14px;">duration</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">1 month <input type="checkbox" class="subDrCs" checked id="subDr1"></p>  </div>
                                                <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">6 month <input type="checkbox" class="subDrCs" id="subDr6"></p>  </div>
                                                <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">1 year <input type="checkbox" class="subDrCs" id="subDrY"></p>  </div>
                                            </div>
                                        </div>
                                        <div style="width:100%; height:160px;">
                                            <div class="pay_con" style="width:90%; margin:auto; height:140px; border-radius:10px; margin-top:10px;"></div>
                                        </div>
                                    </div>
                                    <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs p_subHs" style="border-radius:5px; background-color:transparent;" id="paySDone">submit</button> </p>
                                </div>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                        `
                    }
                    $('#dropChat').prepend(askSubCons());
                    $('#container-one').css('filter', 'blur(5px)');
                    $('#askPayCon').fadeIn();
                    checkMode();
                    // check success
                    const subScss = (pay, tr) => {
                        var targetDate = new Date();
                        targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
                        var countDownDate = targetDate.getTime();
                        var x = setInterval(function() {
                            var now = new Date().getTime();
                            // Find the distance between now and the count down date
                            var distance = countDownDate - now;
                            if (distance < 0) {
                                if (tr == 'successful') {
                                    var nSubs = neData.user_type.subscribers;
                                    nSubs[nSubs.length] = {user: mainUser._id, type: 'paid', duration: pay.info.duration, exp: pay.info.exp}; var pass = {user: mainUser._id, type: 'paid', sub_to: neData._id, amount: pay.info.amount, date: pay.info.date};
                                    meSubNoti(neData, pay, pass);
                                    subscribeF(neData, nSubs, pass);
                                    clearInterval(x);
                                } else {
                                    if (tr == 'unsuccessful') {
                                        alert('Something happened, Your transaction was not completed!');
                                        tr = 'none';
                                        clearInterval(x);
                                    }
                                }
                            }
                        }, 1000);
                    }
                    // duration con
                    var nw = new Date();
                    var fullD = Math.floor(nw/8.64e7);
                    var durt = 30; var dLen = '1 month'; var totalP = Number(neData.user_type.price);
                    var perc = 1.55/100*totalP;
                    var amnt = perc+totalP;
                    $('#subExPrcT').text(amnt);
                    const chngDur = () => {
                        perc = 1.55/100*totalP; amnt = perc+totalP;
                        $('#subExPrcT').text(amnt);
                        if (durt == 30) {
                            document.getElementById('subDr6').checked = false;
                            document.getElementById('subDrY').checked = false;
                            document.getElementById('subDr1').checked = true;
                        }
                        if (durt == 180) {
                            document.getElementById('subDr1').checked = false;
                            document.getElementById('subDrY').checked = false;
                            document.getElementById('subDr6').checked = true;
                        }
                        if (durt == 365) {
                            document.getElementById('subDr1').checked = false;
                            document.getElementById('subDr6').checked = false;
                            document.getElementById('subDrY').checked = true;
                        }
                    }
                    $('#subDr1').click(()=>{
                        durt = 30; dLen = '1 month'; totalP = Number(neData.user_type.price);
                        chngDur();
                    });
                    $('#subDr6').click(()=>{
                        durt = 180; dLen = '6 months'; totalP = Number(neData.user_type.price*6);
                        chngDur();
                    });
                    $('#subDrY').click(()=>{
                        durt = 365; dLen = '1 year'; totalP = Number(neData.user_type.price*12);
                        chngDur();
                    });
                    // make payment
                    function payWithPaystack(k, pay) {
              
                        let handler = PaystackPop.setup({
                          key: k, // Replace with your public key
                          email: mainUser.email,
                          amount: amnt * 100,
                          ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                          // label: "Optional string that replaces customer email"
                          onClose: function(){
                            alert('Window closed.');
                            var tr = 'unsuccessful';
                            subScss(pay, tr);
                          },
                          callback: function(response){
                            let message = 'Payment complete! Reference: ' + response.reference;
                            //var reciept = { name: $('#name_cust').val(), mail: $('#mail_cust').val(), amount: totalP, rate_amnt: amnt, items: items, transaction_inf: response, date: [year, day, month, hour, minute, secnds]};
                            fetch('/gate/addRec', {
                                method: 'post',
                                body: JSON.stringify({ name: mainUser.user_name, mail: mainUser.email, user: mainUser._id, amount: totalP, rate_amnt: amnt, for: "subscription", sub_to: neData._id, transaction_inf: response, date: [year, day, month, hour, minute, secnds] }),
                                headers : {
                                    "Content-type" : "application/json; charset=utf-8"
                                } 
                            }).then((response)=>{
                                return response.json();
                            }).then((data)=>{
                                alert(message);
                                var tr = 'successful';
                                subScss(pay, tr);
                            });
                          }
                        });
                      
                        handler.openIframe();
                    }
                    $('#paySDone').click(()=>{
                        fetch('/gate/pub_k', {method: "get"}).then((responce) => {
                            return responce.json();
                        }).then((k) => {
                            var pay = {transact: {
                                type: 'usr_sub', amount: amnt
                            }, info: {
                                user: mainUser._id, type: 'paid', duration: dLen, exp: fullD+durt,  sub_to: neData._id, amount: amnt, date: [year, day, month, hour, minute, secnds]
                            }}; 
                            payWithPaystack(k, pay)
                        });
                        /*
                        var pay = {transact: {
                            type: 'usr_sub', amount: amnt
                        }, info: {
                            user: mainUser._id, type: 'paid', duration: dLen, exp: fullD+durt,  sub_to: neData._id, amount: amnt, date: [year, day, month, hour, minute, secnds]
                        }}; 
                        var tpe = 'usr_sub';
                        convert(pay, tpe, neData, mainUser);
                        subScss(pay);*/
                    });
                    //cls
                    $('#clsPaySUB').click(()=>{
                        $('.sub_m_con').fadeOut();
                        $('#container-one').css('filter', '');
                        $('.sub_m_con').remove();
                    });
                };
                // add to noti
                const subNBoties = (act, info) => {
                    if (act == 'add') {
                        fetch('/extractEx/addSubnt', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: mainUser._id, noti_type: 'sub', type: info.type, amount: info.amount, date: [year, day, month, hour, minute, secnds] }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                            if (followedDt2) {
                                location.reload();
                            }
                        });
                    } else {
                        
                    }
                };
                // send sub noti
                const meSubNoti = (neData, pay, pass) => {
                    fetch('/transct/payUNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ noti_type: 'sub', type: "paid", sub_to: neData._id, amount: pay.info.amount, duration: pay.info.duration, date: [year, day, month, hour, minute, secnds] }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                        if (followedDt2) {
                            //location.reload();
                        }
                    });
                }
                // subscribe
                var subscribeF = (usr, subs, pass) => {
                    fetch('/extractEx/setUsrtp', {
                        method: 'post',
                        body: JSON.stringify({ id: usr._id, user_type: {type: usr.user_type.type, categories: usr.user_type.categories, subscritpions: usr.user_type.subscritpions, subscribers: subs, status: usr.user_type.status, price: usr.user_type.price, background: usr.user_type.background} }),
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        } 
                    }).then((response)=>{
                        return response.json();
                    }).then((rd)=>{
                        fetch('/extractEx/addSub', {
                            method : 'post',
                            body : JSON.stringify({ user: pass.user, type: pass.type, sub_to: pass.sub_to, amount: pass.amount, date: pass.date }),
                          headers : {
                            "Content-type" : "application/json; charset=utf-8"
                          }
                        }).then((response)=>{
                            return response.json();
                        }).then((dn)=>{
                            if (rd) {
                                var act = 'add'; var info = {user: pass.user, type: pass.type, sub_to: pass.sub_to, amount: pass.amount, date: pass.date};
                                subNBoties(act, info);
                                location.reload();
                            }
                        });
                    });
                }
                $('.subsExProf').click(()=>{
                    fetch('/extractEx/getData', { method: 'get' }).then((response)=>{ return response.json() }).then((neData)=>{
                        var nwS = 'n';
                        if (neData.user_type.subscribers.length > 0) {
                            for (let i = 0; i < neData.user_type.subscribers.length; i++) {
                                if (neData.user_type.subscribers[i].user == mainUser._id) {
                                    nwS = 'y';
                                }
                            }
                        } else {
                            nwS = 'n';
                        }
                        if (nwS == 'n') {
                            var nSubs = new Array();
                            nSubs = neData.user_type.subscribers;
                            if (neData.user_type.price == 'none') {
                                nSubs[nSubs.length] = {user: mainUser._id, type: 'free', duration: 'none', exp: 'none'}; var pass = {user: mainUser._id, type: 'free', sub_to: neData._id, amount: 'none', date: [year, day, month, hour, minute, secnds]};
                                subscribeF(neData, nSubs, pass);
                            } else {
                                paySub(neData);
                            }
                        } else {
                            $('#dropChat').prepend(`
                            <div class="row" id="expAskUnsubCon" style="display:none;">
                                <div class="col-lg-12 col-xs-12" style="position:fixed; height:100%; z-index:4;">
                                    <div class="row">
                                        <div class="col-lg-4" style=""></div>
                                        <div class="col-lg-4 col-xs-12" style="margin-top:10px;">
                                            <div class="editPopBod2" style="width:100%; height:140px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                                                <div style="width:100%; height:100px;">
                                                    <p style="text-align:center; margin:0px; padding:4px; font-size:17px;" class="postHeaderfrst">Are you sure you want unsubscribe to this account? <br>All access to this account's <span style="font-weight:normal;">Author Contents</span> will be lost!</p>
                                                </div>    
                                                <div style="width:100%; height:40px;" class="ask_con">
                                                    <p id="yesUnsubAut" style="float:left; cursor:pointer; color:orangered; margin:0px; padding:5px; font-size:18px;">Yes</p>                                                
                                                    <p class="postHeaderfrst" id="noUnsubAut" style="float:right; cursor:pointer; margin:0px; padding:5px; font-size:18px;">Cancel</p>                                                
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="col-lg-4" style=""></div>
                                    </div>
                                </div>
                            </div>    
                            `);
                            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                                if(mode == 'light') {
                                    $('.editPopBod2').css('background-color', 'white');
                                    $('.postHeaderfrst').css('color', '#1a1a1a');
                                    $('.ask_con').css('border-top', 'solid 1px #f0f0f0');
                                }else {
                                    $('.editPopBod2').css('background-color', '#262626');
                                    $('.postHeaderfrst').css('color', 'white');
                                    $('.ask_con').css('border-top', 'solid 1px #404040');
                                }
                            });
                            $('#container-one').css('filter', 'blur(5px)');
                            //$('#container-one').css('filter', '');
                            $('#expAskUnsubCon').fadeIn();
                            // cancel
                            $('#noUnsubAut').click(()=>{
                                $('#expAskUnsubCon').fadeOut();
                                $('#container-one').css('filter', '');
                                $('#expAskUnsubCon').remove();
                            });
                            // un-subscribe
                            $('#yesUnsubAut').click(()=>{
                                var subsN = neData.user_type.subscribers;
                                for (let h = 0; h < subsN.length; h++) {
                                    if (subsN[h].user == mainUser._id) {
                                        subsN.splice(h, 1);
                                    }
                                }
                                fetch('/extractEx/setUsrtp', {
                                    method: 'post',
                                    body: JSON.stringify({ id: neData._id, user_type: {type: neData.user_type.type, categories: neData.user_type.categories, subscritpions: neData.user_type.subscritpions, subscribers: subsN, status: neData.user_type.status, price: neData.user_type.price, background: neData.user_type.background} }),
                                    headers : {
                                        "Content-type" : "application/json; charset=utf-8"
                                    } 
                                }).then((response)=>{
                                    return response.json();
                                }).then((rd)=>{
                                    location.reload();
                                });
                            });
                        }
                    });
                });
            });
            
        });
    };
    getData();

    // ------------------------------------------
    // FRIENDS settings/open/close&others buttons
    // ------------------------------------------
    $('.frnAr').click(function(){
        $('#openFriends').fadeIn();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            getFlwn(udata);
        });
    })
    $('#closeFriends').click(function(){
        $('#openFriends').fadeOut();
    });
    $('#opnFlwn').click(function(){
        $('#flwnDiv').css('display', 'block');
        $('#flwrDiv').css('display', 'none');
        $('#opnFlwn').css('border-bottom', 'solid 1px skyblue');
        $('#opnFlwr').css('border-bottom', '');
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            getFlwn(udata);
        });
    });
    $('#opnFlwr').click(function(){
        $('#flwrDiv').css('display', 'block');
        $('#flwnDiv').css('display', 'none');
        $('#opnFlwr').css('border-bottom', 'solid 1px skyblue');
        $('#opnFlwn').css('border-bottom', '');
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            getFlwr(udata);
        });
    });
    // fetch following
    const getFlwn = (udata) => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                    $('.frndsChild').remove()
                    for (let i = 0; i < exdata.following.length; i++) {
                        for (let z = 0; z < data3.length; z++) {
                            if (data3[z]._id == exdata.following[i].user) {
                                var exType = 'flwn'; var meType = 'none';
                                for (let x = 0; x < udata.following.length; x++) {
                                    if (data3[z]._id == udata.following[x].user) {
                                        meType = 'friend';
                                    }
                                }
                                chkFrndMode();
                                displayFriends(data3[z], udata, exType, meType);
                                addFrndsLen();
                            }
                        }
                        
                    }
                });

            }
        });
    }; 
    // fetch followers
    const getFlwr = (udata) => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                    $('.frndsChild').remove();
                    for (let i = 0; i < exdata.followers.length; i++) {
                        for (let z = 0; z < data3.length; z++) {
                            if (data3[z]._id == exdata.followers[i].user) {
                                var exType = 'flwr'; var meType = 'none';
                                for (let x = 0; x < udata.following.length; x++) {
                                    if (data3[z]._id == udata.following[x].user) {
                                        meType = 'friend';
                                    }
                                }
                                chkFrndMode();
                                displayFriends(data3[z], udata, exType, meType);
                                addFrndsLen();
                            }
                        }
                        
                    }
                });

            }
        });
    }; 
    const addFrndsLen = () => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data)=>{
            if (data) {
                $('#getFlwnEx').text(data.following.length);
                $('#getFlwrsEx').text(data.followers.length);
            }
        });
    };
    addFrndsLen();
    // subscribers funcs
    $('.get_ex_subs').click(function(){
        $('#opnExSubrs').fadeIn();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            getSubs(udata);
        });
    });
    $('#clsExSubrs').click(()=>{
        $('#opnExSubrs').fadeOut();
    })
    const getSubs = (udata) => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                    $('.frndsChild').remove();
                    if (exdata.user_type !== 'user') {
                        drpExSubers
                        $('#drpExSubers').text(exdata.user_type.subscribers.length);
                        for (let i = 0; i < exdata.user_type.subscribers.length; i++) {
                            for (let x = 0; x < data3.length; x++) {
                                if (data3[x]._id == exdata.user_type.subscribers[i].user) {
                                    var exType = 'subs'; var meType = 'none';
                                    for (let z = 0; z < udata.following.length; z++) {
                                        if (data3[x]._id == udata.following[z].user) {
                                            meType = 'friend';
                                        }
                                    }
                                    chkFrndMode();
                                    displayFriends(data3[x], udata, exType, meType);
                                }
                            }
                        }
                    }
                });

            }
        });
    }

    // check modes
    const chkFrndMode = () => {
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if (mode == 'light') {
                $('.frndsChild').css('border', 'solid 1px #dddddd');
                $('.frndsChild').css('background-color', 'white');
            }else {
                $('.frndsChild').css('border', 'solid 1px #404040');
                $('.frndsChild').css('background-color', '#1a1a1a');
            }
        });
    }

    // body users
    const frndBody = (user, ids) => {
        var path = '';
        if (user.profile_pic == 'none') {
            path = 'img/profb.png';
        }else {
            path = `${user.profile_pic.path}`;
        }
        return `
          <div class="frndsChild" style="width:98%; margin:auto; height:40px; border-radius:5px; margin-top:7.5px;">
              <div style="width:25%; height:100%; float:left; margin-top:2.5px;">
                  <div style="width:25px; height:25px; float:left; margin:5px; background-image:url(${path}); background-size:cover; border-radius:100%;"></div>
                  <img src="img/chat.png" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer;" id="${ids.chatUp2}">
              </div>
              <div style="width:50%; height:100%; float:left; margin-top:2.5px;">
                  <a href="/${user.user_name}" style="text-decoration:none;"><p style="margin:0px; padding:8px; color:skyblue; font-size:12px;">${user.user_name} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></p></a>
              </div>
              <div style="width:25%; height:100%; float:right; margin-top:2.5px;">
                  <button id="${ids.unfllwId2}" class="btn btn-default btn-xs" style="margin:5px; color:white; background-color:orange; border:solid 1px orange; margin-top:8px; display:none;"></button>
                  <button id="${ids.followId2}" class="btn btn-default btn-xs" style="margin:5px; color:grey; background-color:transparent; border:solid 1px orange; margin-top:8px; display:none;"></button>  
                </div>
          </div>
        `
    };

    // check btns
    const chkForFrnBtns = (data, udata, me, followId2, unfllwId2, chatUp2) => {
        if (data.user_name !== udata.user_name) {
            $(`#${unfllwId2}`).text('unfollow');
            $(`#${followId2}`).text('follow');
            if (me == 'none') {
                $(`#${unfllwId2}`).css('display', 'none');
                $(`#${followId2}`).css('display', 'block');
            }
            if (me == 'friend') {
                $(`#${followId2}`).css('display', 'none');
                $(`#${unfllwId2}`).css('display', 'block');
            }
            if (data.publicity == 'private') {
                var chk = '';
                $(`#${chatUp2}`).css('display', 'none');
                for (let y = 0; y < data.followers.length; y++) {
                    if (data.followers[y].user == udata._id) {
                        chk = 'y';
                        $(`#${chatUp2}`).css('display', 'block');
                        $(`#${unfllwId2}`).css('display', 'block');
                        $(`#${followId2}`).css('display', 'none');
                    }                    
                }
                if (chk !== 'y') {
                    var ck = '';
                    for (let y = 0; y < data.waiting_list.length; y++) {
                        if (data.waiting_list[y].user == udata._id) {
                            ck = 'y';
                            $(`#${unfllwId2}`).css('display', 'block');
                            $(`#${followId2}`).css('display', 'none');
                            $(`#${unfllwId2}`).text('requested');
                        }     
                    }
                    if (ck == '') {
                        $(`#${unfllwId2}`).css('display', 'none');
                        $(`#${followId2}`).css('display', 'block');
                        $(`#${followId2}`).text('request');
                    }
                }
            }
        }else{
            $(`#${chatUp2}`).css('display', 'none');
        }

    };

    // noti tries
    const checkIf = (data, moment, mainUser, ex) => {
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
                        if (ex == 'flwn') {
                            $('#opnFlwn').click();
                        }else {
                            if (ex == 'flwr') {
                                $('#opnFlwr').click();       
                            }
                        }
                    }
                });
            };
            const remNoti = (user) => {
                fetch('/notifications/remNoti', { method: 'put', body: JSON.stringify({
                    user: mainUser._id,
                    noti_type: 'follow' 
                }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                    if (noti) {
                        if (ex == 'flwn') {
                            $('#opnFlwn').click();     
                        }else {
                            if (ex == 'flwr') {
                                $('#opnFlwr').click();       
                            }
                        }
                    }
                });
            };

    };
    // actions
    const btnActions = (data, udata, me, ex, ids) => {

        // follow
        $(`#${ids.followId2}`).click(()=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                if (mainUser) {
                    fetch('/getUsers', { method: 'get' }).then((responce)=>{
                        return responce.json();
                    }).then((users)=>{
                        for (let i = 0; i < users.length; i++) {
                            if (users[i]._id == data._id) {
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
                fetch('/notifications/AddReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    if (unfollow) {
                        fetch('/notifications/AddReqNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq', date: [year, day, month, hour, minute, secnds]}, to: data._id }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                            if (followedDt2) {
                                $('.frndsChild').remove();
                                if (ex == 'flwn') {
                                    $('#opnFlwn').click();     
                                }else {
                                    if (ex == 'flwr') {
                                        $('#opnFlwr').click();       
                                    }
                                }
                            }
                        });
                    }
                });
            };
            const cnct = (mainUser) => {
                fetch('/profiles/FollowUser', { method: 'put', body: JSON.stringify({ user: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                    if (followedDt) {
                        $('.frndsChild').remove();
                        var moment = 'flw';
                        checkIf(data._id, moment, mainUser, ex);
                    };
                });
                addFrndsLen()
            };
        });

        // unfollow
        $(`#${ids.unfllwId2}`).click(()=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                if (data.publicity == 'private') {
                    var chkReq = '';
                    for (let x = 0; x < data.waiting_list.length; x++) {
                        if (data.waiting_list[x].user == mainUser._id) {
                            reqs(mainUser);
                            chkReq = 'y';
                        }
                    }
                    if (chkReq !== 'y') {
                        for (let y = 0; y < data.followers.length; y++) {
                            if (data.followers[y].user == mainUser._id) {
                                cnct(mainUser);
                            }
                        }
                    }
                }else {
                    cnct(mainUser);
                }
            });
            const cnct = (mainUser) => {
                fetch('/profiles/UnFollow', { method: 'put', body: JSON.stringify({ user: data._id, me: mainUser._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    if (unfollow) {
                        var moment = 'unflw';
                        checkIf(data._id, moment, mainUser, ex);
                        addFrndsLen()
                    }
                });
            };
            const reqs = (mainUser) => {
                alert('here');
                fetch('/notifications/RemReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    if (unfollow) {
                        fetch('/notifications/RemReqNoti', { method: 'put', body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq'}, to: data._id }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow2)=>{
                            if (unfollow2) {
                                if (ex == 'flwn') {
                                    $('#opnFlwn').click();     
                                }else {
                                    if (ex == 'flwr') {
                                        $('#opnFlwr').click();       
                                    }
                                }
                            }
                        });
                    }
                });
            };
        });
        // requests

        // cht up
        $(`#${ids.chatUp2}`).click(()=>{});

    };

    // create ids for following
    const createIds2 = (data) => {
        return {
            followId2: 'unfllw2_prof_' + data,
            unfllwId2: 'unfllw2_' + data,
            // cat up funcs
            chatUp2: 'chatUp2_' + data,
            verIcon: 'verIcon_exusr_' + data._id
        }
    };
    // display
    const displayFriends = (data, udata, ex, me) => {
        let ids = createIds2(data._id);
        if (ex == 'flwn') {
            $('#drpflwn-ex').prepend(frndBody(data, ids));        
        }else {
            if (ex == 'flwr') {
                $('#drpflwr-ex').prepend(frndBody(data, ids));        
            }
            if (ex == 'subs') {
                $('#drpSubrs-ex').prepend(frndBody(data, ids));        
            }
        }
        chkForFrnBtns(data, udata, me, ids.followId2, ids.unfllwId2, ids.chatUp2);
        btnActions(data, udata, me, ex, ids);
        if (data.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
    };

    /* unfollow button
    const unfollow = (data, followId, unfllwId) => {

        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
            if (mainUser._id == data) {
                $(`#${unfllwId}`).css('display', 'none');
            }
        });

        const btn = $(`#${unfllwId}`);
        btn.click(function(){
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                cnct(mainUser);
            });
            const cnct = (mainUser) => {
                fetch('/profiles/UnFollow', { method: 'put', body: JSON.stringify({ user: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    if (unfollow) {
                        var moment = 'unflw';
                        checkIf(data, moment, mainUser);
                        if (locNow == 'flwn') {
                            $('.frndsChild').remove();
                            getFlwnp();
                        }else {
                            $('.frndsChild').remove();
                            getFlwrs();
                        }
                    }
                });
            };
        })
     };
     // chat-up friend
     const chatUp = (exdata, chatUp) => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
            if (mainUser._id == exdata) {
                $(`#${chatUp}`).css('display', 'none');
            }
        });
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

    // fetch followers
    const getFlwr = () => {
        fetch('/profiles/getFlwrsp', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data)=>{
              if (data) {
                  var user = '';
                  for (let i = 0; i < data.length; i++) {
                      user = data[i];
                  }
                      fetch('/profiles/getFlwnp', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data2)=>{
                          if (data2) {
                              var user2 = '';
                              for (let i = 0; i < data2.length; i++) {
                                  user2 = data2[i];
                              }
                              if (user2.followers.length > 0) {
                                  for (let y = 0; y < user2.followers.length; y++) {
                                      display(user.following, user2.followers[y]);
                                  }
                              }
                          }
                      });
              }
        });
    };


    // fetch following
    const getFlwn = () => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
                    return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                $('.frndsChild').remove()
                for (let i = 0; i < exdata.following.length; i++) {

                    fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                        for (let z = 0; z < data3.length; z++) {
                            if (data3[z]._id == exdata.following[i].user) {
                                var type = 'flwn'; var cur = 'flwr';
                                displayFlwn(data3[z]._id, type);
                            }
                        }
                    });

                }

            }
        });
    }; 
    // fetch following
    const getFlwr = () => {
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
                    return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                $('.frndsChild').remove()
                for (let i = 0; i < exdata.following.length; i++) {

                    fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
                        for (let z = 0; z < data3.length; z++) {
                            if (data3[z]._id == exdata.followers[i].user) {
                                var type = 'flwr'; var cur = 'flwr';
                                displayFlwn(data3[z]._id, type, cur);
                            }
                        }
                    });

                }

            }
        });
    }; 
    // following
    const Folwn2 = (user, ids) => {
        return `
          <div class="frndsChild" style="width:98%; margin:auto; height:40px; border-radius:5px; margin-top:7.5px;">
              <div style="width:25%; height:100%; float:left; margin-top:2.5px;">
                  <img src="img/profb.png" width="25px" height="25px" style="margin:5px; float:left;">
                  <img src="img/chat.png" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer;" id="${ids.chatUp2}">
              </div>
              <div style="width:50%; height:100%; float:left; margin-top:2.5px;">
                  <a href="/${user}" style="text-decoration:none;"><p style="margin:0px; padding:8px; color:skyblue; font-size:12px;">${user}</p></a>
              </div>
              <div style="width:25%; height:100%; float:right; margin-top:2.5px;">
                  <button id="${ids.unfllwId2}" class="btn btn-default btn-xs" style="margin:5px; color:white; background-color:orange; border:solid 1px orange; margin-top:8px;">unfollow</button>
                  <button id="${ids.followId2}" class="btn btn-default btn-xs" style="margin:5px; color:grey; background-color:transparent; border:solid 1px orange; margin-top:8px;">follow</button>  
                </div>
          </div>
        `
    };
     // create ids for following
     const createIds2 = (data) => {
        return {
            followId2: 'unfllw2_prof_' + data,
            unfllwId2: 'unfllw2_' + data,
            // cat up funcs
            chatUp2: 'chatUp2_' + data,
        }
    };
    const displayFlwn = (data, type) => {
        const ids = createIds2(data);
        var unme2 = '';
        fetch('/profiles/allUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((data3)=>{
            // light or dark effects
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if (mode == 'light') {
                    $('.frndsChild').css('border', 'solid 1px #dddddd');
                    $('.frndsChild').css('background-color', 'white');
                }else {
                    $('.frndsChild').css('border', 'solid 1px #404040');
                    $('.frndsChild').css('background-color', '#1a1a1a');
                }
            });
            for (let z = 0; z < data3.length; z++) {
                if (data3[z]._id == data) {
                    unme2 = data3[z].user_name;
                }
            }
            $('#drpflwn-ex').prepend(Folwn2(unme2, ids));
            unfollow(data, ids.followId2, ids.unfllwId2);
            chatUp(data, ids.chatUp2);
        });
    };*/
    
    // display fllwn
    
    /**
     * ----------
     * OPTIONS
     * ----------
     */
    // open
    $('.optExUser').click(()=>{
        $('#exprofOpt').slideDown();
    });
    $('#clseExUsrOpt').click(()=>{
        $('#exprofOpt').slideUp();
    });
    
    // addChat funcs
    $('.chatUser').click(function(){

        var getBoth = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((exdata)=>{
                    checkInfo(mainUser, exdata);
                });
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
                    fetch('/chats/addChat', { method: 'post', body: JSON.stringify({ uone: {user: mainUser._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, utwo: {user: exdata._id, situ: 'unblocked', mute: 'off', rec_seen: 'yes', sen_seen: 'yes'}, messages: [] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                        return response.json();
                    }).then((datam) => {
                        location.replace('/chat');
                        //getChat(mainUser);
                    });
                };

                if (allChats.length > 0) {
                    var check = 'none';
                    for (let i = 0; i < allChats.length; i++) {
                        if (allChats[i].uone.user == mainUser._id && allChats[i].utwo.user == exdata._id || allChats[i].uone.user == exdata._id && allChats[i].utwo.user == mainUser._id) {
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

    // REPORT USER
    $('#rprtEx').click(()=>{
        $('#rprtEx').slideUp();
        $('#rprtExCon').slideDown();
    });
    $('#ClsRprtEx').click(()=>{
        $('#rprtExCon').slideUp();
        $('#rprtEx').slideDown();
    });
    // report funcs
    $('#inApEx').click(()=>{
        var con = 'Inapproriate contents';
        pushRep(con);
    });
    $('#abusEx').click(()=>{
        var con = 'Abusive contents';
        pushRep(con);
    });
    // report func
    const pushRep = (con) => {
        
        fetch('/extractEx/getData', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((exdata)=>{
            if (exdata) {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                    pushIt(exdata, mainUser);
                });
            }
        });
        const pushIt = (ex, ud) => {
            fetch('/post/reportJrn', {
                method: 'post',
                body: JSON.stringify({ content: con, type: 'Profile', from: ud._id, user: ex._id, date: [year, day, month, hour, minute]  }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if (data) {
                    alert('report sent');
                    $('#rprtExCon').slideUp();
                    $('#rprtEx').slideDown();
                }
            });
        };
        
    };

}
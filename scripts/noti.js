function Noti() {

    fetch('/notifications/all_notis', { method: 'get' }).then((responce)=>{ return responce.json(); }).then((data)=>{
        if (data.new_notis.length > 0) {
            $('#notiNot').text(data.new_notis.length);
            $('#openNotilg, #openNotilg2, #notifOpener').attr('src', 'img/noti.png');
        }else {
            $('#notiNot').text('');
            $('#openNotilg, #openNotilg2, #notifOpener').attr('src', 'img/notis.png');
        }
    });

    // post date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secnds = date.getSeconds();
    if (month === 0) { month = 'January' }
    if (month === 1) { month = 'February' }
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

    const revBody = `

                <div class="row" id="review-con">

                    <!-- head -->
                    <div class="col-md-12 col-xs-12" id="revConHead" style="position:fixed; z-index:5; height:35px;">

                        <div class="row">
                            <div class="col-xs-2 col-lg-4">
                                <img id="closeRevCon" src="img/backa.png" width="20px" height="28px" style="margin:3px; cursor:pointer;"> 
                            </div>
                            <div class="col-xs-10 col-lg-4">
                                <p id="revPresNote" style="color:grey; padding:5px; margin:0px; text-align:center;"></p>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>

                    </div>

                    <div class="col-md-12 col-xs-12" style="position:fixed; z-index:4; height:100%; margin-top:35px;">

                        <!-- div for liked or tagged or commented post -->
                        <div id="drp-like-tag-rev-bod" style="margin:auto; height:100%; display:none;">
                            
                            <div style="height:95%; width:100%; overflow-y:auto;">
                                <br style="margin:5px;">
                                <span id="droprev-lktg"></span>
                            </div>

                        </div>

                    </div>

                </div>
            
        `;

    // get notifications
    const getNoti = () => {
        $('.notiCont').remove();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
            console.log('this user: '+mainUser.user_name);
            fetch('/notifications/all_notis', { method: 'get' }).then((responce)=>{ return responce.json(); }).then((data)=>{
                /*if (data.new_notis.length > 0) {
                    $('#recNewNotCon').css('display', 'block');
                    for (let i = 0; i < data.new_notis.length; i++) {
                            var frame = 'new';
                            var test = 0+i;
                            displayNoti(data.new_notis[i], test, frame, mainUser);
                            cleanNot(data.new_notis[i].user);
                    }
                }else {
                    $('#recNewNotCon').fadeOut();
                }*/
                if (data.new_notis.length > 0) {
                    $('#recNewNotCon').css('display', 'block');
                }else {
                    $('#recNewNotCon').fadeOut();
                }
                if (data) {
                    fetch('/getUsers', { method: 'get' }).then((responce)=>{
                        return responce.json();
                    }).then((data2)=>{
                        // for all notifications
                        if (data.notifications.length > 0) {
                            var len = 0;
                            cleanNot(data.notifications, data.new_notis.length);
                            for (let i = data.notifications.length-1; i >= 0; i--) {
                                len++;
                                if (len < 16) {
                                    var fnd = '';
                                    for (let z = 0; z < data.new_notis.length; z++) {
                                        if (!data.notifications[i].sub_to) {
                                            if (data.notifications[i].user == data.new_notis[z].user && data.notifications[i].noti_type == data.new_notis[z].noti_type && data.notifications[i].date[0, 1, 2, 3, 4, 5] == data.new_notis[z].date[0, 1, 2, 3, 4, 5]) {
                                                
                                                fnd = 'f';
                                                var frame = 'new';
                                                var test = 0+i; var usrI = data.notifications[i].user;
                                                $('#noNotiCon').css('display', 'none');
                                                displayNoti(data.notifications[i], usrI, test, frame, mainUser, data2, i);
                                            }
                                        }else {
                                            if (data.notifications[i].sub_to == data.new_notis[z].sub_to && data.notifications[i].noti_type == data.new_notis[z].noti_type && data.notifications[i].date[0, 1, 2, 3, 4, 5] == data.new_notis[z].date[0, 1, 2, 3, 4, 5]) {
                                                fnd = 'f';
                                                var frame = 'new';
                                                var test = 0+i; var usrI = data.notifications[i].user;
                                                $('#noNotiCon').css('display', 'none');
                                                displayNoti(data.notifications[i], usrI, test, frame, mainUser, data2, i);
                                            }
                                        }
                                    }
                                    if (fnd == '') {
                                        var frame = 'old';
                                        var test = 0+i; var usrI = '';
                                        $('#noNotiCon').css('display', 'none');
                                        if (data.notifications[i].noti_type == 'sub') {
                                            var usrI = data.notifications[i].sub_to;
                                        }else {
                                            var usrI = data.notifications[i].user;
                                        }
                                        displayNoti(data.notifications[i], usrI, test, frame, mainUser, data2, i);
                                    }
                                }
                            }
                            
                        }
                    });
                }
                //$('#flowLoader6').slideUp();
            });

        });
    };

    // CHECK TERMS AND SER
    const termsChk = () => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
            if (mainUser.terms == 'unsigned') {
                $('#openNotilg2, #openNotilg').css('background-image', 'url(img/noti.png)');
                $('#openNotilg2, #openNotilg').css('background-size', '100% 100%');
                $('#comNewNoti').fadeIn();
            }else {
                $('#openNotilg2, #openNotilg').css('background-image', 'url(img/notis.png)');
                $('#openNotilg2, #openNotilg').css('background-size', '100% 100%');
                $('#comNewNoti').css('display', 'none');
            }
        });
    };
    termsChk();

    // include loader
    const Loader = () => {
        return `
            <div id="flowLoader10" style="display:none;">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#recNewNotCon').before(Loader());
    // clean recent timer
    const cleanNot = (passed, len) => {
        if (len > 0) {
            var targetDate = new Date();
            targetDate.setSeconds(targetDate.getSeconds() + 7.5);
            var countDownDate = targetDate.getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                if (distance < 0) {
                    cleaUp();
                    clearInterval(x);
                }
            }, 1000);
        }
        const cleaUp = () => {
            for (let y = 0; y < passed.length; y++) {
                fetch('/notifications/cleanNew', { method: 'post', body: JSON.stringify({ user: passed[y] }), headers: { "xContent-type" : "application/json; charset=utf-8" } }).then((responce)=>{ 
                    if (true) {
                        $('#notiNot').text('');
                        $('#openNotilg2, #openNotilg').css('background-image', 'url(img/notis.png)');
                        $('#openNotilg2, #openNotilg').css('background-size', '100% 100%');
                        $('.notiCont').remove();
                    }
                    return responce.json(); 
                })
            }
            getNoti();
            termsChk();
        };
    };
    // open lg noti
    $('#openNotilg, #openNotilg2').click(function(){
        $('.notiCont').remove();
        $('#container-one').css('filter', 'blur(5px)');
        $('#notilg-alert').slideDown();
        getNoti();
    });
    $('#closentlg').click(function(){
        $('#container-one').css('filter', 'blur()');
        $('#notilg-alert').slideUp();
    });

    const checkMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if (mode == 'light') {
                $('.notiCont').css('background-color', 'white');
                $('.notiCont').css('border', 'solid 1px #f0f0f0');
                $('.notiUNholder').css('border-bottom', 'solid 1px #f0f0f0');
                $('#revConHead').css('background-color', 'white');
                $('#revConHead').css('border-bottom', 'solid 1px #f0f0f0');
                $('#drp-like-tag-rev-bod').css('background-color', '#f9f9f9');
                $('#drp-like-tag-rev-bod').css('border-right', 'solid 1px #dddddd');
                $('#drp-like-tag-rev-bod').css('border-left', 'solid 1px #dddddd');
            } else {
                $('.notiCont').css('background-color', '#292929');
                $('.notiCont').css('border', 'solid 1px #404040');
                $('.notiUNholder').css('border-bottom', 'solid 1px #404040');
                $('#revConHead').css('background-color', '#292929');
                $('#revConHead').css('border-bottom', 'solid 1px #404040');
                $('#drp-like-tag-rev-bod').css('background-color', '#292929');
                $('#drp-like-tag-rev-bod').css('border-right', 'solid 1px #1a1a1a');
                $('#drp-like-tag-rev-bod').css('border-left', 'solid 1px #1a1a1a');
            }
        });
    };

    const NewFriend = (data, user, ids, udt) => { 
        var path = ''; var clas = '';
        if (udt.profile_pic == 'none') {
            path = 'img/profb.png';
        }else {
            path = `${udt.profile_pic.path}`;
            clas =  `${udt.profile_pic.class}`;
        }    
    return `
    <div id="${ids.conId}" class="notiCont" style="width:97%; height:70px; margin:auto; border-radius:5px; margin-bottom:10px; display:none;">
        <div style="width:20%; height:100%; float:left;">
            <p style="margin:2px; margin-top:15px; text-align:center;">
                <button id="${ids.followId}" class="btn btn-default btn-xs" style="border:solid 1px darkorange; background-color:transparent; border-radius:5px; color:orange; display:none;">follow</button>
                <button id="${ids.acceptId}" class="btn btn-default btn-xs" style="border:solid 1px darkorange; background-color:transparent; border-radius:5px; color:orange; display:none;">accept</button>
                <button id="${ids.unFollowId}" class="btn btn-default btn-xs" style="border:solid 1px darkorange; border-radius:5px; color:white; background-color:darkorange; display:none;">unfollow</button>
                <img id="${ids.likedId}" class="opnRevw" src="img/liked.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.comntId}" class="opnRevw" src="img/commentd.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.shrdId}" class="opnRevw" src="img/tagd.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.strTId}" class="opnRevw" src="img/str.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.tagdId}" class="opnRevw" src="img/frnds.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.payIcn}" class="opnRevw" src="img/naira.png" style="width:20px; height:20px; display:none; cursor:pointer;">
                <img id="${ids.subIcn}" class="opnRevw" src="img/subs.png" style="width:25px; height:20px; display:none; cursor:pointer;">
            </p>
        </div>
        <div style="width:60%; height:100%; float:left;">
            <div style="height:20px; width:100%;" cass="notiUNholder">
                <p style="text-align:center; margin:1.5px; font-size:10px;"><a style="text-decoration:none; color:skyblue;" href="/${user}"> <img class="${clas}" src="${path}" alt="" height="15px" width="15px" style="border-radius:100%;"> ${user} </a></p>
            </div>
            <div style="height:50px; width:100%;">
                <p id="${ids.notiNote}" class="p_subHs" style="text-align:center; margin:2px; font-size:10px;"></p>
            </div>
        </div>
        <div style="width:20%; height:100%; float:right;">
            <i class="p_subHs" style="text-align:center; margin:3px; font-size:8px;" id="${ids.dateFlow}"></i>
        </div>
    </div>
    `};

    //---------
    // BUTTONS
    //---------
    // var req dif
    // check notification type
    const checkNoTyp = (data, mainUser, subIcn, payIcn, followId, unFollowId, likedId, comntId, shrdId, tagdId, strTId, notiNote, acceptId, reqD, reqB) => {
        reqD = 'n'; reqB = 'n';
        // fetch frnds
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((flwn)=>{

            if (data.noti_type == 'follow') {
                var track = 'none';
                $(`#${notiNote}`).text('Started following you');
                if (flwn.following.length > 0) {
                    for (let i = 0; i < flwn.following.length; i++) {
                        if (data.user == flwn.following[i].user) {
                            track = 'some';
                            $(`#${followId}`).css('display', 'none');
                            $(`#${unFollowId}`).css('display', 'inline');
                            $(`#${likedId}`).css('display', 'none');
                            $(`#${comntId}`).css('display', 'none');
                            $(`#${shrdId}`).css('display', 'none');
                            $(`#${tagdId}`).css('display', 'none');
                            $(`#${strTId}`).css('display', 'none');
                            $(`#${acceptId}`).css('display', 'none');
                        }
                    }
                }
                if (track == 'none') {
                    $(`#${followId}`).css('display', 'inline');
                    $(`#${unFollowId}`).css('display', 'none');
                    $(`#${likedId}`).css('display', 'none');
                    $(`#${comntId}`).css('display', 'none');
                    $(`#${shrdId}`).css('display', 'none');
                    $(`#${tagdId}`).css('display', 'none');
                    $(`#${strTId}`).css('display', 'none');
                    $(`#${acceptId}`).css('display', 'none');
                }
                fetch('/getUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((usrs)=>{
                    for (let i = 0; i < usrs.length; i++) {
                        if (data.user == usrs[i]._id && usrs[i].publicity == 'private' ) {
                            reqD = 'y';
                            for (let z = 0; z < usrs[i].waiting_list.length; z++) {
                                if (usrs[i].waiting_list[z].user == mainUser._id) {
                                    reqB = 'y';
                                    $(`#${followId}`).text('requested');
                                    $(`#${followId}`).css('background-color', 'darkorange');
                                    $(`#${followId}`).css('color', 'white');
                                }
                            }
                        }
                    }
                });
            }
            if (data.noti_type == 'frnd_rq') {
                //alert('request');
                /*fetch('/getUsers', { method: 'get' }).then((responce)=>{ return responce.json() }).then((usrs)=>{
                    var ch = 'n';
                    for (let i = 0; i < usrs.length; i++) {
                        if (data.user == usrs[i]._id) {
                            for (let z = 0; z < usrs[i].waiting_list.length; z++) {
                                if (usrs[i].waiting_list[z].user == mainUser._id) {
                                    alert('here');
                                    $(`#${acceptId}`).css('display', 'inline');
                                    $(`#${followId}, #${unFollowId}`).css('display', 'none');
                                }
                            }
                            for (let x = 0; x < usrs[i].followers.length; x++) {
                                if (usrs[i].followers[x].user == mainUser._id) {
                                    ch = 'y';
                                    $(`#${followId}`).css('display', 'inline');
                                    $(`#${acceptId}, #${unFollowId}`).css('display', 'none');
                                }                                
                            }
                            for (let p = 0; p < usrs[i].following.length; p++) {
                                if (usrs[i].following[p].user == mainUser._id) {
                                    ch = 'y';
                                    $(`#${unFollowId}`).css('display', 'inline');
                                    $(`#${acceptId}, #${followId}`).css('display', 'none');
                                }   
                            }
                        }
                    }
                    $(`#${notiNote}`).text('Requested to be your friend');
                    $(`#${likedId}`).css('display', 'none');
                    $(`#${comntId}`).css('display', 'none');
                    $(`#${shrdId}`).css('display', 'none');
                    $(`#${strTId}`).css('display', 'none');
                    $(`#${tagdId}`).css('display', 'none');
                });*/
                var ch = '';
                for (let i = 0; i < mainUser.waiting_list.length; i++) {
                    if (mainUser.waiting_list[i].user == data.user) {
                        ch = 'y';
                        $(`#${acceptId}`).css('display', 'inline');
                        $(`#${followId}, #${unFollowId}`).css('display', 'none');
                    }
                }
                if (ch == '') {
                    for (let x = 0; x < mainUser.followers.length; x++) {
                        if (mainUser.followers[x].user == data.user) {
                            $(`#${followId}`).css('display', 'inline');
                            $(`#${acceptId}, #${unFollowId}`).css('display', 'none');
                        }                                
                    }
                    for (let p = 0; p < mainUser.following.length; p++) {
                        if (mainUser.following[p].user == data.user) {
                            $(`#${unFollowId}`).css('display', 'inline');
                            $(`#${acceptId}, #${followId}`).css('display', 'none');
                        }   
                    }
                }
                $(`#${notiNote}`).text('Requested to be your friend');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'like_post') {
                $(`#${notiNote}`).text('Liked your journal');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'inline');
                $(`#${comntId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'like_str') {
                $(`#${notiNote}`).text('Liked your thread');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'inline');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'comment_post') {
                $(`#${notiNote}`).text('Commented on your journal');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'inline');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'comment_str') {
                $(`#${notiNote}`).text('Commented on your thread');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'inline');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'tag_post') {
                $(`#${notiNote}`).text('tagged you to a post');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'inline');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'tie_string') {
                $(`#${notiNote}`).text('tied you to a string');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'inline');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'shr_post') {
                $(`#${notiNote}`).text('shared you a post');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'inline');
                $(`#${strTId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'shr_str') {
                $(`#${notiNote}`).text('shared you a string');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'inline');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'shr_thr') {
                $(`#${notiNote}`).text('shared you a thread');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'inline');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                $(`#${subIcn}`).css('display', 'none');
            }
            if (data.noti_type == 'sub') { 
                $(`#${subIcn}`).css('display', 'none');
                $(`#${payIcn}`).css('display', 'none');
                if (data.sub_to) {
                    $(`#${notiNote}`).html(`subscription payment successful <span style="font-weight:normal;">${data.amount}<span>`);
                    $(`#${payIcn}`).css('display', 'inline');
                }
                if (data.user && data.type == 'paid') {
                    $(`#${notiNote}`).html(`subscription payment recieved <span style="font-weight:normal;">${data.amount}<span>`);
                    $(`#${payIcn}`).css('display', 'inline');
                }
                if (data.user && data.type == 'free') {
                    $(`#${notiNote}`).html(`subscription payment recieved <span style="font-weight:normal;">${data.amount}<span>`);
                    $(`#${subIcn}`).css('display', 'inline');
                }
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
            }
            if (data.noti_type == 'earn_rec') {
                $(`#${notiNote}`).html(`your earnings of ${data.month}, ${data.year} in the amount of NGN ${data.amount} has been dispersed to your account!`);
                $(`#${payIcn}`).css('display', 'inline');
                // none
                $(`#${subIcn}`).css('display', 'none');
                $(`#${followId}`).css('display', 'none');
                $(`#${unFollowId}`).css('display', 'none');
                $(`#${likedId}`).css('display', 'none');
                $(`#${comntId}`).css('display', 'none');
                $(`#${shrdId}`).css('display', 'none');
                $(`#${tagdId}`).css('display', 'none');
                $(`#${strTId}`).css('display', 'none');
                $(`#${acceptId}`).css('display', 'none');
            }
        });
    };

    // check if followed before
    const checkIf = (data, moment, followId, unFollowId, mainUser) => {
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{ 
            if (users.length > 0) {
                for (let i = 0; i < users.length; i++) {
                    if (data.user == users[i]._id) {
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
                        checkUiChange();
                    }
                });
            };
            const remNoti = (user) => {
                fetch('/notifications/remNoti', { method: 'put', body: JSON.stringify({
                    user: mainUser._id,
                    noti_type: 'follow' 
                }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                    if (noti) {
                        checkUiChange();
                    }
                });
            };
            const checkUiChange = () => {
                if (moment == 'flw') {
                    $(`#${followId}`).css('display', 'none');
                    $(`#${unFollowId}`).css('display', 'inline');
                }else {
                    $(`#${unFollowId}`).css('display', 'none');
                    $(`#${followId}`).css('display', 'inline');
                }
            };

    };
    // follow back
    const FollowUn = (data, mainUser, followId, unFollowId, reqD, reqB) => {
        //let folbtn = $(`#${followId}`);
        $(`#${followId}`).click(()=>{
            if (reqD == 'n') {
                fetch('/notifications/followBack', { method: 'post', body: JSON.stringify({ user: data.user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                    if (followedDt) {
                        var moment = 'flw';
                        checkIf(data, moment, followId, unFollowId, mainUser);
                    }
                });
            }
            if (reqD == 'y') {
                if (reqB == 'y') {
                    fetch('/notifications/RemReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data.user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/notifications/RemReqNoti', { method: 'put', body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq'}, to: data.user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow2)=>{
                                if (unfollow2) {
                                    getNoti();
                                }
                            });
                        }
                    });
                }else {
                    fetch('/notifications/AddReq', { method: 'put', body: JSON.stringify({ user: mainUser._id, to: data.user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                        if (unfollow) {
                            fetch('/notifications/AddReqNoti', { method: 'put', headers: {  "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ send: {user: mainUser._id, noti_type: 'frnd_rq', date: [year, day, month, hour, minute, secnds]}, to: data.user }) }).then((response)=>{ return response.json() }).then((followedDt2)=>{
                                if (followedDt2) {
                                    getNoti();
                                }
                            });
                        }
                    });
                }
            }
        });

        $(`#${unFollowId}`).click(()=>{
            fetch('/notifications/unFollow', { method: 'post', body: JSON.stringify({ user: data.user }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                if (followedDt) {
                    var moment = 'unflw';
                    checkIf(data, moment, followId, unFollowId, mainUser);
                }
            });
        });

        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((data2)=>{

            if (data2) {
                /*if (data2.length > 0) {
                    for (let z = 0; z < data2.length; z++) {
                        if (data.user == data2[z].user) {
                            $(`#${followId}`).text('unfollow');
                            $(`#${followId}`).css('background-color', 'orange');
                            $(`#${followId}`).css('color', 'white');
                            folbtn.click(function() {
                                fetch('/notifications/unFollow', { method: 'post', body: JSON.stringify({ user: data.user }), headers: {"Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((unfol)=>{})
                            });
                        } else {
                            $(`#${followId}`).text('follow');
                            $(`#${followId}`).css('color', 'orange');
                            $(`#${followId}`).css('background-color', 'transparent');
                            folbtn.click(function() {
                                alert('follow!');
                            });
                        }
                    }
                }else {
                    $(`#${followId}`).text('follow');
                    $(`#${followId}`).css('color', 'orange');
                    $(`#${followId}`).css('background-color', 'transparent');
                    folbtn.click(function() {
                        alert('follow!');
                    });
                }*/
            }
      });
    };

    // accept follower
    const Accpt = (data, mainUser, acceptId) => {
        let accbtn = $(`#${acceptId}`);
        accbtn.click(function() {
            
            fetch('/notifications/remWaiting', { method: 'post', body: JSON.stringify({
                user: data.user, me: mainUser._id
            }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                if (sent) {
                    getNoti();
                }
            });

        });
    };
    
    // smart reviewers 
    const reviewNoti = (data, mainUser, likedId, comntId, tagdId, shrdId, strTId) => {
        const droprevCon = () => {
            $('#closentlg').click();
            $('#container-one').fadeOut();
            checkMode();
            $('#dropChat').before(revBody);
            $('#review-con').css('display', 'block');
            $('#closeRevCon').click(()=>{
                $('#review-con').remove();
                $('#container-one').fadeIn();
                //termRev();
            });
        }
        // for liked post
        $(`#${likedId}`).click(()=>{
            droprevCon();
            fetch('/review/like_rev', { method: 'post', body: JSON.stringify({ hang: data.post, type: data.noti_type }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((ex)=>{
                if (ex) {
                    //alert(ex);
                };
            });
        });
        // for commntd
        $(`#${comntId}`).click(()=>{
            droprevCon();
            fetch('/review/like_rev', { method: 'post', body: JSON.stringify({ hang: data.post, type: data.noti_type }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((ex)=>{
                if (ex) {
                    fetch('/review/sendCom', { method: 'post', body: JSON.stringify({ hang: data }), headers: {  "Content-type" : "application/json; charset=utf-8" } });
                };
            });
        });
        // shared jrnl
        $(`#${shrdId}`).click(()=>{
            droprevCon();
            fetch('/review/like_rev', { method: 'post', body: JSON.stringify({ hang: data.post, type: data.noti_type }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((ex)=>{
                if (ex) {
                    //alert(ex);
                };
            });
        });
        // for tagged post
        $(`#${tagdId}`).click(()=>{
            droprevCon();
            fetch('/review/like_rev', { method: 'post', body: JSON.stringify({ hang: data.post, type: data.noti_type }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((ex)=>{
                if (ex) {
                    //alert(ex);
                };
            });
        });
        // FOR STR AND THR
        // tied to str
        $(`#${strTId}`).click(()=>{
            droprevCon();
            fetch('/review/like_rev', { method: 'post', body: JSON.stringify({ hang: data.post, type: data.noti_type }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((ex)=>{
                if (ex) {
                    //alert(ex);
                };
            });
        });
        // terminate rev
        const termRev = () => {
            fetch('/review/termRev', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((term) => {
                if (term) {
                    checkRev(udata);
                }
            });
        };

    };

    // SmartDate Func
    const smartDate = (data, dateFlow) => {
        if (data.date[0] !== year) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[0]}`);
        }
        if (data.date[0] == year && data.date[2] == month && data.date[1] == day) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px; margin:0px;">Today.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] == 1) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px; margin:0px;">Yesterday.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] !== 1 && data.date[1] !== day) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] !== month) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }

    }; 
    
    // create ids for actions
    const createIds = (data, usrI, test, i) => {
        var usrN = usrI;
        return {
            conId: 'conId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // note
            notiNote: 'notiNote_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // follow/un-follow funcs
            followId: 'follow_noti_' + `${usrN}_${data.noti_type}_${i}`,
            unFollowId: 'unFollow_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // likd post
            likedId: 'likedId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // comment post
            comntId: 'comntId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // shared
            shrdId: 'shrdId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // tagd post
            tagdId: 'tagdId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // str tied
            strTId: 'strTId_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // accept user opt
            acceptId: 'accpt_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // smart date
            dateFlow: 'date_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // transaction success
            payIcn: 'payIcn_noti_' + `${usrN}_${data.noti_type}_${i}`,
            // subs
            subIcn: 'subIcn_noti_' + `${usrN}_${data.noti_type}_${i}`,

        }
    };

    // pass in data/ids, differentiate and display
    const displayNoti = (data, usrI, test, frame, mainUser, data2, i) => {
        let ids = createIds(data, usrI, test, i);
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data2)=>{
            var user = ''; var udt = '';
            for (let i = 0; i < data2.length; i++) {
                if (!data.sub_to) {
                    if (data2[i]._id == data.user) {
                        user = data2[i].user_name;
                        udt = data2[i];
                    };                
                }else {
                    if (data2[i]._id == data.sub_to) {
                        user = data2[i].user_name;
                        udt = data2[i];
                    };
                }
            }
            checkMode();
            if (data.noti_type == 'earn_rec') {
                if (frame == 'new') {
                    $('#dropnoti-rec').append(NewFriend(data, mainUser.user_name, ids, mainUser));
                }
                if (frame == 'old') {
                    $('#dropnoti-lg').append(NewFriend(data, mainUser.user_name, ids, mainUser));
                }
            }else {
                if (frame == 'new') {
                    $('#dropnoti-rec').append(NewFriend(data, user, ids, udt));
                }
                if (frame == 'old') {
                    $('#dropnoti-lg').append(NewFriend(data, user, ids, udt));
                }
            }
            $(`#${ids.conId}`).fadeIn();
            var reqD = 'n'; var reqB = 'n';
            checkNoTyp(data, mainUser, ids.subIcn, ids.payIcn, ids.followId, ids.unFollowId, ids.likedId, ids.comntId, ids.shrdId, ids.tagdId, ids.strTId, ids.notiNote, ids.acceptId, reqD, reqB);
            FollowUn(data, mainUser, ids.followId, ids.unFollowId, reqD, reqB);
            Accpt(data, mainUser, ids.acceptId);
            reviewNoti(data, mainUser, ids.likedId, ids.comntId, ids.tagdId, ids.shrdId, ids.strTId);
            smartDate(data, ids.dateFlow);
        });
    };

    // notification types and divs

    // notification - xsm
    var NotiBox = `
    <div class="container-fluid" id="container-noti-xs" style="display:none;">
        <div class="row">
        <!-- setting the position -->
        <div class="col-xs-12">
            <div class="row">
            <!-- noti heading bellow -->
            <div id="noticon-xs" class="col-xs-12" style="height:35px; position:fixed; z-index:2;">
                <img src="img/backa.png" alt="" width="15px" height="25px" style="margin:5px; float:left; margin-right:20px;" id="closeNotiXs">
                <p style="color:grey; font-size:15px; padding:5px; float:left;">Notifications <strong id="notilen" style="color:orange;"></strong> </p>
                <img src="img/opt.png" alt="" width="8px" height="20px" style="float:right; margin:5px; cursor:pointer;" id="OpenChatSrh">
            </div>
            <!-- noti container bellow -->
            <div id="notibod-xs" class="col-xs-12" style="margin-top:35px; border-bottom-right-radius:5px; border-bottom-left-radius:5px;">
                <div style="height:35px;"></div>

                <div id="noNotiNot" style="margin:auto; width:150px; cursor:pointer;">
                        <p style="margin:5px; color:grey; font-size:12px; text-align:center;"> No notifcations </p>
                </div>
                
                <span id="dropnoti-xs"></span>
                
                <br>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
    $('#dropChat').append(NotiBox);

    // noti con functionalities
    $('#closeNotiXs').click(function() {
        $('#container-noti-xs').css('display', 'none');
        $('#container-one').css('display', 'block');
    })

}
Noti();
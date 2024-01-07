$(document).ready(()=>{

    // new log cfjj0897
    // user admin 0gjh7926
    // author fjjj3677

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
                        $(`#${tId}`).text(`${prnt}k`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}k`);
                    }
                }
                // hundred thousands
                if (curn > 99999) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`#${tId}`).text(`${prnt}k`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}k`);
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
                        $(`#${tId}`).text(`${prnt}m`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}m`);
                    }
                }
                // ten millions
                if (curn > 9999999 && curn < 100000000) {
                    var prnt = curn.toString().slice(0, 2);
                    var prnt1 = curn.toString().slice(2, 3);
                    if (prnt1 == 0) {
                        $(`#${tId}`).text(`${prnt}m`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}m`);
                    }
                }  
                // hundred millions
                if (curn > 99999999) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`#${tId}`).text(`${prnt}m`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}m`);
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
                        $(`#${tId}`).text(`${prnt}b`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }
                // ten billions
                if (curn > 9999999999 && curn < 100000000000) {
                    var prnt = curn.toString().slice(0, 2);
                    var prnt1 = curn.toString().slice(2, 3);
                    if (prnt1 == 0) {
                        $(`#${tId}`).text(`${prnt}b`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }  
                // hundred billions
                if (curn >= 100000000000) {
                    var prnt = curn.toString().slice(0, 3);
                    var prnt1 = curn.toString().slice(3, 4);
                    if (prnt1 == 0) {
                        $(`#${tId}`).text(`${prnt}b`);
                    }else {
                        $(`#${tId}`).text(`${prnt}.${prnt1}b`);
                    }
                }  
            }
        }else {
            $(`#${tId}`).text(num);
        }

    };

    // EFFECTS
    // -------
    var curbtn = 'btn1';
    // hover effect
    $('#my-btns1').mouseenter(()=>{
        $('#my-btns1').css('background-color', '#f9f9f9');
        $('#my-btns1').css('color', 'orange');
    });
    $('#my-btns2').mouseenter(()=>{
        $('#my-btns2').css('background-color', '#f9f9f9');
        $('#my-btns2').css('color', 'orange');
    });
    $('#my-btns3').mouseenter(()=>{
        $('#my-btns3').css('background-color', '#f9f9f9');
        $('#my-btns3').css('color', 'orange');
    });
    $('#my-btns4').mouseenter(()=>{
        $('#my-btns4').css('background-color', '#f9f9f9');
        $('#my-btns4').css('color', 'orange');
    });
    $('#my-btns5').mouseenter(()=>{
        $('#my-btns5').css('background-color', '#f9f9f9');
        $('#my-btns5').css('color', 'orange');
    });
    $('#my-btns6').mouseenter(()=>{
        $('#my-btns6').css('background-color', '#f9f9f9');
        $('#my-btns6').css('color', 'orange');
    });
    $('#my-btns1').mouseleave(()=>{
        if (curbtn == 'btn1') {
            $('#my-btns1').css('background-color', 'white');
            $('#my-btns1').css('color', 'darkorange');
        }else {
            $('#my-btns1').css('background-color', 'transparents');
            $('#my-btns1').css('color', 'white');
        }
    });
    $('#my-btns2').mouseleave(()=>{
        if (curbtn == 'btn2') {
            $('#my-btns2').css('background-color', 'white');
            $('#my-btns2').css('color', 'darkorange');
        }else {
            $('#my-btns2').css('background-color', 'transparents');
            $('#my-btns2').css('color', 'white');
        }
    });
    $('#my-btns3').mouseleave(()=>{
        if (curbtn == 'btn3') {
            $('#my-btns3').css('background-color', 'white');
            $('#my-btns3').css('color', 'darkorange');
        }else {
            $('#my-btns3').css('background-color', 'transparents');
            $('#my-btns3').css('color', 'white');
        }
    });
    $('#my-btns4').mouseleave(()=>{
        if (curbtn == 'btn4') {
            $('#my-btns4').css('background-color', 'white');
            $('#my-btns4').css('color', 'darkorange');
        }else {
            $('#my-btns4').css('background-color', 'transparents');
            $('#my-btns4').css('color', 'white');
        }
    });
    $('#my-btns5').mouseleave(()=>{
        if (curbtn == 'btns5') {
            $('#my-btns5').css('background-color', 'white');
            $('#my-btns5').css('color', 'darkorange');
        }else {
            $('#my-btns5').css('background-color', 'transparents');
            $('#my-btns5').css('color', 'white');
        }
    });
    $('#my-btns6').mouseleave(()=>{
        if (curbtn == 'btns6') {
            $('#my-btns6').css('background-color', 'white');
            $('#my-btns6').css('color', 'darkorange');
        }else {
            $('#my-btns6').css('background-color', 'transparents');
            $('#my-btns6').css('color', 'white');
        }
    });
    //click effects
    $('#my-btns1').click(()=>{
        curbtn = 'btn1';
        $('#my-btns1').css('background-color', 'white');
        $('#my-btns1').css('color', 'darkorange');
        $('#my-btns2, #my-btns3, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('background-color', 'transparent');
        $('#my-btns2, #my-btns3, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('color', 'white');
        // dis/appear
        $('#userFlw, #autFlw, #repFlw, #wrtFlw, #admnFlw, #subFlw').css('display', 'none');
        $('#homeFlw').fadeIn();
        getInfo();
    });
    $('#my-btns2').click(()=>{
        curbtn = 'btn2';
        $('#my-btns2').css('background-color', 'white');
        $('#my-btns2').css('color', 'darkorange');
        $('#my-btns1, #my-btns3, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('background-color', 'transparent');
        $('#my-btns1, #my-btns3, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('color', 'white');
        $('#homeFlw, #autFlw, #repFlw, #wrtFlw, #admnFlw, #subFlw').css('display', 'none');
        $('#userFlw').fadeIn();
        getUsers();
    });
    $('#my-btns3').click(()=>{
        curbtn = 'btn3';
        $('#my-btns3').css('background-color', 'white');
        $('#my-btns3').css('color', 'darkorange');
        $('#my-btns2, #my-btns1, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('background-color', 'transparent');
        $('#my-btns2, #my-btns1, #my-btns4, #my-btns5, #my-btns6, #my-btns7').css('color', 'white');
        $('#homeFlw, #userFlw, #repFlw, #wrtFlw, #admnFlw, #subFlw').css('display', 'none');
        $('#autFlw').fadeIn();
        getAUthors();
    });
    $('#my-btns4').click(()=>{
        curbtn = 'btn4';
        $('#my-btns4').css('background-color', 'white');
        $('#my-btns4').css('color', 'darkorange');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns5, #my-btns6, #my-btns7').css('background-color', 'transparent');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns5, #my-btns6, #my-btns7').css('color', 'white');
        $('#homeFlw, #userFlw, #autFlw, #wrtFlw, #admnFlw, #subFlw').css('display', 'none');
        $('#repFlw').fadeIn();
        getReprts();
    });
    $('#my-btns5').click(()=>{
        curbtn = 'btns5';
        $('#my-btns5').css('background-color', 'white');
        $('#my-btns5').css('color', 'darkorange');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns4, #my-btns6, #my-btns7').css('background-color', 'transparent');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns4, #my-btns6, #my-btns7').css('color', 'white');
        $('#homeFlw, #userFlw, #autFlw, #repFlw, #admnFlw, #subFlw').css('display', 'none');
        $('#wrtFlw').fadeIn();
        getUpdtes();
    });
    $('#my-btns6').click(()=>{
        curbtn = 'btns6';
        $('#my-btns6').css('background-color', 'white');
        $('#my-btns6').css('color', 'darkorange');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns4, #my-btns5, #my-btns7').css('background-color', 'transparent');
        $('#my-btns2, #my-btns3, #my-btns1, #my-btns4, #my-btns5, #my-btns7').css('color', 'white');
        $('#homeFlw, #userFlw, #autFlw, #repFlw, #wrtFlw, #subFlw').css('display', 'none');
        $('#admnFlw').fadeIn();
        getAllAdmins();
    });
    $('#my-btns7').click(()=>{
        curbtn = 'btn7';
        $('#my-btns7').css('background-color', 'white');
        $('#my-btns7').css('color', 'darkorange');
        $('#my-btns2, #my-btns1, #my-btns3, #my-btns4, #my-btns5, #my-btns6').css('background-color', 'transparent');
        $('#my-btns2, #my-btns1, #my-btns3, #my-btns4, #my-btns5, #my-btns6').css('color', 'white');
        // dis/appear
        $('#userFlw, #autFlw, #repFlw, #wrtFlw, #admnFlw, #homeFlw').css('display', 'none');
        $('#subFlw').fadeIn();
        getSubscrpt();
    });

    // logOUt
    $('#logOutAdm').click(()=>{
        ///adminlogs/logOut
        fetch('/adminlogs/logOut', {
            method: 'get'
        }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data == 'out') {
                location.replace('/admin-community');
            }
        });
    });

    fetch('/adminlogs/sess', {method: "get"}).then((responce) => {
        return responce.json();
    }).then((data) => {
        if (data === '') {
            location.replace('/admin-world');
        } else {
            console.log('admin loged-in');
        }
    });

    // get total users
    fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
        return res.json();
    }).then((data)=>{
        if (data) {
            $('#totUsrs').text(data.length);
        }
    })

    // get admin info
    const getInfo = () => {
        fetch('/adcenter/adcenInfo', {
            method: 'get'
        }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data.name === '') {
                location.replace('/Login');
            } else {
                if (data.cart == 'User Admin') {
                    $('#my-btns6, #my-btns3, #my-btns5, #genAllPwd').remove();
                }
                $('#mail').text(`${data.mail}`);
                $('#cart').text(`${data.cart}`);
                $('#name').text(`${data.name}`);
            }
        });
    }
    getInfo();
    
    /**
     * /-------------
     * USERS SECTION
     * /-------------
     */
    // search
    $('#opnusrSrchr').click(()=>{
        $('.grpings').css('display', 'none');
        $('#srchUsrCon').fadeIn();
    });
    $('#clsusrSrchr').click(()=>{
        $('#srchUsrCon').css('display', 'none');
        $('.grpings').fadeIn();
    });
    var searcher = $('#srchUsrs');
    // smart value
    $('#srchUsrs').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
    });
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
                $('.srchdCon-2').remove();
                for (let i = 0; i < data.length; i++) {
                    if (srch.length > 0) {
                        console.log('user herre: '+data[i].user_name);
                        displayUsers(data[i]);
                    }
                }
            }
        })
    };
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
        <div id="${ids.conId}" class="srchdCon-2" style="width:100%; margin:auto; height:40px; border-radius:5px; margin-top:10px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0;">
            <div style="width:20%; height:100%; float:left;">
                <div class="${clas}" style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${data.user_name}"><p class="srchd_hd" style="padding:5px; margin:5px; color:grey;">${data.user_name} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <div id="${ids.opnProf}" style="width:20px; height:20px; margin:auto; background-image:url(img/next.png); background-size:100% 100%; margin-top:10px; cursor:pointer;"></div>
            </div>
        </div>
        `
    };
    // create ids
    const createId = (data) => {
        return {
            conId: 'conId_' + data._id,
            opnProf: 'opnProf_srch_' + data._id,
            verIcon: 'verIconSchr_' + data._id,
        }
    };
    // display function
    const displayUsers = (data) => {
        const ids = createId(data);
        $('#drpSrchdUsrs').prepend(srchUser(data, ids));
        if (data.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
        $(`#${ids.opnProf}`).click(()=>{
            var drop = 'drpPrfle';
            initRev(data, drop);
        });
    };
    // onkey up test
    $("#srchUsrs").keyup(function(){
        $('.srchdCon-2').remove();
        fetchUsers(searcher.val());
    });
    // flow
    const Loader = () => {
        return `
            <div id="flowLoader-adc-usrs" style="padding-top:50px;">
                <img src="img/load.png" width="40px" height="40px">
            </div>
        `
    };
    $('#flowUsers').before(Loader());``
    const getUsers = () => {
        //UI
        const grpsBod = (grp, ids) => {
            return `
                <div class="groupClss" style="width:98%; margin:auto; height:30px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                    <p style="margin:0px; padding:5px; color:darkorange; float:left;">GROUP - ${grp}</p>
                    <button class="btn btn-warning btn-xs" style="margin:2.5px; float:right; background-color:darkorange; border-radius:10px;" id="${ids.hitId}">review</button>
                </div>
            `
        };
        // hit btn func
        const hitRevBtn = (grp, hit) => {
            console.log('group: '+grp);
            // btn funcs
            $(`#${hit}`).click(()=>{
                $('.usrHdClss').remove();
                fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((data)=>{
                    if (data.length > 0) {
                        var len = 100;
                        for (let i = 0; i < len; i++) {
                            if (data[i].group == grp) {
                                pushUsrHd(data[i]);
                            }else {
                                len+1;
                            }
                        }
                    }
                });
            });
            // user head holder
            const userHd = (user, ids) => {
                return `
                <div class="usrHdClss" style="width:98%; margin:auto; height:30px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                    <p style="margin:0px; padding:5px; color:darkorange; float:left;">${user.user_name}</p>
                    <button class="btn btn-info btn-xs" style="margin:2.5px; float:right; border-radius:10px;" id="${ids.revProf}">profile</button>
                </div>
                `
            };
            const revProfBtn = (user, btn) => {
                $(`#${btn}`).click(()=>{
                    var drop = 'drpPrfle';
                    initRev(user, drop);
                });
            };
            // ids
            const UserHdids = (user) => {
                return {
                    revProf: 'reviewProfBtn_' + user._id 
                }
            };
            // push user head
            const pushUsrHd = (user) => {
                var ids = UserHdids(user);
                $('#assUsHds').prepend(userHd(user, ids));
                revProfBtn(user, ids.revProf);
            };

        };

        // creat grp ids
        const groupIds = (grp) => {
            return {
                hitId: 'hitBtn_' + grp
            }
        };
    
        fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            $('#flowLoader-adc-usrs').remove();
            if (data.length > 0) {
                $('#oyaBody').fadeIn();
                $('.groupClss').remove();
                // for groups
                var grp = 1; var diff = 0; var ass = 100000;
                const rstrt = () => {
                    var ids = groupIds(grp);
                    $('#flwGrps').prepend(grpsBod(grp, ids));
                    // hit the rev-btn
                    hitRevBtn(grp, ids.hitId);
                    for (let i = 0; i < data.length; i++) {
                        const cont = () => {
                            if (data[i].group == grp) {
                                diff+1;
                            }
                        };
                        if (diff == ass) {
                            grp+1; ass+100000
                            rstrt();
                        } else {
                            cont();
                        }
                    }
                };
                rstrt();

            }
        })

    };
        // review profile options and btns/funcs
        const revprofbody = (user, ids) => {
            var path = ''; var size = '';
            if (user.profile_pic == 'none') {
                path = 'img/profpic.png';
                size = '100% 100%';
            }else {
                path = `${user.profile_pic.path}`;
                size = 'cover';
            }
            return `
                <div class="revprofbody" style="width:98%; margin:auto;">
                <!-- details here -->
                    <div style="width:100%; background-color:white; border-radiu:5px; border:solid 1px #f0f0f0;">
                        <div class="topProfon" style="width:100%; height:40px;">
                            <p style="padding:5px; margin:0px; font-size:15px; color:grey; float:left;">Details</p>
                            <p style="float:right; color:orangered; font-size:10px; margin:5px; cursor:pointer;" id="">delete</p>
                        </div>
                        
                        <div id="" class="" style="width:100px; height:100px; margin:auto; margin-top:10px; border-radius:100%; background-image:url(${path}); background-size:${size};">
                        </div>
                        <p id="" style="color:grey; text-align:center; font-size:10px; margin:5px;"> <img src="img/authand.png" width="15px" height="15px" id="${ids.autI}" style="display:none;"> ${user.user_name}</p>
                        <p id="" style="color:silver; text-align:center; font-size:15px; margin:5px;">${user.name}</p>
                        <div id="" style="height:100%; width:100%;">
                            <p id="" style="margin:5px; color:grey; font-size:13px;">${user.user_status}</p>
                        </div>
                        <p id="" style="color:rgb(78, 181, 221); text-align:center; font-size:12px; margin-top:5px;">${user.email}</p>
                    </div>
                    <br>
                    <!-- post type nav -->
                    <div style="width:100%; background-color:white; border-radiu:5px; border:solid 1px #f0f0f0; height:40px;">
                        <img src="../img/read.png" width="25px" height="25px" style="float:left; margin:5px; margin-left:20px; cursor:pointer;" id="${ids.opnJrnl}">
                        <img src="../img/strings2.png" width="25px" height="25px" style="float:right; margin:5px; margin-right:20px; cursor:pointer;" id="${ids.opnStr}">
                    </div> 
                    <br>
                    <!-- flw bod -->
                    <div style="width:100%; background-color:#f0f0f0; border-radiu:5px; border:solid 1px #dddddd; border-radius:5px;">
                        <div id="${ids.jrnBod}">
                            <br>
                            <p id="${ids.noPs}" style="color:grey; text-align:center; margin:0px; padding:5px;">user has no Journal</p>
                            <span id="${ids.dropPsts}"></span>
                            <br>
                        </div>
                        <div id="${ids.strBod}" style="display:none;">
                            <span id="${ids.drpStrNav}"></span>
                            <br>
                        </div>
                    </div>
                </div>
            `
        };
        // -------
        // FUNCS
        //--------
        // pst navs
        const pstNavs = (user, ids, jrn, str, jbod, drpP, sbod, drpStrNav, noPs) => {

            if (user.user_type !== 'user') {
                $(`#${ids.autI}`).fadeIn();
            }
            // jrn
            getUsrPst(user, drpP, noPs);
            $(`#${jrn}`).click(()=>{
                getUsrPst(user, drpP, noPs);
                $(`#${jrn}`).attr('src', '../img/read.png');
                $(`#${str}`).attr('src', '../img/strings2.png');
                $(`#${sbod}`).css('display', 'none');
                $(`#${jbod}`).fadeIn();
            })
            $(`#${str}`).click(()=>{
                drpStrNaver(user, drpStrNav);
                $(`#${str}`).attr('src', '../img/strings.png');
                $(`#${jrn}`).attr('src', '../img/readen.png');
                $(`#${jbod}`).css('display', 'none');
                $(`#${sbod}`).fadeIn();
            })

        };
        // ids for rev prof
        const chkIds = (user) => {
            return {
                // none ex
                noPs: 'noPs_usr' + user._id,
                // aut
                autI: 'autI_usr' + user._id,
                // delete user
                delIds: 'delIds_usr' + user._id,
                surDel: 'surDel_usr' + user._id,
                surDel: 'surDel_usr' + user._id,
                // post navs
                opnJrnl: 'opnJrnl_usr' + user._id,
                opnStr: 'opnStr_usr' + user._id,
                // flow bods
                jrnBod: 'jrnBod_usr' + user._id,
                dropPsts: 'dropPsts_usr' + user._id,
                strBod: 'strBod_usr' + user._id,
                drpStrNav: 'drpStrNav_usr' + user._id,
            }
        };
        // initiator
        const initRev = (user, drop) => {
            $('.revprofbody').remove();
            var ids = chkIds(user);;
            $(`#${drop}`).after(revprofbody(user, ids));
            // funcs
            pstNavs(user, ids, ids.opnJrnl, ids.opnStr, ids.jrnBod, ids.dropPsts, ids.strBod, ids.drpStrNav, ids.noPs);
        };

        // get user posts
        const getUsrPst = (user, drpP, noPs) => {
            $('.jrn-body').remove();
            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                
                if (data) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].user == user._id) {
                            if (data[i].content_type == 'journal' || data[i].content_type == 'author_journal' || data[i].content_type == 'usr_aut_book') {
                                console.log(data[i]._id);
                                $(`#${noPs}`).css('display', 'none'); var con = 'rel'; var rep = 'non';
                                appPst(user, data[i], drpP, noPs, con, rep);
                            }
                        }                          
                    }
                }

            });

        };
        // body
        const pstbod = (data, user, ids) => {
            var hd = ''; var tp = '';
            if (data.content_type == 'journal' || data.content_type == 'author_journal') {
                hd = data.heading;
                tp = 'journal';
            } else {
                hd = data.title;
                tp = 'book';
            }
            return `
                <div class="jrn-body" style="width:100%; background-color:white; border-top:solid 1px #dddddd;">
                    <p id="${ids.delPostId}" style="font-size:10px; padding:5px; margin:0px; color:orangered; cursor:pointer;"> delete ${tp} <img src="../img/del.png" width="8.5px" height="10px"> </p>
                    <div id="${ids.delPConId}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:grey; text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                        </div>
                        <div style="width:100%; height:30px;">
                            <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                                <p id="${ids.yesDelPId}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                            </div>
                            <div style="width:49%; float:left; height:100%; float:right;">
                                <p id="${ids.noDelPId}" style="text-align:center; color:grey; margin:5px; cursor:pointer;">Cancel</p>
                            </div>
                        </div>
                    </div>
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
                    <p class="postHeaderfrst" style="padding:5px; margin:0px;" id="">${hd}</p>
                    <div id="${ids.readId}" style="width:100%; height:35px;">
                        <img src="img/read.png" alt="" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer; display:none;">
                    </div>
                    <!-- post body area bellow -->
                    <div class="postBodyCon" id="${ids.bodyId}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                        <div style="width:100%; height:170px; overflow-y:auto;">
                            <p class="postBodtxt" style="margin:5px; font-size:13px;">${data.body}</p>
                        </div>
                        <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                            <p id="${ids.closeRdId}" style="margin:3.5px; text-align:center; cursor:pointer;">
                                <img src="img/up.png" width="20px" height="10px">
                            </p>
                        </div>
                    </div>
                </div>
            `
        }
        // FUNCS
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
        // read post body function
        const readPost = (data, readId, bodyId, comBod) => {
            if (data.body !== '') {
                $(`#${readId}`).css('display', 'block');
                let readbtn = $(`#${readId}`);
                readbtn.css('display:block;');
                readbtn.click(function() {
                    $(`#${comBod}`).slideUp();
                    $(`#${bodyId}`).slideDown();
                    $(`#${readId}`).attr('src', 'img/readen.png');
                });
            } else {
                $(`#${readId}`).css('display', 'none');
            }
        };
        // close-read btn function
        const CloseRead = (data, closeRdId, bodyId) => {
            let closbtn = $(`#${closeRdId}`);
            closbtn.click(function() {
                $(`#${bodyId}`).slideUp();
            });
        };
        // delete post funcs
        const deletePost = (data, delPMCId, delPostId, delPConId, yesDelPId, noDelPId, user, drp, noPs, con, rep) => {
            const opnBtn = $(`#${delPostId}`);
            const clseBtn = $(`#${noDelPId}`);
            const deletePbtn = $(`#${yesDelPId}`);

            // open btn
            opnBtn.click(()=>{
                //$(`#${delPMCId}`).slideUp();
                $(`#${delPConId}`).slideDown();
            });
            // clse btn
            clseBtn.click(()=>{
                $(`#${delPConId}`).slideUp();
                //$(`#${delPMCId}`).slideDown();
            });
            // delete post method
            deletePbtn.click(()=>{
                fetch(`/post/delete/${data._id}`, {
                    method : "delete"
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if (data.ok === 1) {
                        //location.reload();
                        if (con == 'rel') {
                            getUsrPst(user, drp, noPs);
                        }else {
                            fetch(`/adcenter/delete/${rep._id}`, {
                                method : "delete"
                            }).then((response) => {
                                return response.json();
                            }).then((data) => {
                                if (data) {
                                    $('.jrn-body').remove(); 
                                    getReprts();
                                }
                            });
                        }
                    }
                });
            });
        };
        // ids
        const createPIds = (data) => {
            return {
                // read body func
                readId : 'read_' + data._id,
                bodyId : 'body_' + data._id,
                closeRdId : 'closeRead_'+ data._id,
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
                // delete post funcs
                delPMCId: 'delPMCId_' + data._id,
                delPostId: 'delPost_' + data._id,
                delPConId: 'delPCOn_' + data._id,
                yesDelPId: 'yesDelP_' + data._id,
                noDelPId: 'noDelP_' + data._id,
            }
        }
        // init posts
        const appPst = (user, pst, drp, noPs, con, rep) => {
            var ids = createPIds(pst);
            // append
            $(`#${drp}`).append(pstbod(pst, user, ids));
            // img
            if (pst.content_type == 'journal' || pst.content_type == 'author_journal') {
                if (pst.img.length > 0) {
                    ImgFunc(pst, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
                }
                // with a video
                if (pst.vid !== '') {
                    VidFunc(pst, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
                }
            } else {
                if (pst.cover) {
                    $(`#${ids.ImgId}`).attr('src', pst.cover.path);
                    $(`#${ids.ImgId}`).css('display', 'block');
                    $(`#${ids.ImgId}`).attr('class', pst.cover.class);
                }
            }
            readPost(pst, ids.readId, ids.bodyId, ids.comBod);
            CloseRead(pst, ids.closeRdId, ids.bodyId);
            // del post]
            deletePost(pst, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId, user, drp, noPs, con, rep);
        };

        /**
         * ------------------
         * STRING GEN FUNCS
         * ------------------
         */
        // ASIGN NAVS
        const strNav = (ids) => {
            return `
                <!-- STR/THR -->
                <div class="strNav" style="width:100%; height:40px; background-color:#f9f9f9; border-bottom:solid 1px #dddddd;">
                    <div style="height:30px; margin-top:5px; float:left; margin-left:5px; width:30px; border-bottom:solid 2px skyblue;" id="${ids.opnStrThr}">
                        <img src="../img/thr.png" width="10px" height="20px" style="margin:5px; margin-left:10px; cursor:pointer;">
                    </div>
                    <div style="height:30px; margin-top:5px; float:right; margin-right:5px; width:30px;" id="${ids.opnStrHd}">
                        <img src="../img/str2.png" width="20px" height="20px" style="margin:5px; margin-right:5px; cursor:pointer;">
                    </div>
                </div>
            `
        };
        //nav
        const strNaver = (user, drpStrNav, opnStrThr, opnStrHd) => {

            initThrds(user, drpStrNav);
            $(`#${opnStrThr}`).click(()=>{
                $('.strFlw').remove();
                initThrds(user, drpStrNav);
                $(`#${opnStrThr}`).css('border-bottom', 'solid 2px skyblue');    
                $(`#${opnStrHd}`).css('border-bottom', '');    
            });
            $(`#${opnStrHd}`).click(()=>{
                $('.thrdFlw').remove();
                initStr(user, drpStrNav);
                $(`#${opnStrHd}`).css('border-bottom', 'solid 2px skyblue');    
                $(`#${opnStrThr}`).css('border-bottom', '');    
            });

        }; 

        // ids
        const createSNIds = (user) => {
            return {
                opnStrThr: 'opnStrThr_' + user._id,
                opnStrHd: 'opnStrHd_' + user._id
            }
        };
        // drp and initi
        const drpStrNaver = (user, drpStrNav) => {
            $('.strNav').remove();
            var ids = createSNIds(user);
            $(`#${drpStrNav}`).before(strNav(ids));
            // nav
            strNaver(user, drpStrNav, ids.opnStrThr, ids.opnStrHd); 
        };

        // create id for both str/thr drops
        const createDrpId = (user, pass, noid, thrb) => {
            return {
                drpId: `${pass}${user._id}`,
                nonId: `${noid}${user._id}`,
                thrFlw: `${thrb}${user._id}`
            }
        };

        // INIT THRDS
        //------------
        // initialize
        const initThrds = (user, drpStrNav) => {
            $('.thrdFlw').remove();
            var pass = 'drpIdForThrds_'; var noid = 'noThdsId_'; var thrb = 'thrdFlwBd_';
            var ids = createDrpId(user, pass, noid, thrb);
            $(`#${drpStrNav}`).after(`
                <div class="thrdFlw" id="${ids.thrFlw}"> 
                    <br>
                    <p style="text-align:center; color:grey; margin:0px; padding:5px;" id="${ids.nonId}">User has no threads</p>
                    <span id="${ids.drpId}"></span>
                </div>
            `);
            
            // get thrds
            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
                return responce.json();  
            }).then((thrdata)=>{
                if (thrdata) {
                    for (let i = 0; i < thrdata.length; i++) {
                        if (thrdata[i].content_type == 'thread') {
                            if (thrdata[i].user == user._id) {
                                $(`#${ids.nonId}`).css('display', 'none');
                                dispThrStr(thrdata[i], user, ids.drpId);
                                //$('#checknum-tex').css('display', 'none');
                                //$('#flowLoader4').fadeOut();
                            }
                        }
                    }
                    $('#flowLoader4').fadeOut();
                }
                //$('#container-one').css('display', 'none');
                // $('#dropChat').after(ViewStr(data));
            });
        };
        // thread body
        const viewThread = (thrdata, udata, user, ids) => {
            return `
                <div class="privStrBod" style="width:100%; background-color:#f9f9f9; border-top:solid 1px #dddddd;">
                    <p id="${ids.delPostId}" style="font-size:10px; padding:5px; margin:0px; color:orangered; cursor:pointer;"> delete thread <img src="../img/del.png" width="8.5px" height="10px"> </p>
                    <div class="strHdBd" style="width:95%; margin:auto; border-radius:5px; margin-bottom:15px;">
                        <!-- for general threads viewer -->
                        <div id="strop" class="" style="width:100%; margin:auto; cursor:pointer; background-color:white; background-size:100% 100%; border-top-right-radius: 7.5px; border-top-left-radius: 7.5px;">
                            <img src="" alt="" width="100%" style="border-top-right-radius: 7.5px; border-top-left-radius: 7.5px; display:none;" id="${ids.images}">
                            <video src="" alt="" width="100%" style="border-top-right-radius: 7.5px; border-top-left-radius: 7.5px; display:none;" id="${ids.vidBod}"></video>
                        </div>
                        <!-- IMG CONTROLLER -->
                        <div class="" id="${ids.imgThrCnt}" style="width:100%; height:45px; background-color:white; border:solid 1px #f0f0f0; display:none;">
                            <div style="width:30%; height:100%; float:left;">
                                <img id="${ids.bckImg}" src="img/backa.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:left;">
                            </div>
                            <div style="width:40%; height:100%; float:left;">
                                <p style="text-align:center; margin:10px; color:darkorange;"> <span id="${ids.curntImg}" style="font-size:15px;"></span> <i style="font-size:11px; color:grey;">/<span id="${ids.imgLen}"></span></i> </p>
                            </div>
                            <div style="width:30%; height:100%; float:right;">
                                <img id="${ids.fwdImg}" src="img/backb.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:right;">
                            </div>
                        </div>
                        <!-- video controls -->
                        <div id="${ids.vidCntrlDiv}" class="postInfoCon" style="height:30px; width:100%; background-color:white; border:solid 1px #f0f0f0; display:none;">
                            <img id="${ids.vidPlay}" src="img/playn.png" width="17.5px" height="17.5px" style="margin:5px; float:left; cursor:pointer;">
                            <img id="${ids.vidPause}" src="img/pausen.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;">
                            <!-- <img id="${ids.vidStop}" src="img/stopy.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;"> -->
                            <img id="${ids.vidMute}" src="img/muten.png" width="15px" height="15px" style="margin:7.5px; float:right; cursor:pointer;">
                            <p style="float:right; margin:5px; font-size:13px; color:grey;"> <span id="${ids.vidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${ids.vidOrgT}" style="font-size:10px; color:grey;"></span> </p>    
                        </div>
                        <p class="postHeaderfrstStr" style="padding:7.5px; color:#1a1a1a; font-size:13px; margin:0px;">${thrdata.head}</p>
                    </div>
                </div>  
            `
        }
        // multi-img effect
        const multiThrImg = (thrdata, udata, user, images, imgThrCnt, curntImg, imgLen, bckImg, fwdImg) => {
            $(`#${images}`).css('display', 'block');
            $(`#${images}`).attr('src', `${thrdata.img[0].path}`);
            $(`#${images}`).attr('class', `${thrdata.img[0].class}`);
            if (thrdata.img.length > 1) {
                $(`#${imgThrCnt}`).css('display', 'block');
                $(`#${curntImg}`).text('1');
                $(`#${imgLen}`).text(`${thrdata.img.length}`);
                // left and right func
                var left = $(`#${bckImg}`);
                var right = $(`#${fwdImg}`);
                var num = 0;
                // check multi img func
                
                left.click(function() {
                    $(`#${images}`).css('display', 'none');
                    num--;
                    if (num < 0) {
                        num = thrdata.img.length-1;
                    }
                    $(`#${images}`).attr("src", thrdata.img[num].path);
                    $(`#${images}`).attr("class", thrdata.img[num].class);
                    $(`#${images}`).fadeIn();
                    $(`#${curntImg}`).text(num+1);
                });
                
                right.click(function() {
                    $(`#thrImg`).css('display', 'none');
                    num++;
                    if (num >= thrdata.img.length) {
                        num = 0;
                    }
                    $(`#${images}`).attr("src", thrdata.img[num].path);
                    $(`#${images}`).attr("class", thrdata.img[num].class);
                    $(`#${images}`).fadeIn();
                    $(`#${curntImg}`).text(num+1);
                });
            }else {
                $(`#${imgThrCnt}`).css('display', 'none');
            }
        }; 
        // videos
        const videoThr = (thrdata, udata, user, vidBod, vidCntrlDiv, vidPlay, vidPause, vidStop, vidMute, vidCrntT, vidOrgT) => {
            $(`#${vidBod}`).css('display', 'block');
            $(`#${vidCntrlDiv}`).css('display', 'block');
            $(`#${vidBod}`).attr('src', `${thrdata.vid[0].path}`);
            $(`#${vidBod}`).attr('class', `${thrdata.vid[0].class}`);
            var video = document.getElementById(`${vidBod}`);
            video.muted = true;
            //$(`#${vidCrntT}`).text(video.currentTime);
            var dur = document.getElementById(`${vidBod}`);
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
        // create ids
        const thrIds = (thrdata) => {
            return {
                // delet
                delPostId: 'delPostId_' + thrdata._id,
                // image funcs
                images: 'images_' + thrdata._id,
                imgThrCnt: 'imgThrCnt_' + thrdata._id,
                curntImg: 'curntImg_' + thrdata._id,
                imgLen: 'imgLen_' + thrdata._id,
                bckImg: 'bckImg_' + thrdata._id,
                fwdImg: 'fwdImg_' + thrdata._id,
                // vid funcs
                vidBod: 'vidBod_' + thrdata._id,
                vidCntrlDiv: 'vidCntrlDiv_' + thrdata._id,
                vidPlay: 'vidPlay_' + thrdata._id,
                vidPause: 'vidPause_' + thrdata._id,
                vidStop: 'vidStop_' + thrdata._id,
                vidMute: 'vidMute_' + thrdata._id,
                vidCrntT: 'vidCrntT_' + thrdata._id,
                vidOrgT: 'vidOrgT_' + thrdata._id
            }
        };
        // apply
        const dispThrStr = (thrdata, udata, drp) => {
            const ids = thrIds(thrdata);
            //alert('thrd');
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                var user = ''; var usr = '';
                if (users) {
                    for (let i = 0; i < users.length; i++) {
                        if (thrdata.user == users[i]._id) {
                            usr = users[i].user_name;
                        }
                    }
                    if (usr.length > 15) {
                        user = usr.slice(0, 15)+'..';
                    }else {
                        user = usr;
                    }
                }
                $(`#${drp}`).prepend(viewThread(thrdata, udata, user, ids)); 
                //thrStrNote(thrdata, udata, user, ids.noteOne);
                // multi img effects
                if (thrdata.img.length > 0) {
                    multiThrImg(thrdata, udata, user, ids.images, ids.imgThrCnt, ids.curntImg, ids.imgLen, ids.bckImg, ids.fwdImg);
                }
                // vids
                if (thrdata.vid.length > 0) {
                    videoThr(thrdata, udata, user, ids.vidBod, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
                }
            });
        }

        // INIT STR
        // ---------
        const initStr = (user, drpStrNav) => {
            $('.strFlw').remove();
            var pass = 'drpIdForStr_'; var noid = 'noStrsId_'; var thrb = 'StrFlwBd_';
            var ids = createDrpId(user, pass, noid, thrb);
            $(`#${drpStrNav}`).after(`
                <div class="strFlw" id="${ids.thrFlw}"> 
                    <br>
                    <p style="text-align:center; color:grey; margin:0px; padding:5px;" id="${ids.nonId}">User has no strings</p>
                    <span id="${ids.drpId}"></span>
                </div>
            `);
            
                fetch('/strings/getStrings', { method: 'get'}).then((responce)=>{
                    return responce.json();
                }).then((data)=>{
                    var tieType = '';
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].content_type == 'string' && data[i].type == 'Private') {
                            
                            //fetch following
                            fetch('/profiles/getFlwnp', { method: 'get' }).then((responce)=>{ return responce.json() }).then((dataFlwn)=>{
                                
                                if (dataFlwn[0].following.length > 0) {
                                    for (let z = 0; z < dataFlwn[0].following.length; z++) {
                                        if (dataFlwn[0].following[z].user === data[i].user) {
                                            tieType = 'Friend';
                                            displayStrings(data[i], user, tieType, ids.drpId);
                                            $(`#${ids.nonId}`).css('display', 'none');
                                            break;
                                        }
                                    }
                                    myStrDiff(data[i], user, tieType);
                                }else {
                                    myStrDiff(data[i], user, tieType);
                                }
        
                            });
                        
                        }
                    }
                });
                const myStrDiff = (data, udata, tieType) => {
                    if (data.user == udata._id) {
                        tieType = 'Own';
                        displayStrings(data, udata, tieType, ids.drpId);
                        $('#checknum-s').css('display', 'none');
                    }else {
                        if (data.tied.length > 0) {
                            for (let x = 0; x < data.tied.length; x++) {
                                if (data.tied[x] == udata._id) {
                                    var tieType = 'Tied';
                                    displayStrings(data, udata, tieType, ids.drpId);
                                    $(`#${ids.nonId}`).css('display', 'none');
                                }
                            }
                        }
                    }
                }

        };
        // all strings
        const privString = (data, udata, user, fpath, ids) => {
            var path = '';
            if (fpath.profile_pic == 'none') {
                path = 'img/profpic.png';
            }else {
                path = `${fpath.profile_pic.path}`;
            }
            return `
                <div class="privStrBod"  style="width:100%; background-color:#f9f9f9; border-top:solid 1px #dddddd;">
                    <p id="${ids.delPostId}" style="font-size:10px; padding:5px; margin:0px; color:orangered; cursor:pointer;"> delete string <img src="../img/del.png" width="8.5px" height="10px"> </p>
                    <div class="strHdBd" style="width:95%; margin:auto; border-radius:5px; margin-bottom:15px;">
                        <!-- for general string viewer -->
                        <div id="strop" class="" style="width:99.5%; height:170px; margin:auto; margin-top:5px; cursor:pointer; background-color:white; background-image:url('img/cb1.png'); background-size:100% 100%;">
                            <br>
                            <div style="box-shadow:0px 0px 30px -15px #1a1a1a; width:80px; height:80px; margin-top:20px; border-radius:100%; margin:auto;">
                                <img src="${path}" width="100%" height="100%" style="border-radius:100%;">
                            </div>
                            <p style="text-align:center; color:skyblue; font-size:11px; margin:0px; padding:5px; margin-top:10px;"><i style="color:skyblue; font-size:9px;">creaetd by </i> ${user}</p>
                            <p style="text-align:center; margin:0px; padding:5px;">
                                <button id="${ids.viewId}" class="btn btn-default btn-xs" style="color:darkorange; border:solid 1px darkorange; background-color:white; border-radius:2.5px; opacity:0.7;"><strong>V I E W</strong></button>
                            </p>
                        </div>
                        <p class="postHeaderfrstStr" id="${ids.strHeadId}" style="padding:7.5px; color:#1a1a1a; font-size:13px; margin:0px;">${data.head}</p>
                        <p class="" id="${ids.strNameId}" style="padding:5px; color:grey; font-size:11px; margin:0px;">Public <strong style="font-size:18px;">.</strong> <span style="color:skyblue; font-size:13px;">${data.name}</span> </p>
                        <div style="width:100%; height:35px;">
                            <img id="${ids.opnRead}" src="img/read.png" alt="" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer; display:none;">
                            <img id="${ids.opnTied}" src="img/frnds.png" alt="" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer; display:none;">
                        </div>
                        <!-- string body area bellow -->
                        <div class="postBodyCon" id="${ids.readBody}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                            <div style="width:100%; height:170px; overflow-y:auto;">
                                <p class="postBodtxt" style="margin:5px; font-size:13px;">${data.body}</p>
                            </div>
                            <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                                <p id="${ids.clsRead}" style="margin:3.5px; text-align:center; cursor:pointer;">
                                    <img src="img/up.png" width="20px" height="10px">
                                </p>
                            </div>
                        </div>
                        <!-- tied area -->
                        <div class="postBodyCon" id="${ids.tiedBod}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                            <div style="width:100%; height:170px; overflow-y:auto;">
                                <span id="${ids.tiedFlow}"></span>
                            </div>
                            <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                                <p id="${ids.clsTied}" style="margin:3.5px; text-align:center; cursor:pointer;">
                                    <img src="img/up.png" width="20px" height="10px">
                                </p>
                            </div>
                        </div>
                        <div style="height:10px;"></div> 
                    </div>   
                </div>   
            `
        }
        // read body
        const readBodStr = (data, udata, tieType, user, opnRead, readBody, clsRead) => {
            $(`#${opnRead}`).css('display', 'block');
            $(`#${opnRead}`).click(()=>{
                $(`#${opnRead}`).attr('src', 'img/readen.png');
                $(`#${readBody}`).slideDown();
            });
            $(`#${clsRead}`).click(()=>{
                $(`#${readBody}`).slideUp();
            });
        };

        // check friends tied
        const chckTied = (data, udata, tieType, user, opnTied, clsTied, tiedBod, tiedFlow) => {
            $(`#${opnTied}`).css('display', 'block');
            $(`#${opnTied}`).click(()=>{
                $(`#${tiedBod}`).slideDown();
                //$('.checkTiedBod').css('display', 'none');
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    
                    if (users) {
                        for (let z = 0; z < data.tied.length; z++) {
                            var user = ''; var usr = '';
                            for (let i = 0; i < users.length; i++) {
                                if (data.tied[z] == users[i]._id) {
                                    usr = users[i].user_name;
                                }
                            }
                            if (usr.length > 15) {
                                user = usr.slice(0, 15)+'..';
                            }else {
                                user = usr;
                            }
                            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                                if(mode === 'light') {
                                    $('.checkTiedBod').css('border', 'solid 1px #dddddd');
                                    $('.checkTiedBod').css('background-color', 'white');
                                }else {
                                    $('.checkTiedBod').css('border', 'solid 1px #404040');
                                    $('.checkTiedBod').css('background-color', '#1a1a1a');
                                }
                            });
                            $(`#${tiedFlow}`).prepend(`
                                <div class="checkTiedBod" id="" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
                                    <div style="width:30%; height:100%; float:left;">
                                        <div style="width:33px; height:33px; margin:auto; background-image:url(img/profb.png); background-size:100% 100%; border-radius:100%; margin-top:3px;"></div>
                                    </div>
                                    <div style="width:50%; height:100%; float:left;">
                                        <a style="text-decoration:none;" href="/${user}"><p style="color:skyblue; padding:5px; margin:5px;">${user}</p></a>
                                    </div>
                                    <div style="width:20%; height:100%; float:right;">
                                        
                                    </div>
                                </div>
                            `);
                        }
                    
                    }

                });
            });
            $(`#${clsTied}`).click(()=>{
                $(`#${tiedBod}`).slideUp();
            });
        };
        // piv/pub look
        const pubPriv = (data, udata, tieType, user, strHeadId, strNameId, opnRead, opnTied) => {
            if (data.type == 'Private') {
                $(`#${strNameId}`).css('display', 'none');
            }else {
                $(`#${strHeadId}, #${opnRead}, #${opnTied}`).css('display', 'none');
            }
        };
        // create ids
        const createStrIds = (data) => {
            return {
                viewId: 'viewId_' + data._id,
                // read
                opnRead: 'opnRead_' + data._id,
                readBody: 'readBody_' + data._id,
                clsRead: 'clsRead_' + data._id,
                // pub/priv
                strHeadId: 'strHeadId_' + data._id,
                strNameId: 'strNameId_' + data._id,
                // tied
                opnTied: 'opnTied_' + data._id,
                clsTied: 'clsTied_' + data._id,
                tiedBod: 'tiedBod_' + data._id,
                tiedFlow: 'tiedFlow_' + data._id
            }
        };
        // display strings
        const displayStrings = (data, udata, tieType, drp) => {
            const ids = createStrIds(data);
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                var user = ''; var usr = ''; var fpath = '';
                if (users) {
                    for (let i = 0; i < users.length; i++) {
                        if (data.user == users[i]._id) {
                            usr = users[i].user_name;
                            fpath = users[i];
                        }
                    }
                    if (usr.length > 15) {
                        user = usr.slice(0, 15)+'..';
                    }else {
                        user = usr;
                    }
                }
                //checkMode();
                if (tieType == 'Friend') {
                    //$('#dropbox-strindex').prepend(privString(data, udata, user, val, fpath, ids));
                } else {
                    if (tieType == 'Own') {
                        $(`#${drp}`).prepend(privString(data, udata, user, fpath, ids));
                    }else {
                        $(`#${drp}`).prepend(privString(data, udata, user, fpath, ids));
                    }
                }
                if (data.type == 'Private' && data.tied.length > 0) {
                    chckTied(data, udata, tieType, user, ids.opnTied, ids.clsTied, ids.tiedBod, ids.tiedFlow);
                }
                if (data.body !== '') {
                    readBodStr(data, udata, tieType, user, ids.opnRead, ids.readBody, ids.clsRead);
                }
                // pub/priv look
                pubPriv(data, udata, tieType, user, ids.strHeadId, ids.strNameId, ids.opnRead, ids.opnTied);
            });
        }

    /**
     * ADMIN SECTION
     */
    var presAd = 'btn1';
    $('#opnRevAdm').click(()=>{
        if (presAd == 'btn2') {
            // for rev-adm
            $('#opnRevAdm').removeClass('btn-default');
            $('#opnRevAdm').addClass('btn-info');
            // for crt-adm
            $('#opnCrtAdm').removeClass('btn-info');
            $('#opnCrtAdm').addClass('btn-default');
            presAd = 'btn1';
        }
        $('#crtadm-bod').css('display', 'none');
        $('#revAdm-bod').fadeIn();
        getAllAdmins();
    });
    // opn crtaut
    $('#opnCrtAdm').click(()=>{
        if (presAd == 'btn1') {
            // for rev-adm
            $('#opnCrtAdm').removeClass('btn-default');
            $('#opnCrtAdm').addClass('btn-info');
            // for crt-adm
            $('#opnRevAdm').removeClass('btn-info');
            $('#opnRevAdm').addClass('btn-default');
            presAd = 'btn2';
        }
        $('#revAdm-bod').css('display', 'none');
        $('#crtadm-bod').fadeIn();
    });
    // get admins
    const getAllAdmins = () => {
        $('.admHdClss').remove();
        fetch('/adcenter/getAdmns', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            fetch('/adcenter/adcenInfo', {
                method: 'get'
            }).then((responce)=>{
                return responce.json();
            }).then((admn)=>{
                for (let z = 0; z < data.length; z++) {
                    if (data[z].mail !== admn.mail) {
                        dispAdmns(data[z]);
                    }
                }
            });
        });

        // user head holder
        const admnHd = (user, ids) => {
            return `
            <div class="admHdClss" style="width:98%; margin:auto; height:30px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                <p style="margin:0px; padding:5px; color:darkorange; float:left;">${user.mail}</p>
                <button class="btn btn-info btn-xs" style="margin:2.5px; float:right; border-radius:10px;" id="${ids.revProf}">profile</button>
            </div>
            `
        };
        const revProfAdmBtn = (user, btn) => {
            $(`#${btn}`).click(()=>{
                initAdmnRev(user);
            });
        };
        // ids
        const admnHdIds = (user) => {
            return {
                revProf: 'reviewProfBtn_admn_' + user._id 
            }
        };
        // push user head
        const dispAdmns = (user) => {
            var ids = admnHdIds(user);
            $('#flwAdmns').prepend(admnHd(user, ids));
            revProfAdmBtn(user, ids.revProf);
        };
    };
    
    // review profile options and btns/funcs
    const revAdmnBod = (user, ids) => {
        return `
            <div class="revAdmnBod" style="width:98%; margin:auto;">
            <!-- details here -->
                <div style="width:100%; background-color:white; border-radiu:5px; border:solid 1px #f0f0f0;">
                    <div class="topProfon" style="width:100%; height:40px;">
                        <p style="padding:5px; margin:0px; font-size:15px; color:grey; float:left;">Details</p>
                        <p style="float:right; color:orangered; font-size:10px; margin:5px; cursor:pointer;" id="${ids.deleteAdm}">delete</p>
                    </div>
                    <div style="width:90%; margin:auto; background-color:#f9f9f9; border-radius:5px; display:none;" id="${ids.dlAdmCon}">
                        <p style="text-align:center; color:grey; font-size:12px; margin:0px; padding:5px;">Are you sure you want to delete this admin?</p>
                        <hr style="margin:5px; width:97.5%;">
                        <div style="width:100%; height:30px;">
                            <div style="width:50%; height:100%; float:left; border-right:solid 1px #f0f0f0;">
                                <p style="color:orangered; font-size:13px; margin:0px; padding:5px; text-align:center; cursor:pointer;" id="${ids.dlAdmYe}">Yes</p>
                            </div>
                            <div style="width:50%; height:100%; float:right;">
                                <p style="color:grey; font-size:13px; margin:0px; padding:5px; text-align:center; cursor:pointer;" id="${ids.dlAdmNo}">No</p>
                            </div>
                        </div>
                    </div>
                    <div style="width:30px; height:30px; margin:auto; margin-top:10px;">
                        <img src="../img/cc.png" width="100%" height="100%">
                    </div>
                    <p id="" style="color:grey; text-align:center; font-size:10px; margin:5px;">${user.name}</p>
                    <p id="" style="color:silver; text-align:center; font-size:15px; margin:5px;">${user.mail}</p>
                    <p style="color:silver; font-size:13px; margin:0px; padding:5px; text-align:center;">Admin Type: <strong style="color:grey;">${user.cart}</strong> </p>
                    <div id="" style="height:100%; width:100%; border-top:solid 1px #f0f0f0;">
                        <p style="color:silver; font-size:13px; margin:0px; padding:5px;">Time spent online today: <strong style="color:grey;"></strong> </p>
                    </div>
                </div>
                <br>
            </div>
        `
    };

    const delAdmn = (user, ids) => {
        $(`#${ids.deleteAdm}`).click(()=>{
            $(`#${ids.dlAdmCon}`).slideDown();
        });
        $(`#${ids.dlAdmNo}`).click(()=>{
            $(`#${ids.dlAdmCon}`).slideUp();
        });
        $(`#${ids.dlAdmYe}`).click(()=>{
            fetch('/adcenter/remAdm', { method: 'post', body: JSON.stringify({ id: user._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                return res.json();
            }).then((col)=>{
                alert(`${user.mail} has been deleted!`);
                $('.revAdmnBod').remove();
                getAllAdmins();
            });
        });
    };

    // crt re ids
    const chkAdmIds = (user) => {
        return {
            deleteAdm: 'deleteAut_' + user._id,
            dlAdmCon: 'dlAdmCon_' + user._id,
            dlAdmYe: 'dlAdmYe_' + user._id,
            dlAdmNo: 'dlAdmNo_' + user._id,
        }
    };
    // initiator
    const initAdmnRev = (user) => {
        $('.revAdmnBod').remove();
        var ids = chkAdmIds(user);;
        $('#drpAdmnBod').after(revAdmnBod(user, ids));
        // post inf
        //authPosts(user, ids.totId, ids.tdyId);
        // delete author
        delAdmn(user, ids);
    };
    // ADD ADMIN FUNCS
    // mail check
    $('#verAdmMl').keyup(()=>{
        if ($('#verAdmMl').val() == '') {
          $('#verAdmMl').css('border-bottom', 'solid 1px #dddddd');
        } else {
          fetch('/adcenter/checkMailAdmn', { method: 'post', body: JSON.stringify({ mail: $('#verAdmMl').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
          }).then((data)=>{
            // check if user exists
            if (data == 'notAssigned') {
                $('#verAdmMl').css('border-bottom', 'solid 1px lightblue');
                $('#submit-mailVer-admn').fadeIn();
                //$('#verAutMl').fadeOut();
              }else {
                if (data) {
                  $('#submit-mailVer-admn').fadeOut();
                  $('#verAdmMl').css('border-bottom', 'solid 1px red');
                  //$('#verAutMl').fadeIn();
                }
              }
          });
          //checkCon();
        }
    });
    $('#submit-mailVer-admn').click(()=>{
        var chkVal = '';
        /*var code = Math.random().toString();
        var verCode = code.slice(2, 8);*/
        fetch('/mailer/verifyMail', { method: 'post', body: JSON.stringify({ email:  $('#verAdmMl').val(), subject: 'threadal Admin Signup Email verification'/*, body: verCode*/ }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
        }).then((verd)=>{
            if (verd == 'sent') {

                var targetDate = new Date();
                var seconds = targetDate.getMinutes();
                targetDate.setMinutes(targetDate.getMinutes() + 2);
                var countDownDate = targetDate.getTime();
                $('#admMaiInsCOn').css('display', 'none');
                $('#admMailVerCon').fadeIn();
                $('#admMailsentTo').text($('#verAdmMl').val());
                var x = setInterval(function() {
                  // Get today's date and time
                  var now = new Date().getTime();
            
                  // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  $('#admMailverTimer').text(`${minutes}:${seconds}`);

                  if (distance < 0) {
                    ranSub = false;
                    $('#admMailVerCon, #dontMail-div-adm').css('display', 'none');
                    if (chkVal == '') {
                      $('#admMaiInsCOn').fadeIn();
                    }
                    //$('#verAutMl').val('');
                    clearInterval(x);
                  }
                }, 1000);

            }
        });

        $('#submitVerCode-admn').click(()=>{
            fetch('/mailer/checkAttm', {}).then((res)=>{
              return res.json();
            }).then((attm)=>{
              if (attm > 0) {
                if (attm < 4) {
                  $('#attmptsP-admn').fadeIn();
                  $('#attmptsMailVer-admn').text(attm-1);
                }
                checkCde();
              }else {
                if (attm == 0) {
                  $('#verinfo-timer-div-admn').css('display', 'none');
                  $('#dontMail-div-admn').fadeIn();
                }
              }
            });
            
          });

        const checkCde = () => {
            fetch('/mailer/getVCde', { method: 'post', body: JSON.stringify({ code: $('#mail-ver-in-adm').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                return responce.json();
            }).then((verc)=>{
            //alert(verc);
                if (verc == 'yes') {
                    $('#admMaiInsCOn, #admMailsentTo, #admMailVerCon, #dontMail-div-admn').css('display', 'none');
                    $('#form-bg-admn').fadeIn();
                    var mlsn = $('#verAdmMl');
                    $('#admMail').val(mlsn.val());
                    chkVal = 'y';
              //$('#mail').prop('readonly', true);
              //$('#user-bg').prop('readonly', true);
              //clearInterval(x);
                }else {
                    minC();
                }
            });
        };
        const minC = () => {
            fetch('/mailer/wrongCde', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((min)=>{
                if (min < 1) {
                    fetch('/mailer/dontMail', { method: 'post', body: JSON.stringify({ mail: $('#mail-ver-in-adm').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=>{
                        return res.json();
                    }).then((mail)=>{
                        if (mail) {
                            $('#admMailVerCon').css('display', 'none');
                            $('#dontMail-div-admn').fadeIn();
                            $('#reInsEmail-admn').click(()=>{
                            $('#attmptsP-admn').css('display', 'none');
                            $('#mail-ver-in-adm').val('');
                            $('#admMailVerCon, #dontMail-div-admn').css('display', 'none');
                            $('#admMaiInsCOn').fadeIn();  
                            location.reload();
                            });
                        }
                });
              }
            });
          };

    });
    // submit form
    $('#subAdmInf').click(()=>{
        //var mus = $('#').checked;
        var allCks = 'General Admin';
        /*for (let i = 1; i < 3; i++) {
            var x = document.getElementById(`ck${i}-adm`).checked;
            var v = document.getElementById(`ck${i}-adm`).value;
            if (x == true) {
                allCks = v;
            }
        }*/
        if (allCks.length < 1) {
            alert('choose categories to insert data');
        }else {
            if ($('#admLName').val() !== '' && $('#admFName').val() !== '') {
                pushItAdm(allCks);
            }else {
                alert('complete fom to insert data');
            }
        }
    });
    const pushItAdm = (allCks) => {
        var password = []; var tpe = 'adm';
        starter(tpe, allCks, password);
        //alert(pswd);
    };

    // instert Author
    const insertAdm = (password, allCks) => {

            // $('#autLName').val() !== '' && $('#autFName').val() !== '' && $('#lclcart').val() !== ''
            fetch('/adcenter/insertAdm', { method: 'post', body: JSON.stringify({ mail: $('#admMail').val(), name: $('#admFName').val()+' '+$('#admLName').val(), pwd: {mainp: password[1], main_hsh: password[2], glob_multi: password[3]}, cart: allCks }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                return res.json();
            }).then((ins)=>{
                if (ins) {
                    console.log('admin pwd: '+password[0]);
                    fetch('/mailer/sendAuthAdm', { method: 'post', body: JSON.stringify({  email: $('#admMail').val(), subject: 'Welcome, threadal Administrator!', pwd: password[0] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                        return res.json();
                    }).then((col)=>{
                        if (col == 'sent') {
                            location.reload();
                        }
                    });
                }
            })
        
    };

    /**
     * /---------------
     * AUTHORS SECTION
     * /---------------
     */
    // nav funcs
    var pres = 'btn1';
    $('#opnRevAut').click(()=>{
        if (pres == 'btn2') {
            // for rev-aut
            $('#opnRevAut').removeClass('btn-default');
            $('#opnRevAut').addClass('btn-info');
            // for crt-aut
            $('#opnCrtAut').removeClass('btn-info');
            $('#opnCrtAut').addClass('btn-default');
            pres = 'btn1';
        }
        $('#crtaut-bod').css('display', 'none');
        $('#revaut-bod').fadeIn();
    });
    // opn crtaut
    $('#opnCrtAut').click(()=>{
        if (pres == 'btn1') {
            // for rev-aut
            $('#opnCrtAut').removeClass('btn-default');
            $('#opnCrtAut').addClass('btn-info');
            // for crt-aut
            $('#opnRevAut').removeClass('btn-info');
            $('#opnRevAut').addClass('btn-default');
            pres = 'btn2';
        }
        $('#revaut-bod').css('display', 'none');
        $('#crtaut-bod').fadeIn();
    });

    const Loader2 = () => {
        return `
            <div id="flowLoader-adc-auths" style="padding-top:50px;">
                <img src="img/load.png" width="40px" height="40px">
            </div>
        `
    };
    $('#flowAuth').before(Loader2());
    const getAUthors = () => {
        $('.autHdClss').remove();
        fetch('/adcenter/getAuthors', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            if (data) {
                $('#flowLoader-adc-auths').css('display', 'none');
                for (let i = 0; i < data.length; i++) {
                    dispAuths(data[i]);
                }
            }
        });

        // user head holder
        const authHd = (user, ids) => {
            return `
            <div class="autHdClss" style="width:98%; margin:auto; height:30px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                <p style="margin:0px; padding:5px; color:darkorange; float:left;">${user.mail}</p>
                <button class="btn btn-info btn-xs" style="margin:2.5px; float:right; border-radius:10px;" id="${ids.revProf}">profile</button>
            </div>
            `
        };
        const revProfAutBtn = (user, btn) => {
            $(`#${btn}`).click(()=>{
                initAutRev(user);
            });
        };
        // ids
        const authHdIds = (user) => {
            return {
                revProf: 'reviewProfBtn_' + user._id 
            }
        };
        // push user head
        const dispAuths = (user) => {
            var ids = authHdIds(user);
            $('#flwAuths').prepend(authHd(user, ids));
            revProfAutBtn(user, ids.revProf);
        };

    }
    // review profile options and btns/funcs
    const revAuthBod = (user, ids) => {
        return `
            <div class="revAuthBod" style="width:98%; margin:auto;">
            <!-- details here -->
                <div style="width:100%; background-color:white; border-radiu:5px; border:solid 1px #f0f0f0;">
                    <div class="topProfon" style="width:100%; height:40px;">
                        <p style="padding:5px; margin:0px; font-size:15px; color:grey; float:left;">Details</p>
                        <p style="float:right; color:orangered; font-size:10px; margin:5px; cursor:pointer;" id="${ids.deleteAut}">delete</p>
                    </div>
                    <div style="width:30px; height:30px; margin:auto; margin-top:10px;">
                        <img src="../img/authand.png" width="100%" height="100%">
                    </div>
                    <p id="" style="color:grey; text-align:center; font-size:10px; margin:5px;">${user.first_name} ${user.last_name}</p>
                    <p id="" style="color:silver; text-align:center; font-size:15px; margin:5px;">${user.mail}</p>
                    <div id="" style="height:100%; width:100%; border-top:solid 1px #f0f0f0;">
                        <p style="color:silver; font-size:13px; margin:0px; padding:5px;">categories:</p>
                        <span id="${ids.carts}"></span>
                    </div>
                    <!-- jrnl infos -->
                    <div id="" style="height:100%; width:100%; border-top:solid 1px #f0f0f0;">
                        <p style="color:silver; font-size:13px; margin:0px; padding:5px;">Total posts: <strong id="${ids.totId}" style="color:grey;"></strong> </p>
                        <p style="color:silver; font-size:13px; margin:0px; padding:5px;">Posts Today: <strong id="${ids.tdyId}" style="color:grey;"></strong> </p>
                    </div>
                </div>
                <br>
                <!-- flw bod -->
                <div style="width:100%; background-color:#f0f0f0; border-radiu:5px; border:solid 1px #dddddd; border-radius:5px;">
                    <br>
                    <p id="${ids.noPs}" style="text-align:center; color:grey; margin:5px;">Author has no Journal</p>
                    <span id="${ids.drpAuthJrn}"></span>
                    <br>
                </div>
            </div>
        `
    };
    // cart-init
    const autCarts = (user, carts) => {
        
        for (let i = 0; i < user.carts.length; i++) {
            $(`#${carts}`).append(`<p style="margin:5px; color:grey; font-size:10px;">- ${user.carts[i]}</p>`);
        }

    };
    const authPosts = (user, totId, tdyId) => {

        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            if (data) {

                var tot = 0; var tdy = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].mail == user.mail) {
                        var dat = [year, day, month, hour, minute];
                        tot+=1;
                        if (`${data[i].date[0]}/${data[i].date[1]}/${data[i].date[2]}` == `${dat[0]}/${dat[1]}/${dat[2]}`) {
                            tdy+=1;
                        }
                    }
                }
                $(`#${totId}`).text(tot);
                $(`#${tdyId}`).text(tdy);

            }
        });

    };
    const delAut = (user, deleteAut) => {
        $(`#${deleteAut}`).click(()=>{
            fetch('/adcenter/remAut', { method: 'post', body: JSON.stringify({ id: user._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                return res.json();
            }).then((col)=>{
                alert(`${user.mail} has been deleted!`);
                $('.revAuthBod').remove();
                getAUthors();
            });
        });
    };

    // crt re ids
    const chkAutIds = (user) => {
        return {
            drpAuthJrn: 'drpAuthJrn_' + user._id,
            deleteAut: 'deleteAut_' + user._id,
            carts: 'carts_' + user._id,
            noPs: 'noPsAut_' + user._id,
            totId: 'totId_' + user._id,
            tdyId: 'tdyId_' + user._id
        }
    };
    // initiator
    const initAutRev = (user) => {
        $('.revAuthBod').remove();
        var ids = chkAutIds(user);;
        $('#drpAuthBod').after(revAuthBod(user, ids));
        // funcs
        autCarts(user, ids.carts);
        getAutJrns(user, ids.drpAuthJrn, ids.noPs);
        // post inf
        authPosts(user, ids.totId, ids.tdyId);
        // delete author
        delAut(user, ids.deleteAut);
    };

    // EXTRACT AUT JRNS
    // ----------------
    // get user posts
    const getAutJrns = (user, drpP, noPs) => {
        $('.jrn-body').remove();
        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].mail == user.mail) {
                        $(`#${noPs}`).css('display', 'none'); var con = 'rel'; var rep = 'non';
                        appPst(user, data[i], drpP, noPs, con, rep);
                    }                          
                }
            }
        });
    };

    /**
     * HASHER
     */
    // generate grand-pwd
    $('#genAllPwd').click(()=>{
        var password = []; var tpe = 'all'; var allCks = 'generate_grand_pwd';
        starter(tpe, allCks, password);
    });
    // generator
    const starter = (tpe, allCks, password) => {
        var pswd = '';
        var rawpwd = Math.random().toString();
        var len = rawpwd.length;
        if (len > 10) {
            pswd = rawpwd.slice(2, 10);
        }else {
            if (len < 10) {
            pswd = rawpwd.slice(2, len);
            }
        }
        var spc = -0; var test = '';
        for (let p = 0; p < pswd.length; p++) {
            spc = spc+1;
            if (spc < 5) {
                var chk = pswd.slice(spc-1, spc);
                var ints = parseInt(chk);
                if (ints !== 0) {
                    let num = String.fromCharCode(97 + ints);
                    test += num;
                }else {
                    test += ints;
                }
            }else {
                var chk = pswd.slice(spc-1, spc);
                test += chk;
            }
        }
        var math = Math.random().toString(); var len1 = math.length; var slc = math.slice(2, len1); var runna = slc * 5; var runner = runna.toString();
        // hash math value for alphaets
        var math2 = Math.random().toString(); var len2 = math2.length; var slc2 = math2.slice(2, len2); var runna2 = slc2 * 5; var runner2 = runna2.toString();
        var tst = test.toString();
        Diff(password, runner, runner2, tst, tpe, allCks);
    }
    // alphabets/nunmber diff
    const Diff = (password, runner, runner2, pswd1, tpe, allCks) => {
        // var spacer
            var spc = 0;
            // all values holder
            var tst = '';
            // check each data
            if (pswd1.length > spc) {
                for (let i = 0; i < pswd1.length; i++) {
                    // spacer to loop thro
                    spc = spc+1; 
                    // loopn thro check
                    var check = pswd1.slice(spc-1, spc); 
                    // loopn thro runner 2
                    var chckn = runner2.slice(spc-1, spc); 
                    if (isNaN(check)) {
                        if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                        if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                        if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                        if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn1; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                        if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                    } else {
                        tst += check*chckn;
                    }
                }
            }
            Hasher(password, runner, runner2, tst, pswd1, tpe, allCks);
    }; 
    // maths/hasher
    const Hasher = (password, runner, runner2, tst, pswd1, tpe, allCks) => {
        var spc = 0;
        var tstr = tst.toString();
        var tster = '';
        // conditioning and adding hashes
        if (tstr.length > spc) {
              for (let i = 0; i < tstr.length; i++) {
                  spc = spc + 1;
                  // hasher value applyer
                  var test = runner.slice(spc-1, spc);
                  // multipling with runner to to hash up and assign value
                  if (isNaN(runner2)) {
                      tster += tester.toString();
                  }else {
                      var testing = runner2.slice(spc-1, spc)*test;
                      tster += testing.toString();
                  }
                  // input value hashing
                  var tester = tstr.slice(spc-1, spc);
                  tster += tester.toString(); 
              }
          }
          spc = 0;
          pswd1
          password[0] = pswd1;
          password[1] = tster;
          password[2] = runner;
          password[3] = runner2;
          if (tpe == 'aut') {
              insertAut(password, allCks);
          }
          if (tpe == 'all') {
              insertGpwd(password, allCks)
          }
          if (tpe == 'adm') {
              insertAdm(password, allCks)
          }
          //alert(`pwd = ${password[0]},  main hasher = ${password[1]}, global multi = ${password[2]}`);
    };
    // insert new pwd
    const insertGpwd = (password, all) => {

      fetch('/getGlbCol', {
          method: 'get',
          headers : {
              "Content-type" : "application/json; charset=utf-8"
          }
      }).then((res)=>{
          return res.json();
      }).then((lcl)=>{
          tryMe(lcl._id);
          // curent pwd: ehhh3415
      });

      const tryMe = (id) => {
          fetch('/adcenter/newGlobPwd', { method: 'put', body: JSON.stringify({ id: id, leyman: password[0], pwd: {mainp: password[1], main_hsh: password[2], glob_multi: password[3]} }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
              return responce.json();
            }).then((data)=>{
              if (data) {
                  //
                  fetch('/adcenter/getAuthors', {
                      method: 'get',
                      headers : {
                          "Content-type" : "application/json; charset=utf-8"
                      }
                  }).then((res)=>{
                      return res.json();
                  }).then((aut)=>{
                      for (let z = 0; z < aut.length; z++) {
                          sendIt(aut[z].mail, password[0]);
                      }
                      fetch('/adcenter/getAdmns', {
                          method: 'get',
                          headers : {
                              "Content-type" : "application/json; charset=utf-8"
                          }
                      }).then((res)=>{
                          return res.json();
                      }).then((adm)=>{
                          for (let z = 0; z < aut.length; z++) {
                              sendIt(adm[z].mail, password[0]);
                          }
                          alert('New Global Password generated!');
                      });
                      // curent pwd: iceb9796
                  });
                  //location.reload();
              }
            });
      };

    };
    // send data to all mails
    const sendIt = (mail, pwd) => {
        //  email: $('#autMail').val(), subject: 'Welcome, threadal BigJournal Author!', pwd: password[0]
        fetch('/mailer/sendGLobPwd', { method: 'post', body: JSON.stringify({  email: mail, subject: 'Global admin password', pwd: pwd }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
            return res.json();
        }).then((col)=>{
            
        });
    }

    /**
     * ADD AUTHORS FUNCS
     */
    // mail check
    $('#verAutMl').keyup(()=>{
        if ($('#verAutMl').val() == '') {
          $('#verAutMl').css('border-bottom', 'solid 1px #dddddd');
        } else {
          fetch('/adcenter/checkMail', { method: 'post', body: JSON.stringify({ mail: $('#verAutMl').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
          }).then((data)=>{
            // check if user exists
            if (data == 'notAssigned') {
                $('#verAutMl').css('border-bottom', 'solid 1px lightblue');
                $('#submit-mailVer').fadeIn();
                //$('#verAutMl').fadeOut();
                //();
                // check if email secure
                chekMailSec()
              }else {
                if (data) {
                  $('#submit-mailVer').fadeOut();
                  $('#verAutMl').css('border-bottom', 'solid 1px red');
                  //$('#verAutMl').fadeIn();
                  // check if email secure
                  chekMailSec()
                }
              }
          });
          //();
        }
      });
      $('#submit-mailVer').click(()=>{
        var chkVal = '';
            /*var code = Math.random().toString();
            var verCode = code.slice(2, 8);*/
            fetch('/mailer/verifyMail', { method: 'post', body: JSON.stringify({ email:  $('#verAutMl').val(), subject: 'threadal Author Signup Email verification'/*, body: verCode*/ }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
              return responce.json();
            }).then((verd)=>{
              if (verd == 'sent') {
                
                var targetDate = new Date();
                var seconds = targetDate.getMinutes();
                targetDate.setMinutes(targetDate.getMinutes() + 2);
                var countDownDate = targetDate.getTime();
                $('#autMaiInsCOn').css('display', 'none');
                $('#autMailVerCon').fadeIn();
                $('#autMailsentTo').text($('#verAutMl').val());
                var x = setInterval(function() {
                  // Get today's date and time
                  var now = new Date().getTime();
            
                  // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  $('#autMailverTimer').text(`${minutes}:${seconds}`);

                  if (distance < 0) {
                    ranSub = false;
                    $('#autMailVerCon, #dontMail-div').css('display', 'none');
                    if (chkVal == '') {
                      $('#autMaiInsCOn').fadeIn();
                    }
                    //$('#verAutMl').val('');
                    clearInterval(x);
                  }
                }, 1000);

              }
            })
            $('#submitVerCode').click(()=>{
              fetch('/mailer/checkAttm', {}).then((res)=>{
                return res.json();
              }).then((attm)=>{
                if (attm > 0) {
                  if (attm < 4) {
                    $('#attmptsP').fadeIn();
                    $('#attmptsMailVer').text(attm-1);
                  }
                  checkCde();
                }else {
                  if (attm == 0) {
                    $('#verinfo-timer-div').css('display', 'none');
                    $('#dontMail-div').fadeIn();
                  }
                }
              });
              
            });
            const checkCde = () => {
                fetch('/mailer/getVCde', { method: 'post', body: JSON.stringify({ code: $('#mail-ver-in').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                return responce.json();
            }).then((verc)=>{
                //alert(verc);
                if (verc == 'yes') {
                  $('#autMaiInsCOn, #autMailsentTo, #autMailVerCon, #dontMail-div').css('display', 'none');
                  $('#form-bg').fadeIn();
                  // get set locales
                    fetch('/getLcls', {
                        method: 'get',
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        }
                    }).then((res)=>{
                        return res.json();
                    }).then((lcl)=>{
                        for (let z = 0; z < lcl.length; z++) {
                        $('#drpLcl').before(`<p id"" style="margin: 0px; padding:2.5px; font-size: 13px; color: silver;">${lcl[z].Continent}</p>`);
                        for (let i = 0; i < lcl[z].Countries.length; i++) {
                            $('#drpLcl').before(`<li id="${lcl[z].Countries[i]}"><a href="#">${lcl[z].Countries[i]}</a></li>`);
                            $(`#${lcl[z].Countries[i]}`).click(()=>{
                            $('#lclcart').val(lcl[z].Countries[i]);
                            $('#lclid').text(lcl[z].Countries[i]);
                            //alert(lcl[z].Countries[i]);
                            });
                            // <li id="male" onclick="Male()"><a href="#">male</a></li>
                        }
                        }
                    });
                    var mlsn = $('#verAutMl');
                  $('#autMail').val(mlsn.val());
                  chkVal = 'y';
                  //$('#mail').prop('readonly', true);
                  //$('#user-bg').prop('readonly', true);
                  //clearInterval(x);
                }else {
                  minC();
                }
              });
            };
            const minC = () => {
              fetch('/mailer/wrongCde', { method: 'get' }).then((res)=>{
                return res.json();
              }).then((min)=>{
                if (min < 1) {
                  fetch('/mailer/dontMail', { method: 'post', body: JSON.stringify({ mail: $('#mail-ver-in').val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=>{
                    return res.json();
                  }).then((mail)=>{
                    if (mail) {
                      $('#autMailVerCon').css('display', 'none');
                      $('#dontMail-div').fadeIn();
                      $('#reInsEmail').click(()=>{
                        $('#attmptsP').css('display', 'none');
                        $('#mail-ver-in').val('');
                        $('#autMailVerCon, #dontMail-div').css('display', 'none');
                        $('#autMaiInsCOn').fadeIn();  
                        location.reload();
                      });
                    }
                  });
                }
              });
            };
        });
    // submit form
    $('#subAutInf').click(()=>{
        //var mus = $('#').checked;
        /*var allCks = [];
        for (let i = 1; i < 8; i++) {
            var x = document.getElementById(`ck${i}`).checked;
            var v = document.getElementById(`ck${i}`).value;
            if (x == true) {
                allCks[allCks.length] = v;
            }
        }
        if (allCks.length < 1) {
            alert('choose categories to insert data');
        }else {
            if ($('#autLName').val() !== '' && $('#autFName').val() !== '' && $('#lclcart').val() !== '') {
            }else {
                alert('complete fom to insert data');
            }
        }*/
        var allCks = 'none';
        pushIt(allCks);
    });
    const pushIt = (allCks) => {
        
        var password = []; var tpe = 'aut';
        starter(tpe, allCks, password);

        //alert(pswd);
    };

    // instert Author
    const insertAut = (password, allCks) => {

        fetch('/getLcls', {
            method: 'get',
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            }
        }).then((res)=>{
            return res.json();
        }).then((lcl)=>{
            for (let z = 0; z < lcl.length; z++) {
                
                for (let i = 0; i < lcl[z].Countries.length; i++) {
                    if (lcl[z].Countries[i] == $('#lclcart').val()) {
                        var locales  = [];
                        locales[0] = lcl[z].Continent;
                        locales[1] = lcl[z].Countries[i];
                        finsh(locales);
                    }
                    // <li id="male" onclick="Male()"><a href="#">male</a></li>
                }

            }
        });
        
        const finsh = (lcl) => {
            // $('#autLName').val() !== '' && $('#autFName').val() !== '' && $('#lclcart').val() !== ''
            fetch('/adcenter/insertAut', { method: 'post', body: JSON.stringify({ mail: $('#autMail').val(), first_name: $('#autFName').val(), last_name: $('#autLName').val(), pwd: {mainp: password[1], main_hsh: password[2], glob_multi: password[3]}, Continent: lcl[0], Country: lcl[1], my_srcs: []/*, carts: allCks*/ }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                return res.json();
            }).then((ins)=>{
                if (ins) {
                    fetch('/mailer/sendAuthAut', { method: 'post', body: JSON.stringify({  email: $('#autMail').val(), subject: 'Welcome, threadal BigJournal Author!', pwd: password[0] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=> {
                        return res.json();
                    }).then((col)=>{
                        if (col == 'sent') {
                            location.reload();
                        }
                    });
                }
            })
        };
        
    };

    /**
     * ---------
     * REPORTS
     * ---------
     */
    // etratct reports
    const getReprts = () => {
        
        fetch('/adcenter/getReports', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            if (data) {
                $('.autHdClss').remove();
                for (let i = 0; i < data.length; i++) {
                    getSpecInf(data[i]);
                }
            }
        });
        // get spec info
        const getSpecInf = (rep) => {
            fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((data)=>{
                if (data) {
                    var typ = '';
                    var from = ''; var of = '';
                    if (rep.type == 'Journal') {
                        typ = 'jrn';
                    }
                    if (rep.type == 'Profile') {
                        typ = 'prf';
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]._id == rep.from) {
                            from = data[i];
                        }
                        if (data[i]._id == rep.user) {
                            of = data[i];
                        }
                        if (data[i]._id == rep.by) {
                            of = data[i];
                        }
                    }
                    initReps(rep, from, of);
                }
            });
        };
        //--------
        // bodies
        // prf drop
        const typeDrp = (rep, from, of, ids) => {
            var path = '';
            if (of.profile_pic == "none") {
                path = 'img/profpic.png';
            }else {
                path = `${of.profile_pic.path}`;
            }
            return `
                <div class="autHdClss" style="width:98%; margin:auto; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                    <div style="width:98%; margin:auto; margin-top:5px; background-color:#f0f0f0; border-radius:5px;">
                        <p style="color:grey; margin:0px; padding:5px; font-size:12.5px;"> <strong> ${rep.type} </strong> was reported by: <i>${from.user_name}</i> </p>
                        <p style="color:grey; margin:0px; padding:5px; font-size:10px;"> Case: ${rep.content} </p>
                    </div>
                    <p style="text-align:center; font-size:10px; color:silver; margin:0px; padding:2.5px;">reported user:</p>
                    <div id="" class="" style="width:40px; height:40px; margin:auto; margin-top:10px; border-radius:100%; background-image:url(${path}); background-size:cover;">
                    </div>
                    <p style="text-align:center; font-size:10px; color:grey; margin:0px; padding:2.5px;">${of.user_name}</p>
                    <p style="text-align:center; margin:2.5px; margin-bottom:5px;">
                        <button id="${ids.revId}" class="btn btn-info btn-xs" style="border-radius:10px;">Review ${rep.type}</button>
                    </p>
                </div>
            `
        };
        // create Ids
        const createRepIds = (rep) => {
            return {
                revId: 'revReportBtn_' + rep._id
            }
        };
        // init reports 
        const initReps = (rep, from, of) => {
            var ids = createRepIds(rep); 
            $('#drpRprts').prepend(typeDrp(rep, from, of, ids));
            $(`#${ids.revId}`).click(()=>{
                $('.jrn-body, .revprofbody').remove();
                if (rep.type == 'Profile') {
                    var drop = 'drpRprtBods';
                    initRev(of, drop);
                }
                if (rep.type == 'Journal') {
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((data)=>{
                        
                        if (data) {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i]._id == rep.journal) {
                                    var drop = 'drpRprtBods';
                                    var not = ''; var con = 'non';
                                    appPst(of, data[i], drop, not, con, rep);
                                }                          
                            }
                        }
        
                    });
                }
            });
        };

    }

    // community updates
    $('#subComUpdtes').click(()=>{
        if ($('#comUptHd').val() !== '' && $('#comUptBd').val() !== '') {
            var curnt = '';
            var x = document.getElementById('devT').checked;
            var v = document.getElementById('autT').checked;
            var xv = document.getElementById('devT').value;
            var vx = document.getElementById('autT').value;
            if (x == true || v == true) {
                if (x == true && v == true) {
                    alert('tick only one checkbox');
                }else {
                    const startComUp = () => {
                        fetch('/adcenter/addPost', {
                            method: 'post',
                            body: JSON.stringify({ type: curnt, heading: $('#comUptHd').val(), date: [year, day, month, hour, minute], body: $('#comUptBd').val() }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                            } 
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                            location.reload();
                        });
                    };
                    if (x == true && v !== true) {
                        curnt = xv;
                        startComUp();
                    }
                    if (v == true && x !== true) {
                        curnt = vx;
                        startComUp();
                    }
                }
            }else {
                alert('tick a checkbox to complete');
            }
        }else {
            alert('add update contents to complete task!');
        }
    });

    //UPDATES-BODY
    //------------

    // get updts
    const getUpdtes = () => {
        $('.updts_body').remove();
        fetch('/adcenter/getUpdts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            for (let i = 0; i < data.length; i++) {
                appndUpdts(data[i]);
            }
        });
    };

    const updtBody = (data, type, ids) => {
        return `
        <div class="updts_body" style="width: 99%; margin:auto; border-bottom: solid 0.6px #f0f0f0;">
            <br style="margin:5px;">
            <div class="" style="width:97.5%; margin: auto; background-color:white; border-radius: 10px; box-shadow: 0px 0px 20px -15px grey;">
                <div style="margin: 5px; width: 100%;"> 
                    <span style="font-size: 12.5px; color: skyblue; float: left; margin: 5px;">${type}</span> 
                    <span style="font-size: 12px; color: silver; float: right; margin: 5px; margin-right: 10px;" id="${ids.dateFlow}"></span> 
                </div>
                <hr style="width: 98%; margin: 5px;">
                <p style="color:#1a1a1a; margin:7px;">${data.heading}</p>
                <img id="${ids.openBod}" src="img/read.png" width="20px" height="20px" style="margin:5px; cursor:pointer; float:left;">
                <img id="${ids.deleteUpdt}" src="img/del.png" width="20px" height="20px" style="margin:5px; cursor:pointer; float:left;">
                <br style="5px">
                <br style="5px">
                <div id="${ids.readBod}" class="ssubContn" style="width:97.5%; height:200px; margin:auto; background-color:#f9f9f9; border-radius:7px; margin-bottom:5px; display:none;">
                    <div style="width:100%; height:170px; overflow-y:auto;">
                        <p class="postBodtxt" style="margin:5px; font-size:13px;">${data.body}</p>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; border-top:solid 1px #f0f0f0; overflow-y:auto;">
                        <p id="${ids.closeRdId}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <div id="${ids.delBod}" class="ssubContn" style="width:97.5%; height:100px; margin:auto; background-color:#f9f9f9; border-radius:7px; margin-bottom:5px; display:none;">
                    <div style="width:100%; height:60px; overflow-y:auto;">
                        <p class="postBodtxt" style="margin:5px; font-size:13px; text-align:center;">Are you sure you want to delete this post?</p>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:40px; border-top:solid 1px #f0f0f0; overflow-y:auto;">
                        <div id="${ids.yesDelUpdt}" style="width:50%; height:100%; float:left; border-right:solid 1px #f0f0f0; cursor:pointer;">
                            <p style="text-align:center; margin:0px; padding:5px; color:red;">Yes</p>
                        </div>
                        <div id="${ids.noDelUpdt}" style="width:50%; height:100%; float:right; cursor:pointer;">
                            <p style="text-align:center; margin:0px; padding:5px;">No</p>
                        </div>
                    </div>
                </div>
                <br style="5px">
            </div>
            <br style="margin:5px;">
        </div>
        `
    };

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

    // funcs
    const updtsOprtns = (data, ids) => {
        // open|close
        $(`#${ids.openBod}`).click(()=>{
            $(`.ssubContn`).slideUp();
            $(`#${ids.readBod}`).slideDown();
        });
        $(`#${ids.closeRdId}`).click(()=>{
            $(`#${ids.readBod}`).slideUp();
        });

        // del funcs
        $(`#${ids.deleteUpdt}`).click(()=>{
            $(`.ssubContn`).slideUp();
            $(`#${ids.delBod}`).slideDown();
        });
        $(`#${ids.noDelUpdt}`).click(()=>{
            $(`#${ids.delBod}`).slideUp();
        });
        $(`#${ids.yesDelUpdt}`).click(()=>{
            fetch(`/adcenter/delete/${data._id}`, {
                method : "delete"
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.ok === 1) {
                    location.reload();
                }
            });
        });
    };

    // ids
    const crtUpdtsId = (id) => {
        return {
            dateFlow: `dateFlow_updt_${id}`,
            openBod: `openBod_updt_${id}`,
            readBod: `readBod_updt_${id}`,
            closeRdId: `closeRdId_updt_${id}`,
            deleteUpdt: `deleteUpdt_updt_${id}`,
            delBod: `delBod_updt_${id}`,
            yesDelUpdt: `yesDelUpdt_updt_${id}`,
            noDelUpdt: `noDelUpdt_updt_${id}`,
        }
    };

    //append updts
    const appndUpdts = (data) => {
        const ids = crtUpdtsId(data._id);
        if (data.type == 'Dev') {
            var tpe = ` <img src="img/cc.png" width="15px" height="15px"> Developers & technical admins`;
            $('#drpUpdtBods').append(updtBody(data, tpe, ids));
        }else {
            var tpe = ` <img src="img/authand.png" width="15px" height="15px"> Authors & content creators`;
            $('#drpUpdtBods').append(updtBody(data, tpe, ids));
        }
        smartDate(data, ids.dateFlow);
        updtsOprtns(data, ids);
    };

    /**
     * AUTHORS AND SUBS
     */
    const getSubscrpt = () => {

        // user author inf drop
        const autBody = (usr, aIds) => {
            var path = ''; var clas = '';
            if (usr.profile_pic == 'none') {
                path = 'img/profb.png';
                clas = '';
            }else {
                path = `${usr.profile_pic.path}`;
                clas = `${usr.profile_pic.class}`;
            }
            return `
            <div class="usr_aut_bod" id="${aIds.bodyId}" style="width:97%; height:430px; background-color:white; border-radius:5px; margin:auto; margin-top:-5px;">
                <div style="width:100%; height:100px;">
                    <div style="width:35%; float:left; height:100%;">
                        <div style="width:98%; height:92%; margin:auto; margin-top:2%; border-right:solid 1px #f0f0f0;">
                            <div style="width:60px; height:60px; margin:auto; margin-top:3px; border-radius:100%; background-image:url(${path}); background-size:100% 100%;" class="${clas}"></div>
                            <p style="text-align:center; margin:0px; padding:5px; color:grey;"> <img src="img/authand.png" width="12px" height="15px"> ${usr.user_name}</p>
                        </div>
                    </div>
                    <div style="width:65%; float:right; height:100%;">
                        <div style="width:98%; margin:auto; height:40px;">
                            <div style="width:50%; height:36px; margin-top:2px; float:left; border-right:solid 1px #f0f0f0;">
                                <p style="text-align:center; margin:0px; padding:5px; font-size:18px; color:grey;">FOLLOWING: <span style="font-weight:normal; color:#1a1a1a;">${usr.following.length}</span></p>
                            </div>
                            <div style="width:50%; height:36px; margin-top:2px; float:right;">
                                <p style="text-align:center; margin:0px; padding:5px; font-size:18px; color:grey;">FOLLOWERS: <span style="font-weight:normal; color:#1a1a1a;">${usr.followers.length}</span></p>
                            </div>
                        </div>
                        <div style="width:98%; margin:auto; height:60px;">
                            <div style="width:60%; height:56px; margin-top:2px; float:left; border-right:solid 1px #f0f0f0;">
                                <p style="text-align:center; margin:0px; padding:2px; font-size:25px; font-weight:normal; color:#1a1a1a;" id="${aIds.ttlSubs}"></p>
                                <p style="text-align:center; margin:0px; padding:1px; font-size:13.5px; color:grey;">total paid subs</p>
                            </div>
                            <div style="width:40%; height:56px; margin-top:2px; float:left;">
                                <p style="text-align:center; margin:0px; padding:5px; font-size:18px;"><img src="img/subrs.png" width="24px" height="15px"> <span style="font-weight:normal; color:#1a1a1a;">${usr.user_type.subscribers.length}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width:100%; height:50px;">
                    <div style="width:98%; margin:auto; border-top:solid 1px #f9f9f9; height:100%;">
                        <p style="text-align:center; margin:0px; padding:5px; color:grey;">
                            account no: <span id="${aIds.accNo}" style="color:#1a1a1a; font-weight:normal;">none</span>
                            account name: <span id="${aIds.accNa}" style="color:#1a1a1a; font-weight:normal;">none</span>
                            bank: <span id="${aIds.accB}" style="color:#1a1a1a; font-weight:normal;">none</span>
                        </p>
                    </div>
                </div>
                <div style="width:100%; height:280px;">
                    <div style="width:98%; margin:auto; height:272px; margin-top:2px; background-color:#f0f0f0; border-radius:5px; overflow-y:auto;">
                        <span id="${aIds.flowSs}"></span>
                    </div>
                </div>
            </div>
            `
        }
        const dropSFlows = (me, aIds) => {
            var incpt = year-1970;
            var allY = new Array(); allY = [];
            for (let i = 0; i < incpt+1; i++) {
                var anoDate = new Date();
                if (i == 0) {
                    anoDate.setFullYear(anoDate.getFullYear());
                }else {
                    anoDate.setFullYear(anoDate.getFullYear()-i);
                }
                allY[allY.length] = {year: anoDate.getFullYear(), state: 'E', m1: [], m2: [], m3: [], m4: [], m5: [], m6: [], m7: [], m8: [], m9: [], m10: [], m11: [], m12: []};
            }
            // gather subs
            fetch('/settings/subs', { method: 'get' }).then((res)=>{ return res.json() }).then((subs)=>{
                for (let i = 0; i < subs.length; i++) {
                    if (subs[i].sub_to == me._id) {
                        for (let o = 0; o < allY.length; o++) {
                            if (allY[o].year == subs[i].date[0]) {
                                if (subs[i].date[2] == "January") { allY[o].state = 'A'; allY[o].m1[allY[o].m1.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "February" || subs[i].date[2] == "Febuary") { allY[o].state = 'A'; allY[o].m2[allY[o].m2.length] = {amount: subs[i].amount, user: subs[i].user} }
                                if (subs[i].date[2] == "March") { allY[o].state = 'A'; allY[o].m3[allY[o].m3.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "April") { allY[o].state = 'A'; allY[o].m4[allY[o].m4.length] = {amount: subs[i].amount, user: subs[i].user} }
                                if (subs[i].date[2] == "May") { allY[o].state = 'A'; allY[o].m5[allY[o].m5.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "June") { allY[o].state = 'A'; allY[o].m6[allY[o].m6.length] = {amount: subs[i].amount, user: subs[i].user} }
                                if (subs[i].date[2] == "July") { allY[o].state = 'A'; allY[o].m7[allY[o].m7.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "August") { allY[o].state = 'A'; allY[o].m8[allY[o].m8.length] = {amount: subs[i].amount, user: subs[i].user} }
                                if (subs[i].date[2] == "September") { allY[o].state = 'A'; allY[o].m9[allY[o].m9.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "October") { allY[o].state = 'A'; allY[o].m10[allY[o].m10.length] = {amount: subs[i].amount, user: subs[i].user} }
                                if (subs[i].date[2] == "November") { allY[o].state = 'A'; allY[o].m11[allY[o].m11.length] = {amount: subs[i].amount, user: subs[i].user} } if (subs[i].date[2] == "December") { allY[o].state = 'A'; allY[o].m12[allY[o].m12.length] = {amount: subs[i].amount, user: subs[i].user} }
                            }
                        }
                    }
                }
            });
            // check payments
            var myRe = new Array();
            fetch('/settings/subsRe', { method: 'get' }).then((res)=>{ return res.json() }).then((sRe)=>{
                for (let i = 0; i < sRe.length; i++) {
                    if (sRe[i].user == me._id) {
                        myRe[myRe.length] = sRe[i];
                    }
                };
            });
            // mode
            const modeD = () => {
                $('.revAutPrcC').css('background-color', 'white');
                $('.brr_right_d').css('border-right', 'solid 1px #f0f0f0');
                $('.b_divider').css('background-color', '#f0f0f0');
                $('.postHeaderfrst').css('color', '#1a1a1a');
                $('.postHeaderscnd').css('color', 'black');
                $('.chld_flow_body').css('border', 'solid 1px #f0f0f0');
                $('.chld_flow_body').css('background-color', '#f9f9f9');
                $('.btm_brdr').css('border-bottom', 'solid 1px #f0f0f0');
            }
            const yBody = (detail, yIds) => {
                return `
                <div style="width:97%; margin:auto; margin-top:5px; border-radius:5px;" class="revAutPrcC year_bodies_autTr" id="${yIds.bodyId}">
                    <div style="width: 100%; height: 80px;">
                        <div style="width:30%; float:left; height:100%; float:left;">
                            <p class="postHeaderscnd" style="text-align: center; margin: 0px; padding: 5px; font-size: 22.5px;">${detail.year}</p>
                        </div>
                        <div style="width:70%; float:left; height:100%; float:right;">
                            <p style="text-align: center; margin: 0px; padding: 5px; font-size: 20px;" class="postHeaderscnd"> <span style="font-size: 13.5px; color: gray;">NGN</span> <span id="${yIds.earning}">000</span></p>
                            <p style="text-align: center; margin: 0px; padding: 2px; font-size: 13px; color:grey;">(your earnings 90%)</p>
                        </div>
                    </div>
                    <div style="width: 98.5%; height: 1px; margin: auto;" class="b_divider"></div>
                    <div style="width: 100%; height: 70px;">
                        <div class="brr_right_d" style="width: 30%; height: 60px; float:left; margin-top: 4px;">
                            <p style="text-align: center; margin: 0px; padding: 5px;">
                                <span  id="${yIds.subrs}" class="postHeaderfrst">000</span>
                            </p>
                            <p style="text-align: center; margin: 0px; padding: 3px; color: grey; font-size: 13px;"> subscribers </p>
                        </div>
                        <div class="brr_right_d" style="width: 30%; height: 60px; float:left; margin-top: 4px;">
                            <p style="text-align: center; margin: 0px; padding: 3px;">
                                <span id="${yIds.totalE}" class="postHeaderfrst">000</span>
                            </p>
                            <p style="text-align: center; margin: 0px; padding: 3px; color: grey; font-size: 13px;"> TOTAL </p>
                        </div>
                        <div style="width: 40%; height: 50px; float:right; margin-top: 3px;">
                            <p style="text-align: center; margin: 0px; padding: 3px;"> <span id="${yIds.comiss}" class="postHeaderfrst">000</span> </p>
                            <p style="text-align: center; margin: 0px; padding: 3px; color: grey; font-size: 13px;"> commission(-10%) </p>
                        </div>
                    </div>
                    <div style="width: 98.5%; height: 1px; margin: auto;" class="b_divider"></div>
                    <p style="color:darkorange; margin:0px; padding:5px; text-align:center; font-size:20px; display:none; cursor:pointer;" id="${yIds.preview}">preview qoutas <img src="img/dwn.png" style="margin-top:0px; width:9px; height:5px;"> </p>
                    <div id="${yIds.flowMBod}" style="width:100%; height:200px; display:none;">
                        <div class="chld_flow_body" style="width:95%; margin:auto; margin-top:5px; margin-bottom:10px; height:195px; border-radius:10px;">
                            <div class="btm_brdr" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center;"><img src="img/up.png" width="20px" height:15px; style="margin:5px; cursor:pointer;" id="${yIds.clsPre}"></p>
                            </div>
                            <div style="width:100%; height:165px; overflow-y:auto;">
                                <span id="${yIds.flowM}"></span>
                                <br>
                            </div>
                        </div>    
                    </div>
                </div>
                `
            };
            const monthFuncs = (det, yIds, nMnt, curD) => {
                // main months funcs
                const mBody = (nm, n, mIds) => {
                    return `
                    <div class="month_bodies_aut revAutPrcC" id="${mIds.bodyId}" style="width:97.5%; margin:auto; margin-top:5px; border-radius:5px;">
                        <div id="${mIds.mainI}" style="width:100%; height:40px; cursor:pointer;">
                            <div style="width:15%; height:100%; float:left; cursor:pointer;" class="brr_right_d">
                                <br>
                                <div id="${mIds.motve}" style="width:10px; height:10px; margin:auto; border-radius:100%; margin-top:-5px;" id=""></div>
                            </div>
                            <div style="width:35%; height:100%; float:left;">
                                <p style="margin:0px; padding:5px; margin-left:5px; font-size:20px;" class="postHeaderscnd">${n}</p>
                            </div>
                            <div style="width:50%; height:100%; float:right;">
                                <p style="text-align:center; margin:0px; padding:5px;"> <span style="color:grey; font-size:9px;">NGN</span> <span id="${mIds.earn}" class="postHeaderfrst" style="font-size:17px;"></span> </p>
                            </div>
                        </div>
                        <div id="${mIds.preCon}" style="width:100%; height:115px; display:none;">
                            <div style="width:98%; height:111px; margin:auto; margin-top:1px; border-radius:5px;" class="chld_flow_body">
                                <div class="btm_brdr" style="width:98%; height:25px; margin:auto;">
                                    <p style="text-align:center;"><img src="img/can.png" width="15px" height:15px; style="margin:5px; cursor:pointer; opacity:0.7;" id="${mIds.clsPre}"></p>
                                </div>
                                <div style="width:98%; margin:auto; height:36px;" class="btm_brdr">
                                    <p style="text-align: center; margin: 0px; padding: 5px;">
                                        <img src="img/subrs.png" alt="" width="21px" height="14px" style="margin:1px;"> <span style="font-size:14px;" id="${mIds.subrs}" class="postHeaderfrst">000</span>
                                    </p>
                                </div>      
                                <div style="width:100%; height:50px;">
                                    <div style="width:50%; height:47px; float:left; margin-top:2x;" class="brr_right_d">
                                        <p style="text-align: center; margin: 0px; padding: 3px; font-size:14px;">
                                            <span id="${mIds.totalE}" class="postHeaderfrst"></span>
                                        </p>
                                        <p style="text-align: center; margin: 0px; padding: 3px; color: grey; font-size: 11.5px;"> TOTAL </p>
                                    </div>
                                    <div style="width:50%; height:47px; float:right; margin-top:2x;">
                                        <p style="text-align: center; margin: 0px; padding: 3px; font-size:14px;"> <span id="${mIds.comiss}" class="postHeaderfrst"></span> </p>
                                        <p style="text-align: center; margin: 0px; padding: 3px; color: grey; font-size: 11.5px;"> commission(-10%) </p>
                                    </div>
                                </div>                      
                            </div>
                        </div>
                        <div style="width:98%; margin:auto; height:35px; border-top:solid 1px #f0f0f0; display:none;" id="${mIds.payCon}">
                            <p style="text-align:center; margin:0px; padding:5px;">
                                <button class="btn btn-default btn-xs" style="border:solid 1px darkorange; background-color:transparent; border-radius:15px; color:darkorange; display:none;" id="${mIds.toPay}">paid earning</button>
                                <span style="color:grey; font-size:17px; margin:5px; display:none;" id="${mIds.paid}">PAID</span>
                            </p>
                        </div>
                    </div>
                    `
                };
                const mFuncs = (nm, n, mt, mIds) => {
                    // check status
                    if (mt == 'cur') {
                        $(`#${mIds.motve}`).css('background-color', 'lightgreen');
                    }else {
                        $(`#${mIds.payCon}`).fadeIn();
                        fetch('/adcenter/getEarn', { method: 'get' }).then((res)=>{ return res.json() }).then((earn)=>{
                            var flg = 'pen';
                            for (let i = 0; i < earn.length; i++) {
                                if (earn[i].year == det.year && earn[i].month == n && earn[i].user == me._id) {
                                    flg = 'scs';  
                                }
                            }
                            if (flg == 'scs') {
                                $(`#${mIds.motve}`).css('background-color', 'skyblue');
                                $(`#${mIds.paid}`).fadeIn();
                            } else {
                                var dtn = 'this';
                                if (curD.year > det.year) {
                                    dtn = 'past';
                                }
                                if (dtn == 'past') {
                                    $(`#${mIds.motve}`).css('background-color', 'yellow');
                                    $(`#${mIds.toPay}`).fadeIn();
                                } else {
                                    if (nm.l < curD.l) {
                                        $(`#${mIds.motve}`).css('background-color', 'yellow');
                                        $(`#${mIds.toPay}`).fadeIn();
                                    }
                                }
                            }
                        });
                    }
                    // calculate amount
                    var subs = new Array();
                    for (let b = 0; b < allY.length; b++) {
                        if (allY[b].year == det.year) {
                            if (nm.l == 1) { subs = allY[b].m1 } if (nm.l == 2) { subs = allY[b].m2 } if (nm.l == 3) { subs = allY[b].m3 } if (nm.l == 4) { subs = allY[b].m4 }
                            if (nm.l == 5) { subs = allY[b].m5 } if (nm.l == 6) { subs = allY[b].m6 } if (nm.l == 7) { subs = allY[b].m7 } if (nm.l == 8) { subs = allY[b].m8 }
                            if (nm.l == 9) { subs = allY[b].m9 } if (nm.l == 10) { subs = allY[b].m10 } if (nm.l == 11) { subs = allY[b].m1 } if (nm.l == 12) { subs = allY[b].m12 }
                        }
                    }
                    var ttl = 0;
                    for (let s = 0; s < subs.length; s++) {
                        ttl = ttl+Number(subs[s].amount)
                    }
                    var ern = 90/100*ttl;
                    ern = parseInt(ern);
                    $(`#${mIds.earn}`).text(ern);
                    //magicNumbers(mIds.earn, ern);
                    // pre
                    ttl = parseInt(ttl);
                    $(`#${mIds.totalE}`).text(ttl);
                    // total subs
                    $(`#${mIds.subrs}`).text(subs.length);
                    // vrl com
                    var com = 10/100*ttl;
                    com = parseInt(com);
                    $(`#${mIds.comiss}`).text(com);
                    $(`#${mIds.mainI}`).click(()=>{
                        $(`#${mIds.preCon}`).slideDown();
                    });
                    $(`#${mIds.clsPre}`).click(()=>{
                        $(`#${mIds.preCon}`).slideUp();
                    });
                    // return earn paid
                    $(`#${mIds.toPay}`).click(()=>{
                        fetch('/adcenter/paidEarn', {
                            method: 'post',
                            body: JSON.stringify({ user: me._id, year: det.year, month: n, amount: ern, date: [year, day, month, hour, minute] }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                            } 
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                            fetch('/notifications/sendNotiUser', { method: 'post', body: JSON.stringify({
                                user: me._id 
                            }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                                if (sent) {
                                    tag();
                                }
                            });
                            const tag = () => {
                                fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                                    amount: ern,
                                    noti_type: 'earn_rec',
                                    year: det.year,
                                    month: n,
                                    date: [year, day, month, hour, minute]
                                }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                                    if (noti) {
                                        alert('shared!');
                                        fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
                                            return res.json();
                                        }).then((data)=>{
                                            $('.usrHdClss').remove();
                                            if (data.length > 0) {
                                                for (let i = 0; i < data.length; i++) {
                                                    if (data[i].user_type == me._id) {
                                                        monthFuncs(det, yIds, nMnt, curD);
                                                        //dropSFlows(data[i], aIds);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                });
                            };
                        });
                    });
                };
                const createMIds = (nm, n, mt) => {
                    return {
                        bodyId: `bodyId_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        mainI: `mainI_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        motve: `motve_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        amnt: `amnt_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        earn: `earn_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        // pre
                        preCon: `preCon_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        clsPre: `clsPre_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        subrs: `subrs_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        totalE: `totalE_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        comiss: `comiss_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        // pay
                        payCon: `payCon_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        toPay: `toPay_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`,
                        paid: `paid_${nm.m}_${n}_${mt}_${me._id}_author_monthlyIds`
                    }
                }
                const dropM = (nm, n, mt) => {
                    const mIds = createMIds(nm, n, mt);
                    $(`#${yIds.flowM}`).prepend(mBody(nm, n, mIds));
                    mFuncs(nm, n, mt, mIds);
                    modeD();
                }
                // extraction
                $('.month_bodies_aut').remove();
                var mnths = new Array(); mnths = [
                    {m: 'm1', n: 'January'}, {m: 'm2', n: 'Febuary'}, {m: 'm3', n: 'March'}, {m: 'm4', n: 'April'}, {m: 'm5', n: 'May'}, {m: 'm6', n: 'June'}, {m: 'm7', n: 'July'}, {m: 'm8', n: 'August'},
                    {m: 'm9', n: 'September'}, {m: 'm10', n: 'October'}, {m: 'm11', n: 'November'}, {m: 'm12', n: 'December'}
                ];
                for (let u = 0; u < nMnt.length; u++) {
                    var mDet = '';
                    if (curD.year == det.year && curD.m == nMnt[u].m && curD.l == nMnt[u].l) {
                        for (let x = 0; x < mnths.length; x++) {
                            if (nMnt[u].m == mnths[x].m) {
                                dropM(nMnt[u], mnths[x].n, 'cur')   
                            }
                        }
                    }else {
                        for (let x = 0; x < mnths.length; x++) {
                            if (nMnt[u].m == mnths[x].m) {
                                dropM(nMnt[u], mnths[x].n, 'pst')   
                            }
                        }
                    }
                }
            };
            const yearFuncs = (det, yIds) => {
                // current month & year
                var curD = {year: year, m: `m${date.getMonth()+1}`, l: date.getMonth()+1}
                // drop months
                var nMnt = new Array();
                const dMs = (m, l) => {
                    nMnt[nMnt.length] = {m: m, l: l};
                };
                // check if subd in year
                var checkS = 'n';
                // total earn
                var totL = 0; var ttlS = 0;
                const calcT = (m) => {
                    checkS = 'y';
                    for (let i = 0; i < m.length; i++) {
                        ttlS++;
                        totL = totL+Number(m[i].amount);
                    }
                };
                if (det.m1.length > 0) { calcT(det.m1); dMs('m1', 1); } if (det.m2.length > 0) { calcT(det.m2); dMs('m2', 2); } if (det.m3.length > 0) { calcT(det.m3); dMs('m3', 3); } if (det.m4.length > 0) { calcT(det.m4); dMs('m4', 4); }
                if (det.m5.length > 0) { calcT(det.m5); dMs('m5', 5); } if (det.m6.length > 0) { calcT(det.m6); dMs('m6', 6); } if (det.m7.length > 0) { calcT(det.m7); dMs('m7', 7); } if (det.m8.length > 0) { calcT(det.m8); dMs('m8', 8); }
                if (det.m9.length > 0) { calcT(det.m9); dMs('m9', 9); } if (det.m10.length > 0) { calcT(det.m10); dMs('m10', 10); } if (det.m11.length > 0) { calcT(det.m11); dMs('m11', 11); } if (det.m12.length > 0) { calcT(det.m12); dMs('m12', 12); }
                totL = parseInt(totL);
                magicNumbers(yIds.totalE, totL);
                // total subs
                magicNumbers(yIds.subrs, ttlS);
                // my earnings
                var ern = 90/100*totL;
                ern = parseInt(ern);
                $(`#${yIds.earning}`).text(ern);
                //magicNumbers(yIds.earning, ern);
                // vrl com
                var com = 10/100*totL;
                com = parseInt(com);
                magicNumbers(yIds.comiss, com);
                // testing eval() for string variable titles
                if (checkS == 'y') {
                    $(`#${yIds.preview}`).fadeIn();
                }
                $(`#${yIds.preview}`).click(()=>{
                    $(`#${yIds.preview}`).css('display', 'none');
                    $(`#${yIds.flowMBod}`).slideDown();
                    monthFuncs(det, yIds, nMnt, curD)
                });
                $(`#${yIds.clsPre}`).click(()=>{
                    $(`#${yIds.flowMBod}`).slideUp();
                    $(`#${yIds.preview}`).fadeIn();
                });
            };
            const createYIds = (yr, c) => {
                return {
                    bodyId: `${yr}_${c}_bodyId`,
                    earning: `${yr}_${c}_earning`,
                    subrs: `${yr}_${c}_subrs`,
                    totalE: `${yr}_${c}_totalE`,
                    comiss: `${yr}_${c}_comiss`,
                    // pre
                    preview: `${yr}_${c}_preview`,
                    flowMBod: `${yr}_${c}_flowMBod`,
                    clsPre: `${yr}_${c}_clsPre`,
                    flowM: `${yr}_${c}_flowM`,
                    // for child nodes
                    restId: `${yr}_${c}_restId`,
                }
            }
            const dropY = (det, c) => {
                const yIds = createYIds(det.year, c);
                $(`#${aIds.flowSs}`).append(yBody(det, yIds));
                yearFuncs(det, yIds);
                modeD();
            };
            const dropYrs = () => {
                $('.year_bodies_autTr').remove();
                for (let c = 0; c < allY.length; c++) {
                    if (allY[c].state == 'A') {
                        dropY(allY[c], c);
                    }
                }
            };
            var targetDate = new Date();
            //var seconds = targetDate.getMinutes();
            targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
            var countDownDate = targetDate.getTime();
            var x = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                if (distance < 0) {
                    dropYrs();
                    clearInterval(x);
                }
            }, 1000);
        };
        const autFuncs = (user, aIds) => {
            // assign paid subs
            fetch('/settings/subs', { method: 'get' }).then((res)=>{ return res.json() }).then((subs)=>{
                var subsTtl = 0; 
                for (let i = 0; i < subs.length; i++) {
                    if (subs[i].sub_to == user._id) {
                        subsTtl = subsTtl+Number(subs[i].amount);
                    }
                }
                subsTtl = parseInt(subsTtl);
                $(`#${aIds.ttlSubs}`).text(subsTtl);
            });
            fetch('/adcenter/getAccnos', { method: 'get' }).then((res)=>{ return res.json() }).then((accs)=>{
                var acc = accs.find(i => i.user == user._id);
                if (acc !== undefined) {
                    $(`#${aIds.accNa}`).text(acc.name);
                    $(`#${aIds.accNo}`).text(acc.number);
                    $(`#${aIds.accB}`).text(acc.bank);
                }
            });
            dropSFlows(user, aIds);
        }
        const createUAIds = (usr) => {
            return {
                bodyid: `bodyid_userAut_admnC_${usr._id}`,
                ttlSubs: `ttlSubs_userAut_admnC_${usr._id}`,
                flowSs: `flowSs_userAut_admnC_${usr._id}`,
                accNo: `accNo_userAut_admnC_${usr._id}`,
                accNa: `accNa_userAut_admnC_${usr._id}`,
                accB: `accB_userAut_admnC_${usr._id}`,
            } 
        }
        const initUAut = (user) => {
            const aIds = createUAIds(user);
            $('#drpUAutBods').append(autBody(user, aIds));
            autFuncs(user, aIds);
        }
        
        // user head holder
        const userHd = (user, ids) => {
            return `
            <div class="usrHdClss" style="width:98%; margin:auto; height:30px; background-color:white; margin-bottom:10px; border:solid 1px #f0f0f0; border-radius:5px;">
                <p style="margin:0px; padding:5px; color:darkorange; float:left;"> <img src="img/authand.png" width="15px" height="15px"> ${user.user_name}</p>
                <button class="btn btn-default btn-xs" style="margin:2.5px; float:right; border-radius:10px;" id="${ids.revProf}">preview</button>
            </div>
            `
        };
        const revProfBtn = (user, btn) => {
            $(`#${btn}`).click(()=>{
                $('.usr_aut_bod').remove();
                var drop = 'drpPrfle';
                initUAut(user);
                //initRev(user, drop);
            });
        };
        // ids
        const UserHdids = (user) => {
            return {
                revProf: 'reviewProfBtn_Authors_' + user._id 
            }
        };
        // push user head
        const pushUsrHd = (user) => {
            var ids = UserHdids(user);
            $('#drpUsrAuts').prepend(userHd(user, ids));
            revProfBtn(user, ids.revProf);
        };

        fetch('/adcenter/getUsers', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            $('.usrHdClss').remove();
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].user_type !== 'user') {
                        pushUsrHd(data[i]);
                    }
                }
            }
        });
    }

});
// cedi5704
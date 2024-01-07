import {setO, showO, getSpecO} from "./optimize.js";
function Poster() {

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
        /*var thouTen = 10000;
        var thouTenOne = 10100;
        var hunThou = 100000;
        var hunThouOne = 100100;
        var mil = 1000000;
        var milOne = 1100000;
        var milTen = 10000000;
        var milTenOne = 10100000;
        var hunMil = 100000000;
        var hunMilTenOne = 100100000;
        var bil = 1000000000;
        var bilOne = 1100000000;
        var bilTen = 10000000000;
        var bilTenOne = 10100000000;
        var hunBil = 100000000000;
        var hunBilTenOne = 100100000000;*/
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

    const checkMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.stylePosts, .bookBods, .srchCon_tg').css('background-color', 'white');
                $('.stylePosts').css('border-top', 'solid 1px #f0f0f0');
                $('.postInfoCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postDatefrst').css('color', 'grey');
                $('.postHeaderfrst').css('color', '#1a1a1a');
                $('.postBodyCon, .edtPstBd').css('background-color', '#f9f9f9');
                $('.areYSPCon').css('background-color', 'white');
                $('.yesesP').css('border-right', 'solid 1px #f0f0f0');
                $('.postBodyCon, .revBtns').css('border', 'solid 1px #f0f0f0');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postBodtxt').css('color', '#1a1a1a');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #f0f0f0');
                $('.commentInput, .sub_btn_autH').css('border', 'solid 1px #f0f0f0');
                $('.commentInput').css('background-color', 'white');
                $('.checkTagBody2').css('border', 'solid 1px #f0f0f0');
                $('.checkTagBody2').css('background-color', 'white');
                // alrts
                $('.edt_jrn_alrt').css('background-color', 'white');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 20px -5px #1a1a1a');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #f0f0f0');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #f0f0f0');
                $('.bodyComNoti, .OpnChptrsCr').css('background-color', 'white');
                // books
                $('.chptrsCr').css('background-color', '#f0f0f0');
            }
            if (mode === 'dark') {
                $('.stylePosts, .bookBods, .srchCon_tg').css('background-color', '#262626');
                $('.stylePosts').css('border-top', 'solid 1px #404040');
                $('.postInfoCon').css('border-bottom', 'solid 1px #404040');
                $('.postDatefrst').css('color', 'silver');
                $('.postHeaderfrst').css('color', 'white');
                $('.postBodyCon, .edtPstBd').css('background-color', '#333333');
                $('.areYSPCon').css('background-color', '#1a1a1a');
                $('.yesesP').css('border-right', 'solid 1px #333333');
                $('.postBodyCon, .revBtns').css('border', 'solid 1px #404040');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #404040');
                $('.postBodtxt').css('color', 'white');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #404040');
                $('.commentInput, .sub_btn_autH').css('border', 'solid 1px #404040');
                $('.commentInput').css('background-color', '#262626');
                $('.checkTagBody2').css('border', 'solid 1px #404040');
                $('.checkTagBody2').css('background-color', '#292929');
                // alrts
                $('.edt_jrn_alrt').css('background-color', '#262626');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 20px -5px #0d0d0d');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #404040');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #404040');
                $('.bodyComNoti, .OpnChptrsCr').css('background-color', '#262626');
                // books
                $('.chptrsCr').css('background-color', '#1a1a1a');
            }
        });
    };
    // for read on main page
    $('#redFlow').click(function() {
        $('#redFlow').attr('src', 'img/read.png');
        $('#strFlow').attr('src', 'img/strings2.png');
        $('#redBodCon').slideDown();
        $('#strBodCon').slideUp();
        profType()
    });
    // for hide and see
    $('#seeFlow').click(function() {
        $('#seeFlow').css('border-bottom', 'solid 2px darkorange');
        $('#hidFlow').css('border-bottom', '');
        $('#seeBodCon').slideDown();
        $('#hidBodCon').slideUp();
        profType()
    });
    $('#hidFlow').click(function() {
        $('#hidFlow').css('border-bottom', 'solid 2px darkorange');
        $('#seeFlow').css('border-bottom', '');
        $('#hidBodCon').slideDown();
        $('#seeBodCon').slideUp();
        profType()
    });

    // aut con
    $('#autAr').click(function() {
        $('#autAr').css('border-bottom', 'solid 2px skyblue');
        $('#setAr').css('border-bottom', '');
        $('#strAr, #mediaAr').css('border-bottom', '');
        $('#myset, #mystr, #myflow').css('display', 'none');
        $('#myAutc').fadeIn();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
            //checknum-autC
            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                $('.stylePosts').remove();
                var c = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].user == mainUser._id) {
                        if (data[i].content_type == 'author_journal' || data[i].content_type == 'usr_aut_book') {
                            c++;
                            if (data[i].content_type == 'author_journal' && mainUser.user_type.status == 'on') {
                                var nTp = 'gen';
                                displayAuthors(data[i], mainUser, nTp);
                                checkMode();
                            }
                            if (data[i].content_type == 'usr_aut_book' && mainUser.user_type.status == 'on') {
                                nTp = 'gen';
                                dropBBook(data[i], mainUser, nTp);
                            }
                        }
                    }
                }
                if (c > 0) {
                    $('#checknum-autC').fadeOut();
                }else {
                    $('#checknum-autC').fadeIn();
                }
            });
        });
    });

    // author ex
    $('#autAr-ex').click(function() {
        $('#autAr-ex').css('border-bottom', 'solid 2px skyblue');
        $('#mediaAr-ex, #strAr-ex').css('border-bottom', '');
        $('#myflow-ex, #mystr-ex').css('display', 'none');
        $('#myaut-ex').fadeIn();
        fetch('/extractEx/getData', { method: 'get' }).then((response)=>{ return response.json() }).then((data)=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: {  "Content-type" : "application/json; charset=utf-8"  } }).then((response)=>{ return response.json() }).then((mainUser)=>{
                var fl = 'n';
                for (let i = 0; i < data.user_type.subscribers.length; i++) {
                    if (data.user_type.subscribers[i].user == mainUser._id) {
                        fl = 'y';
                    }
                }
                if (fl == 'y') {
                    //$('#').fadeIn();
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((psts)=>{
                        $('.stylePosts, .side_bkLsts').remove();
                        var bCn = 0;
                        for (let i = 0; i < psts.length; i++) {
                            if (psts[i].user == data._id) {
                                if (psts[i].content_type == 'author_journal' || psts[i].content_type == 'usr_aut_book') {
                                    if (psts[i].content_type == 'author_journal' && data.user_type.status == 'on') {
                                        var nTp = 'gen';
                                        displayAuthors(psts[i], mainUser, nTp);
                                        checkMode();
                                    }
                                    if (psts[i].content_type == 'usr_aut_book' && data.user_type.status == 'on') {
                                        nTp = 'gen';
                                        dropBBook(psts[i], mainUser, nTp);
                                        bCn++;
                                        var nw = 'ex';
                                        dropFBks(psts[i], i, data, mainUser, nw);
                                    }
                                }
                            }
                        }
                        console.log('my books here: '+bCn);
                        if (bCn > 1) {
                            $('#ex_bk_ls_ln').text(bCn);
                            $('.x_books_l_c').slideDown();
                        }
                    })
                }else {
                    $('.checkSubAut').fadeIn();
                }
            });
        });
    });

    // check profile type
    const profType = () => {
        fetch('/getExNode', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data == '') {
                getExisting();
            } else {
                // check if user exists
                fetch('/getExNode', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((Exdata) => {
                    if (Exdata !== '' && Exdata!== '404') {
                        getExuserposts();
                    }
                });
            }
            
        });
    };

    const getCart = () => {
        fetch('/post/getCart', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data2)=>{
           if (data2) {
                if (data2 == 'home') {
                    $('.stylePosts').css('display', 'block');
                    $('#winame').text('Home');
                }else {
                    //$('.stylePosts').css('display', 'none');
                    $(`.${data2}`).css('display', 'block');
                }
                if (data2 == 'Music') {
                    $('#winame').text('Music');
                    var desi = ['mus', 'mus-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Politics') {
                    $('#winame').text('Politics');
                    var desi = ['pol', 'pol-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Sports') {
                    $('#winame').text('Sports');
                    var desi = ['spo', 'spo-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Entertainment') {
                    $('#winame').text('Entertainment');
                    var desi = ['ent', 'ent-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Fashion') {
                    $('#winame').text('Fashion');
                    var desi = ['fas', 'fas-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Business') {
                    $('#winame').text('Business');
                    var desi = ['bus', 'bus-xs'];
                    passDesi(desi);
                }
                if (data2 == 'People') {
                    $('#winame').text('People');
                    var desi = ['peo', 'peo-xs'];
                    passDesi(desi);
                }
                if (data2 == 'Art') {
                    $('#winame').text('Art');
                    var desi = ['art', 'art-xs'];
                    passDesi(desi);
                }
                
            }
        });
    };
    // design btns
    var passDesi = (desi) => {
        for (let i = 0; i < desi.length; i++) {
            $(`#${desi[i]}`).css('background-color', 'darkorange');
            $(`#${desi[i]}`).css('color', 'white');
        }
    };
    // location type
    const Locate = () => {
        fetch('/settings/get_loc', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json()
            }).then((udata)=>{ 
                fetch('/getGlbCol', {
                    method: 'get',
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    }
                }).then((res)=>{
                    return res.json();
                }).then((glob)=>{
                    var cou = udata.country; var con = '';
                    $('.countLoc').text(`${cou}`);
                    for (let b = 0; b < glob.locales.length; b++) {
                        for (let j = 0; j < glob.locales[b].Countries.length; j++) {
                            if (glob.locales[b].Countries[j] == udata.country) {
                                con = glob.locales[b].Continent;
                            }
                        }
                    }
                    $('.contiLoc').text(`${con}`);
                    if (data == 'continent') {
                        $(`.International`).remove();
                    }
                    if (data == 'country') {
                        $(`.International, .${con}`).remove();
                    }
                });
            });
        });
    };

    // LIMITER FUNCTIONALTIES
    // ----------------------
    // show or don't show limit button
    const ShowNotLim = () => {
            fetch('/post/getPLimiter', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                fetch('/post/getLimiter', { method: 'get'}).then((response)=>{
                    return response.json();
                }).then((data2)=>{
                    if (data.length < data2) {
                        $('#incLim').css('display', 'none');
                    }else {
                        $('#incLim').css('display', 'block');
                    }
                })
            })
    };
    ShowNotLim();
    // assign nothing to limmiter
    const AssignLim = () => {
        fetch('/post/unpostLimiter', { method: 'get' }).then((response) => {
            return response.json();
         }).then((limiter) => { 
             if (limiter) {
                profType();
             }
         });
    };
    AssignLim();
    // limiter button/function
    const incLim = `
        <p id="incLim" style="text-align:center; color:darkorange; margin-top:10px; margin-bottom:10px; cursor:pointer; display:none;">Load more</p>
    `;
    $('#dropbox-jr').after(incLim);
    $('#incLim').click(()=>{
        fetch('/post/postLimiter', { method: 'post', body: JSON.stringify({ limit: 10 }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
         }).then((limiter) => { 
            if (limiter) {
                profType();
                ShowNotLim();
             }
         });
    });

    // get explore-jrns
    $('#redFlow-ex').click(()=>{
        $('#strBodCon-ex').css('display', 'none');
        $('#redFlow-ex').attr('src', 'img/read.png');
        $('#strFlow-ex').attr('src', 'img/strings2.png');
        $('#redBodCon-ex').fadeIn();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((udata)=>{
            fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                return response.json();
            }).then((alldata)=>{
                setO();
                var targetDate = new Date();
                targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
                var countDownDate = targetDate.getTime();
                var x = setInterval(function() {
                    var now = new Date().getTime();
                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;
                    if (distance < 0) {
                        //optimize(tp);
                        getExplore(udata, alldata);
                        clearInterval(x);
                    }
                }, 1000);
            });
        });
    });
    const getExplore = (udata, alldata) => {
        $('.stylePosts, .side_bkLsts').remove();
        // authors
        var autconL = 0; $('.rated_aut_r_rd').remove(); var autLen = 0;
        if (showO.aut_asc.length > 2) {
            autLen = 2;
        }else {
            autLen = showO.aut_asc.length;
        }
        for (let m = 0; m < autLen; m++) {
            for (let i = 0; i < alldata.length; i++) {
                if (showO.aut_asc[m].author._id == alldata[i]._id) {
                    var nw = 'aut_r_rd';
                    autconL = autconL+270;
                    $('#exrhAuLSlide').css('width', `${autconL}px`);
                    var drop = `dropMstRd_aut_${m+1}`;
                    dropAut(alldata[i], udata, nw, drop)
                    $(`#mstRdaut_con_${m+1}`).fadeIn("slow");
                    magicNumbers(`mstRdBk_len_${m+1}`, showO.aut_asc[m].points);
                }
            }
        }
        // contents
        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            var passCon = new Array();
            // get oBooks
            var bkconL = 0; $('.dsidebook_rated').remove();
            for (let i = 0; i < data.length; i++) {
                if (showO.books_r.book_rd.length > 0) {
                    if (data[i].content_type == 'usr_aut_book' && data[i]._id == showO.books_r.book_rd[0].content._id) {
                        for (let u = 0; u < alldata.length; u++) {
                            if (data[i].user == alldata[u]._id) {
                                var nw = 'rtd_rd';
                                bkconL = bkconL+300;
                                $('#exrhBLSlide').css('width', `${bkconL}px`);
                                dropFBks(data[i], i, alldata[u], udata, nw);
                                $('#mstRdBk_con').fadeIn("slow");
                                magicNumbers('mstRdBk_len', showO.books_r.book_rd[0].points);
                            }                            
                        }
                    }
                }
                if (showO.books_r.book_r_asc.length > 0) {
                    if (data[i].content_type == 'usr_aut_book' && data[i]._id == showO.books_r.book_r_asc[0].content._id) {
                        for (let u = 0; u < alldata.length; u++) {
                            if (data[i].user == alldata[u]._id) {
                                var nw = 'rtd_asc';
                                bkconL = bkconL+300;
                                $('#exrhBLSlide').css('width', `${bkconL}px`);
                                dropFBks(data[i], i, alldata[u], udata, nw);
                                $('#mstAscBk_con').fadeIn("slow");
                                magicNumbers('mstAscBk_len', showO.books_r.book_r_asc[0].points);
                            }                            
                        }
                    }
                }
                if (showO.books_r.book_r_lkd.length > 0) {
                    if (data[i].content_type == 'usr_aut_book' && data[i]._id == showO.books_r.book_r_lkd[0].content._id) {
                        for (let u = 0; u < alldata.length; u++) {
                            if (data[i].user == alldata[u]._id) {
                                var nw = 'rtd_lkd';
                                bkconL = bkconL+300;
                                $('#exrhBLSlide').css('width', `${bkconL}px`);
                                dropFBks(data[i], i, alldata[u], udata, nw);
                                $('#mstLkdBk_con').fadeIn("slow");
                                magicNumbers('mstLkdBk_len', showO.books_r.book_r_lkd[0].points);
                            }                            
                        }
                    }
                }
            }
            // get most read jrns
            var rdJLen = 0;
            if (showO.jrn_r.jrn_r_rd.length > 3) {
                rdJLen = 2;
            } else {
                rdJLen = showO.jrn_r.jrn_r_rd.length;
            }
            for (let k = 0; k < rdJLen; k++) {
                for (let n = 0; n < data.length; n++) {
                    if (data[n]._id == showO.jrn_r.jrn_r_rd[k].content._id) {
                        $('#exp_jrn_MRC').fadeIn();
                        if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                            passCon[passCon.length] = {content: data[n], sect: 'rdJ_rt'};
                        }
                    }
                }
            }
            // get most asc jrns
            var ascJLen = 0;
            if (showO.jrn_r.jrn_r_asc.length > 3) {
                ascJLen = 2;
            } else {
                ascJLen = showO.jrn_r.jrn_r_asc.length;
            }
            for (let k = 0; k < ascJLen; k++) {
                for (let n = 0; n < data.length; n++) {
                    if (data[n]._id == showO.jrn_r.jrn_r_asc[k].content._id) {
                        $('#exp_jrn_MAC').fadeIn();
                        if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                            passCon[passCon.length] = {content: data[n], sect: 'ascJ_rt'};
                        }
                    }
                }
            }
            // get most liked jrns
            var lkdJLen = 0;
            if (showO.jrn_r.jrn_r_lkd.length > 3) {
                lkdJLen = 2;
            } else {
                lkdJLen = showO.jrn_r.jrn_r_lkd.length;
            }
            for (let k = 0; k < lkdJLen; k++) {
                for (let n = 0; n < data.length; n++) {
                    if (data[n]._id == showO.jrn_r.jrn_r_lkd[k].content._id) {
                        $('#exp_jrn_MLC').fadeIn();
                        if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                            passCon[passCon.length] = {content: data[n], sect: 'lkJ_rt'};
                        }
                    }
                }
            }
            // get most comment jrns
            var cmtJLen = 0;
            if (showO.jrn_r.jrn_r_cmt.length > 3) {
                cmtJLen = 2;
            } else {
                cmtJLen = showO.jrn_r.jrn_r_cmt.length;
            }
            for (let k = 0; k < cmtJLen; k++) {
                for (let n = 0; n < data.length; n++) {
                    if (data[n]._id == showO.jrn_r.jrn_r_cmt[k].content._id) {
                        $('#exp_jrn_MCC').fadeIn();
                        if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                            passCon[passCon.length] = {content: data[n], sect: 'cmtJ_rt'};
                        }
                    }
                }
            }
            /*var ascJLen = 0;
            if (showO.jrn_r.jrn_r_asc.length > 3) {
                ascJLen = 2;
            } else {
                ascJLen = showO.jrn_r.jrn_r_asc.length;
            }
            for (let k = 0; k < ascJLen; k++) {
                for (let n = 0; n < data.length; n++) {
                    if (data[n]._id == showO.jrn_r.jrn_r_asc[k].content._id) {
                        for (let p = 0; p < alldata.length; p++) {
                            if (alldata[p]._id == data[n].user) {
                                if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                                    var nTp = 'ascJ_rt'; var drop = "none";
                                    displayPosts(data[n], udata, nTp, drop);
                                    $('#exp_jrn_MAC').fadeIn();
                                }
                            }
                        }
                    }
                }
            }*/
            // all contents
            var allLen = 0; var jrnls = new Array();
            for (let n = 0; n < data.length; n++) {
                if (data[n].content_type == 'journal' || data[n].content_type == 'author_journal' || data[n].content_type == 'usr_aut_book' || data[n].content_type == 'admin_aut_journal') {
                    jrnls[jrnls.length] = data[n]
                }
            }
            if (jrnls.length > 30) {
                allLen = 30;
            } else {
                allLen = jrnls.length;
            }
            for (let i = 0; i < allLen; i++) {
                passCon[passCon.length] = {content: jrnls[i], sect: 'all_exp'};
            }
            // drop all books
            var dntP = 0;
            for (let m = 0; m < data.length; m++) {
                for (let i = 0; i < alldata.length; i++) {
                    if (data[m].content_type == 'usr_aut_book' && data[m].user == alldata[i]._id) {
                        if (dntP < 26) {
                            var nw = 'gen';
                            dntP++;
                            //$('#exrhBLSlide').css('width', `${bkconL}px`);
                            dropFBks(data[m], m, alldata[i], udata, nw);
                            console.log('e reach here');
                        }
                    }
                }
            }
            rollUp(passCon);
        });
        const rollUp = (pass) => {
            for (let l = 0; l < pass.length; l++) {
                if (pass[l].content.content_type == 'journal') {
                    var drop = "none";
                    displayPosts(pass[l].content, udata, pass[l].sect, drop);
                }
                if (pass[l].content.content_type == 'author_journal' || pass[l].content.content_type == 'admin_aut_journal') {
                    displayAuthors(pass[l].content, udata, pass[l].sect);
                }
                if (pass[l].content.content_type == 'usr_aut_book') {
                    dropBBook(pass[l].content, udata, pass[l].sect);
                }
            }
            checkMode();
            Locate();
        }
        /*var allP = new Array();
        const one = () => {
            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                var lim1 = 0; var lim2 = 1;
                for (let i = 0; i < data.length; i++) {
                    var chk = '';
                    for (let x = 0; x < udata.following.length; x++) {
                        if (udata.following[x].user == data[i].user || data[i].user == udata._id ) {
                            chk = 'y';
                        }
                    }
                    if (chk == '' && data[i].likedBy.length > 0) {
                        if (allP.length < 1) {
                            allP[0] = data[i];
                        }else {
                            allP[allP.length] = data[i];
                        }
                    }
                }
                iter(udata, alldata);
            });
        }
        one()
        // none loop fun iteration
        var loopa = new Array();
        const iter = (udata, alldata) => {

            //allP.sort();
            for (let i = 0; i < allP.length; i++) {
                if (loopa.length < 1) {
                    loopa[0] = allP[i].likedBy.length;
                }else {
                    loopa[loopa.length] = allP[i].likedBy.length;
                }
            }
            fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((psts)=>{
                loopa.sort();
                $('.stylePosts').remove();
                var dateN = [year, day, month, hour, minute];
                for (let x = 0; x < loopa.length; x++) {
                    for (let i = 0; i < psts.length; i++) {
                        //alert(dateN[0, 1, 2]+", post: "+psts[i].date[0, 1, 2]);
                        if (dateN[0] == psts[i].date[0] && dateN[1] == psts[i].date[1] && dateN[2] == psts[i].date[2] && loopa[x] == psts[i].likedBy.length) {
                            for (let z = 0; z < alldata.length; z++) {
                                if (alldata[z]._id == psts[i].user && psts[i].content_type == 'journal') {
                                    var wrt = 'exp';
                                    checkMode();
                                    getCart();
                                    displayPFrnds(psts[i], alldata[z], udata, wrt);
                                }
                            }
                        }
                    }
                }
            });            
        }*/
    };
    // opn cls rated
    var rtrF = 'o';
    $('#rte_btn_exp').click(()=>{
        if (rtrF == 'o') {
            $('#exp_ratin_con').slideUp();
            $('#rte_btn_img').attr('src', 'img/dwn.png');
            rtrF = 'c'
        } else {
            $('#exp_ratin_con').slideDown();
            $('#rte_btn_img').attr('src', 'img/up.png');
            rtrF = 'o';
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                return response.json();
            }).then((udata)=>{
                fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                    return response.json();
                }).then((alldata)=>{
                    setO();
                    var targetDate = new Date();
                    targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
                    var countDownDate = targetDate.getTime();
                    var x = setInterval(function() {
                        var now = new Date().getTime();
                        // Find the distance between now and the count down date
                        var distance = countDownDate - now;
                        if (distance < 0) {
                            //optimize(tp);
                            getExplore(udata, alldata);
                            clearInterval(x);
                        }
                    }, 1000);
                });
            });
        }
    }); 

    const Loader = () => {
        return `
            <div id="flowLoader" style="display:none;">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#seeBodCon, #hidBodCon, #dropbox-index, #dropbox-exj').before(Loader());
    
    // get existing posts
    const getExisting = () => {
        $('#checknum-j, #checknum-hd').css('display', 'block');
        $('#flowLoader').slideDown();
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
                    fetch('/lclJs', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((tpe)=>{
                        fetch('/post/getCart', { method: 'get' }).then((responce)=>{
                            return responce.json();
                        }).then((cart)=>{
                            $('.stylePosts, .side_bkLsts').remove();
                            if (cart == 'home' || tpe == 'pf') {
                                var cntNw = 0;
                                if (data.length > 0) {
                                    var meUsr = '';
                                    for (let z = 0; z < alldata.length; z++) {
                                        if (alldata[z]._id == udata._id) {
                                            meUsr = alldata[z]._id;
                                        }                                
                                    }
                                    for (let i = 0; i < data.length; i++) {
                                        
                                        if (data[i].type == 'User' || data[i].type == 'User_author') {
                                            //$('#checknum-j').slideUp();
                                            //fetch following
                                            if (data[i].content_type == 'journal') {
                                                if (udata.following.length > 0) {
                                                    for (let z = 0; z < udata.following.length; z++) {
                                                        if (data[i].user == meUsr) {
                                                            //alert(meUsr);
                                                            checkMode();
                                                            getCart();
                                                            $('#checknum-j').slideUp();
                                                            var nTp = 'gen'; var drop = "none";
                                                            displayPosts(data[i], udata, nTp, drop);
                                                            $('#checknum-j').css('display', 'none');
                                                            break;
                                                        }
                                                        if (udata.following[z].user == data[i].user) {
                                                            for (let y = 0; y < alldata.length; y++) {
                                                                if (alldata[y]._id == data[i].user && alldata[y].hidden !== 'Yes' && tpe !== 'pf') {
                                                                    var tdata = alldata[y];
                                                                    var wrt = 'gen';
                                                                    checkMode();
                                                                    getCart();
                                                                    displayPFrnds(data[i], tdata, udata, wrt);
                                                                    //alert(alldata[y]._id);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else {
                                                    if (data[i].user == udata._id) {
                                                        checkMode();
                                                        getCart();
                                                        $('#checknum-j').slideUp();
                                                        var nTp = 'gen'; var drop = "none";
                                                        displayPosts(data[i], udata, nTp, drop);
                                                        $('#checknum-j').css('display', 'none');
                                                    }
                                                }
                                            }
                                            if (data[i].content_type == 'author_journal') {
                                                if (data[i].user == udata._id && udata.user_type.status == 'on' && tpe !== 'pf') {
                                                    //alert(meUsr);
                                                    var nTp = 'gen';
                                                    displayAuthors(data[i], udata, nTp);
                                                    checkMode();
                                                    getCart();
                                                    //break;
                                                }else {
                                                    // check if subscibed content
                                                    for (let y = 0; y < alldata.length; y++) {
                                                        if (alldata[y]._id == data[i].user && alldata[y].user_type.status == 'on' && tpe !== 'pf') {
                                                            if (alldata[y].user_type.subscribers.length > 0) {
                                                                for (let n = 0; n < alldata[y].user_type.subscribers.length; n++) {
                                                                    if (alldata[y].user_type.subscribers[n].user == udata._id) {
                                                                        var nTp = 'gen';
                                                                        displayAuthors(data[i], udata, nTp);
                                                                        checkMode();
                                                                        getCart();
                                                                    }
                                                                }
                                                            }
                                                            //alert(alldata[y]._id);
                                                        }
                                                    }
                                                }
                                            }
                                            if (data[i].content_type == 'usr_aut_book') {
                                                if (data[i].user == udata._id && udata.user_type.status == 'on') {
                                                    //alert(meUsr);
                                                    nTp = 'gen';
                                                    dropBBook(data[i], udata, nTp);
                                                    checkMode();
                                                    getCart();
                                                    //break;
                                                }else {
                                                    // check if subscribed
                                                    for (let y = 0; y < alldata.length; y++) {
                                                        if (alldata[y]._id == data[i].user && alldata[y].user_type.status == 'on' && tpe !== 'pf') {
                                                            if (alldata[y].user_type.subscribers.length > 0) {
                                                                for (let n = 0; n < alldata[y].user_type.subscribers.length; n++) {
                                                                    if (alldata[y].user_type.subscribers[n].user == udata._id) {
                                                                        nTp = 'gen';
                                                                        dropBBook(data[i], udata, nTp);
                                                                        checkMode();
                                                                        getCart();
                                                                    }
                                                                }
                                                            }
                                                            //alert(alldata[y]._id);
                                                        }
                                                    }
                                                }
                                            }
                                            //$('#checknum-j').css('display', 'none');
                                        }else{
                                            if (data[i].content_type == 'journal' || data[i].content_type == 'admin_aut_journal') {
                                                if (tpe !== 'pf') {
                                                    var nTp = 'gen';
                                                    displayAuthors(data[i], udata, nTp);
                                                    checkMode();
                                                    getCart();
                                                }
                                            }
                                            //$('#checknum-j').css('display', 'none');
                                        }
                                        cntNw++;
                                        //alert('counted: '+cntNw+', total length: '+data.length);
                                    }
                                    if (data) {
                                        /*alert('yakai nan 2');
                                        console.log('here');
                                        alert('yakai nan3');*/
                                        Locate();
                                    }
                                    $('#flowLoader').slideUp();
                                }else {
                                    $('#checknum-j').css('display', 'block');
                                    $('#flowLoader').slideUp();
                                }
                            }else {
                                for (let i = 0; i < data.length; i++) {
                                    if (data[i].type == 'Author') {
                                        for (let z = 0; z < data[i].categories.length; z++) {
                                            if ( data[i].categories[z] == cart) {
                                                var nTp = 'gen';
                                                displayAuthors(data[i], udata, nTp);
                                                checkMode();
                                                getCart();
                                            }
                                        }
                                    }
                                    if (data[i].type == 'User_author') {
                                        for (let b = 0; b < alldata.length; b++) {
                                            if (alldata[b]._id == data[i].user && alldata[b].user_type /*alldata[b].user_type.status == 'on'*/) {
                                                for (let m = 0; m < alldata[b].user_type.categories.length; m++) {
                                                    if (alldata[b].user_type.categories[m] == cart) {
                                                        var drp = 'n';
                                                        if (alldata[b].user_type.status == 'on') {
                                                            if (alldata[b].user_type.subscribers.length > 0) {
                                                                for (let n = 0; n < alldata[b].user_type.subscribers.length; n++) {
                                                                    if (alldata[b].user_type.subscribers[n].user == udata._id) {
                                                                        var drp = 'y';
                                                                    }
                                                                }
                                                            }
                                                            if (alldata[b]._id == udata._id) {
                                                                var drp = 'y';
                                                            }
                                                        }else {
                                                            var drp = 'n';
                                                        }
                                                        if (drp == 'y') {
                                                            if (data[i].content_type == 'usr_aut_book') {
                                                                const nTp = 'gen';
                                                                dropBBook(data[i], udata, nTp);
                                                                checkMode();
                                                                getCart();
                                                            } else {
                                                                var nTp = 'gen';
                                                                displayAuthors(data[i], udata, nTp);
                                                                checkMode();
                                                                getCart();
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                $('#checknum-j').css('display', 'block');
                                $('#flowLoader').slideUp();
                                Locate();
                            }

                            // books sec
                            var cntB = 0;
                            if (tpe == 'pf') {
                                
                            }else {
                                
                                if (cart == 'home') {
                                    for (let n = 0; n < data.length; n++) {
                                        if (data[n].content_type == 'usr_aut_book') {
                                            if (data[n].user == udata._id) {
                                                cntB++; var nw = 'gen';
                                                dropFBks(data[n], n, udata, udata, nw);
                                                checkMode();
                                                getCart();
                                            }else {
                                                // check if subscribed
                                                /*for (let y = 0; y < alldata.length; y++) {
                                                    if (alldata[y]._id == data[n].user && alldata[y].user_type.status == 'on' && tpe !== 'pf') {
                                                        if (alldata[y].user_type.subscribers.length > 0) {
                                                            for (let q = 0; q < alldata[y].user_type.subscribers.length; q++) {
                                                                if (alldata[y].user_type.subscribers[q].user == udata._id) {
                                                                    cntB++;
                                                                    dropFBks(data[n], udata);
                                                                    checkMode();
                                                                    getCart();
                                                                }
                                                            }
                                                        }
                                                        //alert(alldata[y]._id);
                                                    }
                                                }*/
                                                for (let y = 0; y < alldata.length; y++) {
                                                    if (alldata[y]._id == data[n].user && alldata[y].user_type.status == 'on' && tpe !== 'pf') {
                                                        if (alldata[y].user_type.subscribers.length > 0) {
                                                            for (let q = 0; q < alldata[y].user_type.subscribers.length; q++) {
                                                                if (alldata[y].user_type.subscribers[q].user == udata._id) {
                                                                    cntB++; var nw = 'gen';
                                                                    dropFBks(data[n], n, alldata[y], udata, nw);
                                                                    //dropBBook
                                                                    checkMode();
                                                                    getCart();
                                                                }
                                                            }
                                                        }
                                                        //alert(alldata[y]._id);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else {
    
                                }
                                Locate();
                            }
                            if (cntB > 0) {
                                var x = window.matchMedia("(max-width: 600px)");
                                if (x.matches) {
                                    if (tpe !== 'pf') {
                                        if (cart == 'home') {
                                            $('#all_bks_hms').text('from subscriptions');
                                        }else {
                                            $('#all_bks_hms').text(`${cart} related`);
                                        }
                                    }
                                    $('#all_books_l_c').slideDown();
                                }else {
                                    $('#lgBksCon').fadeIn();
                                }
                            }
                        });
                    });
                });
            });
        });
    }
    // for exUser
    $('#mediaAr-ex').click(function() {
        $('#mediaAr-ex').css('border-bottom', 'solid 2px skyblue');
        //$('#setAr-').css('border-bottom', '');
        $('#strAr-ex, #autAr-ex').css('border-bottom', '');
        $('#mystr-ex, #myaut-ex').css('display', 'none');
        $('#myflow-ex').fadeIn();
        profType();
    });
    const getExuserposts = () => {
        fetch('/post/getExuserposts', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((data2) => {
            // displayPosts(data);
            $('.stylePosts').remove();
            if (data2 !== '') {
                
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((udata)=>{
                    
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((data)=>{
                        if (data) {
                            var has = 'none';
                            for (let i = 0; i < data.length; i++) {
                                // for exUser node
                                if (data2._id == data[i].user && data[i].content_type == 'journal' && data[i].hidden !== 'Yes') {
                                    has = 'is';
                                    checkMode();
                                    displayExuser(data[i], data2, udata);
                                }
                            }
                            $('#flowLoader').slideUp();
                            fetch('/extractEx/getData', { method: 'get' }).then((response)=>{ return response.json() }).then((Pdata)=>{
                                if (Pdata.publicity == 'private') {
                                    $('#checknum-exj').css('display', 'none');
                                }else {
                                    if (has == 'none') {
                                        $('#checknum-exj').css('display', 'block');
                                    }else {
                                        $('#checknum-exj').css('display', 'none');
                                    }
                                }
                            });
                        }
                    })

                });
            
            }
        });
    };

    /**
     * REVIEW NOTIFICATION FUNCS
     */
    // if commect body
    const comsBod = (udata, drpId, bodyComId) => {
        return `
        <div id="${bodyComId}" class="bodyComNoti" id="" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; margin-bottom:10px;">
            <div style="width:100%; height:200px; overflow-y:auto;">
                <span id="${drpId}" class="comFlow"></span>
            </div>
        </div>
        `;
    };
    const comIdsNoti = (data) => {
        return {
            // drop Id
            drpId: 'dropCom_noti_' + data._id,
            bodyComId: 'bodyComId_noti_' + data._id,
            // comment body id
            delId: 'delComId_noti_' + data._id,
            comBodId: 'comBodId_noti_' + data._id,
            dateFlwCom: 'dateFlwCom_noti_' + data._id
        }
    };
    // get specific jrn
    const getSpec = (data, udata, type) => {
        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((spec)=>{
            if (spec) {
                var flag = '';
                for (let i = 0; i < spec.length; i++) {
                    if (spec[i]._id == data) {
                        if (spec[i].content_type == 'journal' || spec[i]._id == data && spec[i].content_type == 'author_journal' || spec[i]._id == data && spec[i].content_type == 'admin_aut_journal') {
                            flag = 'white';
                            displayReviews(spec[i], udata, type);
                            checkMode();
                        }
                        if (spec[i].content_type == 'usr_aut_book') {
                            flag = 'white';
                            dropBBook(spec[i], udata, type);
                            checkMode();
                        }
                    }
                }
                if (flag == '') {
                    $('#container-one').fadeOut();
                    // hidden or not
                    $('#review-con').fadeIn();
                    if (type == 'like_post') {
                        $('#revPresNote').text('post liked');
                        $('#drp-like-tag-rev-bod').fadeIn();
                    }
                    if (type == 'tag_post') {
                        $('#revPresNote').text('shared you a post');
                        $('#drp-like-tag-rev-bod').fadeIn();
                    }
                    if (type == 'shr_post') {
                        $('#revPresNote').text('Tagged to a post');
                        $('#drp-like-tag-rev-bod').fadeIn();
                    }
                    if (type == 'comment_post') {
                        $('#revPresNote').text('commented on post');
                        $('#drp-like-tag-rev-bod').fadeIn();
                    }
                    $('#droprev-lktg').append(`
                        <h2 style="color:grey; text-align:center; margin:10px;">This post has been deleted or does not exist anymore!<h2>
                    `);
                }

            }
        });
    };
    // review from noti
    const getReview = (udata) => {
        fetch('/review/getPostType', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((type) => {
            if (type == 'like_post' || type == 'comment_post' || type == 'tag_post' || type == 'shr_post') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpec(data, udata, type);
                });
            }
            termRev(udata);
        });
    };
    const checkRev = (udata) => {
        
        fetch('/review/allow', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((revLet) => {
            if (revLet == 'yes') {
                getReview(udata);
            }else {
                checkRev(udata);
            }
        });

    };
    const startProc = () => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((udata)=>{
            checkRev(udata);
        });
    };
    startProc();
    const termRev = (udata) => {
        fetch('/review/termRev', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((term) => {
            if (term) {
                checkRev(udata);
            }
        });
    };

    // journ containing body&image
    const bodyJourn = (data, udata, ids) => {
        var path = ''; var loc = ''; var clas = '';
        if (data.type == 'Author') {
            loc = data.location;
        }else {
            if (udata.profile_pic == 'none') {
                path = 'img/profb.png';
                clas = '';
            }else {
                path = `${udata.profile_pic.path}`;
                clas = `${udata.profile_pic.class}`;
            }
            loc = udata.country;
        }
        return `
        <div class="stylePosts" style="width:100%;" id="${ids.adptCart}">
            <div style="width:100%; height:30px; display:none;" class="${ids.autSrcs} ${loc}">
                <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/authand.png); background-size:100% 100%; margin:5px;"></div>
                <p class="postHeaderfrst" style="float:left; font-size:10px; margin:0px; padding:5px;"> 
                    <span id="${ids.autInfo}"></span>
                </p>
                <img src="img/opt.png" class="${ids.openPopId}" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                <i class="postDatefrst" style="float:right; margin:5px; color:silver; font-size:10px;" id="${ids.dateFlowAut}"></i>
            </div>
            <div style="width:100%; height:30px; display:none;" class="${ids.usrAut}">
                <div class="${clas}" style="float:left; width:20px; height:20px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="float:left; margin:0px; padding:3px;"> 
                    <a href="${udata.user_name}" style="text-decoration:none; font-weight:lighter;" class="postDatefrst"><span id="">${udata.user_name} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></span></a>
                </p>
                <img src="img/opt.png" class="${ids.openPopId}" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                <i class="postDatefrst" style="float:right; margin:5px; color:silver; font-size:10px;" id="${ids.dateFlow}"></i>
            </div>
            <div class="edtPstBd" id="${ids.popBodId}" style="width:100%; display:none;">
                <div class="edtPstFlw" style="width:100%; height:30px;">
                    <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsePopId}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                </div>
                <!-- delp cons -->
                <div id="${ids.delPMCId}" class="edtPstFlw" style="width:100%; height:35px;">
                    <p id="${ids.delPostId}" style="margin:8px; cursor:pointer;" class="postDatefrst"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete post</p>
                </div>
                <div id="${ids.delPConId}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                    </div>
                    <div style="width:100%; height:30px;">
                        <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                            <p id="${ids.yesDelPId}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                        </div>
                        <div style="width:49%; float:left; height:100%; float:right;">
                            <p id="${ids.noDelPId}" style="text-align:center; margin:5px; cursor:pointer;" class="postDatefrst">Cancel</p>
                        </div>
                    </div>
                </div>
                <!-- edt cons -->
                <div id="${ids.edtPost}" class="edtPstFlw" style="width:100%; height:35px;">
                    <p style="margin:8px; cursor:pointer;" class="postDatefrst"> <img src="img/wada.png" width="12.5px" height="15px" style="margin-right:10px;"> Edit post</p>
                </div>
                <!-- hide cons -->
                <div id="${ids.hidPMCId}" class="edtPstFlw" style="width:100%; height:35px;">
                    <p id="${ids.hidPostId}" class="postDatefrst" style="margin:8px; cursor:pointer;"> <img src="img/hide.png" width="15px" height="15px" style="margin-right:10px;"> <span id="${ids.tryHid}"></span> post</p>
                </div>
                <div id="${ids.hidPConId}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px;"> Are you sure you want to <span id="${ids.askHid}"></span>?</p>
                    </div>
                    <div style="width:100%; height:30px;">
                        <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                            <p id="${ids.yesHidPId}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                        </div>
                        <div style="width:49%; float:left; height:100%; float:right;">
                            <p id="${ids.noHidPId}" style="text-align:center; margin:5px; cursor:pointer;" class="postDatefrst">Cancel</p>
                        </div>
                    </div>
                </div>
                <!-- prom cons -->
                <div id="${ids.promId}" class="" style="width:100%; height:35px;">
                    <p style="margin:8px; color:skyblue; cursor:pointer;">Promote</p>
                </div>
                <!-- report cons -->
                <div id="${ids.reprtId}" class="" style="width:100%; height:35px;">
                    <p style="margin:8px; cursor:pointer;" class="postDatefrst"> <img src="img/flag.png" width="15px" height="15px" style="margin-right:10px;"> Report post</p>
                </div>
                <div id="${ids.repConId}" class="areYSPCon" style="width:100%; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.inApRep}"> Inapproriate content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.abusRep}"> Abusive content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.clsRep}"> cancel </p>
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
                <p style="float:right; margin:5px; font-size:13px;" class="postDatefrst"> <span id="${ids.vidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${ids.vidOrgT}" style="font-size:10px;" class="postDatefrst"></span> </p>    
            </div>
            <!-- video done -->
            <img id="${ids.ImgId}" src="" width="100%" height="100%" style="display:none;">
            <div class="postInfoCon" id="${ids.imSldId}" style="width:100%; height:45px; display:none;">
                <div style="width:30%; height:100%; float:left;">
                    <img id="${ids.leftId}" src="img/backa.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:left;">
                </div>
                <div style="width:40%; height:100%; float:left;">
                    <p style="text-align:center; margin:10px; color:darkorange;"> <span id="${ids.imgNow}"></span> <i style="font-size:13px;" class="postDatefrst">/<span id="${ids.imgAll}"></span></i> </p>
                </div>
                <div style="width:30%; height:100%; float:right;">
                    <img id="${ids.rightId}" src="img/backb.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:right;">
                </div>
            </div>
            <!-- img done -->
            <p class="postHeaderfrst" style="padding:5px; margin:5px; font-size:16.5px; font-weight:normal;" id="">${data.heading}</p>
            <div style="width:100%; height:35px;">
                <div style="float:left; margin:5px;"><img id="${ids.likeId}" src="img/like.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.likedBy}" style="font-size:11px; color:darkorange;">${data.likedBy.length}</i> </div>
                <div style="float:left; margin:5px;"><img id="${ids.openCom}" src="img/comment.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.comntLen}" style="font-size:11px; color:darkorange;">${data.comments.length}</i> </div>
                <div style="float:left; margin:5px;"><img id="${ids.readId}" src="img/readen.png" alt="" width="20px" height="20px" style="cursor:pointer; display:none;">
                <i id="${ids.readBy}" style="font-size:11px; color:darkorange; display:none;">${data.reads.length}</i> </div>
                <img id="${ids.shrPst}" src="img/share.png" alt="" width="20px" height="20px" style="margin:5px; float:right; margin-right:10px; cursor:pointer;">
                <img id="${ids.tagedId}" src="img/frnds.png" alt="" width="20px" height="15px" style="margin:5px; margin-top:7.5px; margin-top:7.5px; float:right; cursor:pointer; display:none;">
            </div>
            <!-- post body area bellow -->
            <div class="postBodyCon" id="${ids.bodyId}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                <div style="width:100%; height:170px; overflow-y:auto;">
                    <p class="postBodtxt" style="margin:5px; font-size:18px; font-weight:normal; white-space: pre;">${data.body}</p>
                </div>
                <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="${ids.closeRdId}" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <img src="img/up.png" width="20px" height="10px">
                    </p>
                </div>
            </div>
            <!-- comment area bellow -->
            <div class="postBodyCon" id="${ids.comBod}" style="width:98%; margin:auto; height:290px; border-radius:5px; padding-bottom:5px; display:none;">
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
            <!-- frnds taged -->
            <div class="postBodyCon" id="${ids.tagedBod}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                <div style="width:100%; height:170px; overflow-y:auto;">
                    <span id="${ids.tagedFlw}"></span>
                </div>
                <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="${ids.closeTag}" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <img src="img/up.png" width="20px" height="10px">
                    </p>
                </div>
            </div>
            <!-- share content area -->
            <div class="postBodyCon" id="${ids.shrPstBd}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <input id="${ids.shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:85%; height:80%; margin:1.5px; border:none; border-radius:7.5px; color:grey;" class="srchCon_tg">
                        <img src="img/searcheda.png" width="15px" height="15px" style="float:right; margin:2.5px;">
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
            <!-- author cont area -->
            <div style="width:100%; display:none;" class="${ids.autSrcs}">
                <p style="padding:3px; margin:0px; font-size:12px; color:silver;" id=""><span id="${ids.autCats}"></span> <strong>-</strong> <i style="font-size:10px;" id="${ids.autLoc}"></i> </p>
                <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
                <div style="height:20px;" id="${ids.infoSrc}">
                    <p class="postDatefrst" style="font-size:10px; margin:0px; padding:5px;"> Source : <a href="${data.source_page}"> <i class="postDatefrst" style="font-size:11.5px;">${data.source}</i> </a></p>
                </div>
            </div>
            <div style="height:10px;"></div>
        </div>
        `;
    }

    // read post body function
    const readPost = (data, udata, readId, readBy, bodyId, comBod) => {
        if (data.body !== '') {
            $(`#${readId}`).css('display', 'inline');
            let readbtn = $(`#${readId}`);
            var chkr = 0;
            readbtn.css('display:block;');
            if (data.reads.length > 0) {
                $(`#${readBy}`).css('display', 'inline');
                for (let z = 0; z < data.reads.length; z++) {
                    if (data.reads[z].user == udata._id) {
                        chkr++;
                        $(`#${readId}`).attr('src', 'img/read.png');
                    }                    
                }
            }
            if (chkr == 0) {
                $(`#${readId}`).attr('src', 'img/readen.png');
            }
            readbtn.click(function() {
                $(`#${comBod}`).slideUp();
                $(`#${bodyId}`).slideDown();
                $(`#${readId}`).attr('src', 'img/read.png');
                var cnt = 0;
                for (let i = 0; i < data.reads.length; i++) {
                    if (data.reads[i].user == udata._id) {
                        cnt++;
                    }
                }
                if (cnt == 0) {
                    fetch(`/post/AddReadBy/${data._id}`, { method: 'put', body: JSON.stringify({ user: udata._id, date: [year, day, month, hour, minute, secnds] }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                        return response.json();
                    }).then((deldata)=>{
                        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                            return response.json();
                        }).then((spec)=>{
                            $(`#${readId}`).attr('src', 'img/read.png');
                            for (let i = 0; i < spec.length; i++) {
                                if (spec[i]._id == data._id) {
                                    $(`#${readBy}`).text(spec[i].reads.length);
                                }                                
                            }
                        });
                    });
                }
            });
        } else {
            $(`#${readId}`).css('display', 'none');
        }
    };

    // comment functionaltes section
    //----------------------------------------
    // comment bodies
    const comBodLyt = (coms, realN, cids, slc, dispMre) => { 
        var path = ''; var clas = '';
        if (realN.profile_pic == 'none') {
            path = 'img/profb.png';
            clas = '';
        }else {
            path = `${realN.profile_pic.path}`;
            clas = `${realN.profile_pic.class}`;
        }
    return  `
    <div id="${cids.comBodId}" style="width:100%;">
        <div class="commentBodySec" style="width:65%; margin:5px; box-shadow:0px 0px 5px -2px silver; border-radius:5px;">
            <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:#f9f9f9; border-bottom:solid 0.8px #f0f0f0;">
                <div class="${clas}" style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="font-size:12px; margin: 0px; padding:2px; float: left; color:grey;">${realN.user_name}</p>
                <p style="font-size:10px; margin: 0px; padding:2px; float: right; color:silver;" id="${cids.dateFlwCom}"></p>
            </div>
            <div class="" style="width:100%; background-color:white;">
                <p class="cmntShrt" style="font-size:15.5px; color:grey; margin: 0px; padding:1px; white-space: pre;"><span id="${cids.cmntSlc}">${slc}</span><span id="${cids.mreCom}" style="color:silver; display:${dispMre}; font-size:10px; cursor:pointer;">...more</span></p>
            </div>
            <div style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: white; height:20px;">
                <!--<p style="float:left; color:skyblue; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;">reply</p>-->
                <span style="float: right; color: orange; margin: 0px; padding: 2.5px; cursor: pointer;" id="${cids.delId}"><img src="img/can.png" width="9px" height="9px"></spa>
            </div>
        </div>
    </div>
    `};
    const comBodDrk = (coms, realN, cids, slc, dispMre) => { 
        var path = ''; var clas = '';
        if (realN.profile_pic == 'none') {
            path = 'img/profb.png';
            clas = '';
        }else {
            path = `${realN.profile_pic.path}`;
            clas = `${realN.profile_pic.class}`;
        }
    return `
    <div id="${cids.comBodId}" style="width:100%;">
        <div class="commentBodySec" style="width:65%; margin:5px; box-shadow:0px 0px 20px -10px black; border-radius:5px;">
            <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:#1a1a1a;">
                <div class="${clas}" style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="font-size:12px; margin: 0px; padding:2px; float: left; color:silver;">${realN.user_name}</p>
                <p style="font-size:10px; margin: 0px; padding:2px; float: right; color:grey;" id="${cids.dateFlwCom}"></p>
            </div>
            <div class="" style="width:100%; background-color:#262626;">
                <p class="cmntShrt" style="font-size:15.5px; color:white; margin: 0px; padding:1px; white-space: pre;"><span id="${cids.cmntSlc}">${slc}</span><span id="${cids.mreCom}" style="color:grey; display:${dispMre}; font-size:10px; cursor:pointer;">...more</span></p>
            </div>
            <div style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: #262626; height:20px;">
                <!--<p style="float:left; color:skyblue; font-size: 10px; margin: 0px; padding: 1px; cursor: pointer;">reply</p>-->
                <span style="float: right;color: red; margin: 0px; padding: 2.5px; cursor: pointer;" id="${cids.delId}"><img src="img/can.png" width="9px" height="9px"></spa>
            </div>
        </div>
    </div>
    `};
    // refresh comment length and img
    const rfrshComs = (data, udata, openCom, comntLen) => {
        fetch( `/post/comments/${data._id}`, { method: 'get' }).then((responce)=>{
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
        fetch( `/post/comments/${data._id}`, { method: 'get' }).then((responce)=>{
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

        // load more comment-len
        const mreCom = (data, coms, curnS, cmntSlc, mreCom) => {
            if (coms.comment.length < curnS || coms.comment.length == curnS) {
                $(`#${mreCom}`).css('display', 'none');
            }
            if (coms.comment.length > curnS) {
                $(`#${mreCom}`).css('display', 'inline');
            }
            $(`#${mreCom}`).click(()=>{
                curnS += 100;
                var slc1 = coms.comment;
                var slc = slc1.slice(0, curnS);
                if (slc.length > slc1.length || slc.length == slc1.length) {
                    $(`#${mreCom}`).css('display', 'none');
                }
                $(`#${cmntSlc}`).text(`${slc}`);
            });
        };

        // del com func
        const delCom = (coms, delId, comBodId) => {
            const delBtn = $(`#${delId}`);
            delBtn.click(function() {
                fetch(`/post/remComment/${data._id}`, { method: 'put', body: JSON.stringify({ comments: coms }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
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
                dateFlwCom: 'dateFlwCom_' + len,
                cmntSlc: 'cmntSlc_' + len,
                mreCom: 'mreCom_' + len
            }
        };
        const displayComs = (coms, len) => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                const cids = comsIds(len);
                var realN = '';
                fetch(`/post/searchUsers`, { method: 'post', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: coms.user }) }).then((response)=>{
                    return response.json();
                }).then((cdata)=>{
                    if (cdata) {
                        var curnS = 0;
                        if(mode === 'light') {
                            if (coms.comment.length>50) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                curnS = 100;
                                var dispMre = 'inline';
                                $(`#${comFlow}`).prepend(comBodLyt(coms, cdata, cids, slc, dispMre));
                            }else {
                                var slc = coms.comment;
                                curnS = slc.length;
                                var dispMre = 'none';
                                $(`#${comFlow}`).prepend(comBodLyt(coms, cdata, cids, slc, dispMre));
                            }
                        }else {
                            if (coms.comment.length>50) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                curnS = 100;
                                var dispMre = 'inline';
                                $(`#${comFlow}`).prepend(comBodDrk(coms, cdata, cids, slc, dispMre));
                            }else {
                                var slc = coms.comment;
                                curnS = slc.length;
                                var dispMre = 'none';
                                $(`#${comFlow}`).prepend(comBodDrk(coms, cdata, cids, slc, dispMre));
                            }
                        }
                        smartDate(coms, cids.dateFlwCom);
                        delCom(coms, cids.delId, cids.comBodId);
                        dispRem(data, coms, cids.delId, cids.comBodId);
                        mreCom(data, coms, curnS, cids.cmntSlc, cids.mreCom);
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
                    fetch(`/post/comment/${data._id}`, { method: 'put', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({
                         user: udata._id, comment: comInput.val(), date: [year, day, month, hour, minute, secnds], id: dif
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
    
    // like post functionalities
    //------------------------------
    // check if liked function
    const likedImg = (data, udata, likeId, likedBy) => {
        for (let i = 0; i < data.likedBy.length; i++) { 
            if (data.likedBy[i].user == udata._id) {
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
    // add/rem like && coms contents to noti
    const likeNoti = (data, udata, act, dateNow) => {
        if (act !== '' && data.user !== udata._id) {
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{ 
                if (users.length > 0) {
                    for (let i = 0; i < users.length; i++) {
                        if (data.user == users[i]._id) {
                            sendUser(users[i]);
                        }
                    }
                }
                
            });

            const sendUser = (user) => {
                fetch('/notifications/sendNotiUser', { method: 'post', body: JSON.stringify({
                    user: user._id 
                }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                    if (sent) {
                        pusherNot();
                    }
                });
            };
            const pusherNot = () => {
                // LIKES
                // add like
                if (act == 'like') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'like_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            
                        }
                    });
                }
                // remove lie
                if (act == 'unlike') {
                    fetch('/notifications/remNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'like_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
        
                        }
                    });
                }

                // COMMENTS
                // add comment
                if (act == 'coment') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'comment_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            
                        }
                    });
                }
                // remove comment
                if (act == 'del-coment') {
                    fetch('/notifications/remNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'comment_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
        
                        }
                    });
                }

                // TAG
                if (act == 'tag') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'tag_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            
                        }
                    });
                }

            };

        }

    };
    // tag noti
    const tagNoti = (user, data, udata, act, dateNow) => {

        if (act == 'shr' && user.user_name !== udata.user_name) {

            fetch('/notifications/sendNotiUser', { method: 'post', body: JSON.stringify({
                user: user._id 
            }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                if (sent) {
                    tag();
                }
            });

            /* get authors
            const getAut = () => {
                fetch('/getAuthors', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((auts)=>{ 
                    for (let z = 0; z < auts.length; z++) {
                        alert(auts[z]);
                    }
                });
            };*/

            const tag = () => {
                
                // TAG
                if (act == 'shr') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'shr_post',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            alert('shared!');
                        }
                    });
                }

            };

        }

    };
    // like post function
    const getPInfo = (data, likedBy) => {
        fetch( `/post/${data._id}`, { method: 'get' }).then((responce)=>{
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
            fetch( `/post/${data._id}`, { method: 'get' }).then((responce)=>{
                return responce.json()
            }).then((accData)=>{
                var imply = '';
                var act = '';
                var dateNow = [year, day, month, hour, minute, secnds];
                if (accData.length > 0) {
                    for (let i = 0; i < accData.length; i++) {
                        if (accData[i].user == udata._id) {
                            imply = 'liked';
                            fetch(`/post/unlike/${data._id}`, { method: 'put', body: JSON.stringify({ likedBy: {user: udata._id} }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                                return response.json();
                            }).then((deldata)=>{
                                if (deldata) {
                                    alertbtn.attr('src', 'img/like.png');
                                    act = 'unlike';
                                    getPInfo(data, likedBy);
                                    if (data.type == 'User') {
                                        likeNoti(data, udata, act, dateNow);
                                    }
                                    /*if (data.likedBy.length < 1) {
                                        $(`#${likedBy}`).css('display', 'none');
                                    }*/
                                }
                            });
                        }
                    }
                }else {
                    imply = 'liked';
                    fetch(`/post/${data._id}`, {
                        method : "put",
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body : JSON.stringify({ likedBy: {user: udata._id, date: [year, day, month, hour, minute, secnds]} })
                    }).then((responce) => {
                        return responce.json();
                    }).then((LikeData)=>{
                        if (LikeData.ok === 1) {
                            $(`#${likeId}`).attr('src', 'img/liked.png');
                            act = 'like';
                            getPInfo(data, likedBy);
                            if (data.type == 'User') {
                                likeNoti(data, udata, act, dateNow);
                            }
                        }
                    });
                }
                if (imply == '') {
                    fetch(`/post/${data._id}`, {
                        method : "put",
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body : JSON.stringify({ likedBy: {user: udata._id, date: [year, day, month, hour, minute, secnds]} })
                    }).then((responce) => {
                        return responce.json();
                    }).then((LikeData)=>{
                        if (LikeData.ok === 1) {
                            $(`#${likeId}`).attr('src', 'img/liked.png');
                            act = 'like';
                            getPInfo(data, likedBy);
                            if (data.type == 'User') {
                                likeNoti(data, udata, act, dateNow);
                            }
                        }
                    });
                }
            });
            /**/
        });
    };

    // close-read btn function
    const CloseRead = (data, closeRdId, bodyId) => {
        let closbtn = $(`#${closeRdId}`);
        closbtn.click(function() {
            $(`#${bodyId}`).slideUp();
        });
    };

    // close tag body
    const openTagd = (data, tagedId, tagedBod, tagedFlw, closeTag) => {
        let openBtn = $(`#${tagedId}`);
        let closeBtn = $(`#${closeTag}`);
        if (data.tagged.length > 0) {
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                var genUsrr = '';
                if (users) {
                    $(`#${tagedId}`).css('display', 'block');
                    for (let z = 0; z < data.tagged.length; z++) {
                        var user = ''; var usr = ''; var genUsr = '';
                        for (let i = 0; i < users.length; i++) {
                            if (data.tagged[z] == users[i]._id) {
                                genUsrr = users[i]
                                usr = users[i].user_name;
                            }
                        }
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
                        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                            if(mode === 'light') {
                                $('.checkTagBody2').css('border', 'solid 1px #dddddd');
                                $('.checkTagBody2').css('background-color', 'white');
                            }else {
                                $('.checkTagBody2').css('border', 'solid 1px #404040');
                                $('.checkTagBody2').css('background-color', '#1a1a1a');
                            }
                        });
                        $(`#${tagedFlw}`).prepend(`
                            <div class="checkTagBody2" id="" style="width:95%; margin:auto; height:35px; border-radius:5px; margin-top:10px;">
                                <div style="width:30%; height:100%; float:left;">
                                    <div style="width:25px; height:25px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
                                </div>
                                <div style="width:50%; height:100%; float:left;">
                                    <a class="postDatefrst" style="text-decoration:none;" href="/${user}"><p style="padding:2.5px; margin:5px; font-size:12px;">${user}</p></a>
                                </div>
                                <div style="width:20%; height:100%; float:right;">
                                    
                                </div>
                            </div>
                        `);
                        checkMode();
                    }
                
                }
                openBtn.click(function() {
                    $('.postBodyCon, .bodyComNoti').slideUp();
                    $(`#${tagedBod}`).slideDown();
                });
                closeBtn.click(function() {
                    $(`#${tagedBod}`).slideUp();
                });

            });
        }else {
            $(`#${tagedId}`).css('display', 'none');
        }
    };
    
    const shrBd = (user, path, clas, ids) => {
        return `
        <div class="shrPstBod" id="${ids.shrPstBodyId}" style="width:95%; margin:auto; height:35px; border-radius:5px; margin-top:10px;">
            <div style="width:30%; height:100%; float:left;">
                <div class="${clas}" style="width:25px; height:25px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:50%; height:100%; float:left;">
                <a style="text-decoration:none;"><p class="postDatefrst" style="padding:2.5px; margin:5px; font-size:12px;">${user}</p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p style="text-align:center; margin:2.5px;">
                    <img id="${ids.shrPstSndBtn}" src="img/send.png" width="20px" height:="20px" style="margin:2.5px; margin-top:5px; cursor:pointer; display:none;">
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
            $('.postBodyCon, .bodyComNoti').slideUp();
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
            var path = ''; var clas = '';
            if (genUsrr.profile_pic == 'none') {
                path = 'img/profb.png';
                clas = '';
            }else {
                path = `${genUsrr.profile_pic.path}`;
                clas = `${genUsrr.profile_pic.clas}`;
            }
            const ids = createShrIds(genUsrr._id);
            $(`#${shrPstFlw}`).prepend(shrBd(user, path, clas, ids));
            shrFuncs(user, genUsrr, ids.shrPstSndBtn, ids.shrPstRtrnBtn);
            if (udata.user_name == usr) {
                $(`#${ids.shrPstBodyId}`).remove();
            }
            checkMode();
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

    // post edt config
    const postPop = (data, udata, openPopId, popBodId, clsePopId, reprtId, promId, edtPost, hidPMCId, delPMCId) => {
        const openBtn = $(`.${openPopId}`);
        const clseBtn = $(`#${clsePopId}`);

        if (udata._id == data.user) {
            $(`#${reprtId}`).css('display', 'none');
            $(`#${promId}, #${edtPost}, #${hidPMCId}, #${delPMCId}`).css('display', 'block');
        } else {
            $(`#${reprtId}`).css('display', 'block');
            $(`#${promId}, #${edtPost}, #${hidPMCId}, #${delPMCId}`).css('display', 'none');
        }

        //open
        $(openBtn).click(()=>{
            $(`#${popBodId}`).slideDown();
        });
        //close
        $(clseBtn).click(()=>{
            $(`#${popBodId}`).slideUp();
        })
    };

    // delete post funcs
    const deletePost = (data, delPMCId, delPostId, delPConId, yesDelPId, noDelPId) => {
        const opnBtn = $(`#${delPostId}`);
        const clseBtn = $(`#${noDelPId}`);
        const deletePbtn = $(`#${yesDelPId}`);

        // open btn
        opnBtn.click(()=>{
            $(`#${delPMCId}`).slideUp();
            $(`#${delPConId}`).slideDown();
        });
        // clse btn
        clseBtn.click(()=>{
            $(`#${delPConId}`).slideUp();
            $(`#${delPMCId}`).slideDown();
        });
        // delete post method
        deletePbtn.click(()=>{
            fetch(`/post/delete/${data._id}`, {
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

    // HIDE POST FUNCS
    //------------------
    // hide post
    const hidePost = (data, hidPMCId, hidPostId, tryHid, hidPConId, askHid, yesHidPId, noHidPId) => {
        const yesBtn = $(`#${yesHidPId}`);
        if (data.hidden == 'No') {
            $(`#${tryHid}`).text('Hide');
            $(`#${askHid}`).text('hide post');
            yesBtn.click(()=>{
                fetch(`/post/hide/${data._id}`, {
                    method : "put",
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({ hidden: 'Yes' })
                }).then((responce) => {
                    return responce.json();
                }).then((LikeData)=>{
                    profType();
                });
            });

        } else {
            $(`#${tryHid}`).text('Un-hide');
            $(`#${askHid}`).text('un-hide post');
            yesBtn.click(()=>{
                fetch(`/post/hide/${data._id}`, {
                    method : "put",
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({ hidden: 'No' })
                }).then((responce) => {
                    return responce.json();
                }).then((LikeData)=>{
                    profType();
                });
            });
        }
        const opnBtn = $(`#${hidPostId}`);
        const clseBtn = $(`#${noHidPId}`);

        // open btn
        opnBtn.click(()=>{
            $(`#${hidPMCId}`).slideUp();
            $(`#${hidPConId}`).slideDown();
        });
        // clse btn
        clseBtn.click(()=>{
            $(`#${hidPConId}`).slideUp();
            $(`#${hidPMCId}`).slideDown();
        });
    };

    // promotions
    const promFunc = (data, promId) => {
        fetch('/ads/checkusers', { method: 'get' }).then((responce)=>{
             return responce.json();
        }).then((data2)=>{
            if (data2.length < 10000) {
                $(`#${promId}`).css('display', 'none');
            }else {
                $(`#${promId}`).css('display', 'block');
            }
        });
    };

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
            var con = 'Abusive content'; 
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
                body: JSON.stringify({ content: con, type: 'Journal', from: udata._id, by: nme, journal: data._id, date: [year, day, month, hour, minute]  }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if (data) {
                    $(`#${repConId}`).slideUp();
                    $(`#${reprtId}`).slideDown();
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

    // edt jrn
    const editJrn = (data, udata, edtPost) => {

        $(`#${edtPost}`).click(()=>{
            initEdt()
        });

        const edtBd = (ids) => {
            var title = ''; var height = ''; var place = '';
            if (data.content_type == 'usr_aut_book') {
                title = 'Book'; height = '450px'; place = 'edit book title';
            } else {
                title = 'Jounral'; height = '450px'; place = 'edit jounral';
            }
            return `
            <div class="row">
                <div id="${ids.edtBodId}" class="col-lg-4 col-xs-12 edt_jrn_alrt" style="height:${height}; position:fixed; z-index:4; display:none;">
                    <div id="" class="posterClosecon_edt" style="width:100%; height:30px; float:; margin-bottom:15px;">
                        <p style="margin:5px; color:orange; float:left;"> Edit ${title} </p>
                        <span style="float:right; margin:5px; color:red; cursor:pointer;" id="${ids.edtClsId}"><img src="img/can.png" width="14px" height="14px"></span>
                    </div>
                    <div style="width:100%; height:360px; overflow-y:auto;" id="">
                        <br>
                        <div class="postBodyCon row" id="${ids.binEdtBod}" style="width:98%; margin:auto; height:280px; border-radius:5px; padding-bottom:5px; overflow-y:auto; display:none;">
                            <br>
                            <spa id="${ids.drpBinEdt}"></span>
                            <br>
                        </div>
                        <input maxlength="200" class="srchCon postDatefrst" id="${ids.headEdt}" style="border:none; width:90%; margin:10px; background-color:transparent;" placeholder="${place}" />
                        <textarea maxlength="3000" class="commentInput postDatefrst" id="${ids.bodyEdt}" style="height:60px; margin:10px; width:90%; border-radius:5px; display:none;" placeholder="body"></textarea>
                        <br>
                    </div>
                    <div style="height:40px; width:100%; border-top:solid 1px orange;">
                        <p class="DoneOne postDatefrst"" style="text-align:center; margin:8px;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:darkorange;" id="${ids.donEdtn}">done</button> </p>
                    </div>
                </div>
            </div>
            `
        
        }
        // FUNCS
        // -----
        // cls func
        const clsEdt = (edtClsId, edtBodId) => {
            $(`#${edtClsId}`).click(()=>{
                $(`#${edtBodId}`).remove();
            });
        };
        // body&head
        const headBod = (headEdt, bodyEdt) => {
            $(`#${headEdt}`).val(data.heading);
            if (data.content_type !== 'usr_aut_book') {
                if (data.body.length > 0) {
                    $(`#${bodyEdt}`).css('display', 'block');
                    $(`#${bodyEdt}`).val(data.body);
                }
            } else {
                
            }
        };
        // drp binaries
        var imgArr = []; var vidAr = '';
        const drpBins = (drpBinEdt, binEdtBod) => {
            if (data.content_type !== 'usr_aut_book') {
                if (data.vid != '' || data.img.length > 0) {
                    $(`#${binEdtBod}`).css('display', 'block');
                }
                if (data.img.length > 0) {
                    for (let i = 0; i < data.img.length; i++) {
                        imgArr[i] = data.img[i];                  
                    }
                    const appCurImg = () => {
                        $('.img_edt_hangd').remove();
                        if (imgArr.length > 0) {
                            for (let i = 0; i < imgArr.length; i++) {
                                const revBinImg = (img) => {
                                    return `
                                        <div class="col-md-6 col-xs-6 img_edt_hangd">
                                            <div class="${img.class}" style="width:100%; height:200px; background-image:url(${img.path}); background-size:100% 100%; border-radius:10px; box-shadow:0px 0px 10px -1px rgba(0, 0, 0, 0.3); margin-bottom:10px;">
                                                <img src="img/img2.png" width="28px" height="20px" style="opacity:0.8; float:left; margin:5px;">
                                                <img src="img/del.png" width="20px" height="30px" style="float:right; margin:5px; cursor:pointer;" id="delCurImg_${i}">
                                            </div>
                                        </div>
                                    `
                                }
                                $(`#${drpBinEdt}`).prepend(revBinImg(imgArr[i]));
                                // funcs
                                $(`#delCurImg_${i}`).click(()=>{
                                    imgArr.splice(i, 1);
                                    appCurImg();
                                });
                            }
                        }else {
                            $(`#${binEdtBod}`).slideUp();
                        }
                    };
                    appCurImg();
                }
                if (data.vid != '') {
                    vidAr = data.vid;
                    const appCurVid = () => {
                        $('.vid_edt_hangd').remove();
                        if (vidAr != '') {
                            const revBinVid = (vid) => {
                                return `
                                    <div class="col-md-6 col-xs-6 vid_edt_hangd">
                                        <div style="width:100%; height:200px; border-radius:10px; box-shadow:0px 0px 15px 5px #1a1a1a; margin-bottom:10px;">
                                            <video class="${vid.class}" src="${vid.path}" style="width:100%; height:160px; border-radius:10px;"></video>
                                            <img src="img/playn.png" width="20px" height="20px" style="margin:5px; float:left;" id="">
                                            <img src="img/del.png" width="20px" height="30px" style="margin:2.5px; cursor:pointer; float:right;" id="delCurVid_${data._id}">
                                        </div>
                                    </div>
                                `
                            }
                            $(`#${drpBinEdt}`).prepend(revBinVid(vidAr));
                            // funcs
                            $(`#delCurVid_${data._id}`).click(()=>{
                                vidAr = '';
                                appCurVid();
                            });
                        }else {
                            $(`#${binEdtBod}`).slideUp();
                        }
                    };
                    appCurVid();
                }
            }
        };
        // done
        const doneEdtn = (donEdtn, headEdt, bodyEdt) => {
            $(`#${donEdtn}`).click(()=>{
                if ($(`#${headEdt}`).val() !== '') {
                    if (data.content_type == 'usr_aut_book') {
                        fetch(`/post/updateBk/${data._id}`, { method: 'post', body: JSON.stringify({ title: $(`#${headEdt}`).val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((data) => {
                            if (data) {
                                location.reload();
                            }
                        });
                    } else {
                        fetch(`/post/updateJrn/${data._id}`, { method: 'post', body: JSON.stringify({ heading: $(`#${headEdt}`).val(), body: $(`#${bodyEdt}`).val(), img: imgArr, vid: vidAr }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                            return response.json();
                        }).then((data) => {
                            if (data) {
                                location.reload();
                            }
                        });
                    }
                }else {
                    alert('a heading/title must be included for a Journal!');
                }
            })
        }
        // crtids
        const crtEdtIds = (id) => {
            return {
                edtBodId: 'edtBodId_' + id,
                // cls
                edtClsId: 'edtClsId_' + id,
                // done id
                donEdtn: 'donEdtn_' + id,
                // head&bod
                headEdt: 'headEdt_' + id,
                bodyEdt: 'bodyEdt_' + id,
                // binary sec
                binEdtBod: 'binEdtBod_' + id,
                drpBinEdt: 'drpBinEdt_' + id,
                
            }
        };
        // init
        const initEdt = () => {
            var ids = crtEdtIds(data._id);
            $('#hspan').before(edtBd(ids));
            checkMode();
            $(`#${ids.edtBodId}`).fadeIn();
            var x = window.matchMedia("(min-width: 600px)")
            if (x.matches) {
                $(`#${ids.edtBodId}`).css('margin-left', '10px');
            }
            clsEdt(ids.edtClsId, ids.edtBodId);
            // check body and head
            headBod(ids.headEdt, ids.bodyEdt);
            // drpBin
            drpBins(ids.drpBinEdt, ids.binEdtBod);
            // done
            doneEdtn(ids.donEdtn, ids.headEdt, ids.bodyEdt);
        }

    };

    // user authentication
    const usrAuthent = (data, usrAut) => {
        $(`.${usrAut}`).css('display', 'block');
    };

    /**
     * AUTHOR AUTHENTICATIONS
     */
    const authorAut = (data, udata, tpe, autInfo, autSrcs, ids) => {
        $(`.${autSrcs}`).css('display', 'block');
        if (tpe == 'adm aut') {
            $(`#${autInfo}`).text('vyral author');
            for (let i = 0; i < data.categories.length; i++) {
                $(`#${ids.autCats}`).append(`${data.categories[i]}, `);
            }
            $(`#${ids.autCats}`).append(data.country);
            $(`#${ids.autLoc}`).text(data.location);
        } else {
            fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                return response.json();
            }).then((alldata)=>{
                var thisU = '';
                for (let o = 0; o < alldata.length; o++) {
                    if (alldata[o]._id == data.user) {
                        thisU = alldata[o];
                    }
                }
                $(`#${autInfo}`).html(`user author <strong>.</strong> <a href="/${thisU.user_name}" style="text-decoration:none; color:grey;">${thisU.user_name}</a>`);
                for (let i = 0; i < thisU.user_type.categories.length; i++) {
                    $(`#${ids.autCats}`).append(`${thisU.user_type.categories[i]}, `);
                }
                $(`#${ids.autLoc}`).text(thisU.country);
                $(`#${ids.infoSrc}`).remove();
            });
        }
    };

    // cart authenti
    const adptCart = (data, adptCart) => {
        if (data.type == 'Author') {
            $(`#${adptCart}`).addClass(data.cartegory);
        }
    };

    const adptLocale = (data, adptCart) => {
        if (data.type == 'Author') {
            $(`#${adptCart}`).addClass(data.location);
        }
    };
    
    // build ids for functionalities
    const buildIDS = (data, id) => {
        return {
            // smart date func
            dateFlow: 'dateFlow_' + data._id + id, 
            dateFlowAut: 'dateFlowAut_' + data._id + id, 
            // like func
            likeId : 'like_' + data._id + id,
            likedBy: 'liked_'+ data._id + id,
            // read body func
            readId : 'read_' + data._id + id,
            readBy : 'readBy_' + data._id + id,
            bodyId : 'body_' + data._id + id,
            closeRdId : 'closeRead_'+ data._id + id,
            // comnt func
            openCom: 'openCom_' + data._id + id,
            comBod: 'comBod_' + data._id + id,
            closeCom: 'closeCom_' + data._id + id,
            comIn: 'comIn_' + data._id + id,
            comBt: 'comBtn_' + data._id + id,
            comFlow: 'comFlow_' + data._id + id,
            cmntBy: 'cmntBy_' + data._id + id,
            comntLen: 'cmntLen_' + data._id + id,
            // tag func
            tagedId: 'tagedId_' + data._id + id,
            tagedBod: 'tagedBod_' + data._id + id,
            closeTag: 'closeTag_' + data._id + id,
            tagedFlw: 'tagedFlw_' + data._id + id,
            // share pst funcs
            shrPst: 'shrPst_' + data._id + id,
            shrPstBd: 'shrPstBd_' + data._id + id,
            shrPstFlw: 'shrPstFlw_' + data._id + id,
            shrPstCls: 'shrPstCls_' + data._id + id,
            shrPstSrch: 'shrPstSrch_' + data._id + id,
            // img func
            ImgId: 'ImgId_' + data._id + id,
            imSldId: 'imgSld_' + data._id + id,
            rightId: 'rghId_' + data._id + id,
            leftId: 'lftId_' + data._id + id,
            imgNow: 'imgNow_' + data._id + id,
            imgAll: 'imgAll_' + data._id + id,
            // video func
            vidId: 'vidId_' + data._id + id,
            vidCntrlDiv: 'vidCntrlDiv_' + data._id + id,
            vidPlay: 'vidPlay_' + data._id + id,
            vidPause: 'vidPause_' + data._id + id,
            vidStop: 'vidStop_' + data._id + id,
            vidMute: 'vidMute_' + data._id + id,
            vidCrntT: 'vidCrntT_' + data._id + id,
            vidOrgT: 'vidOrgT_' + data._id + id,
            // post pop up funcs
            openPopId: 'openPop_' + data._id + id,
            popBodId: 'popBod_' + data._id + id,
            clsePopId: 'clsePop_' + data._id + id,
            edtPost: 'edtPost_' + data._id + id,
            // delete post funcs
            delPMCId: 'delPMCId_' + data._id + id,
            delPostId: 'delPost_' + data._id + id,
            delPConId: 'delPCOn_' + data._id + id,
            yesDelPId: 'yesDelP_' + data._id + id,
            noDelPId: 'noDelP_' + data._id + id,
            // hide post funcs
            hidPMCId: 'hidPMCId_' + data._id + id,
            hidPostId: 'hidPostId_' + data._id + id,
            tryHid: 'tryHid_' + data._id + id,
            hidPConId: 'hidPConId_' + data._id + id,
            askHid: 'askHid_' + data._id + id,
            yesHidPId: 'yesHidPId_' + data._id + id,
            noHidPId: 'noHidPId_' + data._id + id,
            // promote func
            promId: 'promId_' + data._id + id,
            // report post func
            reprtId: 'reprtId_' + data._id + id,
            repConId: 'repConId_' + data._id + id,
            inApRep: 'inApRep_' + data._id + id,
            abusRep: 'abusRep_' + data._id + id,
            clsRep: 'clsRep_' + data._id + id,
            // users auth
            usrAut: 'usrAut_' + data._id + id,
            verIcon: 'verIconJrn_' + data._id + id,
            // author info area
            autSrcs: 'autSrcs_' + data._id + id,
            adptCart: 'adptCart_' + data._id + id,
            autInfo: 'autInfo_'+ data._id + id,
            autCats: 'autCats_'+ data._id + id,
            autLoc: 'autLoc_'+ data._id + id,
            infoSrc: 'infoSrc_'+ data._id + id,
        }
    }

    // display for frnds
    const displayExuser = (data, mydata, udata) => {
        var nTp = 'general';
        let ids = buildIDS(data, nTp);
        if (data.hidden == 'No') {
            $('#dropbox-exj').append(bodyJourn(data, mydata, ids));
        }
        // with/without imgs
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // with a video
        if (data.vid !== '') {
            VidFunc(data, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
        }
        if (mydata.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
        // user autentications
        usrAuthent(data, ids.usrAut);
        // cart authenti
        adptCart(data, ids.adptCart);
        // functionalities
        LikePost(data, udata, ids.likeId, ids.likedBy);
        likedImg(data, udata, ids.likeId, ids.likedBy)
        readPost(data, udata, ids.readId, ids.readBy, ids.bodyId, ids.comBod);
        CloseRead(data, ids.closeRdId, ids.bodyId);
        // comments functionalities
        commentSec(data, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
        commentImg(data, udata, ids.openCom, ids.comntLen);
        closeComment(data, ids.closeCom, ids.comBod);
        pushComment(data, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
        // tag funcs
        openTagd(data, ids.tagedId, ids.tagedBod, ids.tagedFlw, ids.closeTag);
        // share funcs
        sharePst(data, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
        // post opt funcs
        postPop(data, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
        deletePost(data, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
        hidePost(data, ids.hidPMCId, ids.hidPostId, ids.tryHid, ids.hidPConId, ids.askHid, ids.yesHidPId, ids.noHidPId);
        promFunc(data, ids.promId);
        // report p
        reportJrn(data, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
        smartDate(data, ids.dateFlow);
    };
    // display for frnds
    const displayPFrnds = (data, tdata, udata, wrt) => {
        var nTp = 'general';
        let ids = buildIDS(data, nTp);
        if (data.hidden == 'No') {
            if (wrt == 'gen') {
                $('#dropbox-index').append(bodyJourn(data, tdata, ids));
            }else {
                $('#dropbox-indexexp').prepend(bodyJourn(data, tdata, ids));
            }
        }
        if (tdata.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
        // with/without imgs
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // with a video
        if (data.vid !== '') {
            VidFunc(data, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
        }
        // user autentications
        usrAuthent(data, ids.usrAut);
        // cart authenti
        adptCart(data, ids.adptCart);
        // functionalities
        LikePost(data, udata, ids.likeId, ids.likedBy);
        likedImg(data, udata, ids.likeId, ids.likedBy)
        readPost(data, udata, ids.readId, ids.readBy, ids.bodyId, ids.comBod);
        CloseRead(data, ids.closeRdId, ids.bodyId);
        // comments functionalities
        commentSec(data, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
        commentImg(data, udata, ids.openCom, ids.comntLen);
        closeComment(data, ids.closeCom, ids.comBod);
        pushComment(data, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
        // tag funcs
        openTagd(data, ids.tagedId, ids.tagedBod, ids.tagedFlw, ids.closeTag);
        // share funcs
        sharePst(data, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
        // post opt funcs
        postPop(data, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
        deletePost(data, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
        hidePost(data, ids.hidPMCId, ids.hidPostId, ids.tryHid, ids.hidPConId, ids.askHid, ids.yesHidPId, ids.noHidPId);
        promFunc(data, ids.promId);
        // report p
        reportJrn(data, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
        smartDate(data, ids.dateFlow);
    };
    // display posts function
    const displayPosts = (data, udata, nTp, drop) => {
        let ids = buildIDS(data, nTp);
        // hidden or not
        if (nTp == "gen") {
            if (data.hidden == 'No') {
                $('#dropbox-jr, #dropbox-index').append(bodyJourn(data, udata, ids));
            } else {
                $('#checknum-hd').css('display', 'none');
                $('#dropbox-hd').append(bodyJourn(data, udata, ids));
            }
        }else {
            if (nTp == 'rdJ_rt') {
                $('#exp_drpMR').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'ascJ_rt') {
                $('#exp_drpMA').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'lkJ_rt') {
                $('#exp_drpML').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'cmtJ_rt') {
                $('#exp_drpMC').append(bodyJourn(data, udata, ids));
            }
            // all in exp
            if (nTp == 'all_exp') {
                $('#dropbox-indexexp').append(bodyJourn(data, udata, ids));
            }
        }
        // with/without imgs
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // with a video
        if (data.vid !== '') {
            VidFunc(data, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
        }
        if (udata.verification == 'on') {
            $(`#${ids.verIcon}`).css('display', 'inline');
        }
        // user autentications
        usrAuthent(data, ids.usrAut);
        // cart authenti
        adptCart(data, ids.adptCart);
        // functionalities
        LikePost(data, udata, ids.likeId, ids.likedBy);
        likedImg(data, udata, ids.likeId, ids.likedBy)
        readPost(data, udata, ids.readId, ids.readBy, ids.bodyId, ids.comBod);
        CloseRead(data, ids.closeRdId, ids.bodyId);
        // comments functionalities
        commentSec(data, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
        commentImg(data, udata, ids.openCom, ids.comntLen);
        closeComment(data, ids.closeCom, ids.comBod);
        pushComment(data, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
        // tag funcs
        openTagd(data, ids.tagedId, ids.tagedBod, ids.tagedFlw, ids.closeTag);
        // share funcs
        sharePst(data, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
        // post opt funcs
        postPop(data, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
        deletePost(data, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
        hidePost(data, ids.hidPMCId, ids.hidPostId, ids.tryHid, ids.hidPConId, ids.askHid, ids.yesHidPId, ids.noHidPId);
        promFunc(data, ids.promId);
        // report p
        reportJrn(data, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
        // edit p
        editJrn(data, udata, ids.edtPost);
        smartDate(data, ids.dateFlow);
    };
    // for authors
    const displayAuthors = (data, udata, nTp) => {
        let ids = buildIDS(data, nTp);
        if (nTp == "gen") {
            if (data.type == 'Author') {
                //$('#dropbox-hd').append(bodyJourn(data, udata, ids));
                $('#dropbox-index').append(bodyJourn(data, udata, ids));
                var tpe = 'adm aut';
                authorAut(data, udata, tpe, ids.autInfo, ids.autSrcs, ids);
            }
            if (data.type == 'User_author') {
                $('#dropbox-index, #dropbox-paut').append(bodyJourn(data, udata, ids));
                var tpe = 'usr aut';
                authorAut(data, udata, tpe, ids.autInfo, ids.autSrcs, ids);
            }
        } else {
            if (nTp == 'rdJ_rt') {
                $('#exp_drpMR').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'ascJ_rt') {
                $('#exp_drpMA').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'lkJ_rt') {
                $('#exp_drpML').append(bodyJourn(data, udata, ids));
            }
            if (nTp == 'cmtJ_rt') {
                $('#exp_drpMC').append(bodyJourn(data, udata, ids));
            }
            // all in exp
            if (nTp == 'all_exp') {
                $('#dropbox-indexexp').append(bodyJourn(data, udata, ids));
            }
        }
        // with/without imgs
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // with a video
        if (data.vid !== '') {
            VidFunc(data, ids.vidId, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
        }
        // cart authenti
        adptCart(data, ids.adptCart);
        adptLocale(data, ids.adptCart);
        // functionalities
        LikePost(data, udata, ids.likeId, ids.likedBy);
        likedImg(data, udata, ids.likeId, ids.likedBy);
        // read
        readPost(data, udata, ids.readId, ids.readBy, ids.bodyId, ids.comBod);
        CloseRead(data, ids.closeRdId, ids.bodyId);
        // comments functionalities
        commentSec(data, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
        commentImg(data, udata, ids.openCom, ids.comntLen);
        closeComment(data, ids.closeCom, ids.comBod);
        pushComment(data, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
        // tag funcs
        openTagd(data, ids.tagedId, ids.tagedBod, ids.tagedFlw, ids.closeTag);
        // share funcs
        sharePst(data, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
        // post opt funcs
        postPop(data, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
        deletePost(data, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
        hidePost(data, ids.hidPMCId, ids.hidPostId, ids.tryHid, ids.hidPConId, ids.askHid, ids.yesHidPId, ids.noHidPId);
        promFunc(data, ids.promId);
        // report p
        reportJrn(data, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
        // edit p
        editJrn(data, udata, ids.edtPost);
        smartDate(data, ids.dateFlowAut);
    };
     // display rev-posts function
     const displayReviews = (data, udata, type) => {
         let ids = buildIDS(data, type);
         $('#container-one').fadeOut();
         // hidden or not
         $('#review-con').fadeIn();
        if (type == 'like_post') {
            $('#revPresNote').text('Journal liked');
            $('#drp-like-tag-rev-bod').fadeIn();
            $('#droprev-lktg').append(bodyJourn(data, udata, ids));
            // with/without imgs
        }
        if (type == 'tag_post') {
            $('#revPresNote').text('tagged to a Journal');
            $('#drp-like-tag-rev-bod').fadeIn();
            $('#droprev-lktg').append(bodyJourn(data, udata, ids));
        }
        if (type == 'shr_post') {
            $('#revPresNote').text('shared to a Journal');
            $('#drp-like-tag-rev-bod').fadeIn();
            $('#droprev-lktg').append(bodyJourn(data, udata, ids));
        }
        if (type == 'comment_post') {
            let cids = comIdsNoti(data);
            $('#revPresNote').text('commented on Journal');
            $('#drp-like-tag-rev-bod').fadeIn();
            $('#droprev-lktg').append(comsBod(udata, cids.drpId, cids.bodyComId));
            $(`#${cids.bodyComId}`).after(`<p style="margin:5px; font-size:13px; color:grey;">journal :</p>`+bodyJourn(data, udata, ids));
                fetch('/review/getCom', { method: 'get' }).then((response)=>{
                    return response.json();
                }).then((com)=>{
                    fetchSpecCom(com, data);
                });
                const fetchSpecCom = (com, data) => {
                    fetch( `/post/comments/${data._id}`, { method: 'get' }).then((responce)=>{
                        return responce.json()
                    }).then((comData)=>{
                        if (comData.length > 0) {
                            for (let i = 0; i < comData.length; i++) {
                                if (comData[i].user == com.user && comData[i].date[0, 1, 2, 3, 4, 5] == com.date[0, 1, 2, 3, 4, 5]) {
                                    pushIt(comData[i]);
                                }
                            }
                        }
                        
                    });
                };
                const pushIt = (com) => {
                    fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                        return response.json();
                    }).then((allUsers)=>{
                        
                        for (let i = 0; i < allUsers.length; i++) {
                            if (allUsers[i]._id == com.user) {
                                dispComs(allUsers[i], com);
                            }
                        }
                        
                    });
                };
                const dispComs = (user, com) => {
                    var str = com.comment;
                    var slc = str.slice(0, 100);
                    var dispMre = 'inline';
                    if(udata.mode == 'light') {
                        $(`#${cids.drpId}`).append(comBodLyt(com, user, cids, slc, dispMre));
                    }else {
                         $(`#${cids.drpId}`).prepend(comBodDrk(com, user, cids, slc, dispMre));
                    }
                };
        }
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        // cart authenti
        adptCart(data, ids.adptCart);
        // user autentications
        usrAuthent(data, ids.usrAut);
        // functionalities
            LikePost(data, udata, ids.likeId, ids.likedBy);
            likedImg(data, udata, ids.likeId, ids.likedBy)
            readPost(data, udata, ids.readId, ids.readBy, ids.bodyId, ids.comBod);
            CloseRead(data, ids.closeRdId, ids.bodyId);
            // comments functionalities
            commentSec(data, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
            commentImg(data, udata, ids.openCom, ids.comntLen);
            closeComment(data, ids.closeCom, ids.comBod);
            pushComment(data, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
            // tag funcs
            openTagd(data, ids.tagedId, ids.tagedBod, ids.tagedFlw, ids.closeTag);
            // share funcs
            sharePst(data, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
            // post opt funcs
            postPop(data, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
            deletePost(data, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
            hidePost(data, ids.hidPMCId, ids.hidPostId, ids.tryHid, ids.hidPConId, ids.askHid, ids.yesHidPId, ids.noHidPId);
            promFunc(data, ids.promId);
            // report p
            reportJrn(data, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // edit p
            editJrn(data, udata, ids.edtPost);
            smartDate(data, ids.dateFlow);
    };

    // books
    // -----
    // book body
    const bookBig = (data, user, udata, ids) => {
        var loc = user.country;
        return `
        <div class="stylePosts" style="width:100%;" id="${ids.adptCart}" class="${loc}">
            <div style="width:100%; height:30px;" class="${ids.autSrcs}">
                <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/authand.png); background-size:100% 100%; margin:5px;"></div>
                <p class="postHeaderfrst" style="float:left; font-size:10px; margin:0px; padding:5px;"> 
                    <span class="postDatefrst" id="${ids.autInfo}"></span>
                </p>
                <img src="img/opt.png" class="${ids.openPopId}" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                <i class="postDatefrst" style="float:right; margin:5px; color:silver; font-size:10px;" id="${ids.dateFlowAut}"></i>
            </div>
            <div class="edtPstBd" id="${ids.popBodId}" style="width:100%; display:none;">
                <div class="edtPstFlw" style="width:100%; height:30px;">
                    <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsePopId}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                </div>
                <!-- delp cons -->
                <div id="${ids.delPMCId}" class="edtPstFlw" style="width:100%; height:35px;">
                    <p class="postDatefrst" id="${ids.delPostId}" style="margin:8px; cursor:pointer;"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete post</p>
                </div>
                <div id="${ids.delPConId}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p class="postDatefrst" style=" text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                    </div>
                    <div style="width:100%; height:30px;">
                        <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                            <p id="${ids.yesDelPId}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                        </div>
                        <div style="width:49%; float:left; height:100%; float:right;">
                            <p class="postDatefrst" id="${ids.noDelPId}" style="text-align:center; margin:5px; cursor:pointer;">Cancel</p>
                        </div>
                    </div>
                </div>
                <!-- edt cons -->
                <div id="${ids.edtPost}" class="edtPstFlw" style="width:100%; height:35px;">
                    <p class="postDatefrst" style="margin:8px; cursor:pointer;"> <img src="img/wada.png" width="12.5px" height="15px" style="margin-right:10px;"> Edit post</p>
                </div>
                <!-- prom cons -->
                <div id="${ids.promId}" class="" style="width:100%; height:35px;">
                    <p style="margin:8px; color:skyblue; cursor:pointer;">Promote</p>
                </div>
                <!-- report cons -->
                <div id="${ids.reprtId}" class="" style="width:100%; height:35px;">
                    <p class="postDatefrst" style="margin:8px; cursor:pointer;"> <img src="img/flag.png" width="15px" height="15px" style="margin-right:10px;"> Report post</p>
                </div>
                <div id="${ids.repConId}" class="areYSPCon" style="width:100%; display:none;">
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.inApRep}"> Inapproriate content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.abusRep}"> Abusive content </p>
                    </div>
                    <div class="areysPP" style="width:100%; height:30px;">
                        <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.clsRep}"> cancel </p>
                    </div>
                </div>
            </div>
            <div style="width:100%;" class="posterClosecon_edt">
                <div style="width:60%; height:215px; float:left;">
                    <div class="${ids.readId}" style="cursor:pointer; box-shadow:0px 0px 15px 5px rgba(0, 0, 0, 0.315); width:150px; height:180px; margin:auto; margin-top:10px; border-radius:5px; background-image:url(${data.cover.path}); background-size:100% 100%;" class="${data.cover.class}"></div>
                </div>
                <div style="width:40%; height:215px; float:right;">
                    <br>
                    <div class="${ids.prevB}" style="width:70px; height:80px; margin:auto; margin-top:10px; background-image:url(img/bookinf.png); background-size:100% 100%; cursor:pointer; opacity:0.75;">
                    </div>
                    <p class="${ids.prevB}" style="text-align:center; margin:3px; padding:3px; cursor:pointer;"><button class="btn btn-default btn-xs" style="background-color:transparent; border:solid 1px silver; color:silver;">preview</button></p>
                </div>
                <p class="postHeaderfrst" style="padding:5px; margin:5px; text-align:center; font-size:18px; font-weight:normal;" id=""><span class="postDatefrst" style="font-size:12px; font-weight:normal;">book - </span> ${data.title}</p>
            </div>
            <div style="width:100%; height:35px;">
                <div style="float:left; margin:5px;"><img id="${ids.likeId}" src="img/like.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.likedBy}" style="font-size:11px; color:darkorange;">${data.likedBy.length}</i> </div>
                <div style="float:left; margin:5px;"><img id="${ids.openCom}" src="img/comment.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.comntLen}" style="font-size:11px; color:darkorange;">${data.comments.length}</i> </div>
                <div style="float:left; margin:5px;"><img id="${ids.readId}" src="img/readen.png" alt="" width="20px" height="20px" style="cursor:pointer;">
                <i id="${ids.readBy}" style="font-size:11px; color:darkorange; display:none;">${data.reads.length}</i> </div>
                <img id="${ids.shrPst}" src="img/share.png" alt="" width="20px" height="20px" style="margin:5px; float:right; margin-right:10px; cursor:pointer;">
            </div>
            <!-- comment area bellow -->
            <div class="postBodyCon" id="${ids.comBod}" style="width:98%; margin:auto; height:290px; border-radius:5px; padding-bottom:5px; display:none;">
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
            <div class="postBodyCon" id="${ids.shrPstBd}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <input id="${ids.shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:1.5px; border:none; border-radius:7.5px; color:grey;" class="srchCon_tg">
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
            <!-- author cont area -->
            <div style="width:100%;" class="${ids.autSrcs}">
                <p style="padding:3px; margin:0px; font-size:12px; color:silver;" id=""><span id="${ids.autCats}"></span> <strong>-</strong> <i style="font-size:10px;" id="${ids.autLoc}"></i> </p>
                <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
                <div style="height:20px;" id="${ids.infoSrc}">
                    <p class="postDatefrst" style="font-size:10px; margin:0px; padding:5px;"> Source : <a href="${data.source_page}"> <i style="font-size:11.5px;">${data.source}</i> </a></p>
                </div>
            </div>
            <div style="height:10px;"></div>
        </div>
        `
    }
    const reedBook = (book, udata, ids) => {

        // preview
        // --------
        const prevCon = (pIds) => {
            return `
            <div class="row">
                <div class="col-xs-12 col-lg-12 prevCons" id="${pIds.bodyI}" style="position:fixed; z-index:5; height:100%; display:none;">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4 col-xs-12">
                            <br>
                            <div class="bookBods" style="width:100%; height:350px; margin-top:-5px; background-color:white; border-radius:7.5px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3);">
                                <div style="width:100%; height:40px;">
                                    <p style="text-align:center; margin:0px; padding:5px;"> <img src="img/can.png" width="15px" height="15px" style="cursor:pointer;" id="${pIds.clsCon}"> </p>
                                </div>
                                <div style="width:100%; height:270px;">
                                    <div class="chptrsCr" style="width:97.5%; height:100%; margin:auto; border-radius:5px;">
                                        <p style="margin:1px; padding:5px; white-space:pre; font-weight:normal; font-size:18px; white-space: pre;" class="postHeaderfrst">${book.read_me}</p>
                                    </div>
                                </div>
                                <div style="width:100%; height:40px;">
                                    <p style="text-align:center; margin:0px; padding:5px; font-size:18px; color:grey;">content information</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4"></div>
                    </div>
                </div>
            </div>
            `
        }
        $(`.${ids.prevB}`).click(()=>{
            var pIds = {
                clsCon: `previewB_clsCon_${book._id}`,
                bodyI: `previewB_bodyI_${book._id}`
            }
            $('#container-one').css('filter', 'blur(5px)');
            $('#dropChat').prepend(prevCon(pIds));
            checkMode();
            $(`#${pIds.bodyI}`).fadeIn();
            // cls
            $(`#${pIds.clsCon}`).click(()=>{
                $('.prevCons').fadeOut();    
                $('#container-one').css('filter', '');
                $('.prevCons').remove();    
            });
        });

        // read funcs
        // ----------
        const readL = (bIds, usr) => {
            return `
            <div class="row">
                <div class="col-lg-12 bookBods" style="height:100%; position:fixed; z-index:5;">
                    <div style="width:100%; height:6%;">
                        <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/authand.png); background-size:100% 100%; margin:5px;"></div>
                        <p class="postDatefrst" style="float:left; margin:0px; padding:5px; font-size:14px;">user author <strong>.</strong> <a href="/${usr.user_name}" style="text-decoration:none;" class="postHeaderfrst">${usr.user_name}</a></p>
                        <p style="float:right; margin:0px; padding:5px;"><img src="img/can.png" width="15px" height="15px" style="cursor:pointer;" id="${bIds.clsB}"></p>
                    </div>
                    <div style="width:100%; height:94%;" class="stylePosts">
                        <div style="width:70%; height:100%; float:left;">
                            <div style="width:100%; height:92%;">
                                <div id="${bIds.cover}" style="width:50%; margin:auto; height:85%; margin-top:15px; border-radius:10px; background-image:url(${book.cover.path}); background-size:100% 100%; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.6);" class="${book.cover.class}"></div>
                                <div id="${bIds.chptrCon}" style="width:80%; margin:auto; height:95%; margin-top:5px; border-radius:10px; display:none; overflow-y:auto;" class="chptrsCr">
                                    <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:18px;"><strong id="${bIds.chptrTtl}"></strong></p>
                                    <p class="postHeaderfrst" id="${bIds.chptrBody}" style="margin:0px; padding:5px; font-size:16.5px; white-space: pre;"></p>
                                </div>
                            </div>
                            <div class="stylePosts" style="width:100%; height:8%;">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:20px; text-align:center;" id="${bIds.chptrN}">${book.title}</p>
                            </div>
                        </div>
                        <div style="width:30%; height:100%; float:right;">
                            <br>
                            <div style="width:50%; margin:auto; height:90%; margin-top:-10px; overflow-y:auto; border-radius:10px;" class="chptrsCr">
                                <div id="${bIds.chptrLC}" style="width:100%; height:100%;">

                                    <div style="width:100%; height:100px; cursor:pointer;" id="${bIds.opnCover}">
                                        <p class="postHeaderfrst" style="text-align:center; font-size:13px; margin:0px; padding:2px;">cover</p>
                                        <div id="${bIds.opnCvrBck}" style="margin:auto; width:65px; height:65px; border-radius:5px; border:solid 0.8px skyblue; cursor:pointer;" class="OpnChptrsCr">
                                            <div style="width:100%; height:100%; filter:blur(1px); background-image:url(${book.cover.path}); background-size:100% 110%; border-radius:5px; cursor:pointer;" class="${book.cover.class}">
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div style="width:100%; height:100px; cursor:pointer;" id="${bIds.readMe}">
                                        <p class="postHeaderfrst" style="text-align:center; font-size:13px; margin:0px; padding:2px;">read me</p>
                                        <div id="${bIds.readMeCon}" style="margin:auto; width:65px; height:65px; border-radius:5px; cursor:pointer;" class="OpnChptrsCr">
                                            <img src="img/bookinf.png" width="50px" height="50px" style="margin-left:7px; margin-top:7px; opacity:0.5;">
                                        </div>
                                    </div>

                                    <span id="${bIds.chptrLst}"></span>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        };
        const readBX = (bIds, usr) => {
            return `
            <div class="row">
                <div class="col-xs-12 col-lg-12 bookBods" style="height:100%; position:fixed; z-index:5;">
                    <div style="width:100%; height:6%;">
                        <div style="float:left; width:18px; height:18px; margin:auto; background-image:url(img/authand.png); background-size:100% 100%; margin:5px; margin-top:8.5px;"></div>
                        <p class="postDatefrst" style="float:left; margin:0px; margin-top:3.5px; padding:5px; font-size:14px;">user author <strong>.</strong> <a href="/${usr.user_name}" style="text-decoration:none;">${usr.user_name}</a></p>
                        <p style="float:right; margin:0px; padding:5px;"><img src="img/can.png" width="15px" height="15px" style="cursor:pointer;" id="${bIds.clsB}"></p>
                    </div>
                    <div style="width:100%; height:7%;" class="stylePosts">
                        <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:20px; text-align:center;" id="${bIds.chptrN}">${book.title}</p>
                    </div>
                    <div style="width:100%; height:69.5%;" class="stylePosts">
                        <div id="${bIds.cover}" style="width:98%; margin:auto; height:85%; margin-top:15px; border-radius:10px; background-image:url(${book.cover.path}); background-size:100% 100%; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.6);" class="${book.cover.class}"></div>
                        <div id="${bIds.chptrCon}" style="width:98%; margin:auto; height:95%; margin-top:5px; border-radius:10px; display:none; overflow-y:auto;" class="chptrsCr">
                            <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:18px;"><strong id="${bIds.chptrTtl}"></strong></p>
                            <p class="postHeaderfrst" id="${bIds.chptrBody}" style="margin:0px; padding:5px; font-size:16.5px; white-space: pre;"></p>
                        </div>
                    </div>
                    <div style="width:100%; height:18.5%;" class="stylePosts">
                        <br>
                        <div style="width:98%; margin:auto; height:110px; margin-top:-10px; overflow-x:auto; border-radius:10px;" class="chptrsCr">
                            <div id="${bIds.chptrLC}" style="width:170px; height:100%;">

                                <div style="width:80px; height:100%; float:left; cursor:pointer;" id="${bIds.opnCover}">
                                    <p class="postDatefrst" style="text-align:center; font-size:13px; margin:0px; padding:2px;">cover</p>
                                    <div id="${bIds.opnCvrBck}" style="margin:auto; width:65px; height:65px; border-radius:5px; border:solid 0.8px skyblue; cursor:pointer;" class="OpnChptrsCr">
                                        <div style="width:100%; height:100%; filter:blur(1px); background-image:url(${book.cover.path}); background-size:100% 110%; border-radius:5px; cursor:pointer;" class="${book.cover.class}">
                                        </div>
                                    </div>
                                </div>
                            
                                <div style="width:80px; height:100%; float:left; cursor:pointer;" id="${bIds.readMe}">
                                    <p class="postDatefrst" style="text-align:center; font-size:13px; margin:0px; padding:2px;">read me</p>
                                    <div id="${bIds.readMeCon}" style="margin:auto; width:65px; height:65px; border-radius:5px; cursor:pointer;" class="OpnChptrsCr">
                                        <img src="img/bookinf.png" width="50px" height="50px" style="margin-left:7px; margin-top:7px; opacity:0.5;">
                                    </div>
                                </div>

                                <span id="${bIds.chptrLst}"></span>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        };
        const bookFuncs = (bIds) => {
            // cls
            $(`#${bIds.clsB}`).click(()=>{
                $(`.bookBods`).fadeOut();
                $(`.bookBods`).remove();
            });
            // chapter/cover/read_me
            var curn = 'c';
            // cover
            $(`#${bIds.opnCover}`).click(()=> {
                curn = 'c';
                $('.OpnChptrsCr').css('border', '');
                $(`#${bIds.opnCvrBck}`).css('border', 'solid 1px skyblue');
                $(`#${bIds.chptrCon}`).css('display', 'none');
                $(`#${bIds.cover}`).fadeIn();
                $(`#${bIds.chptrN}`).text(`${book.title}`);
            });
            // read me sect
            $(`#${bIds.readMe}`).click(()=> {
                curn = 'r';
                $('.OpnChptrsCr').css('border', '');
                $(`#${bIds.readMeCon}`).css('border', 'solid 1px skyblue');
                $(`#${bIds.cover}`).css('display', 'none');
                $(`#${bIds.chptrCon}`).fadeIn();
                $(`#${bIds.chptrN}`).text('read me');
                $(`#${bIds.chptrTtl}`).text('read me: all needed information for the book');
                $(`#${bIds.chptrBody}`).text(`${book.read_me}`);
            });
            // drop lst
            const chapterB = (cIds, i) => {
                return `
                <div style="float:left;" class="chpLsBdy" id="${cIds.body}">
                    <p class="postHeaderfrst" style="text-align:center; font-size:13px; margin:0px; padding:2px;">chapter</p>
                    <div id="${cIds.hold}" style="margin:auto; width:65px; height:65px; border-radius:5px; cursor:pointer;" class="OpnChptrsCr">
                        <br>
                        <p style="text-align:center; font-size:30px; margin-top:-15px; color:grey;">${i+1}</p>
                    </div>
                </div>
                `
            };
            const chapFuncs = (cIds, chap, i) => {
                $(`#${cIds.body}`).click(()=> {
                    curn = i;
                    $('.OpnChptrsCr').css('border', '');
                    $(`#${cIds.hold}`).css('border', 'solid 1px skyblue');
                    $(`#${bIds.cover}`).css('display', 'none');
                    $(`#${bIds.chptrCon}`).fadeIn();
                    $(`#${bIds.chptrN}`).text(`chapter ${i+1}`);
                    $(`#${bIds.chptrTtl}`).text(chap.title);
                    $(`#${bIds.chptrBody}`).text(`${chap.body}`);
                });
            };
            const createCids = (i) => {
                return {
                    body: `chptrLst_opn_body${i}`,
                    hold: `chptrLst_opn_hold${i}`,
                    remId: `chptrLst_opn_remId${i}`
                }
            };
            var tchp; var chpFW = $(`#${bIds.chptrLC}`).css('width');
            const chptrLst = (chap, i) => {
                console.log('con wisth: '+tchp);
                const cIds = createCids(i);
                var x = window.matchMedia("(max-width: 600px)")
                if (x.matches) {
                    $(`#${bIds.chptrLC}`).css('width', `${tchp+200}px`);
                }
                $(`#${bIds.chptrLst}`).append(chapterB(cIds, i));
                var x = window.matchMedia("(max-width: 600px)")
                if (x.matches) {
                    $(`#${cIds.body}`).css('width', `100px`);
                    $(`#${cIds.body}`).css('height', `100%`);
                }else {
                    $(`#${cIds.body}`).css('width', `100%`);
                    $(`#${cIds.body}`).css('height', `100px`);
                }
                chapFuncs(cIds, chap, i);
                checkMode();
            };
            for (let i = 0; i < book.chapters.length; i++) {
                var chpFWC = chpFW.slice(0, chpFW.length-2);
                tchp = Number(chpFWC);
                chptrLst(book.chapters[i], i);
            }
        };
        const createBIds = () => {
            return {
                chptrN: `bookIds_chptrN_${book._id}`,
                clsB: `bookIds_clsB_${book._id}`,
                cover: `bookIds_cover_${book._id}`,
                chptrCon: `bookIds_chptrCon_${book._id}`,
                chptrTtl: `bookIds_chptrTtl_${book._id}`,
                chptrBody: `bookIds_chptrBody_${book._id}`,
                chptrLC: `bookIds_chptrLC_${book._id}`,
                opnCover: `bookIds_opnCover_${book._id}`,
                opnCvrBck: `bookIds_opnCvrBck_${book._id}`,
                readMe: `bookIds_readMe_${book._id}`,
                readMeCon: `bookIds_readMeCon_${book._id}`,
                chptrLst: `bookIds_chptrLst_${book._id}`,
            }
        }
        const dropBk = (usr) => {
            const bIds = createBIds();
            var x = window.matchMedia("(max-width: 600px)")
            if (x.matches) {
                $('#dropChat').prepend(readBX(bIds, usr));
            } else {
                $('#dropChat').prepend(readL(bIds, usr));
            }
            bookFuncs(bIds);
            checkMode();
        };
        // data set
        var chkr = 0;
        if (book.reads.length > 0) {
            $(`#${ids.readBy}`).css('display', 'inline');
            for (let z = 0; z < book.reads.length; z++) {
                if (book.reads[z].user == udata._id) {
                    chkr++;
                    $(`#${ids.readId}`).attr('src', 'img/read.png');
                    $(`#${ids.readIc}`).css('background-image', 'url(img/read.png)');
                }                    
            }
        }
        if (chkr == 0) {
            $(`#${ids.readId}`).attr('src', 'img/readen.png');
            $(`#${ids.readIc}`).css('background-image', 'url(img/readen.png)');
        }
        $(`#${ids.readId}, .${ids.readId}, #${ids.readBtn}`).click(function() {
            $(`.postBodyCon`).slideUp();
            //$(`#${ids.readId}`).attr('src', 'img/readen.png');
            // view funcs
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                if (users) {
                    for (let i = 0; i < users.length; i++) {
                        if (users[i]._id == book.user) {
                            dropBk(users[i]);
                        }
                    }
                }
            });
            // check & apply data
            var cnt = 0; var nowB = book;
            for (let i = 0; i < nowB.reads.length; i++) {
                if (nowB.reads[i].user == udata._id) {
                    cnt++;
                }
            }
            if (cnt == 0) {
                fetch(`/post/AddReadBy/${book._id}`, { method: 'put', body: JSON.stringify({ user: udata._id, date: [year, day, month, hour, minute, secnds]} ), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((deldata)=>{
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((spec)=>{
                        $(`#${ids.readId}`).attr('src', 'img/read.png');
                        for (let i = 0; i < spec.length; i++) {
                            if (spec[i]._id == book._id) {
                                nowB = spec[i];
                                $(`#${ids.readBy}`).text(spec[i].reads.length);
                            }                                
                        }
                    });
                });
            }
        });
    }
    // build ids for functionalities
    const buildBkIds = (data, id) => {
        return {
            // smart date func
            dateFlow: 'dateFlow_bookB_' + data._id + id, 
            dateFlowAut: 'dateFlowAut_bookB_' + data._id + id, 
            // like func
            likeId : 'like_bookB_' + data._id + id,
            likedBy: 'liked_bookB_'+ data._id + id,
            // read body func
            prevB: 'prevB_bookB_'+ data._id + id,
            readId : 'read_bookB_' + data._id + id,
            readBy : 'readBy_bookB_' + data._id + id,
            // comnt func
            openCom: 'openCom_bookB_' + data._id + id,
            comBod: 'comBod_bookB_' + data._id + id,
            closeCom: 'closeCom_bookB_' + data._id + id,
            comIn: 'comIn_bookB_' + data._id + id,
            comBt: 'comBtn_bookB_' + data._id + id,
            comFlow: 'comFlow_bookB_' + data._id + id,
            cmntBy: 'cmntBy_bookB_' + data._id + id,
            comntLen: 'cmntLen_bookB_' + data._id + id,
            // share pst funcs
            shrPst: 'shrPst_bookB_' + data._id + id,
            shrPstBd: 'shrPstBd_bookB_' + data._id + id,
            shrPstFlw: 'shrPstFlw_bookB_' + data._id + id,
            shrPstCls: 'shrPstCls_bookB_' + data._id + id,
            shrPstSrch: 'shrPstSrch_bookB_' + data._id + id,
            // post pop up funcs
            openPopId: 'openPop_bookB_' + data._id + id,
            popBodId: 'popBod_bookB_' + data._id + id,
            clsePopId: 'clsePop_bookB_' + data._id + id,
            edtPost: 'edtPost_bookB_' + data._id + id,
            // delete post funcs
            delPMCId: 'delPMCId_bookB_' + data._id + id,
            delPostId: 'delPost_bookB_' + data._id + id,
            delPConId: 'delPCOn_bookB_' + data._id + id,
            yesDelPId: 'yesDelP_bookB_' + data._id + id,
            noDelPId: 'noDelP_' + data._id + id,
            // promote func
            promId: 'promId_' + data._id + id,
            // report post func
            reprtId: 'reprtId_bookB_' + data._id + id,
            repConId: 'repConId_bookB_' + data._id + id,
            inApRep: 'inApRep_bookB_' + data._id + id,
            abusRep: 'abusRep_bookB_' + data._id + id,
            clsRep: 'clsRep_bookB_' + data._id + id,
            // users auth
            usrAut: 'usrAut_bookB_' + data._id + id,
            verIcon: 'verIconJrn_bookB_' + data._id + id,
            // author info area
            autSrcs: 'autSrcs_bookB_' + data._id + id,
            adptCart: 'adptCart_bookB_' + data._id + id,
            autInfo: 'autInfo_bookB_'+ data._id + id,
            autCats: 'autCats_bookB_'+ data._id + id,
            autLoc: 'autLoc_bookB_'+ data._id + id,
            infoSrc: 'infoSrc_bookB_'+ data._id + id
            
        }
    }
    const dropBBook = (book, udata, nTp) => {
        
        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
            return response.json();
        }).then((alldata)=>{
            var thisU = '';
            for (let o = 0; o < alldata.length; o++) {
                if (alldata[o]._id == book.user) {
                    thisU = alldata[o];
                }
            }
            
            const ids = buildBkIds(book, nTp);
            if (nTp == 'gen') {
                $('#dropbox-index, #dropbox-paut').append(bookBig(book, thisU, udata, ids));
            }else {
                if (nTp == 'rdJ_rt') {
                    $('#exp_drpMR').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'ascJ_rt') {
                    $('#exp_drpMA').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'lkJ_rt') {
                    $('#exp_drpML').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'cmtJ_rt') {
                    $('#exp_drpMC').append(bookBig(book, thisU, udata, ids));
                }
                // all in exp
                if (nTp == 'all_exp') {
                    $('#dropbox-indexexp').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'like_post') {
                    $('#revPresNote').text('Book liked');
                    $('#drp-like-tag-rev-bod').fadeIn();
                    $('#droprev-lktg').append(bookBig(book, thisU, udata, ids));
                    // with/without imgs
                }
                if (nTp == 'tag_post') {
                    $('#revPresNote').text('tagged to a Book');
                    $('#drp-like-tag-rev-bod').fadeIn();
                    $('#droprev-lktg').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'shr_post') {
                    $('#revPresNote').text('shared to a Book');
                    $('#drp-like-tag-rev-bod').fadeIn();
                    $('#droprev-lktg').append(bookBig(book, thisU, udata, ids));
                }
                if (nTp == 'comment_post') {
                    let cids = comIdsNoti(data);
                    $('#revPresNote').text('commented on Book');
                    $('#drp-like-tag-rev-bod').fadeIn();
                    $('#droprev-lktg').append(comsBod(udata, cids.drpId, cids.bodyComId));
                    $(`#${cids.bodyComId}`).after(`<p style="margin:5px; font-size:13px; color:grey;">journal :</p>`+bodyJourn(data, thisU, udata, ids));
                    fetch('/review/getCom', { method: 'get' }).then((response)=>{
                        return response.json();
                    }).then((com)=>{
                        fetchSpecCom(com, data);
                    });
                    const fetchSpecCom = (com, data) => {
                        fetch( `/post/comments/${data._id}`, { method: 'get' }).then((responce)=>{
                            return responce.json()
                        }).then((comData)=>{
                            if (comData.length > 0) {
                                for (let i = 0; i < comData.length; i++) {
                                    if (comData[i].user == com.user && comData[i].date[0, 1, 2, 3, 4, 5] == com.date[0, 1, 2, 3, 4, 5]) {
                                        pushIt(comData[i]);
                                    }
                                }
                            }
                            
                        });
                    };
                    const pushIt = (com) => {
                        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                            return response.json();
                        }).then((allUsers)=>{
                            
                            for (let i = 0; i < allUsers.length; i++) {
                                if (allUsers[i]._id == com.user) {
                                    dispComs(allUsers[i], com);
                                }
                            }
                            
                        });
                    };
                    const dispComs = (user, com) => {
                        var str = com.comment;
                        var slc = str.slice(0, 100);
                        var dispMre = 'inline';
                        if(udata.mode == 'light') {
                            $(`#${cids.drpId}`).append(comBodLyt(com, user, cids, slc, dispMre));
                        }else {
                             $(`#${cids.drpId}`).prepend(comBodDrk(com, user, cids, slc, dispMre));
                        }
                    };
                }
            }

            $(`#${ids.autInfo}`).html(`user author <strong>.</strong> <a href="/${thisU.user_name}" style="text-decoration:none; color:grey;">${thisU.user_name}</a>`);
            for (let i = 0; i < thisU.user_type.categories.length; i++) {
                $(`#${ids.autCats}`).append(`${thisU.user_type.categories[i]} `);
            }
            $(`#${ids.autLoc}`).text(thisU.country);
            $(`#${ids.infoSrc}`).remove();
            // like
            LikePost(book, udata, ids.likeId, ids.likedBy);
            likedImg(book, udata, ids.likeId, ids.likedBy)
            // comments functionalities
            commentSec(book, udata, ids.openCom, ids.comBod, ids.bodyId, ids.comFlow, ids.comntLen);
            commentImg(book, udata, ids.openCom, ids.comntLen);
            closeComment(book, ids.closeCom, ids.comBod);
            pushComment(book, udata, ids.comBod, ids.bodyId, ids.comIn, ids.comBt, ids.comFlow, ids.openCom, ids.cmntBy, ids.comntLen);
            // share funcs
            sharePst(book, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls);
            // post opt funcs
            postPop(book, udata, ids.openPopId, ids.popBodId, ids.clsePopId, ids.reprtId, ids.promId, ids.edtPost, ids.hidPMCId, ids.delPMCId);
            deletePost(book, ids.delPMCId, ids.delPostId, ids.delPConId, ids.yesDelPId, ids.noDelPId);
            promFunc(book, ids.promId);
            // report p
            reportJrn(book, udata, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // edit p
            editJrn(book, udata, ids.edtPost);
            smartDate(book, ids.dateFlow);
            checkMode();
            // read  funcs
            reedBook(book, udata, ids);
        });
    } 
    // drop books lst
    const dbLstB = (book, user, lbIds, clss) => {
        return `
        <div id="${lbIds.BLTCon}" class="side_bkLsts ${clss}" style="display:none;">
            <a href="${user.user_name}" style="text-decoration:none;"><p class="postDatefrst" style="text-align: center; margin:0px; padding:4px; font-size: 14px; cursor:pointer;">${user.user_name}</p></a>
            <div id="${lbIds.readBtn}" style="width: 52.5%; margin:auto; height: 200px; margin-top:5px; border-radius: 10px; background-image: url(${book.cover.path}); background-size: 100% 100%; cursor:pointer;">
                <br>
                <div style="width:100%; height:40px;">
                    <div id="${lbIds.readIc}" style="float:left; width:30px; height:30px; margin-left:10px; margin-top:-10px; background-size: 100% 100%; background-image:url(img/readen.png);"></div>
                    <p style="float:left; font-size:13px; margin:0px; padding:5px; margin-left:5px; margin-top:-10px; display:none; font-weight:normal; color:darkorange;" id="${lbIds.readBy}">${book.reads.length}</p>
                </div>
            </div>
            <p class="postHeaderfrst" style="text-align: center; margin: 0px; padding:3px; font-size: 16.5px; font-weight:normal;">${book.title}</p>
            <p style="text-align: center; margin: 0px; padding:3px;">
                <button class="btn btn-default btn-xs revBtns postHeaderfrst ${lbIds.prevB}" style="background-color:transparent; color:grey; font-size:13px; border-radius: 5px;">preview <img src="img/bookinf.png" alt="" height="16px" width="14px"></button>
            </p>
        </div>
        `
    }
    const dropFBks = (book, b, user, udata, nw) => {
        var tchp; var chpFW; var chpFWC;
        const createLBD = () => {
            return {
                prevB: `preview_ls_bk_${book._id}_${user._id}_${nw}`,
                readBtn: `readBtn_ls_bk_${book._id}_${user._id}_${nw}`,
                readIc: `readIc_ls_bk_${book._id}_${user._id}_${nw}`,
                readBy: `readBy_ls_bk_${book._id}_${user._id}_${nw}`,
                BLTCon: `BLTCon_ls_bk_${book._id}_${user._id}_${nw}`,
            }
        };
        const lbIds = createLBD();
        var x = window.matchMedia("(max-width: 600px)");
        if (nw == 'ex' || nw == 'me') {
            const clss = "sidebook_ex_nd_me";
            chpFW = $(`#exBLSlide`).css('width');
            chpFWC = chpFW.slice(0, chpFW.length-2); tchp = Number(chpFWC);
            if (nw == 'ex') {
                $(`#exBLSlide`).css('width', `${tchp+300}px`);
                $('#drpExBKSL').prepend(dbLstB(book, user, lbIds, clss));
                $(`#${lbIds.BLTCon}`).css('width', '100%');
                $(`#${lbIds.BLTCon}`).attr('style', 'width: 300px; height: 295px; float:left;');
                $(`#${lbIds.BLTCon}`).fadeIn();
            }
        }
        if (nw == 'gen') {
            const clss = "dsidebook_general";
            chpFW = $(`#allhBLSlide`).css('width');
            chpFWC = chpFW.slice(0, chpFW.length-2); tchp = Number(chpFWC);
            if (x.matches) {
                $(`#allhBLSlide`).css('width', `${tchp+300}px`);
                $('#drpAllhExBKSL').append(dbLstB(book, user, lbIds, clss));
                $(`#${lbIds.BLTCon}`).css('width', '100%');
                $(`#${lbIds.BLTCon}`).attr('style', 'width: 300px; height: 295px; float:left;');
                $(`#${lbIds.BLTCon}`).fadeIn();
            }else {
                $('#drp_lft_bks').append(dbLstB(book, user, lbIds, clss));
                $(`#${lbIds.BLTCon}`).attr('style', 'width: 100%; border-bottom: solid 1px rgba(87, 86, 86, 0.244); height: 295px;');
                $(`#${lbIds.BLTCon}`).fadeIn();
            }
        }
        if (nw == 'rtd_rd' || nw == 'rtd_asc' || nw == 'rtd_lkd') {
            const clss = "dsidebook_rated";
            if (nw == 'rtd_rd') {
                $('#dropMstRd_bk').prepend(dbLstB(book, user, lbIds, clss));
            }
            if (nw == 'rtd_asc') {
                $('#dropMstAsc_bk').prepend(dbLstB(book, user, lbIds, clss));
            }
            if (nw == 'rtd_lkd') {
                $('#dropMstLkd_bk').prepend(dbLstB(book, user, lbIds, clss));
            }
            $(`#${lbIds.BLTCon}`).css('width', '100%');
            $(`#${lbIds.BLTCon}`).attr('style', 'width: 100%; height: 290px; float:left; margin-top:5px;');
            $(`#${lbIds.BLTCon}`).fadeIn();
            if (udata.mode == 'light') {
                $(`#${lbIds.BLTCon}`).css('border-right', 'solid 1px #f0f0f0');
            } else {
                $(`#${lbIds.BLTCon}`).css('border-right', 'solid 1px #404040');
            }
        }
        if (nw == 'shlf') {
            const clss = "col-xs-12 col-lg-6";
            $('#drp_shlf_bks').append(dbLstB(book, user, lbIds, clss));
            $(`#${lbIds.BLTCon}`).attr('style', 'height: 295px; float:left;');
            $(`#${lbIds.BLTCon}`).fadeIn();
        }
        reedBook(book, udata, lbIds);
        checkMode();
    }

    // AUTHOR - HEADS
    // --------------
    // head body
    const autHead = (ids, aut, clss) => {
        var img = {path: '', tpe: '', clss: ''};
        var nme = '';
        if (aut.user_name.length > 15) {
            nme = aut.user_name.slice(0, 15)+'..';
        } else {
            nme = aut.user_name;
        }
        if (aut.profile_pic == 'none') {
            img.path = 'img/profpic.png';
            img.tpe = '100% 100%';
        }else {
            img.path = aut.profile_pic.path;
            img.clss = aut.profile_pic.class;
            img.tpe = 'cover';
        }
        return `
        <div class="author_heads ${clss}" id="${ids.body}" styel="margin-top:5px;">
            <div style="width:100%; height:130px;">
                <div id="${ids.autPic}" style="width:120px; height:120px; margin:auto; margin-top:3px; background-image:url(${img.path}); background-size:${img.tpe}; background-color:red; border-radius:5px;" class="${img.clss}"></div>
            </div>
            <div style="width:100%; height:25px;">
                <p style="text-align:center; margin:0px; padding:2px; font-size:15px;" class="postHeaderfrst"> <img class="" src="img/authand.png" width="16px" height="16px" alt="" style="background-color:transparent;"> ${nme}</p>
            </div>
            <div style="width:100%; height:40px;">
                <p style="text-align:center; margin:0px; padding:5px;">
                    <button id="${ids.sub}" class="btn btn-default btn-sm sub_btn_autH postDatefrst" style="border-radius:15px; background-color:transparent;"> subscribe </button>
                </p>
            </div>
        </div>
        ` 
    }
    const paySub = (neData, mainUser) => {
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
                                <p style="text-align:center; margin:0px; padding:5px; color:grey;"> Make payment to subscribe to <span style="font-weight:normal;">${neData.user_name}</span>'s Author Contents </p>
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; text-align:center;"> <span style="color:grey; font-weight:normal; font-size:18px;">NGN</span> <span style="color:grey; font-size:35px;" id="subExPrcT"></span> </p>
                                <hr style="margin:5px; width:90%;">
                                <p style="text-align:center; margin:0px; padding:3px; font-size:14px; color:grey;">duration</p>
                                <div class="row">
                                    <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">1 month <input type="checkbox" class="subDrCs" checked id="subDr1"></p>  </div>
                                    <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">6 month <input type="checkbox" class="subDrCs" id="subDr6"></p>  </div>
                                    <div class="col-lg-4 col-xs-4" style="height:20px;"> <p style="text-align:center; margin:0px; padding:2.5px; font-size:13px;" class="postHeaderfrst">1 year <input type="checkbox" class="subDrCs" id="subDrY"></p>  </div>
                                </div>
                            </div>
                            <br>
                        </div>
                        <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="paySDone">submit</button> </p>
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
                        location.reload();
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
            perc = 1.55/100*Number(totalP); amnt = Number(perc+totalP);
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
    const subSAut = (aut, ids, udata, nw, drop) => {
        var stat = 'n';
        var subsN = aut.user_type.subscribers;
        for (let h = 0; h < subsN.length; h++) {
            if (subsN[h].user == udata._id) {
                stat = 'y';
            }
        }
        if (stat == 'y') {
            $(`#${ids.sub}`).css('border', 'none');
            $(`#${ids.sub}`).text('SUBSCRIBED');
        }
        $(`#${ids.sub}`).click(()=>{
            /*if (stat == 'n') {
                paySub(aut, udata);
            } else {
            }*/
            location.replace(`/${aut.user_name}`);
        });
    }
    const dropAut = (aut, udata, nw, drop) => {
        const ids = {
            body: `author_rated_${aut._id}_${nw}_body`,
            autPic: `author_rated_${aut._id}_${nw}_autPic`,
            sub: `author_rated_${aut._id}_${nw}_sub`,
        };
        var clss = '';
        if (nw == "aut_r_rd") {
            clss = 'rated_aut_r_rd';
        }
        $(`#${drop}`).prepend(autHead(ids, aut, clss));
        if (aut.profile_pic == 'none') {
            if (udata.mode == 'light') {
                $(`#${ids.autPic}`).css('background-color', '#f9f9f9');
                $(`#${ids.autPic}`).css('border', 'solid 3px #f0f0f0');
                $(`#${ids.body}`).css('border-right', 'solid 1px #f0f0f0');
            } else {
                $(`#${ids.autPic}`).css('background-color', 'black');
                $(`#${ids.autPic}`).css('border', 'solid 3px #404040');
                $(`#${ids.body}`).css('border-right', 'solid 1px #404040');
            }
        }
        if (aut._id == udata._id) {
            $(`#${ids.sub}`).remove();
        }
        checkMode();
        subSAut(aut, ids, udata, nw, drop);
        
    }
    
    /* if (mainjh.val() !== '') {
        $('#dropbox-jr').prepend(journ1);
    } else {
        alert('Insert heading!');
    } */


    // book shelves
    // ------------
    // open subscribed
    const genShelf = () => {
        $('#drop_left_navs').append(`
        <div class="leftNavBod" style="width:100%; height:40px;">
            <p id="opnMyBksLst" class="postDatefrst" style="margin:0px; padding:10px; cursor: pointer;"> <img src="img/bread.png" alt="" width="20px" height="20px" id="bksInd"> books</p>
        </div>
        `);
        $('#opnMyBksLst, #opnShlf-xs').click(()=>{
            var tpe = 'gen';
            dropShelf(tpe);
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                return response.json();
            }).then((udata)=>{
                fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                        return response.json();
                    }).then((alldata)=>{
                        for (let n = 0; n < data.length; n++) {
                            if (data[n].content_type == 'usr_aut_book') {
                                for (let y = 0; y < alldata.length; y++) {
                                    if (alldata[y]._id == data[n].user && alldata[y].user_type.status == 'on') {
                                        if (alldata[y].user_type.subscribers.length > 0) {
                                            for (let q = 0; q < alldata[y].user_type.subscribers.length; q++) {
                                                console.log('subscriber: '+alldata[y].user_type.subscribers[q].user+', me: '+udata._id);
                                                if (alldata[y].user_type.subscribers[q].user == udata._id) {
                                                    console.log('user found!');
                                                    var nw = 'shlf';
                                                    dropFBks(data[n], n, alldata[y], udata, nw);
                                                    checkMode();
                                                    //getCart();
                                                }
                                            }
                                        }
                                        //alert(alldata[y]._id);
                                    }
                                }
                                if (udata.user_type !== 'user' && udata.user_type.status == 'on') {
                                    if (data[n].user == udata._id) {
                                        var nw = 'shlf';
                                        dropFBks(data[n], n, udata, udata, nw);
                                        checkMode();
                                    }
                                }
                            }
                        }
                    });
                });
            });
        });
    }
    var targetDate = new Date();
    targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
            genShelf();
            clearInterval(x);
        }
    }, 1000);
    // open by cats
    $('#opnMyBksLst_cat, #cats_bkShlfs').click(()=>{
        fetch('/post/getCart', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data2)=>{
            if (data2) {
                var tpe = data2;
                dropShelf(tpe);
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((udata)=>{
                    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
                        return response.json();
                    }).then((data)=>{
                        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                            return response.json();
                        }).then((alldata)=>{
                            for (let n = 0; n < data.length; n++) {
                                if (data[n].content_type == 'usr_aut_book') {
                                    for (let y = 0; y < alldata.length; y++) {
                                        if (alldata[y]._id == data[n].user && alldata[y].user_type.status == 'on') {
                                            for (let q = 0; q < alldata[y].user_type.categories.length; q++) {
                                                if (alldata[y].user_type.categories[q] == data2) {
                                                    console.log('found! '+data2);
                                                    var nw = 'shlf';
                                                    dropFBks(data[n], n, alldata[y], udata, nw);
                                                    checkMode();
                                                    //getCart();
                                                }
                                            }
                                            //alert(alldata[y]._id);
                                        }
                                    }
                                }
                            }
                        });
                    });
                });
            }
        });
    });
    const dropShelf = (tpe) => {
        $('#dropChat').append(shelfCon(tpe));
        $('#shelf_main').fadeIn();
        $('#container-one').css('filter', 'blur(5px)');
        $('#cls_shlf').click(()=>{
            $('.shelf_con').remove();
            $('#container-one').css('filter', '');
        });
        checkMode();
    }
    const shelfCon = (tpe) => {
        var hd = '';
        if (tpe == 'gen') {
            hd = 'from subscriptions';
        } else {
            hd = `Books related to - ${tpe}`;
        }
        return `
        <div class="row shelf_con">
            <div class="col-lg-12 col-xs-12" style="position:fixed; z-index:4; height:100%;">
                <div class="row" style="height:100%;">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6 col-xs-12" style="height:100%;">
                        <div style="width:100%; height:95%; margin-top:2%; display:none; border-radius:5px; box-shadow:0px 0px 20px -5px rgba(0, 0, 0, 0.107);" id="shelf_main" class="stylePosts">
                            <div style="width:100%; height:6.5%;">
                                <div style="width:100%; height:100%;">
                                    <p style="float:left; margin:0px; padding:2px; color:darkorange; padding:3px;" id="shelf_inf">${hd}</p>
                                    <p style="margin:0px; padding:2px; margin-right:5px; float:right;"> <img id="cls_shlf" src="img/can.png" width="15px" height="15px" style="cursor:pointer;"> </p>
                                </div>
                            </div>
                            <div style="width:100%; height:94.5%; overflow-y:auto;">
                                <span id="drp_shlf_bks"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3"></div>
                </div>
            </div>
        </div>
        `
    };
    //$('#dropChat').prepend(allLst());

}
Poster();

/* get flow/string Algo from friends
function getFlow{ 
    get - flow;
    fetch : username(as userID);
    get - posts {
        assend(posts) in dropbox-jr
    }
}
*/
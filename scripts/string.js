import {setO, showO, getSpecO} from "./optimize.js";
function Strings() {
   
    $('#ScStr').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
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
    // smart numbers
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
    // extraction
    var pubin = $('#ScStr');
    var strh = $('#mainStrh');
    var strBody = $('#mainsb');
    var strConH = $('#strConHead');
    var strimg = $('#postStrImage');
    var strvid = $('#postVideoStr');

    // loader
    const Loader = () => {
        return `
            <div id="flowLoader3">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#dropbox-str, #dropbox-strindex').before(Loader());
    // ----------------------------
    // EXTRACT STRINGS && threads
    // ----------------------------
    // for strings
    $('#strFlwOpn, #strFlwMainBtn').click(function() {
        // for main-page
        $('#strFlwMainBtn').css('border-bottom', 'solid 2px skyblue');
        $('#thrFlwMainBtn').css('border-bottom', 'none');
        // for min btns
        $('#strFlwOpn').css('border-bottom', 'solid 2px darkorange');
        $('#thrFlwOpn').css('border-bottom', 'none');
        $('#thrFlowCon, #thrFlwMain').css('display', 'none');
        $('#strFlowCon, #strFlwMain').fadeIn();
        // fetch user info to include as data
        const getUinfo = () => {
            fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => { 
                getStrings(udata, udata); 
            });
        };
        getUinfo();
        const getStrings = (udata, dataFlwn) => {
            fetch('/strings/getStrings', { method: 'get'}).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                fetch('/lclJs', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((loc)=>{
                    //fetch following
                    getStrNow(dataFlwn, data, udata, loc);
                    $('#flowLoader3').fadeOut();
                });
            });
        };
        const getStrNow = (dataFlwn, data, udata, loc) => {
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                var tieType = '';
                $('.privStrBod').remove();
                
                for (let i = 0; i < data.length; i++) {
                    if (data[i].content_type == 'string') {
                        for (let z = 0; z < dataFlwn.following.length; z++) {
                            if (dataFlwn.following[z].user == data[i].user) {
                                tieType = 'Friend';
                                displayStrings(data[i], udata, tieType, users);
                                $('#checknum-s').css('display', 'none');
                                break;
                            }
                        }
                    }
                }
                for (let i = 0; i < data.length; i++) {
                    if (data[i].content_type == 'string') {
                        if (data[i].user == udata._id) {
                            tieType = 'Own';
                            displayStrings(data[i], udata, tieType, users);
                            $('#checknum-s').css('display', 'none');
                            $('#flowLoader3').fadeOut();
                        }else {
                            if (data[i].type == 'Private' && data[i].tied.length > 0) {
                                for (let x = 0; x < data[i].tied.length; x++) {
                                    if (data[i].tied[x] == udata._id && loc !== 'hom') {
                                        var tieType = 'Tied';
                                        displayStrings(data[i], udata, tieType, users);
                                        $('#checknum-s').css('display', 'none');
                                        $('#flowLoader3').fadeOut();
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    });
    // for ex-usr
    $('#strFlwOpn-ex').click(()=>{
        $('#strFlwOpn-ex').css('border-bottom', 'solid 2px darkorange');
        $('#thrFlwOpn-ex').css('border-bottom', '');
        $('#thrFlowCon-ex').css('display', 'none');
        $('#strFlowCon-ex').css('display', 'block');
        $('.privStrBod').remove();
        const getExuser = () => {
            fetch('/post/getExuserposts', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((data2) => {
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((udata) => { 
                    geExStr(data2, udata);
                });
            });
        }
        getExuser();
        const geExStr = (data2, udata) => {
            fetch('/strings/getStrings', { method: 'get' }).then((responce)=>{
                return responce.json();  
            }).then((data)=>{
                if (data) {
                    fetch('/getUsers', { method: 'get' }).then((responce)=>{
                        return responce.json();
                    }).then((users)=>{
                        var tieType = '';
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].content_type == 'string') {
                                if (data2.following.length > 0) {
                                    for (let z = 0; z < data2.following.length; z++) {
                                        if (data2.following[z].user == data[i].user) {
                                            tieType = 'Friend';
                                            displayStrings(data[i], udata, tieType, users);
                                            $('#checknum-sex').css('display', 'none');
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].content_type == 'string') {
                                if (data[i].user == data2._id) {
                                    tieType = 'Ex-own';
                                    displayStrings(data[i], udata, tieType, users);
                                    $('#checknum-sex').css('display', 'none');
                                    $('#flowLoader3').fadeOut();
                                }else {
                                    if (data[i].type == 'Private' && data[i].tied.length > 0) {
                                        for (let x = 0; x < data[i].tied.length; x++) {
                                            if (data[i].tied[x] == data2._id) {
                                                var tieType = 'Tied';
                                                displayStrings(data[i], udata, tieType, users);
                                                $('#checknum-sex').css('display', 'none');
                                                $('#flowLoader3').fadeOut();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        $('#flowLoader3').fadeOut();
                    });
                }
                  //$('#container-one').css('display', 'none');
                  // $('#dropChat').after(ViewStr(data));
              });
        };
    });

    // get explore-str
    const strTrndStr = (act) => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((udata)=>{
            fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                return response.json();
            }).then((alldata)=>{
                fetch('/strings/getStrings', { method: 'get' }).then((responce)=>{
                    return responce.json();  
                }).then((strdata)=>{
                    // drop trending strn
                    $('.tieUflowBod, .privStrBod').remove();
                    if (act == 'str' || act == 'all') {
                        var strings = new Array();
                        for (let o = 0; o < showO.str_r.length; o++) {
                            for (let i = 0; i < strdata.length; i++) {
                                if (strdata[i].content_type == 'string') {
                                    if (strdata[i]._id == showO.str_r[o].content._id) {
                                        strings[strings.length] = {str: strdata[i], points: showO.str_r[o].points};
                                    }
                                }
                            }
                        }
                        var len = 0;
                        if (strings.length > 10) {
                            len = 10;
                        } else {
                            len = strings.length;
                        }
                        var dropped = new Array();
                        for (let l = 0; l < len; l++) {
                            var flag = 'y';
                            for (let z = 0; z < dropped.length; z++) {
                                if (dropped[z] == strings[l].str._id) {
                                    flag = 'n';
                                }
                            }
                            if (flag == 'y') {
                                var tpe = 'gen';                        
                                dispTrndStr(strings[l].str, udata, strings[l].points, tpe);
                                dropped[dropped.length] = strings[l].str._id;
                                checkModeTie();
                            }
                        }
                    }
                    // drp mosat asc thrds
                    if (act == 'thr' || act == 'all') {
                        var threads = new Array();
                        for (let i = 0; i < showO.thr_r.length; i++) {
                            for (let n = 0; n < strdata.length; n++) {
                                if (strdata[n].content_type == 'thread' && strdata[n]._id == showO.thr_r[i].content._id) {
                                    threads[threads.length] = {thr: strdata[n], points: showO.thr_r[i].points};
                                }
                            }
                        }
                        var lenT = 0;
                        if (threads.length > 5) {
                            lenT = 5;
                        } else {
                            lenT = threads.length;
                        }
                        for (let l = 0; l < lenT; l++) {
                            //dispFrndThrStr();   
                            var wrt = 'exp_thr';
                            dispFrndThrStr(threads[l].thr, udata, alldata, wrt);                 
                            checkMode();
                            
                        }
                    }
                    // drop em
                    if (act == 'all') {
                        var lenB = 0;
                        for (let i = 0; i < strdata.length; i++) {
                            if (lenB < 51) {
                                if (strdata[i].content_type == 'thread') {
                                    var wrt = 'exp';
                                    dispFrndThrStr(strdata[i], udata, alldata, wrt);                 
                                    checkMode();
                                    lenB++;
                                }
                                if (strdata[i].content_type == 'string') {
                                    var tieType = 'explore_str';
                                    displayStrings(strdata[i], udata, tieType, alldata);
                                    checkMode();
                                    lenB++;
                                }
                            }
                        }
                    }
                });
            });
        });
    }
    const starTrStr = (act) => {
        setO();
        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 1);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {
                strTrndStr(act);
                clearInterval(x);
            }
        }, 1000);
    }
    var targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() + 1);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
            var act = 'str';
            starTrStr(act);
            clearInterval(x);
        }
    }, 1000);
    // ui 
    const trndnStrBod = (name, len, ids) => {
        var newName = '';
        if (name.length > 10) {
            newName = name.slice(0, 10)+'..';
        }else {
            newName = name;
        }
        return `
        <div id="" class="tieUflowBod" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:15%; height:100%; float:left;">
                <div style="width:25px; height:25px; margin:auto; background-image:url(img/strings.png); background-size:100% 100%; border-radius:100%; margin-top:5px;"></div>
            </div>
            <div style="width:65%; height:100%; float:left;">
                <p class="postDatefrst" style="padding:6.5px; margin:0px; font-size:11px;">${newName} 
                    <i style="color:grey; font-size:9px;">${len} <strong style="font-size:12px;">.</strong> th</i> 
                </p>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p styl="text-align:center; margin:0px;">
                    <button id="${ids.viewId}" class="btn btn-default btn-xs view-srchdStrCon" style="border:solid 1px orange; margin-top:7.5px; color:darkorange; background-color:transparent;"><i style="margin:0px; adding:0px;">VIEW</i></button>
                </p>
            </div>
        </div>
        `
    };
    // crt ids
    const createTrndStrIds = (data, tpe) => {
        return {
            viewId: 'trndn_str_view' + data._id + `_${tpe}`
        }
    };
    // funcs
    const openStr = (data, udata, viewId) => {
        //const openBgBdy = (data, udata, tieType, user, viewId) => {
            $(`#${viewId}`).click(()=>{
                fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
                  return responce.json();  
                }).then((thrdata)=>{
                    if (thrdata) {
                        displayView(thrdata, data, udata);
                    }
                    //$('#container-one').css('display', 'none');
                    // $('#dropChat').after(ViewStr(data));
                });
            });
        //};
    }; 
    const dispTrndStr = (data, udata, len, tpe) => {
        const ids = createTrndStrIds(data, tpe);
        //al
        var name = '';
        console.log('droppped here!');
        if (data.type == "Public") {
            name = data.name;
        } else {
            name = data.head;
        }
        var x = window.matchMedia("(max-width: 600px)")
        if (x.matches) {
            $('#drop_trnd_Str').append(trndnStrBod(name, len, ids));
        } else {
            $('#dispTrndStr').append(trndnStrBod(name, len, ids));
        }
        checkMode();
        openStr(data, udata, ids.viewId);
    };
    
    // get explore-thrs
    $('#strFlow-ex').click(()=>{
        $('#redBodCon-ex').css('display', 'none');
        $('#strFlow-ex').attr('src', 'img/strings.png');
        $('#redFlow-ex').attr('src', 'img/readen.png');
        $('#strBodCon-ex').fadeIn();
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((udata)=>{
            fetch(`/getUsers`, { method: 'get' }).then((response)=>{
                return response.json();
            }).then((alldata)=>{
                var act = 'all';
                starTrStr(act);
                //getExplore(udata, alldata);
            });
        });
    });
    const getExplore = (udata, alldata) => {
        console.log('get them now thr ex');
        var allP = new Array();
        const one = () => {
            fetch('/strings/getThreads', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                //var lim1 = 0; var lim2 = 1;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].content_type == 'thread') {
                        console.log('thread');
                        if (data[i].likedBy.length > 0) {
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
            console.log(allP.length);
            //alert('here');

            //allP.sort();
            for (let i = 0; i < allP.length; i++) {
                if (loopa.length < 1) {
                    loopa[0] = allP[i].likedBy.length;
                }else {
                    loopa[loopa.length] = allP[i].likedBy.length;
                }
            }
            fetch('/strings/getThreads', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((psts)=>{
                loopa.sort();
                $('.privStrBod').remove();
                var dateN = [year, day, month, hour, minute];
                for (let x = 0; x < loopa.length; x++) {
                    for (let i = 0; i < psts.length; i++) {
                        if (dateN[0] == psts[i].date[0] && dateN[1] == psts[i].date[1] && dateN[2] == psts[i].date[2] && loopa[x] == psts[i].likedBy.length && psts[i].content_type == 'thread') {
                            //for (let z = 0; z < alldata.length; z++) {
                                //if (alldata[z]._id == psts[i].user) {
                                    var wrt = 'exp';
                                    checkMode();
                                    //getCart();
                                    dispFrndThrStr(psts[i], udata, alldata, wrt);
                                //}
                            //}
                        }
                    }
                }
            });            

        }

    };

    // for threads
    // loader
    const Loader4 = () => {
        return `
            <div id="flowLoader4">
                <img src="img/load.png" width="45px" height="45px">
            </div>
        `
    };
    $('#dropbox-thr, #dropbox-strindex').before(Loader4());
    $('#strAr, #strFlow, #thrFlwOpn, #thrFlwMainBtn').click(()=>{
        // for main-page
        $('#thrFlwMainBtn').css('border-bottom', 'solid 2px skyblue');
        $('#strFlwMainBtn').css('border-bottom', 'none');
        // for pofile string nav
        $('#strAr').css('border-bottom', 'solid 2px skyblue');
        $('#mediaAr').css('border-bottom', '');
        $('#setAr, #hidAr, #autAr').css('border-bottom', '');
        $('#myflow, #myset, #myAutc').css('display', 'none');
        $('#mystr').fadeIn();
        // for btn effects
        $('#thrFlwOpn').css('border-bottom', 'solid 2px darkorange');
        $('#strFlwOpn').css('border-bottom', 'none');
        // for main pge nav
        $('#strFlow').attr('src', 'img/strings.png');
        $('#redFlow').attr('src', 'img/readen.png');
        $('#strBodCon').slideDown();
        $('#redBodCon').slideUp();
        // for thr/str
        $('#strFlowCon, #strFlwMain').css('display', 'none');
        $('#thrFlowCon, #thrFlwMain').fadeIn();
        $('.privStrBod').remove();
        getUinfoThr();
    });
    const getUinfoThr = () => {
        fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            $('.privStrBod').remove();
            getThrds(udata);
        });
    };
    const getThrds = (udata) => {
        fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
            return responce.json();  
          }).then((thrdata)=>{
              if (thrdata) {
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                     return responce.json();
                }).then((users)=>{
                    fetch('/lclJs', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((loc)=>{
                        for (let i = 0; i < thrdata.length; i++) {
                            if (thrdata[i].content_type == 'thread') {
                                if (udata.following.length > 0) {
                                  for (let z = 0; z < udata.following.length; z++) {
                                      if (thrdata[i].user == udata.following[z].user && loc !== 'pf') {
                                          var wer = 'gen';
                                          dispFrndThrStr(thrdata[i], udata, users, wer);
                                          $('#checknum-t').css('display', 'none');
                                          //break;
                                      }
                                  }
                                  if (thrdata[i].user == udata._id) {
                                      dispThrStr(thrdata[i], udata, users);
                                      $('#checknum-t').css('display', 'none');
                                  }
                              }else {
                                  if (thrdata[i].user == udata._id) {
                                      dispThrStr(thrdata[i], udata, users);
                                      $('#checknum-t').css('display', 'none');
                                  }
                              }
                            }
                        }
                    });
                    $('.privStrBod').remove();
                    
                });
                $('#flowLoader4').fadeOut();
              }
              //$('#container-one').css('display', 'none');
              // $('#dropChat').after(ViewStr(data));
          });
    };
    /**
     * FOR EX-USER
     */
    // for threads
    $('#strAr-ex, #thrFlwOpn-ex').click(function() {
        $('#strAr-ex').css('border-bottom', 'solid 2px skyblue');
        $('#mediaAr-ex').css('border-bottom', '');
        $('#myflow-ex').css('display', 'none');
        $('#mystr-ex').fadeIn();
        // opn thr
        $('#thrFlwOpn-ex').css('border-bottom', 'solid 2px darkorange');
        $('#strFlwOpn-ex').css('border-bottom', '');
        $('#strFlowCon-ex').css('display', 'none');
        $('#thrFlowCon-ex').css('display', 'block');
        $('.privStrBod').remove();
        // EXTRACTION
        const getExuser = () => {
            fetch('/post/getExuserposts', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((data2) => {
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((udata) => { 
                    getExThrds(data2, udata);
                });
            });
        }
        getExuser();
        const getExThrds = (data2, udata) => {
            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
                return responce.json();  
            }).then((thrdata)=>{
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    $('.privStrBod').remove();
                    if (thrdata) {
                      for (let i = 0; i < thrdata.length; i++) {
                          if (thrdata[i].user == data2._id && thrdata[i].content_type == 'thread') {
                              dispExThrStr(thrdata[i], udata, users);
                              $('#checknum-tex').css('display', 'none');
                              $('#flowLoader4').fadeOut();
                          }
                      }
                      $('#flowLoader4').fadeOut();
                    }
                });
                //$('#container-one').css('display', 'none');
                // $('#dropChat').after(ViewStr(data));
            });
        };
    });

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
            drpId: 'dropCom_noti_Thr' + data._id,
            bodyComId: 'bodyComThr_noti_Thr' + data._id,
            // comment body id
            dateFlwComThr: 'dateFlwComThr_noti_Thr' + data._id,
            delId: 'delComId_noti_Thr' + data._id,
            comBodId: 'comBodId_noti_Thr' + data._id,
            cmntSlc: 'cmntSlc_noti_Thr' + data._id,
            mreCom: 'mreCom_noti_Thr' + data._id
        }
    };
    // get specific thr
    const getSpec = (data, udata, type) => {
        fetch('/strings/getSpecThread', { method: 'post', body: JSON.stringify({ _id: data }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((spec)=>{
            checkMode();
            displayReviews(spec, udata, type);
        });
    };
    // get specific thr
    const getSpecStr = (data, udata, type) => {
        fetch('/strings/getSpecStr', { method: 'post', body: JSON.stringify({ _id: data }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
            return response.json();
        }).then((spec)=>{
            checkMode();
            //fetch following
            fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((dataFlwn) => { 
                var tieType = '';
                if (dataFlwn.following.length > 0) {
                    for (let z = 0; z < dataFlwn.following.length; z++) {
                        if (dataFlwn.following[z].user === spec.user) {
                            tieType = 'Friend';
                            displayStrReviews(spec, udata, tieType, type);
                            break;
                        }
                    }
                    myStrRevDiff(spec, udata, tieType);
                }else {
                    myStrRevDiff(spec, udata, tieType);
                }

            });
            const myStrRevDiff = (data, udata, tieType) => {
                if (data.user == udata._id) {
                    tieType = 'Own';
                    displayStrReviews(data, udata, tieType, type);
                }else {
                    if (data.tied.length > 0) {
                        for (let x = 0; x < data.tied.length; x++) {
                            if (data.tied[x] == udata._id) {
                                tieType = 'Tied';
                                displayStrReviews(data, udata, tieType, type);
                                $('#checknum-s').css('display', 'none');
                                $('#flowLoader3').fadeOut();
                            }
                        }
                    }
                }
            }
        });
    };
    // review from noti
    const getReview = (udata) => {
        fetch('/review/getPostType', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((type) => {
            if (type == 'like_str') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpec(data, udata, type);
                });
            }
            if (type == 'comment_str') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpec(data, udata, type);
                });
            }
            if (type == 'shr_thr') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpec(data, udata, type);
                });
            }
            if (type == 'tie_string') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpecStr(data, udata, type);
                });
            }
            if (type == 'shr_str') {
                fetch('/review/getPData', {method: "get"}).then((responce) => {
                    return responce.json();
                }).then((data) => {
                    getSpecStr(data, udata, type);
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
    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
        return response.json();
    }).then((udata)=>{
        checkRev(udata);
    });
    const termRev = (udata) => {
        fetch('/review/termRev', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((term) => {
            if (term) {
                checkRev(udata);
            }
        });
    };

    // CHECK MODE
    const checkMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.bedrBotStr').css('border-top', 'solid 0.8px #dddddd');
                $('.vewStrTop').css('border-bottom', 'solid 0.8px #dddddd');
                $('.strFlowDiv').css('background-color', '#f9f9f9');
                $('.strFlowDiv').css('border-right', 'solid 1px #f0f0f0');
                //$('.inStrUflow').css('border', 'solid 0.5px #dddddd');
                $('.stylePosts,.srchCon_tag').css('background-color', 'white');
                $('.stylePosts, .privStrBod, .topLBrdr').css('border-top', 'solid 1px #f0f0f0');
                $('.postInfoCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postDatefrst').css('color', 'grey');
                $('.postHeaderfrstStr, #thrHeadr').css('color', '#1a1a1a');
                $('.postBodyCon, .edtPstBd, .strThrdVwr').css('background-color', '#f9f9f9');
                $('.areYSPCon, .privStrBod, .strHdBd, #strActvtCon, .bottom_thr_vid').css('background-color', 'white');
                $('.yesesP').css('border-right', 'solid 1px #f0f0f0');
                $('.postBodyCon').css('border', 'solid 1px #f0f0f0');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postBodtxt').css('color', '#1a1a1a');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #f0f0f0');
                $('.commentInput, .strHdBd').css('border', 'solid 1px #f0f0f0');
                $('.commentInput, .inStrUflow, .thrdBod, .tiedUBod').css('background-color', 'white');
                $('.checkTagBody2').css('border', 'solid 1px #f0f0f0');
                $('.checkTagBody2').css('background-color', 'white');
                $('.thrdBod, .tiedUBod').css('box-shadow', '0px 0px 20px -5px #dddddd');
                // alrts
                $('.edt_jrn_alrt').css('background-color', 'white');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 15px 2px rgba(0, 0, 0, 0.2)');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #f0f0f0');
                $('.closeImgFlwCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.scrlimgCon').css('border', 'solid 1px #f0f0f0');
                $('.scrlimgCon').css('background-color', 'white');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #f0f0f0');
                $('.bodyComNoti').css('background-color', 'white');
                $('.chptrsCr').css('background-color', '#f0f0f0');
            }
            if (mode === 'dark') {
                $('.bedrBotStr').css('border-top', 'solid 0.8px #404040');
                $('.vewStrTop').css('border-bottom', 'solid 0.8px #404040');
                $('.strFlowDiv').css('background-color', '#333333');
                $('.strFlowDiv').css('border-right', 'solid 1px #404040');
                //$('.inStrUflow').css('border', 'solid 0.5px #333333');
                $('.stylePosts,.srchCon_tag').css('background-color', '#262626');
                $('.stylePosts, .privStrBod, .topLBrdr').css('border-top', 'solid 1px #404040');
                $('.postInfoCon').css('border-bottom', 'solid 1px #404040');
                $('.postDatefrst').css('color', 'silver');
                $('.postHeaderfrstStr, #thrHeadr').css('color', 'white');
                $('.postBodyCon, .edtPstBd, .tiedUBod').css('background-color', '#333333');
                $('.areYSPCon, .privStrBod, #strThrdVwr, #strActvtCon, .bottom_thr_vid').css('background-color', '#1a1a1a');
                $('.yesesP').css('border-right', 'solid 1px #333333');
                $('.postBodyCon, .strHdBd').css('border', 'solid 1px #404040');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #404040');
                $('.postBodtxt').css('color', 'white');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #404040');
                $('.commentInput').css('border', 'solid 1px #404040');
                $('.commentInput, .strHdBd, .inStrUflow, .thrdBod').css('background-color', '#262626');
                $('.checkTagBody2').css('border', 'solid 1px #404040');
                $('.checkTagBody2').css('background-color', '#292929');
                $('.thrdBod, .tiedUBod').css('box-shadow', '0px 0px 20px -5px black');
                // alrts
                $('.edt_jrn_alrt').css('background-color', '#262626');
                $('.edt_jrn_alrt').css('box-shadow', '0px 0px 15px 2px rgba(0, 0, 0, 0.2)');
                $('.posterClosecon_edt').css('border-bottom', 'solid 1px #404040');
                $('.closeImgFlwCon').css('border-bottom', 'solid 1px #404040');
                $('.scrlimgCon').css('border', 'solid 1px #404040');
                $('.scrlimgCon').css('background-color', '#262626');
                // combod
                $('.bodyComNoti').css('border', 'solid 1px #404040');
                $('.bodyComNoti').css('background-color', '#262626');
                $('.chptrsCr').css('background-color', '#262626');
            }
        });
    };

    // ---------------
    // CREATE STRINGS
    // ---------------

    // global date
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

    // STRING TYPES
    //--------------
    // all strings
    const privString = (data, udata, user, val, fpath, ids) => {
        var path = ''; var clas = '';
        if (fpath.profile_pic == 'none') {
            path = 'img/profpic.png'; clas = 'none';
        }else {
            path = `${fpath.profile_pic.path}`; clas = `${fpath.profile_pic.class}`;
        }
        return `
        <div class="privStrBod" style="width:100%;">
            <p class="postDatefrst" style="padding:8px; margin:0px; font-size:12px;"><i style="font-size:10px;">${val}</i> </p>
            <div class="strHdBd" style="width:95%; margin:auto; border-radius:5px; margin-bottom:15px;">
                <div class="" style="width:100%; height:30px; margin-bottom:5px;">
                    <img src="img/strings.png" id="testStrBtn" width="20px" height="20px" alt="" style="float:left; margin:5px; cursor:pointer;">
                    <img src="img/addxs.png" id="${ids.edtId}" alt="" width="20px" height="20px" style="margin:5px; float:left; cursor:pointer; display:none;">
                    <img src="img/opt.png" id="${ids.opnOpt}" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                    <i class="postDatefrst" style="float:right; margin:5px; font-size:10px;" id="${ids.strDate}"></i>
                </div>
                <div class="edtPstBd" id="${ids.optBody}" style="width:100%; display:none;">
                    <div class="edtPstFlw" style="width:100%; height:30px;">
                        <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsOpt}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                    </div>
                    <!-- delp cons -->
                    <div id="${ids.delStrId}" class="edtPstFlw" style="width:100%; height:35px;">
                        <p id="" style="margin:8px; color:orangered; cursor:pointer;"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete string</p>
                    </div>
                    <div id="${ids.delStrBod}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                        </div>
                        <div style="width:100%; height:30px;">
                            <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                                <p id="${ids.delStrY}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                            </div>
                            <div style="width:49%; float:left; height:100%; float:right;">
                                <p class="postDatefrst" id="${ids.delStrN}" style="text-align:center; margin:5px; cursor:pointer;">Cancel</p>
                            </div>
                        </div>
                    </div>
                    <!-- report cons -->
                    <div id="${ids.repStrId}" class="" style="width:100%; height:35px;">
                        <p class="postDatefrst" style="margin:8px; cursor:pointer;"> <img src="img/flag.png" width="15px" height="15px" style="margin-right:10px;"> Report string</p>
                    </div>
                    <div id="${ids.repStrConId}" class="areYSPCon" style="width:100%; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.inApRepStr}"> Inapproriate content </p>
                        </div>
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.abusRepStr}"> Abusive content </p>
                        </div>
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${ids.clsRepStr}"> cancel </p>
                        </div>
                    </div>
                </div>
                <!-- for general string viewer displayView -->
                <div id="${ids.strBgId}" class="" style="width:70%; height:300px; margin:auto; border-radius:10px; margin-top:5px; cursor:pointer; background-image:url('img/cbsm.png'); background-size:100% 100%; box-shadow:0px 0px 10px 1px rgba(0, 0, 0, 0.3);">
                    <div style="width:100%; height:100%; backdrop-filter:blur(1.1px);">
                        <br>
                        <div class="${clas}" style="box-shadow:0px 0px 30px -15px #1a1a1a; width:80px; height:80px; border-radius:100%; margin:auto; margin-top:50px; background-image:url(${path}); background-size:cover;">
                        </div>
                        <p class="postDatefrst" style="text-align:center; font-size:11px; margin:0px; padding:5px; margin-top:10px; text-shadow:0px 0px 5px rgba(0, 0, 0, 0.4);"><i style="font-size:9px;">created by </i> ${user}</p>
                        <p style="text-align:center; margin:0px; padding:5px;">
                            <button id="" class="btn btn-default btn-xs" style="color:darkorange; border:solid 1px darkorange; background-color:white; border-radius:2.5px; opacity:0.6;"><strong>V I E W</strong></button>
                        </p>
                    </div>
                </div>
                <p class="postHeaderfrstStr" id="${ids.strHeadId}" style="padding:7.5px; color:#1a1a1a; font-size:16.5px; font-weight:normal; margin:0px;">${data.head}</p>
                <p class="postDatefrst" id="${ids.strNameId}" style="padding:5px; font-size:11px; margin:0px;">Public <strong style="font-size:18px;">.</strong> <span class="${ids.strBgId}" style="color:skyblue; font-size:16px; cursor:pointer;">${data.name}</span> </p>
                <div style="width:100%; height:35px;">
                    <img id="${ids.opnRead}" src="img/read.png" alt="" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer; display:none;">
                    <img id="${ids.opnTied}" src="img/frnds.png" alt="" width="30px" height="25px" style="margin:5px; float:left; cursor:pointer; display:none;"><span id="${ids.tiesLSB}" style="float:left; font-size:11px;" class="postDatefrst"></span>
                    <img id="${ids.shrPstStr}" src="img/share.png" alt="" width="25px" height="25px" style="margin:5px; float:left; cursor:pointer;">
                    <p class="postDatefrst" style="float:right; margin:0px; padding:5px; ont-size:1px;"><i id="${ids.thrdsL}"></i></p>
                </div>
                <!-- string body area bellow -->
                <div class="postBodyCon" id="${ids.readBody}" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                    <div style="width:100%; height:170px; overflow-y:auto;">
                        <p class="postBodtxt" style="margin:5px; font-size:13px; white-space: pre;">${data.body}</p>
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
                <!-- share content area -->
                <div class="postBodyCon" id="${ids.shrPstBdStr}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                    <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <input id="${ids.shrPstSrchStr}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:2.5px; border:none; background-color:transparent;" class="srchCon postDatefrst">
                            <img src="img/searcha.png" width="15px" height="15px" style="float:right; margin:2.5px;">
                        </p>
                    </div>
                    <div style="width:100%; height:175px; overflow-y:auto;">
                        <span id="${ids.shrPstFlwStr}"></span>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="${ids.shrPstClsStr}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <div style="height:10px;"></div>
            </div>
            <div style="height:10px;"></div>
        </div>
          `};
        // tied body
        const tiedBody = () => {

        };

    /*
    --------------------
     FUNCTIONALITIES
    -------------------
    */

    // background effect
    const backEffct = (data, udata, tieType, strBgId) => {
        var thrAr = []; 
        thrAr[0] = {path: 'img/cbsm.png', class: 'none'}; 
        fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
            return responce.json();  
        }).then((thrdata)=>{
            if (thrdata) {
                for (let i = 0; i < thrdata.length; i++) {
                    if (thrdata[i].content_type == 'thread') {
                        if (thrdata[i].tied_to == data._id && thrdata[i].img.length > 0) {
                            //$(`#${strBgId}`).addClass('backStrEffct');
                            if (thrAr.length < 4) {
                                thrAr[thrAr.length] = thrdata[i].img[0];
                            }
                        }
                    }
                }
                if (thrAr.length > 1) {
                    pushBck(thrAr);
                }
            }
        });
        const pushBck = (thr) => {
            var scrl = 0;
            const getCurT = () => {
                if (scrl < thr.length) {
                    $(`#${strBgId}`).css('background-image', `url(${thr[scrl].path})`);
                    $(`#${strBgId}`).addClass(`${thr[scrl].class}`);
                    $(`#${strBgId}`).css('background-size', 'cover');
                    var targetDate = new Date();
                    targetDate.setSeconds(targetDate.getSeconds() + 2);
                    var countDownDate = targetDate.getTime();
                    var x = setInterval(function() {
                        //$(`#${strBgId}`).addClass('backStrEffct');
                        var now = new Date().getTime();
                        // Find the distance between now and the count down date
                        var distance = countDownDate - now;
                        // check duration to currentime
                       
                        if (distance < 0) {
                            //$(`#${strBgId}`).removeClass('backStrEffct');
                            if (scrl == thr.length) {
                                scrl = 0;
                            }else {
                                scrl+=1;
                            }
                            getCurT();
                            clearInterval(x);
                        }
                    }, 1000);
                }else {
                    scrl = 0;
                    getCurT();
                }
            }
            getCurT();
        };
    };

    // piv/pub look
    const pubPriv = (data, udata, tieType, user, strHeadId, strNameId, opnRead, opnTied) => {
        if (data.type == 'Private') {
            $(`#${strNameId}`).css('display', 'none');
        }else {
            $(`#${strHeadId}, #${opnRead}, #${opnTied}`).css('display', 'none');
        }
    };

   // open edtr
   const edtStrSm = (data, udata, edtId, clsedtId, edtBodyId, nw) => {
        // edit String
        const edtStrBod = (ids) => {
         return `
                  <div class="row edtStrBod">
                      <div id="${ids.edtStrBody}" class="col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;">
                        <div class="edt_jrn_alrt edtStrBod" style="width:100%; height:400px; border-radius:10px; margin-top:20px;">

                          <div id="" class="posterClosecon_edt" style="width:100%; height:30px; float:; margin-bottom:15px;">
                              <p style="margin:5px; color:orange; float:left;"> Edit string </p>
                              <span style="float:right; margin:5px; color:red; cursor:pointer;" id="${ids.edtClose}"><img src="img/can.png" width="14px" height="14px"></span>
                          </div>
     
                          <div style="width:100%; height:320px; overflow-y:auto;" id="">
     
                              <div id="ownStrEdtHd" style="width:100%; height:45px;">
                                  <div id="${ids.mainEdt}" style="margin:5px; width:120px; height:25px; float:left; cursor:pointer; display:none;">
                                      <p style="margin:0px; padding:5px; color:grey; text-align:center; font-size:13px;">Edit string</p>
                                  </div>
                                  <div id="${ids.addThrEdt}" style="margin:5px; width:120px; height:25px; float:left; cursor:pointer; display:none;">
                                      <p style="margin:0px; padding:5px; color:grey; text-align:center; font-size:13px;">Add thread</p>
                                  </div>
                              </div>
     
                              <div id="${ids.strBodEdt}" style="display:none;">
                                  <input maxlength="100" id="${ids.inEdtStr}" class="posterClosecon_edt" value="${data.head}" style="border:none; width:90%; margin:10px; background-color:transparent; color:grey;" placeholder="string head" />
                                  <br>
                                  <textarea id="${ids.txtEdtStr}" class="commentInput" style="height:60px; margin:10px; width:90%; border-radius:5px; color:grey;" placeholder="body"></textarea>
                              </div>
     
                              <div id="${ids.thrAddr}" style="display:none;">
                                  <input maxlength="100" id="${ids.thrHdAdd}" class="posterClosecon_edt" style="border:none; width:90%; margin:10px; background-color:transparent; color:darkorange;" placeholder="string head" />
                                  <br>
                                  <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                      <input type="file" name="file" id="postEdtStrImage" accept="image/*" multiple>
                                  </form>
                                  <form action="/video/videoUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                    <input type="file" name="file" id="postVideo-add-thr" accept="video/*">
                                  </form>
                                  <div id="binTypeChse" style="width:80%; margin:auto;">
                                      <div style="margin-top:10px; width:130px; margin:auto; ">
                                          <img src="img/imgtype.png" width="50px" height="60px" style="cursor:pointer; margin:5px; float:left;" id="${ids.hitImgAddThr}">
                                          <img src="img/vids.png" width="50px" height="60px" style="cursor:pointer; margin:5px; float:right;" id="${ids.hitVidAddThr}">
                                      </div>
                                  </div>
                                  <!-- img reviewer -->
                                    <div class="row scrlimgCon" id="scrlimgCon-addThr" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                        <div class="closeImgFlwCon" id="closeImgFlwCon-addThr" style="width:98%; height:25px; margin:auto;">
                                            <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="can_str_edtImg">cancel</p>
                                        </div>
                                        <br>
                                        <span id="flowHangerFltrd-addThr"></span>
                                    </div>
                                    <!-- vid reviewer -->
                                    <div class="row scrlimgCon" id="scrlvidCon-addThr" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                        <div class="closeImgFlwCon" id="closeVidFlwCon-addThr" style="width:98%; height:25px; margin:auto;">
                                                <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="can_str_edtVid">cancel</p>
                                        </div>
                                        <br>
                                        <span id="flowHangerFltrd-vid-addThr"></span>
                                    </div>
                              </div>
     
                          </div>
     
                          <div style="height:40px; width:100%; border-top:solid 1px orange;">
                              <p id="${ids.dnEdtStr}" style="text-align:center; margin:8px; display:none;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="">edit string</button> </p>
                              <p id="${ids.dnEdtThr}" style="text-align:center; margin:8px; display:none;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="">done</button> </p>
                          </div>
     
                        </div>
                      </div>
                  </div>
             `
         };
        if (data.type == 'Private') {
            if (data.user == udata._id) {
                    $(`#${edtId}, .${edtId}`).css('display', 'block');
            }else {
                if (data.tied.length > 0) {
                    for (let i = 0; i < data.tied.length; i++) {
                            if (data.tied[i] == udata._id) {
                                $(`#${edtId}, .${edtId}`).css('display', 'block');
                            }
                    }
                }
            }
        }else {
            $(`#${edtId}, .${edtId}`).css('display', 'block');
        }
       // init
       $(`#${edtId}, .${edtId}`).click(()=>{
            fetch('/strings/addThrNw', { method: 'post', body: JSON.stringify({ now: nw }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=>{
                return res.json();
            }).then((now)=>{
                if (now) {
                    dispEdtr();
                }
            });
       });

       // check values
        const prvOrpub = (mainEdt, addThrEdt, strBodEdt, thrAddr, dnEdtStr, dnEdtThr) => {
            if (data.type == 'Private') {
                if (data.user == udata._id) {
                    $(`#${mainEdt}, #${addThrEdt}, #${strBodEdt}, #${dnEdtStr}`).css('display', 'block');
                    $(`#${mainEdt}`).css('border-bottom', 'solid 1px skyblue');
                    $(`#${thrAddr}, #${dnEdtThr}`).css('display', 'none');
                }else {
                    $(`#${addThrEdt}, #${thrAddr}, #${dnEdtThr}`).css('display', 'block');
                    $(`#${addThrEdt}`).css('border-bottom', 'solid 1px skyblue');
                    $(`#${strBodEdt}, #${dnEdtStr}`).css('display', 'none');
                }
            }else {
                $(`#${addThrEdt}, #${thrAddr}, #${dnEdtThr}`).css('display', 'block');
                $(`#${mainEdt}, #${strBodEdt}, #${dnEdtStr}`).css('display', 'none');
                $(`#${addThrEdt}`).css('border-bottom', 'solid 1px skyblue');
            }

            // btns
            $(`#${mainEdt}`).click(()=>{
                $(`#${mainEdt}`).css('border-bottom', 'solid 1px skyblue');
                $(`#${addThrEdt}`).css('border-bottom', '');
                $(`#${thrAddr}, #${dnEdtThr}`).css('display', 'none');
                $(`#${strBodEdt}, #${dnEdtStr}`).fadeIn();
            });
            $(`#${addThrEdt}`).click(()=>{
                $(`#${addThrEdt}`).css('border-bottom', 'solid 1px skyblue');
                $(`#${mainEdt}`).css('border-bottom', '');
                $(`#${strBodEdt}, #${dnEdtStr}`).css('display', 'none');
                $(`#${thrAddr}, #${dnEdtThr}`).fadeIn();
            });

        };
        // bins
        const binContrl = (hitImgAddThr, hitVidAddThr) => {
            // img
            $(`#${hitImgAddThr}`).click(()=>{
                $('#postEdtStrImage').click();
            });
            $('#postEdtStrImage').change(function(){
                fetch('/strings/imgHang', { method: 'post', body: JSON.stringify({ value: $('#postEdtStrImage').length }), headers: { "Content-type" : "application/json; charset=utf-8" } });
            });
            // vid
            $(`#${hitVidAddThr}`).click(()=>{
                $('#postVideo-add-thr').click();
            });
            $('#postVideo-add-thr').change(function(){
                fetch('/strings/vidHang', { method: 'post', body: JSON.stringify({ value: $('#postVideo-add-thr').length }), headers: { "Content-type" : "application/json; charset=utf-8" } });
            });
        };
        // dones
        const doning = (dnEdtStr, dnEdtThr, inEdtStr, txtEdtStr, thrHdAdd) => {

            $(`#${dnEdtStr}`).click(()=>{
                if ($(`#${inEdtStr}`).val() !== '') {
                    fetch(`/strings/updateStr/${data._id}`, { method: 'post', body: JSON.stringify({ head: $(`#${inEdtStr}`).val(), body: $(`#${txtEdtStr}`).val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        if (data) {
                            location.reload();
                        }
                    });
                }else {

                }
            });

            // check binary values
            $(`#${dnEdtThr}`).click(()=>{
                // check img
                fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `imgHangerFltrd-add-thr${i}`;
                    }
                    var encount = [];
                    for (let i = 0; i < test; i++) {
                        var tter = testar[i];
                        encount[i] = {
                            path: $(`#${tter}`).attr('src'),
                            class: $(`#${tter}`).attr('class')
                        };
                    }
                    if (test > 0) {
                        var tpe = 'img';
                        pushDwn(test, encount, tpe);
                    }
                });
                // check vid
                fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `vidHangerFltrd-addThr${i}`;
                    }
                    var encount = [];
                    for (let i = 0; i < test; i++) {
                        var tter = testar[i];
                        encount[i] = {
                            path: $(`#${tter}`).attr('src'),
                            class: $(`#${tter}`).attr('class')
                        };
                    }
                    if (test > 0) {
                        var tpe = 'vid';
                        pushDwn(test, encount, tpe);
                    }
                });
            });

            const pushDwn = (test, encount, tpe) => {
                var tie = ''; var tieT = '';
                if (data.type == 'Public') {
                    tie = 'publicTie'; tieT = 'tied_public';
                }else {
                    tie = 'privateTie'; tieT = 'tied_private';
                }
                if (test > 0 && encount.length > 0) {
                    if (tpe == 'img') {
                        fetch(`/strings/${tie}`, { method: 'post', body: JSON.stringify({ type: `${tieT}`, content_type: 'thread', act:'img', tied_to: data._id, user: udata._id, head: $(`#${thrHdAdd}`).val(), img: encount, vid: [], date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json()
                        }).then((dataId)=>{
                            for (let i = 0; i < test; i++) {
                                $(`imgHangerFltrd-add-thr${i}`).remove();
                            }
                            fetch('/post/clrHanger', { method: 'get' });
                            location.reload();
                        });
                    }
                    if (tpe == 'vid') {
                        fetch(`/strings/${tie}`, { method: 'post', body: JSON.stringify({ type: `${tieT}`, content_type: 'thread', act:'vid', tied_to: data._id, user: udata._id, head: $(`#${thrHdAdd}`).val(), img: [], vid: encount, date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json()
                        }).then((dataId)=>{
                            for (let i = 0; i < test; i++) {
                                $(`vidHangerFltrd-thr${i}`).remove();
                            }
                            fetch('/video/clrHanger', { method: 'get' });
                            location.reload();
                        });
                    }
                }else {

                }
            };

        };
       // crt edt IDS
        const crtEdtStr = () => {
           return {
               // body funcs
               edtStrBody: 'edtStrBod_' + data._id,
               edtClose: 'clsEdtStr_' + data._id,
               // navs
               mainEdt: 'mainEdt_' + data._id,
               addThrEdt: 'addThrEdt_' + data._id,
               // bodies
               strBodEdt: 'strBodEdt_' + data._id,
               thrAddr: 'thrAddr_' + data._id,
               // inputs
               inEdtStr: 'inEdtStr_' + data._id,
               txtEdtStr: 'txtEdtStr_' + data._id,
               thrHdAdd: 'thrHdAdd_' + data._id,
               // binaries
               hitImgAddThr: 'hitImgAddThr_' + data._id,
               hitVidAddThr: 'hitVidAddThr_' + data._id,
               // dones
               dnEdtStr: 'dnEdtStr_' + data._id,
               dnEdtThr: 'dnEdtThr_' + data._id,
           }
        }
        // display edtStr
        const dispEdtr = () => {
            const ids = crtEdtStr();
            checkMode();
            
            $('#view-container, #container-one').css('filter', 'blur(5px)');
            $('#dropChat').prepend(edtStrBod(ids));
            checkMode();
            $(`#${ids.edtStrBody}`).css('display', 'block');
            var x = window.matchMedia("(min-width: 600px)")
            if (x.matches) {
            }
            prvOrpub(ids.mainEdt, ids.addThrEdt, ids.strBodEdt, ids.thrAddr, ids.dnEdtStr, ids.dnEdtThr);
            // binares
            binContrl(ids.hitImgAddThr, ids.hitVidAddThr);
            // dones
            doning(ids.dnEdtStr, ids.dnEdtThr, ids.inEdtStr, ids.txtEdtStr, ids.thrHdAdd);

            // cls btn
            $(`#${ids.edtClose}`).click(()=>{
                $(`#${ids.edtStrBody}`).remove();
                $('#view-container, #container-one').css('filter', '');
                $(`#${ids.edtStrBody}`).fadeOut();    
            });
            // cancel img + vid
            $('#can_str_edtImg').click(()=>{
                $('.mainCloneImgs, .allImgs_app').remove();
                $('#scrlimgCon-addThr').slideUp();
                $('#binTypeChse').slideDown();
            })
            // for vid
            $('#can_str_edtVid').click(()=>{
                $('.editHangVid, .allVids_aedt').remove();
                $('#scrlvidCon-addThr').slideUp();
                $('#binTypeChse').slideDown();
            })
        };
        // border-bottom:solid 1px skyblue;
    };

    // open bigBody
    // pass str
    var passStr = (data4, udata) => {

        fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
            return responce.json();  
        }).then((thrdata)=>{
            if (thrdata) {
                displayView(thrdata, data4, udata);
            }
              //$('#container-one').css('display', 'none');
              // $('#dropChat').after(ViewStr(data));
        });
        
    };
    const collectStr = () => {
        fetch('/strings/accssAtt', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((accDat)=>{
            if (accDat == 'No') {
                checkVal();
            }else {
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((udata) => {

                    fetch('/strings/accssSrch', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((mainDat)=>{
                        
                        fetch('/strings/getSpecStr', { method: 'post', body: JSON.stringify({ _id: mainDat }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json();
                        }).then((data4)=>{
                            passStr(data4, udata);
            
                        });
                        
                    });

                });
                fetch('/strings/accssAttNo', { method: 'get' });
                checkVal();
            }
        });
    };
    var checkVal = () => {
            var targetDate = new Date();
            targetDate.setSeconds(targetDate.getSeconds() + 1);
            var countDownDate = targetDate.getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                if (distance < 0) {
                    clearInterval(x);
                    collectStr();
                }
            });
    };
    checkVal();
    const openBgBdy = (data, udata, tieType, user, viewId) => {
        $(`#${viewId}, .${viewId}`).click(()=>{
            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
              return responce.json();  
            }).then((thrdata)=>{
                if (thrdata) {
                    displayView(thrdata, data, udata);
                }
                //$('#container-one').css('display', 'none');
                // $('#dropChat').after(ViewStr(data));
            });
        });
    };

    // read body
    const readBod = (data, udata, tieType, user, opnRead, readBody, clsRead) => {
        $(`#${opnRead}`).css('display', 'block');
        $(`#${opnRead}`).click(()=>{
            $(`#${readBody}`).slideDown();
        });
        $(`#${clsRead}`).click(()=>{
            $(`#${readBody}`).slideUp();
        });
    };

    // check friends tied
    const chckTied = (data, opnTied, clsTied, tiedBod, tiedFlow) => {
        $(`#${opnTied}`).css('display', 'block');
        $(`#${opnTied}`).click(()=>{
            $(`#${tiedBod}`).slideDown();
            $('.checkTiedBod').remove();
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
                                    <a style="text-decoration:none;" href="/${user}"><p class="postDatefrst" style="padding:5px; margin:5px;">${user}</p></a>
                                </div>
                                <div style="width:20%; height:100%; float:right;">
                                    
                                </div>
                            </div>
                        `);
                        checkMode();
                    }
                
                }

            });
        });
        $(`#${clsTied}`).click(()=>{
            $(`#${tiedBod}`).slideUp();
        });
    };

    const stringOpt = (data, udata, tieType, user, opnOpt, optBody, clsOpt) => {
        $(`#${opnOpt}`).click(()=>{
            $(`#${optBody}`).slideDown();
            /*if (data.type == 'Private') {
                if (data.user == udata._id) {
                    $()
                }else {

                }
            }else {

            }*/
        });
        // close
        $(`#${clsOpt}`).click(()=>{
            $(`#${optBody}`).slideUp();
        });
    };

    // del
    const delStr = (data, uin, tieType, user, delStrId, delStrBod, delStrY, delStrN) => {

        if (uin._id !== data.user) {
            $(`#${delStrId}`).css('display', 'none');
        }
        if (uin._id !== data.user && data.type == 'Public') {
            $(`#${delStrId}`).css('display', 'none');
        }

        // opn
        $(`#${delStrId}`).click(()=>{
            $(`#${delStrId}`).slideUp();
            $(`#${delStrBod}`).slideDown();
        });
        // cls
        $(`#${delStrN}`).click(()=>{
            $(`#${delStrBod}`).slideUp()
            $(`#${delStrId}`).slideDown()
        });
        // del
        $(`#${delStrY}`).click(()=>{

            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
                return responce.json();  
            }).then((thrdata)=>{

                for (let i = 0; i < thrdata.length; i++) {
                    if (thrdata[i].tied_to == data._id && thrdata[i].content_type == 'thread') {
                        delThis(thrdata[i]._id);
                    }                    
                }
                // del main str
                fetch(`/strings/deleteStr/${data._id}`, {
                    method : "delete"
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if (data.ok === 1) {
                        location.reload();
                    }
                });

            })

        });
        // del thrds
        const delThis = (thr) => {
            fetch(`/strings/deleteThr/${thr}`, {
                method : "delete"
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.ok === 1) {
                    
                }
            });
        };

    };

    // rep
    const repStr = (data, uin, tieType, user, repStrId, repStrConId, inApRepStr, abusRepStr, clsRepStr) => {

        if (uin._id == data.user) {
            $(`#${repStrId}`).css('display', 'none');
        }
        if (data.type == 'Public') {
            $(`#${repStrId}`).css('display', 'block');
        }

        // opn/cls
        $(`#${repStrId}`).click(()=>{
            $(`#${repStrId}`).slideUp();
            $(`#${repStrConId}`).slideDown();
        });
        $(`#${repStrConId}`).click(()=>{
            $(`#${repStrConId}`).slideUp();
            $(`#${repStrId}`).slideDown();
        });
        
        // snd inap
        $(`#${inApRepStr}`).click(()=>{
            var con = 'Inappropriate contents'; 
            pushRep(con);
        });
        // snd abus
        $(`#${abusRepStr}`).click(()=>{
            var con = 'Abusive contents'; 
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
                body: JSON.stringify({ content: con, type: 'String', from: uin._id, by: nme, string: data._id, date: [year, day, month, hour, minute]  }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                 return response.json();
            }).then((data)=>{
                if (data) {
                    alert('report sent');
                    $(`#${repStrConId}`).slideUp();
                    $(`#${repStrId}`).slideDown();
                }
            });
        
        }

    };

    // create ids
    const createIds = (id) => {
        return {
            // date
            strDate: 'strDate_' + id,
            // add contents
            edtId: 'edtId_' + id,
            edtBodyId: 'edtBodyId_' + id,
            clsedtId: 'clsedtId_' + id,
            // option section
            opnOpt: 'opnOpt_' + id,
            optBody: 'optBody_' + id,
            clsOpt: 'clsOpt_' + id,
            // background-
            strBgId: 'strBgId' + id,
            // ttl thrds
            thrdsL: `thrdsL_${id}`,
            // read
            opnRead: 'opnRead_' + id,
            readBody: 'readBody_' + id,
            clsRead: 'clsRead_' + id,
            // pub/priv
            strHeadId: 'strHeadId_' + id,
            strNameId: 'strNameId_' + id,
            // del str
            delStrId: 'delStrId_' + id, 
            delStrBod: 'delStrBod_' + id, 
            delStrY: 'delStrY_' + id, 
            delStrN: 'delStrN_' + id,
            // report
            repStrId: 'repStrId_' + id,
            repStrConId: 'repStrConId_' + id,
            inApRepStr: 'inApRepStr_' + id,
            abusRepStr: 'abusRepStr_' + id,
            clsRepStr: 'clsRepStr_' + id,
            // tied
            tiesLSB: `tiesLSB${id}`,
            opnTied: 'opnTied_' + id,
            clsTied: 'clsTied_' + id,
            tiedBod: 'tiedBod_' + id,
            tiedFlow: 'tiedFlow_' + id,
            // share ids
            shrPstStr: 'shrPstStr_' + id,
            shrPstBdStr: 'shrPstBdStr_' + id,
            shrPstSrchStr: 'shrPstSrchStr_' + id,
            shrPstFlwStr: 'shrPstFlwStr_' + id,
            shrPstClsStr: 'shrPstClsStr_' + id
        }
    };

    // display strings
    const displayStrings = (data, udata, tieType, users) => {
        const ids = createIds(data._id+tieType);
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
            checkMode();
            if (tieType == 'Friend') {
                var val = `${user} created a string`;
                $('#dropbox-strindex').prepend(privString(data, udata, user, val, fpath, ids));
            } else {
                var difH = '';
                if (tieType == 'Own') {
                    difH = 'You';    
                }
                if (tieType == 'Ex-own') {
                    difH = udata.user_name;
                }
                if (tieType == 'explore_str' && data.type == "Private") {
                    difH = `${data.tied.length} people`;
                }
                if (tieType == 'Own' || tieType == 'Ex-own') {
                    var val = `${difH} Created a string`;
                    if (data.type == 'Public') {
                        $('#dropbox-str, #dropbox-strindex').prepend(privString(data, udata, user, val, fpath, ids));
                    }else {
                        $('#dropbox-str, #dropbox-strindex, #dropbox-strex').prepend(privString(data, udata, user, val, fpath, ids));
                    }
                }else {
                    console.log(tieType);
                    if (tieType == 'explore_str') {
                        var val = `${difH} are tied to a string`;
                        $('#dropbox-strindexexp').prepend(privString(data, udata, user, val, fpath, ids)); 
                    } else {
                        var val = `${difH} are tied to a string`;
                        $('#dropbox-str, #dropbox-strex').prepend(privString(data, udata, user, val, fpath, ids));
                    }
                }
            }
            if (data.type == 'Private' && data.tied.length > 0) {
                chckTied(data, ids.opnTied, ids.clsTied, ids.tiedBod, ids.tiedFlow);
            }
            if (data.body !== '') {
                readBod(data, udata, tieType, user, ids.opnRead, ids.readBody, ids.clsRead);
            }
            if (data.type == 'Private') {
                if (data.tied.length > 0) {
                    $(`#${ids.tiesLSB}`).text(`${data.tied.length}`);
                }
            }
            // back-big-effect
            backEffct(data, udata, tieType, ids.strBgId);
            // date
            smartDate(data, ids.strDate);
            // pub/priv look
            pubPriv(data, udata, tieType, user, ids.strHeadId, ids.strNameId, ids.opnRead, ids.opnTied);
            // edt str
            var nw = 'sm';
            edtStrSm(data, udata, ids.edtId, ids.clsedtId, ids.edtBodyId, nw);
            // opt area
            stringOpt(data, udata, tieType, user, ids.opnOpt, ids.optBody, ids.clsOpt);
            // delete str
            delStr(data, udata, tieType, user, ids.delStrId, ids.delStrBod, ids.delStrY, ids.delStrN);
            // rep
            repStr(data, udata, tieType, user, ids.repStrId, ids.repStrConId, ids.inApRepStr, ids.abusRepStr, ids.clsRepStr);
            // share funcs
            var tg = 'shr_str';
            sharePst(data, udata, ids.shrPstStr, ids.shrPstBdStr, ids.shrPstSrchStr, ids.shrPstFlwStr, ids.shrPstClsStr, tg);
            // display view
            openBgBdy(data, udata, tieType, user, ids.strBgId);
    }
    // review disp str
    const displayStrReviews = (data, udata, tieType, type) => {
        const ids = createIds(data._id+'_review_con');
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
            fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((uin) => {
                if (type == 'tie_string') {
                    $('#revPresNote').text('You have been tied to a string');
                    $('#drp-like-tag-rev-bod').fadeIn();
                }
                if (type == 'shr_str') {
                    $('#revPresNote').text('shared you a string');
                    $('#drp-like-tag-rev-bod').fadeIn();
                }
                checkMode();
                if (tieType == 'Friend') {
                    var val = `${user} created a string`;
                    $('#droprev-lktg').prepend(privString(data, udata, user, val, fpath, ids));
                } else {
                    var difH = '';
                    if (uin._id == udata._id) {
                        difH = 'You';    
                    }else {
                        difH = udata.user_name;
                    }
                    if (tieType == 'Own') {
                        var val = `${difH} Created a string`;
                        if (data.type == 'Public') {
                            $('#droprev-lktg').prepend(privString(data, udata, user, val, fpath, ids));
                        }else {
                            $('#droprev-lktg').prepend(privString(data, udata, user, val, fpath, ids));
                        }
                    }else {
                        var val = `${difH} are tied to a string`;
                        //$('#droprev-lktg').prepend(privString(data, udata, user, val, fpath, ids));
                    }
                    if (data.type == 'Private' && data.tied.length > 0) {
                        chckTied(data, ids.opnTied, ids.clsTied, ids.tiedBod, ids.tiedFlow);
                    }
                    if (data.body !== '') {
                        readBod(data, udata, tieType, user, ids.opnRead, ids.readBody, ids.clsRead);
                    }
                }
                if (data.type == 'Private') {
                    if (data.tied.length > 0) {
                        $(`#${ids.tiesLSB}`).text(`${data.tied.length}`);
                    }
                }
                // back-big-effect
                backEffct(data, udata, tieType, ids.strBgId);
                // date
                smartDate(data, ids.strDate);
                // pub/priv look
                pubPriv(data, uin, tieType, user, ids.strHeadId, ids.strNameId, ids.opnRead, ids.opnTied);
                // edt str
                var nw = 'sm';
                edtStrSm(data, uin, ids.edtId, ids.clsedtId, ids.edtBodyId, nw);
                // opt area
                stringOpt(data, uin, tieType, user, ids.opnOpt, ids.optBody, ids.clsOpt);
                // delete str
                delStr(data, uin, tieType, user, ids.delStrId, ids.delStrBod, ids.delStrY, ids.delStrN);
                // rep
                repStr(data, uin, tieType, user, ids.repStrId, ids.repStrConId, ids.inApRepStr, ids.abusRepStr, ids.clsRepStr);
                // share funcs
                var tg = 'shr_str';
                sharePst(data, udata, ids.shrPstStr, ids.shrPstBdStr, ids.shrPstSrchStr, ids.shrPstFlwStr, ids.shrPstClsStr, tg);
                // display view
                openBgBdy(data, uin, tieType, user, ids.strBgId);
            });
        });
    };
        
        /**
     * ---------------------------------------
     * DISPLAY THREAD AS REFERENCE FROM STRING
     * ---------------------------------------
     */

     // thread body
    const viewThread = (thrdata, udata, fpath, user, ids) => {
        var path = ''; var clas = '';
        if (fpath.profile_pic == 'none') {
            path = 'img/profpic.png'; clas = 'none';
        }else {
            path = `${fpath.profile_pic.path}`; clas = `${fpath.profile_pic.class}`;
        }
        return `
        <div class="privStrBod" style="width:100%;">
            <p class="postDatefrst" style=" padding:8px; margin:0px; font-size:12px;"><a href="${user}" style="text-decoration:none;" class="postDatefrst"><span id="${ids.noteOne}"></span></a><i style="font-size:10px;"> attached a thread to string </i> <strong styel="font-size:30px;">. <span id="${ids.thrDate}"></span></strong></p>
            <div class="strHdBd" style="width:95%; margin:auto; border-radius:5px; margin-bottom:15px;">
                <!-- for general threads viewer -->
                <div id="strop" class="" style="width:100%; margin:auto; cursor:pointer; background-size:100% 100%; border-top-right-radius: 7.5px; border-top-left-radius: 7.5px;">
                    <img src="" alt="" width="100%" style="border-top-right-radius: 7.5px; border-top-left-radius: 7.5px; display:none;" id="${ids.images}">
                    <video src="" alt="" width="100%" style="border-top-right-radius: 7.5px; border-top-left-radius: 7.5px; display:none;" id="${ids.vidBod}"></video>
                </div>
                <!-- IMG CONTROLLER -->
                <div class="postInfoCon" id="${ids.imgThrCnt}" style="width:100%; height:45px; display:none;">
                    <div style="width:30%; height:100%; float:left;">
                        <img id="${ids.bckImg}" src="img/backa.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:left;">
                    </div>
                    <div style="width:40%; height:100%; float:left;">
                        <p style="text-align:center; margin:10px; color:darkorange;"> <span id="${ids.curntImg}" style="font-size:15px;"></span> <i class="postDatefrst" style="font-size:11px;">/<span id="${ids.imgLen}"></span></i> </p>
                    </div>
                    <div style="width:30%; height:100%; float:right;">
                        <img id="${ids.fwdImg}" src="img/backb.png" width="15px" height="35px" style="margin:5px; cursor:pointer; float:right;">
                    </div>
                </div>
                <!-- video controls -->
                <div id="${ids.vidCntrlDiv}" class="postInfoCon" style="height:30px; width:100%; display:none;">
                    <img id="${ids.vidPlay}" src="img/playn.png" width="17.5px" height="17.5px" style="margin:5px; float:left; cursor:pointer;">
                    <img id="${ids.vidPause}" src="img/pausen.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;">
                    <!-- <img id="${ids.vidStop}" src="img/stopy.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;"> -->
                    <img id="${ids.vidMute}" src="img/muten.png" width="15px" height="15px" style="margin:7.5px; float:right; cursor:pointer;">
                    <p style="float:right; margin:5px; font-size:13px;" class="postDatefrst"> <span id="${ids.vidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${ids.vidOrgT}" style="font-size:10px;"></span> </p>    
                </div>
                <p class="postHeaderfrstStr" style="padding:7.5px; font-size:16.5px; margin:0px; font-weight:normal;">${thrdata.head}</p>
                <div class="edtPstBd" id="${ids.thrOptBod}" style="width:100%; display:none;">
                    <div class="edtPstFlw" style="width:100%; height:30px;">
                        <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsThrOpt}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                    </div>
                    <!-- edt cons -->
                    <div id="${ids.edtThr}" class="edtPstFlw" style="width:100%; height:35px;">
                        <p class="postDatefrst" style="margin:8px; cursor:pointer;"> <img src="img/wada.png" width="12.5px" height="15px" style="margin-right:10px;"> Edit thread header</p>
                    </div>
                    <!-- delp cons -->
                    <div id="${ids.delThrOpn}" class="edtPstFlw" style="width:100%; height:35px;">
                        <p style="margin:8px; color:orangered; cursor:pointer;"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete thread</p>
                    </div>
                    <div id="${ids.delThrQ}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p class="postDatefrst" style="text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                        </div>
                        <div style="width:100%; height:30px;">
                            <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                                <p id="${ids.delThrY}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                            </div>
                            <div style="width:49%; float:left; height:100%; float:right;">
                                <p id="${ids.delThrN}" class="postDatefrst" style="text-align:center; margin:5px; cursor:pointer;">Cancel</p>
                            </div>
                        </div>
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
                <div style="width:100%; height:35px;">
                    <div id="" style="float:left; margin:5px;"><img id="${ids.likeThrSm}" src="img/like.png" alt="" width="20px" height="20px" style="cursor:pointer;"> <i id="${ids.likeByThrSm}" style="font-size:11px; color:darkorange;">${thrdata.likedBy.length}</i> </div>
                    <div id="" style="float:left;"><img id="${ids.comThrOpn}" src="img/comment.png" alt="" width="20px" height="20px" style="margin:5px; cursor:pointer;"> <i id="${ids.comThrLen}" style="font-size:11px; color:darkorange;">${thrdata.comments.length}</i> </div>
                    <img id="${ids.opnThrOpt}" src="img/opt.png" alt="" width="5px" height="20px" style="margin:5px; float:right; cursor: pointer; display:none;">
                    <img id="${ids.shrPst}" src="img/share.png" alt="" width="20px" height="20px" style="margin:5px; float:right; cursor:pointer;">
                </div>
                <!-- string body area bellow -->
                <div class="postBodyCon" id="" style="width:98%; margin:auto; height:200px; border-radius:5px; padding-bottom:5px; display:none;">
                    <div style="width:100%; height:170px; overflow-y:auto;">
                        <p class="postBodtxt" style="margin:5px; font-size:13px;"></p>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <!-- comment area bellow -->
                <div class="postBodyCon" id="${ids.comThrBod}" style="width:98%; margin:auto; height:290px; border-radius:5px; padding-bottom:5px; display:none;">
                    <div style="width:100%; height:200px; overflow-y:auto;">
                        <span id="${ids.comThrFlow}" class="comFlow"></span>
                    </div>
                    <div class="commentIn" style="height:50px;">
                        <textarea class="commentInput" placeholder="comment" style="margin:5px; width:70%; float:left; border-radius:5px; color:darkorange;" id="${ids.comThrIn}"></textarea>
                        <img src="img/send.png" width="35px" height="35px" style="float:left; margin:5px; cursor:pointer;" id="${ids.comThrBtn}">
                    </div>
                    <div class="closeRdCon" style="width:100%; height:40px; overflow-y:auto;">
                        <p id="${ids.closeComThr}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <!-- share content area -->
                <div class="postBodyCon" id="${ids.shrPstBd}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                    <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <input id="${ids.shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:2.5px; border:none; border-radius:7.5px; color:grey;" class="srchCon_tag">
                            <img src="img/searcha.png" width="15px" height="15px" style="float:right; margin:2.5px;">
                        </p>
                    </div>
                    <div style="width:100%; height:175px; overflow-y:auto;">
                        <br>
                        <span id="${ids.shrPstFlw}"></span>
                        <br>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                        <p id="${ids.shrPstCls}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <div style="height:10px;"></div>
            </div>
            <p style="margin: 5px; text-align: center;">
            <button class="btn btn-default btn-xs" style="background-color: transparent; border: solid 1px darkorange; color: orange;" id="${ids.viewStr}"> VIEW STRING </button>
            </p>
            <div style="height:10px;"></div>
        </div>
        `
    };

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

    // notes
    const thrStrNote = (thrdata, udata, user, noteOne) => {
        if (thrdata.user == udata._id) {
            $(`#${noteOne}`).text('You');
        }else {
            $(`#${noteOne}`).text(`${user}`);
        }
    };

    // view str
    const viewString = (thrdata, udata, user, viewStr) => {
            fetch('/strings/getSpecStr', { method: 'post', body: JSON.stringify({ _id: thrdata.tied_to }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                return responce.json()
            }).then((data4)=>{
               if (data4) {
                var tieType = '';
                //fetch following
                fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((dataFlwn) => { 
                    if (dataFlwn.following.length > 0) {
                        var fl = 'n';
                        for (let z = 0; z < dataFlwn.following.length; z++) {
                            if (dataFlwn.following[z].user == data4.user) {
                                tieType = 'Friend';
                                openBgBdy(data4, udata, tieType, user, viewStr);
                                fl = 'y';
                                break;
                            }
                        }
                        if (fl == 'n') {
                            myBig(data4, udata, tieType, user, viewStr);
                        }
                    }else {
                        myBig(data4, udata, tieType, user, viewStr);
                    }

                });

               }
            });
            const myBig = (data4, udata, tieType, user, viewStr) => {
                if (data4.user == udata._id) {
                    tieType = 'Own';
                    openBgBdy(data4, udata, tieType, user, viewStr);
                }else {
                    if (data4.type == 'Public') {
                        tieType = 'Tied';
                        openBgBdy(data4, udata, tieType, user, viewStr);
                    }else {
                        if (data4.tied.length > 0) {
                            for (let x = 0; x < data4.tied.length; x++) {
                                if (data4.tied[x] == udata._id) {
                                    var tieType = 'Tied';
                                    openBgBdy(data4, udata, tieType, user, viewStr);
                                }
                            }
                        }
                    }
                }
            };
    };

    /**
     * OPTIONS ND FUNCS
     */
    // open/close
    // OPT
    const thrOpt = (thrdata, udata, user, opnThrOpt, thrOptBod, clsThrOpt, delThrOpn, delThrQ, delThrY, delThrN, reprtId, repConId, inApRep, abusRep, clsRep) => {
        
        $(`#${opnThrOpt}`).css('display', 'block');
        if (thrdata.user == udata._id) {
            $(`#${reprtId}`).css('display', 'none');
        }else {
            $(`#${delThrOpn}`).css('display', 'none');
        }
        
        $(`#${opnThrOpt}`).click(()=>{
            $(`#${thrOptBod}`).slideDown();
        });
        $(`#${clsThrOpt}`).click(()=>{
            $(`#${thrOptBod}`).slideUp();
        });

        // delete thr
        $(`#${delThrOpn}`).click(()=>{
            $(`#${delThrOpn}`).slideUp();
            $(`#${delThrQ}`).slideDown();
        });
        $(`#${delThrN}`).click(()=>{
            $(`#${delThrQ}`).slideUp();
            $(`#${delThrOpn}`).slideDown();
        });
        $(`#${delThrY}`).click(()=>{
            // delete post method
            fetch(`/strings/deleteThr/${thrdata._id}`, {
                method : "delete"
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.ok === 1) {
                    getThrds(udata);
                }
            });
        });

        // REPORT
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
            if (thrdata.type == 'User') {
                nme = thrdata.user;
            }else {
                nme = thrdata.mail;
            }
            
            fetch('/post/reportJrn', {
                method: 'post',
                body: JSON.stringify({ content: con, type: 'Thread', from: udata._id, by: nme, thread: thrdata._id, date: [year, day, month, hour, minute]  }),
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

    /**
     * ----------------------------
     * LIKE FUNCS thr-xs
     * ----------------------------
     */
     // add/rem like && coms contents to noti
     const likeNoti = (data, udata, act, dateNow) => {
        if (act !== '' && data.user !== udata._id) {
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
                        noti_type: 'like_str',
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
                        noti_type: 'like_str',
                        post: data._id,
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
        
                        }
                    });
                }

                // COMMENTS
                // add comment
                if (act == 'comment_str') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'comment_str',
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
                        noti_type: 'comment_str',
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
    // check like contents
    const chkLikeThrXs = (thrdata, udata, user, likeThrSm, likeByThrSm) => {
        fetch( `/strings/${thrdata._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((accData)=>{
            if (accData.likedBy.length < 1) {
                $(`#${likeByThrSm}`).css('display', 'none');
            }else {
                $(`#${likeByThrSm}`).css('display', 'inline');
                for (let i = 0; i < accData.likedBy.length; i++) {
                    if (accData.likedBy[i] == udata._id || accData.likedBy[i].user == udata._id) {
                        $(`#${likeThrSm}`).attr('src', 'img/liked.png');
                        break;
                    }else {
                        $(`#${likeThrSm}`).attr('src', 'img/like.png');
                    }
                }
                $(`#${likeByThrSm}`).text(accData.likedBy.length);
            }
        });
    };
    // like btn
    const LikeThrXs = (thrdata, udata, user, likeThrSm, likeByThrSm) => {
        $(`#${likeThrSm}`).click(()=>{
            fetch( `/strings/${thrdata._id}`, { method: 'get' }).then((responce)=>{
                return responce.json()
            }).then((accData)=>{
                var act = '';
                var dateNow = [year, day, month, hour, minute, secnds];
                // functions
                let like = () => {
                    fetch(`/strings/${thrdata._id}`, {
                        method : "put",
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        },
                        body : JSON.stringify({ likedBy: {user: udata._id, date: dateNow} })
                    }).then((responce) => {
                        return responce.json();
                    }).then((LikeData)=>{
                        if (LikeData.ok === 1) {
                            $(`#${likeThrSm}`).attr('src', 'img/liked.png');
                            act = 'like';
                            likeNoti(thrdata, udata, act, dateNow);
                            chkLikeThrXs(thrdata, udata, user, likeThrSm, likeByThrSm);
                        }
                    });
                };
                // unlike
                let unlike = (pushData) => {
                    fetch(`/strings/unlike/${thrdata._id}`, { method: 'put', body: JSON.stringify({ likedBy: pushData }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                        return response.json();
                    }).then((deldata)=>{
                        if (deldata) {
                            $(`#${likeThrSm}`).attr('src', 'img/like.png');
                            act = 'unlike';
                            likeNoti(thrdata, udata, act, dateNow)
                            chkLikeThrXs(thrdata, udata, user, likeThrSm, likeByThrSm);
                        }
                    });
                };

                // conditions
                if (accData.likedBy.length > 0) {
                    let imply = '';
                    for (let i = 0; i < accData.likedBy.length; i++) {
                        if (accData.likedBy[i].user == udata._id || accData.likedBy[i] == udata._id) {
                            imply = 'liked';
                            unlike(accData.likedBy[i]);
                        }
                    }
                    if (imply == '') {
                        like();
                    }
                }else {
                    like();
                }

            });
        });
    };

    /**
     * ---------------------------
     * COMMENT FUNCTIONALITIES
     * ---------------------------
     */
    // comment bodies
    const comBodLyt = (coms, realN, cids, slc, dispMre) => { 
        var path = ''; var clas = '';
        if (realN.profile_pic == 'none') {
            path = 'img/profpic.png';
        }else {
            path = `${realN.profile_pic.path}`;
            clas = `${realN.profile_pic.class}`;
        }
        return  `
        <div id="${cids.comBodId}" class="commentBodySec" style="width:100%;">
            <div style="width:65%; margin:5px; box-shadow:0px 0px 5px -2px silver; border-radius:5px;">
                <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:#f9f9f9; border-bottom:solid 0.8px #f0f0f0;">
                    <div class="${clas}" style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                    <p style="font-size:12px; margin: 0px; padding:2px; float: left; color:grey;">${realN.user_name}</p>
                    <p style="font-size:10px; margin: 0px; padding:2px; float: right; color:silver;" id="${cids.dateFlwComThr}"></p>
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
            path = 'img/profpic.png';
        }else {
            path = `${realN.profile_pic.path}`;
            clas = `${realN.profile_pic.class}`;
        }
        return `
    <div id="${cids.comBodId}" class="commentBodySec" style="width:100%;">
        <div class="commentBodySec" style="width:65%; margin:5px; box-shadow:0px 0px 20px -10px black; border-radius:5px;">
            <div style="width:100%; height:22.5px; border-top-left-radius:5px; border-top-right-radius: 5px; background-color:#1a1a1a;">
                <div class="${clas}" style="float:left; width:15px; height:15px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin:3px;"></div>
                <p style="font-size:12px; margin: 0px; padding:2px; float: left; color:silver;">${realN.user_name}</p>
                <p style="font-size:10px; margin: 0px; padding:2px; float: right; color:grey;" id="${cids.dateFlwComThr}"></p>
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
    // check if cmntd
    const checkComsThr = (thrdata, udata, user, comThrOpn, comThrBod, comThrFlow, comThrIn, comThrBtn, closeComThr, comThrLen) => {
        if (thrdata.comments.length > 0) {
            $(`#${comThrLen}`).css('display', 'inline');
            for (let i = 0; i < thrdata.comments.length; i++) {
                if (thrdata.comments[i].user == udata._id) {
                    $(`#${comThrOpn}`).attr('src', 'img/commentd.png');
                }                
            }
        }else {
            $(`#${comThrLen}`).css('display', 'none');
        }
    };
    // refresh comment length and img
    const rfrshComs = (thrdata, udata, openCom, comntLen) => {
        fetch( `/strings/comments/${thrdata._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((comData)=>{
            // comments length
            $(`#${comntLen}`).text(comData.length);
            if (comData.length > 0) {
                $(`#${comntLen}`).css('display', 'inline-block');
                for (let i = 0; i < comData.length; i++) {
                    if (comData[i].user == udata._id) {
                        $(`#${openCom}`).attr('src', 'img/commentd.png');
                        break;
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
    // exctract comments
    const extComs = (thrdata, udata, user, comThrOpn, comThrFlow, comThrLen) => {
        
        // EXTRCTION
        fetch( `/strings/comments/${thrdata._id}`, { method: 'get' }).then((responce)=>{
            return responce.json()
        }).then((comData)=>{
            $('.commentBodySec').remove();
            // comments length
            $(`#${comThrLen}`).text(comData.length);
            if (comData.length > 0) {
                $(`#${comThrLen}`).css('display', 'inline');
                for (let i = 0; i < comData.length; i++) {
                    const len = i;
                    displayComs(comData[i], len);
                    // comments img
                    if (comData[i].user == udata._id) {
                        $(`#${comThrOpn}`).attr('src', 'img/commentd.png');
                    }
                    
                }
            }else {
                $(`#${comThrOpn}`).attr('src', 'img/comment.png');
                //$(`#${comThrOpn}`).css('display', 'none');
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
                var act = '';
                var dateNow = [year, day, month, hour, minute, secnds];
                fetch(`/strings/remComment/${thrdata._id}`, { method: 'put', body: JSON.stringify({ comments: coms }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((deldata)=>{
                    if (deldata) {
                        //rfrshComs(data, udata, openCom, comntLen);
                        act = 'del-coment';
                        if (thrdata.type == 'User') {
                            likeNoti(thrdata, udata, act, coms.date);
                        }
                        rfrshComs(thrdata, udata, comThrOpn, comThrLen);
                        $(`#${comBodId}`).remove();
                    }
                });
            });
        };
        // disp/not rem but
        const dispRem = (thrdata, coms, delId, comBodId) => {
            if (thrdata.user == udata._id && coms.user == udata._id) {
                $(`#${delId}`).css('display', 'block');
            }
            if (thrdata.user !== udata._id && coms.user == udata._id) {
                $(`#${delId}`).css('display', 'block');
            }
            if (thrdata.user !== udata._id && coms.user !== udata._id) {
                $(`#${delId}`).css('display', 'none');
            }
        };
        const comsIds = (len) => {
            return {
                dateFlwComThr: 'dateFlwComThr_' + len,
                delId: 'delComId_Thr' + len,
                comBodId: 'comBodId_Thr' + len,
                cmntSlc: 'cmntSlc_Thr' + len,
                mreCom: 'mreCom_Thr' + len
            }
        };
        const displayComs = (coms, len) => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                const cids = comsIds(len);
                var realN = '';
                fetch(`/strings/searchUsers`, { method: 'post', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({ user: coms.user }) }).then((response)=>{
                    return response.json();
                }).then((cdata)=>{
                    if (cdata) {
                        var curnS = 0;
                        if(mode === 'light') {
                            if (coms.comment.length>30) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                curnS = 100;
                                var dispMre = 'inline';
                                $(`#${comThrFlow}`).prepend(comBodLyt(coms, cdata, cids, slc, dispMre));
                            }else {
                                var slc = coms.comment;
                                curnS = slc.length;
                                var dispMre = 'none';
                                $(`#${comThrFlow}`).prepend(comBodLyt(coms, cdata, cids, slc, dispMre));
                            }
                        }else {
                            if (coms.comment.length>30) {
                                let str = coms.comment;
                                var slc = str.slice(0, 100);
                                curnS = 100;
                                var dispMre = 'inline';
                                $(`#${comThrFlow}`).prepend(comBodDrk(coms, cdata, cids, slc, dispMre));
                            }else {
                                var slc = coms.comment;
                                curnS = slc.length;
                                var dispMre = 'none';
                                $(`#${comThrFlow}`).prepend(comBodDrk(coms, cdata, cids, slc, dispMre));
                            }
                        }
                        smartDate(coms, cids.dateFlwComThr);
                        dispRem(thrdata, coms, cids.delId, cids.comBodId );
                        delCom(coms, cids.delId, cids.comBodId);
                        mreCom(thrdata, coms, curnS, cids.cmntSlc, cids.mreCom);
                        commentImg(thrdata, udata, comThrOpn, comThrLen);
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
    // opn cmnt
    const opnCom = (thrdata, udata, user, comThrOpn, comThrBod, comThrFlow, comThrIn, comThrBtn, closeComThr, comThrLen) => {
        // opn
        $(`#${comThrOpn}`).click(()=>{
            //$('.postBodyCon').slideUp();
            $(`.postBodyCon, .bodyComNoti`).slideUp();
            $(`#${comThrBod}`).slideDown();
            extComs(thrdata, udata, user, comThrOpn, comThrFlow, comThrLen);
        });
        // close
        $(`#${closeComThr}`).click(()=>{
            $(`#${comThrBod}`).slideUp();
        });

        // push comments 
        //const pushComment = () => {
            let pushCom = $(`#${comThrBtn}`);
            let comInput = $(`#${comThrIn}`);
            pushCom.click(function(){
                var act = '';
                var dateNow = [year, day, month, hour, minute, secnds];
                var mth = Math.random();var strn = mth.toString();var dif = strn.slice(2, mth.length);
                if (comInput.val() !== '') {
                        fetch(`/strings/comment/${thrdata._id}`, { method: 'put', headers: { "Content-type" : "application/json; charset=utf-8" }, body: JSON.stringify({
                             user: udata._id, comment: comInput.val(), date: [year, day, month, hour, minute, secnds], replies: [], id: dif
                        }) }).then((response)=>{
                            return response.json();
                        }).then((cdata)=>{
                            if (cdata.ok == 1) {
                                $(`#${comThrLen}`).css('display', 'inline-block');
                                act = 'comment_str';
                                likeNoti(thrdata, udata, act, dateNow);
                                extComs(thrdata, udata, user, comThrOpn, comThrFlow, comThrLen);
                                rfrshComs(thrdata, udata, comThrOpn, comThrLen);
                                //comsFuncs(data, udata, openCom, comBod, bodyId, comFlow, comntLen);
                            }
                        });
                }else {
                    $(`#${comThrIn}`).click();
                }
            });
        //};

    };

    // create ids
    const thrIds = (id) => {
        return {
            // thr notes
            noteOne: 'noteOne_' + id,
            // date
            thrDate: 'thrDate_' + id,
            // image funcs
            images: 'images_' + id,
            imgThrCnt: 'imgThrCnt_' + id,
            curntImg: 'curntImg_' + id,
            imgLen: 'imgLen_' + id,
            bckImg: 'bckImg_' + id,
            fwdImg: 'fwdImg_' + id,
            // vid funcs
            vidBod: 'vidBod_' + id,
            vidCntrlDiv: 'vidCntrlDiv_' + id,
            vidPlay: 'vidPlay_' + id,
            vidPause: 'vidPause_' + id,
            vidStop: 'vidStop_' + id,
            vidMute: 'vidMute_' + id,
            vidCrntT: 'vidCrntT_' + id,
            vidOrgT: 'vidOrgT_' + id,
            // like funcs
            likeThrSm: 'likeThrSm_' + id,
            likeByThrSm: 'likeByThrSm_' + id,
            // comment funcs
            comThrOpn: 'comThrOpn_' + id,
            comThrLen: 'comThrLen_' + id,
            comThrBod: 'comThrBod_' + id,
            comThrFlow: 'comThrFlow_' + id,
            comThrIn: 'comThrIn_' + id,
            comThrBtn: 'comThrBtn_' + id,
            closeComThr: 'closeComThr_' + id,
            // OPT
            opnThrOpt: 'opnThrOpt_' + id,
            thrOptBod: 'thrOptBod_' + id,
            clsThrOpt: 'clsThrOpt_' + id,
            // delete thread funcs
            delThrOpn: 'delThrOpn_' + id,
            delThrQ: 'delThrQ_' + id, 
            delThrY: 'delThrY_' + id,
            delThrN: 'delThrN_' + id,
            // report post func
            reprtId: 'reprtThrId_' + id,
            repConId: 'repConThrId_' + id,
            inApRep: 'inApRepThr_' + id,
            abusRep: 'abusRepThr_' + id,
            clsRep: 'clsRepThr_' + id,
            // View string
            viewStr: 'viewStr_' + id,
            // share ids
            shrPst: 'shrPst_xs_' + id,
            shrPstBd: 'shrPstBd_xs_' + id,
            shrPstSrch: 'shrPstSrch_xs_' + id,
            shrPstFlw: 'shrPstFlw_xs_' + id,
            shrPstCls: 'shrPstCls_xs_' + id,
            // edt 
            edtThr: 'edtThr_xs_' + id
        }
    };
    
     // display threads
    const dispThrStr = (thrdata, udata, users) => {
        const ids = thrIds(thrdata._id);
            var user = ''; var usr = ''; var fpath = '';
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    if (thrdata.user == users[i]._id) {
                        fpath = users[i];
                        usr = users[i].user_name;
                    }
                }
                if (usr.length > 15) {
                    user = usr.slice(0, 15)+'..';
                }else {
                    user = usr;
                }
            }
            checkMode();
            $('#dropbox-thr, #dropbox-thrindex').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            thrStrNote(thrdata, udata, user, ids.noteOne);
            // multi img effects
            if (thrdata.img.length > 0) {
                multiThrImg(thrdata, udata, user, ids.images, ids.imgThrCnt, ids.curntImg, ids.imgLen, ids.bckImg, ids.fwdImg);
            }
            // vids
            if (thrdata.vid.length > 0) {
                videoThr(thrdata, udata, user, ids.vidBod, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
            }
            // date
            smartDate(thrdata, ids.thrDate);
            // like funcs
            chkLikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            LikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            // comment funcs
            checkComsThr(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            opnCom(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            // OPT
            thrOpt(thrdata, udata, user, ids.opnThrOpt, ids.thrOptBod, ids.clsThrOpt, ids.delThrOpn, ids.delThrQ, ids.delThrY, ids.delThrN, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // view str
            viewString(thrdata, udata, user, ids.viewStr);
            // edt thr
            editThr(thrdata, udata, ids.edtThr);
            // share funcs
            var tg = 'tag_thr';
            sharePst(thrdata, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls, tg);
    };
     // display threads
     const dispExThrStr = (thrdata, udata, users) => {
        const ids = thrIds(thrdata._id);
            var user = ''; var usr = ''; var fpath = '';
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    if (thrdata.user == users[i]._id) {
                        fpath = users[i];
                        usr = users[i].user_name;
                    }
                }
                if (usr.length > 15) {
                    user = usr.slice(0, 15)+'..';
                }else {
                    user = usr;
                }
            }
            checkMode();
            $('#dropbox-threx').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            thrStrNote(thrdata, udata, user, ids.noteOne);
            // multi img effects
            if (thrdata.img.length > 0) {
                multiThrImg(thrdata, udata, user, ids.images, ids.imgThrCnt, ids.curntImg, ids.imgLen, ids.bckImg, ids.fwdImg);
            }
            // vids
            if (thrdata.vid.length > 0) {
                videoThr(thrdata, udata, user, ids.vidBod, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
            }
            // date
            smartDate(thrdata, ids.thrDate);
            // like funcs
            chkLikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            LikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            // comment funcs
            checkComsThr(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            opnCom(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            // OPT
            thrOpt(thrdata, udata, user, ids.opnThrOpt, ids.thrOptBod, ids.clsThrOpt, ids.delThrOpn, ids.delThrQ, ids.delThrY, ids.delThrN, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // view str
            viewString(thrdata, udata, user, ids.viewStr);
            // edt thr
            editThr(thrdata, udata, ids.edtThr);
            // share funcs
            var tg = 'tag_thr';
            sharePst(thrdata, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls, tg);
    };
    // display friend's thr
    const dispFrndThrStr = (thrdata, udata, users, wr) => {
        const ids = thrIds(thrdata._id+`_${wr}`);
            var user = ''; var usr = ''; var fpath = '';
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    if (thrdata.user == users[i]._id) {
                        fpath = users[i];
                        usr = users[i].user_name;
                    }
                }
                if (usr.length > 15) {
                    user = usr.slice(0, 15)+'..';
                }else {
                    user = usr;
                }
            }
            checkMode();
            if (wr == 'gen') {
                $('#dropbox-thrindex').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            }
            if (wr == 'exp') {
                $('#dropbox-strindexexp').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            }
            if (wr == 'exp_thr') {
                $('#exp_drpTHRA').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            }
            thrStrNote(thrdata, udata, user, ids.noteOne);
            // multi img effects
            if (thrdata.img.length > 0) {
                multiThrImg(thrdata, udata, user, ids.images, ids.imgThrCnt, ids.curntImg, ids.imgLen, ids.bckImg, ids.fwdImg);
            }
            // vids
            if (thrdata.vid.length > 0) {
                videoThr(thrdata, udata, user, ids.vidBod, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
            }
            // date
            smartDate(thrdata, ids.thrDate);
            // like funcs
            chkLikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            LikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            // comment funcs
            checkComsThr(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            opnCom(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            // OPT
            thrOpt(thrdata, udata, user, ids.opnThrOpt, ids.thrOptBod, ids.clsThrOpt, ids.delThrOpn, ids.delThrQ, ids.delThrY, ids.delThrN, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // view str
            viewString(thrdata, udata, user, ids.viewStr);
            // edt thr
            editThr(thrdata, udata, ids.edtThr);
            // share funcs
            var tg = 'shr_thr';
            sharePst(thrdata, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls, tg);
    };
    // display liked thr
    const displayReviews = (thrdata, udata, type) => {
        const ids = thrIds(thrdata._id);
        $('#container-one').fadeOut();
        // hidden or not
        $('#review-con').fadeIn();
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{
            var user = ''; var usr = ''; var fpath = '';
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    if (thrdata.user == users[i]._id) {
                        fpath = users[i];
                        usr = users[i].user_name;
                    }
                }
                if (usr.length > 15) {
                    user = usr.slice(0, 15)+'..';
                }else {
                    user = usr;
                }
            }
            checkMode();
            if (type == 'like_str') {
                $('#revPresNote').text('Thread liked');
                $('#drp-like-tag-rev-bod').fadeIn();
                $('#droprev-lktg').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            }
            if (type == 'shr_thr') {
                $('#revPresNote').text('Shared you a thread');
                $('#drp-like-tag-rev-bod').fadeIn();
                $('#droprev-lktg').prepend(viewThread(thrdata, udata, fpath, user, ids)); 
            }
            if (type == 'comment_str') {
                let cids = comIdsNoti(thrdata);
                $('#revPresNote').text('commented on your thread');
                $('#drp-like-tag-rev-bod').fadeIn();
                $('#droprev-lktg').append(comsBod(udata, cids.drpId, cids.bodyComId));
                $(`#${cids.bodyComId}`).after(`<p style="margin:5px; font-size:13px; color:grey;">thread :</p>`+viewThread(thrdata, udata, fpath, user, ids));
                fetch('/review/getCom', { method: 'get' }).then((response)=>{
                    return response.json();
                }).then((com)=>{
                    fetchSpecCom(com, thrdata);
                });
                const fetchSpecCom = (com, thrdata) => {
                    fetch( `/strings/comments/${thrdata._id}`, { method: 'get' }).then((responce)=>{
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
                        $(`#${cids.drpId}`).append(comBodLyt(com, user, slc, cids, dispMre));
                    }else {
                         $(`#${cids.drpId}`).prepend(comBodDrk(com, user, slc, cids, dispMre));
                    }
                };
            }
            thrStrNote(thrdata, udata, user, ids.noteOne);
            // multi img effects
            if (thrdata.img.length > 0) {
                multiThrImg(thrdata, udata, user, ids.images, ids.imgThrCnt, ids.curntImg, ids.imgLen, ids.bckImg, ids.fwdImg);
            }
            // vids
            if (thrdata.vid.length > 0) {
                videoThr(thrdata, udata, user, ids.vidBod, ids.vidCntrlDiv, ids.vidPlay, ids.vidPause, ids.vidStop, ids.vidMute, ids.vidCrntT, ids.vidOrgT);
            }
            // date
            smartDate(thrdata, ids.thrDate);
            // like funcs
            chkLikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            LikeThrXs(thrdata, udata, user, ids.likeThrSm, ids.likeByThrSm);
            // comment funcs
            checkComsThr(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            opnCom(thrdata, udata, user, ids.comThrOpn, ids.comThrBod, ids.comThrFlow, ids.comThrIn, ids.comThrBtn, ids.closeComThr, ids.comThrLen);
            // OPT
            thrOpt(thrdata, udata, user, ids.opnThrOpt, ids.thrOptBod, ids.clsThrOpt, ids.delThrOpn, ids.delThrQ, ids.delThrY, ids.delThrN, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep);
            // view str
            viewString(thrdata, udata, user, ids.viewStr);
            // edt thr
            editThr(thrdata, udata, ids.edtThr);
            // share funcs
            var tg = 'tag_thr';
            sharePst(thrdata, udata, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls, tg);
        });
    };

    // VIEW BIG-BODY AND CONTENTS
    //-----------------------------
    // body
    const ViewStr = (data, user, path, clss, ids) => {

        return `
        <div class="row" id="view-container">
          <!-- 
            bellow contains the flow contents for strings
            __________________________________________
           -->
          <div class="col-md-12 col-lg-12 col-xs-12 edtPstBd" id="strVNB" style="height:35px; position: fixed; z-index:4;">
            <div class="row">
              <div class="col-lg-6 col-xs-6">
                <p style="font-size: 20px; color:orangered; cursor: pointer;" id="closeStrVw"><img src="img/can.png" width="15px" height="15px"></p>
              </div>
              <div class="col-lg-6 col-xs-6">
                <p style="margin:0px; padding:5px; float:right; color:grey;">${data.type} string</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12 col-xs-12 strContntHandlr" id="strContntHandlr" style="height:100%; margin-top:35px;">
            <div class="row" style="height:100%;">
  
              <!--
                ------------------------
                thread flow area
                ------------------------
               -->
              <div class="col-md-7 col-lg-7 col-xs-12 strFlowDiv" style="overflow-y: auto; height:94%;">

                <div class="row">

                    <!-- crtn info -->
                    <div class="col-lg-7 col-xs-8" id="str_info_con" style="margin-bottom:10px; margin-top:10px;">
                        <div style="width:97.5%; margin:auto; height:200px; border-radius:10px;" class="inStrUflow">
                            <div style="width:100%; height:90px;">
                                <br>
                                <div class="${clss}" style="width:75px; height:75px; margin:auto; margin-top:-10px; background-image:url(${path}); background-size:100% 100%; border-radius:100%;"></div>
                            </div>
                            <div style="width:100%; height:30px;">
                                <a href="/${user}" style="text-decoration:none;"><p style="color:grey; margin:0px; padding:5px; text-align:center;">created by <span class="postBodtxt">${user}</span></p></a>
                            </div>
                            <div style="width:100%; height:80px;">
                                <div style="width:95%; margin:auto; margin-top:3px; height:55px; border-radius:5px; overflow-y:auto;" class="edtPstBd">
                                    <p style="font-size:16.5px; margin:0px; margin-left:3px; padding:5px;" class="postBodtxt">${data.head}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- crtn info -->
                    <div class="col-xs-4" id="show_add_thr_XS" style="margin-bottom:5px; margin-top:5px;">
                        <div style="width:100%; height:80px;">
                            <div class="${ids.addConBut}" style="width:60px; height:60px; margin:auto; margin-top:70px; background-image:url(img/addPlaylists.png); background-size:100% 100%; opacity:0.8;"></div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-xs-12" style="margin-bottom:10px; margin-top:10px;">
                        <div style="width:97.5%; margin:auto; border-radius:10px;" class="inStrUflow">
                            <div id="show_add_thr_LG" style="width:100%; height:80px;">
                                <div style="width:90%; margin:auto; height:100%;" class="vewStrTop">
                                    <br>
                                    <div id="${ids.addConBut}" style="width:60px; height:60px; margin:auto; margin-top:-10px; background-image:url(img/addPlaylists.png); background-size:100% 100%; opacity:0.8; cursor:pointer;"></div>
                                </div>
                            </div>
                            <div style="width:100%; height:55px;">
                                <div style="width:90%; margin:auto; height:100%;" class="vewStrTop">
                                    <br>
                                    <p style="text-align:center; margin:0px; padding:2px; margin-top:-5px;">
                                        <img src="img/read.png" width="30px" height="30px" style="margin-right:5px; cursor:pointer;" id="${ids.readB}">
                                        <img src="img/frnds.png" width="39.5px" height="30px" style="margin-left:5px; cursor:pointer;" id="${ids.tiesB}"> <span style="font-size:13px; margin:0px; padding:3px; color:grey;" id="${ids.tiesL}"></span>
                                        <img src="img/share.png" width="30px" height="30px" id="${ids.share}" style="margin-left:5px; cursor:pointer;">
                                    </p>
                                </div>
                            </div>
                            <div style="width:100%; height:65px;">
                                <p style="text-align:center; margin:0px; padding:5px; font-size:30px;" class="postBodtxt"> <span id="bigStrVTN"></span> <span style="font-weight:lighter; font-size:20px; color:grey;">threads</span> </p>
                            </div>
                        </div>
                    </div>

                    <br>
                </div>

                <!--<div class="" style="width:100%; height:120px;">
  
                  <div style="margin: auto; width: 100px; height:100px; margin-top: 20px;">
                    <div class="${clss}" style="width:45px; height: 45px; margin: auto; border-radius:100%; background-image:url(${path}); background-size:cover;">
                    </div>
                    <p style="margin: 0px; padding:5px; color:grey; font-size: 10px; text-align: center;">created by</p>
                    <a href="/${user}" style="text-deocration:none;"><p style="margin: 0px; padding:5px; color:skyblue; font-size: 11px; text-align: center;">${user}</p></a>
                  </div>
  
                </div>
  
                <div id="tagBdyId" class="tagedToStrngUsrs" style="width:100%; display:none;">
                    <br>
                  <div style="width:100%;">
                    <div class="row">
  
                      <div class="col-md-1"></div>
                      <div class="col-md-10 col-xs-12">
                        <div class="inStrUflow" style="width: 100%; height: 160px; border-radius: 8px; overflow-y: auto;">
                            <span id="${ids.dispTies}"></span>
                        </div>
                      </div>
                      <div class="col-md-1"></div>
  
                    </div>
                  </div>
                  <br>
                </div>-->
  
                <!-- acquainted area -->
                <div class="bedrBotStr" id="acqntdId" style="width:100%; display:none;">
                  <p style="color:grey; font-size:12.5px; padding:8px; margin:0px;"> <span id="${ids.acqNote}"></span> threads </p>
  
                  <div class="row">
                    
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.acqAppD1}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.acqAppD2}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.acqAppD3}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.acqAppD4}"></span>
                        </div>
                    </div>
  
                  </div>
                  
                  <br>
                </div>
  
                <!-- rest of the flow area -->
                <div class="row bedrBotStr">
                  <br>

                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.prepAllD1}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.prepAllD2}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.prepAllD3}"></span>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-3">
                        <div class="row">
                            <span id="${ids.prepAllD4}"></span>
                        </div>
                    </div>
  
                  <br>
                </div>
  
              </div>
  
              <!-- thread tapped area
              -----------------------------------
              -->
              <div class="col-md-5 col-lg-5 col-xs-12 strThrdVwr" style="height:94%; overflow-y:auto; display:none;">
                
                <!-- tap str and disp -->
                <div id="tapImgDisp" style="width:150px; height:300px; margin:auto; margin-top:50px; margin-bottom:20px;">
                    <p id="" style="text-align: center; color: silver; font-size: 13px; margin: 0px; padding:5px;">Tap thread to view</p>
                    <img src="img/tapImg.png" alt="" width="100%" height="270px" style="opacity:0.35;">
                </div>
  
              </div>

            </div>
          </div>
  
        </div>
        `
    };
    // if tagged to private string
    const tagedTo = (user) => {
        return `
        <div class="col-md-4 col-xs-6" style="margin-top: 15px;">
            <div class="tiedUBod" style="width:100%; height:125px; border-radius:5px;">
                <div style="width:75px; height: 85px; margin: auto; padding-top: 10px; border-radius:100%;">
                    <img src="img/profpic.png" alt="" width="100%" height="100%" style="border-radius:100%;">
                </div>
                <a href="/${user}" style="text-decoration:none;"><p style="margin: 0px; padding:5px; color:skyblue; font-size: 13px; text-align: center;">${user}</p></a>
            </div>
        </div>
        `
    };

    /* 
    ----------------------------------
    THREADS AND VIEW FUNCTIONALITIES
    ----------------------------------
    */
    // CHECKS BELLOW 
    //-----------------
    // check if somebody was tagged
    const checkTg = (thrdata, data, udata, dispTies) => {
        if (data.type == 'Private') {
            if (data.tied.length > 0) {
                $(`#tagBdyId`).css('display', 'block');
                // check if users tied is greater than 0
                var user = '';
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((data3)=>{
                for (let i = 0; i < data.tied.length; i++) {
                        if (data.tied.length > 0) {
                            if (data3) {
                                for (let z = 0; z < data3.length; z++) {
                                    if (data3[z]._id == data.tied[i]) {
                                        user = data3[z].user_name;
                                    }
                                }
                                $(`#${dispTies}`).after(tagedTo(user));
                            }
                        }
                    }
                });
            }else {
                $(`#tagBdyId, #acqntdId`).css('display', 'none');
            }
        }
    };

    // threads prependers
    const prependers = (thrdata, data, udata, dropsAll, dropsAcq, acqNote) => {
        for (let i = 0; i < thrdata.length; i++) {
            if (thrdata[i].tied_to == data._id) {
                displayThreads(thrdata[i], data, udata, dropsAll, dropsAcq, acqNote)
            }
        }
    };

    // activity funcs
    const actvtArea = (thrdata, data, udata, ids) => {
        if (data.type == 'Private') {
            $('#strActvtCon').css('display', 'block');
            if (data.body !== "") {
                $(`#${ids.readB}`).fadeIn();
            }else {
                $(`#${ids.readB}`).css('display', 'none');
            }
            if (data.tied.length > 0) {
                $(`#${ids.tiesL}`).text(data.tied.length);
            }else {
                $(`#${ids.tiesL}, #${ids.tiesB}`).fadeOut();
            }
        }else {
            $(`#${ids.readB}, #${ids.tiesB}`).fadeOut();
        }
    };

    // dataInStr
    const dataInStr = (thrdata, data, udata, ids) => {

        // str info opt body
        // --------
        const strOp = (pIds, t) => {
            var info = ''; var infT = '';
            if (t == 'read') {
                info = data.body; infT = 'string body';
            } 
            if (t == 'ties') {
                infT = 'users ties to string';
            }
            if (t == 'tag') {
                infT = 'tag friends';
            }
            return `
            <div class="row">
                <div class="col-xs-12 col-lg-12 prevCons" id="${pIds.bodyI}" style="position:fixed; z-index:5; height:100%; display:none;">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4 col-xs-12">
                            <br>
                            <div class="srchCon_tag" style="width:100%; height:350px; margin-top:-5px; background-color:white; border-radius:7.5px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3);">
                                <div style="width:100%; height:40px;">
                                    <p style="text-align:center; margin:0px; padding:5px;"> <img src="img/can.png" width="15px" height="15px" style="cursor:pointer;" id="${pIds.clsCon}"> </p>
                                </div>
                                <div style="width:100%; height:270px;">
                                    <div id="${pIds.TRbod}" class="chptrsCr" style="width:97.5%; height:100%; margin:auto; border-radius:5px; overflow-y:auto; display:none;">
                                        <p id="${pIds.strIn}" style="margin:1px; padding:5px; white-space:pre; display:none; white-space: pre;" class="postHeaderfrst">${info}</p>
                                        <span id="${pIds.TiedDr}"></span>
                                        <br>
                                    </div>
                                    <div id="${pIds.tagCon}" class="chptrsCr" style="width:97.5%; height:100%; margin:auto; border-radius:5px; display:none;">
                                        <div style="width:100%; height:40px;" class="vewStrTop">
                                            <input id="${pIds.tagIn}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="padding:5px; float:left; width:80%; height:27.5px; margin:5px; border:none; border-radius:15px; color:grey;" class="srchCon_tag">
                                            <img src="img/searcheda.png" width="25px" height="25px" style="float:right; margin:5px;">
                                        </div>
                                        <div style="width:100%; height:210px; overflow-y:auto;">
                                            <span id="${pIds.tagFlw}"></span>
                                            <br>
                                        </div>
                                    </div>
                                </div>
                                <div style="width:100%; height:40px;">
                                    <p style="text-align:center; margin:0px; padding:5px; font-size:18px; color:grey;">${infT}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4"></div>
                    </div>
                </div>
            </div>
            `
        }
        const strVIMDFuncs = (pIds, t) => {
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
                        $(`#${pIds.TiedDr}`).prepend(`
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
        }
        const shrVIFuncs = (pIds) => {
                console.log('e tellers');
            $(`#${pIds.tagIn}`).on('input', function(key){
                var value = $(this).val();
                $(this).val(value.replace(/ /g, '_'));
            });
            
            // modes
            const chkModeShr = () => {
                fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                    if(mode === 'light') {
                        $('.shrPstBod').css('border', 'solid 1px #dddddd');
                        $('.shrPstBod').css('background-color', 'white');
                    }else {
                        $('.shrPstBod').css('border', 'solid 1px #404040');
                        $('.shrPstBod').css('background-color', '#1a1a1a');
                    }
                });
            };

            // value search
            $(`#${pIds.tagIn}`).keyup(()=>{
                console.log('union tellers');
                $('.shrPstBod').remove();
                if ($(`#${pIds.tagIn}`).val() == '') {
                    flowknwn();
                }else {
                    flowFrndsrch($(`#${pIds.tagIn}`).val());
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
                            chkModeShr();
                            passMe(usr, genUsrr);
                        }
                    });
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
                if (udata.following.length > 0 && udata.chats.length > 0) {
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
                                    chkModeShr()
                                    passMe(usr, genUsrr);
                                });
        
                            }
        
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
                $(`#${pIds.tagFlw}`).prepend(shrBd(user, path, ids));
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
                        if (genUsr.notifications[i].noti_type == 'shr_thr' && genUsr.notifications[i].post == data._id && genUsr.notifications[i].user == udata._id) {
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
                    var dateNow = [year, day, month, hour, minute, secnds];
                    var tg = 'shr_str';
                    tagNoti(genUsr, data, udata, tg, dateNow);
                    flowFrndsrch($(`#${pIds.tagIn}`).val());
                });
    
            };
            
        }
        const createStrinCon = () => {
            return {
                bodyI: `${data._id}_stropnCon_${udata._id}bodyI`,
                clsCon: `${data._id}_stropnCon_${udata._id}clsCon`,
                TRbod: `${data._id}_stropnCon_${udata._id}TRbod`,
                strIn: `${data._id}_stropnCon_${udata._id}strIn`,
                TiedDr: `${data._id}_stropnCon_${udata._id}TiedDr`,
                //m tag
                tagIn: `${data._id}_stropnCon_${udata._id}tagIn`,
                tagCon: `${data._id}_stropnCon_${udata._id}tagCon`,
                tagFlw: `${data._id}_stropnCon_${udata._id}tagFlw`,
            }
        }
        const dropStrBi = (t) => {
            const pIds = createStrinCon();
            $('#view-container').css('filter', 'blur(5px)');
            $('#dropChat').prepend(strOp(pIds, t));
            checkMode();
            if (t == 'ties' || t == 'read') {
                $(`#${pIds.TRbod}`).fadeIn();
                if (t == 'read') {
                    $(`#${pIds.strIn}`).fadeIn();
                }
            } else {
                $(`#${pIds.tagCon}`).fadeIn();
            }
            $(`#${pIds.bodyI}`).fadeIn();
            const vrtlBtns = {
                
            }
            // cls
            $(`#${pIds.clsCon}`).click(()=>{
                $('.prevCons').fadeOut();    
                $('#view-container').css('filter', '');
                $('.prevCons').remove();    
            });
            if (t == 'tag') {
                shrVIFuncs(pIds);
            }
            // funcs
            if (t == 'ties') {
                strVIMDFuncs(pIds, t);
            }
        }

        // BTNS
        // ----
        $(`#${ids.readB}`).click(()=>{
            const t = 'read';
            dropStrBi(t);
        });
        $(`#${ids.tiesB}`).click(()=>{
            const t = 'ties';
            dropStrBi(t);
        });
        $(`#${ids.share}`).click(()=>{
            const t = 'tag';
            dropStrBi(t);
        });
    }

    // add contents
    const addConStr = (thrdata, data, udata, addConBut, edtBody, edtClose) => {
        var x = window.matchMedia("(max-width: 600px)")
        if (data.type == "Public") {
            //$(`#${addConBut}`).css('display', 'block');
            $(`#str_info_con`).css('display', 'none');
            $(`#show_add_thr_XS`).css('display', 'none');
            $(`#show_add_thr_LG`).fadeIn();
        }else {
            if (data.user == udata._id) {
                if (x.matches) {
                    $(`#show_add_thr_LG`).css('display', 'none');
                    $(`#show_add_thr_XS`).fadeIn();
                } else {
                    $(`#show_add_thr_XS`).css('display', 'none');
                    $(`#show_add_thr_LG`).fadeIn();
                }
                //$(`#${addConBut}`).css('display', 'block');
            }else {
                var check = '';
                for (let i = 0; i < data.tied.length; i++) {
                    if (data.tied[i] == udata._id) {
                        check = 'some';
                        if (x.matches) {
                            $(`#show_add_thr_LG`).css('display', 'none');
                            $(`#show_add_thr_XS`).fadeIn();
                        } else {
                            $(`#show_add_thr_XS`).css('display', 'none');
                            $(`#show_add_thr_LG`).fadeIn();
                        }
                        //$(`#${addConBut}`).css('display', 'block');
                    }
                }
                if (check == '') {
                    $(`#${addConBut}, .${addConBut}`).css('display', 'none');
                }
            }
        }
        var nw = 'bg';
        edtStrSm(data, udata, addConBut, edtClose, edtBody, nw);
    };

    // close string view
    const closeStrVws = () => {
        $('#closeStrVw').click(()=>{
            $('#container-one').fadeIn();
            $('#view-container').remove();
        });
        $('#closeThr').click(()=>{
            $('.strFlowDiv').css('display', 'block'); 
            $('.strThrdVwr').css('display', 'none'); 
        });
    };

    // thread ids
    const viewIds = (data, thrdata) => {
        return {
            // str top info
            addConBut: 'addConBut_' + data._id,
            // thrd head & img
            // ties
            dispTies: 'dispTies_' + data._id,
            tiesB: `tiesB_${data._id}`,
            tiesL: `tiesL_${data._id}`,
            //
            readB: `readB_${data._id}`,
            // share
            share: `share_${data._id}`,
            // prependers
            prepAllD1: 'prepAllD1_' + data._id,
            prepAllD2: 'prepAllD2_' + data._id,
            prepAllD3: 'prepAllD3_' + data._id,
            prepAllD4: 'prepAllD4_' + data._id,
            // acquianted
            acqAppD1: 'acqAppD1_' + data._id,
            acqAppD2: 'acqAppD2_' + data._id,
            acqAppD3: 'acqAppD3_' + data._id,
            acqAppD4: 'acqAppD4_' + data._id,
            acqNote: 'acqNote_' + data._id,
            // for str editor
            edtBody: 'edtBody_' + data._id,
            edtClose: 'edtClose_' + data._id
        }
    };

    // display view
    const displayView = (thrdata, data, udata) => {
        const ids = viewIds(data, thrdata);
        acqTDNo = 1; allTDNo = 1;
        var user = '';
        var path = ''; var clss = '';
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data3)=>{ 
            if (data3) {
                for (let i = 0; i < data3.length; i++) {
                    if (data3[i]._id == data.user) {
                        user = data3[i].user_name;
                        if (data3[i].profile_pic == 'none') {
                            path = 'img/profpic.png';
                        }else {
                            path = `${data3[i].profile_pic.path}`;
                            clss = `${data3[i].profile_pic.class}`;
                        }
                    }
                }
                checkMode();
                $('#container-one').fadeOut(100);
                $('#dropChat').after(ViewStr(data, user, path, clss, ids));
                var x = window.matchMedia("(max-width: 600px)")
                if (x.matches) {
                    $('.strThrdVwr').css('position', 'fixed');
                    $('.strThrdVwr').css('z-index', '5');
                    $('.strThrdVwr').css('height', '100%');
                    fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                        if(mode == 'light') {
                            $('.strThrdVwr').css('background-color', 'white');
                        }else {
                            $('.strThrdVwr').css('background-color', '#333333');
                        }
                    });                    
                }else {
                    $('.strThrdVwr').fadeIn();                
                }
    
                // check if users tied is greater than 0
                checkTg(thrdata, data, udata, ids.dispTies);
                // prepend threads
                var dropsAcq = {
                    one: ids.acqAppD1,
                    two: ids.acqAppD2,
                    three: ids.acqAppD3,
                    four: ids.acqAppD4,
                };
                var dropsAll = {
                    one: ids.prepAllD1,
                    two: ids.prepAllD2,
                    three: ids.prepAllD3,
                    four: ids.prepAllD4,
                };
                prependers(thrdata, data, udata, dropsAll, dropsAcq, ids.acqNote);
                // add button/ func
                addConStr(thrdata, data, udata, ids.addConBut, ids.edtBody, ids.edtClose);
                // activity area funcs
                actvtArea(thrdata, data, udata, ids);
                //alert('here');
                dataInStr(thrdata, data, udata, ids);
                // close str
                closeStrVws();
                fetch('/strings/getThreads', { method: 'get'}).then((response)=>{
                    return response.json();
                }).then((psts)=>{
                    var nm = 0;
                    for (let i = 0; i < psts.length; i++) {
                        if (psts[i].content_type == 'thread' && psts[i].tied_to == data._id) {
                            nm++;
                        }
                    }
                    magicNumbers('bigStrVTN', nm);
                });       
            }
        });
    };
    
    // thread body nature
    const thread = (thrdata, secUser, ids) => {
        var thrH = thrdata.head;
        if (thrdata.head.length > 30) {
            thrH = `${thrdata.head.slice(0, 70)}..`   
        }
        return `
        <div class="col-lg-12 col-xs-12">
            <div class="thrdBod" style="border-radius: 5px; margin-bottom: 20px; cursor: pointer; width:100%;">
                <div id="${ids.thrdImgId}" style="width:100%; height:160px; border-radius: 5px; background-size: cover;">
                    <br>
                    <img id="${ids.multImgId}" src="img/multiimg.png" alt="" width="30px" height="30px" style="bottom: 0; right: 0; margin-top:100px; margin-left:10px; opacity: 0.8; display:none;">
                </div>
                <div id="${ids.thrdVid}" style="width:100%; height:100%; border-radius: 5px; background-size: 100% 100%; display:none;">
                    <video id="${ids.thrVidSrc}" style="width:100%; height:160px; border-radius:5px;">
                        <br>
                    </video>
                    <!--<img  src="img/playy.png" alt="" width="30px" height="30px" style="bottom: 0; right: 0; margin-top:-80px; margin-left:10px; opacity: 0.8;">-->
                </div>
                <div class="vewStrTop" style="width:95%; margin:auto;">
                    <a href="/${secUser}" style="text-decoration:none;"><p style="margin:0px; padding:2px; color:skyblue; font-size:11px;">${secUser} <img src="img/verification.png" id="${ids.verIcon}" width="15px" height="15px" style="margin-top:-5px; display:none;"></p></a>
                    <p style="margin:0px; padding:1px; color:grey; font-size:9px;" id="${ids.thrDateOne}"></p>
                </div>
                <p style="font-size:14px; margin:0px; padding:3px;" class="postBodtxt ${ids.thrdImgId}">${thrH}</p>
            </div>
        </div>
        `
    };

    // drop thrViewer
    const thrViewer = (thrdata, verIconVw, backImg, thrDate, likeThr, likeByThr, cmntThrBg, comThrBgBod, comThrBgFlow, comThrBgIn, comThrBgBtn, closeComBgThr, comThrBgLen, frwdImg, optThr, thrOptBod, clsThrOpt, delThrOpn, delThrQ, delThrY, delThrN, reprtId, repConId, inApRep, abusRep, clsRep, shareThr, closeSThr, thrBigVidBod, vidBigThId, thrVidPly, thrVidPus, thrVidStp, thrVidCrntT, thrVidOrgT, thrVidMte, shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls, edtThr) => {
        return `
    <div class="containThr">
        <!-- close for xs -->
        <div class="row">
          <div class="col-xs-12 clearfix visible-xs vewStrTop" style="background-color: white; box-shadow: 0px 0px 20px -10px #1a1a1a; height: 35px; position: fixed; z-index: 7;">
            <img id="${closeSThr}" src="img/backa.png" alt="" width="15px" height="25px" style="margin:5px; float:left; cursor: pointer;">
          </div>
        </div>

        <!-- opt area -->
        <div class="row">
          <div class="col-md-5 col-xs-12" style="position: fixed; z-index: 7; margin-top:50px;">
            <div class="postBodyCon" id="${thrOptBod}" style="width:100%; display: none;">
              <div class="edtPstFlw" style="width:100%; height:30px;">
                  <p style="text-align:center; margin:0px; padding:5px;"><img id="${clsThrOpt}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
              </div>
              <!-- edt cons -->
                    <div id="${edtThr}" class="edtPstFlw" style="width:100%; height:35px;">
                        <p style="margin:8px; color:grey; cursor:pointer;"> <img src="img/wada.png" width="12.5px" height="15px" style="margin-right:10px;"> Edit thread header</p>
                    </div>
                    <!-- delp cons -->
                    <div id="${delThrOpn}" class="edtPstFlw" style="width:100%; height:35px;">
                        <p style="margin:8px; color:orangered; cursor:pointer;"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete thread</p>
                    </div>
                    <div id="${delThrQ}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:grey; text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                        </div>
                        <div style="width:100%; height:30px;">
                            <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                                <p id="${delThrY}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                            </div>
                            <div style="width:49%; float:left; height:100%; float:right;">
                                <p id="${delThrN}" style="text-align:center; color:grey; margin:5px; cursor:pointer;">Cancel</p>
                            </div>
                        </div>
                    </div>
                    <!-- report cons -->
                    <div id="${reprtId}" class="" style="width:100%; height:35px;">
                        <p style="margin:8px; color:grey; cursor:pointer;"> <img src="img/flag.png" width="15px" height="15px" style="margin-right:10px;"> Report post</p>
                    </div>
                    <div id="${repConId}" class="areYSPCon" style="width:100%; display:none;">
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${inApRep}"> Inapproriate content </p>
                        </div>
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:orangered; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${abusRep}"> Abusive content </p>
                        </div>
                        <div class="areysPP" style="width:100%; height:30px;">
                            <p style="color:grey; text-align:center; margin:0px; padding:5px; cursor:pointer;" id="${clsRep}"> cancel </p>
                        </div>
                    </div>
          </div>
          </div>
        </div>

        <!-- comments area -->
        <div class="row">
          <div class="col-md-5 col-xs-12" style="position: fixed; z-index: 7; margin-top:50px;">
            <div class="postBodyCon" id="${comThrBgBod}" style="width:98%; margin:auto; height:290px; border-radius:5px; padding-bottom:5px; box-shadow:0px 0px 20px -10px #1a1a1a; display: none;">
              <div style="width:100%; height:200px; overflow-y:auto;">
                  <span id="${comThrBgFlow}" class="comFlow"></span>
              </div>
              <div class="commentIn" style="height:50px;">
                  <textarea placeholder="comment" class="commentInput" style="margin:5px; width:70%; float:left; border-radius:5px; color:darkorange;" id="${comThrBgIn}"></textarea>
                  <img src="img/send.png" width="35px" height="35px" style="float:right; margin:5px;" id="${comThrBgBtn}">
              </div>
              <div class="closeRdCon" style="width:100%; height:40px; overflow-y:auto;">
                  <p id="${closeComBgThr}" style="margin:3.5px; text-align:center; cursor:pointer;">
                      <img src="img/up.png" width="20px" height="10px">
                  </p>
              </div>
          </div>
          </div>
        </div>
        <!-- share area -->
        <div class="row">
          <div class="col-md-5 col-xs-12" style="position: fixed; z-index: 7; margin-top:50px;">
            <!-- share content area -->
            <div class="postBodyCon" id="${shrPstBd}" style="width:98%; margin:auto; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <input id="${shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:2.5px; border:none; border-radius:7.5px; color:grey;" class="srchCon_tag">>
                        <img src="img/searcha.png" width="15px" height="15px" style="float:right; margin:2.5px;">
                    </p>
                </div>
                <div style="width:100%; height:175px; overflow-y:auto;">
                    <span id="${shrPstFlw}"></span>
                </div>
                <div class="closeRdCon" style="width:100%; height:30px; overflow-y:auto;">
                    <p id="${shrPstCls}" style="margin:3.5px; text-align:center; cursor:pointer;">
                        <img src="img/up.png" width="20px" height="10px">
                    </p>
                </div>
            </div>
          </div>
        </div>

        <!-- username/date amplifier -->
        <div id="thrInfoCon" style="width:100%; height: 30px;">
            <div style="width:35%; height:100%; float:left;">
                <a href="" id="thrUsrnmeRef"><p id="thrUsrnme" style="float: left; margin: 0px; padding:5px; color:skyblue; font-size:11.5px;"></p> <img src="img/verification.png" id="${verIconVw}" width="15px" height="15px" style="margin-top:5px; display:none;"></a>
            </div>
            <div style="width:25%; height:100%; float:left;">
                <p id="thrImgLen" style="text-align:center; margin:10px; color:darkorange; display:none; font-size:12.5px;"> <span id="thrImgPres">1</span> <i style="font-size:13px; color:grey;">/<span id="thrImgFull"></span></i> </p>
            </div>
            <div style="width:40%; height:100%; float:right;">
                <p id="${thrDate}" style="float: right; margin: 0px; padding:5px; color:grey; font-size:11.5px;"></p>
            </div>
        </div>
        <!--img and heading container -->
        <div class="strThrdImg" ids="strThrICon" style="width:90%; margin: auto; overflow-y: auto;">
          <p id="thrHeadr" class="postHeaderfrst" style="padding: 5px; margin:0px; color:#1a1a1a; margin-top: 10px;"></p>
          <img id="thrImg" src="" alt="" width="100%" style="margin-bottom: 10px;">
          <video src="" alt="" width="100%" id="${vidBigThId}" style="border-top-right-radius: 7.5px; border-top-left-radius: 7.5px; display:none;"></video>
        </div>
        <!-- activity container -->
        <div class="row">
            <div id="strActvtCon" class="col-md-5 col-xs-12" style="position:fixed; z-index:7; bottom:0; right:0; box-shadow:0px 0px 20px -10px #1a1a1a;">
                <div id="${thrBigVidBod}" class="postInfoCon" style="width:100%; height:30px; display:none;">
                    <img id="${thrVidPly}" src="img/playn.png" width="17.5px" height="17.5px" style="margin:5px; float:left; cursor:pointer;">
                    <img id="${thrVidPus}" src="img/pausen.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;">
                    <!-- <img id="${thrVidStp}" src="img/stopy.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;"> -->
                    <img id="${thrVidMte}" src="img/muten.png" width="15px" height="15px" style="margin:7.5px; float:right; cursor:pointer;">
                    <p style="float:right; margin:5px; font-size:13px; color:grey;"> <span id="${thrVidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${thrVidOrgT}" style="font-size:10px; color:grey;"></span> </p>
                </div>
                <div id="${backImg}" style="display: none; float:left; margin:5px; margin-right: 10px; cursor:pointer;"><img id="" src="img/backa.png" alt="" width="17.5px" height="25px" style="cursor:pointer;"></div>
                <div id="" style="float:left; margin:5px;"><img id="${likeThr}" src="img/like.png" alt="" width="25px" height="25px" style="cursor:pointer;"> <i id="${likeByThr}" style="font-size:11px; color:darkorange;">${thrdata.likedBy.length}</i> </div>
                <div id="" style="float:left;"><img id="${cmntThrBg}" src="img/comment.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;"> <i id="${comThrBgLen}" style="font-size:11px; color:darkorange;">${thrdata.comments.length}</i> </div>
                <div id="${frwdImg}" style="display: none; float:right; margin:5px; margin-left: 10px;"><img id="" src="img/backb.png" alt="" width="17.5px" height="25px" style="cursor:pointer;"></div>
                <img id="${optThr}" src="img/opt.png" alt="" width="7.5px" height="25px" style="margin:5px; float:right; cursor: pointer;">
                <img id="${shrPst}" src="img/share.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
            </div>
        </div>
    </div>
        `
    };

    const TW1 = (thrdata, ids) => {
        return `
        <div class="row containThr">

        <!-- opt area -->
            <div class="col-lg-1"></div>
            <div class="col-lg-10 col-xs-12">
                <div style="width:100%; margin-bottom:10px;">
                    <p class="clearfix visible-xs" style="text-align:center; margin:0px; padding:5px;"><img id="${ids.closeSThr}" src="img/backa.png" width="15px" height="22.5px" style="cursor:pointer;"></p>
                    <div id="${ids.thrBVBod}" style="width:100%; border-radius:10px; box-shadow:0px 0px 15px 1px rgba(0, 0, 0, 0.2);" class="inStrUflow">
                        <div id="thrInfoCon" style="width:100%; height: 35px;">
                            <div style="width:35%; height:100%; float:left;">
                                <a href="" id="thrUsrnmeRef"><p id="thrUsrnme" style="float: left; margin: 0px; padding:5px; color:skyblue; font-size:13.5px;"></p> <img src="img/verification.png" id="${ids.verIconVw}" width="15px" height="15px" style="margin-top:5px; display:none;"></a>
                            </div>
                            <div style="width:15%; height:100%; float:left;">
                                <p id="thrImgLen" style="text-align:center; margin:10px; color:darkorange; display:none; font-size:12.5px;"> <span id="thrImgPres">1</span> <i style="font-size:13px; color:grey;">/<span id="thrImgFull"></span></i> </p>
                            </div>
                            <div style="width:50%; height:100%; float:right;">
                                <img id="${ids.optThr}" src="img/opt.png" alt="" width="5px" height="20px" style="margin:5px; margin-rgight:5px; float:right; cursor: pointer;">
                                <p id="${ids.thrDate}" style="float: right; margin: 0px; padding:5px; color:grey; font-size:13.5px;"></p>
                            </div>
                        </div>
                        <div class="postBodyCon" id="${ids.thrOptBod}" style="width:100%; display: none;">
                            <div class="edtPstFlw" style="width:100%; height:30px;">
                                <p style="text-align:center; margin:0px; padding:5px;"><img id="${ids.clsThrOpt}" src="img/up.png" width="25px" height="15px" style="cursor:pointer;"></p>
                            </div>
                            <!-- edt cons -->
                          <div id="${ids.edtThr}" class="edtPstFlw" style="width:100%; height:35px;">
                              <p style="margin:8px; color:grey; cursor:pointer;"> <img src="img/wada.png" width="12.5px" height="15px" style="margin-right:10px;"> Edit thread header</p>
                          </div>
                          <!-- delp cons -->
                          <div id="${ids.delThrOpn}" class="edtPstFlw" style="width:100%; height:35px;">
                              <p style="margin:8px; color:orangered; cursor:pointer;"> <img src="img/del.png" width="12.5px" height="15px" style="margin-right:10px;"> Delete thread</p>
                          </div>
                          <div id="${ids.delThrQ}" class="areYSPCon" style="width:100%; height:60px; display:none;">
                              <div class="areysPP" style="width:100%; height:30px;">
                                  <p style="color:grey; text-align:center; margin:0px; padding:5px;"> Are you sure you want to delete post?</p>
                              </div>
                              <div style="width:100%; height:30px;">
                                  <div class="yesesP" style="width:49%; float:left; height:100%; float:left;">
                                      <p id="${ids.delThrY}" style="text-align:center; color:orangered; margin:5px; cursor:pointer;">Yes</p>
                                  </div>
                                  <div style="width:49%; float:left; height:100%; float:right;">
                                      <p id="${ids.delThrN}" style="text-align:center; color:grey; margin:5px; cursor:pointer;">Cancel</p>
                                  </div>
                              </div>
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
                        <img id="thrImg" src="" alt="" width="100%" style="margin-bottom: 10px;">
                        <video src="" alt="" width="100%" id="${ids.vidBigThId}" style="display:none;"></video>
                        <div id="${ids.thrBigVidBod}" class="postInfoCon" style="width:100%; height:30px; display:none;">
                            <img id="${ids.thrVidPly}" src="img/playn.png" width="17.5px" height="17.5px" style="margin:5px; float:left; cursor:pointer;">
                            <img id="${ids.thrVidPus}" src="img/pausen.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;">
                            <!-- <img id="${ids.thrVidStp}" src="img/stopy.png" width="17.5px" height="17.5px" style="margin:5px; float:left; margin-left:20px; cursor:pointer;"> -->
                            <img id="${ids.thrVidMte}" src="img/muten.png" width="15px" height="15px" style="margin:7.5px; float:right; cursor:pointer;">
                            <p style="float:right; margin:5px; font-size:13px; color:grey;"> <span id="${ids.thrVidCrntT}" style="font-size:12.5px; color:orange;"></span>/<span id="${ids.thrVidOrgT}" style="font-size:10px; color:grey;"></span> </p>
                        </div>
                        <p style="margin:0px; padding:5px; font-size:22.5px;" id="thrHeadr" class="postBodtxt"></p>
                        <div style="height:35px; width:100%;" class="topLBrdr">
                            <div id="${ids.backImg}" style="display: none; float:left; margin:5px; margin-right: 10px; cursor:pointer;"><img id="" src="img/backa.png" alt="" width="17.5px" height="25px" style="cursor:pointer;"></div>
                            <div id="" style="float:left; margin:5px;"><img id="${ids.likeThr}" src="img/like.png" alt="" width="25px" height="25px" style="cursor:pointer;"> <i id="${ids.likeByThr}" style="font-size:11px; color:darkorange;">${thrdata.likedBy.length}</i> </div>
                            <div id="" style="float:left;"><img id="${ids.cmntThrBg}" src="img/comment.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;"> <i id="${ids.comThrBgLen}" style="font-size:11px; color:darkorange;">${thrdata.comments.length}</i> </div>
                            <div id="" style="display: none; float:right; margin:5px; margin-left: 10px;"><img id="${ids.frwdImg}" src="img/backb.png" alt="" width="17.5px" height="25px" style="cursor:pointer;"></div>
                            <img id="${ids.shrPst}" src="img/share.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
                        </div>
                        <!-- share content area -->
                        <div class="postBodyCon" id="${ids.shrPstBd}" style="width:98%; margin:auto; margin-top:5px; height:240px; border-radius:5px; padding-bottom:5px; display:none;">
                            <div class="srchCon" style="width:100%; height:30px; overflow-y:auto;">
                                <p id="" style="margin:3.5px; text-align:center; cursor:pointer;">
                                    <input id="${ids.shrPstSrch}" placeholder="search friends" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; width:80%; height:80%; margin:2.5px; border:none; border-radius:7.5px; color:grey;" class="srchCon_tag">
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
                        <!-- comment area -->
                        <div class="postBodyCon" id="${ids.comThrBgBod}" style="width:98%; margin:auto; margin-top:5px; height:290px; border-radius:5px; padding-bottom:5px; display: none;">
                            <div style="width:100%; height:200px; overflow-y:auto;">
                                <span id="${ids.comThrBgFlow}" class="comFlow"></span>
                            </div>
                            <div class="commentIn" style="height:50px;">
                                <textarea placeholder="comment" class="commentInput" style="margin:5px; width:70%; float:left; border-radius:5px; color:darkorange;" id="${ids.comThrBgIn}"></textarea>
                                <img src="img/send.png" width="35px" height="35px" style="float:right; margin:5px;" id="${ids.comThrBgBtn}">
                            </div>
                            <div class="closeRdCon" style="width:100%; height:40px; overflow-y:auto;">
                                <p id="${ids.closeComBgThr}" style="margin:3.5px; text-align:center; cursor:pointer;">
                                    <img src="img/up.png" width="20px" height="10px">
                                </p>
                            </div>
                        </div>
                        <div style="height:5px; width:100%;"><div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>
        `
    }

    /*
    --------------------
    display threads
    -------------------- 
    */
    // thr multi-img check
    const thrMulitImg = (thrdata, data, multImgId, backImg, likeThr, cmntThr, frwdImg, optThr, shareThr) => {
        if (thrdata.img.length > 1) {
                $('#strActvtCon, #thrImgLen').css('display', 'block');
                $('#thrImgFull').text(thrdata.img.length);
                $(`#${backImg}, #${frwdImg}`).css('display', 'block');
            }else {
                $(`#${multImgId}, #thrImgLen`).css('display', 'none');
            }
    };

    // multi img thr
    const multiImgThr = (thrdata, data, multImgId, backImg, likeThr, cmntThr, frwdImg, optThr, shareThr) => {
        $('#strActvtCon, #thrImgLen').css('display', 'block');
        //multi img check
        thrMulitImg(thrdata, data, multImgId, backImg, likeThr, cmntThr, frwdImg, optThr, shareThr);
         // left and right func
         var left = $(`#${backImg}`);
         var right = $(`#${frwdImg}`);
         var num = 0;
         // check multi img func
         
         left.click(function() {
             $(`#thrImg`).css('display', 'none');
             num--;
             if (num < 0) {
                 num = thrdata.img.length-1;
             }
             $(`#thrImg`).attr("src", thrdata.img[num].path);
             $(`#thrImg`).attr("class", thrdata.img[num].class);
             $(`#thrImg`).fadeIn();
             $(`#thrImgPres`).text(num+1);
         });
         
         right.click(function() {
             $(`#thrImg`).css('display', 'none');
             num++;
             if (num >= thrdata.img.length) {
                 num = 0;
             }
             $(`#thrImg`).attr("src", thrdata.img[num].path);
             $(`#thrImg`).attr("class", thrdata.img[num].class);
             $(`#thrImg`).fadeIn();
             $(`#thrImgPres`).text(num+1);
         });

    };    

    // bg vd
    const bigVideo = (thrdata, udata, thrBigVidBod, vidBigThId, thrVidPly, thrVidPus, thrVidStp, thrVidCrntT, thrVidOrgT, thrVidMte,) => {
        if (thrdata.vid.length > 0) {
            $(`#${thrBigVidBod}`).fadeIn();
            $('#thrImg').css('display', 'none');
            $('#vidBigThId').css('display', 'block');
            $('#vidBigThId').attr('src', `${thrdata.vid[0].path}`);
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
                checkMode();
                // multi img effects
                videoThr(thrdata, udata, user, vidBigThId, thrBigVidBod, thrVidPly, thrVidPus, thrVidStp, thrVidMte, thrVidCrntT, thrVidOrgT);
            });
        }
    };

    // share thr
    const shrBd = (user, path, ids) => {
        return `
        <div class="shrPstBod" id="${ids.shrPstBodyId}" style="width:95%; margin:auto; height:35px; border-radius:5px; margin-top:10px;">
            <div style="width:30%; height:100%; float:left;">
                <div style="width:25px; height:25px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:50%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${user}"><p class="postDatefrst" style="padding:2.5px; margin:5px; font-size:12px;">${user}</p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p style="text-align:center; margin:2.5px;">
                    <img id="${ids.shrPstSndBtn}" src="img/send.png" width="20px" height:="20px" style="margin:2.5px; margin-top:4px; cursor:pointer; display:none;">
                    <button id="${ids.shrPstRtrnBtn}" class="btn btn-default btn-xs" style="color:orange; background-color:transparent; border:solid 1px darkorange; border-radius:5px; margin:2.5px; display:none;">sent</button>
                </p>
            </div>
        </div>
        `
    };
    const sharePst = (data, udata, shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls, tg) => {

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

        // modes
        const chkModeShr = () => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $('.shrPstBod').css('border', 'solid 1px #dddddd');
                    $('.shrPstBod').css('background-color', 'white');
                }else {
                    $('.shrPstBod').css('border', 'solid 1px #404040');
                    $('.shrPstBod').css('background-color', '#1a1a1a');
                }
            });
        };

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
                        chkModeShr();
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
            if (udata.following.length > 0 && udata.chats.length > 0) {
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
                                chkModeShr()
                                passMe(usr, genUsrr);
                            });
    
                        }
    
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
            checkMode();
        };
        // UN/SEND
        const shrFuncs = (user, genUsr, send, rtrn) => {
            
            // UI check
            if (genUsr.notifications.length > 0) {
                var flag = '';
                for (let i = 0; i < genUsr.notifications.length; i++) {
                    if (genUsr.notifications[i].noti_type == 'shr_thr' && genUsr.notifications[i].post == data._id && genUsr.notifications[i].user == udata._id) {
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
                var dateNow = [year, day, month, hour, minute, secnds];
                tagNoti(genUsr, data, udata, tg, dateNow);
                flowFrndsrch($(`#${shrPstSrch}`).val());
            });

        };

    };
     // edt thr
     const editThr = (data, udata, edtPost) => {

        if (data.user !== udata._id) {
            $(`#${edtPost}`).css('display', 'none');
        }

        $(`#${edtPost}`).click(()=>{
            initEdt()
        });

        const edtBd = (ids) => {
            return `
                <div class="row">
                    <div id="${ids.edtBodId}" class="col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;">
                        <div class="edt_jrn_alrt" style="width:100%; margin-top:25px; height:200px; border-radius:10px;">
                            <div id="" class="posterClosecon_edt" style="width:100%; height:30px; float:; margin-bottom:15px;">
                                <p style="margin:5px; color:orange; float:left;"> Edit thread </p>
                                <span style="float:right; margin:5px; color:red; font-size:18px; cursor:pointer;" id="${ids.edtClsId}">&times;</span>
                            </div>
                            <div style="width:100%; height:100px; overflow-y:auto;" id="">
                                <br>
                                <input maxlength="200" class="srchCon" id="${ids.headEdt}" style="border:none; width:90%; margin:10px; background-color:transparent; color:grey;" placeholder="header" />
                                <br>
                            </div>
                            <div style="height:40px; width:100%; border-top:solid 1px orange;">
                                <p class="DoneOne" style="text-align:center; margin:8px;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="${ids.donEdtn}">done</button> </p>
                            </div>
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
                $(`#${edtBodId}`).fadeOut();    
                $('#view-container, #container-one, .inStrUflow').css('filter', '');
                $(`#${edtBodId}`).remove();
            });
        };
        // body&head
        const headBod = (headEdt, bodyEdt) => {
            $(`#${headEdt}`).val(data.head);
        };
        // done
        const doneEdtn = (donEdtn, headEdt, bodyEdt) => {
            $(`#${donEdtn}`).click(()=>{
                fetch(`/strings/updateThr/${data._id}`, { method: 'post', body: JSON.stringify({ head: $(`#${headEdt}`).val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if (data) {
                        location.reload();
                    }
                });
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
                bodyEdt: 'bodyEdt_' + id
                
            }
        };
        // init
        const initEdt = () => {
            var ids = crtEdtIds(data._id);
            $('#view-container, #container-one, .inStrUflow').css('filter', 'blur(5px)');
            $('#dropChat').after(edtBd(ids));
            checkMode();
            // cls btn
            $(`#${ids.edtBodId}`).fadeIn();
            var x = window.matchMedia("(min-width: 600px)")
            if (x.matches) {
            }
            clsEdt(ids.edtClsId, ids.edtBodId);
            // check body and head
            headBod(ids.headEdt, ids.bodyEdt);
            // done
            doneEdtn(ids.donEdtn, ids.headEdt, ids.bodyEdt);
        }

    };
    // tag noti
    const tagNoti = (user, data, udata, act, dateNow) => {

        if (act == 'shr_str' || act == 'shr_thr' && user.user_name !== udata.user_name) {

            fetch('/notifications/sendNotiUser', { method: 'post', body: JSON.stringify({
                user: user._id 
            }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((sent)=>{
                if (sent) {
                    tag();
                }
            });

            // get authors
            const getAut = () => {
                fetch('/getAuthors', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((auts)=>{ 
                    for (let z = 0; z < auts.length; z++) {
                        alert(auts[z]);
                    }
                });
            };

            const tag = () => {
                
                // TAG
                // thr
                if (act == 'shr_thr') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'shr_thr',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            alert('sent!');
                        }
                    });
                }
                // str
                if (act == 'shr_str') {
                    fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                        user: udata._id,
                        noti_type: 'shr_str',
                        post: data._id,
                        date: dateNow
                    }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                        if (noti) {
                            alert('sent!');
                        }
                    });
                }

            };

        }

    };

    // img diff 
    const threadImg = (thrdata, data, udata, secUser, ver, ids, verIconVw, thrDate, thrdImgId, multImgId, backImg, thrBigVidBod, vidBigThId, thrdVid, thrVidSrc, thrVidPly, thrVidPus, thrVidStp, thrVidCrntT, thrVidOrgT, thrVidMte, likeThr, likeByThr, cmntThrBg, comThrBgBod, comThrBgFlow, comThrBgIn, comThrBgBtn, closeComBgThr, comThrBgLen, frwdImg, optThr, thrOptBod, clsThrOpt, delThrOpn, delThrQ, delThrY, delThrN, reprtId, repConId, inApRep, abusRep, clsRep, shareThr, closeSThr, shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls, edtThr) => {
        if (thrdata.img.length > 0) {
            $(`#${thrdVid}`).css('display', 'none');
            $(`#${thrdImgId}`).css('background-image', `url(${thrdata.img[0].path})`);
            $(`#${thrdImgId}`).attr('class', `${thrdata.img[0].class}`);
            if (thrdata.img.length > 1) {
                $(`#${multImgId}`).css('display', 'block');
            }
        }
        if (thrdata.vid.length > 0) {
            $(`#${thrdImgId}`).css('display', 'none');
            $(`#${thrdVid}`).css('display', 'block');
            $(`#${thrVidSrc}`).attr('src', `${thrdata.vid[0].path}`);
            $(`#${thrVidSrc}`).attr('class', `${thrdata.vid[0].class}`);
        }
        $(`#${thrdImgId}, .${thrdImgId}`).click(()=>{
            child();
        });
        $(`#${thrdVid}`).click(()=>{
            child();
        });
        const child = () => {
            fetch('/strings/getSpecThread', { method: 'post', body: JSON.stringify({ _id: thrdata._id }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                return responce.json();
            }).then((flwData)=>{
                console.log('open thread');
                if (flwData) {
                    $('.containThr').remove();
                    $('#tapImgDisp').css('display', 'none');
                    var x = window.matchMedia("(max-width: 600px)")
                    if (x.matches) {
                        //$('.strFlowDiv').css('display', 'none');
                        $('.strThrdVwr').fadeIn();
                        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                            if(mode == 'light') {
                                $('body').css('background-color', 'white');
                            }else {
                                $('body').css('background-color', '#333333');
                            }
                        });
                        $('.strThrdVwr').append(TW1(flwData, ids));
                        $(`#${ids.thrBVBod}`).css('margin-top', '-30px');
                    }else {
                        $('.strThrdVwr').css('display', 'block'); 
                        $('.strThrdVwr').append(TW1(flwData, ids)); 
                        $(`#${ids.thrBVBod}`).css('margin-top', '10px');
                    }

                    checkMode();
                    /*$('.strThrdVwr').append(thrViewer(
                        flwData, verIconVw, backImg, 
                        // date
                        thrDate,
                        // like
                        likeThr, likeByThr, 
                        // comment
                        cmntThrBg, comThrBgBod, comThrBgFlow, comThrBgIn, comThrBgBtn, closeComBgThr, comThrBgLen,
                        frwdImg, 
                        // thr opt
                        optThr, thrOptBod, clsThrOpt,
                        // thr opt funcs
                        delThrOpn, delThrQ, delThrY, delThrN, reprtId, repConId, inApRep, abusRep, clsRep,
                        // shares
                        shareThr, closeSThr,
                        // for videos
                        thrBigVidBod, vidBigThId, thrVidPly, thrVidPus, thrVidStp, thrVidCrntT, thrVidOrgT, thrVidMte,
                        // for share
                        shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls,
                        // edit
                        edtThr
                    ));*/
                    $(`#tapImgDisp`).css('display', 'none');
                    $(`#thrUsrnme`).text(secUser);
                    $('#thrUsrnmeRef').attr('href', `${secUser}`);
                    $(`#thrHeadr`).text(flwData.head);
                    if (thrdata.img.length > 0) {
                        $(`#thrImg`).attr('src', `${flwData.img[0].path}`);
                        $(`#thrImg`).attr('class', `${flwData.img[0].class}`);
                        multiImgThr(flwData, data, multImgId, backImg, likeThr, cmntThrBg, frwdImg, optThr, shareThr);
                    }
                    if (ver == 'on') {
                        $(`#${verIconVw}`).css('display', 'inline');
                    }
                    // date
                    smartDate(thrdata, thrDate);
                    // for videos  
                    bigVideo(flwData, udata, thrBigVidBod, vidBigThId, thrVidPly, thrVidPus, thrVidStp, thrVidCrntT, thrVidOrgT, thrVidMte);
                    // like funcs
                    chkLikeThrXs(flwData, udata, secUser, likeThr, likeByThr);
                    LikeThrXs(flwData, udata, secUser, likeThr, likeByThr);  
                    // comment funcs
                    checkComsThr(flwData, udata, secUser, cmntThrBg, comThrBgBod, comThrBgFlow, comThrBgIn, comThrBgBtn, closeComBgThr, comThrBgLen);
                    opnCom(flwData, udata, secUser, cmntThrBg, comThrBgBod, comThrBgFlow, comThrBgIn, comThrBgBtn, closeComBgThr, comThrBgLen);
                    // close com
                    closeStrThr(thrdata, closeSThr);
                    // OPT
                    thrOpt(thrdata, udata, secUser, optThr, thrOptBod, clsThrOpt, delThrOpn, delThrQ, delThrY, delThrN, reprtId, repConId, inApRep, abusRep, clsRep);
                    // edit
                    editThr(thrdata, udata, edtThr);
                    // share funcs
                    var tg = 'tag_thr';
                    sharePst(thrdata, udata, shrPst, shrPstBd, shrPstSrch, shrPstFlw, shrPstCls, tg);
                    
                }
            });
        };
    };
    // close thr
    const closeStrThr = (thrdata, closeSThr) => {
        $(`#${closeSThr}`).click(()=>{
            $('.strFlowDiv').fadeIn();
            var x = window.matchMedia("(max-width: 600px)")
            if (x.matches) {
                $('.strThrdVwr').css('display', 'none');
            }
            $('.containThr').remove();
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $('body').css('background-color', '#f0f0f0');
                }else {
                    $('body').css('background-color', '#333333');
                }
            });
        });
    };

    // create thread
    const threadIds = (thrdata) => {
        return {
            thrBVBod: 'thrBVBod_bgth_' + thrdata._id,
            // img
            thrdImgId: 'thrdImgId_bgth_' + thrdata._id,
            multImgId: 'multImgId_bgth_' + thrdata._id,
            // date
            thrDateOne: 'thrDateOne_bgth_' + thrdata._id,
            thrDate: 'thrDate_bgth_' + thrdata._id,
            // thrd vid
            thrBigVidBod: 'thrBigVidBod_bgth_' + thrdata._id,
            vidBigThId: 'vidBigThId_bgth_' + thrdata._id,
            thrdVid: 'thrdVid_bgth_' + thrdata._id,
            thrVidSrc: 'thrVidSrc_bgth_' + thrdata._id,
            thrVidPly: 'thrVidPly_bgth_' + thrdata._id,
            thrVidPus: 'thrVidPus_bgth_' + thrdata._id,
            thrVidStp: 'thrVidStp_bgth_' + thrdata._id,
            thrVidCrntT: 'thrVidCrntT_bgth_' + thrdata._id,
            thrVidOrgT: 'thrVidOrgT_bgth_' + thrdata._id,
            thrVidMte: 'thrVidMte_bgth_' + thrdata._id,
            // thrd actv area
            backImg: 'backImg_bgth_' + thrdata._id,
            // like funcs
            likeThr: 'likeThr_bgth_' + thrdata._id,
            likeByThr: 'likedByThr_bgth_' + thrdata._id,
            // comment funcs
            cmntThrBg: 'cmntThrBg_bgth_' + thrdata._id,
            comThrBgBod: 'comThrBgBod_bgth_' + thrdata._id, 
            comThrBgFlow: 'comThrBgFlow_bgth_' + thrdata._id, 
            comThrBgIn: 'comThrBgIn_bgth_' + thrdata._id,
            comThrBgBtn: 'comThrBgBtn_bgth_' + thrdata._id, 
            closeComBgThr: 'closeComBgThr_bgth_' + thrdata._id, 
            comThrBgLen: 'comThrBgLen_bgth_' + thrdata._id,
            //
            frwdImg: 'frwdImg_bgth_' + thrdata._id,
            shareThr: 'shareThr_bgth_' + thrdata._id,
            closeSThr: 'closeSThr_bgth_' + thrdata._id,
            // opt
            optThr: 'optThr_' + thrdata._id,
            thrOptBod: 'thrOptBod_bgth_' + thrdata._id,
            clsThrOpt: 'clsThrOpt_bgth_' + thrdata._id,
            // delete thread funcs
            delThrOpn: 'delThrOpn_bgth_' + thrdata._id,
            delThrQ: 'delThrQ_bgth_' + thrdata._id, 
            delThrY: 'delThrY_bgth_' + thrdata._id,
            delThrN: 'delThrN_bgth_' + thrdata._id,
            // report post func
            reprtId: 'reprtThrId_bgth_' + thrdata._id,
            repConId: 'repConThrId_bgth_' + thrdata._id,
            inApRep: 'inApRepThr_bgth_' + thrdata._id,
            abusRep: 'abusRepThr_bgth_' + thrdata._id,
            clsRep: 'clsRepThr_bgth_' + thrdata._id,
            // share ids
            shrPst: 'shrPst_bgth_' + thrdata._id,
            shrPstBd: 'shrPstBd_bgth_' + thrdata._id,
            shrPstSrch: 'shrPstSrch_bgth_' + thrdata._id,
            shrPstFlw: 'shrPstFlw_bgth_' + thrdata._id,
            shrPstCls: 'shrPstCls_bgth_' + thrdata._id,
            // edit
            edtThr: 'edtThr_bgth_' + thrdata._id,
            // verificaion
            verIcon: 'verIcon_prep_thr_' + thrdata._id,
            verIconVw: 'verIconVw_opnd_thr_' + thrdata._id,
        }
    };

    //display threads
    var acqTDNo = 1; var allTDNo = 1;
    const displayThreads = (thrdata, data, udata, dropsAll, dropsAcq, acqNote) => {
        var x = window.matchMedia("(min-width: 600px)"); var loc = 'lg';
        if (x.matches) {
            loc = 'lg';
        }else {
            loc = 'xs';
        }
        const dropings = (tpe, thrdata, secUser, ids) => {
            console.log('dropped: '+thrdata._id);
            if (tpe == 'acq') {
                if (acqTDNo == 1) {
                    $(`#${dropsAcq.one}`).prepend(thread(thrdata, secUser, ids));
                }
                if (acqTDNo == 2) {
                    $(`#${dropsAcq.two}`).prepend(thread(thrdata, secUser, ids));
                }
                if (acqTDNo == 3) {
                    $(`#${dropsAcq.three}`).prepend(thread(thrdata, secUser, ids));
                }
                if (acqTDNo == 4) {
                    $(`#${dropsAcq.four}`).prepend(thread(thrdata, secUser, ids));
                }
                acqTDNo++;
                // limitation
                if (loc == 'lg' && acqTDNo == 5) {
                    acqTDNo = 1;
                } 
                if (loc == 'xs' && acqTDNo == 3) {
                    acqTDNo = 1;
                }
            }
            if (tpe == 'all') {
                if (allTDNo == 1) {
                    $(`#${dropsAll.one}`).prepend(thread(thrdata, secUser, ids));
                }
                if (allTDNo == 2) {
                    $(`#${dropsAll.two}`).prepend(thread(thrdata, secUser, ids));
                }
                if (allTDNo == 3) {
                    $(`#${dropsAll.three}`).prepend(thread(thrdata, secUser, ids));
                }
                if (allTDNo == 4) {
                    $(`#${dropsAll.four}`).prepend(thread(thrdata, secUser, ids));
                }
                allTDNo++;
                // limitation
                if (loc == 'lg' && allTDNo == 5) {
                    allTDNo = 1;
                } 
                if (loc == 'xs' && allTDNo == 3) {
                    allTDNo = 1;
                }
            }
        }
        const ids = threadIds(thrdata); var secUser = ''; var constver = '';
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data3)=>{
            fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((dataFlwn) => { 
            if (data3) {
                var ver = '';
                for (let i = 0; i < data3.length; i++) {
                    if (data3[i]._id == thrdata.user) {
                        secUser = data3[i].user_name;
                        ver = data3[i].verification;
                    }  
                }
                checkMode();
                if (thrdata.user == udata._id) {
                    $('#acqntdId').slideDown();
                    $(`#${acqNote}`).text('relatable');
                    var tpe = 'acq';
                    dropings(tpe, thrdata, secUser, ids);
                    // date
                    smartDate(thrdata, ids.thrDateOne);
                }else {
                    var vail = 'none';
                    
                    if (dataFlwn.following.length > 0) {
                        for (let z = 0; z < dataFlwn.following.length; z++) {
                            if (thrdata.user == dataFlwn.following[z].user) {
                                vail = 'some';
                                $(`#${acqNote}`).text('relatable');
                                $('#acqntdId').slideDown();
                                var tpe = 'acq';
                                dropings(tpe, thrdata, secUser, ids);
                                // date
                                smartDate(thrdata, ids.thrDateOne);
                            }
                        }
                        if (vail == 'none') {
                            for (let i = 0; i <  data3.length; i++) {
                                if (thrdata.user == data3[i]._id) {
                                    if (data3[i].publicity !== 'private') { 
                                        var tpe = 'all';
                                        dropings(tpe, thrdata, secUser, ids);
                                        //$(`#${prepAllD1}`).prepend(thread(thrdata, secUser, ids));
                                        // date
                                        smartDate(thrdata, ids.thrDateOne);
                                    }
                                }
                            }
                        }
                    }else {
                        for (let i = 0; i <  data3.length; i++) {
                            if (thrdata.user == data3[i]._id) {
                                if (data3[i].publicity !== 'private') {
                                    var tpe = 'all';
                                    dropings(tpe, thrdata, secUser, ids);
                                    //$(`#${prepAllD1}`).prepend(thread(thrdata, secUser, ids));
                                    // date
                                    smartDate(thrdata, ids.thrDateOne);
                                }
                            }
                        }
                    };

                    }
                    if (ver == 'on') {
                        $(`#${ids.verIcon}`).css('display', 'inline');
                    }
                    // disp thread/open thread/ pass info
                    threadImg(thrdata, data, udata,  secUser, ver, ids, ids.verIconVw, ids.thrDate, ids.thrdImgId, ids.multImgId, ids.backImg, ids.thrBigVidBod, ids.vidBigThId, ids.thrdVid, ids.thrVidSrc, ids.thrVidPly, ids.thrVidPus, ids.thrVidStp, ids.thrVidCrntT, ids.thrVidOrgT, ids.thrVidMte, ids.likeThr, ids.likeByThr, ids.cmntThrBg, ids.comThrBgBod, ids.comThrBgFlow, ids.comThrBgIn, ids.comThrBgBtn, ids.closeComBgThr, ids.comThrBgLen, ids.frwdImg, ids.optThr, ids.thrOptBod, ids.clsThrOpt, ids.delThrOpn, ids.delThrQ, ids.delThrY, ids.delThrN, ids.reprtId, ids.repConId, ids.inApRep, ids.abusRep, ids.clsRep, ids.shareThr, ids.closeSThr, ids.shrPst, ids.shrPstBd, ids.shrPstSrch, ids.shrPstFlw, ids.shrPstCls, ids.edtThr);
                }
            });
        });
    };

    // TIE AREA HERE
    //----------------
    // tie body
    const TieBod = (data, user, ids) => {
        var path = ''; var clas = '';
        if (data.profile_pic == 'none') {
            path = 'img/profpic.png';
        }else {
            path = `${data.profile_pic.path}`;
            clas = `${data.profile_pic.class}`;
        }
        return `
        <div id="${ids.bodyTieId}" class="tieUflowBod" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:20%; height:100%; float:left;">
                <div class="${clas}" style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <a style="text-decoration:none;" href="/${user}"><p style="color:skyblue; padding:5px; margin:5px;">${user}</p></a>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <div id="${ids.passId}" style="width:20px; height:20px; margin:auto; background-image:url(img/strings.png); background-size:100% 100%; margin-top:10px; cursor:pointer;"></div>
            </div>
        </div>
        `
    };

    const checkModeTie = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.tieUflowBod, .checkTieBody').css('border', 'solid 1px #f0f0f0');
                $('.tieUflowBod, .checkTieBody').css('background-color', 'white');
            }
            if (mode === 'dark') {
                $('.tieUflowBod, .checkTagBody').css('border', 'solid 1px #404040');
                $('.tieUflowBod, .checkTieBody').css('background-color', '#292929');
            }
        });
    };

    const flowTies = () => {
        fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((data) => { 
            fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                $('.checkTieBody').remove();
                if (data.following.length > 0) {
                    for (let i = 0; i < data.following.length; i++) {
                        if (pass.length > 0) {
                            //alert('here');
                            var chk = 'n'; var usr = '';
                            for (let z = 0; z < pass.length; z++) {
                                if (data.following[i]._id == pass[z]) {
                                    chk = 'y';
                                        for (let z = 0; z < users.length; z++) {
                                            if (users[z]._id == data.following.user) {
                                                dispTie(users[z]);
                                            }
                                        }
                                }else {
                                        for (let x = 0; x < users.length; x++) {
                                            if (users[x]._id == pass[z]) {
                                                chk = 'y';
                                                if (users[x].user_name > 15) {
                                                    usr = users[x].user_name.slice(0, 15)+'..';
                                                }else {
                                                    usr = users[x].user_name;
                                                }
                                                checkModeTie();
                                                viewTies(pass[z], usr, users);
                                            }
                                        }
                                }
                            }
                            if (chk == 'n') {
                                    for (let z = 0; z < users.length; z++) {
                                        if (users[z]._id == data.following.user) {
                                            dispTie(users[z]);
                                        }
                                    }
                            }
                        }else {
                            $('#tiedMainCon').slideUp();
                                for (let z = 0; z < users.length; z++) {
                                    if (users[z]._id == data.following.user) {
                                        dispTie(users[z]);
                                    }
                                }
                        }
                            /*fetch('/chats/getChats', { method: 'get' }).then((responce)=>{
                                return responce.json();
                            }).then((data2)=>{
                                if (data2) {
                                    
                                    for (let z = 0; z < data2.length; z++) {
                                        if (data2[z].user == mainUser.user_name && data2[z].with == data[0].following[i].user) {
                                            for (let p = 0; p < 1; p++) {
                                                dispTags(data[0].following[i]);
                                            }
                                        }      
                                    }
        
                                }
                            });*/
        
                    }
                }else {
                    if (pass.length < 1) {
                        $('#tagedMainCon').slideUp();
                    }
                }
            });
        });

    };
    const checkTies = (chkTies) => {
        fetch('/searcher/searchFrnd', {
            method: 'post',
            body: JSON.stringify({ srch: chkTies }),
            headers: { "Content-type" : "application/json; charset=utf-8" }
        }).then((response) => {
            return response.json();
        }).then((data)=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                return response.json();
            }).then((udata)=>{
                $('.tieUflowBod, .checkTieBody, #noneExsTieSrch').remove();
                if (data.length > 0) {
                    //$('.tagUflowBod').remove();
                    var chkPass = 'n';
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]._id !== udata._id) {
                            if (pass.length > 0) {
                                var chk = 'n';
                                for (let z = 0; z < pass.length; z++) {
                                    //var usr = '';
                                    if (data[i]._id == pass[z] ) {
                                        dispTie(data[i]);
                                        chkPass = 'y';
                                        chk = 'y';
                                        flowTies();
                                    }
                                }
                                if (chk == 'n') {
                                    //alert("flowSrch: "+data[i].user_name);
                                    //flowTag();
                                    dispTie(data[i]);
                                }
                            }else {
                                dispTie(data[i]);
                            }
                        }else {
                            flowTies();
                        }
                    }
                    if (chkPass == 'n') {
                        flowTies();
                    }
                }else {
                    if ($('#tieSrchJrn').length < 1) {
                        flowTies();
                    }else {
                        flowTies();
                        var noneF = () => {
                            return `
                            <p id="noneExsTieSrch" style="text-align:center; color:grey; margin:5px;">This user does not exist</p>
                            `;
                        };
                        $('#flowfrndinTie').prepend(noneF());
                    }
                    //$('.tagUflowBod, .checkTagBody').remove();
                }

            });
        });
    };

    $('#openStrfrdiv').click(()=>{
        $('#strFrDiv').slideDown();
        flowTies();
    });
    // tag srch org
    $('#tieSrchJrn').keyup(()=>{
        if ($('#tieSrchJrn').val() !== '') {
            $('.tieUflowBod, .checkTieBody, #noneExsTieSrch').remove();
            //$('#conjrnTagknwnsrc').css('display', 'none');
            //$('#conjrnTagsrc').css('display', 'block');
            checkTies($('#tieSrchJrn').val());
        }else {
            $('.tieUflowBod, .checkTieBody, #noneExsTieSrch').remove();
            //$('#conjrnTagknwnsrc').css('display', 'block');
            //$('#conjrnTagsrc').css('display', 'none');
            flowTies();
        }
    });
    // delete presnt usr
    const delPtieU = (bodyTieId) => {
        $(`#${bodyTieId}`).remove()
    };
    // const pass id to array
    var pass = new Array();
    const passTie = (data, user, passId, bodyTieId) => {
         $(`#${passId}`).click(()=>{
            pass[pass.length] = data;
            $('#tiedMainCon').fadeIn();
            flowTies();
            if ($('#tieSrchJrn').val()) {
                checkTies($('#tieSrchJrn').val());
            }
        });
        $('#incTieTot').text(pass.length);
    };
    // view tagged
    const viewTies = (data, user, users) => {

        var path = '';
            for (let z = 0; z < users.length; z++) {
                if (users[z]._id == data) {
                    if (users[z].profile_pic == 'none') {
                        path = 'img/profb.png';
                    }else {
                        path = `${users[z].profile_pic.path}`;
                    }
                }
            }
            $('#flowAlredTied').prepend(`
                <div class="checkTieBody" id="${'chckTg_'+data}" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
                    <div style="width:30%; height:100%; float:left;">
                        <div style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
                    </div>
                    <div style="width:50%; height:100%; float:left;">
                        <a style="text-decoration:none;" href="/${user}"><p style="color:skyblue; padding:5px; margin:5px;">${user}</p></a>
                    </div>
                    <div style="width:20%; height:100%; float:right;">
                        <div id="remTied_${data}" style="width:10px; height:10px; margin:auto; background-image:url(img/can.png); background-size:100% 100%; margin-top:15px; cursor:pointer;"></div>
                    </div>
                </div>
            `);
            $(`#remTied_${data}`).click(()=>{
                for (let i = 0; i < pass.length; i++) {
                    if (pass[i] == data) {
                        pass.splice(i, 1);
                        flowTies();
                        if ($('#tieSrchJrn').val()) {
                            checkTies($('#tieSrchJrn').val());
                        }
                    }
                }
            });
            $('#incTieTot').text(pass.length);
    };
    // check if tagged or not
    const checkIfTd = (data, passId) => {
        var ck = 'n';
        if (pass.length > 0) {
            for (let i = 0; i < pass.length; i++) {
                if (pass[i] == data) {
                    ck = 'y';
                    $(`#${passId}`).css('display', 'none');
                }                
            }
        }
        if (ck == 'n') {
            $(`#${passId}`).css('display', 'block');
        }
    };

    // create ids for tag
    const createIdTies = (data) => {
        return {
            bodyTieId: 'bodyTieId_' + data,
            passId: 'passId_' + data
        }
    };
    // display and add tags
    const dispTie = (data) => {
        const ids = createIdTies(data._id);
        var user = ''; var usr = '';
        usr = data.user_name;
        if (usr.length > 15) {
            user = usr.slice(0, 15)+'..';
        }else {
            user = usr;
        }
        checkModeTie();
        $('#flowfrndinTie').prepend(TieBod(data, user, ids));
        passTie(data._id, user, ids.passId, ids.bodyTieId);
        checkIfTd(data._id, ids.passId);
        //viewTies(data, user);
    }

}
Strings();
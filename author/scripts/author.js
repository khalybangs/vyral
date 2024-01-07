function authors() {

    var cart = $('#cartType');
    var jtype = $('#journalType');
    var jhead = $('#bjHead');
    var jbody = $('#bjBody');
    var bjsrc = ('#bjsrc');
    var bjsrcpg = ('#bjsrcpg');
    var bjlctp = ('#locType');

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

    $('#cartsGo').click(()=>{
        // efct
        $('#cartsGo').removeClass('btn-default');
        $('#cartsGo').addClass('btn-info');
        $('#topsGo').removeClass('btn-info');
        $('#topsGo').addClass('btn-default');
        // go
        $('#topsBod').css('display', 'none');
        $('#cartBod').fadeIn();
      });

    // main nav functionalities
    $('#navOne, #navXOne').click(function(){
        $('#navOne').css('background-color','orange');
        $('#navOne').css('color','white');
        $('#navTwo, #navThree, #navFour').css('background-color','white');
        $('#navTwo, #navThree, #navFour').css('color','silver');
        $('#navOneBod').css('display', 'block');
        $('#navTwoBod, #navThreeBod, #navFourBod').css('display', 'none');
        // xs
        $('.nav_btns').attr('style','float:left; margin:7px; background-color: transparent; color: darkorange; font-weight: normal; border: solid 1px darkorange; border-radius: 15px; height: 27px;');
        $('#navXOne').attr('style','float:left; margin:7px; background-color: darkorange; color: white; font-weight: normal; border: none; border-radius: 15px; height: 27px;');
      });
      $('#navTwo, #navXTwo').click(function(){
        $('#navTwo').css('background-color','orange');
        $('#navTwo').css('color','white');
        $('#navOne, #navThree, #navFour').css('background-color','white');
        $('#navOne, #navThree, #navFour').css('color','silver');
        $('#navTwoBod').css('display', 'block');
        $('#navOneBod, #navThreeBod, #navFourBod').css('display', 'none');
        // xs
        $('.nav_btns').attr('style','float:left; margin:7px; background-color: transparent; color: darkorange; font-weight: normal; border: solid 1px darkorange; border-radius: 15px; height: 27px;');
        $('#navXTwo').attr('style','float:left; margin:7px; background-color: darkorange; color: white; font-weight: normal; border: none; border-radius: 15px; height: 27px;');
        getSrcs();
      });
      $('#navThree, #navXThree').click(function(){
        $('#navThree').css('background-color','orange');
        $('#navThree').css('color','white');
        $('#navOne, #navTwo, #navFour').css('background-color','white');
        $('#navOne, #navTwo, #navFour').css('color','silver');
        $('#navThreeBod').css('display', 'block');
        $('#navTwoBod, #navOneBod, #navFourBod').css('display', 'none');
        // xs
        $('.nav_btns').attr('style','float:left; margin:7px; background-color: transparent; color: darkorange; font-weight: normal; border: solid 1px darkorange; border-radius: 15px; height: 27px;');
        $('#navXThree').attr('style','float:left; margin:7px; background-color: darkorange; color: white; font-weight: normal; border: none; border-radius: 15px; height: 27px;');
      });
      $('#navFour, #navXFour').click(function(){
        $('#navFour').css('background-color','orange');
        $('#navFour').css('color','white');
        $('#navOne, #navTwo, #navThree').css('background-color','white');
        $('#navOne, #navTwo, #navThree').css('color','silver');
        $('#navFourBod').css('display', 'block');
        $('#navOneBod, #navThreeBod, #navTwoBod').css('display', 'none');
        // xs
        $('.nav_btns').attr('style','float:left; margin:7px; background-color: transparent; color: darkorange; font-weight: normal; border: solid 1px darkorange; border-radius: 15px; height: 27px;');
        $('#navXFour').attr('style','float:left; margin:7px; background-color: darkorange; color: white; font-weight: normal; border: none; border-radius: 15px; height: 27px;');
        
      });

    // flow navbar functionalities
    $('#OpenSportsF').click(function(){
        $('#artFlow').css('display', 'none');
        $('#sportsFlow').css('display', 'block');
        $('#OpenArtF').removeClass('btn btn-info btn-xs');
        $('#OpenArtF').addClass('btn btn-default btn-xs');
        $('#OpenSportsF').removeClass('btn btn-default btn-xs');
        $('#OpenSportsF').addClass('btn btn-info btn-xs');
      })
      $('#OpenArtF').click(function(){
        $('#sportsFlow').css('display', 'none');
        $('#artFlow').css('display', 'block');
        $('#OpenSportsF').removeClass('btn btn-info btn-xs');
        $('#OpenSportsF').addClass('btn btn-default btn-xs');
        $('#OpenArtF').removeClass('btn btn-default btn-xs');
        $('#OpenArtF').addClass('btn btn-info btn-xs');
      })

    // img && vid posters
    $('#ClickImgInAut').click(()=>{
        $('#postImageAut').click();
    });
    $('#clickVidJrnAut').click(()=>{
        $('#postVideoAut').click();
    });
    // cancel both
    $('#can_rev').click(()=>{
        $('.allVids_aedt, .allImgs_app').remove();
        $('#scrlimgCon-aut').slideUp();
        $('#chseFltp').fadeIn();
    });

    // logOUt
    $('#logOutAut, #logOutAutX').click(()=>{
        ///adminlogs/logOut
        fetch('/adminlogs/logOut', {
            method: 'get'
        }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data == 'out') {
                location.reload();
            }
        });
    });

   
    // add link
    $('#addSrc').click(()=>{
        if ($('#srcIn').val() !== '' && $('#srcTtlIn').val()) {
            fetch('/author/addSrcs', { method: 'put', body: JSON.stringify({ src: $('#srcIn').val(), title: $('#srcTtlIn').val() }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((followedDt)=>{
                getSrcs();
            });
        }else {
            alert('insert url/link & website title');
        }
    });
    // get uer info
    const getInfo = () => {
        fetch('/adminlogs/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((ses) => {
            fetch('/author/allAuthors', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((data) => {
                var nw = '';
                for (let v = 0; v < data.length; v++) {
                    if (data[v]._id == ses) {
                        nw = data[v];
                    }
                }
                if (nw.first_name == '') {
                    location.replace('/Login');
                } else {
                    /*for (let i = 0; i < nw.carts.length; i++) {
                        var opt = `<option>${nw.carts[i]}</option>`;
                        $('#cartType').append(opt);
                        // append carts
                        if (nw.carts[i] == 'Sports') {
                            $('#dispSrcs').after(sprt());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenSportsF">Sports</button>`);
                        }
                        if (nw.carts[i] == 'Art') {
                            $('#dispSrcs').after(art());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenArtF">Art</button>`);
                        }
                        if (nw.carts[i] == 'Music') {
                            $('#dispSrcs').after(msc());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenMusF">Music</button>`);
                        }
                        if (nw.carts[i] == 'Politics') {
                            $('#dispSrcs').after(pol());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenPolF">Politics</button>`);
                        }
                        if (nw.carts[i] == 'Entertainment') {
                            $('#dispSrcs').after(ent());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenEntF">Entertainment</button>`);
                        }
                        if (nw.carts[i] == 'People') {
                            $('#dispSrcs').after(peo());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenPeoF">People</button>`);
                        }
                        if (nw.carts[i] == 'Fashion') {
                            $('#dispSrcs').after(fas());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenFasF">Fashion</button>`);
                        }
                        if (nw.carts[i] == 'Business') {
                            $('#dispSrcs').after(bus());
                            $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenBusF">Business</button>`);
                        }
                    }*/
                    fetch('/getGlbCol', {
                        method: 'get',
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        }
                    }).then((res)=>{
                        return res.json();
                    }).then((glob)=>{
                        for (let i = 0; i < glob.categories.length; i++) {
                            var opt = `<option>${glob.categories[i]}</option>`;
                            $('#cartType').append(opt);
                        }
                        $('#profMail').text(nw.mail);
                        var opt2 = `<option>International</option><option>${nw.Continent}</option><option>${nw.Country}</option>`;
                        $('#locType, #locTypeTop').append(opt2);
                        getExisting(nw);
                        addPost(nw, glob);
                        catNav(nw, glob);
                    });
                    /*$('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenSportsF">Sports</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenArtF">Art</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenMusF">Music</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenPolF">Politics</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenPolF">Politics</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenPeoF">People</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenFasF">Fashion</button>`);
                    $('#cartNav').append(`<button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenBusF">Business</button>`);

                    //$('#dispSrcs').after(bus());
                    $('#cartNav').append(`<span style="color:silver; margin:5px;">|</span><button class="btn btn-default btn-xs" style="border-radius:10px; margin:5px;" id="OpenTopS">Top Shop</button>`);
                    // flow navbar functionalities
                    $('#OpenSportsF').click(function(){
                        $('#artFlow, #musFlow, #peoFlow, #entFlow, #polFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#sportsFlow').css('display', 'block');
                        $('#OpenArtF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenArtF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenSportsF').removeClass('btn btn-default btn-xs');
                        $('#OpenSportsF').addClass('btn btn-info btn-xs');
                    });
                    $('#OpenArtF').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #entFlow, #polFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#artFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenArtF').removeClass('btn btn-default btn-xs');
                        $('#OpenArtF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenMusF').click(function(){
                        $('#sportsFlow, #artFlow, #peoFlow, #entFlow, #polFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#musFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenArtF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenArtF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenMusF').removeClass('btn btn-default btn-xs');
                        $('#OpenMusF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenPolF').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #entFlow, #artFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#polFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenArtF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenArtF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenPolF').removeClass('btn btn-default btn-xs');
                        $('#OpenPolF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenEntF').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #artFlow, #polFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#entFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenArtF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenArtF, #OpenBusF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenEntF').removeClass('btn btn-default btn-xs');
                        $('#OpenEntF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenPeoF').click(function(){
                        $('#sportsFlow, #musFlow, #artFlow, #entFlow, #polFlow, #busFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#peoFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenArtF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenFasF, #OpenArtF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenPeoF').removeClass('btn btn-default btn-xs');
                        $('#OpenPeoF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenFasF').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #entFlow, #polFlow, #busFlow, #artFlow, #topFlow').css('display', 'none');
                        $('#fasFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenArtF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenBusF, #OpenArtF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenFasF').removeClass('btn btn-default btn-xs');
                        $('#OpenFasF').addClass('btn btn-info btn-xs');
                    })
                    $('#OpenBusF').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #entFlow, #polFlow, #artFlow, #fasFlow, #topFlow').css('display', 'none');
                        $('#busFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenArtF, #OpenFasF, #OpenPeoF, #OpenTopS').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenArtF, #OpenFasF, #OpenPeoF, #OpenTopS').addClass('btn btn-default btn-xs');
                        $('#OpenBusF').removeClass('btn btn-default btn-xs');
                        $('#OpenBusF').addClass('btn btn-info btn-xs');
                    })
                    // TS
                    $('#OpenTopS').click(function(){
                        $('#sportsFlow, #musFlow, #peoFlow, #entFlow, #polFlow, #artFlow, #fasFlow, #busFlow').css('display', 'none');
                        $('#topFlow').css('display', 'block');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenArtF, #OpenFasF, #OpenPeoF, #OpenBusF').removeClass('btn btn-info btn-xs');
                        $('#OpenSportsF, #OpenMusF, #OpenPolF, #OpenEntF, #OpenArtF, #OpenFasF, #OpenPeoF, #OpenBusF').addClass('btn btn-default btn-xs');
                        $('#OpenTopS').removeClass('btn btn-default btn-xs');
                        $('#OpenTopS').addClass('btn btn-info btn-xs');
                    })
                    var opt2 = `<option>International</option><option>${nw.Continent}</option><option>${nw.Country}</option>`;
                    $('#locType, #locTypeTop').append(opt2);
                    $('#profName').text(nw.first_name + " " + nw.last_name);
                    $('#profcart1, #cartType1').text(nw.carts[0]);
                    $('#profcart2, #cartType2').text(nw.carts[1]);*/
                }
            });
        });
    }
    getInfo();

    // srcs
    const getSrcs = () => {
        const srcBod = (src, sDs) => {
            return `
                <div id="${sDs.rem}" class="all_srcss" style="width:95%; margin:auto; margin-top:5px; height:35px; background-color:white; border-radius:5px; box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.361);">
                    <div style="width:90%; float:left; border-right:solid 1px #f0f0f0;">
                        <a href="${src.src}"><p style="text-decoration:none; color:skyblue; margin:0px; padding:5px; font-size:18px; color:#1a1a1a;">${src.title}</p></a>
                    </div>
                    <div style="width:10%; float:right;">
                        <p id="${sDs.rem}" style="text-align:center; margin:0px; padding:5px;"> <img src="img/can.png" width="17px" height="17px" style="cursor:pointer;"> </p>
                    </div>
                </div>
            `
        }
        const createASIds = (i) => {
            return {
                bodyId: `source_for_author_${i}_bodyId`,
                rem: `source_for_author_${i}_rem`
            }
        }
        const dropSrc = (src, i) => {
            const sDs = createASIds(i);
            $('#dispSrcs').prepend(srcBod(src, sDs));
            $(`#${sDs.rem}`).click(()=>{
                fetch('/author/remSrc', { method: 'put', body: JSON.stringify({ src: src }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((unfollow)=>{
                    getSrcs();
                });
            });
        }
        fetch('/adminlogs/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((ses) => {
            fetch('/author/allAuthors', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((data) => {
                var nw = '';
                $('.all_srcss').remove();
                for (let v = 0; v < data.length; v++) {
                    if (data[v]._id == ses) {
                        for (let m = 0; m < data[v].my_srcs.length; m++) {
                            dropSrc(data[v].my_srcs[m], m);
                        }
                    }
                }
            });
        });
    }

    // set catnavs
    const catNav = (nw, glob) => {
        // all
        $('#cartNav').append(`<button class="btn btn-info btn-xs ACNBtn" style="border-radius:10px; margin:5px;" id="allPstBtn">All</button>`);
        $(`#allPstBtn`).click(function(){
            $('.postBOd').css('display', 'block');
            $('.ACNBtn').removeClass('btn btn-info btn-xs');
            $('.ACNBtn').addClass('btn btn-default btn-xs');
            $(`#allPstBtn`).removeClass('btn btn-default btn-xs');
            $(`#allPstBtn`).addClass('btn btn-info btn-xs');
        });
        // cat nav journC_${i}
        const dropCatN = (cat, i) => {
            var btn = `btn_cats_nav_${i}`;
            $('#cartNav').append(`<button class="btn btn-default btn-xs ACNBtn" style="border-radius:10px; margin:5px;" id="${btn}">${cat}</button>`);
            $(`#${btn}`).click(function(){
                $('.postBOd').css('display', 'none');
                $(`.journC_${i}`).css('display', 'block');
                $('.ACNBtn').removeClass('btn btn-info btn-xs');
                $('.ACNBtn').addClass('btn btn-default btn-xs');
                $(`#${btn}`).removeClass('btn btn-default btn-xs');
                $(`#${btn}`).addClass('btn btn-info btn-xs');
            });
        };
        // extraction
        for (let i = 0; i < glob.categories.length; i++) {
            dropCatN(glob.categories[i], i);
        }
    }

    // get existing posts
    const getExisting = (data) => {
        $('.postBOd').remove();
        fetch('/author/getbjPosts', { method: 'get' }).then((response)=>{ return response.json() }).then((data2)=>{
            fetch('/getGlbCol', {
                method: 'get',
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                }
            }).then((res)=>{
                return res.json();
            }).then((glob)=>{
                if (data2.length>0) {
                    $('#checknum-j').css('display', 'none');
                    for (let i = 0; i < data2.length; i++) {
                        if (data2[i].type == 'Author') {
                            if (data2[i].user == data.first_name + " " + data.last_name) {
                                var cats = new Array();
                                for (let z = 0; z < data2[i].categories.length; z++) {
                                    for (let v = 0; v < glob.categories.length; v++) {
                                        if (data2[i].categories[z] == glob.categories[v]) {
                                            cats[cats.length] = {category: glob.categories[v], no: v};
                                        }
                                    }
                                }
                                displayPost(data2[i], data, cats);   
                            }
                        }
                    }
                    // for posts data
                    var pstTdy = 0; var ttPst = 0; var ttLks = 0; var ttCmt = 0;
                    for (let z = 0; z < data2.length; z++) {
                        if (data2[z].type == 'Author') {
                            if (data2[z].user == data.first_name + " " + data.last_name) {
                                ttPst += 1; ttLks += data2[z].likedBy.length; ttCmt += data2[z].comments.length;
                                if (data2[z].date[0] == year && data2[z].date[2] == month && data2[z].date[1] == day) {
                                    pstTdy += 1;
                                }
                            }
                        }
                    }
                    $('#pstTdy').text(pstTdy);
                    $('#ttPst').text(ttPst);
                    $('#ttLks').text(ttLks);
                    $('#ttCmt').text(ttCmt);
                }
            });
        });
    }

    // TAG USERS
    var pass = new Array();
    
    const addPost = (data, glob) => {

        // var insert categories
        var clsCatLst = 'n'; var avail = new Array();
        // ADDED CATS
        //-----------
        // drop genres
        const genFuncsRem = (gen, gIds) => {
            $(`#${gIds.remID}`).click(()=>{
                for (let i = 0; i < avail.length; i++) {
                    if (avail[i] == gen) {
                        avail.splice(i, 1);
                    }
                }
                checkCat();
            });
        }
        const genBodyAdd = (gen, gIds) => {
            return `
            <div class="genCatLstBodyRem" id="${gIds.bodyId}" style="float:left; margin:3px; height:33px; background-color:white; border-radius:15px; border:none; margin-bottom:5px;z">
                <p style="float:left; margin:5px; padding:2px; color:rgb(255, 149, 0); font-size:13.5px; margin-top:5px;"> ${gen} </p>
                <p style="float:right; margin:5px; font-size:25px; color:orangered; margin-top:-2px; cursor:pointer;" id="${gIds.remID}">-</p>
            </div>
            `;
        }
        const createCatIdsAdd = (i) => {
            return {
                bodyId: `cat_added_list_bodyId_${i}`,
                remID: `cat_added_list_remID_${i}`,
            }
        }
        const drpCatChs = (cat, i) => {
            const gIds = createCatIdsAdd(i);
            $('#dropChsCats').prepend(genBodyAdd(cat, gIds));
            genFuncsRem(cat, gIds);
        }
        const checkCat = () => {
            $('.genCatLstBodyRem').remove();
            $('#chCatsNo').text(avail.length);
            if (avail.length == 5) {
                clsCatLst = 'y';
                $('#slsctCatsCon').slideUp();
            }else {
                if (clsCatLst == 'y') {
                    clsCatLst = 'n';
                    $('#slsctCatsCon').fadeIn();
                }
            }
            if (avail.length > 0) {
                $('#chsCatsCon').fadeIn();
                for (let u = 0; u < avail.length; u++) {
                    drpCatChs(avail[u], u);
                }
            }else {
                $('#chsCatsCon').css('display', 'none');
            }
            extractCat();
        }
        
        // ADD CATS TO GRP
        // ---------------
        // cat Ids
        const catBod = (cat, ids) => {
            return `
            <div class="genCatLstBody" id="${ids.catBod}" style="float:left; margin:3px; height:33px; background-color:white; border-radius:15px; border:none; cursor:pointer; margin-bottom:5px;">
                <p style="float:left; margin:3px; padding:5px; color:grey; font-size:13.5px; margin-top:2px;"> ${cat} </p>
                <p style="float:right; margin:5px; font-size:20px; color:rgb(0, 183, 255); margin-top:-1px;" id="${ids.addCat}">+</p>
            </div>
            `;
        }
        const availFuncs = (cat, ids) => {
            $(`#${ids.addCat}`).click(()=>{
                avail[avail.length] = cat;
                checkCat();
            });
        }
        const createCatId = (cat, id) => {
            return {
                addCat: `addCat_${id}`,
                catBod: `catBod_${id}`,
            }
        }
        // drop
        const dropCat = (cat, id) => {
            const ids = createCatId(cat, id);
            $('#dropCats').append(catBod(cat, ids));
            availFuncs(cat, ids);
        }
        // extract
        const extractCat = () => {
            $('.genCatLstBody').remove();
            fetch('/getGlbCol', {
                method: 'get',
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                }
            }).then((res)=>{
                return res.json();
            }).then((glob)=>{
                for (let i = 0; i < glob.categories.length; i++) {
                    if (avail.length > 0) {
                        var f = 'n';
                        for (let x = 0; x < avail.length; x++) {
                            if (avail[x] == glob.categories[i]) {
                                f = 'y';
                            }
                        }
                        if (f  == 'n') {
                            dropCat(glob.categories[i], i);
                        }
                    }else {
                        dropCat(glob.categories[i], i);
                    }
                }
            });
        }
        extractCat();

        // add posts functionalities
        $('#postJourn').click(function(){
            if ($(jhead).val() !== "" && $(jbody).val() !== "" && avail.length > 0) {
                fetch('/binary/getBin', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((crnt)=>{
                    if (crnt == 'img') {
                        fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                            return res.json();
                        }).then((test)=>{
                            if (test > 0 && jhead.val() !== '') {
                                var testar = [];
                                for (let i = 0; i < test; i++) {
                                    testar[i] = `imgHangerFltrd-aut${i}`;
                                }
                                var encount = [];
                                for (let i = 0; i < test; i++) {
                                    var tter = testar[i];
                                    encount[i] = {
                                        path: $(`#${tter}`).attr('src'),
                                        class: $(`#${tter}`).attr('class')
                                    };
                                }
                                if (test != 0) {
                                    fetch('/author/addJournal', { 
                                        method: 'post',
                                        body: JSON.stringify({ type: 'Author', content_type: 'admin_aut_journal', user: data.first_name + " " + data.last_name, mail: data.mail, admin: "Author", source: $(bjsrc).val(), source_page: $(bjsrcpg).val(), location: $(bjlctp).val(), categories: avail, journal_type: $(jtype).val(), heading: $(jhead).val(), body: $(jbody).val(),  img: encount, vid: '', comments: [], likedBy: [], readBy: [], reads: [], tagged: pass, date: [year, day, month, hour, minute] }),
                                        headers : {
                                            "Content-type" : "application/json; charset=utf-8"
                                            }  
                                    }).then((responce)=>{ return responce.json(); }).then((data)=>{
                                        if (data) {
                                            location.reload();
                                        }
                                    });
                                }else {
                                    postNorm();
                                }
                                
                            }else {
                                postNorm();
                            }
                        });
                    }else {
                        if (crnt == 'vid') {
                            fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                                return res.json();
                            }).then((test)=>{
                                var testar = [];
                                for (let i = 0; i < test; i++) {
                                    testar[i] = `vidHangerFltrd-admautJ${i}`;
                                }
                                var encount = [];
                                for (let i = 0; i < test; i++) {
                                    var tter = testar[i];
                                    encount[i] = {
                                        path: $(`#${tter}`).attr('src'),
                                        class: $(`#${tter}`).attr('class')
                                    };
                                }
                                console.log('encount: '+encount.length+', test: '+test);
                                console.log(encount);
                                fetch('/author/addJournal', { 
                                    method: 'post',
                                    body: JSON.stringify({ type: 'Author', content_type: 'admin_aut_journal', user: data.first_name + " " + data.last_name, mail: data.mail, admin: "Author", source: $(bjsrc).val(), source_page: $(bjsrcpg).val(), location: $(bjlctp).val(), categories: avail, journal_type: $(jtype).val(), heading: $(jhead).val(), body: $(jbody).val(),  img: [], vid: encount[0], comments: [], likedBy: [], readBy: [], reads: [], tagged: pass, date: [year, day, month, hour, minute] }),
                                    headers : {
                                        "Content-type" : "application/json; charset=utf-8"
                                        }  
                                }).then((responce)=>{ return responce.json(); }).then((data)=>{
                                    if (data) {
                                        location.reload();
                                    }
                                });
                            });
                        } else {
                            postNorm();
                        }
                    }
                });
            }else {
                alert("Insert necessary contents for your Journal!");
            }

            const postNorm = () => {
                fetch('/author/addJournal', { 
                    method: 'post',
                    body: JSON.stringify({ type: 'Author', content_type: 'admin_aut_journal', user: data.first_name + " " + data.last_name, admin: "Author", source: $(bjsrc).val(), source_page: $(bjsrcpg).val(), location: $(bjlctp).val(), categories: avail, journal_type: $(jtype).val(), heading: $(jhead).val(), body: $(jbody).val(),  img: [], vid: '', comments: [], likedBy: [], readBy: [], reads: [], tagged: pass, date: [year, day, month, hour, minute] }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                        }  
                }).then((responce)=>{ return responce.json(); }).then((data)=>{
                    if (data) {
                        location.reload();
                    }
                });
            }

        });
    };

    
    // journ containing body
    const bodyJourn = (data, ids, nC, ley) => { return `
        <div class="${nC} postBOd" style="width:100%; background-color:white; border-top:solid 1px skyblue;">
            <div style="width:100%; height:35px;">
                <p style="margin:5px;"> 
                    <button class="btn btn-danger btn-xs" style="border-radius:5px;" id="${ids.deletId}">delete</button>
                    <button class="btn btn-default btn-xs" style="border-radius:5px;" id="${ids.edtOpn}">edit</button>
                </p>
            </div>
            <div id="${ids.edtBdy}" style="display:none; width:95%; margin:auto; border:solid 1px #f0f0f0;">
                <input id="${ids.edtHead}" style="border:none; border-bottom:solid 1px #f0f0f0; width:90%; margin:5px;" value="${data.heading}">
                <textarea id="${ids.edtBody}" style="margin:5px; width:90%; border-radius:5px; border:solid 1px #f0f0f0;">${data.body}</textarea>
                <input id="${ids.edtSrc}" style="border:none; border-bottom:solid 1px #f0f0f0; width:90%; margin:5px;" placeholder="source" value="${data.source}">
                <input id="${ids.edtSrcBd}" style="border:none; border-bottom:solid 1px #f0f0f0; width:90%; margin:5px;" placeholder="source page" value="${data.source_page}">
                <hr style="width:90%; margin:5px;">
                <p style="margin:5px;">
                    <button id="${ids.doneEdt}" class="btn btn-success btn-xs" style="margin:5px; border-radius:15px;">done</button>
                    <button id="${ids.cancEdt}" class="btn btn-default btn-xs" style="margin:5px; border-radius:15px;">cancel</button>
                </p>
            </div>
            <div style="width:100%; height:30px; border-bottom:solid 1px #f9f9f9;">
                <p style="float:left; margin:5px; color:grey;"> <img id="" src="img/authand.png" alt="" width="20px" height="20px" style="border-radius:100%;"><span id="">${data.user}</span></p>
                <i style="float:right; margin:5px; color:silver; font-size:10px;" id="${ids.dateFlow}"></i>
            </div>
            <!-- binary secion -->
            <img id="${ids.ImgId}" src="" width="100%" style="display:none;">
            <video id="${ids.vidId}" src="" width="100%" style="display:none;" controls></video>
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
            <!-- binary donwe -->
            <p style="padding:5px; margin:5px; color:grey;" id="">${data.heading}</p>
            <div style="width:95%; height:150px; overflow-y:auto; margin:auto; border:solid 1px #f0f0f0; border-radius:5px; background-color:#f9f9f9;">
                <p style="margin:5px;">${data.body}</p>
            </div>
            <p style="padding:3px; margin:0px; font-size:12px; color:skyblue;" id="">${ley} <strong>.</strong> <i>${data.location}</i> </p>
            <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
            <div style="height:20px;">
                <a href="${data.source_page}"> <i style="color:grey; font-size:13px;padding:5px;">${data.source}</i> </a>
            </div>
            <hr style="margin:5px;">
            <p style="color:grey; font-size:12px; margin:0px; padding:5px;"> Likes - ${data.likedBy.length}, comments - ${data.comments.length} </p>
        </div>
        `;
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

    const deleteP = (data, udata, deletId) => {
        $(`#${deletId}`).click(()=>{
            fetch(`/author/delete/${data._id}`, {
                method : "delete"
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.ok === 1) {
                    getExisting(udata);
                }
            });
        })
    };

    const edtP = (data, udata, ids) => {
        $(`#${ids.edtOpn}`).click(()=>{
            $(`#${ids.edtBdy}`).slideDown();
        });
        $(`#${ids.cancEdt}`).click(()=>{
            $(`#${ids.edtBdy}`).slideUp();
        });
        $(`#${ids.doneEdt}`).click(()=>{
            if ($(`#${ids.edtHead}`).val() !== "") {
                if ($(`#${ids.edtSrcBd}`).val() == "" && $(`#${ids.edtSrc}`).val() == "") {
                    goPush()
                }else {
                    if ($(`#${ids.edtSrcBd}`).val() !== "" && $(`#${ids.edtSrc}`).val() == "") {
                        alert('complete source info!');
                    }else {
                        if ($(`#${ids.edtSrcBd}`).val() == "" && $(`#${ids.edtSrc}`).val() !== "") {
                            alert('insert source reference page!');
                        }else {
                            if ($(`#${ids.edtSrcBd}`).val() !== "" && $(`#${ids.edtSrc}`).val() !== "") {
                                goPush()
                            }
                        }
                    }
                }
            }else {
                alert('insert heading!');
            }
        });
        const goPush = () => {
            fetch(`/author/updateJrn/${data._id}`, { method: 'post', body: JSON.stringify({ heading: $(`#${ids.edtHead}`).val(), body: $(`#${ids.edtBody}`).val(), source: $(`#${ids.edtSrc}`).val(), source_page: $(`#${ids.edtSrcBd}`).val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data) {
                    location.reload();
                }
            });
        };
    };

    const createIds = (data) => {
        return {
            // smart date func
            dateFlow: 'dateFlow_' + data._id,
            // delete posts
            deletId: 'deletId_' + data._id,
            // edt
            edtOpn: 'edtOpn_' + data._id,
            edtBdy: 'edtBdy_' + data._id,
            edtHead: 'edtHead_' + data._id,
            edtBody: 'edtBody_' + data._id,
            edtSrc: 'edtSrc_' + data._id,
            edtSrcBd: 'edtSrcBd_' + data._id,
            doneEdt: 'doneEdt_' + data._id,
            cancEdt: 'cancEdt_' + data._id,
            // for imgs
            ImgId: 'ImgId_' + data._id,
            imSldId: 'imSldId_' + data._id,
            imgNow: 'imgNow_' + data._id,
            imgAll: 'imgAll_' + data._id,
            leftId: 'leftId' + data._id,
            rightId: 'rightId' + data._id,
            // vid
            vidId: 'vidId_' + data._id,
        }
    }

    // const display post
    const displayPost = (data, udata, cats) => {
        var nC = ''; var ley = '';
        for (let i = 0; i < cats.length; i++) {
            nC += ` journC_${cats[i].no}`
            ley += `${cats[i].category}, `
        }
        ids = createIds(data);
        $('#dropCatBods').prepend(bodyJourn(data, ids, nC, ley));
        // imgs
        // with/without imgs
        if (data.img.length > 0) {
            ImgFunc(data, ids.ImgId, ids.rightId, ids.leftId, ids.imSldId, ids.imgNow, ids.imgAll);
        }
        if (data.vid !== '') {
            $(`#${ids.vidId}`).fadeIn();
            $(`#${ids.vidId}`).attr('src', `${data.vid.path}`);
            $(`#${ids.vidId}`).attr('class', `${data.vid.class}`);
        }
        // delete
        deleteP(data, udata, ids.deletId);
        edtP(data, udata, ids);
        smartDate(data, ids.dateFlow);
    };

}
authors();
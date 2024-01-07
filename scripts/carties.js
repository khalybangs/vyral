function Start() {

    const mode = () => {
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $('.stylePosts, .bookBods, .srchCon_tg, .main_navs_btns_lg').css('background-color', 'white');
                $('.stylePosts').css('border-top', 'solid 1px #f0f0f0');
                $('.postInfoCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postDatefrst, .main_navs_btns_lg').css('color', 'grey');
                $('.postHeaderfrst').css('color', '#1a1a1a');
                $('.postBodyCon, .edtPstBd').css('background-color', '#f9f9f9');
                $('.areYSPCon').css('background-color', 'white');
                $('.yesesP').css('border-right', 'solid 1px #f0f0f0');
                $('.postBodyCon, .main_navs_btns_lg').css('border', 'solid 1px #f0f0f0');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #f0f0f0');
                $('.postBodtxt').css('color', '#1a1a1a');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #f0f0f0');
                $('.commentInput').css('border', 'solid 1px #f0f0f0');
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
                $('.stylePosts, .bookBods, .srchCon_tg, .main_navs_btns_lg').css('background-color', '#262626');
                $('.stylePosts').css('border-top', 'solid 1px #404040');
                $('.postInfoCon').css('border-bottom', 'solid 1px #404040');
                $('.postDatefrst, .main_navs_btns_lg').css('color', 'silver');
                $('.postHeaderfrst').css('color', 'white');
                $('.postBodyCon, .edtPstBd').css('background-color', '#333333');
                $('.areYSPCon').css('background-color', '#1a1a1a');
                $('.yesesP').css('border-right', 'solid 1px #333333');
                $('.postBodyCon, .main_navs_btns_lg').css('border', 'solid 1px #404040');
                $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #404040');
                $('.postBodtxt').css('color', 'white');
                $('.closeRdCon, .commentIn').css('border-top', 'solid 1px #404040');
                $('.commentInput').css('border', 'solid 1px #404040');
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

    // check cat
    const checkCat = () => {
        fetch('/post/getCart', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((cart)=>{
            if (cart == 'home') {
                $('#reaOrStr').fadeIn();
            }else {
                $('.catImpHme').text(cart);
                $('#catImpHme').fadeIn();
                var x = window.matchMedia("(max-width: 600px)")
                if (x.matches) {
                    $('#indexmin').css('display', 'none');
                    $('#navopener-xs').click();
                } else {
                    $('.leftNavCon').css('display', 'none');
                    $('#othr_cats_lgC').fadeIn();
                }
            }
        });
    };
    checkCat();

    // ---------------
    // CHNGE CART BTNS
    // ---------------
    const dropNB = () => {
        /// all navs
        $('.allcats_navMC');
        const all = (cats) => {
            const allLst = () => {
                return `
                <div class="row all_NV">
                    <div class="col-lg-12 col-xs-12" style="position:fixed; z-index:4; height:100%;">
                        <div class="row" style="height:100%;">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6 col-xs-12" style="height:100%;">
                                <div style="width:100%; height:95%; margin-top:2%; display:none; border-radius:5px; box-shadow:0px 0px 20px -5px rgba(0, 0, 0, 0.107);" id="allcats_navMC" class="stylePosts">
                                    <div style="width:100%; height:5%;">
                                        <div style="width:100%; height:100%;">
                                            <p style="text-align:center; margin:0px; padding:2px;"> <img id="cls_allNC" src="img/can.png" width="15px" height="15px" style="cursor:pointer;"> </p>
                                        </div>
                                    </div>
                                    <div style="width:100%; height:95%; overflow-y:auto;">
                                        <span id="drp_cat_nvN"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                    </div>
                </div>
                `
            };
            $('#dropChat').prepend(allLst());
            mode();
            $('#allcats_navMC').fadeIn();
            $('#container-one').css('filter', 'blur(5px)');
            $('#cls_allNC').click(()=>{
                $('.all_NV').remove();
                $('#container-one').css('filter', '');
            });

            const drpA = (cat, i, flg) => {
                const btn = `btn_mainnav_all${i}`;
                if (flg == 'n') {
                    $('#drp_cat_nvN').append(`
                    <div class="stylePosts ${btn}" style="width:100%; height:45px; cursor:pointer;">
                        <p class="postHeaderfrst" style="margin:0px; padding:5px; cursor:pointer; font-size:18px;">${cat}</p>
                    </div>
                    `);
                }else {
                    $('#drp_cat_nvN').append(`
                    <div class="stylePosts ${btn}" style="width:100%; height:45px; cursor:pointer;">
                        <p class="" style="margin:0px; padding:5px; cursor:pointer; font-size:18px; color:darkorange; font-weight:normal;">${cat}</p>
                    </div>
                    `);
                }
                $(`.${btn}`).click(()=>{
                    chngCur(cat);
                });
            };
            // extract them
            fetch('/post/getCart', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((data2)=>{
                for (let i = 0; i < cats.length; i++) {
                    var flg = 'n';
                    if (cats[i] == data2) {
                        flg = 'y';
                    }
                    drpA(cats[i], i, flg);
                    mode();
                }
            });
        };
        // basic navs
        const drop = (cat, i, flg) => {
            const btn = `btn_mainnav_${i}`;
            if (flg == 'y') {
                $('#dropBgNav, #dropBgNav-xs').append(`
                    <button class="${btn}" type="button" name="button" class="btn btn-warning btn-xs main_navs_btns" style="background-color:darkorange; color:white; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">${cat}</button>
                `);
            }else {
                $('#dropBgNav, #dropBgNav-xs').append(`
                    <button class="${btn}" type="button" name="button" class="btn btn-warning btn-xs main_navs_btns" style="background-color:transparent; color:orange; border-style:solid; border-width:1px; border-color:darkorange; border-radius:15px;">${cat}</button>
                `);
            }
            $(`.${btn}`).click(()=>{
                chngCur(cat);
            });
        }
        fetch('/getGlbCol', {
            method: 'get',
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            }
        }).then((res)=>{
            return res.json();
        }).then((glb)=>{
            fetch('/post/getCart', { method: 'get' }).then((responce)=>{
            return responce.json();
            }).then((data2)=>{
                if (data2) {
                    if (data2 == 'home') {
                        $('#openwj').fadeIn();
                    }
                    $('#drop_min_LG_navs').append(`
                        <button class="main_navs_btns_lg_h btn btn-warning btn-sm main_navs_btns_lg" type="button" name="button" style="border-radius:15px; margin:2px; margin-top:3px; font-weight:lighter;"> <img src="img/home3.png" width="13px" height="13px" style="margin-top:-1px;"> home</button>
                    `);
                    $(`.main_navs_btns_lg_h`).click(()=>{
                        chngCur('home');
                    });
                    for (let z = 0; z < glb.categories.length; z++) {
                        if (z < 9) {
                            var flg = 'n';
                            if (glb.categories[z] == data2) {
                                flg = 'y';
                            }
                            drop(glb.categories[z], z, flg);
                        }
                        if (z == 9) {
                            $('#dropBgNav, #dropBgNav-xs').append(`
                                <span class="openAll_mainNav" style="color:orange; margin:0px; padding:5px; font-size:16.5px; font-weight:normal; cursor:pointer;">All</span>
                            `);
                            $(`.openAll_mainNav`).click(()=>{
                                all(glb.categories);
                            });
                        }
                        const btn = `btn_mainnav_lg_${z}`;
                        $('#drop_min_LG_navs').append(`
                            <button class="${btn} btn btn-warning btn-sm main_navs_btns_lg" type="button" name="button" style="border-radius:15px; margin:2px; margin-top:3px; font-weight:lighter;">${glb.categories[z]}</button>
                        `);
                        $(`.${btn}`).click(()=>{
                            chngCur(glb.categories[z]);
                        });
                        mode();
                    }
                }
            });
        });
    }
    var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 1);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {
                jrns = 0; autJrns = 0;
                dropNB();
                clearInterval(x);
            }
        }, 1000);
    // HOME
    $('#ind, #ind2, #ind-xs, #ind2-xs').click(()=>{
        var curnt = 'home';
        chngCur(curnt);
    });
    // music
    $('#mus, #mus-xs').click(()=>{
        var curnt = 'Music';
        chngCur(curnt);
    });
    // politics
    $('#pol, #pol-xs').click(()=>{
        var curnt = 'Politics';
        chngCur(curnt);
    });
    // sports
    $('#spo, #spo-xs').click(()=>{
        var curnt = 'Sports';
        chngCur(curnt);
    });
    // Entertainment
    $('#ent, #ent-xs').click(()=>{
        var curnt = 'Entertainment';
        chngCur(curnt);
    });
    // Fashion
    $('#fas, #fas-xs').click(()=>{
        var curnt = 'Fashion';
        chngCur(curnt);
    });
    // Business
    $('#bus, #bus-xs').click(()=>{
        var curnt = 'Business';
        chngCur(curnt);
    });
    // People
    $('#peo, #peo-xs').click(()=>{
        var curnt = 'People';
        chngCur(curnt);
    });
    // art
    $('#art, #art-xs').click(()=>{
        var curnt = 'Art';
        chngCur(curnt);
    });

    // CHNGE CART FUNC
    const chngCur = (crnt) => {

        fetch('/post/chngCart', { method: 'post', body: JSON.stringify({ current: crnt }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((res)=>{
            return res.json();
        }).then((crnt)=>{
            if (crnt) {
                location.replace('/home');
            }
        });

    };

};
Start();
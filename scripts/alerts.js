function AlertAll() {
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

    // SIGNUP PAGE
    //-------------

    // LOGIN PAGE
    //-------------
    /*var forg = `
            <div class="col-md-4 col-lg-4 col-xs-12" style="height:450px; background-color:white; box-shadow:0px 0px 100px #1a1a1a; border-radius:5px; position:fixed; z-index:4; margin:10px; margin-left:20px; display:none;" id="forgotAlert">
                <div class=""style="width:100%; height:30px; float:; border-bottom:solid 1px #f0f0f0; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> Forgot your password? </p>
                    <span style="float:right; margin:5px; color:red; font-size:18px; cursor:pointer;" id="closeForg">&times;</span>
                </div>
                <div style="height:420px; width:100%; overflow-y:auto;">

                    <div style="border-bottom:solid 1px #f0f0f0; height:50px; width:100%;" id="f1">
                        <input type="text" name="" id="insUs" placeholder="Insert username" style="width:65%; height:30px; float:left; margin:5px; background-color:white; border:none; border-bottom:solid 1px #dddddd;">
                        <button class="btn btn-default btn-xs" style="border-radius:5px; margin:5px; margin-top:10px; float:left;" id="goIns">go</button>
                    </div>
                    <!-- conditional input space -->

                    <div style="border-bottom:solid 1px #f0f0f0; height:50px; width:100%; cursor:pointer;" id="f2">
                        <p style="padding:10px; color:grey;">Send Verification Code to your email?</p>
                    </div>
                    <div id="f2p" style="width:100%; height:85px; border-bottom:solid 1px #f0f0f0; background-color:#f9f9f9; display:none;">
                        <p style="color:silver; font-size:13px; margin:5px;"> Verification code has been sent to your Email and should be recieved in less than: <strong style="color:grey;">00</strong> <strong id="cf2p" style="color:red; cursor:pointer;">cancel</strong> </p>
                        <input type="text" name="" id="" placeholder="*** ***" style="width:65%; height:30px; float:left; margin:5px; background-color:white; border:solid 1px #dddddd; border-radius:5px;">
                        <button class="btn btn-default btn-xs" style="border-radius:5px; margin:5px; float:left;">go</button>
                    </div>
                    <!-- send to phone bellow -->
                    <div style="border-bottom:solid 1px #f0f0f0; height:50px; width:100%; cursor:pointer;" id="f3">
                        <p style="padding:10px; color:grey;">Send Verification Code to assigned phone number?</p>
                    </div>
                    <div id="f3p" style="width:100%; height:85px; border-bottom:solid 1px #f0f0f0; background-color:#f9f9f9; display:none;">
                    <p style="color:silver; font-size:13px; margin:5px;"> Verification code has been sent to your Phone Number and should be recieved in less than: <strong style="color:grey;">00</strong> <strong id="cf3p" style="color:red; cursor:pointer;">cancel</strong> </p>
                    <input type="text" name="" id="" placeholder="*** ***" style="width:65%; height:30px; float:left; margin:5px; background-color:white; border:solid 1px #dddddd; border-radius:5px;">
                    <button class="btn btn-default btn-xs" style="border-radius:5px; margin:5px; float:left;">go</button>
                </div>
                    <!--send code to user -->

                    <div style="border-bottom:solid 1px #f0f0f0; height:50px; width:100%; cursor:pointer;" id="f4">
                        <p style="padding:10px; color:grey;">Write answer to assigned user security Q/A?</p>              
                    </div>
                    <div id="f4p" style="width:100%; border-bottom:solid 1px #f0f0f0; background-color:#f9f9f9; display:none;">
                        <p id="qAssign" style="height:40px; padding:5px; color:grey;"></p>
                        <input type="text" name="" id="qain" placeholder="Answer" style="width:65%; height:30px; float:left; margin:5px; background-color:white; border:solid 1px #dddddd; border-radius:5px;">
                        <button id="getA" class="btn btn-default btn-xs" style="border-radius:5px; margin:5px; float:left;">go</button><br><br>
                    </div>
                    <!-- conditional input space -->

                </div>
            </div>
    `;
     // forgotpass functions
     $('#fgspan').before(forg);
     $('#closeForg').click(function() {
         $('#forgotAlert').fadeOut();
         $('#f2, #f3, #f4').css('display', 'block');
         $('#f2p, #f3p, #f4p').slideUp();
     });
     $('#f2').click(function() {
        var ran = Math.random();
        ran = ran * 1000000000;
        ran.toString();
         $('#randis').text(ran);
         var afran = $('#randis').text().slice(0,6);
         alert(afran);           
         $('#f3, #f4').css('display', 'none');
         $('#f3p, #f4p').slideUp();
        $('#f2p').slideDown();
        $('#cf2p').click(function() {
            $('#f3, #f4').css('display', 'block');
            $('#f2p').slideUp();
        });
     });
     $('#f3').click(function() {
        var ran = Math.random();
        ran = ran * 1000000000;
        ran.toString();
        $('#randis').text(ran);
        var afran = $('#randis').text().slice(0,6);
        alert(afran);
        $('#f2, #f4').css('display', 'none');
        $('#f2p, #f4p').slideUp();
       $('#f3p').slideDown();
       $('#cf3p').click(function() {
            $('#f2, #f4').css('display', 'block');
            $('#f3p').slideUp();
        });
    });
    $('#f4').click(function() {
        $('#f3p, #f2p').slideUp();
       $('#f4p').slideDown();
    });*/

    // write all journals
    $('#writej-alert').remove();
    var writej = `
    <div class="row">
        <div id="writej-alert" class="col-lg-4 col-xs-12 write_alrts" style="position:fixed; z-index:4; margin-top:10px; display:none;">
            <div class="editPopBod2" style="height:475px; width:100%; border-radius:5px;">
                <div id="posterClosecon" class=""style="width:100%; height:30px; float:; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> post </p>
                    <span style="float:right; margin:2.5px; color:red; cursor:pointer;" id="closewj"><img src="img/can.png" width="15px" height="15px"></span>
                </div>
                <div style="width:100%; height:35px; border-bottom:solid 1px orange;">
                    <img id="jnavo" src="img/read.png" alt="" width="20px" height="20px" style="float:left; margin:5px; cursor:pointer;">
                    <img id="snavo" src="img/strings2.png" alt="" width="20px" height="20px" style="float:left; margin:5px; cursor:pointer; margin-left:5%;">
                    <img id="anavo" src="img/authand2.png" alt="" width="20px" height="20px" style="float:right; margin:5px; cursor:pointer; margin-right:5%; display:none;">
                </div>
                <!-- write journal container -->
                <div style="width:100%; height:325px; overflow-y:auto;" id="writejou">
                
                    <!-- journal div -->
                    <br>
                    <input maxlength="200" id="mainjh" style="border:none; width:90%; margin:10px; background-color:transparent;" class="p_subHs" placeholder="header" />
                    <textarea maxlength="3000" id="mainjb" style="height:60px; margin:10px; width:90%; border-radius:5px;" class="p_subHs" placeholder="body"></textarea>
                
                    <!-- picture div -->
                    <div style="width:100%; height:35px; margin-top:10px; cursor:pointer;" id="openIj">
                        <p style="padding:8px;" class="p_subHs"> <img src="img/img.png" alt="" width="20px" height="15px"> add images/videos <span class="caret" style="color:silver; font-size:20px;"></span> </p>
                    </div>
                    <div style="width:97%; height:250px; margin:auto; margin-top:5px; border-radius:5px; display:none;" id="jpicdiv">
                        <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="closeImgcon"></p>
                        </div>
                        <div style="width:100%; height:225px; overflow-y:auto;">
                            <br style="argin:7px;">
                            <div id="addimgcon">
                                <p style="text-align:center; margin:5px;">

                                    <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                        <input type="file" name="file" id="postImage" accept="image/*" multiple>
                                    </form>
                                    <form action="/video/videoUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                        <input type="file" name="file" id="postVideoJrnl" accept="video/*">
                                    </form>
                                    <div style="width:80%; margin:auto;">
                                        <div id="fileTpeCon-jrn" style="margin-top:10px; width:140px; margin:auto;">
                                            <img src="img/imgtype.png" width="50px" height="60px" style="float:left; cursor:pointer; margin:5px;" id="ClickImgIn">
                                            <img src="img/vids.png" width="50px" height="60px" style="float:right; cursor:pointer; margin:5px;" id="clickVidJrn">
                                        </div>
                                        <div id="GoImgDiv"  style="display:none; margin:auto; width:165px; margin-top:10px;">
                                            <button id="SendGoImgs" type="button" name="button" class="btn btn-default btn-xs p_subHs" style="border:solid 1px darkorange; border-radius:8px; background-color:transparent; float:left;"> verify images <strong style="color:darkorange;">+</strong> </button>
                                            <button id="multibut" type="button" name="button" class="btn btn-default btn-xs p_subHs" style="border:solid 1px orangered; border-radius:8px; background-color:transparent; float:right;"> cancel <strong style="color:orangered;">&times;</strong> </button>
                                        </div>
                                    </div>
                                    <!-- img reviewer -->
                                    <div class="row scrlimgCon" id="scrlimgCon-jrn" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                        <div class="closeImgFlwCon" id="closeImgFlwCon-jrn" style="width:98%; height:25px; margin:auto;" >
                                            <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnIm_forJrn">cancel</p>
                                        </div>
                                        <br>
                                        <span id="flowHangerFltrd-jrn"></span>
                                    </div>
                                    <!-- vid reviewer -->
                                    <div class="row scrlimgCon" id="scrlvidCon-jrn" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                        <div class="closeImgFlwCon" id="closeImgFlwCon-jrn" style="width:98%; height:25px; margin:auto;">
                                            <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnVd_forJrn">cancel</p>
                                        </div>
                                        <br>
                                        <span id="flowHangerFltrd-vid-jrn"></span>
                                    </div>

                                </p>
                            </div>
                            <div style="width:95%; height:180px; margin:auto; background-color:white; border-radius:5px; display:none;" id="imgAlignDiv">
                                <div style="width:100%; overflow-x:auto; height:180px;">
                                    <span id="ScrollImg"></span>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                    <!-- tag frnds div -->
                    <div style="width:100%; height:35px; margin-top:10px; cursor:pointer;" id="openTj">
                        <p style="padding:8px;" class="p_subHs"> <img src="img/frnds.png" alt="" width="25px" height="20px"> tag friends <span class="caret" style="color:silver; font-size:20px;"></span> </p>
                    </div>
                    <div style="width:97%; margin:auto; margin-top:5px; margin-bottom:5px; border-radius:5px; display:none;" id="tagfrnddiv">
                        <div class="tagSrchbx" style="width:98%; height:30px; margin:auto;">
                            <input id="tagSrchJrn" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; border:none; width:85%; margin:4px; background-color:transparent; color:skyblue;" placeholder="search friends" />
                            <img src="img/searcha.png" width="20px" height="20px" style="float:left; margin:4px; cursor:pointer;">
                        </div>
                        <div id="tagedMainCon" class="tagSrchbx" style="width:100%; display:none;">
                            <p class="p_subHs" style="font-size:12px; text-align:center; margin:0px; padding:5px; cursor:pointer;">Tagged <strong id="incTagTot"></strong> people</p>
                            <div class="theChnCon" style="margin:auto; width:90%; height:100px; margin-bottom:10px; border-radius:5px; overflow-y:auto;">
                                <span id="flowAlredTagd"></span>
                            </div>
                        </div>
                        <div style="width:100%; height:198px; overflow-y:auto;">
                            <br style="margin:5px;">

                            <div id="conjrnTagknwnsrc">
                                <span id="flowfrndinTag"></span>
                                <span id="flowfrndinTag2"></span>
                            </div>

                            <div id="conjrnTagsrc" style="display:none;">
                                <span id="flowevrinTag"></span>
                                <span id="flowevrinTag2"></span>
                            </div>

                            <br>
                        </div>
                        <div id="closeTagbutcon" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="closeImgcon"></p>
                        </div>
                    </div>

                    <!-- journal div -->
                    <div style="" id="jjoudiv">

                    </div>

                </div>

                <!-- write string container -->
                <div style="width:100%; height:325px; overflow-y:auto; display:none;" id="writeStr">
                    <br>

                    <!-- public/private -->
                    <div style="width:100%; height:45px;">
                        <div id="PubStrWr" style="margin:5px; width:60px; height:25px; border-bottom:solid 1px skyblue; float:left; cursor:pointer;">
                            <p style="margin:0px; padding:5px; text-align:center;" class="p_subHs">Public</p>
                        </div>
                        <div id="PerStrWr" style="margin:5px; width:70px; height:25px; float:left; cursor:pointer;">
                            <p style="margin:0px; padding:5px; text-align:center;" class="p_subHs">Private</p>
                        </div>
                    </div>

                    <input maxlength="100" id="ScStr" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="border:none; width:90%; margin:10px; background-color:transparent; color:darkorange;" placeholder="string name" />
                    <input maxlength="200" id="mainStrh" style="border:none; width:90%; margin:10px; background-color:transparent; display:none;" class="p_subHs" placeholder="header" />
                    <br>
                    <textarea id="mainsb" class="p_subHs" style="height:60px; margin:10px; width:90%; border-radius:5px; display:none;" placeholder="body"></textarea>

                    <!-- pub str srh flow -->
                    <div id="srchPubStrFlw" style="width:100%; height:175px; margin-top:20px; overflow-y:auto; display:none;">
                        <br>

                        <div id="alrtPubStrNoE" style="width:60%; margin:auto; display:none; margin-top:30px;">
                            <p class="p_subHs" style="text-align:center; margin:2px; font-size:12.5px;">This String does not exist</p>
                        </div>
                        <p id="crtNewStrCon" style="text-align:center; margin:0px; font-size:10px;">
                            <button class="btn btn-xs btn-default" id="alrtPubStrNoE-btn" style="border:solid 1px darkorange; color:orange; background-color:transparent; border-radius:7.5px;">create new string?</button>
                        </p>

                        <span id="pbStrFlw"></span>

                        <br>
                    </div>
                    <!-- append chsn pubStr -->
                    <span id="chsnPbStr"></span>

                    <!-- add-string contents div -->
                    <div style="width:100%; height:35px; margin-top:10px; cursor:pointer; display:none;" id="openStrcontdiv">
                        <p style="padding:8px;" class="p_subHs"> <img src="img/img.png" alt="" width="20px" height="15px"> <img src="img/wa.png" alt="" width="15px" height="15px"> add String contents <span class="caret" class="pL_subHs" style="font-size:20px;"></span> </p>
                    </div>
                    <div style="width:97%; height:300px; margin:auto; margin-top:5px; border-radius:5px; display:none;" id="strContDiv">
                        <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="closeStrcontdiv"></p>
                        </div>
                        <div style="width:100%; height:275px; overflow-y:auto;">
                            <input maxlength="200" id="strConHead" style="border:none; width:90%; margin:10px; background-color:transparent;" class="p_subHs" placeholder="header" />
                            <p id="reqStrInf" class="p_subHs" style="text-align:center; padding:5px; margin:0px; font-size">Add image or video<!--/video--> <strong style="color:orangered; font-size:30px;">.</strong><i style="color:darkorange; font-size:10px;">required</i></p>
                            <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                <input type="file" name="file" id="postStrImage" accept="image/*" multiple>
                            </form>
                            <form action="/video/videoUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                <input type="file" name="file" id="postVideoStr" accept="video/*">
                            </form>
                            <div id="" style="width:80%; margin:auto;">
                                <div id="fileTpeCon-str" style="margin-top:10px; width:140px; margin:auto; ">
                                    <img src="img/imgtype.png" width="50px" height="60px" style="cursor:pointer; margin:5px; float:left;" id="ClickImgStrIn">
                                    <img src="img/vids.png" width="50px" height="60px" style="cursor:pointer; margin:5px; float:right;" id="clickVidStr">
                                </div>
                                <div id="GoImgStrDiv" style="display:none; margin:auto; width:165px; margin-top:10px;">
                                    <button id="SendGoStrImgs" type="button" name="button" class="btn btn-default btn-xs p_subHs" style="border:solid 1px darkorange; border-radius:8px; background-color:transparent; float:left;"> verify images <strong style="color:darkorange;">+</strong> </button>
                                    <button id="multibut" type="button" name="button" class="btn btn-default btn-xs p_subHs" style="border:solid 1px orangered; border-radius:8px; background-color:transparent; float:right;"> cancel <strong style="color:orangered;">&times;</strong> </button>
                                </div>
                            </div>
                            <!-- img reviewer -->
                            <div class="row scrlimgCon" id="scrlimgCon-str" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                <div class="closeImgFlwCon" id="closeImgFlwCon-str" style="width:98%; height:25px; margin:auto;">
                                    <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnIm_forStr">cancel</p>
                                </div>
                                <br>
                                <span id="flowHangerFltrd-str"></span>
                            </div>
                            <!-- vid reviewer -->
                            <div class="row scrlimgCon" id="scrlvidCon-str" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                                <div class="closeImgFlwCon" id="closeImgFlwCon-jrn" style="width:98%; height:25px; margin:auto;">
                                        <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnVd_forStr">cancel</p>
                                </div>
                                <br>
                                <span id="flowHangerFltrd-vid-str"></span>
                            </div>
                        
                        </div>

                    </div>
                    <!-- add-friends contents div -->
                    <div style="display:none; width:100%; height:35px; margin-top:10px; cursor:pointer;" id="openStrfrdiv">
                        <p style="padding:8px;" class="p_subHs"> <img src="img/frnds.png" alt="" width="20px" height="15px"> Tie friends to string <span class="caret" style="color:silver; font-size:20px;"></span> </p>
                    </div>
                    <div style="width:97%; margin:auto; margin-top:5px; margin-bottom:10px; border-radius:5px; display:none;" id="strFrDiv">

                        <div class="tagSrchbx" style="width:98%; height:30px; margin:auto;">
                            <input id="tieSrchJrn" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="float:left; border:none; width:85%; margin:4px; background-color:transparent; color:skyblue;" placeholder="search friends" />
                            <img src="img/searcha.png" width="20px" height="20px" style="float:left; margin:4px; cursor:pointer;">
                        </div>
                        <div id="tiedMainCon" class="tagSrchbx" style="width:100%; display:none;">
                            <p class="p_subHs" style="font-size:12px; text-align:center; margin:0px; padding:5px; cursor:pointer;">Tied <strong id="incTieTot"></strong> people</p>
                            <div class="theChnCon" style="margin:auto; width:90%; height:100px; margin-bottom:10px; border-radius:5px; overflow-y:auto;">
                                <span id="flowAlredTied"></span>
                            </div>
                        </div>
                        <div style="width:100%; height:198px; overflow-y:auto;">
                            <br style="margin:5px;">

                            <div id="conjrnTieknwnsrc">
                                <span id="flowfrndinTie"></span>
                                <span id="flowfrndinTie2"></span>
                            </div>

                            <div id="conjrnTiesrc" style="display:none;">
                                <span id="flowevrinTie"></span>
                                <span id="flowevrinTie2"></span>
                            </div>

                            <br>
                        </div>

                        <div id="closeStrFrbutcon" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="closeStrcontdiv"></p>
                        </div>
                    </div>

                </div>
                
                <!-- write aut's container -->
                <div style="width:100%; height:325px; overflow-y:auto; display:none;" id="writeAut">
                    <br>

                    <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                        <input type="file" name="file" id="postImageUAu" accept="image/*">
                    </form>

                    <!-- book/journal -->
                    <div style="width:100%; height:45px;">
                        <div id="bookNWr" style="margin:5px; width:60px; height:25px; border-bottom:solid 1px skyblue; float:left; cursor:pointer;">
                            <p class="p_subHs" style="margin:0px; padding:5px; text-align:center;">Book</p>
                        </div>
                        <div id="jourANWr" style="margin:5px; width:70px; height:25px; float:left; cursor:pointer;">
                            <p class="p_subHs" style="margin:0px; padding:5px; text-align:center;">Journal</p>
                        </div>
                    </div>

                    <!-- write book con -->
                    <div style="width:100%;" id="UAWrtB">
                        <p style="margin:0px; padding:5px; color:silver; text-align:center; font-size:13px;">cover image</p>
                        <div style="width:100px; height:130px; margin:auto;">
                            <div id="upldimg-bookCvr" style="background-image:url(img/imgtype.png); background-size:100% 100%; width:100%; height:100%; cursor: pointer;"></div>
                            <img id="upplddImg-bookCvr" style="width: 100%; height: 100%; display:none; margin:auto; border-radius: 10px;">
                        </div>
                        <p id="dlt-uplddBkCvr" style="text-align: center; margin: 0px; padding: 5px; cursor: pointer; display:none;"><img src="img/can.png" width="25px" height="25px" alt=""></p>
                        <br>
                        <p style="text-align:center; margin:5px;"><input maxlength="200" class="inptJI p_subHs" id="bkTTlUAut" style="border:none; width:90%; margin:10px; background-color:transparent; text-align:center;" placeholder="book title" /></p>
                        <div style="width:95%; height:400px; margin:auto; margin-top:10px; border-radius:5px;" class="alrtSubCons">
                            <div style="width:100%; height:25px;">
                                <p class="p_subHs" style="margin:0px; padding:3px; text-align:center; font-size:13px;">chapters & contents</p>
                            </div>
                            <div style="width:100%; height:115px;">
                                <div style="width:95%; height:110px; margin:auto; margin-top:3.5px; border-radius:5px; overflow-x:auto;" class="glossFlow">
                                    <div id="chptOvFCon" style="width:160px; height:100%;">

                                        <div style="width:70px; height:100%; float:left; cursor:pointer;" id="rdMeChptr">
                                            <p style="text-align:center; color:silver; font-size:13px; margin:0px; padding:2px;">read me</p>
                                            <div id="rdMChptr" style="margin:auto; width:55px; height:55px; border-radius:5px; border:solid 0.8px skyblue; cursor:pointer;" class="chptrsCr">
                                                <img src="img/bookinf.png" width="40px" height="40px" style="margin-left:7px; margin-top:7px; opacity:0.5;">
                                            </div>
                                        </div>

                                        <span id="drpWrtChptrs"></span>

                                        <div style="width:70px; height:100%; float:right;" id="addCHptrLs">
                                            <br>
                                            <div style="margin:auto; width:55px; height:55px; margin-top:-2.5px; cursor:pointer; opacity:0.8; background-image:url(img/addxs.png); background-size:100% 100%;">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div style="width:100%; height:240px;">
                                <p id="crntChptLsTtl" class="p_subHs" style="margin:3px; padding:5px; text-align:center; font-size:13px;">read me: all needed information for the book</p>
                                <div style="width:92.5%; margin:auto;">
                                    <input maxlength="200" class="inptJI p_subHs" id="chptrTltl" style="border:none; width:100%; margin-top:5px; background-color:transparent; display:none;" placeholder="chapter heading" />
                                    <textarea maxlength="3000" class="txtJI p_subHs" id="chptrBdy" style="height:150px; margin-top:5px; width:100%; border-radius:5px;" placeholder="body"></textarea>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>
                    
                    <!-- write journal con -->
                    <div style="width:100%; display:none;" id="UAWrtJ">

                        <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                            <input type="file" name="file" id="postImageUAuJ" accept="image/*" multiple>
                        </form>
                        <form action="/video/videoUpload" method="post" enctype="multipart/form-data" style="display:none;">
                            <input type="file" name="file" id="postVideoUAuJ" accept="video/*">
                        </form>

                        <br>
                        <input maxlength="200" id="autJI" class="p_subHs" style="border:none; width:90%; margin:10px; background-color:transparent;" placeholder="header" />
                        <textarea maxlength="3000" class="p_subHs" id="autJB" style="height:60px; margin:10px; width:90%; border-radius:5px;" placeholder="body"></textarea>
                    
                        <div style="width:80%; margin:auto;">
                            <div id="fileTpeCon-UautJ" style="margin-top:10px; width:140px; margin:auto;">
                                <img src="img/imgtype.png" width="50px" height="60px" style="float:left; cursor:pointer; margin:5px;" id="ClickImgInUA">
                                <img src="img/vids.png" width="50px" height="60px" style="float:right; cursor:pointer; margin:5px;" id="clickVidJrnUA">
                            </div>
                        </div>
                        <!-- img reviewer -->
                        <div class="row jpicdiv" id="scrlimgCon-UautJ" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                            <div class="closeImgFlwCon" id="closeImgFlwCon-UautJ" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnIm_forUautJ">cancel</p>
                            </div>
                            <br>
                            <span id="flowHangerFltrd-UautJ"></span>
                        </div>
                        <!-- vid reviewer -->
                        <div class="row jpicdiv" id="scrlvidCon-UautJ" style="width:98%; margin:auto; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                            <div class="closeImgFlwCon" id="closeImgFlwCon-UautJ" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center; color:orangered; margin:5px; cursor:pointer;" id="cnVd_forUautJ">cancel</p>
                            </div>
                            <br>
                            <span id="flowHangerFltrd-vid-UautJ"></span>
                        </div>


                    </div>

                    <br>
                </div>

                <div style="height:40px; width:100%; border-top:solid 1px orange;">
                    <p class="DoneOne" style="text-align:center; margin:8px;"> <button class="btn btn-default btn-xs p_subHs" style="border-radius:5px; background-color:transparent;" id="postJou">done</button> </p>
                    <p class="DoneTwo" style="text-align:center; margin:8px; display:none;"> <button class="btn btn-default btn-xs p_subHs" style="border-radius:5px; background-color:transparent;" id="postStr">done</button> </p>
                    <p class="DoneThree" style="text-align:center; margin:8px; display:none;"> <button class="btn btn-default btn-xs p_subHs" style="border-radius:5px; background-color:transparent;" id="postUAut">done</button> </p>
                    <p id="alrtBoth" style="color: orangered; font-size: 12px; text-align: center; margin: 0px; padding: 5px; display: none;">tesing</p>
                </div>
            </div>
        </div>
    </div>
    `;
    $('#dropChat').prepend(writej);
    $('#tagSrchJrn, #tieSrchJrn').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
    });
    $('#jnavo').click(function(){
        $('#writeStr, #writeAut, .DoneTwo, .DoneThree').css('display', 'none');
        $('.DoneOne').css('display', 'block');
        $('#jnavo').attr('src', 'img/read.png');
        $('#snavo').attr('src', 'img/strings2.png');
        $('#anavo').attr('src', 'img/authand2.png');
        $('#writejou').fadeIn();
        $('#alrtBoth, #strContDiv').css('display', 'none');
        rstrtRd();
        // str clicks
        $('#PerStrWr').click();
        $('#PubStrWr').click();
    });
    $('#snavo').click(function(){
        $('#writejou, #writeAut, .DoneOne, .DoneThree').css('display', 'none');
        $('.DoneTwo').css('display', 'block');
        $('#snavo').attr('src', 'img/strings.png');
        $('#jnavo').attr('src', 'img/readen.png');
        $('#anavo').attr('src', 'img/authand2.png');
        $('#writeStr').fadeIn();
        $('#alrtBoth').css('display', 'none');
        rstrtRd();
    });
    $('#anavo').click(function(){
        $('#writejou, #writeStr, .DoneOne, .DoneTwo').css('display', 'none');
        $('.DoneThree').css('display', 'block');
        $('#anavo').attr('src', 'img/authand.png');
        $('#jnavo').attr('src', 'img/readen.png');
        $('#snavo').attr('src', 'img/strings2.png');
        $('#writeAut').fadeIn();
        $('#alrtBoth').css('display', 'none');
        rstrtRd();
    });
    $('#checknum-j').click(()=>{
        $('#openwj').click();
    });
    $('#openwj, #checknum-j').click(function(){
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data2) => { 
            if (data2.user_type.type && data2.user_type.status == 'on') {
                $('#anavo').fadeIn();
            }else {
                $('#anavo').css('display', 'none');
            }
            $('#container-one').css('filter', 'blur(5px)');
            $('#writej-alert').slideDown();
        });
    });
    $('#closewj').click(function(){
        $('#jnavo').click();
        $('#mainjh, #mainjb, #postImage, #postVideoJrnl, #tagSrchJrn, #ScStr, #mainStrh, #mainsb, #strConHead, #postVideoStr, #tieSrchJrn').val('');
        // last
        $('#container-one').css('filter', 'blur()');
        $('#writej-alert').fadeOut();
        location.reload();
    });

    // cancel bins
    $('#cnIm_forJrn').click(()=>{
        $('.mainCloneImgs, .allImgs_app').remove();
        $('#scrlimgCon-jrn').slideUp();
        $('#fileTpeCon-jrn').slideDown();
    })
    // for vid
    $('#cnVd_forJrn').click(()=>{
        $('.editHangVid, .allVids_aedt').remove();
        $('#scrlvidCon-jrn').slideUp();
        $('#fileTpeCon-jrn').slideDown();
    })
    // canl for str
    $('#cnIm_forStr').click(()=>{
        $('.mainCloneImgs, .allImgs_app').remove();
        $('#scrlimgCon-str').slideUp();
        $('#fileTpeCon-str').slideDown();
    })
    // for vid
    $('#cnVd_forStr').click(()=>{
        $('.editHangVid, .allVids_aedt').remove();
        $('#scrlvidCon-str').slideUp();
        $('#fileTpeCon-str').slideDown();
    })
    // aut
    $('#cnIm_forUautJ').click(()=>{
        $('.mainCloneImgs, .allImgs_app').remove();
        $('#scrlimgCon-UautJ').slideUp();
        $('#fileTpeCon-UautJ').fadeIn();
    })
    $('#cnVd_forUautJ').click(()=>{
        $('.editHangVid, .allVids_aedt').remove();
        $('#scrlvidCon-UautJ').slideUp();
        $('#fileTpeCon-UautJ').fadeIn();
    })
    
    $('#closeTagbutcon').click(()=>{
        $('#tagfrnddiv').slideUp();
    });
    $('#closeImgcon').click(function() {
        $('#jpicdiv').css('display', 'none');
        $('#openIj').slideDown();
    });
     $('#openIj').click(function(){
        $('#openIj').css('display', 'none');
        $('#jpicdiv').slideDown();
    });
    $('#closejcon').click(function(){
        $('#openIj').slideDown();
        $('#jpicdiv').css('display', 'none');
    });
    $('#multibut').click(function(){
        $('#multiimg').click();
    });

    const rstrtRd = () => {
        // main ins
        $('#mainjh, #mainjb, #tagSrchJrn').val('');
        // bins && tags
        $('#postImage, #postVideoJrnl').val('');
        $('.mainCloneImgs, .allImgs_app, .editHangVid, .allVids_aedt').remove();
        $('#scrlimgCon-jrn, #scrlvidCon-jrn, #scrlimgCon, #jpicdiv, #tagfrnddiv, #tagedMainCon').slideUp();
        $('#openIj, #openTj, #fileTpeCon-jrn').slideDown();
        fetch('/post/remTags', { method: 'get' }).then((res)=>{
            return res.json()
        }).then((dat)=>{

        });
    };

    // string area here
    $('#openStrcontdiv').click(()=>{
        $('#strContDiv').slideDown();
    });
    $('#closeStrcontdiv').click(()=>{
        $('#strContDiv').slideUp();
    });
    // str rfrnds
    $('#closeStrFrbutcon').click(()=>{
        $('#strFrDiv').slideUp();
    });

    var img = $('#multiimg');
    $('#checkimgnode').click(function(){
        if ($('#multiimg').val() !== '') {
            fetch('/post/checkFile', { 
                method: 'post', 
                body: JSON.stringify({ image: $(img).val() })
            }).then((response)=>{ 
                alert('something');
                return response.json() 
            }).then((data)=> {
                
            });
        }
    });

    // video upload clik
    $('#clickVidJrn').click(()=>{
        $('#postVideoJrnl').click();
    });
    // for str
    $('#clickVidStr').click(()=>{
        $('#postVideoStr').click();
    });
    // video user aut
    $('#clickVidJrnUA').click(()=>{
        $('#postVideoUAuJ').click();
    });
    /**
     * $('#container-one').css('filter', 'blur(5px)');
        $('#notilg-alert').slideDown();
     */

    // send Noties
    const notiAdd = (data, udata, act, dateNow) => {
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

    // ---------------------------
    // create journls + books sect
    // ---------------------------
    // TAG AREA HERE
    //----------------
    // tag body
    var pass = new Array();
    $('#openTj').click(()=>{
        $('#tagfrnddiv').slideDown();
        startTagging();
    });
    const startTagging = () => {
        const TagBod = (data, ids) => {
            var path = '';
            if (data.profile_pic == 'none') {
                path = 'img/profb.png';
            }else {
                path = `${data.profile_pic.path}`;
            }
            return `
            <div id="${ids.bodyTagId}" class="tagUflowBod" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
                <div style="width:20%; height:100%; float:left;">
                    <div style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
                </div>
                <div style="width:60%; height:100%; float:left;">
                    <a style="text-decoration:none;" href="/${data.user_name}"><p style="color:skyblue; padding:5px; margin:5px;">${data.user_name}</p></a>
                </div>
                <div style="width:20%; height:100%; float:right;">
                    <div id="${ids.passId}" style="width:20px; height:20px; display:none; margin:auto; background-image:url(img/tag.png); background-size:100% 100%; margin-top:10px; cursor:pointer;"></div>
                </div>
            </div>
            `
        };
    
        const checkModeTag = () => {
            // light or dark effects
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $('.tagUflowBod, .checkTagBody').css('border', 'solid 1px #f0f0f0');
                    $('.tagUflowBod, .checkTagBody').css('background-color', 'white');
                }
                if (mode === 'dark') {
                    $('.tagUflowBod, .checkTagBody').css('border', 'solid 1px #404040');
                    $('.tagUflowBod, .checkTagBody').css('background-color', '#292929');
                }
            });
        };
    
        const flowTag = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                return response.json();
            }).then((data)=>{
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    $('.checkTagBody').remove();
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
                                                    dispTags(users[z]);
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
                                                    checkModeTag();
                                                    viewTags(pass[z], usr, users);
                                                }
                                            }
                                    }
                                }
                                if (chk == 'n') {
                                        for (let z = 0; z < users.length; z++) {
                                            if (users[z]._id == data.following.user) {
                                                dispTags(users[z]);
                                            }
                                        }
                                }
                            }else {
                                $('#tagedMainCon').slideUp();
                                    for (let z = 0; z < users.length; z++) {
                                        if (users[z]._id == data.following.user) {
                                            dispTags(users[z]);
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
    
            /*if (pass.length > 0) {
                $('.tagUflowBod, .checkTagBody').remove();
                getTgd();
            }else {
                $('#tagedMainCon').slideUp();
            }
            /*if (tagSrc.val() !== '') {
                //$('#conjrnTagknwnsrc').css('display', 'none');
                //$('#conjrnTagsrc').css('display', 'block');
                flowSrch($(tagSrc).val());
            }*/
        };
        // search all users
        var flowSrch = (tagSrc) => {
            fetch('/searcher/searchFrnd', {
                method: 'post',
                body: JSON.stringify({ srch: tagSrc }),
                headers: { "Content-type" : "application/json; charset=utf-8" }
            }).then((response) => {
                return response.json();
            }).then((data)=>{
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                    return response.json();
                }).then((udata)=>{
                    $('.tagUflowBod, #noneExsTagSrch').remove();
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
                                            dispTags(data[i]);
                                            chkPass = 'y';
                                            chk = 'y';
                                            flowTag();
                                        }
                                    }
                                    if (chk == 'n') {
                                        //alert("flowSrch: "+data[i].user_name);
                                        //flowTag();
                                        dispTags(data[i]);
                                    }
                                }else {
                                    dispTags(data[i]);
                                }
                            }else {
                                flowTag();
                            }
                        }
                        if (chkPass == 'n') {
                            flowTag();
                        }
                    }else {
                        if (tagSrc.length < 1) {
                            flowTag();
                        }else {
                            flowTag();
                            var noneF = () => {
                                return `
                                <p id="noneExsTagSrch" style="text-align:center; color:grey; margin:5px;">This user does not exist</p>
                                `;
                            };
                            $('#flowfrndinTag').prepend(noneF());
                        }
                        //$('.tagUflowBod, .checkTagBody').remove();
                    }
                });
    
            });
    
        };
    
        var tagSrc = $('#tagSrchJrn');
    
        $('#tagSrchJrn').keyup(function() {
            console.log('just checking!');
            $('.tagUflowBod').remove();
            $('.tagUflowBod').css('display', 'none');
            if (tagSrc.val()) {
                $('.tagUflowBod, .checkTagBody').remove();
                //$('#conjrnTagknwnsrc').css('display', 'none');
                //$('#conjrnTagsrc').css('display', 'block');
                flowSrch($(tagSrc).val());
            } else {
                $('.tagUflowBod, .checkTagBody').remove();
                //$('#conjrnTagknwnsrc').css('display', 'block');
                //$('#conjrnTagsrc').css('display', 'none');
                flowTag();
            }
        });
        
        // delete presnt usr
        const delPtagU = (bodyTagId) => {
            $(`#${bodyTagId}`).remove()
        };
        // const pass id to array
        const passTag = (data, passId, bodyTagId) => {
            $(`#${passId}`).click(()=>{
                pass[pass.length] = data;
                $('#tagedMainCon').fadeIn();
                flowTag();
                if ($(tagSrc).val()) {
                    flowSrch($(tagSrc).val());
                }
            });
            $('#incTagTot').text(pass.length);
        };
        // view tagged
        const viewTags = (data, user, users) => {
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
                $('#flowAlredTagd').prepend(`
                    <div class="checkTagBody" id="${'chckTg_'+data}" style="width:95%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
                        <div style="width:30%; height:100%; float:left;">
                            <div style="width:33px; height:33px; margin:auto; background-image:url(${path}); background-size:cover; border-radius:100%; margin-top:3px;"></div>
                        </div>
                        <div style="width:50%; height:100%; float:left;">
                            <a style="text-decoration:none;" href="/${user}"><p style="color:skyblue; padding:5px; margin:5px;">${user}</p></a>
                        </div>
                        <div style="width:20%; height:100%; float:right;">
                            <div id="remTagd_${data}" style="width:10px; height:10px; margin:auto; background-image:url(img/can.png); background-size:100% 100%; margin-top:15px; cursor:pointer;"></div>
                        </div>
                    </div>
                `);
                $(`#remTagd_${data}`).click(()=>{
                    for (let i = 0; i < pass.length; i++) {
                        if (pass[i] == data) {
                            pass.splice(i, 1);
                            flowTag();
                            if ($(tagSrc).val()) {
                                flowSrch($(tagSrc).val());
                            }
                        }
                    }
                });
                $('#incTagTot').text(pass.length);
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
        const createIdTags = (data) => {
            return {
                bodyTagId: 'bodyTagId_' + data,
                passId: 'passId_' + data
            }
        };
        // display and add tags
        const dispTags = (data) => {
            const ids = createIdTags(data._id);
            /*fetch('/getUsers', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((users)=>{
                var user = ''; var usr = ''; var im = '';
                if (users) {
                    for (let i = 0; i < users.length; i++) {
                        if (data == users[i]._id) {
                            usr = users[i].user_name;
                            im = users[i].profile_pic;
                        }
                    }
                    if (usr.length > 15) {
                        user = usr.slice(0, 15)+'..';
                    }else {
                        user = usr;
                    }
                }
                checkModeTag();
                $('#flowfrndinTag').prepend(TagBod(data, ids));
                passTag(data._id, user, ids.passId, ids.bodyTagId);
                //viewTags(data, user);
            });*/
            checkModeTag();
            $('#flowfrndinTag').prepend(TagBod(data, ids));
            passTag(data._id, ids.passId, ids.bodyTagId);
            checkIfTd(data._id, ids.passId);
            //viewTags(data, user);
        };
    
        const cleanTs = () => {
            if (pass.length > 0) {
                for (let i = 0; i < pass.length; i++) {
                    pass.splice(i, 1);         
                }
            }
            fetch('/post/backTag', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((rem)=>{
                if (rem == 'n') {
                    remTcheck();
                }
            });
        };
        const remTcheck = () => {
            var targetDate = new Date();
            targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
            var countDownDate = targetDate.getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                if (distance < 0) {
                    fetch('/post/askRemTags', { method: 'get' }).then((responce)=>{
                        return responce.json();
                    }).then((rem)=>{
                        if (rem == 'y') {
                            cleanTs();
                            clearInterval(x);
                        }else {
                            remTcheck();
                        }
                    });
                    clearInterval(x);
                }
            }, 1000);
        }
        flowTag();
        remTcheck();
    }
    
    // create journal
    // extraction
    var mainjh = ''; var mainjb = ''; var mainji = ''; var postImg = '';
    var targetDate = new Date();
    targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
            //optimize(tp);
            mainjh = $('#mainjh');
            mainjb = $('#mainjb');
            mainji = $('#multiimgj');
            postImg = document.getElementById('postImage').files;
            clearInterval(x);
        }
    }, 1000);
    // asgin late click btns
    $('#postJou').click(()=> {
        console.log('post journal');
        if (mainjh.val() !== '') {
            fetch('/binary/getBin', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((crnt)=>{
                if (crnt == 'img') {
                    fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((test)=>{
                        if (test > 0 && mainjh.val() !== '') {
                            var testar = [];
                            for (let i = 0; i < test; i++) {
                                testar[i] = `imgHangerFltrd-jrn${i}`;
                            }
                            var encount = [];
                            for (let i = 0; i < test; i++) {
                                var tter = testar[i];
                                encount[i] = {
                                    path: $(`#${tter}`).attr('src'),
                                    class: $(`#${tter}`).attr('class')
                                };
                            }
                            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                return response.json();
                            }).then((udata) => { 
                                var uname = udata._id;
                                fetch('/post/addPostImg', {
                                    method: 'post',
                                    body: JSON.stringify({ postId: uname+'PostID'+date, content_type: 'journal', type: 'User', user: uname, heading: mainjh.val(), img: encount, vid: '', date: [year, day, month, hour, minute], body: mainjb.val(), hidden: 'No', tagged: pass, reads: [] }),
                                    headers : {
                                        "Content-type" : "application/json; charset=utf-8"
                                    } 
                                }).then((response)=>{
                                    return response.json();
                                }).then((data)=>{
                                    if (data) {
                                        $('#writej-alert').fadeOut(250);
                                        for (let i = 0; i < test; i++) {
                                            $(`imgHangerFltrd-jrn${i}`).remove();
                                        }
                                        fetch('/post/clrHanger', { method: 'get' });
                                        if (pass.length > 0) {
                                            addTag(data, udata);
                                        }
                                        fetch('/binary/clrBin', { method: 'get' });
                                        location.reload();
                                    }
                                });
                            });
                        }
                        if (mainjh.val() !== '' && test == 0) {
                            postNorm();
                        }
                    });
                }
                if (crnt == 'vid') {
                    fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((test)=>{
                        if (test > 0 && mainjh.val() !== '') {
                            var testar = [];
                            for (let i = 0; i < test; i++) {
                                testar[i] = `vidHangerFltrd-jrn${i}`;
                            }
                            var encount = [];
                            for (let i = 0; i < test; i++) {
                                var tter = testar[i];
                                encount[i] = {
                                    path: $(`#${tter}`).attr('src'),
                                    class: $(`#${tter}`).attr('class')
                                };
                            }
                            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                                return response.json();
                            }).then((udata) => { 
                                var uname = udata._id;
                                fetch('/post/addPostVid', {
                                    method: 'post',
                                    body: JSON.stringify({ postId: uname+'PostID'+date, content_type: 'journal', type: 'User', user: uname, heading: mainjh.val(), vid: encount[0], date: [year, day, month, hour, minute], body: mainjb.val(), hidden: 'No', tagged: pass, reads: [] }),
                                    headers : {
                                        "Content-type" : "application/json; charset=utf-8"
                                    } 
                                }).then((response)=>{
                                    return response.json();
                                }).then((data)=>{
                                    if (data) {
                                        $('#writej-alert').fadeOut(250);
                                        for (let i = 0; i < test; i++) {
                                            $(`vidHangerFltrd-jrn${i}`).remove();
                                        }
                                        fetch('/video/clrHanger', { method: 'get' });
                                        if (pass.length > 0) {
                                            addTag(data, udata);
                                        }
                                        fetch('/binary/clrBin', { method: 'get' });
                                        location.reload();
                                    }
                                });
                            });
                        }
                        if (mainjh.val() !== '' && test == 0) {
                            postNorm();
                        }
                    });
                }
                if (crnt !== 'vid' && crnt !=='img') {
                    postNorm();
                }
    
            });
            
            // post norml type
            const postNorm = () => {
                if (pass.length > 0) {
                    alert('tagged more: '+pass.length);
                }
                    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                        return response.json();
                    }).then((udata) => { 
                        var uname = udata._id;
                        fetch('/post/addPost', {
                            method: 'post',
                            body: JSON.stringify({ postId: uname+'PostID'+date, content_tpe: 'journal', type: 'User', user: uname, heading: mainjh.val(), img: [], vid: '', date: [year, day, month, hour, minute], body: mainjb.val(), hidden: 'No', tagged: pass, reads: [] }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                            } 
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                            if (data) {
                                $('#writej-alert').fadeOut(250);
                                if (pass.length > 0) {
                                    addTag(data, udata);
                                }
                                location.reload();
                            }
                        });
                    });
                
            };
    
            // add to noti if tagged user
            const addTag = (data, udata) => {
                var dateNow = [year, day, month, hour, minute, secnds];
                for (let i = 0; i < pass.length; i++) {
                    var act = 'tag';
                    var dat = {_id: data._id, user: pass[i]};
                    notiAdd(dat, udata, act, dateNow);
                }
    
            };
        } else {
            $('#alrtBoth').text(`Insert header to complete Journal`);
            Alerts();
        };
        
    });
    
    // alert timer
    const Alerts = () => {
        $('#alrtBoth').css('display', 'block');
        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 8);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {
                $('#alrtBoth').css('display', 'none');
                clearInterval(x);
            }
        }, 1000);
    }

    // write author contents
    // ---------------------
    var curUAP = 'b';
    $('#bookNWr').click(function() {
        curUAP = 'b';
        $('#jourANWr').css('border-bottom', '');
        $('#bookNWr').css('border-bottom', 'solid 1px skyblue');
        $('#UAWrtJ').css('display', `none`);
        $('#UAWrtB').fadeIn();
    });
    $('#jourANWr').click(function() {
        curUAP = 'j';
        $('#bookNWr').css('border-bottom', '');
        $('#jourANWr').css('border-bottom', 'solid 1px skyblue');
        $('#UAWrtB').css('display', `none`);
        $('#UAWrtJ').fadeIn();
    });

    // books
    // cncl imgs
    $('#dlt-uplddBkCvr').click(function() {
        $('#upplddImg-bookCvr').css('background-image', `none`);
        $('#upplddImg-bookCvr, #dlt-uplddBkCvr').css('display', `none`);
        $('#upldimg-bookCvr').fadeIn();
        $('#postImageUAu').val('');
        fetch('/post/clrHanger', { method: 'get' });
    });
    var cover = ''; var chapters = new Array(); var curnCp = 'r'; var bRM = ''; var bTTL = ''; var bCTTL = ''; var bBDY = '';
    var targetDate0 = new Date();
    targetDate0.setMilliseconds(targetDate0.getMilliseconds() + 1);
    var countDownDate0 = targetDate0.getTime();
    var x2 = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate0 - now;
        if (distance < 0) {
            bTTL = $('#bkTTlUAut');
            bCTTL = $('#autJI');
            bBDY = $('#autJB');
            clearInterval(x2);
        }
    }, 1000);
    // chaptering
    // inserting txts to respective chptr
    $('#chptrBdy').keyup(()=>{
        if ($('#chptrBdy').val() !== '') {
            if (curnCp == 'r') {
                bRM = $('#chptrBdy').val();;
            } else {
                for (let i = 0; i < chapters.length; i++) {
                    if (i == curnCp) {
                        chapters[i].body = $('#chptrBdy').val();
                    }
                }
            }
        }
    });
    $('#chptrTltl').keyup(()=>{
        if ($('#chptrTltl').val() !== '') {
            for (let i = 0; i < chapters.length; i++) {
                if (i == curnCp) {
                    chapters[i].title = $('#chptrTltl').val();
                }
            }
        }
    });
    // read me sect
    $('#rdMeChptr').click(()=> {
        curnCp = 'r';
        $('.chptrsCr').css('border', '');
        $('#rdMChptr').css('border', 'solid 1px skyblue');
        $('#chptrTltl').css('display', 'none');
        $('#crntChptLsTtl').text('read me: all needed information for the book');
        $('#chptrBdy').val(bRM);
    });
    // new chapter
    var chpFW; var chpFWC; var tchp;
    const includeChpW = () => {
        chpFW = $('#chptOvFCon').css('width');
        chpFWC = chpFW.slice(0, chpFW.length-2);
        tchp = Number(chpFWC);
    }
    var targetDate2 = new Date();
    targetDate2.setMilliseconds(targetDate2.getMilliseconds() + 1);
    var countDownDate2 = targetDate2.getTime();
    var x2 = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate2 - now;
        if (distance < 0) {
            includeChpW();
            clearInterval(x2);
        }
    }, 1000);
    $('#addCHptrLs').click(()=> {
        chapters[chapters.length] = {title: '', body: ''};
        $('#chptOvFCon').css('width', `${tchp+100}px`);
        vwChptLs();
        includeChpW();
    });
    const chpLsB = (ids, i) => {
        return `
        <div style="width:100px; height:100%; float:left;" class="chpLsBdy" id="${ids.body}">
            <p style="text-align:center; color:grey; font-size:12px; margin:0px; padding:2px;">chapter</p>
            <div id="${ids.hold}" style="margin:auto; width:55px; height:55px; border-radius:5px; cursor:pointer;" class="chptrsCr">
                <br>
                <p style="text-align:center; font-size:30px; margin-top:-15px; color:grey;">${i+1}</p>
            </div>
            <p style="text-align:center; cursor:pointer; margin:0px; padding:0px;"> <img src="img/can.png" width="13.5px" height="13.5px" style="margin-top:5px;" id="${ids.remId}"> </p>
        </div>
        `
    };
    const chptrLsFuncs = (chp, ids, i) => {
        // current chapter btn
        const chkCurn = () => {
            if (curnCp == i) {
                $('.chptrsCr').css('border', '');
                $(`#${ids.hold}`).css('border', 'solid 1px skyblue');
                $('#chptrTltl').fadeIn();
                $('#crntChptLsTtl').text(`chapter ${i+1}`);
                $('#chptrTltl').val(chp.title);
                $('#chptrBdy').val(chp.content);
            }
        }
        chkCurn();
        $(`#${ids.hold}`).click(()=> {
            curnCp = i;
            chkCurn();
        });
        // rem
        $(`#${ids.remId}`).click(()=> {
            chapters.splice(i, 1);
            $('#chptOvFCon').css('width', `${tchp-100}px`);
            includeChpW();
            vwChptLs();
        });
    }
    const createChpLsIds = (i) => {
        return {
            body: `body_chapters_listIds_${i}`,
            hold: `hold_chapters_listIds_${i}`,
            remId: `remId_chapters_listIds_${i}`,
        }
    }
    const dropChptLs = (chp, i) => {
        const ids = createChpLsIds(i);
        $('#drpWrtChptrs').append(chpLsB(ids, i));
        chptrLsFuncs(chp, ids, i);
    }
    // refresh chpters
    const vwChptLs = () => {
        $('.chpLsBdy').remove();
        $('#chptrTltl').val('');
        $('#chptrBdy').val('');
        if (chapters.length > 0) {
            for (let i = 0; i < chapters.length; i++) {
                dropChptLs(chapters[i], i);
            }
            checkMode();
        }
    };

    // POST author content
    $('#postUAut').click(()=>{
        const uploadJrn = (encount, crnt, uname) => {
            var schm;
            if (crnt == 'img') {
                schm = {postId: uname+'PostID'+date, content_type: 'author_journal', type: 'User_author', user: uname, heading: bCTTL.val(), img: encount, vid: '', date: [year, day, month, hour, minute], body: bBDY.val(), hidden: 'No', tagged: pass, reads: []};
            }
            if (crnt == 'vid') {
                schm = {postId: uname+'PostID'+date, content_type: 'author_journal', type: 'User_author', user: uname, heading: bCTTL.val(), img: '', vid: encount, date: [year, day, month, hour, minute], body: bBDY.val(), hidden: 'No', tagged: pass, reads: []};
            }
            if (crnt == 'none') {
                schm = {postId: uname+'PostID'+date, content_type: 'author_journal', type: 'User_author', user: uname, heading: bCTTL.val(), img: '', vid: '', date: [year, day, month, hour, minute], body: bBDY.val(), hidden: 'No', tagged: pass, reads: []};
            }
            fetch('/uauthor/addJournal', {
                method: 'post',
                body: JSON.stringify({ body: schm }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if (data) {
                    $('#writej-alert').fadeOut(250);
                    fetch('/post/clrHanger', { method: 'get' });
                    fetch('/binary/clrBin', { method: 'get' });
                    location.reload();
                }
            });
        };
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            var uname = udata._id;
            fetch('/binary/getBin', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((crnt)=>{
                if (crnt == 'img') {
                    fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((test)=>{
                        if (curUAP == 'b') {
                            if (test > 0 && bTTL.val() !== '' && bRM !== '') {
                                var upldI = $('#upplddImg-bookCvr').attr('src');
                                var encount =  {
                                    path: upldI,
                                    class: $('#upplddImg-bookCvr').attr('class')
                                };
                                fetch('/uauthor/addBook', {
                                    method: 'post',
                                    body: JSON.stringify({ postId: uname+'PostID'+date, content_type: 'usr_aut_book', type: 'User_author', user: uname, title: bTTL.val(), cover: encount, date: [year, day, month, hour, minute], chapters: chapters, read_me: bRM }),
                                    headers : {
                                        "Content-type" : "application/json; charset=utf-8"
                                    } 
                                }).then((response)=>{
                                    return response.json();
                                }).then((data)=>{
                                    fetch('/post/clrHanger', { method: 'get' });
                                    fetch('/binary/clrBin', { method: 'get' });
                                    location.reload();
                                });
                            }else {
                                alert('complete book information');
                            }
                        }else {
                            if (test > 0 && bCTTL.val() !== '') {
                                var testar = [];
                                for (let i = 0; i < test; i++) {
                                    testar[i] = `imgHangerFltrd-UautJ${i}`;
                                }
                                var encount = [];
                                for (let i = 0; i < test; i++) {
                                    var tter = testar[i];
                                    encount[i] = {
                                        path: $(`#${tter}`).attr('src'),
                                        class: $(`#${tter}`).attr('class')
                                    };
                                }
                                uploadJrn(encount, crnt, udata._id);
                            }
                        }
                    });
                }else {
                    if (crnt == 'vid') {
                        fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                            return res.json();
                        }).then((test)=>{
                            var testar = [];
                            for (let i = 0; i < test; i++) {
                                testar[i] = `vidHangerFltrd-UautJ${i}`;
                            }
                            var encount = [];
                            for (let i = 0; i < test; i++) {
                                var tter = testar[i];
                                encount[i] = {
                                    path: $(`#${tter}`).attr('src'),
                                    class: $(`#${tter}`).attr('class')
                                };
                            }
                            uploadJrn(encount[0], crnt, uname);
                        });
                    }else {
                        const cr = 'none';
                        uploadJrn(encount, cr, uname);
                    }
                }
            });
        });
    });


    /** ---------------
     * STR CRT
     * ----------------
     */
    // nav
    // public diff vars
    var pubin = $('#ScStr');
    var strh = $('#mainStrh');
    var strBody = $('#mainsb');
    var strConH = $('#strConHead');
    var strimg = $('#postStrImage');
    var strvid = $('#postVideoStr');
    // smart value
    $('#ScStr').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
    });

    var publ = '';
    var crtNwPub = 'none';
    var oldPubId = '';

    $('#PubStrWr').click(function() {
        $('#PerStrWr').css('border-bottom', '');
        $('#PubStrWr').css('border-bottom', 'solid 1px skyblue');
        $('#ScStr').slideDown();
        $('#openStrfrdiv, #mainStrh, #mainsb, #openStrcontdiv').slideUp();
        $('#mainStrh').val('');
    });
    $('#PerStrWr').click(function() {
        $('#PubStrWr').css('border-bottom', '');
        $('#PerStrWr').css('border-bottom', 'solid 1px skyblue');
        $('#ScStr').slideUp();
        $('#openStrfrdiv, #mainStrh, #mainsb, #openStrcontdiv').slideDown();
        $('#ScStr').val('');
        // pub str init canceler
        publ = '';
        crtNwPub = 'none';
        oldPubId = '';
        $('.holdPubStr').remove();
    });
    const pushIt = (udata, act) => {
        // for img
        if (act == 'img') {
            fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((test)=>{
                var testar = [];
                for (let i = 0; i < test; i++) {
                    testar[i] = `imgHangerFltrd-thr${i}`;
                }
                var encount = [];
                for (let i = 0; i < test; i++) {
                    var tter = testar[i];
                    encount[i] = {
                        path: $(`#${tter}`).attr('src'),
                        class: $(`#${tter}`).attr('class')
                    };
                }
                fetch('/strings/addPrivate', { method: 'post', body: JSON.stringify({ type: 'Private', content_type: 'string', user: udata._id, head: strh.val(), body: strBody.val(), tied: pass, date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                    return responce.json()
                }).then((dataId)=>{
                    if (dataId) {
                        if (test > 0) {
                            fetch('/strings/privateTie', { method: 'post', body: JSON.stringify({ type: 'tied_private', content_type: 'thread', tied_to: dataId, act: act, user: udata._id, head: strConH.val(), img: encount, vid: [], date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                                return responce.json()
                            }).then((dataId2)=>{
                                for (let i = 0; i < test; i++) {
                                    $(`imgHangerFltrd-thr${i}`).remove();
                                }
                                fetch('/post/clrHanger', { method: 'get' });
                                fetch('/binary/clrBin', { method: 'get' });
                                if (pass.length > 0) {
                                    addTie(dataId, udata);
                                }
                                location.reload();
                            });
                        }else {
                            if (pass.length > 0) {
                                addTie(dataId, udata);
                            }
                            location.reload();
                        }
        
                    }
                });
            });
        }
        // for vid
        if (act == 'vid') {
            fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((test)=>{
                var testar = [];
                for (let i = 0; i < test; i++) {
                    testar[i] = `vidHangerFltrd-thr${i}`;
                }
                var encount = [];
                for (let i = 0; i < test; i++) {
                    var tter = testar[i];
                    encount[i] = {
                        path: $(`#${tter}`).attr('src'),
                        class: $(`#${tter}`).attr('class')
                    };
                }
                fetch('/strings/addPrivate', { method: 'post', body: JSON.stringify({ type: 'Private', content_type: 'string', user: udata._id, head: strh.val(), body: strBody.val(), tied: pass, date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                    return responce.json()
                }).then((dataId)=>{
                    if (dataId) {
                        if (strvid.val() !== '' && testar.length > 0) {
                            fetch('/strings/privateTie', { method: 'post', body: JSON.stringify({ type: 'tied_private', content_type: 'thread', tied_to: dataId, act: act, user: udata._id, head: strConH.val(), img: [], vid: encount, date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                                return responce.json()
                            }).then((dataId2)=>{
                                for (let i = 0; i < test; i++) {
                                    $(`vidHangerFltrd-thr${i}`).remove();
                                }
                                fetch('/video/clrHanger', { method: 'get' });
                                fetch('/binary/clrBin', { method: 'get' });
                                if (pass.length > 0) {
                                    addTie(dataId, udata);
                                }
                                location.reload();
                            });
                        }else{
                            if (pass.length > 0) {
                                addTie(dataId, udata);
                            }
                            location.reload();
                        }
        
                    }
                });

            });
        }
        const addTie = (data, udata) => {
            var dateNow = [year, day, month, hour, minute, secnds];
            for (let i = 0; i < pass.length; i++) {
                var act = 'tie';
                var dat = {_id: data, user: pass[i]};
                tieNoti(dat, udata, act, dateNow);
            }

        };
    };
    // tie noti
    const tieNoti = (data, udata, act, dateNow) => {

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
              // Tie
              //alert(data);
              if (act == 'tie') {
                fetch('/notifications/addNoti', { method: 'put', body: JSON.stringify({
                    user: udata._id,
                    noti_type: 'tie_string',
                    string: data._id,
                    date: dateNow
                }), headers: {  "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{ return response.json() }).then((noti)=>{
                    if (noti) {
                        
                    }
                });
            }  
            }

        }

    };

    /**
     * push/assign thread and search
     */
    // search if available
    const srchPub = () => {
    };
    // push public
    const pushItPub = (udata, act) => {
        /*fetch('/post/getHanger', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((test)=>{
            var testar = [];
            for (let i = 0; i < test; i++) {
                testar[i] = `imgHangerFltrd-thr${i}`;
            }
            var encount = [];
            for (let i = 0; i < test; i++) {
                var tter = testar[i];
                encount[i] = {
                    path: $(`#${tter}`).attr('src'),
                    class: $(`#${tter}`).attr('class')
                };
            }
            fetch('/strings/addPublic', { method: 'post', body: JSON.stringify({ type: 'Public', user: udata._id, name: pubin.val(), tied: pass, date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                return responce.json()
            }).then((dataId)=>{
                if (dataId) {
                    
                    if (testar.length !== '') {
                        fetch('/strings/publicTie', { method: 'post', body: JSON.stringify({ type: 'tied_public', tied_to: dataId, user: udata._id, head: strConH.val(), img: encount, date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json()
                        }).then((dataId)=>{
                            for (let i = 0; i < test; i++) {
                                $(`imgHangerFltrd-thr${i}`).remove();
                            }
                            fetch('/post/clrHanger', { method: 'get' });
                        });
                    }
                }
            });
        })*/
        if (crtNwPub == 'new') {
            
            // for empt
            if (act == 'emp') {
                fetch('/strings/addPublic', { method: 'post', body: JSON.stringify({ type: 'Public', content_type: 'string', user: udata._id, name: pubin.val(), date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                    return responce.json()
                }).then((dataId)=>{
                    location.reload();
                });
            }
            // for img
            if (act == 'img') {
                fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `imgHangerFltrd-thr${i}`;
                    }
                    var encount = [];
                    for (let i = 0; i < test; i++) {
                        var tter = testar[i];
                        encount[i] = {
                            path: $(`#${tter}`).attr('src'),
                            class: $(`#${tter}`).attr('class')
                        };
                    }
                    fetch('/strings/addPublic', { method: 'post', body: JSON.stringify({ type: 'Public', content_type: 'string', user: udata._id, name: pubin.val(), date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                        return responce.json()
                    }).then((dataId)=>{
                        if (dataId) {
                            if (test > 0) {
                                fetch('/strings/publicTie', { method: 'post', body: JSON.stringify({ type: 'tied_public', content_type: 'thread', tied_to: dataId, act: act, user: udata._id, head: strConH.val(), img: encount, vid: [], date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                                    return responce.json()
                                }).then((dataId)=>{
                                    for (let i = 0; i < test; i++) {
                                        $(`imgHangerFltrd-thr${i}`).remove();
                                    }
                                    fetch('/post/clrHanger', { method: 'get' });
                                    fetch('/binary/clrBin', { method: 'get' });
                                    location.reload();
                                });
                            }
            
                        }
                    });
                });
            }
            // for vid
            if (act == 'vid') {
                fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `vidHangerFltrd-thr${i}`;
                    }
                    var encount = [];
                    for (let i = 0; i < test; i++) {
                        var tter = testar[i];
                        encount[i] = {
                            path: $(`#${tter}`).attr('src'),
                            class: $(`#${tter}`).attr('class')
                        };
                    }
                    fetch('/strings/addPublic', { method: 'post', body: JSON.stringify({ type: 'Public', content_type: 'string', user: udata._id, name: pubin.val(), date: [year, day, month, hour, minute] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                        return responce.json()
                    }).then((dataId)=>{
                        if (dataId) {
                            if (test > 0) {
                                fetch('/strings/publicTie', { method: 'post', body: JSON.stringify({ type: 'tied_public', content_type: 'thread', tied_to: dataId, act: act, user: udata._id, head: strConH.val(), img: [], vid: encount, date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                                    return responce.json()
                                }).then((dataId)=>{
                                    for (let i = 0; i < test; i++) {
                                        $(`vidHangerFltrd-thr${i}`).remove();
                                    }
                                    fetch('/video/clrHanger', { method: 'get' });
                                    fetch('/binary/clrBin', { method: 'get' });
                                    location.reload();
                                });
                            }
            
                        }
                    });
    
                });
            }

        }
        if (crtNwPub == 'old') {
            if (act == 'img') {
                //oldPubId
                fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `imgHangerFltrd-thr${i}`;
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
                        fetch('/strings/publicTie', { method: 'post', body: JSON.stringify({ type: 'tied_public', content_type: 'thread', tied_to: oldPubId, user: udata._id, head: strConH.val(), img: encount, vid: [], date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json()
                        }).then((dataId)=>{
                            for (let i = 0; i < test; i++) {
                                $(`imgHangerFltrd-thr${i}`).remove();
                            }
                            fetch('/post/clrHanger', { method: 'get' });
                            fetch('/binary/clrBin', { method: 'get' });
                            location.reload();
                        });
                    }
                });
            }
            if (act == 'vid') {
                fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `vidHangerFltrd-thr${i}`;
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
                        fetch('/strings/publicTie', { method: 'post', body: JSON.stringify({ type: 'tied_public', content_type: 'thread', tied_to: oldPubId, user: udata._id, head: strConH.val(), img: [], vid: encount, date: [year, day, month, hour, minute], comments: [], likedBy: [] }), headers: { "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{
                            return responce.json()
                        }).then((dataId)=>{
                            for (let i = 0; i < test; i++) {
                                $(`vidHangerFltrd-thr${i}`).remove();
                            }
                            fetch('/video/clrHanger', { method: 'get' });
                            fetch('/binary/clrBin', { method: 'get' });
                            location.reload();
                        });
                    }
                });
            }

        }

    };
    // ptivate and public push check
    const privateString = (udata) => {
        // conditions
        var act = '';
            /*if (strConH.val() !== '' && strimg.val() !== '') {
                act = 'img';
                pushIt(udata, act);
            }
            if (strConH.val() !== '' && strvid.val() !== '') {
                act = 'vid';
                pushIt(udata, act);
            }
            if (strConH.val() == '' && strimg.val() == '') {
                act = 'img';
                pushIt(udata, act);
            }
            if (strConH.val() == '' && strvid.val() == '') {
                act = 'vid';
                pushIt(udata, act);
            }
            if (strConH.val() == '' && strimg.val() !== '') {
                act = 'img';
                pushIt(udata, act);
            }
            if (strConH.val() == '' && strvid.val() !== '') {
                act = 'vid';
                pushIt(udata, act);
            }*/
            // fetch binary hangers
            var hanImg = 0; var hanVid = 0;
            const yup = () => {
                fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((test)=>{
                    hanImg = test;
                    fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((test)=>{
                        hanVid = test;
                        yap();
                    });
                });
            };
            yup();

            const yap = () => {
                if (strh.val() !== '' && strConH.val() == '' && hanImg == 0 && hanVid == 0) {
                    var act = 'emt';
                    //alert(act);
                    pushIt(udata,act);
                }
                if (strConH.val() !== '' && hanImg == 0 && hanVid == 0) {
                    act = '';
                    alert('Insert images/video to complete thread');
                } else {
                    fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((test)=>{
                        if (test > 0) {
                            act = 'img';
                            pushIt(udata,act);
                        }
                    });
                    if (act == '') {
                        fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                            return res.json();
                        }).then((test)=>{
                            if (test > 0) {
                                act = 'vid';
                                pushIt(udata, act);
                            }
                        });
                    }
                }
            };
            
    };
    // public str push
    const publicString = (udata) => {
        
        // fetch binary hangers
        var hanImg = 0; var hanVid = 0;
        const starterChk = () => {
            fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((test)=>{
                if (test > 0) {
                    hanImg = test;
                    checkRest();
                }else {
                    fetch('/video/getHanger', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((testVid)=>{
                        if (testVid > 0) {
                            hanVid = testVid;
                            checkRest();
                        }else{
                            checkRest();
                        }
                    });
                }
            });
        };
        starterChk();
        const checkRest = () => {
            if (publ !== '' && strConH.val() == '' && hanImg == 0 && hanVid == 0) {
                //alert('here');
                var act = 'emp';
                pushItPub(udata, act);
            }
            if (strConH.val() !== '' && hanImg == 0 && hanVid == 0) {
                var act = '';
                alert('Insert images/video to complete thread');
            } else {
                if (hanImg > 0) {
                    var act = 'img';
                    pushItPub(udata, act);
                }else {
                    if (hanVid > 0) {
                        var act = 'vid';
                        pushItPub(udata, act);
                    }
                }
            }
            //fetch('/strings/addPublic', {})
        };
    };
    
    var pubFlag = '';
    const checkPubFlag = () => {
            if (pubFlag == '') {
                $('#alrtPubStrNoE').fadeIn();
                $('#crtNewStrCon').fadeIn();
            }
            if (pubFlag == 'grey') {
                $('#crtNewStrCon').fadeIn();
            }
            if (pubFlag == 'white') {
                $('#crtNewStrCon').css('display', 'none');
            }
    }
    // search public string
    pubin.keyup(()=>{
        if (pubin.val() !== '') {
            $('.srchdCon-3').remove();
            $('#srchPubStrFlw').css('display', 'block');
            fetch('/axsInfo', {method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                fetchStr(pubin.val(), udata);
            });
        }else {
            $('.srchdCon-3').remove();
            $('#alrtPubStrNoE, #crtNewStrCon').css('display', 'none');
            $('#srchPubStrFlw').fadeOut();
        }
    });
    // fetch str
    const fetchStr = (srch, udata) => {
        $('#alrtPubStrNoE, #crtNewStrCon').css('display', 'none');
        fetch('/searcher/searchStr', {
            method: 'post',
            body: JSON.stringify({ srch: srch }),
            headers: { "Content-type" : "application/json; charset=utf-8" }
        }).then((response) => {
            return response.json();
        }).then((data)=>{

                pubFlag = '';
                fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{ return responce.json() }).then((thrdata)=>{
                    $('.srchdCon-3').remove();
                    $('#alrtPubStrNoE, #crtNewStrCon').css('display', 'none');
                    for (let i = 0; i < data.length; i++) {
                        $('#alrtPubStrNoE, #crtNewStrCon').css('display', 'none');
                        if (srch.length > 0) {
                            pubFlag = 'white';
                            displayStr(data[i]);
                            pubFlag = 'grey';
                            if (data[i].name == srch) {
                                pubFlag = 'white';
                            }
                        }
                        if (srch.length == 0) {
                            for (let z = 0; z < thrdata.length; z++) {
                                if (thrdata[z].user == udata._id && thrdata[z].content_type == 'thread') {
                                    if (thrdata[z].tied_to == data[i]._id) {
                                        pubFlag = 'white';
                                        displayStr(data[i]);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        checkPubFlag();
                    }, 1);
                    
                });

        })
    };

    // for strs
    const srchStr = (data, ids) => {
        return `
        <div id="${ids.conId}" class="srchdCon-3" style="width:97.5%; margin:auto; height:40px; border-radius:5px; margin-top:10px;">
            <div style="width:20%; height:100%; float:left;">
                <div style="width:28px; height:28px; margin:auto; background-image:url(img/strings.png); background-size:100% 100%; border-radius:100%; margin-top:5px;"></div>
            </div>
            <div style="width:60%; height:100%; float:left;">
                <p style="color:skyblue; padding:5px; margin:5px;">${data.name}</p>
            </div>
            <div style="width:20%; height:100%; float:right;">
                <p styl="text-align:center; margin:0px;">
                    <img id="${ids.chseId}" src="img/addxs.png" width="25px" height="25px" style="margin-top:7px; cursor:pointer;"> 
                </p>
            </div>
        </div>
        `
    };
    const checkModeSrch = (data, conId) => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if(mode === 'light') {
                $(`#${conId}`).css('background-color', 'white');
                $(`#${conId}`).css('border', 'solid 1px #f0f0f0');
            }
            if (mode === 'dark') {
                $(`#${conId}`).css('background-color', '#404040');
                $(`#${conId}`).css('border', 'solid 1px #292929');
            }
        });
    };

    // CHOOSE PUB_STR
    // bodying
    var bod = (data) =>{ return `
    <p class="holdPubStr" style="text-align:center; margin:5px;" id="pubStrHangNme_${data}"><span class="btn btn-default btn-xs pbfndHldBd" style="border-radius: 10px; box-shadow: 0px 0px 15px -3px #1a1a1a; border:none; padding:5px; font-size:16.5px; margin-top:5px;">
        ${data} <span style="color:red;" id="remTheStrNme_${data}">&times;</span>
    </span></p>
    `};
    const chseStr = (data, chseId) => {

        $(`#${chseId}`).click(()=>{
            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{ return responce.json() }).then((thrdata)=>{
                var flag = '';
                for (let i = 0; i < thrdata.length; i++) {
                    if (thrdata[i]._id == data._id) {
                        flag = 'y';
                    }
                }
                publ = data.name;
                if (flag == '') {
                    crtNwPub = 'new';
                } else {
                    crtNwPub = 'old';
                    oldPubId = data._id;
                }
                pushes(data.name);
            });

        });

    };
    // create new pub-str
    $('#alrtPubStrNoE-btn').click(()=>{
        publ = pubin.val();
        crtNwPub = 'new';
        pushes(publ);
    });
    // push contents to create new
    const pushes = (nme) => {

        $('.srchdCon-3').remove();
            pubin.css('display', 'none');
            $('#srchPubStrFlw').slideUp();
            $('#openStrcontdiv').slideDown();
            
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
                if(mode === 'light') {
                    $(`.pbfndHldBd`).css('background-color', 'white');
                    $(`.pbfndHldBd`).css('color', 'grey');
                }
                if (mode === 'dark') {
                    $(`.pbfndHldBd`).css('background-color', '#1a1a1a');
                    $(`.pbfndHldBd`).css('color', 'silver');
                }
            });
            // asign
            $('#chsnPbStr').after(bod(nme));

            // btns
            $(`#remTheStrNme_${nme}`).click(()=>{
                crtNwPub = 'none';
                publ = '';
                $(`#pubStrHangNme_${nme}`).remove();
                pubin.fadeIn();
                $('#srchPubStrFlw').slideDown();
                $('#openStrcontdiv').slideUp();
            });

    };

    // create ids
    const createStrIds = (data) => {
        return {
            conId: 'conId_' + data._id,
            chseId: 'chseId_' + data._id
        }
    };
    // display func
    const displayStr = (data) => {
        const ids = createStrIds(data);
        $('#pbStrFlw').prepend(srchStr(data, ids));
        checkModeSrch(data, ids.conId);
        chseStr(data, ids.chseId);
    };

    /**
     * init creation and pass data
     */
    $('#postStr').click(function() {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } 
            }).then((responce)=>{ return responce.json() }).then((udata)=>{
                if (strh.val() !== '' && pubin.val() == '') {
                    privateString(udata);
                }
                if (publ !== '' && strh.val() == '') {
                    publicString(udata);
                }
        });
    });

    // TIE AREA HERE
    //----------------
    // tie body
    $('#openStrfrdiv').click(()=>{
        $('#strFrDiv').slideDown();
        tieStart();
    });
    var pass = new Array();
    const tieStart = () => {
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
        flowTies();
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

    // LG Noti Alert
    var notiLg = `
        <div class="row">
            <div id="notilg-alert" class="col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:10px; display:none;">
                <div class="editPopBod2" style="width:100%; height:455px; box-shadow:0px 0px 10px 1px rgba(0, 0, 0, 0.3); border-radius:5px;">
                    <div class="notiTopcon" style="width:100%; height:30px; float:; border-bottom:solid 1px #f0f0f0; margin-bottom:15px;">
                        <!-- <img src="img/opt.png" width="8px" height="18px" style="margin:5px; float:left; cursor:pointer;"> -->
                        <p style="margin:5px; color:orange; float:left;"> Notifications <strong id="nottotLg" style="colo:grey; font-size:13px;"></strong> </p>
                        <span style="float:right; margin:3px; color:red; cursor:pointer;" id="closentlg"><img src="img/can.png" width="14px" height="14px"></span>
                    </div>
                    <div style="width:100%; height:400px; overflow-y:auto;" id="notiBox">

                    <span id="comNewNoti" style="display:none; margin-bottom:10px;">
                        <div class="leftNavBod" style="width:98%; margin:auto; border-radius:7px;">
                            <div style="margin:auto; margin-top:10px; width:55px; height:35px; background-image:url(img/terms.png); background-size:100% 100%;"></div>
                            <p style="margin:0px; padding:5px; color:grey; font-size:11.5px; text-align:center;">There have been new terms and other information concerning our rules and community guidelines.</p>
                            <p style="margin:0px; padding:5px; text-align:center;">
                                <a href="/community" style="text-decoration:none;"><button class="btn btn-default btn-xs" style="border-radius:10px; color:darkorange; border:solid 1px darkorange; background-color:transparent;">go to community guidelines</button></a>
                            </p>
                        </div>
                    </span>

                    <span id="recNewNotCon" style="display:none;">
                        <div style="width:100%; border:solid 0.6px orange; border-radius:7px;">
                            <p style="margin:0px; padding:5px; color:grey; font-size:11.5px;">recent</p>
                            <span id="dropnoti-rec"></span>
                        </div>
                    </span>
                    <br style="margin:5px;">

                        <span id="dropnoti-lg"></span>

                    </div>
                </div>
            </div>
        </div>
    `;
    $('#dropChat').prepend(notiLg);

}
AlertAll();
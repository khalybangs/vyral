function Settings() {

    // post date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secnds = date.getSeconds();
    if (month == 0) { month = 'January' }
    if (month == 1) { month = 'February' }
    if (month == 2) { month = 'March' }
    if (month == 3) { month = 'April' }
    if (month == 4) { month = 'May' }
    if (month == 5) { month = 'June' }
    if (month == 6) { month = 'July' }
    if (month == 7) { month = 'August' }
    if (month == 8) { month = 'September' }
    if (month == 9) { month = 'October' }
    if (month == 10) { month = 'November' }
    if (month == 11) { month = 'December' }
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
            curn = num.toString();
            if (curn.length > 4) {
                curn = curn.slice(0, 6);
            }
            $(`#${tId}`).text(curn);
        }

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

    // edit status con
    var editstat = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="edtstatalert">
            <div id="editPopBod" class="" style="width:100%; height:250px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> edit status </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="closeedst"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; height:170px; border-bottom:solid 1px orange;">
                    <p class="p_subHs" style="padding:5px; margin:0px; font-size:13px;">Update status:</p>
                    <textarea maxlength="120" id="tastatus" style="margin:10px; background-color:transparent; border-radius:5px; width:80%; height:50%;" class="p_subHs"></textarea>
                </div>
                <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs p_subHs" style="border-radius:5px; background-color:transparent;" id="statdone">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // edit profile name con
    var profnmeedt = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="edtnamealert">
            <div id="editPopBod2" class="" style="width:100%; height:180px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> edit profile name </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="closeednm"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; height:100px; border-bottom:solid 1px orange;">
                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Edit profile name:</p>
                    <input maxlength="30" type="text" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="edtnmin">
                </div>
                <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="edtnmdone">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // chnge uname con
    var chngeunme = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="chngeunmealrt">
            <div id="editPopBod2" class="" style="width:100%; height:180px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> change username </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="closeunmedt"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; height:100px; border-bottom:solid 1px orange;">
                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Insert username:</p>
                    <input maxlength="30" type="text" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="editunamein">
                    <p style="margin:0px; padding:3px; font-size:11px; color:orangered; display:none;" id="alertusrnPar"></p>
                </div>
                <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="edtunmdone">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // chnge profpic con
    var chngPPic = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="chngppicalrt">
            <div id="editPopBod2" class="" style="width:100%; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> change profile picture </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="clsppicalrt"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; border-bottom:solid 1px orange;">
                    <p style="text-align:center; margin:5px;" id="remppic">
                        <button id="remppicBtn" class="btn btn-default btn-xs" style="border:solid 1px darkorange; border-radius:5px; background:transparent; color:darkorange;"> remove present <img src="img/can.png" width="13px" height="13px"> </button>
                    </p>
                    <div style="width:85%; margin:auto; display:none;" id="surePPicDiv">
                        <p style="text-align:center; color:grey; font-size:12.5px; margin:5px;">Are you sure you wan't to remove your current profile picture?</p>
                        <p style="text-align:center; margin:5px;">
                            <button class="btn btn-default btn-xs" id="remPPic" style="border:solid 1px orange; border-radius:5px; background-color:transparent; color:darkorange;">yes</button>
                            <button class="btn btn-default btn-xs" id="noremPPic" style="border:solid 1px orange; border-radius:5px; background-color:transparent; color:orangered;">cancel</button>
                        </p>
                    </div>
                    <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                        <input type="file" name="file" id="profpicImageIn" accept="image/*">
                    </form>
                    <p id="fileTpeCon-prfp" style="text-align:center; margin-top:10px; margin-bottom:10px;">
                        <img src="img/imgtype.png" width="50px" height="70px" id="opnChngPPic" style="cursor:pointer;">
                        <button id="sendGoProfPic" class="btn btn-default btn-xs" style="display:none;"> Go! </button>
                    </p>
                    <!-- preview img con -->
                    <div class="row scrlimgCon" id="scrlimgCon-prfp" style="width:98%; margin:auto; margin-bottom:10px; border-radius:5px; border:solid 1px #f0f0f0; display:none;">
                        <div class="closeImgFlwCon" id="closeImgFlwCon-prfp" style="width:98%; height:25px; margin:auto;">
                            <p style="text-align:center; color:orangered; margin:5px;">cancel</p>
                        </div>
                        <br>
                        <span id="flowHangerFltrd-prfp"></span>
                    </div>
                </div>
                <p style="margin:5px;text-align:center; padding-bottom:5px;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="edtppicdone">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // chnge pwd con
    var chngepwd = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="chngepwdalrt">
            <div id="editPopBod2" class="" style="width:100%; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> change password </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="closepwdedt"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; border-bottom:solid 1px orange;" id="chckPwdDiv">

                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Insert old password:</p>
                    <input onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" type="password" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="chckpwdin">
                    <p style="margin:0px; padding:3px; font-size:11px; color:orangered; display:none;" id="alertPar"></p>
                    <p style="margin:0px; padding:3px; font-size:11px; color:grey;" id="frgtPwd">forgot password?</p>
                    <!-- forgot pwd bellow -->
                    <div id="frgtPwdChld" style="margin:auto; margin-top:5px; margin-bottom:5px; width:90%; border:solid 1px #dddddd; border-radius:5px; display:none;">
                        <div style="width:100%; border-bottom:solid 1px #dddddd;">
                            <p style="margin:0px; padding:3px; color:grey; text-align:center; font-size:13px;">Your account will need to be verified then you will create a new password.</p>
                        </div>
                        <div style="width:100%; height:25px;">
                            <div style="width:50%; float:left; height:100%; border-right:solid 1px #dddddd;">
                                <p style="margin:0px; padding:3px; color:grey; text-align:center; font-size:13px;" id="yesFrgtPwd">okay</p>
                            </div>
                            <div style="width:50%; float:right; height:100%;">
                                <p style="margin:0px; padding:3px; color:grey; text-align:center; font-size:13px;" id="cnfrgtPwdChld">cancel</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div style="width:100%; border-bottom:solid 1px orange; display:none;" id="confPwdDiv">
                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Insert old password:</p>
                    <input maxlength="10" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" type="password" placeholder="new password" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="confpwdin">
                    <input maxlength="10" onkeypress="clsAlphaNoOnly(event)" onpaste="return false;" type="password" placeholder="confirm password" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="confpwdmain">
                    <p style="margin:0px; padding:3px; font-size:11px; color:orangered; display:none;" id="alertconfPar"></p>
                </div>
                <p style="padding:5px; margin:0px; text-align:center;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="edtpwdConfirm">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // chnge email
    var chngemail = `
    <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="chngemailalrt">
            <div id="editPopBod2" class="" style="width:100%; height:180px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class=""style="width:100%; height:30px; margin-bottom:15px;">
                    <p style="margin:5px; color:orange; float:left;"> change email </p>
                    <span style="float:right; margin:3px; color:red; font-size:18px; cursor:pointer;" id="closeemledt"><img src="img/can.png" width="13px" height="13px"></span>
                </div>
                <div style="width:100%; height:100px; border-bottom:solid 1px orange;" id="verifyEmlDiv">
                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Insert old password:</p>
                    <input maxlength="30" type="text" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="veremlin">
                </div>
                <div style="width:100%; height:100px; border-bottom:solid 1px orange; display:none;" id="confEmlDiv">
                    <p style="padding:5px; margin:0px; color:grey; font-size:13px;">Insert old password:</p>
                    <input maxlength="30" type="text" style="width:80%; margin:5px; border:none; background-color:transparent; color:grey;" id="confemlin">
                </div>
                <p style="margin:5px;text-align:center;"> <button class="btn btn-default btn-xs" style="border-radius:5px; background-color:transparent; color:grey;" id="edtnmdone">done</button> </p>
            </div>
        </div>
    </div>
    `;
    // manage auth
    var managePub = `
    <div class="row">
        <div class="col-lg-4 col-xs-12" style="position:fixed; z-index:4; margin-top:30px; display:none;" id="mngPubAlrt">
            <div id="editPopBod2" class="" style="width:100%; height:500px; box-shadow:0px 0px 15px -5px rgba(0, 0, 0, 0.3); border-radius:5px;">
                <div id="editPopHead2" class="" style="width:100%; height:30px;">
                    <p style="margin:5px; color:orange; float:left;"> manage publishing account </p>
                    <span style="float:right; margin:2.5px; color:red; cursor:pointer;" id="clsMngPub"><img src="img/can.png" width="15px" height="15px" style="margin:3px;"></span>
                </div>
                <div style="width:100%; height:40px;">
                    <div style="width:75px; height:38px; cursor:pointer; border-bottom:solid 2px skyblue; float:left;" id="opnPubSets" class="mngPubNav">
                        <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:5px; color:grey; font-size:13px;">settings<p>
                    </div>
                    <div style="width:85px; height:38px; cursor:pointer; float:left;" id="opnPubSubs" class="mngPubNav">
                        <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:5px; color:grey; font-size:13px;">subscriptions<p>
                    </div>
                    <div style="width:65px; height:38px; cursor:pointer; float:left;" id="opnSubTrk" class="mngPubNav">
                        <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:5px; color:grey; font-size:13px;">trackpod<p>
                    </div>
                    <div style="width:75px; height:38px; cursor:pointer; float:left;" id="opnPubHist" class="mngPubNav">
                        <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:5px; color:grey; font-size:13px;">history<p>
                    </div>
                </div>
                <div style="width:100%; height:430px; overflow-y:auto;">
                    <!-- setings -->
                    <div style="width:100%;" id="pubSets" class="mngPubCons">
                        <!-- how to's -->
                        <div style="width:97.5%; margin:auto;" class="mngPubSetSB" id="opnHwTs">
                            <div style="width:100%; margin:auto; height:35px; cursor:pointer;" class="subNavsFS">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">How To's <span class="caret" style="color:silver; font-size:20px; margin:5px;"></span></p>
                            </div>
                        </div>
                        <div style="width:97%; height:300px; margin:auto; margin-top:5px; border-radius:5px; display:none;" class="setSubGBs jpicdiv" id="howTosCon">
                            <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="clsHwTs"></p>
                            </div>
                            <div style="width:100%; height:275px; overflow-y:auto;">
                                <p class="postHeaderfrst" style="font-weight:normal; margin:0px; padding:5px;">How to upload contents as an author?</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px;">Just like any other post, you can upload a journal or a book by clicking on the <img src="img/wa.png" width="12px" height="12px" style="margin:1px;"> button at the bottom left of the screen.
                                <br>On the top right of the navigation bar, you will see a navigation button as a <img src="img/authand.png" width="12px" height="12px" style="margin:1px;">, which generally  represent all author contents.</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px;">There are two types of upload-able contents on the author section: <span style="font-weight:normal;">Books</span> & <span style="font-weight:normal;">Journals</span>.</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> <span style="font-weight:normal;">Books</span>: in order to upload a content, you may:</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> - Include a cover image for the book</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> - Input book title</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> - On the bottom of the book section, a container is applied which includes a "Read Me" section, to apply all information regarding the books(Introduction, Index, glossary  & so on. This section is optional).</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> - Right after the read me toggle in the carousel, there is a <img src="img/addxs.png" width="12px" height="12px" style="margin:1px;"> icon, which allows you to add as much chapters for the book. All chapters must contain it's title and body which will be assigned bellow the carousel. You must have at least, one chapter in order to upload the contents</p>
                                <p class="postHeaderfrst" style="margin:0px; padding:2px; font-size:14px; margin-right:10px;"> <span style="font-weight:normal;">Author Journals</span>: Just like an average Journal post, an author may upload Journal Contents, exclusively, for your subscriber.</p>
                                <br>
                            </div>
                        </div>
                        <!-- images -->
                        <div style="width:97.5%; margin:auto;" class="mngPubSetSB" id="opnChBcImg">
                            <div style="width:100%; margin:auto; height:35px; cursor:pointer;" class="subNavsFS">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">Change background image <span class="caret" style="color:silver; font-size:20px; margin:5px;"></span></p>
                            </div>
                        </div>
                        <div style="width:97%; height:300px; margin:auto; margin-top:5px; border-radius:5px; display:none;" class="setSubGBs jpicdiv" id="chnImgPubs">
                            <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="clsChIP"></p>
                            </div>
                            <div style="width:100%; height:275px; overflow-y:auto;">
                                <form action="/post/fileUpload" method="post" enctype="multipart/form-data" style="display:none;">
                                    <input type="file" name="file" id="autBckImg" accept="image/*">
                                </form>
                                <p id="remExABI" style="text-align:center; margin:0px; padding:5px; cursor:pointer; color:grey; text-decoration:underline;">remove existing background image?</p>
                                
                                <p id="fileTpeCon-autBI" style="text-align:center; margin-top:10px; margin-bottom:10px;">
                                    <img src="img/img.png" width="40%" id="opnChngABImg" style="cursor:pointer;">
                                </p>
                                <p id="applyAutBI" style="text-align:center; margin:0px; padding:5px; display:none;"> <button class="btn btn-default" style="background-color:transparent; border:solid 1px silver; color:grey;">apply as background image</button> </p>
                                <span id="flowHangerFltrd-autBI"></span>
                                <p style="text-align:center; margin:0px; padding:5px;"> <img src="img/del.png" width="15p" height:20px; style="margin:5px; display:none; cursor:pointer;" id="remABImg"> </p>
                            </div>
                        </div>
                        <!-- categories -->
                        <div style="width:97.5%; margin:auto;" class="mngPubSetSB" id="opnChCats">
                            <div style="width:100%; margin:auto; height:35px; cursor:pointer;" class="subNavsFS">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">Update categories <span class="caret" style="color:silver; font-size:20px; margin:5px;"></span></p>
                            </div>
                        </div>
                        <div style="width:97%; height:350px; margin:auto; margin-top:5px; border-radius:5px; display:none;" class="setSubGBs jpicdiv" id="catUpdtPub">
                            <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="clsCtUpPb"></p>
                            </div>
                            <div style="width:100%; height:325;">
                                <div style="width:100%; height:250px;">
                                    <!-- existing cats -->
                                    <div id="autExsSC" style="margin:auto; width:100%;">
                                        <p style="text-align:center; color:grey; font-size:13px; margin:0px; padding:3px;">existing categories:</p>
                                        <div class="editPopBod2" style="width:87.5%; margin:auto; height:60px; overflow-y:auto; border-radius:5px;">
                                            <span id="drpExstnCtsAut"></span>
                                        </div>
                                    </div>
                                    <!-- all cats -->
                                    <div id="autAllCSC" style="margin:auto; width:100%;">
                                        <p style="text-align:center; color:grey; font-size:13px; margin:0px; padding:3px;">choose categories:</p>
                                        <div class="editPopBod2" style="width:87.5%; margin:auto; height:110px; border-radius:5px; overflow-y:auto;">
                                            <span id="drpAllCtsAut"></span>
                                        </div>
                                    </div>
                                </div>
                                <div style="width:100%; height:65px;">
                                    <p style="text-align:center; margin:0px; padding:2px; color:orangered; font-size:12px; display:none;"id="autCtsSE"></p>
                                    <p style="text-align:center; margin:0px; padding:2px;">
                                        <button id="subAutSU" class=btn btn-default btn-xs" style="background-color:transparent; border-radius:5px; border:solid 1px darkorange; color:darkorange;">update</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- add bank account info -->
                        <div style="height:37.5px; width:97.5%; margin:auto;" class="mngPubSetSB" id="opnAutBAcc">
                            <div style="width:100%; height:100%; float:left; cursor:pointer;" class="subNavsFS">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">bank account information <span class="caret" style="color:silver; font-size:20px; margin:5px;"></span></p>
                            </div>
                        </div>
                        <div style="width:97%; height:300px; margin:auto; margin-top:5px; border-radius:5px; display:none;" class="setSubGBs jpicdiv" id="chnBAccCon">
                            <div id="closeImgbutcon" style="width:98%; height:25px; margin:auto;">
                                <p style="text-align:center;"><img src="img/up.png" width="20p" height:15px; style="margin:5px; cursor:pointer;" id="clsAutBa"></p>
                            </div>
                            <div style="width:100%; height:275px; overflow-y:auto;">
                                <!-- no acc -->
                                <div style="width:90%; margin:auto; margin-top:5px; border-radius:5px; box-shadow:0px 0px 5px -1px rgba(0, 0, 0, 0.25); display:none;" class="averageBack" id="incAccNoCon">
                                    <p style="font-size:11.5px; text-align:center; margin:0px; padding:3px;" class="p_subHs">Include account number to ensure that you recieve your monthly earnings. 
                                    This is very important. When left empty, your monthly earning will remain pending untill you include it.
                                    <br>Ensure that it is a valid Naira Account.</p>
                                    <p style="margin:5px; text-align:center;">
                                        <img src="img/mastercard.jpg" width="40px" height="40px" style="margin:3px; border-radius:5px;">
                                        <img src="img/verve.png" width="40px" height="40px" style="margin:3px; border-radius:5px;">
                                        <img src="img/visa.png" width="40px" height="40px" style="margin:3px; border-radius:5px;">
                                    </p>   
                                    <p style="text-align:center; margin:3px;">
                                        <input id="accInNo" type="number" style="width:80%; background-color:transparent; margin:5px; border:none; text-align:center;" class="postHeaderfrst input_btm" placeholder="account number">
                                        <input id="accInNa" type="text" style="width:80%; background-color:transparent; margin:5px; border:none; text-align:center;" class="postHeaderfrst input_btm" placeholder="account name">
                                        <input id="accInBa" type="text" style="width:80%; background-color:transparent; margin:5px; border:none; text-align:center;" class="postHeaderfrst input_btm" placeholder="bank name">
                                    </p> 
                                    <p style="text-align:center; margin:2px; padding:5px; cursor:pointer; font-size:16.5px;" class="p_subHs" id="insrtMyACcNo">
                                        submit
                                    </p> 
                                </div>
                                <!-- with acc -->
                                <div style="width:90%; margin:auto; margin-top:5px; border-radius:5px; box-shadow:0px 0px 5px -1px rgba(0, 0, 0, 0.25); display:none;" class="averageBack" id="AccNoCon">
                                    <p style="text-align:center; margin:0px; padding:5px; font-size:13.5px; cursor:pointer; color:orangered;" class="remChnAccNo"> remove current bank info <img src="img/del.png" width="12px" height="12px"> </p>
                                    <div style="width:99%; margin:auto; height:1px;" class="b_divider"></div>
                                    <p style="margin:0px; padding:5px; font-size:13.5px; cursor:pointer;" class="pL_subHs"> account number: <span style="font-size:16.5px;" class="p_subHs" id="myBAccNo"></span> </p>
                                    <p style="margin:0px; padding:5px; font-size:13.5px; cursor:pointer;" class="pL_subHs"> account name: <span style="font-size:16.5px;" class="p_subHs" id="myBAccNa"></span> </p>
                                    <p style="margin:0px; padding:5px; font-size:13.5px; cursor:pointer;" class="pL_subHs"> bank name: <span style="font-size:16.5px; color:darkorange;" id="myBAccBa"></span> </p>
                                    <p style="text-align:center; margin:2px; padding:5px; cursor:pointer; font-size:16.5px;" class="p_subHs remChnAccNo">
                                        change account info
                                    </p> 
                                </div> 
                                <br>
                            </div>
                        </div>
                        <!-- toggle author account -->
                        <div style="height:37.5px; width:97.5%; margin:auto;" class="subNavsFS">
                            <div style="width:70%; height:100%; float:left;">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">toggle author account</p>
                            </div>
                            <div style="width:30%; height:100%; float:right;">
                                <div id="darkBgCon" style="border-radius:5px; width:40px; height:15px; margin:5px; margin-top:7px; float:left;">
                                    <div id="toggleOfAA" class="" style="width:20px; height:20px; border-radius:100%; background-color:#dddddd; margin-top:-3px; border:solid 0.5px #dddddd; cursor:pointer; float:left; display:none;"></div>
                                    <div id="toggleOnAA" class="" style="width:20px; height:20px; border-radius:100%; background-color:skyblue; margin-top:-3px; border:solid 0.5px lightblue; cursor:pointer; float:right; display:none;"></div>
                                </div>
                                <p id="togAAS" style="float:right; margin:0px; padding:5px; font-size:16px; color:silver;"></p>
                            </div>
                        </div>
                        <!-- terminate author account -->
                        <div style="width:97.5%; margin:auto;" class="mngPubSetSB" id="opnTRAAC">
                            <div style="width:100%; margin:auto; height:35px; cursor:pointer;" class="subNavsFS">
                                <p class="" style="margin:0px; padding:5px; font-size:16.5px; color:orangered;">Terminate Author Account</p>
                            </div>
                        </div>
                        <div style="width:97%; height:130px; margin:auto; margin-top:5px; border-radius:5px; display:none;" class="setSubGBs jpicdiv" id="TRAACCon">
                            <div id="closeImgbutcon" style="width:98%; height:90px; margin:auto;">
                                <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:5px;">Are you sure you want to terminate your User Author Account? All data & history concerning this account such as books, subscribers and journals will be deleted.</p>
                            </div>
                            <div style="width:95%; margin:auto; height:40px;">
                                <p id="yesTRAAC" style="margin:0px; padding:4px; float:left; cursor:pointer; font-size:14px; color:orangered;">Yes</p>
                                <p id="noTRAAC" class="postHeaderfrst" style="margin:0px; padding:4px; float:right; cursor:pointer; font-size:14px;">No</p>
                            </div>
                        </div>
                    </div>
                    <!-- subs -->
                    <div style="width:100%; display:none;" id="pubSubs" class="mngPubCons">
                    
                        <!-- toggle subscription type -->
                        <div style="height:37.5px; width:97.5%; margin:auto;" class="subNavsFS">
                            <div style="width:70%; height:100%; float:left;">
                                <p class="postHeaderfrst" style="margin:0px; padding:5px; font-size:16.5px;">subscription type status</p>
                            </div>
                            <div style="width:30%; height:100%; float:right;">
                                <div class="darkBgCon" style="border-radius:5px; width:40px; height:15px; margin:5px; margin-top:7px; float:left;">
                                    <div id="toggleAuSTOf" class="" style="width:20px; height:20px; border-radius:100%; background-color:#dddddd; margin-top:-3px; border:solid 0.5px #dddddd; cursor:pointer; float:left; display:none;"></div>
                                    <div id="toggleAuSTOn" class="" style="width:20px; height:20px; border-radius:100%; background-color:skyblue; margin-top:-3px; border:solid 0.5px lightblue; cursor:pointer; float:right; display:none;"></div>
                                </div>
                                <p id="togAuST" style="float:right; margin:0px; padding:5px; font-size:16px; color:silver;"></p>
                            </div>
                        </div>
                        <p style="text-align:center; margin:0px; padding:5px; font-size:13px;" class="postHeaderfrst" id="txtBgSubStt"><p>
                        <!-- view price -->
                        <div style="width:85%; border-radius:10px; margin:auto;" id="disSubPAut" class="jpicdiv">
                            <p class="postHeaderfrst" style="margin:0px; padding:5px; text-align:center;"> <span style="color:grey; font-weight:normal; font-size:18px;">NGN</span>  <span id="subPrcAutSttP" class="postHeaderfrst" style="font-size:35px;"></span> </p>
                            <p style="text-align:center; margin:0px;" id="chngSF"> <button class="btn btn-default postHeaderfrst" style="border:solid 1px grey; border-radius:10px; background-color:transparent;">change fee</button> <p>
                            <!-- asign prc -->
                            <div style="width:100%; height:115px; display:none;" id="setFCon">
                                <div style="width:95%; height:100px; border-radius:5px; margin:auto;">
                                    <p style="margin:0px; padding:5px; text-align:center;"> <img id="clsCFC" src="img/backa.png" style="cursor:pointer;" width="10px" height="15px"> </p>
                                    <div style="margin:auto; width:80%; margin-top:3px; margin-bottom:3px; height:35px;">
                                        <input class="postHeaderfrst revAutPrcC" maxlength="30" type="text" style="width:100%; margin:5px; border:none; border-radius:15px; text-align:center;" placeholder="NGN 000" id="newFAI">
                                    </div>
                                    <p style="text-align:center; margin:0px;"> <button id="sSubFBtn" class="btn btn-default btn-xs postHeaderfrst" style="border:solid 1px grey; border-radius:10px; background-color:transparent;">submit</button> <p>
                                </div>
                            </div>
                            <!-- brk -->
                            <div class="row">
                                <div class="col-lg-1"></div>
                                <div class="col-lg-10 col-xs-12">
                                    <div class="revAutPrcC" style="width:95%; margin:auto; border-radius:5px; margin-top:2px; margin-bottom:5px;">
                                        <p style="margin:0px; padding:2px; font-size:12px; text-align:center; color:grey;">pricing breakdown</p>
                                        <div class="brdr_div" style="width:95%; height:1px; margin:auto; margin-bottom:1px; margin-top:1px;"></div>
                                        <p class="postHeaderfrst" style="text-align:center; margin:0px; padding:2px; font-size:15px;"> <span style="color:grey; font-weight:normal; font-size:11px;">NGN</span> <span id="usrautComss"></span> </p>
                                        <p style="text-align:center; margin:0px; padding:1px; font-size:11px; color:grey;">User Author return after services and commission deduction</p>
                                        <p style="text-align:center; margin:0px; padding:1px; font-size:11px; color:grey;">(90%)</p>
                                        <div class="brdr_div" style="width:95%; height:1px; margin:auto; margin-bottom:1px; margin-top:1px;"></div>
                                        <div style="width:100%; height:70px;">
                                            <div class="brdr_r_d" style="width:50%; margin-top:2px; height:65px; float:left;">
                                                <p id="vyrlComss" class="postHeaderfrst" style="text-align:center; margin:0px; padding:2px; font-size:12.5px;"></p>
                                                <p style="text-align:center; margin:0px; padding:1px; font-size:10px; color:grey;">commission</p>
                                                <p style="text-align:center; margin:0px; padding:1px; font-size:10px; color:grey;">(10%)</p>
                                            </div>
                                            <div style="width:50%; margin-top:2px; height:65px; float:right;">
                                                <p id="autPSrcvFee" class="postHeaderfrst" style="text-align:center; margin:0px; padding:2px; font-size:12.5px;"></p>
                                                <p style="text-align:center; margin:0px; padding:1px; font-size:10px; color:grey;">service fee</p>
                                                <p style="text-align:center; margin:0px; padding:1px; font-size:10px; color:grey;">(+1.55%)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1"></div>
                            </div>
                            
                        </div>
                        <!-- set sub price -->
                        <div style="width:70%; height:135px; border-radius:10px; margin:auto;" id="assSubPAut" class="jpicdiv">
                            <p class="postHeaderfrst" style="margin:0px; padding:5px; text-align:center; font-size:16.5px;" id="">set subscription fee for users to access your Author Contents</p>
                            <p style="text-align:center; margin:0px;"> <button id="gTAFbtn" class="btn btn-default btn-xs postHeaderfrst" style="border:solid 1px grey; border-radius:10px; background-color:transparent;">Assign subscription status</button> <p>
                        </div>

                    </div>
                    <!-- track -->
                    <div style="width:100%; height:98%; display:none;" id="autTrck" class="mngPubCons">
                        <div style="width:97.5%; margin:auto; height:380px; margin-top:2px; border-radius:10px; overflow-y:auto;" class="jpicdiv">
                            <span id="drpTrcks"></span>
                            <br>
                        </div>
                        <div style="width:100%; height:40px;">
                            <div style="width:100%; height:100%;">
                                <div style="width:35%; height:100%; float:left;">
                                    <span class="postHeaderfrst" style="float:left; margin:2px; padding:5px; font-size:12px;">successful: <div style="float:right; width:9px; height:9px; background-color:skyblue; border-radius:100%; margin:5px;"></div></span> 
                                </div>
                                <div style="width:30%; height:100%; float:left;">
                                    <span class="postHeaderfrst" style="float:left; margin:2px; padding:5px; font-size:12px;">pending: <div style="float:right; width:9px; height:9px; background-color:yellow; border-radius:100%; margin:5px;"></div></span>
                                </div>
                                <div style="width:35%; height:100%; float:right;">
                                    <span class="postHeaderfrst" style="float:left; margin:2px; padding:5px; font-size:12px;">current: <div style="float:right; width:9px; height:9px; background-color:lightgreen; border-radius:100%; margin:5px;"></div></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- hist -->
                    <div style="width:100%; display:none;" id="pubHist" class="mngPubCons">
                        <div style="width:97.5%; margin:auto; height:415px; margin-top:2px; border-radius:10px; overflow-y:auto;" class="jpicdiv">
                            <span id="drpAutHis"></span>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    $('#dropChat').prepend(editstat, profnmeedt, chngeunme, chngPPic, chngepwd, chngemail, managePub); 
    
    // smart value
    $('#editunamein').on('input', function(key){
        var value = $(this).val();
        $(this).val(value.replace(/ /g, '_'));
    });

    // open buttons
    $('#editstat').click(()=>{
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            $('#container-one').css('filter', 'blur(5px)');
            $('#edtstatalert').fadeIn();
            $('#tastatus').val(udata.user_status);
            $('#closeedst').click(()=>{
                $('#container-one').css('filter', '');
                $('#edtstatalert').fadeOut();
            });
        });
    });
    $('#editname').click(()=>{
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => { 
            $('#container-one').css('filter', 'blur(5px)');
            $('#edtnamealert').fadeIn();
            $('#edtnmin').val(udata.name);
            $('#closeednm').click(()=>{
                $('#container-one').css('filter', '');
                $('#edtnamealert').fadeOut();
            });
        });
    });
    // chnge uname funcs
    $('#chngusr').click(()=>{
        // asign uname
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
            $('#editunamein').val(Wdata.user_name);
        });
        $('#chngeunmealrt').fadeIn();
        $('#container-one').css('filter', 'blur(5px)');
        $('#closeunmedt').click(()=>{
            $('#container-one').css('filter', '');
            $('#chngeunmealrt').fadeOut();
        });
    });

    // chng prof pic
    $('#editpic').click(()=>{
        $('#chngppicalrt').fadeIn();
        $('#container-one').css('filter', 'blur(5px)');
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data) => {
            if (data.profile_pic == 'none') {
                $('#remppic').css('display', 'none');
                // rem btn effct
            }else {
                $('#remppicBtn').hover(()=>{
                    $('#remppicBtn').css('background-color', 'darkorange');
                    $('#remppicBtn').css('color', 'white');
                },()=>{
                    $('#remppicBtn').css('background', 'transparent');
                    $('#remppicBtn').css('color', 'darkorange');
                });
                //$('#remppic').css('display', 'inline');
            }
        });
        // remove curnt pic
        $('#remppicBtn').click(()=>{
            $('#fileTpeCon-prfp, #remppic').slideUp();
            $('#surePPicDiv').slideDown();
        });
        $('#noremPPic').click(()=>{
            $('#surePPicDiv').slideUp();
            $('#fileTpeCon-prfp, #remppic').slideDown();
        });
        // remove
        $('#remPPic').click(()=>{
            fetch('/settings/removePPic', { method: 'get' }).then((res)=>{ return res.json() }).then((data)=>{
                if (data) {
                    location.reload();
                }
            });
        });
        // open images
        $('#opnChngPPic').click(()=>{
            $('#profpicImageIn, #sendGoProfPic').click();
        });

        $('#edtppicdone').click(()=>{
            fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((test)=>{
                if (test > 0) {
                    var testar = [];
                    for (let i = 0; i < test; i++) {
                        testar[i] = `imgHangerFltrd-prfp${i}`;
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
                        fetch('/settings/profilePic', {
                            method: 'post',
                            body: JSON.stringify({ profile_pic: encount[0] }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                            } 
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                            if (data) {
                                $('#chngppicalrt').fadeOut(250);
                                for (let i = 0; i < test; i++) {
                                    $(`imgHangerFltrd-prfp${i}`).remove();
                                }
                                fetch('/post/clrHanger', { method: 'get' });
                                location.reload();
                            }
                        });
                    });
                }else {
                    $('#clsppicalrt').click();
                }
            });
        });

        // clsoe
        $('#clsppicalrt').click(()=>{
            $('#container-one').css('filter', '');
            $('#chngppicalrt').fadeOut();
        });
    });
    // chnge pwd funcs
    $('#chngpss').click(()=>{
        $('#chngepwdalrt').fadeIn();
        $('#container-one').css('filter', 'blur(5px)');
        $('#closepwdedt').click(()=>{
            $('#chngepwdalrt').fadeOut();
            $('#container-one').css('filter', '');
        });
    });
    $('#frgtPwd').click(()=>{
        $('#frgtPwdChld').slideDown();
        $('#cnfrgtPwdChld').click(()=>{
            $('#frgtPwdChld').slideUp();
        });
    });
    // chnge email
    $('#chngeml').click(()=>{
        $('#chngemailalrt').fadeIn();
        $('#container-one').css('filter', 'blur(5px)');
        $('#closeemledt').click(()=>{
            $('#chngemailalrt').fadeOut();
            $('#container-one').css('filter', '');
        });
    });


    // functionalities/fetch
    $('#statdone').click(()=>{
        fetch('/settings/updateStat', { 
            method: 'post', 
            body: JSON.stringify({ user_status: $('#tastatus').val() }),
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            }
        }).then((response) => { return response.json() }).then((data)=> {
            if (data) {
                location.reload();
            }
        })
    });

    $('#edtnmdone').click(()=>{
        fetch('/settings/updateName', { 
            method: 'post', 
            body: JSON.stringify({ name: $('#edtnmin').val() }),
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            }
        }).then((response) => { return response.json() }).then((data)=> {
            if (data) {
                $('#edtnamealert').fadeOut();
                location.reload();
            }
        })
    });

    // Publishing
    // ----------
    const mngPF = (me) => {
        // navs
        const turnAll = () => {
            $('.mngPubNav').css('border-bottom', 'none');
            $('.mngPubCons').css('display', 'none');
        }
        $('#opnPubSets').click(()=>{
            turnAll();
            $('#pubSets').fadeIn();
            $('#opnPubSets').css('border-bottom', 'solid 2px skyblue');
        });
        $('#opnPubSubs').click(()=>{
            turnAll();
            $('#pubSubs').fadeIn();
            $('#opnPubSubs').css('border-bottom', 'solid 2px skyblue');
            subStt();
        });
        // trk and hist
        $('#opnSubTrk').click(()=>{
            turnAll();
            $('#autTrck').fadeIn();
            $('#opnSubTrk').css('border-bottom', 'solid 2px skyblue');
            trackPod();
        });
        $('#opnPubHist').click(()=>{
            turnAll();
            $('#pubHist').fadeIn();
            $('#opnPubHist').css('border-bottom', 'solid 2px skyblue');
            autHistory();
        });

        // SETTINGS
        // how to's
        $('#opnHwTs').click(()=>{
            $('.mngPubSetSB').slideDown();
            $('.setSubGBs, #opnHwTs').slideUp();
            $('#howTosCon').slideDown();
        });
        $('#clsHwTs').click(()=>{
            $('#howTosCon').slideUp();
            $('#opnHwTs').slideDown();
        });
        // img
        $('#opnChBcImg').click(()=>{
            $('.mngPubSetSB').slideDown();
            $('.setSubGBs, #opnChBcImg').slideUp();
            $('#chnImgPubs').slideDown();
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                if (udata.user_type.background == 'none') {
                    $('#remExABI').css('display', 'none');
                } else {
                    $('#remExABI').fadeIn();
                }
            });
        });
        $('#clsChIP').click(()=>{
            $('#chnImgPubs').slideUp();
            $('#opnChBcImg').slideDown();
        });
        // open images
        $('#opnChngABImg').click(()=>{
            $('#autBckImg').click();
        });
        $('#remABImg').click(()=>{
            $('.abimg').remove();
            $('#remABImg, #applyAutBI').fadeOut();
            $('#opnChngABImg').fadeIn();
        });
        $('#applyAutBI').click(()=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => { 
                var types = udata.user_type; var img = {path: $('#imgHangerFltrd-abi').attr('src'), class: $('#imgHangerFltrd-abi').attr('class')};
                fetch('/settings/setUsrtp', {
                    method: 'post',
                    body: JSON.stringify({ user_type: {type: types.type, categories: types.categories, subscritpions: types.subscritpions, subscribers: types.subscribers, status: types.status, price: types.price, background: img} }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    } 
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    if (data) {
                        location.reload();
                    }
                });
            });
        });
        $('#remExABI').click(()=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => { 
                var types = udata.user_type;
                fetch('/settings/setUsrtp', {
                    method: 'post',
                    body: JSON.stringify({ user_type: {type: types.type, categories: types.categories, subscritpions: types.subscritpions, subscribers: types.subscribers, status: types.status, price: types.price, background: 'none'} }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    } 
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    if (data) {
                        location.reload();
                    }
                });
            });
        });
        // cats
        $('#opnChCats').click(()=>{
            $('.mngPubSetSB').slideDown();
            $('.setSubGBs, #opnChCats').slideUp();
            $('#catUpdtPub').slideDown();
            catsFuncs();
        });
        $('#clsCtUpPb').click(()=>{
            $('#catUpdtPub').slideUp();
            $('#opnChCats').slideDown();
        });
        const catsFuncs = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                var exs = new Array(); exs = udata.user_type.categories;
                var clsCatLst = 'n';

                // update cats
                $('#subAutSU').click(()=>{
                    var types = udata.user_type;
                    if (exs.length > 0 && exs.length < 6) {
                        fetch('/settings/setUsrtp', {
                            method: 'post',
                            body: JSON.stringify({ user_type: {type: types.type, categories: exs, subscritpions: types.subscritpions, subscribers: types.subscribers, status: types.status, price: types.price, background: types.background} }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                            } 
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                            if (data) {
                                location.reload();
                            }
                        });
                    }else {
                        $('#autCtsSE').text('you must have between 1-5 categories in order to update.');
                        $('#autCtsSE').fadeIn();
                        var targetDate = new Date();
                        //var seconds = targetDate.getMinutes();
                        targetDate.setSeconds(targetDate.getSeconds() + 5);
                        var countDownDate = targetDate.getTime();
                        var x = setInterval(function() {
                            // Get today's date and time
                            var now = new Date().getTime();
                            // Find the distance between now and the count down date
                            var distance = countDownDate - now;
                            if (distance < 0) {
                            $('#autCtsSE').fadeOut();
                            clearInterval(x);
                            }
                        }, 1000);
                    }
                });

                // ADDED CATS
                //-----------
                // drop genres
                const genFuncsRem = (gen, gIds) => {
                    $(`#${gIds.remID}`).click(()=>{
                        for (let i = 0; i < exs.length; i++) {
                            if (exs[i] == gen) {
                                exs.splice(i, 1);
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
                    $('#drpExstnCtsAut').prepend(genBodyAdd(cat, gIds));
                    genFuncsRem(cat, gIds);
                }
                const checkCat = () => {
                    $('.genCatLstBodyRem').remove();
                    //$('#chCatsNo').text(exs.length);
                    if (exs.length == 5) {
                        clsCatLst = 'y';
                        $('#autAllCSC').slideUp();
                    }else {
                        if (clsCatLst == 'y') {
                            clsCatLst = 'n';
                            $('#autAllCSC').fadeIn();
                        }
                    }
                    if (exs.length > 0) {
                        $('#autExsSC').fadeIn();
                        for (let u = 0; u < exs.length; u++) {
                            drpCatChs(exs[u], u);
                        }
                    }else {
                        $('#autExsSC').css('display', 'none');
                    }
                    //extractCat();
                }
                checkCat();

                // ADD CATS TO GRP
                // ---------------
                // cat Ids
                const catBod = (cat, ids) => {
                    return `
                    <div class="genCatLstBody" id="${ids.catBod}" style="float:left; margin:3px; height:25px; background-color:white; border-radius:15px; border:none; cursor:pointer; margin-bottom:5px;">
                        <p style="float:left; margin:3px; padding:5px; color:grey; font-size:13.5px; margin-top:-3px;"> ${cat} </p>
                        <p style="float:right; margin:5px; font-size:18.5px; color:rgb(0, 183, 255); margin-top:-3px;" id="${ids.addCat}">+</p>
                    </div>
                    `;
                }
                const exsFuncs = (cat, ids) => {
                    $(`#${ids.addCat}`).click(()=>{
                        exs[exs.length] = cat;
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
                    $('#drpAllCtsAut').append(catBod(cat, ids));
                    exsFuncs(cat, ids);
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
                            if (exs.length > 0) {
                                var f = 'n';
                                for (let x = 0; x < exs.length; x++) {
                                    if (exs[x] == glob.categories[i]) {
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

            });
        };
        // toggle status toggleOfAA
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json();
        }).then((udata) => {
            if (udata.user_type.status == 'on') {
                $('#toggleOnAA').fadeIn();
                $('#togAAS').text('on');
            } else {
                $('#toggleOfAA').fadeIn();
                $('#togAAS').text('off');
            }
        });
        var auTogglers = (act) => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                var types = udata.user_type;
                if (act == 'on_acc') { types.status = 'on'; } if (act == 'off_acc') { types.status = 'off'; } if (act == 'acs_no') { types.price = 0; } if (act == 'acs_py') { types.price = 'none'; }
                fetch('/settings/setUsrtp', {
                    method: 'post',
                    body: JSON.stringify({ user_type: {type: types.type, categories: types.categories, subscritpions: types.subscritpions, subscribers: types.subscribers, status: types.status, price: types.price, background: types.background} }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    } 
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    if (data) {
                        if (act == 'on_acc' || act == 'off_acc') {
                            location.reload();
                        } else {
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
                                    subStt();
                                    clearInterval(x);
                                }
                            }, 1000);
                        }
                    }
                });
            });
        }
        $('#toggleOfAA').click(()=>{
            var act = 'on_acc';
            auTogglers(act);
        });
        $('#toggleOnAA').click(()=>{
            var act = 'off_acc';
            auTogglers(act);
        });

        // ADD BANK ACCNT
        $('#opnAutBAcc').click(()=>{
            checkAcc();
            $('#chnBAccCon').slideDown();
        });
        $('#clsAutBa').click(()=>{
            $('#chnBAccCon').slideUp();
        });
        var acc = '';
        const checkAcc = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                fetch('/settings/getAccounts', { method: 'get' }).then((res)=>{
                    return res.json();
                }).then((nos)=>{
                    var no = nos.find(i => i.user == udata._id);
                    if (no !== undefined) {
                        $('#myBAccNo').text(no.number);
                        $('#myBAccNa').text(no.name);
                        $('#myBAccBa').text(no.bank);
                        acc = no;
                        // info insrtd
                        $('#incAccNoCon').css('display', 'none');
                        $('#AccNoCon').fadeIn();
                    }else {
                        $('#AccNoCon').css('display', 'none');
                        $('#incAccNoCon').fadeIn();
                    }
                });
            });
        }
        // new accnt info
        $('#insrtMyACcNo').click(()=>{
            if ($('#accInNo').val() !== '' && $('#accInNa').val() !== '' && $('#accInBa').val() !== '') {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json();
                }).then((udata) => {
                    fetch('/settings/insertAcc', { method: 'post', body: JSON.stringify({ 
                        user: udata._id,
                        number: $('#accInNo').val(),
                        name: $('#accInNa').val(),
                        bank: $('#accInBa').val(),
                    }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                        return response.json();
                    }).then((udata) => {
                        setTimeout(() => {
                            checkAcc();
                        }, 1000);
                    });
                });
            }else {
                alert('insert all needed information');
            }
        });
        // remove acc i
        $('.remChnAccNo').click(()=>{
            fetch(`/settings/deleteAcc/${acc._id}`, {
                method : "delete"
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.ok === 1) {
                    checkAcc();
                }
            });
        });

        // terminate account funcs
        $('#opnTRAAC').click(()=>{
            $('.mngPubSetSB').slideDown();
            $('.setSubGBs, #opnTRAAC').slideUp();
            $('#TRAACCon').slideDown();
            catsFuncs();
        });
        $('#noTRAAC').click(()=>{
            $('#TRAACCon').slideUp();
            $('#opnTRAAC').slideDown();
        });

        // subscription settinngs!
        // -----------------------
        const subPricing = (udata) => {
            var types = udata.user_type;
            if (udata.user_type.price == 0) {
                $('#subPrcAutSttP, #usrautComss, #vyrlComss, #autPSrcvFee').text(0);
            }else {
                var orgP = Number(udata.user_type.price);
                // user Aut Com
                var myCom = 90/100*orgP;
                $('#usrautComss').text(myCom);
                // vyrl com
                var vCom = 10/100*orgP;
                $('#vyrlComss').text(vCom);
                // srvcF
                var srv = 1.55/100*orgP;
                $('#autPSrcvFee').text(srv);
                // now ttl
                var ttlP = srv+orgP;
                $('#subPrcAutSttP').text(ttlP);
            }
            // opn n cls chng f
            $('#chngSF').click(()=>{
                $('#chngSF').css('display', 'none');
                $('#setFCon').fadeIn();
            });
            $('#clsCFC').click(()=>{
                $('#setFCon').css('display', 'none');
                $('#chngSF').fadeIn();
            });
            // sub,it 
            $('#sSubFBtn').click(()=>{
                console.log('clicked');
                if ($('#newFAI').val() !== '') {
                    fetch('/settings/setUsrtp', {
                        method: 'post',
                        body: JSON.stringify({ user_type: {type: types.type, categories: types.categories, subscritpions: types.subscritpions, subscribers: types.subscribers, status: types.status, price: $('#newFAI').val(), background: types.background} }),
                        headers : {
                            "Content-type" : "application/json; charset=utf-8"
                        } 
                    }).then((response)=>{
                        return response.json();
                    }).then((data)=>{
                        if (data) {
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
                                    $('#newFAI').val('');
                                    $('#clsCFC').click();
                                    subStt();
                                    clearInterval(x);
                                }
                            }, 1000);
                        }
                    });
                } else {
                    alert('assign subscription fee');
                }
            });
        }
        const subStt = () => {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                return response.json();
            }).then((udata) => {
                if (udata.user_type.price == 'none') {
                    $('#toggleAuSTOn, #disSubPAut').css('display', 'none');
                    $('#toggleAuSTOf, #assSubPAut').fadeIn();
                    $('#togAuST').text('free');
                    $('#txtBgSubStt').text('by leaving your subscription status as free, users can subscribe to your Author Contents for free!');
                    // txtBgSubStt
                }else { 
                    $('#toggleAuSTOf, #assSubPAut').css('display', 'none');
                    $('#toggleAuSTOn, #disSubPAut').fadeIn();
                    $('#togAuST').text('paid');
                    $('#txtBgSubStt').html(`turning subscription status to "paid" allows you to set a price for users to subscribe and gain access to your Author Content! go to your <span style="color:skyblue;">"how to"</span> for more information`);
                    subPricing(udata);
                }
                
            });
        };
        // toggle sub stat
        $('#toggleAuSTOf').click(()=>{
            var act = 'acs_no';
            auTogglers(act);
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        $('#toggleAuSTOn').click(()=>{
            var act = 'acs_py';
            auTogglers(act);
        });
        // go to assing
        $('#gTAFbtn').click(()=>{
            $('#toggleAuSTOf').click();
        });

        // mode
        const modeD = () => {
            fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((data) => {
                if (data == 'light') {
                    $('.revAutPrcC').css('background-color', 'white');
                    $('.brr_right_d').css('border-right', 'solid 1px #f0f0f0');
                    $('.b_divider').css('background-color', '#f0f0f0');
                    $('.postHeaderfrst').css('color', '#1a1a1a');
                    $('.postHeaderscnd').css('color', 'black');
                    $('.chld_flow_body').css('border', 'solid 1px #f0f0f0');
                    $('.chld_flow_body').css('background-color', '#f9f9f9');
                    $('.btm_brdr').css('border-bottom', 'solid 1px #f0f0f0');
                } else {
                    $('.revAutPrcC').css('background-color', '#262626');
                    $('.brr_right_d').css('border-right', 'solid 1px #404040');
                    $('.b_divider').css('background-color', '#404040');
                    $('.postHeaderfrst').css('color', 'white');
                    $('.postHeaderscnd').css('color', 'white');
                    $('.chld_flow_body').css('border', 'solid 1px #404040');
                    $('.chld_flow_body').css('background-color', '#1a1a1a');
                    $('.btm_brdr').css('border-bottom', 'solid 1px #404040');
                }
            });
        }

        // TrackPod
        // ---------
        const trackPod = () => {
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
                                <p style="text-align:center; margin:0px; padding:5px;"> <span style="color:grey; font-size:9px;">NGN</span> <span id="${mIds.earn}" class="postHeaderfrst" style="font-size:18px;"></span> </p>
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
                    </div>
                    `
                };
                const mFuncs = (nm, n, mt, mIds) => {
                    // check status
                    if (mt == 'cur') {
                        $(`#${mIds.motve}`).css('background-color', 'lightgreen');
                    }else {
                        fetch('/adcenter/getEarn', { method: 'get' }).then((res)=>{ return res.json() }).then((earn)=>{
                            var flg = 'pen';
                            for (let i = 0; i < earn.length; i++) {
                                if (earn[i].year == det.year && earn[i].month == n && earn[i].user == me._id) {
                                    flg = 'scs';  
                                }
                            }
                            if (flg == 'scs') {
                                $(`#${mIds.motve}`).css('background-color', 'skyblue');
                            } else {
                                var dtn = 'this';
                                if (curD.year > det.year) {
                                    dtn = 'past';
                                }
                                if (dtn == 'past') {
                                    $(`#${mIds.motve}`).css('background-color', 'yellow');
                                } else {
                                    if (nm.l < curD.l) {
                                        $(`#${mIds.motve}`).css('background-color', 'yellow');
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
                        ttl = ttl+Number(subs[s].amount);
                    }
                    var ern = 90/100*ttl;
                    $(`#${mIds.earn}`).text(parseInt(ern));
                    //magicNumbers(mIds.earn, ern);
                    // pre
                    $(`#${mIds.totalE}`).text(parseInt(ttl));
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
                                dropM(nMnt[u], mnths[x].n, 'pst');
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
                magicNumbers(yIds.earning, ern);
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
                $('#drpTrcks').append(yBody(det, yIds));
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

        // aut his
        const autHistory = () => {
                
            // extract history
            const subHisUB = (sIds, sub, usr) => {
                var path = ''; var clas = '';
                if (usr.profile_pic == 'none') {
                    path = 'img/profb.png';
                }else {
                    path = `${usr.profile_pic.path}`;
                    clas =  `${usr.profile_pic.class}`;
                }  
                return `
                <div id="${sIds.conId}" class="revAutPrcC aut_his_bod" style="width:97%; height:67.5px; margin:auto; border-radius:5px; margin-top:10px;">
                    <div style="width:25%; height:100%; float:left;">
                        <p class="postHeaderfrst" style="margin:2px; margin-top:15px; text-align:center; font-size:18px;" id="${sIds.type}">${sub.type}</p>
                    </div>
                    <div style="width:55%; height:100%; float:left;">
                    <div style="height:45%; width:100%;" cass="notiUNholder">
                        <p style="text-align:center; margin:1.5px; font-size:10px;"><a style="text-decoration:none;" class="postHeaderfrst" href="/${usr.user_name}"> <img class="${clas}" src="${path}" alt="" height="15px" width="15px" style="border-radius:100%;"> ${usr.user_name} </a></p>
                    </div>
                    <div style="height:45%; width:100%;">
                        <p id="${sIds.payNote}" class="postHeaderscnd" style="text-align:center; margin:2px; font-size:10px; display:none;">user paid <span style="font-weight:normal;">NGN ${sub.amount}</span> for subscription</p>
                        <p id="${sIds.frNote}" class="postHeaderscnd" style="text-align:center; margin:2px; color:grey; font-size:10px; display:none;">Have subscribed to your account</p>
                    </div>
                    </div>
                    <div style="width:20%; height:100%; float:right;">
                        <i class="postHeaderfrst" style="text-align:center; margin:3px; color:grey; font-size:8px;" id="${sIds.dateFlow}"></i>
                    </div>
                </div>
                `
            }
            const autHIsFunc = (sIds, sub, usr) => {
                if (sub.type == 'paid') {
                    $(`#${sIds.payNote}`).fadeIn();
                } else {
                    $(`#${sIds.frNote}`).fadeIn();
                }
            };
            const createAUHids = (usr, i) => {
                return {
                    conId: `subhistory_${me._id}_${usr._id}_${i}_conId`,
                    type: `subhistory_${me._id}_${usr._id}_${i}_type`,
                    payNote: `subhistory_${me._id}_${usr._id}_${i}_payNote`,
                    frNote: `subhistory_${me._id}_${usr._id}_${i}_frNote`,
                    dateFlow: `subhistory_${me._id}_${usr._id}_${i}_dateFlow`,
                }
            }
            const dropHis = (sub, usr, i) => {
                const sIds = createAUHids(usr, i);
                $(`#drpAutHis`).prepend(subHisUB(sIds, sub, usr));
                autHIsFunc(sIds, sub, usr);
                smartDate(sub, sIds.dateFlow);
                console.log(sub.date);
                modeD();
            }
            fetch('/settings/subs', { method: 'get' }).then((res)=>{
                return res.json();
            }).then((subs)=>{
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    $('.aut_his_bod').remove();
                    for (let l = 0; l < subs.length; l++) {
                        if (subs[l].sub_to == me._id) {
                            for (let a = 0; a < users.length; a++) {
                                if (users[a]._id == subs[l].user) {
                                    dropHis(subs[l], users[a]);
                                }
                            }
                        }
                    }
                });
            });
        }

    };
    // opn
    $('#openPublishSet').click(()=>{
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
            if (Wdata.user_type.type) {
                $('#mngPubAlrt').fadeIn();
                $('#container-one').css('filter', 'blur(5px)');
                // cls
                $('#clsMngPub').click(()=>{
                    $('#container-one').css('filter', '');
                    $('#mngPubAlrt').fadeOut();
                });
                mngPF(Wdata);
            } else {
                location.replace('/publish');
            }
        });
    });

    // PROFILE PUBLICITY STATUS
    //--------------------------
    // check mode
    var chekStats = () => {
        fetch('/settings/checkPublicity', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((data) => {
            if (data == 'private') {
                $('#privbuton').css('display', 'none');
                $('#privbutoff').css('display', 'block');
            }
            if (data == 'public') {
                $('#privbutoff').css('display', 'none');
                $('#privbuton').css('display', 'block');
            }
            //privarea
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
                if (Wdata.user_type !== 'user') {
                    if (data == 'private' && Wdata.user_type.status == 'on') {
                        $('#privbutoff').click();
                    }
                    if (Wdata.user_type.status == 'on') {
                        $('#privarea').css('display', 'none');
                    }
                }
            });
        });
        
    };
    chekStats();
    // profile publicity settings
    $('#privbuton').click(function() {
        $('#privbuton').css('display', 'none');
        $('#privbutoff').css('display', 'block');
        fetch('/settings/changePriv', { method: 'post', body: JSON.stringify({ publicity: 'private' }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
           return responce.json();
        }).then((data)=> {
            if (data) {
                alert('Your profile is set to Private account!');
            }
        });
     });
     $('#privbutoff').click(function() {
        $('#privbutoff').css('display', 'none');
        $('#privbuton').css('display', 'block');
        fetch('/settings/changePriv', { method: 'post', body: JSON.stringify({ publicity: 'public' }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
           return responce.json();
        }).then((data)=> {
            if (data) {
                // check if there is user in waiting_list !== followers
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
                    if (Wdata.waiting_list.length > 0) {
                        for (let i = 0; i < Wdata.waiting_list.length; i++) {
                            fetch('/settings/removeWait', { method: 'put', body: JSON.stringify({ user: Wdata.waiting_list[i].user }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ 
                                return responce.json() }).then((secdata)=>{});
                        }
                    }else {
                        alert('Your profile is set to Public account!');
                    }
                });
            }
        });
     });

     /**
      * ---------------------------
      * CHNGE UNAME FUNC
      * ----------------------------
      */
     // check users
    $('#editunamein').keyup(()=>{
        var srch = $('#editunamein');
        fetch('/log/checkUser', { method: 'post', body: JSON.stringify({ user_name: srch.val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
          }).then((data)=>{
            // check if user exists
            if (data == 'notExists') {
                srch.css('border-bottom', 'solid 1px lightblue');
                $('#edtunmdone').click(()=>{
                    chngUnm(srch.val());
                });
            }else {
              // if user exists
              if (data) {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
                    if (Wdata.user_name == data.user_name) {
                        srch.css('border-bottom', 'solid 1px lightblue');
                        $('#edtunmdone').click(()=>{
                            chngUnm(srch.val());
                        });
                    }else {
                        srch.css('border-bottom', 'solid 1px orangered');
                        $('#alertusrnPar').text('This username is taken!'); 
                        var alerts = $('#alertusrnPar');
                        Alerts(alerts);
                        $('#edtunmdone').click(()=>{
                            srch.css('border-bottom', 'solid 1px orangered');
                            $('#alertusrnPar').text('This username is taken!'); 
                            var alerts = $('#alertusrnPar');
                            Alerts(alerts);
                        });
                    }
                });
              }
            }
          });
    });
    // add new username
    const chngUnm = (srch) => {
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
            fetch('/settings/newUname', { method: 'put', body: JSON.stringify({ user_name: srch }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                if (data) {
                    location.replace(`/${srch}`);
                }
            });
        });
    };     

     /**
      * ---------------------------
      * CHNGE PWD FUNC && HASHINGS
      * ----------------------------
      */
     // forgot password
     $('#yesFrgtPwd').click(()=>{
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
            fetch('/log/checkUser', { method: 'post', body: JSON.stringify({ user_name: Wdata.user_name }), headers : {
                "Content-type" : "application/json; charset=utf-8"
              } } ).then((responce)=>{ return responce.json(); }).then((data)=>{ 
                  if (data) {
                      location.replace('/forgot-password');
                  }
              });
        });
     });
     // change pwd
     $('#edtpwdConfirm').click(()=>{
         var chck = $('#chckpwdin');
         var conf = $('#confpwdin');
         var confirm = $('#confpwdmain');
         var uname = '';
         // confirm pwd
         if (chck.val() !== '') {
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }),  headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{ return responce.json() }).then((Wdata)=>{
                unHash(Wdata.user_name, chck.val());
            });
        }else {
            if (conf.val() !== '' && confirm.val() !== '') {
                if (conf.val() == confirm.val()) {
                    getHash(password, confirm.val());
                }else {
                    $('#alertconfPar').text('Passwords do not match'); 
                    var alerts = $('#alertconfPar');
                    Alerts(alerts);
                }
            }else {
                if (conf.val() == '' || confirm.val() == '') {
                    $('#alertconfPar').text('Complete password inputs'); 
                    var alerts = $('#alertconfPar');
                    Alerts(alerts);
                }
            }
        }
     });
     var password = new Array();
    // starts
    const getHash = (password, pswd1) => {
        // hash math value
        var math = Math.random().toString(); var len = math.length; var slc = math.slice(2, len); var runna = slc * 5; var runner = runna.toString();
        // hash math value for alphaets
        var math2 = Math.random().toString(); var len2 = math2.length; var slc2 = math2.slice(2, len2); var runna2 = slc2 * 5; var runner2 = runna2.toString();
        // extract input and hashed variable
        Diff(password, runner, runner2, pswd1);
    };
    // password un-hash
    const unHash = (uname, pwd) => {
        fetch('/log/checkUser', { method: 'post', body: JSON.stringify({ user_name: uname }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
          return responce.json();
        }).then((data)=>{
          // check if user exists
          if (data == 'notExists') {
            $('#alertPar').text('User does not exist!'); 
            Alerts();
          }else {
            // if user exists
            if (data) {
              fetch('/log/findHash', { method: 'post', body: JSON.stringify({ u_id: data._id }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                return responce.json();
              }).then((data2)=>{
                if (data2) {
                  var user = pwd;
                  var hashed = data.pwd;
                  var runner = data2.main_hsh;
                  var runner2 = data2.glob_multi;
                  Diff(hashed, runner, runner2, user)
                }
              });
            }
          }
        });
      };
       // alphabets/nunmber diff
    const Diff = (hashed, runner, runner2, user) => {
        // var spacer
        var spc = 0;
        // all values holder
        var tst = '';
        // check each data
        if (user.length > spc) {
            for (let i = 0; i < user.length; i++) {
                // spacer to loop thro
                spc = spc+1; 
                // loopn thro check
                var check = user.slice(spc-1, spc); 
                // loopn thro runner 2
                var chckn = runner2.slice(spc-1, spc); 
                if (isNaN(check)) {
                    if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                    if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                    if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                    if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                    if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                } else {
                    tst += check*chckn;
                }
            }
        }
        Hasher(hashed, runner, runner2, tst);
   }; 
   // maths/hasher
   var globPass = '';
   const Hasher = (hashed, runner, runner2, tst) => {
       var spc = 0;
       var tstr = tst.toString();
       var tster = '';
       var entpwd = document.getElementById('entPwd');
       var verpwd = document.getElementById('verPwd');
       
           // conditioning and adding hashes
           if ($('#chckpwdin').val() !== '') {
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
                    if (hashed == tster) {
                      globPass = tster;
                      $('#chckPwdDiv').css('display', 'none');
                      $('#confPwdDiv').slideDown();
                      $('#chckpwdin').val('');
                    } else {
                      $('#alertPar').text('Incorrect password'); 
                      var alerts = $('#alertPar');
                      Alerts(alerts);
                    }
                    spc = 0;
                }
           } else {
                if ($('#confpwdmain').val() !== '') {
                    var spc2 = 0;
                    var tstr2 = tst.toString();
                    var tster2 = '';
                        // conditioning and adding hashes
                        if (tstr2.length > spc) {
                              for (let i = 0; i < tstr2.length; i++) {
                                  spc2 = spc2 + 1;
                                  // hasher value applyer
                                  var test2 = runner.slice(spc2-1, spc2);
                                  // multipling with runner to to hash up and assign value
                                  if (isNaN(runner2)) {
                                      tster2 += tester2.toString();
                                  }else {
                                      var testing2 = runner2.slice(spc2-1, spc2)*test2;
                                      tster2 += testing2.toString();
                                  }
                                  // input value hashing
                                  var tester2 = tstr2.slice(spc2-1, spc2);
                                  tster2 += tester2.toString(); 
                              }
                          }
                          spc2 = 0;
                          hashed[0] = tster2;
                          hashed[1] = runner;
                          hashed[2] = runner2;
                          // update pwd
                          updatePwd();
                }
           }
   };
   // update password
    const updatePwd = () => {
        const pwd = password[0];
        const gen = password[1];
        const glb = password[2];
        fetch('/log/updatePwd', { method: 'put', body: JSON.stringify({ pwd: pwd, gen: gen, glb: glb }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data) {
                location.replace('/Login');
            }
        });
    };

   /* call alerts syntax
    $('#alertPar').text('Your time has elapsed'); 
    Alerts();
    */
    // alert timer
    const Alerts = (alerts) => {
        alerts.css('display', 'block');
        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 5);
        var countDownDate = targetDate.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
  
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance < 0) {
                alerts.css('display', 'none');
                clearInterval(x);
            }
        }, 1000);
    };

}
Settings();
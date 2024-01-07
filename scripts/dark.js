function Dark() {
   
   // check mode
   var checkDark = () => {
      fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((data) => {
         if (data == 'light') {
            // darkmode buttons efects
            $('#darkb').css('display', 'none');
            $('#darkg').css('display', 'block');
            $('#darkXsOn').css('display', 'block');
            $('#darkXsOff').css('display', 'none');
            
            
            // dividers
            $('.p_divider').css('color', '#f0f0f0');
            $('.marg_right_d').css('border-right', 'solid 1px #f0f0f0');
            $('.b_divider').css('background-color', '#f0f0f0');
            
            $('.p_subHs, .main_navs_btns_lg').css('color', 'grey');
            $('.pL_subHs').css('color', 'silver');
            $('.postHeaderfrst').css('color', '#1a1a1a');

            //body
            $('body, .usrAutUiBodss').css('background-color', '#f0f0f0');

            // header effects
            $('#topnav, #navd2, #navd1, #exprofOpt').css('background-color', 'white');
            $('#topnav, #navd2, #navd1, .editPopBod2').css('box-shadow', '0px 0px 20px -5px #dddddd');
            $('#navmain, .averageBack').css('background-color', 'white');
            $('#navmain').css('box-shadow', '0px 0px 20px -5px #1a1a1a');
            // small header
            $('#nav-xs').css('background-color', 'white');
            $('#nav-xs').css('border-bottom', '#f0f0f0');
            $('#naverxs').css('background-color', 'white');
            $('#naverxs').css('border-bottom', 'solid 1px #dddddd');
            $('#naverxs').css('border-top', 'solid 1px #dddddd');
            $('#minnaver').css('background-color', '#f9f9f9');
            $('#minnaver').css('border-bottom', '#dddddd');
            $('#openwj-xs, #openlocate-xs, #openwj').css('background-color', 'white');
            
            // left nav effects box
            $(".leftNavCon").css('border', 'solid 1px #dddddd');
            $(".leftNavCon, #trndStrAr, .xs_sliderC").css('background-color', 'white');
            $("#leftNavNav, .leftNavNav").css('background-color', 'orange');
            $('.leftNavBod').css('border-bottom', 'solid 1px #f0f0f0');
            $('#leftNaver, #darknavarea').css('background-color', '#f9f9f9');
            $('#leftNaver, #leftNavad, .main_navs_btns_lg').css('border', 'solid 1px #f0f0f0');
            $('#leftNavad').css('background-color', '#f9f9f9');
            $('#leftNavdiv').css('background-color', '#f0f0f0');
            
            // alerts effects
            $('.totagcon, .theTiedCon').css('background-color', 'white');
            //$('').css('box-shadow', '0px 0px 20px -5px #1a1a1a');
            $('#posterClosecon, .subNavsFS').css('border-bottom', 'solid 1px #f0f0f0');
            $('#openWj, #openIj, #openTj, #openStrcondiv, #openStrfrdiv, #openStrcontdiv').css('border-bottom', 'solid 1px #f0f0f0');
            $('#jcon, #jpicdiv, .jpicdiv, #tagfrnddiv, #strContDiv, #strFrDiv, .theTiedCon, #srchPubStrFlw, .alrtSubCons').css('border', 'solid 1px #f0f0f0');
            $('#jcon, #jpicdiv, .jpicdiv, #tagfrnddiv, #strContDiv, #strFrDiv, #srchPubStrFlw, .alrtSubCons').css('background-color', '#f9f9f9');
            $('#closeJbutcon, #closeImgbutcon, .tagSrchbx').css('border-bottom', 'solid 1px #f0f0f0');
            $('#closeTagbutcon, #closeStrFrbutcon').css('border-top', 'solid 1px #f0f0f0');
            $('.inptJI, #mainjh, #autJI, #mainjb, #autJB, #mainStrn, #mainStrh, #ScStr, #tagSrch, #strConHead, #chtFrndsSrch, #tieSrchJrn').css('border-bottom', 'solid 1px #f0f0f0');
            $('#chtFrndsSrch').css('color', '#1a1a1a');
            $('.txtJI, #mainjb, #autJB, #mainsb, .sendMessTxt').css('border', 'solid 1px #f0f0f0');
            $('.txtJI, #mainjb, #autJB, #mainsb, .sendMessTxt').css('background-color', 'white');
            $('.closeImgFlwCon').css('border-bottom', 'solid 1px #f0f0f0');
            $('.scrlimgCon, .revBtns').css('border', 'solid 1px #f0f0f0');
            $('.scrlimgCon').css('background-color', 'white');
            $('.glossFlow').css('background-color', 'white');
            $('.chptrsCr, .theChnCon').css('background-color', '#f0f0f0');

            // chats effects
            $('#chat-head').css('background-color', 'white');
            $('#chat-head').css('border', 'solid 1px #dddddd');
            $('#frndsSrchr, #chatcon').css('border-top', 'solid 1px #f0f0f0');
            $('#chtBgsrchbx').css('border-bottom', 'solid 1px #dddddd');

            // profile effects
            $('#profNavbar, .rte_btn, .main_navs_btns_lg').css('background-color', 'white');
            $('#profNavbar').css('border', 'solid 1px #dddddd');
            $('#chekcFrndsbtCon, .brd-rg').css('border-right', 'solid 1px #f0f0f0');
            $('.brd-lft').css('border-left', 'solid 1px #f0f0f0');
            $('#flowbod, #reaOrStr').css('background-color', '#f9f9f9');
            $('#flowbod, #reaOrStr').css('border', 'solid 1px #dddddd');
            $('.profbody').css('background-color', 'white');
            $('.profbody').css('border', 'solid 1px #dddddd');
            $('.topProfon').css('border-bottom', 'solid 1px #f0f0f0');
            $('.statusdiv').css('border-top', 'solid 1px #f9f9f9');
            $('.statusdiv').css('border-bottom', 'solid 1px #f9f9f9');
            $('#editprofilebut').css('border-bottom', 'solid 1px #f0f0f0');
            $('#editprofilebut').css('color', '#1a1a1a');
            $('#openprofad, #openPublishSet').css('border-bottom', 'solid 1px #f0f0f0');
            $('#openprofad, #openPublishSet').css('color', '#1a1a1a');
            $('#editprofile').css('background-color', 'white');
            $('#editprofile, #editstat, #editname, #editpic, #chngusr, #chngpss, #chngeml, #privarea, #darkXsarea, #delacc').css('border-bottom', 'solid 1px #f0f0f0');
            $('#profadsselectdiv').css('background-color', 'white');
            $('#profadsselectdiv').css('border-bottom', 'solid 1px #f0f0f0');
            $('#privAlign, #darkXsCon, #darkBgCon, .darkBgCon').css('background-color', '#f0f0f0');
            $('#privAlign, #darkXsCon, #darkBgCon, .darkBgCon').css('border', 'solid 0.5px #dddddd');
            // prof ads
            $('#frndsMainCon, #exSusbConM, #subsMainCon, .brdr_div').css('background-color', '#f0f0f0');
            $('#exSusbConM').css('box-shadow', '0px 0px 15px rgba(0, 0, 0, 0.2)');
            $('#frndsNavCon, #exSusbNavC, #subssNavCon').css('background-color', 'white');
            $('#frndsSrchCon').css('background-color', '#f9f9f9');
            $('#frndsSrchCon, #frndsHd, #subsHd, #frndsNavCon, #exSusbNavC, #subssNavCon').css('border-bottom', 'solid 1px #f9f9f9');
            $('#frndsSrchFrnds, .brdr_r_d').css('border-right', 'solid 1px #dddddd');
            // edit pop-ups
            $('#editPopBod, #askPayBod, #editPopBod2, .editPopBod2, .revBtns, .revAutPrcC').css('background-color', 'white');
            $('#editPopHead, #askPayHd, #editPopHead2, .input_btm').css('border-bottom', 'solid 1px #f0f0f0');
            $('#tastatus').css('border', 'solid 1px #f0f0f0');
            $('#edtnmin, #newFAI, #editunamein, #chckpwdin, #confpwdin, #veremlin, #confemlin, #confpwdmain').css('border-bottom', 'solid 1px #f0f0f0');
            
            // notifications-con/chats-con effects
            $('#noticon-xs').css('background-color', 'white');
            $('#noticon-xs').css('border-bottom', 'solid 1px #f0f0f0');
            $('#notibod-xs').css('background-color', 'white');
            $('#notibod-xs').css('border-bottom', 'solid 1px #f0f0f0');

            // searcher con
            $('#searcherCon, #callSrchCon, #pblshAskCon, .lg_hangers, #chtSrchr, #chtFlwAll, #noChatsClckd, .x_books_l_c, .all_books_l_c').css('background-color', 'white');
            $('#searcherCon, .lg_hangers, #chtSrchr, #chtFlwAll, #noChatsClckd').css('border', 'solid 0.6px #dddddd');
            $('#searcherNav, .usrAutCats').css('background-color', '#f9f9f9');
            $('#srchfrndstags').css('border-bottom', 'none');

            // opts
            $('.areYSPCon').css('background-color', 'white');
            $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #f0f0f0');

            // External user 
            $('.askFollowCon, .askFollowCon2, #darknavarea').css('border-top', 'solid 1px #f0f0f0');
            
         }
         if (data === 'dark') {
            
            // darkmode buttons efects
            $('#darkg').css('display', 'none');
            $('#darkb').css('display', 'block');
            $('#darkXsOff').css('display', 'block');
            $('#darkXsOn').css('display', 'none');

            // dividers
            $('.p_divider').css('color', '#262626');
            $('.marg_right_d').css('border-right', 'solid 1px #262626');
            $('.b_divider').css('background-color', '#404040');

            $('.p_subHs, .main_navs_btns_lg').css('color', '#f0f0f0');
            $('.pL_subHs').css('color', '#dddddd');
            $('.postHeaderfrst').css('color', 'white');
            
            // body
            $('body, .usrAutUiBodss').css('background-color', '#333333');

            // header effects
            $('#topnav, #navd2, #navd1, #exprofOpt').css('background-color', '#1a1a1a');
            $('#topnav, #navd2, #navd1, .editPopBod2').css('box-shadow', '0px 0px 20px -5px #000000');
            $('#navmain, .averageBack').css('background-color', '#262626');
            $('#navmain').css('box-shadow', '0px 0px 20px -5px #0d0d0d');
            // small header
            $('#nav-xs').css('background-color', '#1a1a1a');
            $('#nav-xs').css('border-bottom', '#262626');
            $('#naverxs').css('background-color', '#1a1a1a');
            $('#naverxs').css('border-bottom', 'solid 1px #262626');
            $('#naverxs').css('border-top', 'solid 1px #262626');
            $('#minnaver').css('background-color', '#404040');
            $('#minnaver').css('border-bottom', '#262626');
            $('#openwj-xs, #openlocate-xs, #openwj').css('background-color', '#262626');

            // left nav effects
            $(".leftNavCon").css('border', 'solid 1px #404040');
            $(".leftNavCon, #trndStrAr, .xs_sliderC").css('background-color', '#292929');
            $("#leftNavNav, .leftNavNav").css('background-color', 'darkorange');
            $('.leftNavBod').css('border-bottom', 'solid 1px #404040');
            $('#leftNaver, #darknavarea').css('background-color', '#262626');
            $('#leftNaver, #leftNavad, .main_navs_btns_lg').css('border', 'solid 1px #404040');
            $('#leftNavad').css('background-color', '#262626');
            $('#leftNavdiv').css('background-color', '#404040');

            // alerts effects
            $('.totagcon, .theTiedCon').css('background-color', '#262626');
            $('').css('box-shadow', '0px 0px 20px -5px #0d0d0d');
            $('#posterClosecon, .subNavsFS, .notiTopcon').css('border-bottom', 'solid 1px #404040');
            $('#openWj, #openIj, #openTj, #openStrcondiv, #openStrfrdiv, #openStrcontdiv').css('border-bottom', 'solid 1px #404040');
            $('#jcon, #jpicdiv, .jpicdiv, #tagfrnddiv, #strContDiv, #strFrDiv, .theTiedCon, #srchPubStrFlw, .alrtSubCons').css('border', 'solid 1px #404040');
            $('#jcon, #jpicdiv, .jpicdiv, #tagfrnddiv, #strContDiv, #strFrDiv, #srchPubStrFlw, .alrtSubCons').css('background-color', '#1a1a1a');
            $('#closeJbutcon, #closeImgbutcon, .tagSrchbx').css('border-bottom', 'solid 1px #404040');
            $('#closeTagbutcon, #closeStrFrbutcon').css('border-top', 'solid 1px #404040');
            $('.inptJI, #mainjh, #autJI, #mainjb, #autJB, #mainStrn, #mainStrh, #ScStr, #tagSrch, #strConHead, #chtFrndsSrch, #tieSrchJrn').css('border-bottom', 'solid 1px #404040');
            $('#chtFrndsSrch').css('color', 'silver');
            $('.txtJI, #mainjb, #autJB, #mainsb, .sendMessTxt').css('border', 'solid 1px #404040');
            $('.txtJI, #mainjb, #autJB, #mainsb, .sendMessTxt').css('background-color', '#262626');
            $('.closeImgFlwCon').css('border-bottom', 'solid 1px #404040');
            $('.scrlimgCon, .revBtns').css('border', 'solid 1px #404040');
            $('.scrlimgCon').css('background-color', '#262626');
            $('.glossFlow').css('background-color', '#262626');
            $('.chptrsCr, .theChnCon').css('background-color', '#1a1a1a');

            // chats effects
            $('#chat-head').css('background-color', '#262626');
            $('#chat-head').css('border', 'solid 1px #404040');
            $('#chtBgsrchbx').css('border-bottom', 'solid 1px #404040');

            // profile effects
            $('#profNavbar, #reaOrStr, .rte_btn, .main_navs_btns_lg').css('background-color', '#262626');
            $('#profNavbar').css('border', 'solid 1px #404040');
            $('#chekcFrndsbtCon, .brd-rg').css('border-right', 'solid 1px #404040');
            $('.brd-lft').css('border-left', 'solid 1px #404040');
            $('#flowbod').css('background-color', '#333333');
            $('#flowbod, #reaOrStr').css('border', 'solid 1px #404040');
            $('.profbody').css('background-color', '#262626');
            $('.profbody').css('border', 'solid 1px #404040');
            $('.topProfon').css('border-bottom', 'solid 1px #404040');
            $('.statusdiv').css('border-top', 'solid 1px #404040');
            $('.statusdiv').css('border-bottom', 'solid 1px #404040');
            $('#editprofilebut').css('border-bottom', 'solid 1px #404040');
            $('#editprofilebut').css('color', 'silver');
            $('#openprofad, #openPublishSet').css('border-bottom', 'solid 1px #404040');
            $('#openprofad, #openPublishSet').css('color', 'silver');
            $('#logout').css('border-bottom', 'solid 1px #404040');
            $('#editprofile').css('background-color', '#262626');
            $('#editprofile, #editstat, #editname, #editpic, #chngusr, #chngpss, #chngeml, #privarea, #darkXsarea, #delacc').css('border-bottom', 'solid 1px #404040');
            $('#privAlign, #darkXsCon, #darkBgCon, .darkBgCon').css('background-color', '#404040');
            $('#privAlign, #darkXsCon, #darkBgCon, .darkBgCon').css('border', 'solid 0.5px #4d4d4d');
            $('#profadsselectdiv').css('background-color', '#262626');
            $('#profadsselectdiv').css('border-bottom', 'solid 1px #404040');
            // pop ups
            $('#frndsMainCon, #exSusbConM, #subsMainCon, .brdr_div').css('background-color', '#262626');
            $('#exSusbConM').css('box-shadow', '0px 0px 15px rgba(0, 0, 0, 0.9)');
            $('#frndsNavCon, #exSusbNavC, #subssNavCon').css('background-color', '#333333');
            $('#frndsSrchCon').css('background-color', '#333333');
            $('#frndsSrchCon, #frndsHd, #subsHd, #frndsNavCon, #exSusbNavC, #subssNavCon').css('border-bottom', 'solid 1px #404040');
            $('#frndsSrchFrnds, .brdr_r_d').css('border-right', 'solid 1px #404040');
            // edit pop-ups
            $('#editPopBod, #askPayBod, #editPopBod2, .editPopBod2, .revBtns, .revAutPrcC').css('background-color', '#262626');
            $('#editPopHead, #askPayHd, #editPopHead2, .input_btm').css('border-bottom', 'solid 1px #404040');
            $('#tastatus').css('border', 'solid 1px #404040');
            $('#edtnmin, #newFAI, #editunamein, #chckpwdin, #confpwdin, #veremlin, #confemlin, #confpwdmain').css('border-bottom', 'solid 1px #404040');

            // notification effects
            $('#noticon-xs').css('background-color', '#1a1a1a');
            $('#noticon-xs').css('border-bottom', 'solid 1px #262626');
            $('#notibod-xs').css('background-color', '#262626');
            $('#notibod-xs').css('border-bottom', 'solid 1px #404040');

            // searcher con
            $('#searcherCon, #callSrchCon, #pblshAskCon, .lg_hangers, #chtSrchr, #chtFlwAll, #noChatsClckd, .x_books_l_c, .all_books_l_c').css('background-color', '#262626');
            $('#searcherCon, .lg_hangers, #chtSrchr, #chtFlwAll, #noChatsClckd').css('border', 'solid 0.6px #404040');
            $('#searcherNav, .usrAutCats').css('background-color', '#1a1a1a');
            $('#srchfrndstags').css('border-bottom', 'none');

            // opt
            $('.areYSPCon').css('background-color', '#1a1a1a');
            $('.edtPstFlw, .areYSPCon, .areysPP, .srchCon').css('border-bottom', 'solid 1px #404040');

            // External user 
            $('.askFollowCon, .askFollowCon2, #darknavarea').css('border-top', 'solid 1px #404040');
         }
      });
      restartDark();
   };
   const restartDark = () => {
      setTimeout(() => {
         checkDark();
      }, 1000);
   }
   checkDark();
   
    // dark mode settings
   $('#onDarkN').click(function() {
      $('#darknavarea').slideDown();
   });
   $('#darkg, #darkXsOn').click(function() {
      $('#darkg').css('display', 'none');
      $('#darkb').css('display', 'block');
      $('#darkXsOn').css('display', 'none');
      $('#darkXsOff').css('display', 'block');
      fetch('/settings/changeMode', { method: 'post', body: JSON.stringify({ mode: 'dark' }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
         return responce.json();
      }).then((data)=> {
         location.reload();
      });
   });
   $('#darkb, #darkXsOff').click(function() {
      $('#darkb').css('display', 'none');
      $('#darkg').css('display', 'block');
      $('#darkXsOff').css('display', 'none');
      $('#darkXsOn').css('display', 'block');
      fetch('/settings/changeMode', { method: 'post', body: JSON.stringify({ mode: 'light' }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
         return responce.json();
      }).then((data)=> {
         location.reload();
      });
   });

}
Dark();
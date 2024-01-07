function Images() {

  fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{});
  fetch('/strings/clrImgHang', { method: 'get' })

  const ConEDit = () => { return `
    <div id="container-img" style="display:none;" class="row">
      <div class="col-md-12 col-xs-12 edtrHead" style="height:35px; position:fixed; z-index:10;">
        <div class="row">
          <div class="col-md-4 col-xs-4" style="height:100%;">
            <p id="cenclAllImgs" style="margin:5px; color:orangered; cursor: pointer;">Cancel</p>
          </div>
          <div class="col-md-4 col-xs-4" style="height:100%;">
            <p id="EdtImgRv" style="margin:5px; color:#1a1a1a; cursor: pointer; text-align:center; display:none;"> <img src="img/edtimg.png" width="25px" height="25px"> </p>
          </div>
          <div class="col-md-4 col-xs-4" style="height:100%;"></div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-12 edtrBod" style="position:fixed; z-index:8; height:100%;">
        <div class="row">
          <div class="col-md-12 col-xs-12" style="height:40px;"></div>
          <div class="col-md-3 col-xs-12"></div>
          <div class="col-md-6 col-xs-12 ">
            <div style="margin:auto; width:100px;" id="whatImgReview">
              <br>
              
              <p style="color:grey; font-size:13px; margin:5px; text-align:center;"><i>Tap image bellow to edit and review</i></p>
              <img src="img/img2.png" width="100%" height="70px">
            </div>
            <span id="inFilterImg"></span>
            
          </div>
          <div class="col-md-3 col-xs-12"></div>
        </div>
      </div>
      
      <div class="col-md-12 col-xs-12" id="openImgHangEd" style="position:fixed; z-index:10; bottom: 0; right: 0; text-align:center; display: none;">
        <div id="ScrlImgHngUp" style="margin:auto; width:50px; height:50px; border-radius:100%; margin: auto; margin-bottom:10px; cursor: pointer; box-shadow:0px 0px 30px -10px #1a1a1a;">
          <img src="img/up.png" alt="" width="30px" height="20px" style="margin-top: 13px;">
        </div>
      </div>

      <div id="ImgHangEdCon">
        <!-- image carousel container -->
        <div class="col-md-12 col-xs-12" id="scrollThrImgDiv" style="position:fixed; z-index:10; bottom: 0; right: 0; height:235px;">
          <div class="row">
            <div class="col-md-4 col-xs-4" style="height:40px;">
              <p style="margin:5px; color:darkorange; cursor:pointer;" id="DoneFiltering">Done</p>
            </div>
            <div class="col-md-4 col-xs-4" style="height:40px;">
              <p style="text-align:center; margin:5px; margin-top:10px;">
                <img src="img/dwn.png" alt="" width="30px" height="20px" class="ScrlImgHngDwn" style="cursor:pointer;">
              </p>
            </div>
            <div class="col-md-4 col-xs-4" style="height:40px;">
            </div>
            <div class="col-md-12 col-xs-12">
              <div class="imgScrllr" style="height:170px; margin:auto; margin-top:15px; width:100%; border-radius:5px; overflow-x:auto;">
                <span id="ScrollImgBfEdt"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- image edit container -->
        <div id="EdtImgCon" class="col-md-12 col-xs-12" style="position:fixed; z-index:9; bottom: 0; right: 0; height:280px; display:none;">
          <div class="row">
            <div class="col-md-4 col-xs-4" style="height:40px;">
              <p id="doneEdtImg" style="margin:5px; color:skyblue; cursor: pointer;">Done</p>
            </div>
            <div class="col-md-4 col-xs-4" style="height:40px;">
              <p style="text-align:center; margin:5px; margin-top:10px;">
                <img src="img/dwn.png" alt="" width="30px" height="20px" style="cursor: pointer;" class="ScrlImgHngDwn">
              </p>
            </div>
            <div class="col-md-4 col-xs-4" style="height:40px;"></div>
            <div class="col-md-3 col-xs-12"></div>
            <div class="col-md-6 col-xs-12" style="height:240px;">
              <div class="row">
                <div class="col-xs-12 col-md-12 clsEdtrHr" style="height:50px;">

                    <div class="" style="width:20%; height: 100%; float:left;">
                      <div class="" style="width:25px; height:50px; margin:auto; margin-top:10px;">
                        <img id="prevFilter"  src="img/backa.png" width="20px" height="25px" alt="" style="cursor: pointer;">
                      </div>
                    </div>
                    <div class="" style="width:60%; height: 100%; float:left;">
                      <p id="fname" style="text-align:center; color:darkorange; font-size:15px; margin-top:15px;">normal</p>
                    </div>
                    <div class="" style="width:20%; height: 100%; float:right;">
                      <div class="" style="width:25px; height:50px; margin:auto; margin-top:10px;">
                        <img id="nexFilter" onclick="Next()"  src="img/backb.png" width="20px" height="25px" alt="" style="cursor: pointer;">
                      </div>
                    </div>
             
                </div>
                <div class="col-xs-12 col-md-12" style="height:190px;">
                  <span style="margin:10px; color:grey; font-size:13px; float:left;"><img src="img/brit.png" alt="" width="20px" height="25px"> opacity </span>
                  <div class="" style="width:100%; height:20px; float:left; margin-top:10px;">
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left;" id="cbrit1">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="brit1"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left;" id="cbrit2">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="brit2"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left" id="cbrit3">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="brit3"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left;" id="cbrit4">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="brit4"></div>
                    </div>
                    <div class="" style="width:23%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; float:right;" id="cbrit5">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:block;" id="brit5"></div>
                    </div>
                  </div>
                  <!-- <span style="margin:10px; color:grey; font-size:13px; margin-top:10px; float:left;"><img src="img/satu.png" alt="" width="25px" height="20px"> grey-scale </span>
                  <div class="" style="width:100%; height:20px; float:left; margin-top:10px;">
                    <div class="" style="width:1%; height:15px; float:left;" id="csat1">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:block;" id="sat1"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left;" id="csat2">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="sat2"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left" id="csat3">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="sat3"></div>
                    </div>
                    <div class="" style="width:24%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:left;" id="csat4">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="sat4"></div>
                    </div>
                    <div class="" style="width:23%; height:1px; background-color:#dddddd; float:left; margin-top:7px;"></div>
                    <div class="" style="width:1%; height:15px; background-color:#1a1a1a; float:right;" id="csat5">
                      <div class="" style="width:10px; height:20px; background-color:#f0f0f0; border:solid 1px #dddddd; border-radius:3px; display:none;" id="sat5"></div>
                    </div>
                  </div> -->
                </div>
              </div>
              
            </div>
            <div class="col-md-3 col-xs-12"></div>
          </div>
        </div>
      </div>

    </div>
    `};
  const checkMode = () => {
    // light or dark effects
    fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
      if (mode == 'light' || mode == 'gen') {
          $('.edtrHead').css('background-color', 'white');
          $('.edtrHead').css('border-bottom', 'solid 1px #f0f0f0');
          $('.edtrBod').css('background-color', '#f0f0f0');
          $('#ScrlImgHngUp').css('background-color','#f9f9f9');
          $('#scrollThrImgDiv, #EdtImgCon').css('background-color', '#f9f9f9');
          $('.imgScrllr').css('background-color','white');
          $('.clsEdtrHr').css('border-bottom','solid 1px #f0f0f0');
          $('.clsEdtrHr').css('border-top','solid 1px #f0f0f0');
        } else {
          $('.edtrHead').css('background-color', '#292929');
          $('.edtrHead').css('border-bottom', 'solid 1px #404040');
          $('.edtrBod').css('background-color', '#333333');
          $('#ScrlImgHngUp').css('background-color','#1a1a1a');
          $('#scrollThrImgDiv, #EdtImgCon').css('background-color', '#292929');
          $('.imgScrllr').css('background-color','#1a1a1a');
          $('.clsEdtrHr').css('border-bottom','solid 1px #333333');
          $('.clsEdtrHr').css('border-top','solid 1px #333333');
        }
    });
  };
    $('#dropChat').prepend(ConEDit());
    checkMode();

    var testar = new Array();
    
    // open input img
    $('#ClickImgIn').click(()=>{
        $('#postImage').click();
        $('#SendGoImgs').click();   
    });
    $('#ClickImgStrIn').click(()=>{
      $('#postStrImage').click();
      $('#SendGoStrImgs').click();   
    });

    // open usr-aut input
    $('#upldimg-bookCvr').click(()=>{
      $('#postImageUAu').click();
    });
    $('#ClickImgInUA').click(()=>{
      $('#postImageUAuJ').click();
    });

    // scroll hanger down
    $('.ScrlImgHngDwn').click(()=>{
      $('#ImgHangEdCon').fadeOut();
      $('#openImgHangEd').fadeIn();
    });
    //scroll hanger up
    $('#ScrlImgHngUp').click(()=>{
      $('#openImgHangEd').fadeOut();
      $('#ImgHangEdCon').fadeIn();
    });
    // open editor div
    $('#EdtImgRv').click(()=>{
      $('#openImgHangEd, #scrollThrImgDiv, #EdtImgRv').fadeOut();
      $('#ImgHangEdCon, #EdtImgCon').fadeIn();
    });

    
    // current poster diff
    var curnt = 'None';
    // cancel
    $('#cenclAllImgs').click(()=>{
      $('.mainCloneImgs, .allImgs_app').remove();
      $('#shareImgCht, #postEdtStrImage, #postStrImage, #postImage, #postImageUAuJ, #postImageUAu, #profpicImageIn').val('');
      //$($('input').attr('type', 'file')).val('');
      $('#container-img').css('display', 'none');
      $('#container-one, .edtStrBod').fadeIn();
      if (curnt == 'UautJ' || curnt == 'Uaut' || curnt == 'str-thr' || curnt == 'Jrnl') {
        $('.write_alrts').fadeIn();
      }
      fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{});
      fetch('/strings/clrImgHang', { method: 'get' })
      /*if (curnt == 'prfp') {
        $('#fileTpeCon-prfp').css('display', 'block');
        $('#scrlimgCon-prfp').fadeIn();
      }
      if (curnt == 'aut') {
        $('#chseFltp').css('display', 'block');
        $('#scrlimgCon-aut').fadeIn();
      }
      if (curnt == 'Jrnl') {
        $('#fileTpeCon-jrn').css('display', 'block');
        $('#scrlimgCon-jrn').fadeIn();
      }
      if (curnt == 'str-thr') {
        $('#fileTpeCon-str, #reqStrInf').css('display', 'block');
        $('#scrlimgCon-str').fadeIn();
      }
      if (curnt == 'add-thr') {
        $('.edt_jrn_alrt').fadeIn();
        $('#binTypeChse').css('display', 'block');
        $('#scrlimgCon-addThr').slideUp();
      }
      if (curnt = 'cht') {
        $('.shareOptBod').css('display', 'none');
        $('.imgAlignDiv-cht').slideDown();
      }*/
    });

    // check value for all and append images/timer
    var checkValAll = (inp, formData) => {
      fetch('/binary/setImg', { method: 'get' }).then((crnt)=>{
        if (inp.length > 0 && crnt) {
                fetch('/post/setHanger', { method: 'post', body: JSON.stringify({ len: inp.length }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((that)=>{
                  const types = { headers: { "content-type": "multipart/form-data" } };
                  $.ajax({
                    url: '/post/fileUpload',
                    method: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                      $('#postEdtStrImage').val('');
                      $('#container-one, .edt_jrn_alrt, .write_alrts').fadeOut();
                      $('#container-img').slideDown();
                      for (let i = 0; i < response.length; i++) {
                        displayImgs(response[i], i);
                      }
                      fetch('/strings/getAddThrNw', { method: 'get' }).then((res)=>{
                        return res.json();
                      }).then((yp)=>{
                        if (yp == 'bg') {
                          $('#view-container').fadeOut();
                        }
                      });
                      //$('#postImage').val('');
                    },
                    error: function(jqXHR, textStatus, errorMessage) {
                      alert('Error uploading: ' + errorMessage);
                    }
                  });
                  return false;
                });
              }
      });
    };


    /**
     * EXTRACT/PUSH INPUT CONTNTS TO FUNCS
     */
    // FOR JOURNALS
    $('#postImage').change(function(){
      if ($('#postImage').length > 0 && $('#postImage').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postImage').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'Jrnl';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postImage').length > 10) {
          alert('You can only post a maximum of 10 images in a Journal');
          $('#postImage').val('');
        }
      }
    });
    // FOR authorJOURNALS
    $('#postImageAut').change(function(){
      if ($('#postImageAut').length > 0 && $('#postImageAut').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postImageAut').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'aut';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postImageAut').length > 10) {
          alert('You can only post a maximum of 10 images in a Journal');
          $('#postImageAut').val('');
        }
      }
    });
    // for user author
    $('#postImageUAu').change(function(){
      console.log('aut img chnge!');
      if ($('#postImageUAu').length > 0 && $('#postImageUAu').length < 2) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postImageUAu').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'Uaut';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postImageUAu').length > 1) {
          alert('You can only post one cover for your book');
          $('#postImageUAu').val('');
        }
      }
    });
    $('#postImageUAuJ').change(function(){
      if ($('#postImageUAuJ').length > 0 && $('#postImageUAuJ').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postImageUAuJ').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'UautJ';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postImageUAuJ').length > 10) {
          alert('You can only upload upton 10 images per journal');
          $('#postImageUAuJ').val('');
        }
      }
    });
    // author back img
    $('#autBckImg').change(function(){
      if ($('#autBckImg').length > 0 && $('#autBckImg').length < 2) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('autBckImg').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'abi';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#autBckImg').length > 1) {
          alert('Multiple images cannot be applied as a profile picture');
          $('#autBckImg').val('');
        }
      }
    });
    // for tops
    $('#postImageTop').change(function(){
      if ($('#postImageTop').length > 0 && $('#postImageTop').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postImageTop').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'autops';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postImageTop').length > 10) {
          alert('You can only post a maximum of 10 images in a Journal');
          $('#postImageTop').val('');
        }
      }
    });
    // for strings
    $('#postStrImage').change(function(){
      if ($('#postStrImage').length > 0 && $('#postStrImage').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postStrImage').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'str-thr';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#postStrImage').length > 10) {
          alert('You can only post a maximum of 10 images in a thread');
          $('#postStrImage').val('');
        }
      }
    });
    // FOR PROF-PIC
    $('#profpicImageIn').change(function(){
      if ($('#profpicImageIn').length > 0 && $('#profpicImageIn').length < 2) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('profpicImageIn').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'prfp';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#profpicImageIn').length > 1) {
          alert('Multiple images cannot be applied as a profile picture');
          $('#profpicImageIn').val('');
        }
      }
    });
    
    // add thread to exstin str
    const getEdtStrImg = () => {
      if ($('#postEdtStrImage').length > 0 && $('#postEdtStrImage').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('postEdtStrImage').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          //('going somewhere');
          curnt = 'add-thr';
          checkValAll(inp, formData);
          fetch('/strings/clrImgHang', { method: 'get' });
          getCurT();
        });
      } else {
        if ($('#postEdtStrImage').length > 10) {
          alert('You can only apply not more than ten images to a thread');
          $('#postEdtStrImage').val('');
        }
      }
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
          if (distance < 0) {
            getEdtStrVal();
            clearInterval(x);
              //clearInterval(x);
          }
      }, 1000);
    };
    getCurT();
    const getEdtStrVal = () => {
      fetch('/strings/getImgHang', { method: 'get' }).then((res)=>{
        return res.json();
      }).then((data)=>{
        if (data > 0) {
          getEdtStrImg();
        }else {
          getCurT();
        }
      });
    };

    // go with images for share-chats
    /*var checkVal = (inp, formData) => {
      var targetDate = new Date();
      targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
      var countDownDate = targetDate.getTime();
      var x = setInterval(function() {
          var now = new Date().getTime();
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
          if (distance < 0) {
              if (inp.length > 0) {
                $('#flowHangerFltrdP').text(inp.length);
                const types = { headers: { "content-type": "multipart/form-data" } };
                $.ajax({
                  url: '/chats/shareImg',
                  method: 'post',
                  data: formData,
                  contentType: false,
                  processData: false,
                  success: function(response) {
                      $('#container-one').fadeOut();
                      $('#container-img').slideDown();
                    for (let i = 0; i < response.length; i++) {
                      displayImgs(response[i], i);
                    }
                    clearInterval(x);
                    $('#shareImgCht').val('');
                  },
                  error: function(jqXHR, textStatus, errorMessage) {
                    alert('Error uploading: ' + errorMessage);
                  }
                });
                return false;
              }else {
                $('#ShareImgChat').click();
              }
              clearInterval(x);
          }
      }, 1000);
    };*/
    // for strings
    $('#shareImgCht').change(function(){
      if ($('#shareImgCht').length > 0 && $('#shareImgCht').length < 11) {
        fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
          var inp = document.getElementById('shareImgCht').files;
          var formData = new FormData();
          for (let i = 0; i < inp.length; i++) {
            formData.append('file', inp[i]);
          }
          curnt = 'cht';
          checkValAll(inp, formData);
        });
      }else {
        if ($('#shareImgCht').length > 10) {
          alert('You can only share a maximum of 10 images at a time');
          $('#shareImgCht').val('');
        }
      }
    });
    /*$('#ShareImgChat').click(()=>{
      //$('#shareImgCht').val('');
      //$('#GoImgDiv, #GoImgStrDiv').fadeOut(); 
      fetch('/post/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
        var inp = document.getElementById('shareImgCht').files;
        var formData = new FormData();
        for (let i = 0; i < inp.length; i++) {
          formData.append('file', inp[i]);
        }
        curnt = 'cht';
        checkValAll(inp, formData);
      });
    });*/

      const InFilter = (data, posterId) => {
        return `
        <div id="filterimage" class="imgRevewer" style="width:100%; height:100%; margin-top:10px;">
          <img id="${posterId}" class="none" src="" alt="" width="100%" height="100%">
        </div>
        `
      };

    const ImgCon = (data, ids) => { return `
      <div class="mainCloneImgs" style="width:150px; height:150px; float:left; margin-top:10px; margin-bottom:10px; margin-left:10px; cursor:pointer;">
        <img src="dropimg/${data.filename}" id="${ids.punchId}" class="" alt="" width="150px" height="145px" style="border-radius:5px; box-shadow:0px 0px 20px -10px black;">
      </div>
    ` };

    // punch image
    const punchImg = (data, punchId, posterId) => {
      const punchBtn = $(`#${punchId}`);
      $(punchBtn).click(()=>{
        $('#whatImgReview').css('display', 'none');
        $('.imgRevewer').remove();
        $('#EdtImgRv').fadeIn();
        $('#inFilterImg').after(InFilter(data, posterId));
        $(`#${posterId}`).attr('src', `dropimg/${data.filename}`);
        $(`#${posterId}`).attr('class', $(`#${punchId}`).attr('class'));
        // done with editing  
        // img filter functions
        var classes = ["none", "yellow", "purple", "brown", "blue", "reds", "pale", "bandw"];
        var num = 0;

        $('#nexFilter').click(()=>{
            num++;
            if (num >= classes.length) {
                num = 0;
            }
            $(`#${posterId}`).attr("class", classes[num]);
            var classone = $(`#${posterId}`).attr("class");
            if (classone === "none") {
                $("#fname").text("normal");
            }
            if (classone === "yellow") {
                $("#fname").text("sunflower");
            }
            if (classone === "purple") {
                $("#fname").text("purple");
            }
            if (classone === "brown") {
                $("#fname").text("kano");
            }
            if (classone === "blue") {
                $("#fname").text("bloom");
            }
            if (classone === "reds") {
                $("#fname").text("rome");
            }
            if (classone === "pale") {
                $("#fname").text("Pale");
            }
            if (classone === "bandw") {
                $("#fname").text("Guernica");
            }
        });

        $('#prevFilter').click(()=>{
            num--;
            if (num < 0) {
                num = classes.length-1;
            }
            $(`#${posterId}`).attr("class", classes[num]);
            var classone = $(`#${posterId}`).attr("class");
            if (classone === "none") {
                $("#fname").text("normal");
            }
            if (classone === "yellow") {
                $("#fname").text("sunflower");
            }
            if (classone === "purple") {
                $("#fname").text("purple");
            }
            if (classone === "brown") {
                $("#fname").text("kano");
            }
            if (classone === "blue") {
                $("#fname").text("bloom");
            }
            if (classone === "reds") {
                $("#fname").text("rome");
            }
            if (classone === "pale") {
                $("#fname").text("Pale");
            }
            if (classone === "bandw") {
                $("#fname").text("Guernica");
            }
        });
      });
    };
    
    // assign hanger
    const hangerAss = (data, punchId, posterId, i) => {
      var hangNm = ``;
      if (curnt == 'Jrnl') {
        hangNm = `imgHangerFltrd-jrn${i}`;
        $('#flowHangerFltrd-jrn').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
      }
      if (curnt == 'aut') {
        hangNm = `imgHangerFltrd-aut${i}`;
        $('#flowHangerFltrd-aut').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
        //$('#flowHangerFltrd-str').append(proto(hangNm));
      }
      if (curnt == 'autops') {
        hangNm = `imgHangerFltrd-autops${i}`;
        $('#flowHangerFltrd-autops').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
      }
      if (curnt == 'str-thr') {
        hangNm = `imgHangerFltrd-thr${i}`;
        $('#flowHangerFltrd-str').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
        //$('#flowHangerFltrd-str').append(proto(hangNm));
      }
      if (curnt == 'add-thr') {
        hangNm = `imgHangerFltrd-add-thr${i}`;
        $('#flowHangerFltrd-addThr').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
        //$('#flowHangerFltrd-str').append(proto(hangNm));
      }
      if (curnt == 'cht') {
        fetch('/chats/getshrImgId', { method: 'get' }).then((res)=>{
          return res.json();
        }).then((flwId)=>{
          hangNm = `imgHangerFltrd-cht${i}`;
          $(`#${flwId}`).append(`
            <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
            </div>
            `);
            $(`#${hangNm}`).attr('src', $(`#${punchId}`).attr('src'));
          });
        }
      if (curnt == 'prfp') {
        hangNm = `imgHangerFltrd-prfp${i}`;
        $('#flowHangerFltrd-prfp').append(`
          <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
            <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
          </div>
        `);
        }
        if (curnt == 'abi') {
          hangNm = `imgHangerFltrd-abi`;
          $('#flowHangerFltrd-autBI').append(`
            <div style="width:60%; margin:auto; margin-top:5px; margin-bottom:10px;">
              <img id="${hangNm}" class="none abimg" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
            </div>
          `);
          //$('#flowHangerFltrd-str').append(proto(hangNm));
        }
        if (curnt == 'Uaut') {
          var nwI = $(`#${punchId}`).attr('src');
          uaC = $(`#${posterId}`).attr('class');
          //hangNm = `imgHangerFltrd-UAut${i}`;
          $('#upplddImg-bookCvr').attr('src', `${nwI}`);
          //$('#flowHangerFltrd-str').append(proto(hangNm));
        }
        if (curnt == 'UautJ') {
          hangNm = `imgHangerFltrd-UautJ${i}`;
          $('#flowHangerFltrd-UautJ').append(`
            <div class="col-md-6 col-xs-6 allImgs_app" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
            </div>
          `);
        }
        if (curnt !== 'Uaut') {
          $(`#${hangNm}`).attr('src', $(`#${punchId}`).attr('src'));
        }
    };
    
    // smart buttons
    const smartBtns = (data, punchId, posterId, i) => {
      $('#doneEdtImg').click(()=>{
        $('#EdtImgCon').fadeOut();
        $('#scrollThrImgDiv, #EdtImgRv').fadeIn();
        var poster = $(`#${posterId}`).attr('class');
        $(`#${punchId}`).attr('class', poster);
        if (curnt == 'Jrnl') {
          $(`#imgHangerFltrd-jrn${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'aut') {
          $(`#imgHangerFltrd-aut${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'autops') {
          $(`#imgHangerFltrd-autops${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'thr') {
          $(`#imgHangerFltrd-thr${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'cht') {
          $(`#imgHangerFltrd-cht${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'prfp') {
          $(`#imgHangerFltrd-prfp${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'add-thr') {
          $(`#imgHangerFltrd-add-thr${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'abi') {
          $(`#imgHangerFltrd-abi`).attr('class', $(`#${posterId}`).attr('class'));
        }
        if (curnt == 'Uaut') {
          uaC = $(`#${posterId}`).attr('class');
        }
        if (curnt == 'UautJ') {
          $(`#imgHangerFltrd-UautJ${i}`).attr('class', $(`#${posterId}`).attr('class'));
        }
        $('#fname').text('normal');
      });
    };
    
    // done with filtering and verifying image
    var uaC = '';
    $('#DoneFiltering').click(()=>{
      $('#shareImgCht, #postEdtStrImage, #postStrImage, #postImage').val('');
      $('#container-img').css('display', 'none');
      if (curnt == 'prfp') {
        $('#container-one, .edt_jrn_alrt').fadeIn();
        $('#fileTpeCon-prfp').css('display', 'none');
        $('#scrlimgCon-prfp').fadeIn();
      }
      if (curnt == 'aut') {
        $('#container-one, .edt_jrn_alrt, .write_alrts').fadeIn();
        $('#chseFltp').css('display', 'none');
        $('#scrlimgCon-aut').fadeIn();
      }
      if (curnt == 'autops') {
        $('#container-one, .edt_jrn_alrt').fadeIn();
        $('#chseFltp-top').css('display', 'none');
        $('#scrlimgCon-top').fadeIn();
      }
      if (curnt == 'Jrnl') {
        $('#container-one, .edt_jrn_alrt, .write_alrts').fadeIn();
        $('#fileTpeCon-jrn').css('display', 'none');
        $('#scrlimgCon-jrn').fadeIn();
      }
      if (curnt == 'str-thr') {
        $('#container-one, .edt_jrn_alrt').fadeIn();
        $('#fileTpeCon-str, #reqStrInf').css('display', 'none');
        $('#scrlimgCon-str, .write_alrts').fadeIn();
      }
      if (curnt == 'add-thr') {
        fetch('/strings/getAddThrNw', { method: 'get' }).then((res)=>{
          return res.json();
        }).then((yp)=>{
          $('#binTypeChse').css('display', 'none');
          $('#scrlimgCon-addThr').slideDown();
          if (yp == 'bg') {
            $('#view-container, .edt_jrn_alrt').fadeIn();
          }else {
            $('#container-one, .edt_jrn_alrt').fadeIn();
          }
        });
      }
      if (curnt == 'cht') {
        $('#container-one, .edt_jrn_alrt').fadeIn();
        //$('.shareOptBod').css('display', 'none');
        $('.imgAlignDiv-cht').slideDown();
      }
      if (curnt == 'abi') {
        $('#opnChngABImg').css('display', 'none');
        $('#remABImg, #applyAutBI').fadeIn();
        $('#container-one').fadeIn();
      }
      if (curnt == 'Uaut') {
        $('#container-one, .edt_jrn_alrt, .write_alrts').fadeIn();
        $('#upldimg-bookCvr').css('display', 'none');
        $('#upplddImg-bookCvr, #dlt-uplddBkCvr').fadeIn();
        $('#upplddImg-bookCvr').attr('class', `${uaC}`);
      }
      if (curnt == 'UautJ') {
        $('#container-one, .edt_jrn_alrt, .write_alrts').fadeIn();
        $('#fileTpeCon-UautJ').css('display', 'none');
        $('#scrlimgCon-UautJ').fadeIn();
      }
      $('.edtStrBod').fadeIn();
      $('.mainCloneImgs').remove();
    });

    const createIds = (data) => {
      var dataname = data.filename.slice(0, 13);
      return {
        punchId: 'punchId_' + dataname,
        posterId: 'posterId_' + dataname
      }
    };
    
    const displayImgs = (data, i) => {
      const ids = createIds(data);
      $('#ScrollImgBfEdt').append(ImgCon(data, ids));
      punchImg(data, ids.punchId, ids.posterId);
      smartBtns(data, ids.punchId, ids.posterId, i);
      hangerAss(data, ids.punchId, ids.posterId, i);
    };

}
Images();
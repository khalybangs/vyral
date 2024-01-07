function video() {

    // video body
    const vidEdit = () => {
        return `
        <div class="container-fluid" id="container-vid" style=" display:none;">
            <div class="row">

                <div class="col-md-12 col-xs-12 edtrHead" style="height:35px; position:fixed; z-index:10;">
                    <div class="row">
                        <div class="col-md-4 col-xs-4" style="height:100%;">
                            <p style="margin:5px; color:orangered; cursor: pointer;" id="can_edt_vids">Cancel</p>
                        </div>
                        <div class="col-md-4 col-xs-4" style="height:100%;">
                            <p id="fnshEdtVid" style="margin:5px; color:skyblue; cursor: pointer; text-align:center;"> Done </p>
                        </div>
                        <div class="col-md-4 col-xs-4" style="height:100%;"></div>
                    </div>
                </div>

                <!-- view vid -->
                <div class="col-md-12 col-xs-12" style="height:40px;"></div>
                <div class="col-md-3 col-xs-12"></div>
                <div class="col-md-6 col-xs-12 edtrBod">
                    <br>
                    
                    <span id="inFiltVid"></span>
                    
                </div>
                <div class="col-md-3 col-xs-12"></div>

                <!-- open edtr -->
                <div class="col-md-12 col-xs-12" id="openVidHangEd" style="position:fixed; z-index:10; bottom: 0; right: 0; text-align:center;">
                    <div id="opnVidEdtr" style="margin:auto; width:50px; height:50px; border-radius:100%; margin: auto; margin-bottom:10px; cursor: pointer; box-shadow:0px 0px 30px -10px #1a1a1a;">
                        <img src="img/edtimg.png" alt="" width="30px" height="30px" style="margin-top: 5px;">
                    </div>
                </div>

                <!-- vid edit container -->
                <div id="EdtVidCon" class="col-md-12 col-xs-12" style="position:fixed; z-index:9; bottom: 0; right: 0; height:200px;display:none;">
                    <div class="row">

                        <div class="col-md-4 col-xs-4" style="height:40px;">
                            <p id="doneEdtVid" style="margin:5px; color:skyblue; cursor: pointer;">Done</p>
                        </div>
                        <div class="col-md-4 col-xs-4" style="height:40px;">
                            <p style="text-align:center; margin:5px; margin-top:10px;">
                                <img src="img/dwn.png" alt="" width="30px" height="20px" style="cursor: pointer;" class="ScrlVidHngDwn">
                            </p>
                        </div>
                        <div class="col-md-4 col-xs-4" style="height:40px;"></div>
                        <div class="col-md-3 col-xs-12"></div>
                        <div class="col-md-6 col-xs-12" style="height:240px;">
                            <div class="row">
                                <div class="col-xs-12 col-md-12 clsEdtrHr" style="height:50px;">

                                    <div class="" style="width:20%; height: 100%; float:left;">
                                        <div class="" style="width:25px; height:50px; margin:auto; margin-top:10px;">
                                            <img id="prevFilterVid"  src="img/backa.png" width="20px" height="25px" alt="" style="cursor: pointer;">
                                        </div>
                                    </div>
                                    <div class="" style="width:60%; height: 100%; float:left;">
                                        <p id="fnameVid" style="text-align:center; color:darkorange; font-size:15px; margin-top:15px;">normal</p>
                                    </div>
                                    <div class="" style="width:20%; height: 100%; float:right;">
                                        <div class="" style="width:25px; height:50px; margin:auto; margin-top:10px;">
                                            <img id="nexFilterVid" onclick="Next()"  src="img/backb.png" width="20px" height="25px" alt="" style="cursor: pointer;">
                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-12"></div>

                    </div>
                </div>

            </div>

        </div>
        `
    };
    const checkMode = () => {
      // light or dark effects
      fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
          if (mode == 'light' || mode == 'gen') {
              $('.edtrHead').css('background-color', 'white');
              $('.edtrHead').css('border-bottom', 'solid 1px #f0f0f0');
              $('.edtrBod').css('background-color', '#f0f0f0');
              $('#opnVidEdtr').css('background-color','#f9f9f9');
              $('#EdtVidCon').css('background-color','white');
              $('.clsEdtrHr').css('border-bottom','solid 1px #f0f0f0');
              $('.clsEdtrHr').css('border-top','solid 1px #f0f0f0');
            } else {
              $('.edtrHead').css('background-color', '#292929');
              $('.edtrHead').css('border-bottom', 'solid 1px #404040');
              $('.edtrBod').css('background-color', '#333333');
              $('#opnVidEdtr').css('background-color','#1a1a1a');
              $('#EdtVidCon').css('background-color','#1a1a1a');
              $('.clsEdtrHr').css('border-bottom','solid 1px #333333');
              $('.clsEdtrHr').css('border-top','solid 1px #333333');
            }
        });
    };
    $('body').append(vidEdit());
    checkMode();

    // scroll hanger down
    $('.ScrlVidHngDwn').click(()=>{
      $('#EdtVidCon').fadeOut();
      $('#openVidHangEd').fadeIn();
    });
    //scroll hanger up
    $('#opnVidEdtr').click(()=>{
      $('#openVidHangEd').fadeOut();
      $('#EdtVidCon').fadeIn();
    });

    var curnt = '';

    // cancel editing
    $('#can_edt_vids').click(()=>{
      $('.editHangVid, .allVids_aedt').remove();
      $('#postVideoJrnl, #postVideoUAuJ').val('');
      $('#container-vid').css('display', 'none');
      $('#container-one, .edtStrBod').fadeIn();
      if (curnt == 'Jrnl' || curnt == 'str-thr' || curnt == 'UautJ') {
        $('#container-one, .write_alrts').fadeIn();
      }
    });

        // check value for all and append images/timer
        var checkValAll = (inp, formData) => {
          fetch('/binary/setVid', { method: 'get' }).then((crnt)=>{
            if (inp.length > 0 && crnt) {
                  console.log('yakai nan!');
                    fetch('/video/setHanger', { method: 'post', body: JSON.stringify({ len: inp.length }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((that)=>{
                      const types = { headers: { "content-type": "multipart/form-data" } };
                      $.ajax({
                        url: '/video/videoUpload',
                        method: 'post',
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function(response) {
                          $('#postVideo-add-thr').val('');
                            $('#container-one, .edt_jrn_alrt, .write_alrts').fadeOut();
                            $('#container-vid').slideDown();
                            for (let i = 0; i < response.length; i++) {
                                displayVids(response[i], i);
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
        $('#postVideoJrnl').change(function(){
          if ($('#postVideoJrnl').length > 0 && $('#postVideoJrnl').length < 2) {
            fetch('/video/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
              var inp = document.getElementById('postVideoJrnl').files;
              var formData = new FormData();
              for (let i = 0; i < inp.length; i++) {
                formData.append('file', inp[i]);
              }
              curnt = 'Jrnl';
              checkValAll(inp, formData);
            });
          }else {
            if ($('#postVideoJrnl').length > 1) {
              alert('You can only post a maximum of 1 video in a Journal');
              $('#postVideoJrnl').val('');
            }
          }
        });
        // FOR STRINGS
        $('#postVideoStr').change(function(){
          if ($('#postVideoStr').length > 0 && $('#postVideoStr').length < 2) {
            fetch('/video/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
              var inp = document.getElementById('postVideoStr').files;
              var formData = new FormData();
              for (let i = 0; i < inp.length; i++) {
                formData.append('file', inp[i]);
              }
              curnt = 'str-thr';
              checkValAll(inp, formData);
            });
          }else {
            if ($('#postVideoStr').length > 1) {
              alert('You can only post a maximum of 1 video in a Journal');
              $('#postVideoStr').val('');
            }
          }
        });

        // FOR USER AUTHOR
        $('#postVideoUAuJ').change(function(){
          if ($('#postVideoUAuJ').length > 0 && $('#postVideoUAuJ').length < 2) {
            fetch('/video/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
              var inp = document.getElementById('postVideoUAuJ').files;
              var formData = new FormData();
              for (let i = 0; i < inp.length; i++) {
                formData.append('file', inp[i]);
              }
              curnt = 'UautJ';
              checkValAll(inp, formData);
            });
          }else {
            if ($('#postVideoUAuJ').length > 1) {
              alert('You can only post a maximum of 1 video in a Journal');
              $('#postVideoUAuJ').val('');
            }
          }
        });

        // for admin author
        $('#postVideoAut').change(function(){
          if ($('#postVideoAut').length > 0 && $('#postVideoAut').length < 2) {
            fetch('/video/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
              var inp = document.getElementById('postVideoAut').files;
              var formData = new FormData();
              for (let i = 0; i < inp.length; i++) {
                formData.append('file', inp[i]);
              }
              curnt = 'adm_aut';
              checkValAll(inp, formData);
            });
          }else {
            if ($('#postVideoAut').length > 1) {
              alert('You can only post a maximum of 1 video in a Journal');
              $('#postVideoAut').val('');
            }
          }
        });

        // get vids for add-thrds
        const getEdtStrVid = () => {
          if ($('#postVideo-add-thr').length > 0 && $('#postVideo-add-thr').length < 2) {
            fetch('/video/clrHanger', { method: 'get' }).then((res)=>{ return res.json(); }).then((tryAg)=>{
              var inp = document.getElementById('postVideo-add-thr').files;
              var formData = new FormData();
              for (let i = 0; i < inp.length; i++) {
                formData.append('file', inp[i]);
              }
              curnt = 'add-thr';
              checkValAll(inp, formData);
              fetch('/strings/clrVidHang', { method: 'get' });
              getCurT();
            });
          }else {
            if ($('#postVideo-add-thr').length > 1) {
              alert('You can only post a maximum of 1 video in a Journal');
              $('#postVideo-add-thr').val('');
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
          fetch('/strings/getVidHang', { method: 'get' }).then((res)=>{
            return res.json();
          }).then((data)=>{
            if (data > 0) {
              getEdtStrVid();
            }else {
              getCurT();
            }
          });
        };

        // editor controls
        const punches = (vid, num, punchId) => {

            // img filter functions
            var classes = ["none", "yellow", "purple", "brown", "blue", "reds", "pale", "bandw"];
            var num = 0;

            $('#nexFilterVid').click(()=>{
                num++;
                if (num >= classes.length) {
                    num = 0;
                }
                $(`#${punchId}`).attr("class", classes[num]);
                var classone = $(`#${punchId}`).attr("class");
                if (classone === "none") {
                    $("#fnameVid").text("normal");
                }
                if (classone === "yellow") {
                    $("#fnameVid").text("sunflower");
                }
                if (classone === "purple") {
                    $("#fnameVid").text("purple");
                }
                if (classone === "brown") {
                    $("#fnameVid").text("kano");
                }
                if (classone === "blue") {
                    $("#fnameVid").text("bloom");
                }
                if (classone === "reds") {
                    $("#fnameVid").text("rome");
                }
                if (classone === "pale") {
                    $("#fnameVid").text("Pale");
                }
                if (classone === "bandw") {
                    $("#fnameVid").text("Guernica");
                }
            });

            $('#prevFilterVid').click(()=>{
                num--;
                if (num < 0) {
                    num = classes.length-1;
                }
                $(`#${punchId}`).attr("class", classes[num]);
                var classone = $(`#${punchId}`).attr("class");
                if (classone === "none") {
                    $("#fnameVid").text("normal");
                }
                if (classone === "yellow") {
                    $("#fnameVid").text("sunflower");
                }
                if (classone === "purple") {
                    $("#fnameVid").text("purple");
                }
                if (classone === "brown") {
                    $("#fnameVid").text("kano");
                }
                if (classone === "blue") {
                    $("#fnameVid").text("bloom");
                }
                if (classone === "reds") {
                    $("#fnameVid").text("rome");
                }
                if (classone === "pale") {
                    $("#fnameVid").text("Pale");
                }
                if (classone === "bandw") {
                    $("#fnameVid").text("Guernica");
                }
            });

        };

        // assign hanger
    const hangerAss = (data, punchId, posterId, i) => {
        var hangNm = ``;
        if (curnt == 'Jrnl') {
          hangNm = `vidHangerFltrd-jrn${i}`;
          $('#flowHangerFltrd-vid-jrn').append(`
            <div class="col-md-6 col-xs-6 allVids_aedt" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <video id="${hangNm}" class="none" style="width:120px; height:150px; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;"></video>
            </div>
          `);
        }
        if (curnt == 'str-thr') {
          hangNm = `vidHangerFltrd-thr${i}`;
          $('#flowHangerFltrd-vid-str').append(`
            <div class="col-md-6 col-xs-6 allVids_aedt" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <video id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;"></video>
            </div>
          `);
          //$('#flowHangerFltrd-str').append(proto(hangNm));
        }
        if (curnt == 'add-thr') {
          hangNm = `vidHangerFltrd-addThr${i}`;
          $('#flowHangerFltrd-vid-addThr').append(`
            <div class="col-md-6 col-xs-6 allVids_aedt" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <video id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;"></video>
            </div>
          `);
          //$('#flowHangerFltrd-str').append(proto(hangNm));
        }
        if (curnt == 'UautJ') {
          hangNm = `vidHangerFltrd-UautJ${i}`;
          $('#flowHangerFltrd-vid-UautJ').append(`
            <div class="col-md-6 col-xs-6 allVids_aedt" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <video id="${hangNm}" class="none" style="width:120px; height:150px; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;"></video>
            </div>
          `);
        }
        if (curnt == 'adm_aut') {
          hangNm = `vidHangerFltrd-admautJ${i}`;
          $('#flowHangerFltrd-aut').append(`
            <div class="col-md-6 col-xs-6 allVids_aedt" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <video id="${hangNm}" class="none" style="width:120px; height:150px; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;"></video>
            </div>
          `);
        }
        /*if (curnt == 'cht') {
          fetch('/chats/getshrImgId', { method: 'get' }).then((res)=>{
            return res.json();
          }).then((flwId)=>{
            hangNm = `imgHangerFltrd-cht${i}`;
            $(`#${flwId}`).append(`
              <div class="col-md-6 col-xs-6" style="height:150px; margin-top:5px; margin-bottom:10px;">
                <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
              </div>
              `);
              $(`#${hangNm}`).attr('src', $(`#${punchId}`).attr('src'));
            });
          }
        if (curnt == 'prfp') {
          hangNm = `imgHangerFltrd-prfp${i}`;
          $('#flowHangerFltrd-prfp').append(`
            <div class="col-md-6 col-xs-6" style="height:150px; margin-top:5px; margin-bottom:10px;">
              <img id="${hangNm}" class="none" style="width:100%; height:100%; border-radius:5px; box-shadow:0px 0px 20px -10px #1a1a1a;">
            </div>
          `);
          }*/
          $(`#${hangNm}`).attr('src', $(`#${punchId}`).attr('src'));
      };

      // smart buttons
    const smartBtns = (data, punchId, posterId, i) => {
        $('#doneEdtVid').click(()=>{
            $('#EdtVidCon').fadeOut();
            $('#openVidHangEd').fadeIn();
            if (curnt == 'Jrnl') {
                $(`#vidHangerFltrd-jrn${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'str-thr') {
                $(`#vidHangerFltrd-thr${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'add-thr') {
              $(`#vidHangerFltrd-addThr${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'cht') {
                $(`#vidHangerFltrd-cht${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'prfp') {
                $(`#vidHangerFltrd-prfp${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'UautJ') {
              $(`#vidHangerFltrd-UautJ${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            if (curnt == 'adm_aut') {
              $(`#vidHangerFltrd-admautJ${i}`).attr('class', $(`#${punchId}`).attr('class'));
            }
            $('#fnameVid').text('normal');
        });
      };

        // done with filtering and verifying image
    $('#fnshEdtVid').click(()=>{
        $('#postVideoJrnl').val('');
        $('#container-vid').css('display', 'none');
        /*if (curnt == 'prfp') {
          $('#container-one').fadeIn();
          $('#fileTpeCon-prfp').css('display', 'none');
          $('#scrlimgCon-prfp').fadeIn();
        }*/
        if (curnt == 'Jrnl') {
          $('#container-one, .write_alrts').fadeIn();
          $('#fileTpeCon-jrn').css('display', 'none');
          $('#scrlvidCon-jrn').fadeIn();
        }
        if (curnt == 'str-thr') {
          $('#container-one, .write_alrts').fadeIn();
          $('#fileTpeCon-str').css('display', 'none');
          $('#scrlvidCon-str').fadeIn();
        }
        if (curnt == 'UautJ') {
          $('#container-one, .write_alrts').fadeIn();
          $('#fileTpeCon-UautJ').css('display', 'none');
          $('#scrlvidCon-UautJ').fadeIn();
        }
        if (curnt == 'adm_aut') {
          $('#container-one, .edt_jrn_alrt').fadeIn();
          $('#chseFltp').css('display', 'none');
          $('#scrlimgCon-aut').fadeIn();
        }
        if (curnt == 'add-thr') {
          fetch('/strings/getAddThrNw', { method: 'get' }).then((res)=>{
            return res.json();
          }).then((yp)=>{
            $('#binTypeChse').css('display', 'none');
            $('#scrlvidCon-addThr').fadeIn();
            if (yp == 'bg') {
              $('#view-container, .edt_jrn_alrt, .edtStrBod').fadeIn();
            }else {
              $('#container-one, .edt_jrn_alrt, .edtStrBod').fadeIn();
            }
          });
        }
        /*if (curnt = 'cht') {
          $('.shareOptBod').css('display', 'none');
          $('.imgAlignDiv-cht').slideDown();
        }
        $('.edtStrBod').fadeIn();
        $('.mainCloneImgs').remove();*/
        $('.editHangVid').remove();
      });

      const createIds = (data) => {
          var dataname = data.filename.slice(0, 13);
          return {
            punchId: 'punchId_' + dataname,
            posterId: 'posterId_' + dataname
          }
        };
      // ALL VIDEO EDT FUNC
    const displayVids = (vid, num) => {
        const ids = createIds(vid);
        $('#inFiltVid').append(`
                <video id="${ids.punchId}" class="editHangVid none" src="dropvid/${vid.filename}" controls style="width:100%;"></video>
            `);
        punches(vid, num, ids.punchId);
        smartBtns(vid, ids.punchId, ids.posterId, num);
        hangerAss(vid, ids.punchId, ids.posterId, num);
    }
    
}
video();
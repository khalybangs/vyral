function clsAlphaNoOnly (e) {  // Accept only alpha numerics, no special characters 
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
      return true;
  }

  e.preventDefault();
  return false;
}
function clsAlphaNoOnly2 () {  // Accept only alpha numerics, no special characters 
  return clsAlphaNoOnly (this.event); // window.event
}
$( document ).ready(function() {
  
  // smart value
  $('#user').on('input', function(key){
    var value = $(this).val();
    $(this).val(value.replace(/ /g, '_'));
  });

    var uname = $('#user');
    var pwd = $('#pass');
    var form = $('#form');

    // get sess
    $('#getsess').click(function() {
      fetch('/sess', {
        method: 'get',
        headers : {
            "Content-type" : "application/json; charset=utf-8"
          }
      })
    })

    // logout
    $('#logout').click(function() {
      fetch('/logout', {
        method: 'post'
      })
    })

    // forgpass func
    $('#forgotPas').click(function() {
      if (uname.val() !== '') {
          // fetch for q/a
          fetch('/log/checkUser', { method: 'post', body: JSON.stringify({ user_name: '@'+uname.val() }), headers : {
            "Content-type" : "application/json; charset=utf-8"
          } } ).then((responce)=>{ return responce.json(); }).then((data)=>{ 
              if (data) {
                  location.replace('/forgot-password');
              }
          });
      }else {
        alert('insert username');
      }
    });
    $('#goIns').click(function() {
      if ($('#insUs').val() !== '') {
        $(uname).val($('#insUs').val());
        $('#f1').css('display', 'none');
        $('#f2, #f3, #f4').slideDown();
      }else {
        alert('Insert username!!');
      }
    });

    // password un-hash
    const unHash = (uname, pwd, tpe) => {
      if (tpe == 'usr') {
        fetch('/log/checkUser', { method: 'post', body: JSON.stringify({ user_name: '@'+uname }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
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
                  Diff(hashed, runner, runner2, user, tpe)
                }
              });
            }
          }
        });
      }
      if (tpe == 'adm') {
        // ehhh3415
        fetch('/adminlogs/genPwd', { method: 'get' }).then((res)=>{
          return res.json();
        }).then((data)=>{
          if (data) {
            var user = pwd;
            var hashed = data.mainp;
            var runner = data.main_hsh;
            var runner2 = data.glob_multi;
            Diff(hashed, runner, runner2, user, tpe)
          }
        });
      }
    };
     // alphabets/nunmber diff
    const Diff = (hashed, runner, runner2, user, tpe) => {
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
      Hasher(hashed, runner, runner2, tst, tpe);
 }; 
 // maths/hasher
 var globPass = '';
 const Hasher = (hashed, runner, runner2, tst, tpe) => {
     var spc = 0;
     var tstr = tst.toString();
     var tster = '';
     var entpwd = document.getElementById('entPwd');
     var verpwd = document.getElementById('verPwd');
     
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
              if (hashed == tster) {
                globPass = tster;
                if (tpe == 'usr') {
                  logUser();
                }
                if (tpe == 'adm') {
                  logADmn();
                }
              } else {
                if (tpe == 'usr') {
                  $('#alertPar').text('Incorrect user combination'); 
                  Alerts();
                }
                if (tpe == 'adm') {
                  fetch('/adminlogs/failedAttm', { method: 'get' }).then((res)=>{
                    return res.json();
                  }).then((data2)=>{
                    if (data2 !== 0) {
                      $('#alertLogpwd').text(`Failed attempt! You have ${data2} more attempts. `);
                      AlertsLogs();
                    }else {
                      $('#alertLogpwd').text(`You have ${data2} more attempts. You cannot log in through this session today.`);
                      AlertsLogs();
                      $('#AdnLogalrt').fadeOut();
                      $('#logAdmn').css('display', 'none');
                      fetch('/adminlogs/cancelAttm', { method: 'get' });
                    };
                  });
                }
              }
              spc = 0;
          }
 };

 /* call alerts syntax
    $('#alertPar').text('Your time has elapsed'); 
    Alerts();
    */
    // alert timer
    const Alerts = () => {
      $('#alertPar').css('display', 'block');
      var targetDate = new Date();
      targetDate.setSeconds(targetDate.getSeconds() + 8);
      var countDownDate = targetDate.getTime();
      var x = setInterval(function() {
          var now = new Date().getTime();
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
          if (distance < 0) {
              $('#alertPar').css('display', 'none');
              clearInterval(x);
          }
      }, 1000);
    };

    // submit form func
    form.submit((e) => {
      e.preventDefault();
      if (uname.val() && pwd.val() !== '') {
        var tpe = 'usr';
        unHash(uname.val(), pwd.val(), tpe);
      }else {
        alert('Incorrct user combination');
      }
    })
    // push password
    const logUser = () => {
      fetch('/login', {
        method: 'post',
        body : JSON.stringify({ user_name : '@'+$(uname).val(), pwd: globPass }),
        headers : {
          "Content-type" : "application/json; charset=utf-8"
        }
      }).then((responce)=>{ return responce.json() }).then((data)=>{
        if (data.user_name) {
          fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } 
          }).then((responce)=>{ return responce.json() }).then((udata)=>{
            location.replace(`/${udata.user_name}`);
          });
        }
        else {
          alert('no such user');
        }
      })
    };

    /**
     * admn logs
     */
    var alertLog = () => {
      return `
      <div class="row">
        <div class="col-md-4 col-xs-12" style="position:fixed; z-index:3; display:none;" id="AdnLogalrt">
          <div style="width: 100%; box-shadow:0px 0px 20px -5px #1a1a1a; border-radius:5px; background-color: white; margin-top: 10px;">
            <p style="text-align:center; margin-top:5px;"> <img src="img/can.png" width="13px" height="13px" style="cursor:pointer;" id="clsAdmnLgs"> </p>
            <hr style="width:95%; margin:7px;">
            <p style="text-align:center; margin:5px;"> <input type="password" id="AdmnLgPwdIn" value="cedi5704" style="width:70%; border:none; border-bottom:solid 1px #f0f0f0; text-align:center;"> </p>
            <p style="color:orangered; font-size:13px; margin:5px; display:none;" id="alertLogpwd"></p>
            <hr style="width:95%; margin:7px;">
            <button style="margin:5px; border-radius:5px;" class="btn btn-default btn-xs" id="AdmnLgSbmt">submit</button>
          </div>
        </div>
      </div>
      `
    };
    // open/clse btns
    $('#fgspan').after(alertLog());
    $('#logAdmn').click(()=>{
      $('#AdnLogalrt').fadeIn();
    });
    $('#clsAdmnLgs').click(()=>{
      $('#AdnLogalrt').fadeOut();
    });
    // check if attempt is available
    fetch('/adminlogs/checkAttm', {}).then((res)=>{
      return res.json();
    }).then((data)=>{
      if (data == 'Yes') {
        $('#logAdmn').css('display', 'inline');
      } else {
        $('#logAdmn').css('display', 'none');
      }
    });
    // submit log
    $('#AdmnLgSbmt').click(()=>{
      if ($('#AdmnLgPwdIn').val() !== '') {
        $('#alertLogpwd').css('display', 'none');
        var user = 'adm'; var tpe = 'adm';
        unHash(user, $('#AdmnLgPwdIn').val(), tpe);
        /*fetch('/adminlogs/genPwd', { method: 'get' }).then((res)=>{
          return res.json();
        }).then((data)=>{
          if ($('#AdmnLgPwdIn').val() == data) {
            fetch('/yesAdmnWrld', { method: 'get' }).then((res)=>{
              return res.json();
            }).then((data3)=>{
              if (data3 == 'Yes') {
                location.replace('/admin-world');
              }
            });
          }else {
            fetch('/adminlogs/failedAttm', { method: 'get' }).then((res)=>{
              return res.json();
            }).then((data2)=>{
              if (data2 !== 0) {
                $('#alertLogpwd').text(`Failed attempt! You have ${data2} more attempts. `);
                AlertsLogs();
              }else {
                $('#alertLogpwd').text(`You have ${data2} more attempts. You cannot log in through this session today.`);
                AlertsLogs();
                $('#AdnLogalrt').fadeOut();
                $('#logAdmn').css('display', 'none');
                fetch('/adminlogs/cancelAttm', { method: 'get' });
              };
            });
          }
        });*/
      }else {
          $('#alertLogpwd').text(`Provide password`);
          AlertsLogs();
      }
    });
    const logADmn = () => {
      fetch('/yesAdmnWrld', { method: 'get' }).then((res)=>{
        return res.json();
      }).then((data3)=>{
        if (data3 == 'Yes') {
          location.replace('/admin-community');
        }
      });
    };
    // admn log alrt session
    const AlertsLogs = () => {
      $('#alertLogpwd').css('display', 'block');
      var targetDate = new Date();
      targetDate.setSeconds(targetDate.getSeconds() + 5);
      var countDownDate = targetDate.getTime();
      var x = setInterval(function() {
          var now = new Date().getTime();
          // Find the distance between now and the count down date/time
          var distance = countDownDate - now;
          if (distance < 0) {
              $('#alertLogpwd').css('display', 'none');
              clearInterval(x);
          }
      }, 1000);
    };

  });
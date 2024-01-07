function Forgot() {
    
    // globe status
    $('#globeStat').text('You have forgotten your password i see... Well, let\'s get you a new one shall we?');
    
    fetch('/log/getQuest', { method: 'get' }).then((responce)=>{
        return responce.json();
    }).then((data)=>{
        $('#quest').text(data);
    });

    // ALL CHECKS
    // check steps for Q/A
    fetch('/log/checkAns', { method: 'get' }).then((responce)=>{
        return responce.json();
    }).then((data)=>{
        if (data == 'true') {
            $('#stepOne').css('display', 'none');
            $('#stepTwo').css('display', 'block');
            // check steps for rando value
            fetch('/log/checkRan', { method: 'get' }).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                if (data == true) {
                    $('#stepTwo').css('display', 'none');
                    $('#stepThr').css('display', 'block');
                    $('#globeStat').text('You have successfully verified your account.');
                    $('#curStatus').attr('src', 'img/locked.png');
                }else {
                    $('#stepThr').css('display', 'none');
                    $('#stepTwo').css('display', 'block');
                    $('#globeStat').text('You have forgotten your password i see... Well, let\'s get you a new one shall we?');
                    $('#curStatus').attr('src', 'img/lock.png');
                }
            });
        }else {
            $('#stepTwo').css('display', 'none');
            $('#stepOne').css('display', 'block');
        }
    });

    // Q/A
    $('#subQst').click(()=>{
        var ans = $('#inAnswer');
        // q/a verification
        fetch('/log/answerVer', { method: 'post', body: JSON.stringify({ answer: ans.val() }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data == 'true') {
                $('#stepOne, #alertPar').css('display', 'none');
                $('#stepTwo').fadeIn();
            }else {
                $('#alertPar').text('The answer is incorrect'); 
                Alerts();
            };
        });
    });

    // send verification code
    var ranSub = false;
    var ranCode = '';
    $('#sendVer, #resendVer').click(()=>{
        // random value
        $('#alertPar').css('display', 'none');
        var ran = Math.random(); var rand = ran.toString(); var random = rand.slice(2,8);
        ranCode = random;
        ranSub = true;
        //css
        var email = ''; var body = '';
        $('#tElapse, #resendVer').css('display', 'none');
        fetch('/log/getGenUser', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((user)=>{
            email = user.email;
            // Set && send the date we're counting down to
            fetch('/mailer/verifyMail', { method: 'post', body: JSON.stringify({ email: email, subject: 'Email verification - Forgot Password' }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                return responce.json();
              }).then((verd)=>{
                if (verd == 'sent') {
                    alert('sent');
                    
                    var targetDate = new Date();
                    var seconds = targetDate.getMinutes();
                    targetDate.setMinutes(targetDate.getMinutes() + 2);
                    var countDownDate = targetDate.getTime();
                    var x = setInterval(function() {
                        $('#sendVer').css('display', 'none');
                        $('#verTimer, #subCode').css('display', 'inline');
            
                        // Get today's date and time
                        var now = new Date().getTime();
            
                        // Find the distance between now and the count down date
                        var distance = countDownDate - now;
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        $('#verTimer').text(`${minutes}:${seconds}`);
                        if (distance < 0) {
                            ranSub = false;
                            $('#sendVer, #verTimer, #subCode').css('display', 'none');
                            $('#tElapse, #resendVer').css('display', 'inline');
                            clearInterval(x);
                        }
                    }, 1000);
    
                }
              })
        });
    });
    // submit code
    $('#subCode').click(()=>{
        if (ranSub == true) {
            var codeIn = $('#codeIn');
            if (codeIn.val() == ranCode) {
                alert('here');
                fetch('/log/ranTrue', { method: 'post', body: JSON.stringify({ value: true }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((responce)=>{
                    return responce.json();
                }).then((data)=>{
                    if (data == true) {
                        location.reload();
                    }
                });
            }else {
                $('#alertPar').text('Incorrect verification code.');
                Alerts();
            }
        }else {
            $('#alertPar').text('Resend code. Your time has elapsed');
            Alerts();
        }
    });

    /* call alerts syntax
    $('#alertPar').text('Your time has elapsed'); 
    Alerts();
    */
    // alert timer
    const Alerts = () => {
        $('#alertPar').css('display', 'block');
        var targetDate = new Date();
        targetDate.setSeconds(targetDate.getSeconds() + 10);
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

    // pd confirmation and push
    $('#passTwo').keyup(function() {
        if ($('#passTwo').val() === $('#passOne').val()) {                    
          $('#passTwo').css('border-bottom', 'solid 1px orange');
          $('#submitPwd').fadeIn();
        } else {
          $('#passTwo').css('border-bottom', 'solid 1px red');
          $('#submitPwd').fadeOut();
        }
    })
    // push
    $('#submitPwd').click(function() {
        var pswd1 = $('#passTwo');
        getHash(password, pswd1.val());
    });

    var password = new Array();

                /* HASHING
                -----------
                */
                // starts
                const getHash = (password, pswd1) => {
                  // hash math value
                  var math = Math.random().toString(); var len = math.length; var slc = math.slice(2, len); var runna = slc * 5; var runner = runna.toString();
                  // hash math value for alphaets
                  var math2 = Math.random().toString(); var len2 = math2.length; var slc2 = math2.slice(2, len2); var runna2 = slc2 * 5; var runner2 = runna2.toString();
                  // extract input and hashed variable
                  Diff(password, runner, runner2, pswd1);
                };
                // alphabets/nunmber diff
                const Diff = (password, runner, runner2, pswd1) => {
                  // var spacer
                      var spc = 0;
                      // all values holder
                      var tst = '';
                      // check each data
                      if (pswd1.length > spc) {
                          for (let i = 0; i < pswd1.length; i++) {
                              // spacer to loop thro
                              spc = spc+1; 
                              // loopn thro check
                              var check = pswd1.slice(spc-1, spc); 
                              // loopn thro runner 2
                              var chckn = runner2.slice(spc-1, spc); 
                              if (isNaN(check)) {
                                  if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                                  if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                                  if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                                  if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn1; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                                  if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                              } else {
                                  tst += check*chckn;
                              }
                          }
                      }
                      Hasher(password, runner, runner2, tst);
                }; 
                // maths/hasher
                const Hasher = (password, runner, runner2, tst) => {
                    var spc = 0;
                    var tstr = tst.toString();
                    var tster = '';
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
                          }
                          spc = 0;
                          password[0] = tster;
                          password[1] = runner;
                          password[2] = runner2;
                          // update pwd
                          updatePwd();
                          // alert(`pwd = ${password[0]},  main hasher = ${password[1]}, global multi = ${password[2]}`);
                };

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

}
Forgot();
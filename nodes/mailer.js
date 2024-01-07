const express = require('express');
const mailer = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

var nodemailer = require('nodemailer');

var emailVer = (body, main) => {
    return `
    <div style="width:90%; margin:auto; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="height:60px; width:100%; border-top-right-radius:10px; border-top-left-radius:10px;">
        <h3 style="padding:10px;"><a href="vyral.com" style="text-decoration:none; white-space:pre;"><img src="cid:vylog.1"" alt="" width="30px" height="30px" style="float:left;"></a> <span style="font-size: 18px; color: darkorange; margin-top:7.5px; margin-left:15px; float:left;"> <i>verfication</i> </span></h3>
      </div>
      <div style="width:100%; background-color:white; border-bottom-right-radius:10px; border-bottom-left-radius:10px;">
        <br>
        ${main}
        <p style="margin:5px; color:#404040; font-size:15px;">To learn more on our security protocols. <a href="google.com" style="color:darkorange; cursor:pointer;">click here</a><p>
        <p style="text-align:center; margin:0px; font-size:30px;">${body}</p>
        <br>
      </div>
      <div style="width:100%; background-color:#f9f9f9; border-radius:10px; border:solid 1px #f0f0f0; margin-top:10px;">
        <br>
        <p style="text-align:center; margin:5px;">
          <a href="vyral.com"><img src="cid:mainLog.1" width="30px" height="30px"></a>
        </p>
        <p style="color:silver; margin:7.5px; font-size:12.5px;  text-align:center;">&copy; vyral. Beam Wares<sup style="font-size:6.5px;">LTD</sup>., Garki, Abuja. <strong>Nigeria</strong></p>
        <br>
      </div>
    </div>
    `
};

var emailWlcm = (body) => {
  return `
  <div style="width:90%; margin:auto; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="height:60px; width:100%; border-top-right-radius:10px; border-top-left-radius:10px;">
      <h3 style="padding:10px;"><a href="vyral.com" style="text-decoration:none; white-space:pre;"><img src="cid:vylog.1"" alt="" width="30px" height="30px" style="float:left;"></a> <span style="font-size: 18px; color: darkorange; margin-top:7.5px; margin-left:15px; float:left;"> <i>welcome</i> </span></h3>
    </div>
    <img src="cid:wlcm.1" width="100%">
      <div style="width:100%; background-color:white; border-bottom-right-radius:10px; border-bottom-left-radius:10px;">
          <br>
          <p style="margin:5px; color: #404040; font-size:15px;">Congratulations! You are now a <span style="color:orange; font-weight: normal;">vyral user</span>!<p>
          <p style="margin:5px; color:#404040; font-size:15px;">Read and share journals and threads of information on our platform.<p>
          <p style="margin:5px; color:#404040; font-size:15px;">You can reach out to us on this email regarding any issue of any sort.<p>
          <p style="text-align:center; margin:0px; font-size:25px;">Thank you!</p>
          <br>
      </div>
      <br>
      <div style="width:100%; background-color:#f9f9f9; border-radius:10px; border:solid 1px #f0f0f0;">
          <br>
          <p style="text-align:center; margin:5px;">
          <a href="vyral.com"><img src="cid:mainLog.1" width="30px" height="30px"></a>
          </p>
          <p style="color:silver; margin:7.5px; font-size:13px;  text-align:center;">This is to certify that ${body.uname} with the the email: ${body.mail} is registered on our platform</p>
          <p style="color:silver; margin:7.5px; font-size:12.5px;  text-align:center;">&copy; vyral. Beam Wares<sup style="font-size:7.5px;">LTD</sup>., Garki, Abuja. <strong>Nigeria</strong></p>
          <br>
      </div>
  </div>
    `
};

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'vyral.mail@gmail.com',
    pass: 'blkw mqeu mznt tgol'
  }
});

// EMAIL VERIFICATION FOR REG/LOG
var globMail = ''; var subject = ''; var body = ''; var glbVC = ''; var attmps = 5; var dontWho = '';
mailer.post('/verifyMail', (req, res)=>{
    const data = req.body;
    var code = Math.random().toString();
    var verCode = code.slice(2, 8);
    console.log(verCode);
    globMail = data.email; subject = data.subject; body = verCode; 
    var mainBod = `<p style="margin:5px; color:grey; font-size:15px;">This is an Email verfication code.<p>
    <p style="margin:5px; color:grey; font-size:15px;">Copy and place within the input provided on our platform.<p>`;
    console.log('email to be verifid: '+globMail+', code: '+body);
    var mailOptions = {
      from: 'vyral.mail@gmail.com',
      to: globMail,
      subject: subject,
      attachments: [{
        filename: 'image.png',
        path: 'resources/img/bw3.png',
        cid: 'mainLog.1'
      },{
        filename: 'image2.png',
        path: 'resources/img/greyL.png',
        cid: 'vylog.1'
      }],
      html: emailVer(body, mainBod)
    };
    send(mailOptions);
    var alrt = 'sent';
    glbVC = verCode;
    res.json(alrt);
});
// verify author by giving a pwd
// EMAIL VERIFICATION FOR REG/LOG
mailer.post('/sendAuthAut', (req, res)=>{
    const data = req.body;
    /*var code = Math.random().toString();
    var verCode = code.slice(2, 8);
    console.log(verCode);*/
    globMail = data.email; subject = data.subject; body = data.pwd;
    var mainBod = `<p style="margin:5px; color:grey; font-size:15px;">Welcome, Author. You are now an authentic author on our platform<p>
    <p style="margin:5px; color:grey; font-size:15px;">Bellow is your generated password. Use it well.<p>`;
    console.log('email to be verifid: '+globMail+', code: '+body);
    var mailOptions = {
      from: 'vyral.mail@gmail.com',
      to: globMail,
      subject: subject,
      attachments: [{
        filename: 'image.png',
        path: 'resources/img/bw3.png',
        cid: 'mainLog.1'
    },{
      filename: 'image2.png',
      path: 'resources/img/greyL.png',
      cid: 'vylog.1'
    }],
      html: emailVer(body, mainBod)
    };
    send(mailOptions);
    console.log('this is your new pwd, blah blah: '+data.pwd);
    var alrt = 'sent';
    glbVC = data.pwd;
    res.json(alrt);
});
// verify admin by giving a pwd
// EMAIL VERIFICATION FOR REG/LOG
mailer.post('/sendAuthAdm', (req, res)=>{
  const data = req.body;
  /*var code = Math.random().toString();
  var verCode = code.slice(2, 8);
  console.log(verCode);*/
  globMail = data.email; subject = data.subject; body = data.pwd;
  var mainBod = `<p style="margin:5px; color:grey; font-size:15px;">Welcome, Administrator. You are now an authentic admin on our platform<p>
  <p style="margin:5px; color:grey; font-size:15px;">Bellow is your generated password. Use it well.<p>`;
  console.log('email to be verifid: '+globMail+', code: '+body);
  var mailOptions = {
    from: 'vyral.mail@gmail.com',
    to: globMail,
    subject: subject,
    attachments: [{
      filename: 'image.png',
      path: 'resources/img/bw3.png',
      cid: 'mainLog.1'
  },{
    filename: 'image2.png',
    path: 'resources/img/greyL.png',
    cid: 'vylog.1'
  }],
    html: emailVer(body, mainBod)
  };
  send(mailOptions);
  console.log('this is your new pwd, blah blah: '+data.pwd);
  var alrt = 'sent';
  glbVC = data.pwd;
  res.json(alrt);
});
// NEW ADMIN LOG_PWD
mailer.post('/sendGLobPwd', (req, res)=>{
  const data = req.body;
  /*var code = Math.random().toString();
  var verCode = code.slice(2, 8);
  console.log(verCode);*/
  globMail = data.email; subject = data.subject; body = data.pwd;
  var mainBod = `<p style="margin:5px; color:grey; font-size:15px;">Bellow is your generated password. Use it well.<p>`;
  console.log('email to be verifid: '+globMail+', code: '+body);
  var mailOptions = {
    from: 'vyral.mail@gmail.com',
    to: globMail,
    subject: subject,
    attachments: [{
      filename: 'image.png',
      path: 'resources/img/bw3.png',
      cid: 'mainLog.1'
  },{
    filename: 'image2.png',
    path: 'resources/img/greyL.png',
    cid: 'vylog.1'
  }],
    html: emailVer(body, mainBod)
  };
  send(mailOptions);
  console.log('this is your new pwd, blah blah: '+data.pwd+', sent to: '+data.email);
  var alrt = 'sent';
  glbVC = data.pwd;
  res.json(alrt);
});
// get vercode
mailer.post('/getVCde', (req, res)=>{
  const data = req.body.code;
  var go = 'no';
  if (data == glbVC) {
    go = 'yes';
  }else {
    go = 'no';
  }
  console.log(go);
  res.json(go);
});
// mobile get code
mailer.get('/mobile_MVC', (req, res)=>{
  console.log('code: '+glbVC);
  res.json(glbVC);
});
// atempts
mailer.get('/checkAttm', (req, res)=>{
  res.json(attmps);
});
mailer.get('/wrongCde', (req, res)=>{
  attmps-=1;
  console.log(attmps);
  res.json(attmps);
});
mailer.post('/dontMail', (req, res)=>{
  const data = req.body.mail;
  dontWho = data;
  //console.log(data);
  twnFour();
  res.json(data);
});
const twnFour = () => {
  var targetDate = new Date();
  //var seconds = targetDate.getMinutes();
  targetDate.setHours(targetDate.getHours() + 24);
  var countDownDate = targetDate.getTime();
  var x = setInterval(function() {
    
          // Get today's date and time
      var now = new Date().getTime();

          // Find the distance between now and the count down date
      var distance = countDownDate - now;

      if (distance < 0) {
        dontWho = '';
        clearInterval(x);
      }
  }, 1000);

};
mailer.get('/dontWho', (req, res)=>{
  //console.log(data);
  res.json(dontWho);
});


// EMAIL VERIFICATION FOR REG/LOG
mailer.post('/welcomeMail', (req, res)=>{
    const data = req.body;
    console.log('email to be welcomed: '+data.mail+', uname: '+data.uname);
    var mailOptions = {
      from: 'vyral.mail@gmail.com',
      to: data.mail,
      subject: 'You are now a registered user on vyral!',
      attachments: [{
          filename: 'image.png',
          path: 'resources/img/bw3.png',
          cid: 'mainLog.1'
        }, {
          filename: 'image3.png',
          path: 'resources/img/wlcm.png',
          cid: 'wlcm.1'
        },{
          filename: 'image2.png',
          path: 'resources/img/greyL.png',
          cid: 'vylog.1'
        }
      ],
      html: emailWlcm(data)
    };
    send(mailOptions);
    var alrt = 'sent';
    res.json(alrt);
});


const send = (mailOptions) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        globMail = ''; subject = ''; body = '';
      }
    });
}

module.exports = mailer;
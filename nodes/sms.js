const express = require('express');
const sms = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '19e7d812',
  apiSecret: 'Bs0Q5fz38zcNxeXx',
});

const from = 'UBA';
const to = '2349066083444';
const text = 'Testing fake sms alert from bangs';

nexmo.message.sendSms(from, to, text);

module.exports = sms;
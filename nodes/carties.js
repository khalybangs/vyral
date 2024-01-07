const express = require('express');
const carts = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

const afric = ['Nigeria', 'Ghana'];

module.exports = carts;
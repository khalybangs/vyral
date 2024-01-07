const express = require('express');
const gateway = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const https = require('https')

gateway.post('/convert', (req, res, next) => {
    const data = req.body;
    var frm = 'NGN';
    if (data.country == 'Nigeria') {
        frm = 'NGN';
    }
    let currencyConverter = new CC({from:frm, to:"USD", amount:data.amount})
    currencyConverter.convert().then((response) => {
        console.log(response) //or do something else
        res.json(response);
    });
            
});

var paystack = require('paystack')('sk_test_e18ed91dbb6d78ea9bef3f3828331ffaf3b004aa');
/*paystack.customer.list()
	.then(function(body) {
  		console.log(body);
	})
	.catch(function(error) {
		console.log(error);
	});*/
var prv_key = 'sk_test_e18ed91dbb6d78ea9bef3f3828331ffaf3b004aa';
var pub_key = 'pk_test_07f01e55b775c804d654a9bf26a59e3ef13941c8';
gateway.get('/pub_k', (req, res) =>{
    res.json(pub_key);
});

//
gateway.post('/pay', (req, res) => {
    const info = req.body;
    console.log("original price: "+info.price);
    const params = JSON.stringify({
        "email": info.mail,
        "amount": info.price*100,
        "items": info.items,
        "name": info.name
    })
      
      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization: 'Bearer sk_test_e18ed91dbb6d78ea9bef3f3828331ffaf3b004aa',
          'Content-Type': 'application/json'
        }
      }
      
      const reqP = https.request(options, resP => {
        let data = ''
      
        resP.on('data', (chunk) => {
          data += chunk
        });
      
        resP.on('end', () => {
          console.log(JSON.parse(data));
          var nowD = JSON.parse(data)
          res.json(nowD.data.authorization_url);
        })
      }).on('error', error => {
        console.error(error)
      })
      
      reqP.write(params)
      reqP.end()
});

gateway.post('/addRec', (req, res) => {
    const rec = req.body;
    db.getDB().collection('transactions').insertOne(rec, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(rec.name + ' < transaction added to \'transactions\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

// converter
/* 
 const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()
 */

// fetch to check user length

module.exports = gateway;
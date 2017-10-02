'use latest';

import bodyParser from 'body-parser';
import express from 'express';
import Webtask from 'webtask-tools';
import plivo from 'plivo';
import jwt from 'jsonwebtoken';

const server = express();

server.use(bodyParser.json());

server.post('/', (req, res, next) => {

  if (!req.headers['authorization']){ return res.status(401).json({ error: 'unauthorized'}); }
  
  let context = req.webtaskContext;
  let token = req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'unauthorized'});
  }

  jwt.verify(token, context.data.GATEWAY_SECRET, function(err, decoded) {
    if (err) return res.status(401).json({ error: 'invalid token...'});

    if (decoded.iss === context.data.ISSUER && decoded.aud === context.data.AUDIENCE) {
      console.log('sending sms...');    
      let sms_provider = plivo.RestAPI({
        authId: context.data.PLIVO_AUTH_ID,
        authToken: context.data.PLIVO_AUTH_TOKEN
      });

      let params = {
        'src': req.body.sender, // Sender's phone number with country code
        'dst' : req.body.recipient, // Receiver's phone Number with country code
        'text' : req.body.body, // Your SMS Text Message - English
      };
      sms_provider.send_message(params, function (status, response) {
          console.log('Status: ', status);
          console.log('API Response:\n', response);
          if (status != 202) return res.status(status).json({ error:"sms_provider_error", error_description: response.error});
          res.status(200).json({messgae: "SMS sent successfully"});
      });
    } else {
      return res.status(401).json({ error: 'invalid issuer / audience'});
    }
  });
});

module.exports = Webtask.fromExpress(server);

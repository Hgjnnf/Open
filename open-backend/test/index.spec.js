const express = require('express');
const request = require('supertest')
require('dotenv').config({path: "./config.env"});
const app = express();

require("./testdb")
const errorHandler = require('../middleware/error');
const conf = require('./config');
const utils = require('./utils');

app.use(express.json());
app.use(errorHandler);
app.use('/api/auth', require('../routes/auth'));
app.use('/profile', require('../routes/profile'));
app.use('/messages', require('../routes/message_routes'));

// Tests to run
describe("GET /messages", () => {
  it("Should receive 1 message", done => {
    const id = utils.createUser(conf.mainUserReg);
    utils.makeMessage(conf.messageTitle, conf.messageContent, id);
    utils.makeFutureMessage(conf.messageTitle, conf.unavailableContent, id);
    utils.makeSilentMessage(conf.messageTitle, conf.unavailableContent);
    request(app)
      .post('/api/auth/login')
      .send(conf.mainUser)
      .end((err, res) => {
        const token = res.body.token;
        request(app)
          .get('/messages')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .expect(function(res) {
            const messages = res.body.message_list;
            if (messages.length > 1) throw new Error('Message not filtered');
            if (messages.length < 1) throw new Error('Message not received');
            if (messages[0].title != conf.messageTitle ||
              messages[0].content != conf.messageContent) throw new Error('Incorrect message');
          })
          .end((err, res) => {
            if (err) return done(err);
            done();
      });
    });
  });
});
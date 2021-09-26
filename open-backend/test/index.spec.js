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
    utils.makeMessage(conf.messageTitle, conf.messageContent, id, null);
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
            utils.clearDB();
            if (err) return done(err);
            done();
      });
    });
  });
});

describe("GET /messages/:id", () => {
  it("Should receive the test message", done => {
    const userId = utils.createUser(conf.mainUserReg);
    const messageId = utils.makeMessage(conf.messageTitle, conf.messageContent, userId, null);
    request(app)
      .post('/api/auth/login')
      .send(conf.mainUser)
      .end((err, res) => {
        const token = res.body.token;
        request(app)
          .get('/messages/' + messageId)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .expect({title: conf.messageTitle, content: conf.messageContent})
          .end((err, res) => {
            utils.clearDB();
            if (err) return done(err);
            done();
          });
      });
  });
});

describe("POST /messages/write", () => {
  it("Should write the test message", done => {
    const mainId = utils.createUser(conf.mainUserReg);
    const id1 = utils.createUser(conf.testUser1);
    const id2 = utils.createUser(conf.testUser2);
    const id3 = utils.createUser(conf.testUser3);
    request(app)
      .post('/api/auth/login')
      .send(conf.mainUser)
      .end((err, res) => {
        const token = res.body.token;
        request(app)
          .post('/messages/write')
          .set('Authorization', 'Bearer ' + token)
          .send({'title': conf.messageTitle, 'content': conf.writtenContent})
          .expect(200)
          .expect(function(res) {
            message = res.body;
            if (message.recipients.length == 0) throw new Error('not enough recipients');
            if (message.recipients.includes(mainId)) throw new Error('send to yourself');
            if (message.available_at <= new Date()) throw new Error('sent too early');
            if (message.title != conf.messageTitle 
              || message.content != conf.writtenContent) throw new Error('wrong message');
          })
          .end((err, res) => {
            utils.clearDB();
            if (err) return done(err);
            done();
          });
      });
  });
});

describe("POST /messages/:id/reply", () => {
  it("Should reply to the test message", done => {
    const mainId = utils.createUser(conf.mainUserReg);
    const id1 = utils.createUser(conf.testUser1);
    const messageId = utils.makeMessage(conf.messageTitle, conf.messageContent, null, id1);
    request(app)
      .post('/api/auth/login')
      .send(conf.mainUser)
      .end((err, res) => {
        const token = res.body.token;
        request(app)
          .post(`/messages/${messageId}/reply`)
          .set('Authorization', 'Bearer ' + token)
          .send({"content": conf.writtenContent})
          .expect(200)
          .expect(function(res) {
            const message = res.body;
            if (message.recipients.length != 1) throw new Error('wrong amount of recipients');
            if (message.recipients[0] != id1) throw new Error('wrong recipient');
            if (message.available_at <= new Date()) throw new Error('sent too early');
            if (message.title != 'Re: ' + conf.messageTitle 
            || message.content != conf.writtenContent) throw new Error('wrong message');
          })
          .end((err, res) => {
            utils.clearDB();
            if (err) return done(err);
            done();
          });
      });
  });
});

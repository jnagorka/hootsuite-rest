var assert = require('assert'),
  _ = require('lodash'),
  hootsuite = require('./helper/connection');

describe('Messages', function () {
  describe('#schedule', function () {
    it('Schedules a message to send on one or more social profiles. Returns an array of uniquely identifiable messages (one per social profile requested)', function (done) {
      hootsuite.messages.schedule({
        text: 'sent now',
        socialProfileIds: ['120732387'],
      }).then(function (response) {
        assert.equal(response.data.length, 1);
        assert.equal(response.data[0].id, '4950332802');
        assert.equal(response.data[0].state, 'SENT');
        assert(_.has(response.data[0], 'text'));
        assert(_.has(response.data[0], 'sequenceNumber'));
        done();
      }).catch(done);
    });
    it('Schedules a message to send on one or more social profiles. Returns an array of uniquely identifiable messages (one per social profile requested)', function (done) {
      hootsuite.messages.schedule({
        text: 'sent in future',
        socialProfileIds: ['120732387'],
        scheduledSendTime: '2020-01-01',
      }).then(function (response) {
        assert.equal(response.data.length, 1);
        assert.equal(response.data[0].id, '4950336487');
        assert.equal(response.data[0].state, 'SCHEDULED');
        assert(_.has(response.data[0], 'text'));
        assert(_.has(response.data[0], 'sequenceNumber'));
        done();
      }).catch(done);
    });
  });
  describe('#find', function () {
    it('Retrieve outbound messages', function (done) {
      hootsuite.messages.find('2017-12-01', '2017-12-15').then(function (response) {
        assert.equal(response.data.length, 1);
        assert.equal(response.data[0].id, '4950332802');
        assert.equal(response.data[0].state, 'SENT');
        assert(_.has(response.data[0], 'text'));
        assert(_.has(response.data[0], 'sequenceNumber'));
        done();
      }).catch(done);
    });
  });
  describe('#findById', function () {
    it('Retrieves a message. A message is always associated with a single social profile. Messages might be unavailable for a brief time during upload to social networks', function (done) {
      hootsuite.messages.findById('4950332802').then(function (response) {
        assert.equal(response.data.length, 1);
        assert.equal(response.data[0].id, '4950332802');
        assert.equal(response.data[0].state, 'SENT');
        assert(_.has(response.data[0], 'text'));
        assert(_.has(response.data[0], 'sequenceNumber'));
        done();
      }).catch(done);
    });
  });
  describe('#deleteById', function () {
    it('Deletes a message. A message is always associated with a single social profile', function (done) {
      hootsuite.messages.deleteById('1234').then(function (response) {
        console.log(response);
        // assert.equal(response.result.length, 1);
        // assert.equal(response.result[0].id, 1001);
        // assert(_.has(response.result[0], 'name'));
        // assert(_.has(response.result[0], 'workspaceName'));
        done();
      }).catch(done);
    });
  });
  describe('#approveById', function () {
    it('Approve a message', function (done) {
      hootsuite.messages.approveById('4950332802').then(function (response) {
        console.log(response);
        // assert.equal(response.result.length, 1);
        // assert.equal(response.result[0].id, 1001);
        // assert(_.has(response.result[0], 'name'));
        // assert(_.has(response.result[0], 'workspaceName'));
        done();
      }).catch(done);
    });
  });
  describe('#rejectById', function () {
    it('Reject a message', function (done) {
      hootsuite.messages.rejectById('4950332802', 'reason').then(function (response) {
        console.log(response);
        // assert.equal(response.result.length, 1);
        // assert.equal(response.result[0].id, 1001);
        // assert(_.has(response.result[0], 'name'));
        // assert(_.has(response.result[0], 'workspaceName'));
        done();
      }).catch(done);
    });
  });
  describe('#findByIdHistory', function () {
    it('Gets a message’s prescreening review history', function (done) {
      hootsuite.messages.findByIdHistory('4950332802').then(function (response) {
        console.log('3', response);
        // assert.equal(response.result.length, 1);
        // assert.equal(response.result[0].id, 1001);
        // assert(_.has(response.result[0], 'name'));
        // assert(_.has(response.result[0], 'workspaceName'));
        done();
      }).catch(done);
    });
  });
});

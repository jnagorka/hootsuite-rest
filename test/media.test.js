var assert = require('assert'),
  _ = require('lodash'),
  hootsuite = require('./helper/connection');

describe('Media', function () {
  describe('#createUrl', function () {
    it('Create media upload url', function (done) {
      hootsuite.media.createUrl(50000).then(function (response) {
        assert(_.has(response.data, 'id'));
        assert(_.has(response.data, 'uploadUrl'));
        done();
      }).catch(done);
    });
  });
  describe('#statusById', function () {
    it('Retrieves the status of a media upload to Hootsuite', function (done) {
      hootsuite.media.statusById('aHR0cHM6Ly9ob290c3VpdGUtdmlkZW8uczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLzE2NDk0ODc5X2E2Yzg4YzY0LTIwYmEtNGE0My05NDlmLTI5N2EzMmM2MDlmMi5tcDQ=').then(function (response) {
        assert.equal(response.data.id, 'aHR0cHM6Ly9ob290c3VpdGUtdmlkZW8uczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLzE2NDk0ODc5X2E2Yzg4YzY0LTIwYmEtNGE0My05NDlmLTI5N2EzMmM2MDlmMi5tcDQ=');
        assert(_.has(response.data, 'state'));
        assert(_.has(response.data, 'downloadUrl'));
        done();
      }).catch(done);
    });
  });
});

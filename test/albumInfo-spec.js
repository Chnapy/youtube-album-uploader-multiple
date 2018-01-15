var chai = require('chai');var expect = chai.expect;var path = require('path');var albumInfo = require('../src/albumInfo');describe('albumInfo', function () {    describe('on success', function () {        var results;        beforeEach(function (done) {            this.timeout(50000);            albumInfo('test/album1/anchor.mp3', 'test/anchor.jpg')                .then(function (data) {                    if (data) {                        results = data;                    }                    // console.log('SUCCESS', data);                    done();                })                .catch(function (err) {                    // console.error('ERROR', err);                    done();                })        });        it('temp', function() {        });        it('should get album info object', function () {        	expect(results).to.have.property('artist', 'Less Than Jake');        	expect(results).to.have.property('album', 'Short Music for Short People');        	expect(results).to.have.property('albumArt', path.join('test', 'anchor.jpg'));        	expect(results).to.have.property('tracks');        	expect(results.tracks).to.have.length(1);        	expect(results.tracks[0]).to.have.property('title', 'Anchor');        	expect(results.tracks[0]).to.have.property('path', path.join('test', 'album1', 'anchor.mp3'));        	expect(results.tracks[0]).to.have.property('trackNumber', 2);        	expect(results.tracks[0]).to.have.property('duration', 29.764);        	// expect(results.tracks[1]).to.have.property('title', 'All My Friends Are in Popular');        	// expect(results.tracks[1]).to.have.property('path', path.join('test', 'popular.mp3'));        	// expect(results.tracks[1]).to.have.property('trackNumber', 56);        	// expect(results.tracks[1]).to.have.property('duration', 30.844);        });    });    // describe('on success without album art', function() {    // 	var results, error;    // 	beforeEach(function(done) {    // 		this.timeout(50000);    // 		albumInfo('test/album', function(err, data) {    // 			results = data;    // 			error = err;    // 			done();    // 		});    // 	});    //    // 	it('should get album info object', function () {    // 		expect(results).to.have.property('artist', 'Less Than Jake');    // 		expect(results).to.have.property('album', 'Short Music for Short People');    // 		expect(results).to.have.property('albumArt', path.resolve('src', 'default.jpg'));    // 		expect(results).to.have.property('tracks');    // 		expect(results.tracks).to.have.length(1);    //    // 		expect(results.tracks[0]).to.have.property('title', 'Anchor');    // 		expect(results.tracks[0]).to.have.property('path', path.join('test', 'album', 'anchor.mp3'));    // 		expect(results.tracks[0]).to.have.property('trackNumber', 2);    // 		expect(results.tracks[0]).to.have.property('duration', 29.764);    // 	});    // });    //    // describe('on error', function() {    // 	var results, error;    // 	beforeEach(function(done) {    // 		this.timeout(50000);    // 		albumInfo('test/ss', function(err, data) {    // 			results = data;    // 			error = err;    // 			done();    // 		});    // 	});    //    // 	it('should throw error', function () {    // 		expect(results).to.be.null;    // 		expect(error).to.not.be.null;    // 	});    // });});
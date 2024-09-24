const server = require('../app');
var expect  = require("chai").expect;
var request = require("request");

// Landing page testing
describe("Landing Page Loading Properly", function() {
    var blankUrl = "http://localhost:3000/";
    it("page working properly", function(done) {
        request(blankUrl, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // it("page should return 'Hello, world!'", function(done) {
    //     request(blankUrl, function(error, response, body) {
    //         const jsonBody = JSON.parse(body);
    //         expect(jsonBody.result).to.equal('Hello, World!');
    //         done();
    //     });
    // });

    var statusUrl = "http://localhost:3000/status";
    it("should return service status", function(done) {
        request(statusUrl, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            const jsonBody = JSON.parse(body);
            expect(jsonBody.status).to.equal('ok');
            done();
        });
    });

    var sumUrl = "http://localhost:3000/add?a=5&b=3";
    it("should return sum of 2 numbers", function(done) {
        request(sumUrl, function(error, response, body) {
            const jsonBody = JSON.parse(body); // Parse the JSON body
            expect(jsonBody.result).to.equal(8); 
            done();
        });
    });

    after(function(done) {
        server.close(() => {
            console.log('Server closed');
            done();
        });
    });

});

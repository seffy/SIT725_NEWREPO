var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function() {
    var url = "http://localhost:8080/addTwoNumbers/3/5";

    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("returns statusCode key in body to check if api gives right result should be 200", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });

    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.be.a('number');
            done();
        });
    });

    it("returns the result equal to 8", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.equal(8);
            done();
        });
    });

    it("returns the result not equal to 15", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.not.equal(15);
            done();
        });
    });
});

describe("Add Two Strings", function() {
    var url = "http://localhost:8080/addTwoNumbers/a/b";

    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(400);
            done();
        });
    });

    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.be.null; // Corrected this line
            done();
        });
    });
});
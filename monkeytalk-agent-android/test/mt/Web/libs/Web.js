/***** DO NOT EDIT THIS FILE *****/
// Web.js generated by MonkeyTalk at 2012-07-17 19:03:31 PDT

load("libs/MonkeyTalkAPI.js");


var Web = {};

/*** script -- gmail ***/
Web.gmail = function(app) {
	MT.Script.call(this, app, "gmail.mt");
};

Web.gmail.prototype = new MT.Script;

Web.gmail.prototype.call = function() {
	//run: gmail.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.gmail = function() {
	return new Web.gmail(this);
};

/*** script -- linkes ***/
Web.linkes = function(app) {
	MT.Script.call(this, app, "linkes.mt");
};

Web.linkes.prototype = new MT.Script;

Web.linkes.prototype.call = function() {
	//run: linkes.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.linkes = function() {
	return new Web.linkes(this);
};

/*** script -- testPage ***/
Web.testPage = function(app) {
	MT.Script.call(this, app, "testPage.mt");
};

Web.testPage.prototype = new MT.Script;

Web.testPage.prototype.call = function() {
	//run: testPage.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.testPage = function() {
	return new Web.testPage(this);
};

/*** script -- various ***/
Web.various = function(app) {
	MT.Script.call(this, app, "various.mt");
};

Web.various.prototype = new MT.Script;

Web.various.prototype.call = function() {
	//run: various.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.various = function() {
	return new Web.various(this);
};


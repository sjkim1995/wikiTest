var expect = require("chai").expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var Sequalize = require('sequelize')
var model = require("./../models/")
var Page = model.Page

describe('Page model', function () {

  describe('Virtuals', function () {
    var page;
    beforeEach(function(){
		page = Page.build({
			title: "some_title"
		})
	})
    describe('route', function () {
	it('returns the url_name prepended by "/wiki/"', function(){
		// page.urlTitle
		var chain = page['$modelOptions'].getterMethods;
		expect(chain.route()).to.equal("/wiki/" + page.dataValues.urlTitle)
		expect(chain.route()).to.not.equal(page.dataValues.urlTitle);

	});
    	
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});


// describe("Pages", function() {
// 	describe("the model is set up correctly", function(){
// 		it("the model exists on the SQL server");
	
// 	});

// 	describe("the model has the right kinds of columns", function(){
// 		it("has a title column with the right type");
// 		it("has a url column with the right type");
// 		it("has a content column with the right type")
// 		it("has a status column with the right type");
// 		it("has a date column with the right type");
// 		it("has a tags column with the right type");
// 	});

// 	describe("columns that do not allow null values", function(){

// 	});

// 	describe("columns that have default values",function(){

// 	});

// 	describe("the getter method returns the right URI route", function(){

// 	});


// })
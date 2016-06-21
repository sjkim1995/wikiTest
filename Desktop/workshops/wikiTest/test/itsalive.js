// // var mocha = require("mocha");
// var expect = require("chai").expect;


// // describe("Test function", function() {
// // 	var x = null;

// // 	it("should wait for the right amount of time", function(done){
// // 		setTimeout(function() {
// // 			x = 10;
// // 			done();
// // 		}, 1000)

// // 	});

// // 	// it('confirms setTimeout\'s timer accuracy', function (done) {
// // 	//   var start = new Date();
// // 	//   setTimeout(function () {
// // 	//     var duration = new Date() - start;
// // 	//     expect(duration).to.be.closeTo(1000, 50);
// // 	//     done();
// // 	//   }, 1000);
// // 	// });

// // 	it("should add correctly", function () {
// // 	expect(x).to.equal(10);
// // 	expect(2+2).to.equal(4);
// // 	})

// // })

// var chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);



// describe("Test suit", function() {
// 	function print (el) {
// 	console.log(el)
// 	}
// 	print = chai.spy(print)
// 	var testArr = [1,2,3]
// 	testArr.forEach(function(el){
// 		print(el);
// 	})

	
// 	it("should call the correct number of times", function() {
// 		expect(print).to.have.been.called.exactly(3);
// 	})
// })

// // describe("Test suit", function() {
// // 	var testArr = [1,2,3];
// // 	function print (el) {
// // 		console.log(el)
// // 	}
// // 	print = chai.spy(print)
// // 	testArr.forEach(print);

// // 	it("should call the correct number of times", function() {
// // 		expect(print).to.have.been.called.exactly(3);
// // 	})
// // })

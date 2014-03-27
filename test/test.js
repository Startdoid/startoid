/*
 * basic test
 * */
var chai	= require('chai');
var assert	= chai.assert;

var should	= chai.should();
var expect	= chai.expect;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('должна возвращать -1 когда значение отсутсвует', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

/*test expect*/
describe('Array', function(){
	describe('#indexOf()', function(){
		it('ожидается 3', function(){
			expect(2).to.equal(3);
		})
	})
});

/*test should*/
describe('Array', function(){
	describe('#indexOf()', function(){
		it('ожидается 3', function(){
			expect(2).to.equal(3);
		})
	})
});
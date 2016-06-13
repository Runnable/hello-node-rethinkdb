'use strict'
var expect = require('chai').expect

describe('Stuff', function () {
  it('should do stuff', function () {
    expect(1).to.equal(1)
  })

  if (process.env.FAIL) {
    it('should do stuff and fail', function () {
      expect(1).to.equal(5)
    })
  }
})


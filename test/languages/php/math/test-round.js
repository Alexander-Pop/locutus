// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var round = require('../../../../src/php/math/round.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/round.js (tested in test/languages/php/math/test-round.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1242000
    var result = round(1241757, -3)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 4
    var result = round(3.6)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 2.84
    var result = round(2.835, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 1.17
    var result = round(1.1749999999999, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 58551.8
    var result = round(58551.799999999996, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})

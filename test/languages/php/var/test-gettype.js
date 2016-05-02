// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var gettype = require('../../../../src/php/var/gettype.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/gettype.js (tested in test/languages/php/var/test-gettype.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'integer'
    var result = gettype(1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'undefined'
    var result = gettype(undefined)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'object'
    var result = gettype({0: 'Kevin van Zonneveld'})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 'string'
    var result = gettype('foo')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 'object'
    var result = gettype({0: function () {return false;}})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 'object'
    var result = gettype({0: 'test', length: 1, splice: function () {}})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = 'array'
    var result = gettype(['test'])
    expect(result).to.deep.equal(expected)
    done()
  })
})

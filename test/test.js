var expect = require('chai').expect;
var obfuscate = require('./obfsucate');

describe('obfuscate', function(){
  it('should be a string', function(){
    expect(obfuscate("test","Test")).to.be.a('string');
  });
  it('should obfuscate', function(){
    expect(obfuscate("arneg-u-14357","sj05zzt")).to.equal("ATRZNZE5G0-JUS1");
  })
});

// import freqAlphabets from './freqAlphabets.js/index.js';
expect = require('chai').expect
should = require('chai').should()
const freqAlphabets = require('./freqAlphabets')

var assert = require('assert');

describe('#freqAlphabets()', () =>
{
  it('Empty String Input', () => {
    expect(freqAlphabets('')).to.equal('')
  }),

  it('Example 1', () => {
    expect(freqAlphabets('10#11#12')).to.equal('jkab')
  }),
  it('Example 2', () => {
    expect(freqAlphabets('1326#')).to.equal('acz')
  }),
  it('Example 3', () => {
    expect(freqAlphabets('25#')).to.equal('y')
  }),
  it('Full Alphabet', () => {
    expect(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')).to.equal('abcdefghijklmnopqrstuvwxyz')
  })
})


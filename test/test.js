/* eslint-disable no-undef */
/* eslint-disable func-names */
const assert = require('assert');
const { Lol, Tft, Lor } = require('..');

describe('Riotgames-gg', function () {
  const apikey = process.env.riot_apikey;
  if (!apikey) {
    throw new Error('missing apikey');
  }
  const lol = new Lol({ apikey });
  const tft = new Tft({ apikey });
  const lor = new Lor({ apikey });
  describe('lol.Summoner.summonerByName(name)', function () {
    it('should return summoner', function () {
      return lol.Summoner.summonerByName('giuttony').then((data) => {
        assert.ok(data);
        assert.equal(data.profileIconId, 4777);
      });
    });
  });
  describe('tft.League.challenger()', function () {
    it('should return tft challengers', function () {
      return tft.League.challenger().then((data) => {
        assert.ok(data);
      });
    });
  });
  describe('lor.Ranked.leaderboards()', function () {
    it('should return tft leaderboards', function () {
      return lor.Ranked.leaderboards().then((data) => {
        assert.ok(data);
      });
    });
  });
});

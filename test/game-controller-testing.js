'use strict';

describe('testing GameComtroller', function() {

  beforeEach(() =>{
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameComtroller');
    });
  });
  beforeEach(() => {
    this.gameCtrl.player = {
      name:'Jack',
      location: 'roomA',
    };
  });
  it('the player should change location', () => {
    expect(this.gameCtrl.player.location).toBe('')
  })
});

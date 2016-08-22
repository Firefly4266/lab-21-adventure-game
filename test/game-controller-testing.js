'use strict';

describe('testing GameComtroller', function() {

  beforeEach(() =>{
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameComtroller');
    });
  });
  beforeEach(() => {
    this.gameCtrl.history = [];
    this.gameCtrl.player = {
      name:'Johnny',
      location: 'roomC',
    };
  });
  it('the player should change locations', () => {
    this.gameCtrl.moveDirection('east');
    expect(this.gameCtrl.player.location).toBe('roomD');
  });
});

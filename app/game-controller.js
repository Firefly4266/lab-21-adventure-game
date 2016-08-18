'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameComtroller', ['$log', GameController])

function GameComtroller($log) {

  this.history = ['You are on a gooy adventure'];

this.directions = ['north', 'south', 'east', 'west'];

  this.player = {
    name: 'Jack',
    location: 'roomA',
  };

  this.map = require('../lib/map.js');

  this.moveDirection = function(direction) {
    if (this.map[this.player.location]){
      $log.debug('gameCtrl.moveDirection');
      let currentLocation = this.map[this.player.location];
      let nextRoom = currentLocation[direction];
      if (nextRoom !== 'wall') this.player.location = nextRoom;

        if(nextRoom !=='wall')
    };
  };

  this.logHistory = function(info) {
    this.history.push({id: this .history.length, text: `${this.player.name}, ${info}`)
  };
};

<div ng-controller="GameComtroller as gameCtrl">

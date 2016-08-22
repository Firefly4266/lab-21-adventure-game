'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp');

require('./game-controller')

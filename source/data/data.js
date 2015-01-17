/**
	For simple applications, you might define all of your models, collections,
	and sources in this file.  For more complex applications, you might choose to separate
	these kind definitions into multiple files under this folder.
*/

var speedA = [ "slow", "fast" ];
var speedB = [ "slow", "slow", "fast" ];
var speedC = [ "slow", "fast", "fast" ];

var section1 = new enyo.Collection
(
   [{
      "special" : false,
      "moves" : [ 10, 10, 6 ],
      "speed" : speedC 
   },
   {
      "special" : false,
      "speed" : speedB, 
      "moves" : [ 10, 10, 12, 33, 14 ]
   },
   {
      "special" : true,
      "specialChance" : 3,
      "specialMove" : 31, 
      "speed" : speedB, 
      "moves" : [ 10, 12, 6, 14 ]
   }]
);

var section2 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 10, 4, 4, 9, 33 ]
   },
   {
      "special" : false,
      "speed" : speedB, 
      "moves" : [ 12, 9, 9, 33 ]
   },
   {
      "special" : true,
      "speed" : speedB, 
      "specialChance" : 3,
      "specialMove" : 25, 
      "moves" : [ 12, 9, 9, 4, 33]
   }]
);

var section3 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 4, 4, 9, 24 ]
   },
   {
      "special" : false,
      "speed" : speedA, 
      "moves" : [ 4, 9, 24 ]
   },
   {
      "special" : false, 
      "speed" : speedB, 
      "moves" : [ 4, 9, 9, 2 ]
   }]
);

var section4 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 3, 4, 9, 24 ] 
   },
   {
      "special" : false,
      "speed" : speedA, 
      "moves" : [ 20, 4, 9, 24 ]
   },
   {
      "special" : true,
      "speed" : speedA, 
      "moves" : [ 4, 9, 2 ]
   }]
);

var section5 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 22, 9, 24 ] 
   },
   {
      "speed" : speedA, 
      "special" : true,
      "specialChance" : 3,
      "specialMove" : 30, 
      "moves" : [ 22, 4, 9, 24 ] 
   },
   {
      "special" : true,
      "speed" : speedC, 
      "specialChance" : 3,
      "specialMove" : 30, 
      "moves" : [ 21, 9, 24 ]
   }]
);

var section6 = new enyo.Collection
(
   [{
      "special" : true,
      "speed" : speedA, 
      "specialChance" : 3,
      "specialMove" : 29, 
      "moves" : [ 22, 4, 9, 24 ] 
   },
   {
      "speed" : speedC, 
      "special" : true,
      "specialChance" : 2,
      "specialMove" : 28, 
      "moves" : [ 22, 21, 9, 24 ] 
   },
   {
      "special" : true,
      "speed" : speedC, 
      "specialChance" : 2,
      "specialMove" : 28, 
      "moves" : [ 22, 4, 24 ]
   }]
);

var section7 = new enyo.Collection
(
   [{
      "special" : true,
      "speed" : speedA, 
      "specialChance" : 3,
      "specialMove" : 26, 
      "moves" : [ 22, 20, 8, 23 ] 
   },
   {
      "speed" : speedC, 
      "special" : true,
      "specialChance" : 2,
      "specialMove" : 28, 
      "moves" : [ 22, 20, 8, 23 ] 
   },
   {
      "special" : true,
      "speed" : speedC, 
      "specialChance" : 2,
      "specialMove" : 28, 
      "moves" : [ 22, 3, 23 ]
   }]
);

var section8 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 22, 8, 23 ] 
   },
   {
      "speed" : speedA, 
      "special" : true,
      "specialChance" : 3,
      "specialMove" : 31, 
      "moves" : [ 7, 20, 8, 23 ] 
   },
   {
      "special" : true,
      "speed" : speedC, 
      "specialChance" : 3,
      "specialMove" : 31, 
      "moves" : [ 20, 8, 23 ]
   }]
);

var section9 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 21, 3, 3, 8, 23 ] 
   },
   {
      "speed" : speedA, 
      "special" : true,
      "specialChance" : 3,
      "specialMove" : 31, 
      "moves" : [ 7, 20, 8, 23 ] 
   },
   {
      "special" : true,
      "speed" : speedA, 
      "specialChance" : 3,
      "specialMove" : 31, 
      "moves" : [ 20, 8, 23 ] 
   }]
);

var section10 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 3, 3, 8, 23 ] 
   },
   {
      "speed" : speedA, 
      "special" : false,
      "moves" : [ 3, 8, 23 ] 
   },
   {
      "special" : false,
      "speed" : speedB, 
      "moves" : [ 3, 8, 8, 1 ] 
   }]
);

var section11 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 10, 3, 3, 8, 33 ] 
   },
   {
      "speed" : speedB, 
      "special" : false,
      "moves" : [ 12, 8, 8, 33 ] 
   },
   {
      "special" : true,
      "speed" : speedB, 
      "specialChance" : 3,
      "specialMove" : 27, 
      "moves" : [ 12, 8, 8, 3, 32 ] 
   }]
);

var section12 = new enyo.Collection
(
   [{
      "special" : false,
      "speed" : speedC, 
      "moves" : [ 10, 10, 5 ]
   },
   {
      "speed" : speedB, 
      "special" : false,
      "moves" : [ 10, 10, 12, 32, 13 ] 
   },
   {
      "special" : true,
      "speed" : speedB, 
      "specialChance" : 2,
      "specialMove" : 31, 
      "moves" : [ 10, 12, 5, 13 ]
   }]
);

var ww2Chart = new enyo.Collection([
   {
      section: section1
   },
   {
      section: section2
   },
   {
      section: section3
   },
   {
      section: section4
   },
   {
      section: section5
   },
   {
      section: section6
   },
   {
      section: section7
   },
   {
      section: section8
   },
   {
      section: section9
   },
   {
      section: section10
   },
   {
      section: section11
   },
   {
      section: section12
   }
]);

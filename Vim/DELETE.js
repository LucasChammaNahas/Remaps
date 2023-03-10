function a() {
   function b() {
      const obj = {
         a: 1,
         b: 2,
         c: 3,
      };
   }
   function c() {
      const obj = {
         a: 1,
         b: 2,
         c: 3,
      };
   }
   function d() {
      const obj = {
         a: 1,
         b: 2,
         c: 3,
      };
   }
   function e() {
      const obj = {
         a: 1,
         b: 2,
         c: 3,
      };
   }

   function f () {
      const obj = {
         a: 1,
         b: 2,
         c: 3,
      };
   }
   return 'pato';
}






/** ***
 * 
 * 1 copy a WORD and paste it at start, middle, and end, including repetitions
 * 
 * 1.1 start (P, gP)
 * p  -> X***xx
 * P  -> ***Xxx
 * gp -> X***xx
 * gP -> ***Xxx
 * 
 * 1.2 middle (all)
 * p  -> xX***x
 * P  -> x***Xx
 * gp -> xX***x
 * gP -> x***Xx
 * 
 * 1.3 end (p, gp)
 * p  -> xxX***
 * P  -> xx***X
 * gp -> xxX***
 * gP -> xx***X
 * 
 * 1.4 repetition (p, gp, gP)
 * p  -> |a()a()a()
 * P  -> a(a(a()))|
 * gp -> |a()a()a()
 * gP -> a()a()a()|
 * 
 * --------------------------------------------------------------------------------
 * 
 * 2 copy a LINE and paste it below and above
 * 
 * 2.1 below
 * p  ->
 * P  ->
 * gp ->
 * gP ->
 * 
 * 
 * 2.2 above
 * p  ->
 * P  ->
 * gp ->
 * gP ->
 * 
 * 
 * 2.3 inline -> same as 1.4
 * --------------------------------------------------------------------------------
 * 
 * 3 copy a BLOCK and paste it below below and above, allowing repetitions
 * 3.1 below
 * 3.2 above
 * --------------------------------------------------------------------------------
 * 
 * 
 * 
 * 
 *
 * 
 * p  ->
 * P  ->
 * gp ->
 * gP ->
 * 
 * 
 * 
 * 
 */



























































































/**
 * p - a
 * P - i
 * g - cursor after text
 */

/** 1
 * visual select a word or the whole line (GATO)
 * setup: bat|a|ta
 * 
 * expected: 
 * p  -> bat|a|GATOta
 * P  -> bat|G|ATOata
 * gp -> bataGAT|O|ta
 * gP -> batGAT|O|ata
 * 
 * Result:
 * p  -> bataGAT|O|ta
 * P  -> batGAT|O|ata
 * gp -> bataGATO|t|a
 * gP -> batGATO|a|ta
*/ 

function gato() {
   loglogloglg
   lolologgg
   logloglog
   logloglogloglogloglog
}

/** 2
 * block select a line or a block (GATO)
 * setup: bat|a|ta
 * 
 * Result:



p
batata
|f|unction gato() {
   log
}


P
|f|unction gato() {
   log
}
batata


gp
batata
function gato() {
   log
}
||


gP
function gato() {
   log
}
|b|atata



pp
function gato() {
|f|unction gato() {
   log
}
   log
}



PP
|f|unction gato() {
   log
}
function gato() {
   log
}




gp gp
function gato() {
   log
}

function gato() {
   log
}
||



gP gP
function gato() {
   log
}
function gato() {
   log
}
||







 * 
 */ 





PP
aaaaaaaaaaaaaaaaaaaaaaaa
function gato() {
   log
}
function gato() {
   log
}
lololologggg
bbbbbbbbbbbbbbbbbbbbbbbb
cccccccccccccccccccccccc
dddddddddddddddddddddddd


gp
aaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbb
function gato() {
   log
}
cccccccccccccccccccccccc
function gato() {
   log
}
loglogloglog
dddddddddddddddddddddddd


gP
aaaaaaaaaaaaaaaaaaaaaaaa
function gato() {
   log
}
function gato() {
   log
}
lologloglogg
bbbbbbbbbbbbbbbbbbbbbbbb
cccccccccccccccccccccccc
dddddddddddddddddddddddd









aaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbb
function gato() {
   log
}
cccccccccccccccccccccccc
function gato() {
   log
}
dddddddddddddddddddddddd






















































































































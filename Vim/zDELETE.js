
arrows in find mode













/*
   block: gP
      P --> paste above, cursor above
      gP -> paste above, cursor below

   visual block normal: gp
      p --> paste above, cursor above
      P --> paste below, cursor above (doesn't work in sequence)
      gp -> paste above, cursor below
   
   visual block inverted: nope... 

   visual line: p, gP
      gp -> doesn't work
   
   visual word: p/gp & gP
      p  -> |a()a()a()
      P  -> a(a(a()))| (doesn't work)
      gp -> |a()a()a()
      gP -> a()a()a()|
      

   p  -> 
   P  -> X
   gp -> X
   gP -> 

   f => gP
   F => P
   p => p
   P => gp

*/

az gzagza,,<<a()

a()a()|
a(
a()xa()

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
   function eeeeeeeeeeee() {
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



xXWORDx


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
 * 
 * 
 * 
 * 2 copy a LINE and paste it below and above
 * 
 * p  -> below
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 * asdf
 * asdf
 * |sdf
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * 
 * P  -> above
 * ................................
 * ................................
 * ................................
 * ................................
 * |sdf
 * asdf
 * asdf
 * aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * 
 * gp -> below
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 * asdf
 * ................................
 * asdf
 * ................................
 * asdf
 * |...............................
 * ................................
 * 
 * 
 * 
 * gP -> above
 * ................................
 * ................................
 * ................................
 * ................................
 * asdf
 * asdf
 * asdf
 * |aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * --------------------------------------------------------------------------------
 * 
 * 
 * 
 * 
 * 3 copy a BLOCK and paste it below below and above, allowing repetitions
 * 3.1 visual copy
 * 
 * 
 * p  -> paste below, cursor top, WORKS!
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaa|X|
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };aaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * P  -> nope...
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaa|
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };a
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };a
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };Xaaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * gp -> paste below, cursor down, WORKS!
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaaX
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };a
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };a
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };|aaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * gP -> paste below, cursor down, WORKS!
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaa
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };|X|aaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * 
 * 
 * 
 * 3.2 block copy
 * 
 * p  -> nope...
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaa
 * const obj = {
 * const obj = {
 * |onst obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * P  -> paste above, cursor above, works...
 * ................................
 * ................................
 * ................................
 * ................................
 * |onst obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * aaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
 * 
 * gp -> nope...
 * ................................
 * ................................
 * ................................
 * ................................
 * aaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaa
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * ................................
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * ................................
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * |...............................
 * ................................
 * 
 * 
 * gP -> paste above, cursor below, works
 * ................................
 * ................................
 * ................................
 * ................................
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * |aaaaaaaaaaaaaXaaaaaaaaaaaaaaaaa
 * ................................
 * ................................
 * ................................
 * ................................
 * 
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
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 * };
 * 
 * 
 * 
 */






function b() {
   const obj = {
      a: 1,
      b: 2,
      c: 3,
   };
}
function zb() {
   const asdfobj = {
      a: 1,
      b: 2,
      c: 3,
   };
}



function zb() {
   const asdfobj = {
      a: 1,
      b: 2,
      c: 3,
   };
}
































































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
dddddddddddddddddd









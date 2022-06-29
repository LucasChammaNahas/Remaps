
#If $symbolsController = 1 && !GetKeyState("CapsLock", "P")

  ;==> MAJOR KEYS <====================================================
  ;--> SPACE <---------------------------
  <!Space::  Send    {Space}                      ;Alt L
  >!Space::  SendRaw _                            ;Alt R
  <^>!Space::SendRaw _                            ;AltGr
  <+Space::  SendRaw -                            ;Shift L
  >+Space::  Send    {Space}-{Space}              ;Shift R
  >^Space::  Send    console.log('--> ', ){Left}  ;Ctrl R
  #!Space::  Send    ^/                           ;Win + Alt



  ;==> LEFT HAND <=====================================================
  
  ;-->> Q <------------------------------
     !q:: SendRaw # ;Alt
  <^>!q:: SendRaw # ;AltGr

  ;--> W <-------------------------------
    <!w:: SendRaw <                   ;Alt L
    >!w:: Send    {Space}{<}`={Space} ;Alt R
  <^>!w:: Send    {Space}{<}`={Space} ;AltGr
  <!>!w:: Send    {Space}*{Space}     ;Alt 2
    ; <^w:: Send    (() => );{Left 7}   ;Ctrl L

  ;--> E <-------------------------------
    <!e:: SendRaw `=                 ;Alt L
    >!e:: Send    {Space}`={Space}   ;Alt R
  <^>!e:: Send    {Space}`={Space}   ;AltGr
  <!>!e:: Send    {Space}/{Space}    ;Alt 2
    ; >^e:: Send    {Space}`==={Space} ;Ctrl R

  ;--> R <-------------------------------
    <!r:: SendRaw |                ;Alt L
    >!r:: Send    {Space}||{Space} ;Alt R
  <^>!r:: Send    {Space}||{Space} ;AltGr
    ; <^r:: SendRaw : [              ;Ctrl L

  ;--> T <-------------------------------
     !t:: SendRaw ~           ;Alt
  <^>!t:: SendRaw ~           ;AltGr
    ; <^t:: Send    if (){Left} ;Ctrl L

  ;--> A <-------------------------------
     !a:: SendRaw @   ;Alt
  <^>!a:: SendRaw @   ;AltGr
  <!>!a:: SendRaw 1   ;Alt 2
    ; <^a:: SendRaw : ' ;Ctrl L

  ;--> S <-------------------------------
     !s:: SendRaw (                     ;Alt
  <^>!s:: SendRaw (                     ;AltGr
  <!>!s:: SendRaw 2                     ;Alt 2
    ; >^s:: Send    const  `= '';{Left 6} ;Ctrl R

  ;--> D <-------------------------------
     !d:: SendRaw {                         ;Alt
  <^>!d:: SendRaw {                         ;AltGr
  <!>!d:: SendRaw 3                         ;Alt 2
    ; >^d:: Send    const  `= {{}{}};{Left 6} ;Ctrl R

  ;--> F <-------------------------------
     !f:: SendRaw [                     ;Alt
  <^>!f:: SendRaw [                     ;AltGr
  <!>!f:: SendRaw 4                     ;Alt 2
    ; >^f:: Send    const  `= [];{Left 6} ;Ctrl R

  ;--> G <-------------------------------
     !g:: Send    {End}`; ;Alt
  <^>!g:: Send    {End}`; ;AltGr
  <!>!g:: SendRaw 5       ;Alt 2

  ;--> Z <-------------------------------
     !z:: SendRaw !                         ;Alt
  <^>!z:: SendRaw !                         ;AltGr
    ; >^z:: Send    const  `={Space};{Left 4} ;Ctrl R
    
  ;--> X <-------------------------------
     !x:: SendRaw _                     ;Alt
  <^>!x:: SendRaw _                     ;AltGr

  ;--> C <-------------------------------
    <!c:: SendRaw +                                 ;Alt L
    >!c:: Send    {Space}{+}{Space}                 ;Alt R
  <^>!c:: Send    {Space}{+}{Space}                 ;AltGr
  <!>!c:: Send    {Space}{+}{Space}                 ;Alt 2
    ; >^c:: Send    const {{}  {}} `={Space};{Left 6} ;Ctrl R

  ;--> V <-------------------------------
    <!v:: SendRaw -                    ;Alt L
    >!v:: Send    {Space}-{Space}      ;Alt R
  <^>!v:: Send    {Space}-{Space}      ;AltGr
  <!>!v:: Send    {Space}-{Space}      ;Alt 2
    ; >^v:: Send    {Space}{!}`=={Space} ;Ctrl R

  ;--> B <-------------------------------
    <!b:: SendRaw `%               ;Alt L
    >!b:: Send    {Space}`%{Space} ;Alt R
  <^>!b:: Send    {Space}`%{Space} ;AltGr
  <!>!b:: Send    {Space}`%{Space} ;Alt 2



  ;==> RIGHT HAND <====================================================
  
  ;--> 9 <-------------------------------
     !9:: SendRaw ``  ;Alt
  <^>!9:: SendRaw ``  ;AltGr
    ; <^9:: SendRaw `={ ;Ctrl L
    
  ;--> 0 <-------------------------------
     !0:: SendRaw $                 ;Alt
  <^>!0:: SendRaw $                 ;AltGr
    ; >^0:: Send    ${{}  {}}{Left 2} ;Ctrl R

  ;--> Y <-------------------------------
     !y:: SendRaw ^            ;Alt
  <^>!y:: SendRaw ^            ;AltGr
    ; <^y:: Send    < />{Left 3} ;Ctrl L

  ;--> U <-------------------------------
    <!u:: SendRaw &                       ;Alt L
    >!u:: Send    {Space}&&{Space}        ;Alt R
  <^>!u:: Send    {Space}&&{Space}        ;AltGr
    ; <^u:: Send    (() => {{}{}});{Left 3} ;Ctrl L

  ;--> I <-------------------------------
    <!i:: SendRaw `=                 ;Alt L
    >!i:: Send    {Space}`=>{Space}  ;Alt R
  <^>!i:: Send    {Space}`=>{Space}  ;AltGr
  <!>!i:: Send    {Space}`={Space}   ;Alt 2
    ; <^i:: Send    () => {{}{}}{Left} ;Ctrl L

  ;--> O <-------------------------------
    <!o:: SendRaw >                   ;Alt L
    >!o:: Send    {Space}{>}`={Space} ;Alt R
  <^>!o:: Send    {Space}{>}`={Space} ;AltGr
    ; <^o:: Send    () =>{Space}        ;Ctrl L

  ;--> P <-------------------------------
     !p:: SendRaw $                 ;Alt
  <^>!p:: SendRaw $                 ;AltGr
    ; >^p:: Send    ${{}  {}}{Left 2} ;Ctrl R

  ;--> H <-------------------------------
    <!h:: SendRaw :                                          ;Alt L
    >!h:: Send    :{Space}                                   ;Alt R
  <^>!h:: Send    :{Space}                                   ;AltGr
  <!>!h:: SendRaw 6                                          ;Alt 2
    ; <^h:: Send    if () {{}{}}{Left}{Enter}{Up}{End}{Left 3} ;Ctrl L

  ;--> J <-------------------------------
     !j:: SendRaw ]                 ;Alt
  <^>!j:: SendRaw ]                 ;AltGr
  <!>!j:: SendRaw 7                 ;Alt 2
    ; >^j:: Send    ([]){Left 2}      ;Ctrl R

  ;--> K <-------------------------------
     !k:: SendRaw }                 ;Alt
  <^>!k:: SendRaw }                 ;AltGr
  <!>!k:: SendRaw 8                 ;Alt 2
    ; >^k:: Send    ({{}{}}){Left 2}  ;Ctrl R

  ;--> L <-------------------------------
     !l:: SendRaw )            ;Alt
  <^>!l:: SendRaw )            ;AltGr
  <!>!l:: SendRaw 9            ;Alt 2
    ; >^l:: Send    (''){Left 2} ;Ctrl R

  ;--> ; <-------------------------------
     !`;:: SendRaw ' ;Alt
  <^>!`;:: SendRaw ' ;AltGr
  <!>!`;:: SendRaw 0 ;Alt 2
    ; <^`;:: SendRaw : {     ;Ctrl L

  ;--> N <-------------------------------
    <!n:: SendRaw /                           ;Alt L
    >!n:: Send    {Space}/{Space}             ;Alt R
  <^>!n:: Send    {Space}/{Space}             ;AltGr
    ; >^n:: Send    const [] `={Space};{Left 5} ;Ctrl R

  ;--> M <-------------------------------
    <!m:: SendRaw *               ;Alt L
    >!m:: Send    {Space}*{Space} ;Alt R
  <^>!m:: Send    {Space}*{Space} ;AltGr
  <!>!m:: Send   `;{Space}        ;Alt 2

  ;--> , <-------------------------------
     !,:: SendRaw `, ;Alt
  <^>!,:: SendRaw `, ;AltGr
  <!>!,:: SendRaw `, ;Alt 2

  ;--> . <-------------------------------
     !.:: SendRaw "        ;Alt
  <^>!.:: SendRaw "        ;AltGr
  <!>!.:: Send    .{Space} ;Alt 2
    ; <^.:: SendRaw `="      ;Ctrl L

  ;--> / <-------------------------------
     !/:: SendRaw \ ;Alt
  <^>!/:: SendRaw \ ;AltGr

#If

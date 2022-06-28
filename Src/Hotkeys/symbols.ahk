
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
     !q:: SendRaw $                 ;Alt
  <^>!q:: SendRaw $                 ;AltGr
    >^q:: Send    ${{}  {}}{Left 2} ;Ctrl R

  ;--> W <-------------------------------
     !w:: SendRaw {                         ;Alt
  <^>!w:: SendRaw {                         ;AltGr
    >^w:: Send    const  `= {{}{}};{Left 6} ;Ctrl R

  ;--> E <-------------------------------
     !e:: SendRaw }                 ;Alt
  <^>!e:: SendRaw }                 ;AltGr
  <!>!e:: Send    {Space}{+}{Space} ;Alt 2
    >^e:: Send    ({{}{}}){Left 2}  ;Ctrl R

  ;--> R <-------------------------------
    <!r:: SendRaw +                                 ;Alt L
    >!r:: Send    {Space}{+}{Space}                 ;Alt R
  <^>!r:: Send    {Space}{+}{Space}                 ;AltGr
    >^r:: Send    const {{}  {}} `={Space};{Left 6} ;Ctrl R

  ;--> T <-------------------------------
     !t:: SendRaw ~           ;Alt
  <^>!t:: SendRaw ~           ;AltGr
    <^t:: Send    if (){Left} ;Ctrl L

  ;--> A <-------------------------------
     !a:: SendRaw @                         ;Alt
  <^>!a:: SendRaw @                         ;AltGr
  <!>!a:: SendRaw 1                         ;Alt 2
    >^a:: Send    const  `={Space};{Left 4} ;Ctrl R

  ;--> S <-------------------------------
     !s:: SendRaw (                     ;Alt
  <^>!s:: SendRaw (                     ;AltGr
  <!>!s:: SendRaw 2                     ;Alt 2
    >^s:: Send    const  `= '';{Left 6} ;Ctrl R

  ;--> D <-------------------------------
     !d:: SendRaw )            ;Alt
  <^>!d:: SendRaw )            ;AltGr
  <!>!d:: SendRaw 3            ;Alt 2
    >^d:: Send    (''){Left 2} ;Ctrl R

  ;--> F <-------------------------------
    <!f:: SendRaw `=                 ;Alt L
    >!f:: Send    {Space}`={Space}   ;Alt R
  <^>!f:: Send    {Space}`={Space}   ;AltGr
  <!>!f:: SendRaw 4                  ;Alt 2
    >^f:: Send    {Space}`==={Space} ;Ctrl R

  ;--> G <-------------------------------
     !g:: SendRaw !                 ;Alt
  <^>!g:: Send    {Space}{!}{Space} ;AltGr
  <!>!g:: SendRaw 5                 ;Alt 2

  ;--> Z <-------------------------------
     !z:: SendRaw # ;Alt
  <^>!z:: SendRaw # ;AltGr
    
  ;--> X <-------------------------------
     !x:: SendRaw [                     ;Alt
  <^>!x:: SendRaw [                     ;AltGr
  <!>!x:: Send    {Space}{+}{Space}     ;Alt 2
    >^x:: Send    const  `= [];{Left 6} ;Ctrl R

  ;--> C <-------------------------------
     !c:: SendRaw ]                 ;Alt
  <^>!c:: SendRaw ]                 ;AltGr
    >^c:: Send    ([]){Left 2}      ;Ctrl R

  ;--> V <-------------------------------
    <!v:: SendRaw /                           ;Alt L
    >!v:: Send    {Space}/{Space}             ;Alt R
  <^>!v:: Send    {Space}/{Space}             ;AltGr
  <!>!v:: Send    {Space}/{Space}             ;Alt 2
    >^v:: Send    const [] `={Space};{Left 5} ;Ctrl R

  ;--> B <-------------------------------
    <!b:: SendRaw *               ;Alt L
    >!b:: Send    {Space}*{Space} ;Alt R
  <^>!b:: Send    {Space}*{Space} ;AltGr
  <!>!b:: Send    {Space}*{Space} ;Alt 2



  ;==> RIGHT HAND <====================================================
  ;--> Y <-------------------------------
    <!y:: SendRaw &                       ;Alt L
    >!y:: Send    {Space}&&{Space}        ;Alt R
  <^>!y:: Send    {Space}&&{Space}        ;AltGr
    <^y:: Send    (() => {{}{}});{Left 3} ;Ctrl L

  ;--> U <-------------------------------
    <!u:: SendRaw <                   ;Alt L
    >!u:: Send    {Space}{<}`={Space} ;Alt R
  <^>!u:: Send    {Space}{<}`={Space} ;AltGr
    <^u:: Send    (() => );{Left 7}   ;Ctrl L

  ;--> I <-------------------------------
    <!i:: SendRaw `=                 ;Alt L
    >!i:: Send    {Space}`=>{Space}  ;Alt R
  <^>!i:: Send    {Space}`=>{Space}  ;AltGr
  <!>!i:: Send    {Space}`={Space}   ;Alt 2
    <^i:: Send    () => {{}{}}{Left} ;Ctrl L

  ;--> O <-------------------------------
    <!o:: SendRaw >                   ;Alt L
    >!o:: Send    {Space}{>}`={Space} ;Alt R
  <^>!o:: Send    {Space}{>}`={Space} ;AltGr
    <^o:: Send    () =>{Space}        ;Ctrl L

  ;--> P <-------------------------------
    <!p:: SendRaw `%               ;Alt L
    >!p:: Send    {Space}`%{Space} ;Alt R
  <^>!p:: Send    {Space}`%{Space} ;AltGr
  <!>!p:: Send    {Space}`%{Space}    ;Alt 2

  ;--> H <-------------------------------
    <!h:: SendRaw |                ;Alt L
    >!h:: Send    {Space}||{Space} ;Alt R
  <^>!h:: Send    {Space}||{Space} ;AltGr
  <!>!h:: SendRaw 6                ;Alt 2
    <^h:: SendRaw : [              ;Ctrl L

  ;--> J <-------------------------------
     !j:: SendRaw "   ;Alt
  <^>!j:: SendRaw "   ;AltGr
  <!>!j:: SendRaw 7   ;Alt 2
    <^j:: SendRaw : { ;Ctrl L

  ;--> K <-------------------------------
     !k:: SendRaw '   ;Alt
  <^>!k:: SendRaw '   ;AltGr
  <!>!k:: SendRaw 8   ;Alt 2
    <^k:: SendRaw : ' ;Ctrl L

  ;--> L <-------------------------------
     !l:: SendRaw ``  ;Alt
  <^>!l:: SendRaw ``  ;AltGr
  <!>!l:: SendRaw 9   ;Alt 2
    <^l:: SendRaw `={ ;Ctrl L

  ;--> ; <-------------------------------
     !`;:: Send    {End}`; ;Alt
  <^>!`;:: Send    {End}`; ;AltGr
  <!>!`;:: SendRaw 0       ;Alt 2
    <^`;:: SendRaw `="     ;Ctrl L

  ;--> N <-------------------------------
    <!n:: SendRaw -                    ;Alt L
    >!n:: Send    {Space}-{Space}      ;Alt R
  <^>!n:: Send    {Space}-{Space}      ;AltGr
  <!>!n:: Send    {Space}-{Space}      ;Alt 2
    >^n:: Send    {Space}{!}`=={Space} ;Ctrl R

  ;--> M <-------------------------------
    <!m:: SendRaw :                                          ;Alt L
    >!m:: Send    :{Space}                                   ;Alt R
  <^>!m:: Send    :{Space}                                   ;AltGr
  <!>!m:: Send   `;{Space}                                   ;Alt 2
    <^m:: Send    if () {{}{}}{Left}{Enter}{Up}{End}{Left 3} ;Ctrl L

  ;--> , <-------------------------------
     !,:: Send      {End},                           ;Alt
  <^>!,:: Send      {End},                           ;AltGr
  <!>!,:: SendRaw  `,                                ;Alt 2
    <^,:: Send    +^{Left}^c{Del}{<}^v{>}{<}/^v{>}^{Left}{Left 2} ;Ctrl L

  ;--> . <-------------------------------
     !.:: SendRaw ^            ;Alt
  <^>!.:: SendRaw ^            ;AltGr
  <!>!.:: SendRaw .            ;Alt 2
    <^.:: Send    < />{Left 3} ;Ctrl L

  ;--> / <-------------------------------
     !/:: SendRaw \ ;Alt
  <^>!/:: SendRaw \ ;AltGr

#If

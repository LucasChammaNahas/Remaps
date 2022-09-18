
#If $symbolsController = 1 && !GetKeyState("CapsLock", "P")

  ;==> MAJOR KEYS <====================================================

  ;--> DEFAULT <-------------------------
  !Enter::     Send {Enter}
  !Backspace:: Send {Backspace}

  ;--> SPACE <---------------------------
  <!Space::  Send    {Space}                      ;Alt L
  >!Space::  Send    {Space}                      ;Alt R
  <^>!Space::Send    {Space}                      ;AltGr
  <+Space::  Send    {Space}                      ;Shift L
  >+Space::  SendRaw _                            ;Shift R
  >^Space::  Send    console.log('--> ', ){Left}  ;Ctrl R
  #!Space::  Send    ^/                           ;Win + Alt



  ;==> LEFT HAND <=====================================================
  
  ;-->> Q <------------------------------
    <!q:: SendRaw # ;Alt L
    >!q:: return    ;Alt R
  <^>!q:: return    ;AltGr

  ;--> W <-------------------------------
    <!w:: SendRaw | ;Alt L
    >!w:: SendRaw 7 ;Alt R
  <^>!w:: SendRaw 7 ;AltGr

  ;--> E <-------------------------------
    <!e:: SendRaw { ;Alt L
    >!e:: SendRaw 8 ;Alt R
  <^>!e:: SendRaw 8 ;AltGr

  ;--> R <-------------------------------
    <!r:: SendRaw } ;Alt L
    >!r:: SendRaw 9 ;Alt R
  <^>!r:: SendRaw 9 ;AltGr

  ;--> T <-------------------------------
    <!t:: SendRaw ~ ;Alt L
    >!t:: return    ;Alt R
  <^>!t:: return    ;AltGr

  ;--> A <-------------------------------
    <!a:: SendRaw @ ;Alt L
    >!a:: SendRaw 0 ;Alt R
  <^>!a:: SendRaw 0 ;AltGr

  ;--> S <-------------------------------
    <!s:: SendRaw ( ;Alt L
    >!s:: SendRaw 4 ;Alt R
  <^>!s:: SendRaw 4 ;AltGr

  ;--> D <-------------------------------
    <!d:: SendRaw ) ;Alt L
    >!d:: SendRaw 5 ;Alt R
  <^>!d:: SendRaw 5 ;AltGr

  ;--> F <-------------------------------
    <!f:: Send    {End}`; ;Alt L
    >!f:: SendRaw 6       ;Alt R
  <^>!f:: SendRaw 6       ;AltGr

  ;--> G <-------------------------------
    <!g:: SendRaw : ;Alt L
    >!g:: return    ;Alt R
  <^>!g:: return    ;AltGr

  ;--> Z <-------------------------------
    <!z:: return ;Alt L
    >!z:: return ;Alt R
  <^>!z:: return ;AltGr
    
  ;--> X <-------------------------------
    <!x:: SendRaw * ;Alt L
    >!x:: SendRaw 1 ;Alt R
  <^>!x:: SendRaw 1 ;AltGr

  ;--> C <-------------------------------
    <!c:: SendRaw + ;Alt L
    >!c:: SendRaw 2 ;Alt R
  <^>!c:: SendRaw 2 ;AltGr

  ;--> V <-------------------------------
    <!v:: SendRaw _ ;Alt L
    >!v:: SendRaw 3 ;Alt R
  <^>!v:: SendRaw 3 ;AltGr

  ;--> B <-------------------------------
    <!b:: SendRaw ^ ;Alt L
    >!b:: return    ;Alt R
  <^>!b:: return    ;AltGr



  ;==> RIGHT HAND <====================================================
  
  ;--> 9 <-------------------------------
    <!9:: SendRaw $ ;Alt L
    >!9:: SendRaw $ ;Alt R
  <^>!9:: SendRaw $ ;AltGr
    
  ;--> 0 <-------------------------------
    <!0:: SendRaw $ ;Alt L
    >!0:: SendRaw $ ;Alt R
  <^>!0:: SendRaw $ ;AltGr

  ;--> Y <-------------------------------
    <!y:: SendRaw & ;Alt L
    >!y:: return    ;Alt R
  <^>!y:: return    ;AltGr

  ;--> U <-------------------------------
    <!u:: SendRaw < ;Alt L
    >!u:: SendRaw < ;Alt R
  <^>!u:: SendRaw < ;AltGr

  ;--> I <-------------------------------
    <!i:: SendRaw `= ;Alt L
    >!i:: SendRaw `= ;Alt R
  <^>!i:: SendRaw `= ;AltGr

  ;--> O <-------------------------------
    <!o:: SendRaw > ;Alt L
    >!o:: SendRaw > ;Alt R
  <^>!o:: SendRaw > ;AltGr

  ;--> P <-------------------------------
    <!p:: SendRaw ! ;Alt L
    >!p:: return    ;Alt R
  <^>!p:: return    ;AltGr

  ;--> H <-------------------------------
    <!h:: SendRaw `` ;Alt L
    >!h:: SendRaw `% ;Alt R
  <^>!h:: SendRaw `% ;AltGr

  ;--> J <-------------------------------
    <!j:: SendRaw ' ;Alt L
    >!j:: SendRaw + ;Alt R
  <^>!j:: SendRaw + ;AltGr

  ;--> K <-------------------------------
    <!k:: SendRaw [ ;Alt L
    >!k:: SendRaw - ;Alt R
  <^>!k:: SendRaw - ;AltGr

  ;--> L <-------------------------------
    <!l:: SendRaw ] ;Alt L
    >!l:: SendRaw * ;Alt R
  <^>!l:: SendRaw * ;AltGr

  ;--> ; <-------------------------------
    <!`;:: SendRaw " ;Alt L
    >!`;:: SendRaw / ;Alt R
  <^>!`;:: SendRaw / ;AltGr

  ;--> N <-------------------------------
    <!n:: SendRaw - ;Alt L
    >!n:: return    ;Alt R
  <^>!n:: return    ;AltGr

  ;--> M <-------------------------------
    <!m:: SendRaw `% ;Alt L
    >!m:: return     ;Alt R
  <^>!m:: return     ;AltGr

  ;--> , <-------------------------------
    <!,:: SendRaw `, ;Alt L
    >!,:: SendRaw `, ;Alt R
  <^>!,:: SendRaw `, ;AltGr

  ;--> . <-------------------------------
    <!.:: SendRaw . ;Alt L
    >!.:: SendRaw . ;Alt R
  <^>!.:: SendRaw . ;AltGr

  ;--> / <-------------------------------
    <!/:: SendRaw \ ;Alt L
    >!/:: return    ;Alt R
  <^>!/:: return    ;AltGr

#If

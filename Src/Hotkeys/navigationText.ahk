
#If $navTextController = 1 && GetKeyState("CapsLock", "P")

  ; Space forward, enter downwards and esc 
  *~Space:: Send {Left}
  *~Enter:: Send {Left}
  *9::      Send {Esc}

  ; Copy paste etc
  a::    Send ^a
  t::    Send ^z
  g::    Send  {WheelUp}
  b::    Send  {WheelDown} 
  Up::   Send  {WheelUp}
  Down:: Send  {WheelDown} 
  
  ; Copy paste etc (shift)
  >!a:: Send ^a
  >!t:: Send ^z 
  >!g:: Send +{WheelUp}
  >!b:: Send +{WheelDown} 
  
  ; Copy paste etc. with select all
  <!e:: Send ^a^x
  <!d:: Send ^a^c
  <!f:: Send ^a^v
  <!v:: ^y

  ; Normal arrows
  i:: Send {Up}
  k:: Send {Down}
  j:: Send {Left}
  l:: Send {Right}

  ; Arrows with shift
  >!i:: Send +{Up}
  >!k:: Send +{Down}
  >!j:: Send +{Left}
  >!l:: Send +{Right}

  ; Move arrows fast
  <!j:: Send ^{Left}
  <!l:: Send ^{Right}

  ; Move linhe up/down
  <!i:: Send !{Up}
  <!k:: Send !{Down}

  ; Copy line up/down
  <!>!i:: Send +!{Up}
  <!>!k:: Send +!{Down}

  ; Copy cursor up/down
  <!>!u:: Send ^!{Up}
  <!>!j:: Send ^!{Down}

  ; Select word
  y:: Send ^{Left}+^{Right}

  ; Delete, backspace, home, end
  h:: Send  {Home}
 `;:: Send  {End}
  m:: Send  {Backspace}
  n:: Send ^{Backspace}
  u:: Send  {Del}
  o:: Send ^{Del}
  
  ; Delete, backspace, home, end with shift
  >!h::  Send +{Home}
  >!`;:: Send +{End}
  >!m::  Send  {Backspace}
  >!n::  Send  {Backspace}
  >!u::  Send  {Del}
  >!o::  Send  {Del}

  ; Delete rest/begining of line
  <!n:: Send +{Home}{Del}
  <!o:: Send +{End}{Del}

#If


  ;--> CapsLock <------------------------
  wasCapslockReleased := 0 ; Solves rapid repetition when caps is held down
  previousCapslockTimestamp := A_TickCount
  *CapsLock Up::wasCapslockReleased := 1
  *CapsLock::
    currentTimestamp := A_TickCount
    interval := currentTimestamp - previousCapslockTimestamp
    if(interval < 300 and wasCapslockReleased = 1) {
      SetCapsLockState % !GetKeyState("CapsLock", "T")
    }
    wasCapslockReleased := 0
    previousCapslockTimestamp := currentTimestamp
  return
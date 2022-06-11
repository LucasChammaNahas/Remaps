
;--> Navigation <----------------------
#If GetKeyState("CapsLock", "P")
  ~Space:: Left

  a:: ^a
  s:: ^a
  e:: ^x
  d:: ^c
  f:: ^v
  v:: ^z 
  
  !e:: Send ^a^x
  !d:: Send ^a^c
  !f:: Send ^a^v
  !v:: ^y

  i:: Up
  k:: Down
  j:: Left
  l:: Right

  >!i:: Send +!{Up}
  >!k:: Send +!{Down}
  >!j:: Send ^!{Down}
  >!l:: Send ^!{Up}

  <!i:: Up
  <!k:: Down
  <!j:: Left
  <!l:: Right

  y::  Send ^{Left} +^{Right}
  h::  Home
 `;::  End
  m::  Backspace
  n:: ^Backspace
  u::  Del
  o:: ^Del
  
  >!h::  +Home
  >!`;:: +End
  >!m::   Backspace
  >!n::   Backspace
  >!u::   Del
  >!o::   Del

  <!n:: Send +{Home} {Del}
  <!o:: Send +{End} {Del}
#If


;--> CapsLock <------------------------
; If you hold capslock down, it repeats rapidly. 
; wasCapslockReleased logic solves this
wasCapslockReleased := 0
previousTimestamp := A_TickCount

CapsLock Up::wasCapslockReleased := 1

CapsLock::
  currentTimestamp := A_TickCount
  interval := currentTimestamp - previousTimestamp
  if(interval < 300 and wasCapslockReleased = 1) {
    SetCapsLockState % !GetKeyState("CapsLock", "T")
  }
  wasCapslockReleased := 0
  previousTimestamp := currentTimestamp
return


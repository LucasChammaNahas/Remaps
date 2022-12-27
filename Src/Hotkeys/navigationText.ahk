
#If $navTextController = 1 && GetKeyState("CapsLock", "P")

  ; Space forward, enter downwards and esc 
  *Space:: Send {Space}{Left}
  *Enter:: Send {End}{Enter}
  *q::     Send {Esc}

  ; Copy paste etc
  a::     Send ^a
  t::     Send ^z
  g::     Send  {WheelUp}
  b::     Send  {WheelDown} 
  Up::    Send  {WheelUp}
  Down::  Send  {WheelDown} 
  Left::  Send +{WheelUp}
  Right:: Send +{WheelDown} 
  
  ; Copy paste etc (shift)
  >!a:: Send ^a
  >!t:: Send ^z 
  >!g:: Send +{WheelUp}
  >!b:: Send +{WheelDown} 
  
  ; Copy paste etc. with select all
  <!e:: Send ^a^x
  <!d:: Send ^a^c
  <!f:: Send ^a^v
  <!t:: Send ^y

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

  ; Copy linhe up/down
  <!u:: Send +!{Up}
  <!j:: Send +!{Down}

  ; Move linhe up/down
  <!i:: Send !{Up}
  <!k:: Send !{Down}

  ; Cursor up/down
  <!o:: Send ^!{Up}
  <!l:: Send ^!{Down}

  ; Select word
  y:: Send ^{Left}+^{Right}

  ; Delete, backspace, home, end
  h::         Send  {Home}
 `;::         Send  {End}
  u::         Send  {Backspace}
  n::         Send ^{Backspace}
  o::         Send  {Del}
  p::         Send ^{Del}
  Delete::    Send +{End}{Backspace}
  Backspace:: Send +{Home}{Backspace}
  
  ; Delete, backspace, home, end with shift
  >!h::  Send +{Home}
  >!`;:: Send +{End}
  >!u::  Send  {Backspace}
  >!n::  Send ^{Backspace}
  >!o::  Send  {Del}
  >!p::  Send ^{Del}

#If
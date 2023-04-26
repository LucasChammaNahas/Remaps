
#If $navTextController = 1 && GetKeyState("CapsLock", "P")

  ; Space forward, enter downwards and esc 
  *Space:: Send {Ctrl Up}{Space}{Left}

  ;Scroll
  Up::    Send  {Ctrl Up}{WheelUp}
  Down::  Send  {Ctrl Up}{WheelDown} 
  Left::  Send +{Ctrl Up}{WheelUp}
  Right:: Send +{Ctrl Up}{WheelDown} 
  
  ; Normal arrows
  i:: Send {Ctrl Up}{Up}
  k:: Send {Ctrl Up}{Down}
  j:: Send {Ctrl Up}{Left}
  l:: Send {Ctrl Up}{Right}

  ; Delete, backspace, home, end
  h::         Send {Ctrl Up}{Home}
 `;::         Send {Ctrl Up}{End}
  u::         Send {Ctrl Up}{Backspace}
  n::         Send {Ctrl Down}{Backspace}
  o::         Send {Ctrl Up}{Del}
  Delete::    Send {Ctrl Up}+{End}{Backspace}
  Backspace:: Send {Ctrl Up}+{Home}{Backspace}
  
#If
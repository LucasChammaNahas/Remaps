
#If $navTextController = 1 && GetKeyState("CapsLock", "P")

  ; Space forward, enter downwards and esc 
  *Space:: Send {Ctrl Up}{Space}{Left}

  ;Scroll
  Up::    Send  {Ctrl Up}{WheelUp}{Ctrl Down}
  Down::  Send  {Ctrl Up}{WheelDown} {Ctrl Down}
  Left::  Send +{Ctrl Up}{WheelUp}{Ctrl Down}
  Right:: Send +{Ctrl Up}{WheelDown} {Ctrl Down}
  
  ; Normal arrows
  i:: Send {Ctrl Up}{Up}{Ctrl Down}
  k:: Send {Ctrl Up}{Down}{Ctrl Down}
  j:: Send {Ctrl Up}{Left}{Ctrl Down}
  l:: Send {Ctrl Up}{Right}{Ctrl Down}

  ; Delete, backspace, home, end
  h::         Send {Ctrl Up}{Home}{Ctrl Down}
 `;::         Send {Ctrl Up}{End}{Ctrl Down}
  u::         Send {Ctrl Up}{Backspace}{Ctrl Down}
  n::         Send {Ctrl Down}{Backspace}
  o::         Send {Ctrl Up}{Del}{Ctrl Down}
  Delete::    Send {Ctrl Up}+{End}{Backspace}{Ctrl Down}
  Backspace:: Send {Ctrl Up}+{Home}{Backspace}{Ctrl Down}
  
#If
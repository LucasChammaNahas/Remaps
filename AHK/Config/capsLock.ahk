isCapslockDown := false ; Solves rapid repetition when caps is held down
capsLockDownTimestamp := A_TickCount


+CapsLock::CapsLock

*CapsLock::
  if(!isCapslockDown) {
    capslockDownTimestamp := A_TickCount
  }
  isCapslockDown := true
  Send {Ctrl Down}
return

*CapsLock Up::
  capslockUpTimestamp := A_TickCount
  interval := capslockUpTimestamp - capslockDownTimestamp
  if(A_PriorKey = "CapsLock" && interval < 300) {
    Send {Ctrl Up}{Esc}
  }
  isCapslockDown := false
  Send {Ctrl Up}
return

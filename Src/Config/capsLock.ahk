  isCapslockDown := 0 ; Solves rapid repetition when caps is held down
  capsLockDownTimestamp := A_TickCount

  *CapsLock Up::
    currentTimestamp := A_TickCount
    interval := currentTimestamp - capsLockDownTimestamp
    if(interval < 300) {
      Send {Escape}
    }
    isCapslockDown := 0
  return
  
  *CapsLock::
    if(isCapslockDown = 0) {
      capsLockDownTimestamp := A_TickCount
    }
    isCapslockDown := 1
  return
    
  +CapsLock::CapsLock



  
  ; lastCapslockDownTimestamp := A_TickCount
  ; *CapsLock::
  ;   currentTimestamp := A_TickCount
  ;   interval := currentTimestamp - lastCapslockDownTimestamp
  ;   if(interval < 300 and isCapslockDown = 0) {
  ;     SetCapsLockState % !GetKeyState("CapsLock", "T")
  ;   }
  ;   lastCapslockDownTimestamp := currentTimestamp
  ;   isCapslockDown := 1
  ; return


    ; MsgBox You pressed Yes.
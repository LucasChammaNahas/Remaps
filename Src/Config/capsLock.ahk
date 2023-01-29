  isCapslockPressed := 0 ; Solves rapid repetition when caps is held down
  previousCapslockTimestamp := A_TickCount
  *CapsLock Up::isCapslockPressed := 0
  *CapsLock::
    currentTimestamp := A_TickCount
    interval := currentTimestamp - previousCapslockTimestamp
    if(interval < 300 and isCapslockPressed = 0) {
      SetCapsLockState % !GetKeyState("CapsLock", "T")
    }
    isCapslockPressed := 1
    previousCapslockTimestamp := currentTimestamp
  return
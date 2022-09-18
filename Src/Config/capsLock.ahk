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
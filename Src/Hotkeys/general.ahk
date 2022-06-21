#If $generalController = 1

  ;--> Ctrl + Backspace <----------------
  !Backspace:: Send {Backspace}

  ;--> Ctrl + Y <------------------------
  <^b:: Send ^y

  ; ;--> CapsLock <------------------------
  ; wasCapslockReleased := 0 ; Solves rapid repetition when caps is held down
  ; previousCapslockTimestamp := A_TickCount
  ; *CapsLock Up::wasCapslockReleased := 1
  ; *CapsLock::
  ;   currentTimestamp := A_TickCount
  ;   interval := currentTimestamp - previousCapslockTimestamp
  ;   if(interval < 300 and wasCapslockReleased = 1) {
  ;     SetCapsLockState % !GetKeyState("CapsLock", "T")
  ;   }
  ;   wasCapslockReleased := 0
  ;   previousCapslockTimestamp := currentTimestamp
  ; return

  ;--> Win Key <-----------------------
  wasWinReleased := 0 ; Solves rapid repetition when win is held down
  previousWinTimestamp := A_TickCount
  ~LWin Up::wasWinReleased := 1
  ~LWin::
    Send {Blind}{vkE8}
    currentTimestamp := A_TickCount
    interval := currentTimestamp - previousWinTimestamp
    if(interval < 300 and wasWinReleased = 1) {
      Send #{Tab}
    }
    wasWinReleased := 0
    previousWinTimestamp := currentTimestamp
  return

#If

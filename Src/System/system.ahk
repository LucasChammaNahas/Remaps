;--> ScreenShot <----------------------
#q:: Send +#s

;--> Volume <--------------------------
!NumpadMult:: send {Volume_Mute}
!NumpadAdd::  send {Volume_Down 5}
!NumpadSub::  send {Volume_Up 5}

wasWinReleased := 0 ; Solves rapid repetition when win is held down
previousTimestamp := A_TickCount
~LWin Up::wasWinReleased := 1
~LWin::
  Send {Blind}{vkE8}
  currentTimestamp := A_TickCount
  interval := currentTimestamp - previousTimestamp
  if(interval < 300 and wasWinReleased = 1) {
    Send #{Tab}
  }
  wasWinReleased := 0
  previousTimestamp := currentTimestamp
return







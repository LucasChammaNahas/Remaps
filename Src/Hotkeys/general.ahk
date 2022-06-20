;--> Ctrl + Backspace <----------------
!Backspace:: Send {Backspace}

;--> Double Tap to Menu <--------------
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

;--> Ctrl + Y <------------------------
<^b:: Send ^y

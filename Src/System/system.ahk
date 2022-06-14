;--> ScreenShot <----------------------
#q:: Send +#s

;--> Close Window <--------------------
#w::
 id := WinExist("A")
 WinClose, ahk_id %id%
return


;--> Open Apps <-----------------------
^!Numpad0:: Run, "D:\OneDrive\PROGRAMS",, Max
^!Numpad1:: Run, "D:\OneDrive\PROGRAMS\Code.lnk",, Max
^!Numpad4:: Run, "D:\OneDrive\PROGRAMS\Tor.lnk",, Max
^!Numpad5:: Run, "D:\OneDrive\PROGRAMS\Chrome.lnk",, Max
^!Numpad6:: Run, "D:\OneDrive\PROGRAMS\Chrome HC.lnk",, Max
^!Numpad7:: Run, "D:\OneDrive\FOLDERS",, Max
^!Numpad8:: Run, "D:\OneDrive\PROGRAMS\Shell.lnk",, Max




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

;--> Ctrl + Y <------------------------
<^b:: Send ^y

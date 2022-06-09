SetCapsLockState, AlwaysOff

#If GetKeyState("CapsLock", "P")
i::Up
k::Down
j::Left
l::Right
#If

; *CapsLock::
; KeyWait, CapsLock
; msgbox %A_thisHotKey%
; ; IF A_ThisHotkey = *CapsLock
; ; 	Send, {Backspace}
; Return


; CapsLock::
; if (A_PriorHotkey != "CapsLock" or A_TimeSincePriorHotkey > 400 or A_TimeSincePriorHotkey < 50) {
;   wasCapsLockRecentlyPressed := 0
;   return
; }
; else {
;   if (wasCapsLockRecentlyPressed = 1){
;     SetCapsLockState % !GetKeyState("CapsLock", "T")
;     return
;   }
;   wasCapsLockRecentlyPressed := 1
; }
; return

wasCapslockReleased := 0
previousTimestamp := 0
currentTimestamp := previousTimestamp

CapsLock::
  currentTimestamp := currentTime()
  if(currentTimestamp - previousTimestamp < 300 and wasCapslockReleased = 1) {
    SetCapsLockState % !GetKeyState("CapsLock", "T")
  }
  wasCapslockReleased := 0
  previousTimestamp := currentTimestamp
return

CapsLock UP::wasCapslockReleased := 1

;             ___________
;            |           |
; -----------X_____O-----X_____O------------
; ___________|_______________|______________
;            |               |
; -----------X______________________________
; ___________|__________|___|___|___|___|___

/*
  
  var2 := false
  X --> var1a := currentDate(), var2 := false
  O --> var2 := true
  X --> {
    var1b := currentDate() 
    if (var1b - var1a < 300) toggleState()
    var1a := var1b
    var2 := false
  }
  
*/

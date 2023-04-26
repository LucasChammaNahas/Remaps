isCapslockDown := false ; Solves rapid repetition when caps is held down
capsLockDownTimestamp := A_TickCount


+CapsLock::CapsLock

*CapsLock::
  if(isCapslockDown = false) {
    capsLockDownTimestamp := A_TickCount
  }
  isCapslockDown := true
return
  
*CapsLock Up::
  currentTimestamp := A_TickCount
  interval := currentTimestamp - capsLockDownTimestamp
  if(interval < 300) {
    Send {Escape}
  }
  isCapslockDown := false
return

; *capslock::send {ctrl down}
; *capslock up::send % (a_priorkey = "capslock") ? "{ctrl up}{esc}" : "{ctrl up}"





; OLD WAY ----------------------------------------------------------------
; 
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
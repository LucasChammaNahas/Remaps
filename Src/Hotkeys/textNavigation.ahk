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


CapsLock::
if (A_PriorHotkey = "CapsLock" and A_TimeSincePriorHotkey < 300) {
  SetCapsLockState % !GetKeyState("CapsLock", "T")
  return
}
return
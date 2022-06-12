#Enter:: 
!Enter:: 
; SetStoreCapsLockMode, Off
Send, {Control}
Sleep, 100
Send, {Control}
; SetStoreCapsLockMode, On
return

#IfWinActive ahk_exe listary.exe

::`;shut::
pwr("52356b98-4ea9-44bb-9067-d34ab774e11f","MINIMUM STATE")
Sleep, 2000
Send, {Control}
Sleep, 100
Send, {Control}
Sleep, 300
Send, shutdown
Sleep, 1000
;Send, {Enter}
return

#IfWinActive

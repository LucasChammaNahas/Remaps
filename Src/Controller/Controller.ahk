; ^F2:: 
; $toggle_symbols    := !$toggle_symbols
; $toggle_capitalize := !$toggle_capitalize
; msgbox %$toggle_symbols%
; return
 
^ESC::
::ahkExit::
MsgBox, 4, , Exit the App?
IfMsgBox, Yes 
{
  MsgBox, , , Bye!, 1
  exitapp
}
return

#ESC::
MsgBox, , , Reloading..., 1
::ahkReload::
Reload
return
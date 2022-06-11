
::>>>disableSymbols::
$hotkeySymbols := 0
return

::>>>enableSymbols::
$hotkeySymbols := 1
return

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
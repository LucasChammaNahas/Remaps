
:B0:symbolsOff`;::
  Send {Esc}
  $hotkeySymbols := 0
  MsgBox, , , Symbols > OFF, 1
return

:B0:symbolsOn`;::
  Send {Esc}
  $hotkeySymbols := 1
  MsgBox, , , Symbols > ON, 1
return

^ESC::
:B0:exit`;::
  Send {Esc}
  MsgBox, 4, , Exit the App?
  IfMsgBox, Yes 
  {
    MsgBox, , , Bye!, 1
    ExitApp
  }
return

#ESC::
:B0:reload`;::
:B0:restartAhk`;::
  Send {Esc}
  MsgBox, , , Reloading App..., 1
  Reload
return
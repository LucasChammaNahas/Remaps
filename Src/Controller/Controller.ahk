:*B0:restartpc`;`;:: 
  Send {Esc}
  restartComputer()
return 

:B0:symbolsOff`;::
  Send {Esc}
  ; $hotkeySymbols := 0
  MsgBox, , , Symbols > OFF, 1
return

:B0:symbolsOn`;::
  Send {Esc}
  ; $globalSwitch := 1
  MsgBox, , , Symbols > ON, 1
return

:*B0:pauseApp`;`;::
  Send {Esc}
  $globalSwitch := 0
  MsgBox, , , App was Paused..., 1
return

:*B0:startApp`;`;::
:*B0:resumeApp`;`;::
  Send {Esc}
  $globalSwitch := 1
  MsgBox, , , App is Running!, 1
return

:*B0:exitApp`;`;::
  Send {Esc}
  MsgBox, 4, , Exit the App?
  IfMsgBox, Yes 
  {
    MsgBox, , , Bye!, 1
    ExitApp
  }
return

#ESC::
:*B0:reload`;`;::
:*B0:restartApp`;`;::
  Send {Esc}
  MsgBox, , , Reloading App..., 1
  Reload
return

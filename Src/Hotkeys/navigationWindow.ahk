#If $navWindowController = 1

  win0   := ""
  win1   := ""
  win2   := ""
  win3   := ""
  win4   := ""
  win5   := ""
  win6   := ""
  win7   := ""
  win8   := ""
  win9   := ""
  winDot := ""
  winEqu := ""
  winDiv := ""
  winMul := ""
  winSub := ""
  winAdd := ""
  winEnt := ""


  ^#Numpad0::     win0 := WinExist("A")
  #Numpad0::     WinActivate, ahk_id %win0%

  ^#Numpad1::     win1 := WinExist("A")
  #Numpad1::     WinActivate, ahk_id %win1%

  ^#Numpad2::     win2 := WinExist("A")
  #Numpad2::     WinActivate, ahk_id %win2%

  ^#Numpad3::     win3 := WinExist("A")
  #Numpad3::     WinActivate, ahk_id %win3%

  ^#Numpad4::     win4 := WinExist("A")
  #Numpad4::     WinActivate, ahk_id %win4%

  ^#Numpad5::     win5 := WinExist("A")
  #Numpad5::     WinActivate, ahk_id %win5%

  ^#Numpad6::     win6 := WinExist("A")
  #Numpad6::     WinActivate, ahk_id %win6%

  ^#Numpad7::     win7 := WinExist("A")
  #Numpad7::     WinActivate, ahk_id %win7%

  ^#Numpad8::     win8 := WinExist("A")
  #Numpad8::     WinActivate, ahk_id %win8%

  ^#Numpad9::     win9 := WinExist("A")
  #Numpad9::     WinActivate, ahk_id %win9%

  ^#NumpadDot::   winDot := WinExist("A")
  #NumpadDot::   WinActivate, ahk_id %winDot%

  ^#=::           winEqu := WinExist("A")
  #=::           WinActivate, ahk_id %winEqu%

  ^#NumpadDiv::   winDiv := WinExist("A")
  #NumpadDiv::   WinActivate, ahk_id %winDiv%

  ^#NumpadMult::  winMul := WinExist("A")
  #NumpadMult::  WinActivate, ahk_id %winMul%

  ^#NumpadAdd::   winAdd := WinExist("A")
  #NumpadAdd::   WinActivate, ahk_id %winAdd%

  ^#NumpadSub::   winSub := WinExist("A")
  #NumpadSub::   WinActivate, ahk_id %winSub%

  ^#NumpadEnter:: winEnt := WinExist("A")
  #NumpadEnter:: WinActivate, ahk_id %winEnt%


  ;==> Window Resizing <===============================================

  ;--> windows side-by-side <------------
  ^Numpad8::
    time := 100  
    WinMaximize, A
    Sleep, time
    Send, #{Right}
    Sleep, time
    Send, {Esc}
    Sleep, time
    Send, !{Tab}
    Sleep, time
    WinMaximize, A
    Sleep, time
    Send, #{Left}
    Sleep, time
    Send, {Esc}
  return

  ^Numpad0::Send !{Tab}

  ^Numpad1::
    time := 150  
    WinMaximize, A
    Sleep, time
    Send, #{Left}
    Sleep, time
    Send, {Esc}
  return

  ^Numpad2:: WinMinimize, A

  ^Numpad3::
    time := 150  
    WinMaximize, A
    Sleep, time
    Send, #{Right}   
    Sleep, time
    Send, {Esc}
  return

  ^Numpad5::WinMaximize, A
 
#If
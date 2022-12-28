
#If $systemController = 1

  ;--> Close All Instances <-------------
  #q::
    MsgBox, 4, , Close All Instances of this App?
    IfMsgBox, Yes 
    {
      WinGet, activePath, ProcessPath, A
      if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe") {
        exitViaMenu()
        return
      }
      if(activePath = "C:\Program Files\Microsoft VS Code\Code.exe") {
        exitViaMenu()
        return
      }
      WinGet, id, List,,, Program Manager
      Loop, %id%
      {
        thisId := id%A_Index%
        WinGet, thisPath, ProcessPath, % "ahk_id" id%A_Index%
        WinGetTitle, title, % "ahk_id" id%A_Index%
        if (thisPath = activePath && title) { ;When dealing with file explorer, winclose tries to close windowsOS itself, which has a blank title. Windows should not be closed
          WinClose, ahk_id %thisId%
        }
      }
    }
  return

  ;--> Close Window <--------------------
  #w::
    id := WinExist("A")
    WinClose, ahk_id %id%
  return

  ;--> Close Tab <-----------------------
  #e::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^F4
      return
    }
    if(activePath = "C:\Program Files\Microsoft VS Code\Code.exe"){
      Send ^F4
      return
    }
  return

  ;--> Reopen Tab <----------------------
  #r::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^+{t}
      return
    }
    if(activePath = "C:\Program Files\Microsoft VS Code\Code.exe"){
      Send ^+{t}
      return
    }
  return

  ;--> Navigate Tab <--------------------  
  ^!~h::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^{1}
      return
    }
  return

  ^!~j::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^{PgUp}
      return
    }
  return

  ^!~l::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^{PgDn}
      return
    }
  return
  
  ^!~`;::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^{9}
      return
    }
  return

  ;--> Move Tab <------------------------

  ^!~u::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^+{PgUp}
      return
    }
  return

  ^!~o::
    WinGet, activePath, ProcessPath, A    
    if(activePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"){
      Send ^+{PgDn}
      return
    }
  return


  ;--> Open Apps <-----------------------
  ^!Numpad0:: Run, "C:\Users\Dell\OneDrive\0 Lucas\PROGRAMS",, Max
  ^!Numpad1:: Run, "C:\Users\Dell\OneDrive\0 Lucas\PROGRAMS\Code.lnk",, Max
  ^!Numpad5:: Run, "C:\Users\Dell\OneDrive\0 Lucas\PROGRAMS\Brave.lnk",, Max
  ^!Numpad7:: Run, "C:\Users\Dell\OneDrive\0 Lucas\FOLDERS",, Max
  ^!Enter::   Run, "C:\Users\Dell\OneDrive\0 Lucas\PROGRAMS\Shell.lnk",,

  ;--> Volume <--------------------------
  !NumpadMult:: send {Volume_Mute}
  !NumpadAdd::  send {Volume_Down 5}
  !NumpadSub::  send {Volume_Up 5}

#If


;--> FUNCTIONS <-------------------------
exitViaMenu() {
  Send !{f}
  Sleep, 100
  Send {x}
  return
}
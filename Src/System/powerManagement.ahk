
;--> Shut Down PC <--------------------
#F12::shutdownComputer()

#IfWinActive ahk_exe listary.exe
  ::`;`;shutdown:: 
    shutdownComputer()
  return 
#IfWinActive

;--> Restart PC <----------------------
#F11::restartComputer()

#IfWinActive ahk_exe listary.exe
  ::`;`;restart:: 
    restartComputer()
  return 
#IfWinActive

;--> CPU States <----------------------
#F1:: changeCpuState("63a18518-accb-4761-9414-d019e0b9ae24","OVERCLOCK")
#F2:: changeCpuState("d1297704-ad4c-4328-a263-c3970150ec8f","HIGH")
#F3:: changeCpuState("2012790d-54c3-48b3-92af-d80b71fcf9a6","NORMAL")
#F4:: changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")

;--> CPU Status <----------------------
#IfWinActive ahk_exe listary.exe
  ::`;`;powerstatus:: 
    getCpuStatus()
  return 
#IfWinActive


;==> FUNCTIONS <=====================================================

changeCpuState(id, msg) {
  Run, powercfg -SETACTIVE %id%
  msgBox,,,CPU > %msg%,2
  return  
}

getCpuStatus() {
  Run, powercfg /getactivescheme
  MsgBox, % Run, powercfg /getactivescheme
}

shutdownComputer() {
  MsgBox, 4, , Shut Computer Down?
  IfMsgBox, Yes 
    {
      changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")
      Sleep, 3000
      Shutdown, 1
    }
}

restartComputer() {
  MsgBox, 4, , Restart Computer?
  IfMsgBox, Yes 
    {
      Shutdown, 2
    }
}

^F7::
RunWaitOne()
; MsgBox % RunWaitOne()
; msgbox %A_ScriptDir%
return 



RunWaitOne() {
    shell := ComObjCreate("WScript.Shell")
    exec := shell.Exec(ComSpec " /C powercfg /getactivescheme")
   MsgBox % exec.StdOut.ReadAll()
}
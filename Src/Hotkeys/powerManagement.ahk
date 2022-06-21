#If $powerController = 1

;--> Shut Down PC <--------------------
  #F12::shutdownComputer()
  #IfWinActive ahk_exe listary.exe
    :B0:`;`;shutdown:: 
      Send {Esc}
      shutdownComputer()
    return 
  #IfWinActive

  ;--> Restart PC <----------------------
  #F11::restartComputer()
  #IfWinActive ahk_exe listary.exe
    :B0:`;`;restart:: 
      Send {Esc}
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
    :B0:`;`;powerstatus:: 
    :B0:`;`;powerstate:: 
    :B0:`;`;powerlevel::
      Send {Esc}
      getCpuState()
    return 
  #IfWinActive

#If


;==> FUNCTIONS <=====================================================

changeCpuState(id, msg) {
  Run, powercfg -SETACTIVE %id%
  msgBox,,,CPU > %msg%,2
  return  
}

getCpuState() {
  shell := ComObjCreate("WScript.Shell")
  exec := shell.Exec(ComSpec " /C powercfg /getactivescheme")
  result := exec.StdOut.ReadAll()
  resultLen := StrLen(result)
  updatedResult := SubStr(result, 59, resultLen-59) ;Retrieves only the name
  MsgBox, CPU > %updatedResult%
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
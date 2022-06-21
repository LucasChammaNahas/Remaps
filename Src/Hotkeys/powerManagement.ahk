
;--> CPU States <----------------------
#F1::  changeCpuState("63a18518-accb-4761-9414-d019e0b9ae24","OVERCLOCK")
#F2::  changeCpuState("d1297704-ad4c-4328-a263-c3970150ec8f","HIGH")
#F3::  changeCpuState("2012790d-54c3-48b3-92af-d80b71fcf9a6","NORMAL")
#F4::  changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")
#F11:: restartComputer()
#F12:: shutdownComputer()


#If $powerController = 1 && WinActive("ahk_exe listary.exe")

  ;--> Shut Down PC <-------------------- 
  :*B0:shutdownPc`;`;:: 
    Send {Esc}
    shutdownComputer()
  return 

  ;--> Restart PC <----------------------
  :*B0:restartPc`;`;:: 
    restartComputer()
  return 
  :*B0:restartPcLow`;`;:: 
    restartComputerLow()
  return 

  ;--> CPU States <----------------------
  :*B0:cpuOverclock`;`;:: 
    changeCpuState("63a18518-accb-4761-9414-d019e0b9ae24","OVERCLOCK")
  return
  :*B0:cpuHigh`;`;:: 
    changeCpuState("d1297704-ad4c-4328-a263-c3970150ec8f","HIGH")
  return
  :*B0:cpuNormal`;`;:: 
    changeCpuState("2012790d-54c3-48b3-92af-d80b71fcf9a6","NORMAL")
  return
  :*B0:cpuLow`;`;:: 
    changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")
  return

  ;--> CPU Status <----------------------
  :*B0:cpu`;`;:: 
    getCpuState()
  return 

#If


;==> FUNCTIONS <=====================================================

changeCpuState(id, msg) {
  Send {Esc}
  Run, powercfg -SETACTIVE %id%
  msgBox,,,CPU > %msg%,2
  return  
}

getCpuState() {
  Send {Esc}
  shell := ComObjCreate("WScript.Shell")
  exec := shell.Exec(ComSpec " /C powercfg /getactivescheme")
  result := exec.StdOut.ReadAll()
  resultLen := StrLen(result)
  updatedResult := SubStr(result, 59, resultLen-59) ;Retrieves only the name
  MsgBox, CPU = %updatedResult%
}

shutdownComputer() {
  Send {Esc}
  MsgBox, 4, , Shut Computer Down?
  IfMsgBox, Yes 
    {
      changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")
      Sleep, 3000
      Shutdown, 1
    }
}

restartComputer() {
  Send {Esc}
  MsgBox, 4, , Restart Computer?
  IfMsgBox, Yes 
    {
      Shutdown, 2
    }
}

restartComputerLow() {
  Send {Esc}
  MsgBox, 4, , Set CPU to LOW and Restart Computer?
  IfMsgBox, Yes 
    {
      changeCpuState("f7082d56-696b-4d9a-8565-57a90d85a147","LOW")
      Sleep, 3000
      Shutdown, 2
    }
}
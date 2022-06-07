
;MAIN

^!Numpad7:: _openProg("ahk_exe EXCEL.EXE","C:\Program Files\Microsoft Office\root\Office16\EXCEL.EXE")
^!Numpad8:: _openProg("ahk_exe WINWORD.EXE","C:\Program Files\Microsoft Office\root\Office16\WINWORD.EXE")
^!Numpad9:: _openProg("ahk_exe POWERPNT.EXE","C:\Program Files\Microsoft Office\root\Office16\POWERPNT.EXE")

^!Numpad4:: _openProg("ahk_exe Teams.exe","C:\Users\lucas\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Microsoft Teams")
^!Numpad5:: _openProg("ahk_exe Code.exe","D:\Installed Programs\Microsoft VS Code\Code.exe")
^!Numpad6:: Run, "D:\Google Drive\Desktop\HOME\PROGRAMS SHORTCUTS\Power Options", , Max

^!Numpad1:: _openProg("ahk_exe chrome.exe", "C:\Program Files\Google\Chrome\Application\chrome.exe")
^!Numpad2:: Run, "C:\Program Files (x86)\Windows Media Player\wmplayer.exe", , Max

;=================================================================================
;FUNÇÕES 

_openProg(wind,path){
  if(WinExist(wind)){
    WinActivateBottom, %wind%
  }else{
    run, %path%,,Max
    ; Sleep, 5000
    ; WinMaximize, A
  } 
  return
}
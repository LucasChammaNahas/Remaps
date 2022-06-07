#IfWinActive ahk_exe chrome.exe

;Close tab
^Delete::  ^w

;Close to the right. if last, closes itself
+Delete::  
sendy()
Send, ccc
Sleep, 200
Send, {enter}
return

;Close all but current. if last, closes itself
+^Delete:: 
sendy()
Send, cc
Sleep, 200
Send, {enter}
return

;Separates into two windows, side-by-side OR sends it back
Insert::
WinGet, n1, count, ahk_exe chrome.exe,,,
Sleep, 100
WinMaximize, ahk_exe chrome.exe,,,
Sleep, 200
sendy()
Send, {Down}{Down}{Down}{Right}
Sleep, 200
Send, {enter}
Sleep, 200
WinGet, n2, count, ahk_exe chrome.exe,,,
Sleep, 200
if(n2>n1){
  Send, #{Right}
  Sleep, 300
  Send, !{Tab}
  Sleep, 300
  Send, #{Left}
  Sleep, 300
  Send, !{Tab}
}else{
  Send, #{Up}
}
return

^Right:: Send ^{Tab}
^Left::  Send ^+{Tab}
^Up::    Send ^1
^Down::  Send ^9

#IfWinActive 



;==============================================================================
;Funções

sendy(){
  Send, ^l
  Sleep, 200
  Send, {F6}
  Sleep, 200
  CoordMode, Mouse, Screen
  Click, 960, 540, 0
  Send, {AppsKey}
  Sleep, 200
}

#F12:: 
pwr("52356b98-4ea9-44bb-9067-d34ab774e11f","MINIMUM STATE")
Sleep, 2000
; Shutdown, 1
return

#F11:: 
; Shutdown, 2
return

!Insert::    send {Media_Prev}
!Home::      send {Media_Play_Pause}
!PgUp::      send {Media_Next}
!Delete::    send {Volume_Mute}
!End::       send {Volume_Down 5}
!PgDn::      send {Volume_Up 5}
!NumpadAdd:: send {Volume_Down}
!NumpadSub:: send {Volume_Up}

^#Up::    Send !{Tab}
^#Left::  Send !{Esc}
^#Right:: Send !+{Esc}
RWin::    Send #{Tab}

; #F1:: pwr("dbd3cf3a-62ec-4274-b447-3dded7c03e46","OVERCLOCK")
; #F2:: pwr("44b09442-b0ba-4cfa-9934-40bb55905ae6","VERY HIGH")
; #F3:: pwr("70dc4e62-0742-4887-895b-5a30aaabe62e","HIGH")
; #F4:: pwr("e6b4b879-a19f-4b99-8c30-7c0a7268a54a","MEDIUM")
; #F5:: pwr("062fd414-53c0-47bb-b845-255070bfa672","LOW")
; #F6:: pwr("1bfcd3d7-65ba-4141-91b5-d23c0aed6a46","VERY LOW")
; #F7:: pwr("52356b98-4ea9-44bb-9067-d34ab774e11f","MINIMUM STATE")

;Send two windows side-by-side
^Insert::
WinMaximize, A
Sleep, 100
Send, !{Tab}
Sleep, 100
WinMaximize, A
Sleep, 100
Send, !{Tab}
Sleep, 100
Send, #{Left}
Sleep, 100
Send, {Esc}
Sleep, 100
Send, !{Tab}
Sleep, 100
Send, #{Right}
Sleep, 100
Send, {Esc}
return


;=================================================================================
;FUNÇÕES 

pwr(id, msg){
  run, powercfg -SETACTIVE %id%
  msgBox,,,%msg%,1
  return  
}

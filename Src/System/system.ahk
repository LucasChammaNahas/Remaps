; Screenshot
#q:: Send +#s





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

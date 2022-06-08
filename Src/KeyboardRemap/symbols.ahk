; ^    control
; +    shift
; #    win
; !    alt
; <^>! altGr
; > <  right left


;==> LEFT HAND <=====================================================
;--> SPACE <---------------------------
!Space::   Send    {Space}
<^>!Space::Send    {Space}
<+Space::  SendRaw -
>+Space::  Send    {Space}-{Space}
>!Space::  SendRaw _

;-->> Q <------------------------------
!q::   SendRaw #
<^>!q::SendRaw #

;--> Q <-------------------------------
!w::   SendRaw [
<^>!w::SendRaw [

;--> Q <-------------------------------
!e::   SendRaw ]
<^>!e::SendRaw ]

;--> Q <-------------------------------
<!r::  SendRaw +
>!r::  Send    {Space}{+}{Space}
<^>!r::Send    {Space}{+}{Space}

;--> Q <-------------------------------
!a::   SendRaw @
<^>!a::SendRaw @
<!>!a::SendRaw 1

;--> Q <-------------------------------
!s::   SendRaw (
<^>!s::SendRaw (
<!>!s::SendRaw 2

;--> Q <-------------------------------
!d::   SendRaw )
<^>!d::SendRaw )
<!>!d::SendRaw 3

;--> Q <-------------------------------
<!f::  SendRaw `=
>!f::  Send    {Space}`={Space}
<^>!f::Send    {Space}`={Space}
<!>!f::SendRaw 4

;--> Q <-------------------------------
<!g::  SendRaw *
>!g::  Send    {Space}*{Space}
<^>!g::Send    {Space}*{Space}
<!>!g::SendRaw 5

;--> Q <-------------------------------
!z::   SendRaw $
<^>!z::SendRaw $

;--> Q <-------------------------------
!x::   SendRaw {
<^>!x::SendRaw {

;--> Q <-------------------------------
!c::   SendRaw }
<^>!c::SendRaw }

;--> Q <-------------------------------
!v::   SendRaw !
<^>!v::SendRaw !

;--> Q <-------------------------------
!b::   SendRaw `%
<^>!b::SendRaw `%



;==> RIGHT HAND <====================================================
;--> Y <-------------------------------
!y::   SendRaw &
<^>!y::SendRaw &
<^y::  Send    (() => {{}{}});{Left 3}

;--> U <-------------------------------
<!u::  SendRaw <
>!u::  SendRaw <`=
<^>!u::SendRaw <`=
<^u::  Send    (() => );{Left 7}

;--> I <-------------------------------
<!i::  SendRaw `=
>!i::  Send    {Space}`=>{Space}
<^>!i::Send    {Space}`=>{Space}
<^i::  Send    () => {{}{}}{Left}

;--> O <-------------------------------
<!o::  SendRaw >
>!o::  SendRaw >`=
<^>!o::SendRaw >`=
<^o::  Send    () =>{Space}

;--> P <-------------------------------
!p::   SendRaw £
<^>!p::SendRaw £

;--> H <-------------------------------
!h::   SendRaw |
<^>!h::SendRaw |
<!>!h::SendRaw 6
<^h::  SendRaw : [

;--> J <-------------------------------
!j::   SendRaw "
<^>!j::SendRaw "
<!>!j::SendRaw 7
<^j::  SendRaw : {

;--> K <-------------------------------
!k::   SendRaw '
<^>!k::SendRaw '
<!>!k::SendRaw 8
<^k::  SendRaw : '

;--> L <-------------------------------
!l::   SendRaw ``
<^>!l::SendRaw ``
<!>!l::SendRaw 9
<^l::  SendRaw `={

;--> ; <-------------------------------
!`;::   Send    {End}`;
<^>!`;::Send    {End}`;
<!>!`;::SendRaw 0
<^`;::  SendRaw `="

;--> N <-------------------------------
!n::   SendRaw ~
<^>!n::SendRaw ~
<^n::  Send    if (){Left}

;--> M <-------------------------------
<!m::  SendRaw :
>!m::  Send    :{Space}
<^>!m::Send    :{Space}
<^m::  Send    if () {{}{}}{Left}{Enter}{Up}{End}{Left 3}

;--> , <-------------------------------
!,::   SendRaw ^
<^>!,::SendRaw ^
<^,::  Send    +{Home}^x{End},{Home}^v

;--> . <-------------------------------
!.::   SendRaw €
<^>!.::SendRaw €
<^.::  Send    +^{Left}^x<^v></^v>^{Left}{Left 2}

;--> / <-------------------------------
!/::   SendRaw \
<^>!/::SendRaw \
<^/::  Send    < />{Left 3}
; ^    control
; +    shift
; #    win
; !    alt
; <^>! altGr
; > <  right left


;==> LEFT HAND <=====================================================
;--> SPACE <---------------------------
<!Space::  Send    {Space}          ;Alt L
>!Space::  SendRaw _                ;Alt R
<^>!Space::SendRaw _                ;AltGr
<+Space::  SendRaw -                ;Shift L
>+Space::  Send    {Space}-{Space}  ;Shift R

;-->> Q <------------------------------
!q::   SendRaw #  ;Alt
<^>!q::SendRaw #  ;AltGr

;--> W <-------------------------------
!w::   SendRaw [ ;Alt
<^>!w::SendRaw [ ;AltGr

;--> E <-------------------------------
!e::   SendRaw ]               ;Alt
<^>!e::SendRaw ]               ;AltGr
<!>!e::Send    {Space}-{Space} ;Alt 2

;--> R <-------------------------------
<!r::  SendRaw +                 ;Alt L
>!r::  Send    {Space}{+}{Space} ;Alt R
<^>!r::Send    {Space}{+}{Space} ;AltGr
<!>!r::Send    {Space}{+}{Space} ;Alt 2

;--> T <-------------------------------
<!t::  SendRaw /               ;Alt L
>!t::  Send    {Space}/{Space} ;Alt R
<^>!t::Send    {Space}/{Space} ;AltGr
<!>!e::Send    {Space}/{Space} ;Alt 2

;--> A <-------------------------------
!a::   SendRaw @ ;Alt
<^>!a::SendRaw @ ;AltGr
<!>!a::SendRaw 1 ;Alt 2

;--> S <-------------------------------
!s::   SendRaw ( ;Alt
<^>!s::SendRaw ( ;AltGr
<!>!s::SendRaw 2 ;Alt 2

;--> D <-------------------------------
!d::   SendRaw ) ;Alt
<^>!d::SendRaw ) ;AltGr
<!>!d::SendRaw 3 ;Alt 2

;--> F <-------------------------------
<!f::  SendRaw `=               ;Alt L
>!f::  Send    {Space}`={Space} ;Alt R
<^>!f::Send    {Space}`={Space} ;AltGr
<!>!f::SendRaw 4                ;Alt 2

;--> G <-------------------------------
<!g::  SendRaw !               ;Alt L
>!g::  Send    {Space}!{Space} ;Alt R
<^>!g::Send    {Space}!{Space} ;AltGr
<!>!g::SendRaw 5               ;Alt 2

;--> Z <-------------------------------
!z::   SendRaw $ ;Alt
<^>!z::SendRaw $ ;AltGr

;--> X <-------------------------------
!x::   SendRaw { ;Alt
<^>!x::SendRaw { ;AltGr

;--> C <-------------------------------
!c::   SendRaw } ;Alt
<^>!c::SendRaw } ;AltGr

;--> V <-------------------------------
!v::   SendRaw *               ;Alt
<^>!v::SendRaw *               ;AltGr
<!>!v::Send    {Space}*{Space} ;Alt 2

;--> B <-------------------------------
<!b::  SendRaw `%               ;Alt L
>!b::  Send    {Space}`%{Space} ;Alt R
<^>!b::Send    {Space}`%{Space} ;AltGr
<!>!b::Send    {Space}`%{Space} ;Alt 2



;==> RIGHT HAND <====================================================
;--> Y <-------------------------------
<!y::  SendRaw &                       ;Alt L
>!y::  Send    {Space}&&{Space}        ;Alt R
<^>!y::Send    {Space}&&{Space}        ;AltGr
<^y::  Send    (() => {{}{}});{Left 3} ;Ctrl L

;--> U <-------------------------------
<!u::  SendRaw <                 ;Alt L
>!u::  SendRaw <`=               ;Alt R
<^>!u::SendRaw <`=               ;AltGr
<^u::  Send    (() => );{Left 7} ;Ctrl L

;--> I <-------------------------------
<!i::  SendRaw `=                 ;Alt L
>!i::  Send    {Space}`=>{Space}  ;Alt R
<^>!i::Send    {Space}`=>{Space}  ;AltGr
<!>!i::Send    {Space}`={Space}   ;Alt 2
<^i::  Send    () => {{}{}}{Left} ;Ctrl L

;--> O <-------------------------------
<!o::  SendRaw >            ;Alt L
>!o::  SendRaw >`=          ;Alt R
<^>!o::SendRaw >`=          ;AltGr
<^o::  Send    () =>{Space} ;Ctrl L

;--> P <-------------------------------
<!p::  SendRaw £ ;Alt L
>!p::  SendRaw € ;Alt R
<^>!p::SendRaw € ;AltGr

;--> H <-------------------------------
<!h::  SendRaw |                ;Alt L
>!h::  Send    {Space}||{Space} ;Alt R
<^>!h::Send    {Space}||{Space} ;AltGr
<!>!h::SendRaw 6                ;Alt 2
<^h::  SendRaw : [              ;Ctrl L

;--> J <-------------------------------
!j::   SendRaw "   ;Alt
<^>!j::SendRaw "   ;AltGr
<!>!j::SendRaw 7   ;Alt 2
<^j::  SendRaw : { ;Ctrl L

;--> K <-------------------------------
!k::   SendRaw '   ;Alt
<^>!k::SendRaw '   ;AltGr
<!>!k::SendRaw 8   ;Alt 2
<^k::  SendRaw : ' ;Ctrl L

;--> L <-------------------------------
!l::   SendRaw ``  ;Alt
<^>!l::SendRaw ``  ;AltGr
<!>!l::SendRaw 9   ;Alt 2
<^l::  SendRaw `={ ;Ctrl L

;--> ; <-------------------------------
!`;::   Send    +{Home}^x{End}`;{Home}^v ;Alt
<^>!`;::Send    +{Home}^x{End}`;{Home}^v ;AltGr
<!>!`;::SendRaw 0                        ;Alt 2
<^`;::  SendRaw `="                      ;Ctrl L

;--> N <-------------------------------
!n::   SendRaw ~           ;Alt
<^>!n::SendRaw ~           ;AltGr
<^n::  Send    if (){Left} ;Ctrl L

;--> M <-------------------------------
<!m::  SendRaw :                                          ;Alt L
>!m::  Send    :{Space}                                   ;Alt R
<^>!m::Send    :{Space}                                   ;AltGr
<^m::  Send    if () {{}{}}{Left}{Enter}{Up}{End}{Left 3} ;Ctrl L

;--> , <-------------------------------
!,::   Send    +{Home}^x{End},{Home}^v            ;Alt
<^>!,::Send    +{Home}^x{End},{Home}^v            ;AltGr
<!>!,::SendRaw ,                                  ;Alt 2
<^,::  Send    +^{Left}^x<^v></^v>^{Left}{Left 2} ;Ctrl L

;--> . <-------------------------------
!.::   SendRaw ^            ;Alt
<^>!.::SendRaw ^            ;AltGr
<!>!.::SendRaw .            ;Alt 2
<^.::  Send    < />{Left 3} ;Ctrl L

;--> / <-------------------------------
!/::   SendRaw \ ;Alt
<^>!/::SendRaw \ ;AltGr

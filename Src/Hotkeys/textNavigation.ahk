
;--> Navigation <----------------------
#If GetKeyState("CapsLock", "P")
i::Up
k::Down
j::Left
l::Right
m::Backspace
n::^Backspace
`;::End
h::Home
,::Del
.::^Del
~Space::Left
a::
s::^a
d::^c
e::^x
f::^v
v::^z
#If


;--> CapsLock <------------------------
; If you hold capslock down, it repeats rapidly. 
; wasCapslockReleased logic solves this
wasCapslockReleased := 0
previousTimestamp := A_TickCount

CapsLock Up::wasCapslockReleased := 1

CapsLock::
  currentTimestamp := A_TickCount
  interval := currentTimestamp - previousTimestamp
  if(interval < 300 and wasCapslockReleased = 1) {
    SetCapsLockState % !GetKeyState("CapsLock", "T")
  }
  wasCapslockReleased := 0
  previousTimestamp := currentTimestamp
return


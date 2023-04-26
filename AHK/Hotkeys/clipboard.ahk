clip  := ""
clip1 := ""
clip2 := ""
clip3 := ""

#If $clipboardController = 1 && GetKeyState("CapsLock", "P")

  ;--> ROW 1 <-------------------------
  x::
>!x::
    clip := Clipboard
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip1 = %Clipboard%
    Clipboard := clip
  return
  c::
>!c::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip1 = %Clipboard%
    Clipboard := clip
  return
  v::
>!v::
    SendRaw %clip1%
  return

  ;--> ROW 2 <-------------------------
  s::
>!s::
    clip := Clipboard
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip2 = %Clipboard%
    Clipboard := clip
  return
  d::
>!d::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip2 = %Clipboard%
    Clipboard := clip
  return
  f::
>!f::
    SendRaw %clip2%
  return

  ;--> ROW 3 <-------------------------
  w::
>!w::
    clip := Clipboard
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip3 = %Clipboard%
    Clipboard := clip
  return
  e::
>!e::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip3 = %Clipboard%
    Clipboard := clip
  return
  r::
>!r::
    SendRaw %clip3%
  return

#If

clip  := ""
clip1 := ""
clip2 := ""
clip3 := ""

#If GetKeyState("CapsLock", "P")
  x::
    clip := %Clipboard%
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip1 = %Clipboard%
    Clipboard := clip
  return
  c::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip1 = %Clipboard%
    Clipboard := clip
  return
  v::
    Clipboard := clip1
    Send, ^v
    Clipboard := clip
  return

  s::
    clip := Clipboard
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip2 = %Clipboard%
    Clipboard := clip
  return
  d::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip2 = %Clipboard%
    Clipboard := clip
  return
  f::
    Clipboard := clip2
    Send, ^v
    Clipboard := clip
  return

  w::
    clip := Clipboard
    Clipboard := ""
    Send, ^x
    ClipWait, 2
    clip3 = %Clipboard%
    Clipboard := clip
  return
  e::
    clip := Clipboard
    Clipboard := ""
    Send, ^c
    ClipWait, 2
    clip3 = %Clipboard%
    Clipboard := clip
  return
  r::
    Clipboard := clip3
    Send, ^v
    Clipboard := clip
  return

#If
clip  := ""
clip1 := ""
clip2 := ""
clip3 := ""

#If GetKeyState("CapsLock", "P")
    x::
  >!x::
      clip := %Clipboard%
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
      Clipboard := clip1
      Send, ^v
      Clipboard := clip
    return

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
      Clipboard := clip2
      Send, ^v
      Clipboard := clip
    return

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
      Clipboard := clip3
      Send, ^v
      Clipboard := clip
    return

#If
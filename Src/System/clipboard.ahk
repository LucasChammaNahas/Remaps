clip1 := ""
clip2 := ""
clip3 := ""


<^c::
  Clipboard := ""
  Send, ^c
  ClipWait, 2
  clip1 = %Clipboard%
return
<^v::
  Clipboard := clip1
  Send, ^v
return

#c::
  Clipboard := ""
  Send, ^c
  ClipWait, 2
  clip3 = %Clipboard%
return
#v::
  Clipboard := clip3
  Send, ^v
return
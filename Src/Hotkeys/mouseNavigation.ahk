
^i:: gridMoveMouse("up",    "rough")
^k:: gridMoveMouse("down",  "rough")
^j:: gridMoveMouse("left",  "rough")
^l:: gridMoveMouse("right", "rough")

^#i:: gridMoveMouse("up",    "fine")
^#k:: gridMoveMouse("down",  "fine")
^#j:: gridMoveMouse("left",  "fine")
^#l:: gridMoveMouse("right", "fine")

^#!i::moveMouse("up")
^#!k::moveMouse("down")
^#!j::moveMouse("left")
^#!l::moveMouse("right")

  ^o::
 ^#o::
^#!o::
  click right
return

  ^u::
 ^#u::
^#!u::
  If (A_PriorHotKey = A_ThisHotKey)
    return
  click down
return

  ^u up::
 ^#u up::
^#!u up::
  click up
return

moveMouse(dir)
{
  speed := 10
  stepSize := 10
  stepX := 0
  stepY := 0
  if (dir = "left" ) 
    stepX := -1
  if (dir = "right") 
    stepX :=  1
  if (dir = "up"   ) 
    stepY := -1
  if (dir = "down" ) 
    stepY :=  1

  x := stepX * stepSize
  y := stepY * stepSize
  MouseMove, x, y, speed, R
}


gridMoveMouse(dir, type)
{
  speed := 10
  typeFactor := type="fine" ? 9 : 3
  stepX := 0
  stepY := 0
  if (dir = "left" ) 
    stepX := -1
  if (dir = "right") 
    stepX :=  1
  if (dir = "up"   ) 
    stepY := -1
  if (dir = "down" ) 
    stepY :=  1

  MouseGetPos, x, y
  
  blockWidth  :=  A_ScreenWidth / typeFactor
  blockHeight :=  A_ScreenHeight / typeFactor

  currIndexX := x // blockWidth
  currIndexY := y // blockHeight

  nextIndexX := (currIndexX + stepX + 0.5)
  nextIndexY := (currIndexY + stepY + 0.5)

  if (nextIndexX < 0) 
    nextIndexX += 1
  if (nextIndexX > typeFactor) 
    nextIndexX -= 1
  if (nextIndexY < 0) 
    nextIndexY += 1
  if (nextIndexY > typeFactor) 
    nextIndexY -= 1

  nextX := nextIndexX*blockWidth
  nextY := nextIndexY*blockHeight

  MouseMove, nextX, nextY, speed
}
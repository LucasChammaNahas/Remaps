
#If $navMouseController = 1

  #!i:: moveMouse("up",    "big")
  #!k:: moveMouse("down",  "big")
  #!j:: moveMouse("left",  "big")
  #!l:: moveMouse("right", "big")

  ^#!i:: moveMouse("up",    "medium")
  ^#!k:: moveMouse("down",  "medium")
  ^#!j:: moveMouse("left",  "medium")
  ^#!l:: moveMouse("right", "medium")

  ^!i:: moveMouse("up",    "small")
  ^!k:: moveMouse("down",  "small")
  ^!j:: moveMouse("left",  "small")
  ^!l:: moveMouse("right", "small")

  #!o::
  ^#!o::
  ^!o::
    click right
  return

  #!u::
  ^#!u::
  ^!u::
    Send {Click}
  return

#If




;==> FUNCTIONS <=====================================================

moveMouse(dir, type)
{
  speed := 1
  stepSize := A_ScreenWidth / 10
  if(type = "medium")
    stepSize := A_ScreenWidth / 100
  if(type = "small")
    stepSize := 3

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
  y := stepY * stepSize * A_ScreenHeight / A_ScreenWidth

  MouseMove, x, y, speed, R
}


gridMoveMouse(dir, type)
{
  speed := 5
  typeFactor := type="fine" ? 25 : 5
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

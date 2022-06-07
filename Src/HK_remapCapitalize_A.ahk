
global $toggle_capitalize := 1
global $cap_delay:=0

hotkey,$~space,_capitalize,on 

_capitalize() {  
  critical on
  if($toggle_capitalize = 0){ ;Toggles On/Off
    hotkey,$~space,_capitalize,on
    return
  }
  hotkey,$space,_null,on ;avoids aaaaaaa
  $cap_delay := a_tickcount + 300
  wEnd       := false
  while(GetKeyState("space","P")) {
    if (!wEnd and a_tickcount > $cap_delay) {
      sendinput {backspace} 
      wEnd := true
      SetCapsLockState % !GetKeyState("CapsLock", "T")
    }
    sleep 10
  }
  if(wEnd){
    SetCapsLockState % !GetKeyState("CapsLock", "T")
  }
  hotkey,$~space,_capitalize,on   
  Return
} 


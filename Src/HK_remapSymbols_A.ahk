/* 
; Q <    W =    E >    R -    T %    |    Y *    U '    I (    O )    P _
; A @    S $    D ?    F !    G ~    |    H &    J "    K [    L ]    ; :
; Z +    X #    C Ç    V ^    B ß    |    N |    M `    , {    . }    / \
*/

global $toggle_symbols := 1 ; começa ligado/desligado 
global $symbols_delay := 0

alphabet := "abcdefghijklmnopqrstuvwxyz"
loop,parse,alphabet 
{
	hotkey,~%a_loopfield%,_symbols,on 
}
hotkey,~SC27,_symbols,on 
hotkey,~SC33,_symbols,on 
hotkey,~SC34,_symbols,on 
hotkey,~SC35,_symbols,on 

_symbols() {  
  critical on
  stringtrimleft,key,a_thishotkey,1 ;removes ~
  if($toggle_symbols = 0){ ;Toggles On/Off
    hotkey,~%key%,_symbols,on
    return
  }
  hotkey,%key%,_null,on ;avoids aaaaaaa
  $symbols_delay := a_tickcount + 250
  swapped        := 0
  symbolsObj     := _symbolsObj()
  symbol         := symbolsObj[key]
  while(GetKeyState(key,"P")) { ;while key is pressed 
    if(swapped=0 and a_tickcount > $symbols_delay) {
      sendinput {backspace}%symbol%  
      swapped++
    }
    if(swapped=1){
      if(GetKeyState("a","P") and GetKeyState("i","P")){
        sleep 10
        sendinput {backspace}{backspace}{â}
        swapped++
      }
      if(GetKeyState("a","P") and GetKeyState("j","P")){
        sleep 10
        sendinput {backspace}{backspace}{à}
        swapped++
      }
      if(GetKeyState("a","P") and GetKeyState("k","P")){
        sleep 10
        sendinput {backspace}{backspace}{ã}
        swapped++
      }
      if(GetKeyState("a","P") and GetKeyState("l","P")){
        sleep 10
        sendinput {backspace}{backspace}{á}
        swapped++
      }
      if(GetKeyState("a","P") and GetKeyState(";","P")){
        sleep 10
        sendinput {backspace}{backspace}{ä}
        swapped++
      }

      
      if(GetKeyState("e","P") and GetKeyState("i","P")){
        sleep 10
        sendinput {backspace}{backspace}{ê}
        swapped++
      }
      if(GetKeyState("e","P") and GetKeyState("l","P")){
        sleep 10
        sendinput {backspace}{backspace}{é}
        swapped++
      }

      
      if(GetKeyState("i","P") and GetKeyState("f","P")){
        sleep 10
        sendinput {backspace}{backspace}{í}
        swapped++
      }

      
      if(GetKeyState("o","P") and GetKeyState("e","P")){
        sleep 10
        sendinput {backspace}{backspace}{ô}
        swapped++
      }
      if(GetKeyState("o","P") and GetKeyState("f","P")){
        sleep 10
        sendinput {backspace}{backspace}{ó}
        swapped++
      }
      if(GetKeyState("o","P") and GetKeyState("d","P")){
        sleep 10
        sendinput {backspace}{backspace}{õ}
        swapped++
      }
      if(GetKeyState("o","P") and GetKeyState("a","P")){
        sleep 10
        sendinput {backspace}{backspace}{ö}
        swapped++
      }

      
      if(GetKeyState("u","P") and GetKeyState("f","P")){
        sleep 10
        sendinput {backspace}{backspace}{ú}
        swapped++
      }
      if(GetKeyState("u","P") and GetKeyState("a","P")){
        sleep 10
        sendinput {backspace}{backspace}{ü}
        swapped++
      }
    }
    sleep 20
  }
  hotkey,~%key%,_symbols,on  ;assign key back to this event
  Return
}
_null(){
  return
}
_symbolsObj(){
  obj := {a:"@",b:"ß",c:"ç",d:"?",e:">",f:"{!}",g:"~",h:"{&}",i:"(",j:"{""}",k:"[",l:"]",m:"{``}",n:"{|}",o:")",p:"_",q:"<",r:"-",s:"$",t:"{%}",u:"{'}",v:"{^}",w:"=",x:"{#}",y:"{*}",z:"{+}","SC33":"{{}","SC34":"{}}","SC27":":","SC35":"\"} 
  Return obj
}  

/*
  
>>ao segurar a e, apos a transformacão, apertar o, resulta em ö
  ha um erro de logica nesse sistema, corrigir (ele ve apenas as 
  duas teclas apertadas simultaneamente, não a ordem delas)

>>ao terminar um HS, se a tecla de acionamento não for o espaço
  e o espaco for inserido na sequencia e outra tecla depois do espaco
  (ex. vc, eu => vvocê,eu)

*/
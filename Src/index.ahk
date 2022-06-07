
; SCRIPTS - carregados antes
; ==============================================================
; #Include, %A_LineFile%\..\HK_remapSymbols_A.ahk
; #Include, %A_LineFile%\..\HK_remapCapitalize_A.ahk 
; ==============================================================


; :: - carregados depois

; HOTSTRINGS
; ==============================================================
#Include, %A_LineFile%\..\Hotstrings\emojis.ahk
#Include, %A_LineFile%\..\Hotstrings\general.ahk
#Include, %A_LineFile%\..\Hotstrings\programming.ahk
#Include, %A_LineFile%\..\Hotstrings\symbols.ahk
; #Include, %A_LineFile%\..\SC_folders_B.ahk
; #Include, %A_LineFile%\..\SC_programs_B.ahk



; #Include, %A_LineFile%\..\HK_misc_B.ahk
; #Include, %A_LineFile%\..\HK_chrome_B.ahk
; #Include, %A_LineFile%\..\HK_listary_B.ahk
; ==============================================================


; INICIALIZAÇÃO DE VARIAVEIS
; ==============================================================
; ^F2:: 
; $toggle_symbols    := !$toggle_symbols
; $toggle_capitalize := !$toggle_capitalize
; msgbox %$toggle_symbols%
; return
 
; ^ESC::exitapp
; ==============================================================


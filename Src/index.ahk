
; SCRIPTS - carregados antes
; ==============================================================
; #Include, %A_LineFile%\..\HK_remapSymbols_A.ahk
; #Include, %A_LineFile%\..\HK_remapCapitalize_A.ahk 
; ==============================================================


; LABELS:: - carregados depois
; ==============================================================
; #Include, %A_LineFile%\..\SC_folders_B.ahk
; #Include, %A_LineFile%\..\SC_programs_B.ahk

msgbox, FUNCIONA PORRA CARALHO
#Include, %A_LineFile%\..\HS_hotstrings_B.ahk


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


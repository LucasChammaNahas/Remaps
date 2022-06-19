#NoEnv                      ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn                     ; Enable warnings to assist with detecting common errors.
#SingleInstance FORCE       ; Skip invocation dialog box and silently replace previously executing instance of this script.
CoordMode, Mouse, Screen
SetMouseDelay, 0
SendMode Input              ; Recommended for new scripts due to its superior speed and reliability.
; SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#Include, %A_LineFile%\..\Config\globalVariables.ahk

; SCRIPTS - carregados antes
; ==============================================================
; #Include, %A_LineFile%\..\HK_remapSymbols_A.ahk
; #Include, %A_LineFile%\..\HK_remapCapitalize_A.ahk 
; ==============================================================


; :: - carregados depois

; HOTSTRINGS
; ==============================================================
#Include, %A_LineFile%\..\Hotstrings\accents.ahk
#Include, %A_LineFile%\..\Hotstrings\general.ahk
#Include, %A_LineFile%\..\Hotstrings\programming.ahk
#Include, %A_LineFile%\..\Hotstrings\emojis.ahk

#Include, %A_LineFile%\..\Hotkeys\general.ahk
#Include, %A_LineFile%\..\Hotkeys\textNavigation.ahk
#Include, %A_LineFile%\..\Hotkeys\mouseNavigation.ahk
#Include, %A_LineFile%\..\Hotkeys\symbols.ahk

#Include, %A_LineFile%\..\System\disableOfficeButton.ahk
#Include, %A_LineFile%\..\System\powerManagement.ahk
#Include, %A_LineFile%\..\System\system.ahk
#Include, %A_LineFile%\..\System\listary.ahk
#Include, %A_LineFile%\..\System\windowManipulation.ahk
#Include, %A_LineFile%\..\System\clipboard.ahk
; #Include, %A_LineFile%\..\SC_folders_B.ahk
; #Include, %A_LineFile%\..\SC_programs_B.ahk



; #Include, %A_LineFile%\..\HK_misc_B.ahk
; #Include, %A_LineFile%\..\HK_chrome_B.ahk
; #Include, %A_LineFile%\..\HK_listary_B.ahk
; ==============================================================


; INICIALIZAÇÃO DE VARIAVEIS
; ==============================================================
#Include, %A_LineFile%\..\Controller\Controller.ahk


; ==============================================================


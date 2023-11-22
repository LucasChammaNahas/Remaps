--[[










.d88888b             oo   dP            dP       oo                   
88.    "'                 88            88                            
`Y88888b. dP  dP  dP dP d8888P .d8888b. 88d888b. dP 88d888b. .d8888b. 
      `8b 88  88  88 88   88   88'  `"" 88'  `88 88 88'  `88 88'  `88 
d8'   .8P 88.88b.88' 88   88   88.  ... 88    88 88 88    88 88.  .88 
 Y88888P  8888P Y8P  dP   dP   `88888P' dP    dP dP dP    dP `8888P88 
                                                                  .88 
                                                              d8888P   

]] --
--
-- Visual Line
remapNvim('n', 'cv', 'V')
remapNvim('v', 'cv', 'V')

-- Visual Block
remapNvim('n', 'cc', '<C-v>')
remapNvim('n', 'C', '<C-v>')
remapNvim('v', 'cc', '<C-v>')
remapNvim('v', 'C', '<C-v>')

--[[










dP                                       dP   
88                                       88   
88 88d888b. .d8888b. .d8888b. 88d888b. d8888P 
88 88'  `88 Y8ooooo. 88ooood8 88'  `88   88   
88 88    88       88 88.  ... 88         88   
dP dP    dP `88888P' `88888P' dP         dP   

]]

-- Insert before
remapNvim('n', 'u', 'i')
remapNvim('v', 'u', 'i')

-- Insert start of line
remapNvim('n', 'U', 'I')
remapNvim('v', 'U', 'I')

-- Insert after
remapNvim('n', 'o', 'a')
remapNvim('v', 'o', 'a')

-- Insert end of line
remapNvim('n', 'O', 'A')
remapNvim('v', 'O', 'A')

--[[










***************************************************************************************************

888b     d888                                                            888             
8888b   d8888                                                            888             
88888b.d88888                                                            888             
888Y88888P888  .d88b.  888  888  .d88b.  88888b.d88b.   .d88b.  88888b.  888888 .d8888b  
888 Y888P 888 d88""88b 888  888 d8P  Y8b 888 "888 "88b d8P  Y8b 888 "88b 888    88K      
888  Y8P  888 888  888 Y88  88P 88888888 888  888  888 88888888 888  888 888    "Y8888b. 
888   "   888 Y88..88P  Y8bd8P  Y8b.     888  888  888 Y8b.     888  888 Y88b.       X88 
888       888  "Y88P"    Y88P    "Y8888  888  888  888  "Y8888  888  888  "Y888  88888P' 
     
***************************************************************************************************
]]

--[[










888888ba                    oo          
88    `8b                               
a88aaaa8P'.d8888b. .d8888b. dP .d8888b. 
88   `8b. 88'  `88 Y8ooooo. 88 88'  `"" 
88    .88 88.  .88       88 88 88.  ... 
88888888P `88888P8 `88888P' dP `88888P' 

]]

-- Up
remapNvim('n', 'i', 'k')
remapNvim('v', 'i', 'k')

-- Up Strong
remapNvim('n', 'I', '3k')
remapNvim('v', 'I', '3k')

-- Down
remapNvim('n', 'k', 'j')
remapNvim('v', 'k', 'j')

-- Down Strong
remapNvim('n', 'K', '3j')
remapNvim('v', 'K', '3j')

-- Left
remapNvim('n', 'j', 'h')
remapNvim('v', 'j', 'h')

-- Left Strong
remapNvim('n', 'J', '2h')
remapNvim('v', 'J', '2h')

-- Right Strong
remapNvim('n', 'L', '2l')
remapNvim('v', 'L', '2l')

--[[










dP        oo                   
88                             
88        dP 88d888b. .d8888b. 
88        88 88'  `88 88ooood8 
88        88 88    88 88.  ... 
88888888P dP dP    dP `88888P' 

]]

-- Home
remapNvim('n', 'h', '^')
remapNvim('v', 'h', '^')

-- Home Strong
remapNvim('n', 'H', '0')
remapNvim('v', 'H', '0')

-- End
remapNvim('n', ';', 'g_')
remapNvim('v', ';', 'g_')

-- End Strong
remapNvim('n', ':', '$')
remapNvim('v', ':', '$')

--[[










d888888P                                      dP                  dP 
  88                                          88                  88 
  88    .d8888b. 88d888b. .d8888b. .d8888b. d8888P .d8888b. .d888b88 
  88    88'  `88 88'  `88 88'  `88 88ooood8   88   88ooood8 88'  `88 
  88    88.  .88 88       88.  .88 88.  ...   88   88.  ... 88.  .88 
  dP    `88888P8 dP       `8888P88 `88888P'   dP   `88888P' `88888P8 
                               .88                                   
                           d8888P      

]]

-- Target
remapNvim('n', '(', 'f')
remapNvim('v', '(', 'f')

-- Target backwards
remapNvim('n', ')', 'F')
remapNvim('v', ')', 'F')

-- Repeat target
remapNvim('n', ',', ';')
remapNvim('v', ',', ';')

--[[









***************************************************************************************************

.d88888b.                                      888                              
d88P" "Y88b                                    888                              
888     888                                    888                              
888     888 88888b.   .d88b.  888d888  8888b.  888888  .d88b.  888d888 .d8888b  
888     888 888 "88b d8P  Y8b 888P"       "88b 888    d88""88b 888P"   88K      
888     888 888  888 88888888 888     .d888888 888    888  888 888     "Y8888b. 
Y88b. .d88P 888 d88P Y8b.     888     888  888 Y88b.  Y88..88P 888          X88 
"Y88888P"   88888P"   "Y8888  888     "Y888888  "Y888  "Y88P"  888      88888P' 
            888                                                                 
            888                                                                 
            888                                                                 
          
***************************************************************************************************
]]

-- Select word
remapNvim('n', 'w', 'viw')

-- Select WORD
remapNvim('n', 'W', 'EvB')

-- Select WORD
remapNvim('n', 'e', 'EvB')

-- One time insert right
remapNvim('n', 'nr', 'a <ESC> r')

-- One time insert left
remapNvim('n', 'gr', 'i <ESC> r')

--[[










 a88888b.                            
d8'   `88                            
88        .d8888b. .d8888b. .d8888b. 
88        88'  `88 Y8ooooo. 88ooood8 
Y8.   .88 88.  .88       88 88.  ... 
 Y88888P' `88888P8 `88888P' `88888P' 

]]

-- Toggle case operator
remapNvim('n', '<Leader>y', 'g~')
remapNvim('v', '<Leader>y', '~')

-- Lowercase operator
remapNvim('n', '<Leader>u', 'gu')
remapNvim('v', '<Leader>u', 'u')

-- Uppercase operator
remapNvim('n', '<Leader>U', 'gU')
remapNvim('v', '<Leader>U', 'U')

-- Toggle case
remapNvim('n', 'y', '~')
remapNvim('v', 'y', '~')

--[[










dP    dP                   dP       
Y8.  .8P                   88       
 Y8aa8P  .d8888b. 88d888b. 88  .dP  
   88    88'  `88 88'  `88 88888"   
   88    88.  .88 88    88 88  `8b. 
   dP    `88888P8 dP    dP dP   `YP      

]]

-- Yank
remapNvim('n', 'd', 'y')
remapNvim('v', 'd', 'y')
-- remapNvim('p', 'd', 'y')

-- Yank to register A
-- remapNvim('n', 'nd', '"ay')
-- remapNvim('v', 'nd', '"ay')
-- remapNvim('p', 'nd', '"ay')

-- Yank to register B
remapNvim('n', 'nnd', '"by')
remapNvim('v', 'nnd', '"by')
-- remapNvim('p', 'nnd', '"by')

-- Yank to register C
remapNvim('n', 'nnnd', '"cy')
remapNvim('v', 'nnnd', '"cy')
-- remapNvim('p', 'nnnd', '"cy')

-- Yank word
remapNvim('n', 'dd', 'viwy')

-- Yank word to register A
remapNvim('n', 'ndd', 'viw"_ayy')

-- Yank word to register B
remapNvim('n', 'nndd', 'viw"by')

-- Yank word to register C
remapNvim('n', 'nnndd', 'viw"cy')

-- Yank WORD
remapNvim('n', 'DD', 'EvBy')

-- Yank WORD to register A
remapNvim('n', 'NDD', 'EvB"ay')

-- Yank WORD to register B
remapNvim('n', 'NNDD', 'EvB"by')

-- Yank WORD to register C
remapNvim('n', 'NNNDD', 'EvB"cy')

-- Yank line
remapNvim('n', 'dk', 'yy')

-- Yank line to register A
remapNvim('n', 'ndk', '"ay')

-- Yank line to register B
remapNvim('n', 'nndk', '"by')

-- Yank line to register C
remapNvim('n', 'nnndk', '"cy')

--[[










 a88888b. dP                                           
d8'   `88 88                                           
88        88d888b. .d8888b. 88d888b. .d8888b. .d8888b. 
88        88'  `88 88'  `88 88'  `88 88'  `88 88ooood8 
Y8.   .88 88    88 88.  .88 88    88 88.  .88 88.  ... 
 Y88888P' dP    dP `88888P8 dP    dP `8888P88 `88888P' 
                                         .88          
                                     d8888P      

]]

-- Change delete
remapNvim('n', 'x', '"_c')
remapNvim('v', 'x', '"_c')
-- remapNvim('p', 'x', '"_c')

-- Change cut to register A
remapNvim('n', 'nx', '"ac')
remapNvim('v', 'nx', '"ac')
-- remapNvim('p', 'nx', '"ac')

-- Change cut to register B
remapNvim('n', 'nnx', '"bc')
remapNvim('v', 'nnx', '"bc')
-- remapNvim('p', 'nnx', '"bc')

-- Change cut to register C
remapNvim('n', 'nnnx', '"cc')
remapNvim('v', 'nnnx', '"cc')
-- remapNvim('p', 'nnnx', '"cc')

-- Change delete word
remapNvim('n', 'xx', 'viw"_c')

-- Change cut word to register A
remapNvim('n', 'nxx', 'viw"ac')

-- Change cut word to register B
remapNvim('n', 'nnxx', 'viw"bc')

-- Change cut word to register C
remapNvim('n', 'nnnxx', 'viw"cc')

-- Change delete WORD
remapNvim('n', 'XX', 'EvB"_c')

-- Change cut WORD to register A
remapNvim('n', 'NXX', 'EvB"ac')

-- Change cut WORD to register B
remapNvim('n', 'NNXX', 'EvB"bc')

-- Change cut WORD to register C
remapNvim('n', 'NNNXX', 'EvB"cc')

-- Change delete line
remapNvim('n', 'xk', '"_cc')

-- Change cut line to register A
remapNvim('n', 'nxk', '"acc')

-- Change cut line to register B
remapNvim('n', 'nnxk', '"bcc')

-- Change cut line to register C
remapNvim('n', 'nnnxk', '"ccc')

--[[










888888ba           dP            dP            
88    `8b          88            88            
88     88 .d8888b. 88 .d8888b. d8888P .d8888b. 
88     88 88ooood8 88 88ooood8   88   88ooood8 
88    .8P 88.  ... 88 88.  ...   88   88.  ... 
8888888P  `88888P' dP `88888P'   dP   `88888P' 

]]

-- Delete
remapNvim('n', 's', '"_d')
remapNvim('v', 's', '"_d')
-- remapNvim('p', 's', '"_d')

-- Delete word
remapNvim('n', 'ss', 'viw"_d')

-- Delete WORD
remapNvim('n', 'SS', 'EvB"_d')

-- Delete line
remapNvim('n', 'sk', '"_dd')

--[[










 a88888b.            dP   
d8'   `88            88   
88        dP    dP d8888P 
88        88    88   88   
Y8.   .88 88.  .88   88   
 Y88888P' `88888P'   dP 

]]

-- Cut
remapNvim('n', 'a', 'd')
remapNvim('v', 'a', 'd')
-- remapNvim('p', 'a', 'd')

-- Cut to register A
remapNvim('n', 'na', '"a', 'd')
remapNvim('v', 'na', '"a', 'd')
-- remapNvim('p', 'na', '"a', 'd')

-- Cut to register B
remapNvim('n', 'nna', '"b', 'd')
remapNvim('v', 'nna', '"b', 'd')
-- remapNvim('p', 'nna', '"b', 'd')

-- Cut to register C
remapNvim('n', 'nnna', '"c', 'd')
remapNvim('v', 'nnna', '"c', 'd')
-- remapNvim('p', 'nnna', '"c', 'd')

-- Cut word
remapNvim('n', 'aa', 'viw d')

-- Cut word to register A
remapNvim('n', 'naa', 'viw "', 'a', 'd')

-- Cut word to register B
remapNvim('n', 'nnaa', 'viw "', 'b', 'd')

-- Cut word to register C
remapNvim('n', 'nnnaa', 'viw "', 'c', 'd')

-- Cut WORD
remapNvim('n', 'AA', 'EvB d')

-- Cut WORD to register A
remapNvim('n', 'NAA', 'EvB "', 'a', 'd')

-- Cut WORD to register B
remapNvim('n', 'NNA', 'EvB "', 'b', 'd')

-- Cut WORD to register C
remapNvim('n', 'NNNAA', 'EvB "', 'c', 'd')

-- Cut line
remapNvim('n', 'ak', 'dd')

-- Cut line to register A
remapNvim('n', 'nak', '"a', 'dd')

-- Cut line to register B
remapNvim('n', 'nnak', '"b', 'dd')

-- Cut line to register C
remapNvim('n', 'nnnak', '"c', 'dd')

--[[










888888ba                      dP            
88    `8b                     88            
a88aaaa8P' .d8888b. .d8888b. d8888P .d8888b. 
88        88'  `88 Y8ooooo.   88   88ooood8 
88        88.  .88       88   88   88.  ... 
dP        `88888P8 `88888P'   dP   `88888P' 

]]

-- (gvy solves text being copied as it is pasted on visual)

-- Paste
remapNvim('n', 'f', 'gP')
remapNvim('v', 'f', 'gPgvy')
remapNvim('v', 'p', 'pgvy')

-- Paste from register A
remapNvim('n', 'nf', '"agP')
remapNvim('n', 'np', '"ap')
remapNvim('v', 'nf', '"agPgvy')
remapNvim('v', 'np', '"apgvy')

-- Paste from register B
remapNvim('n', 'nnf', '"bgP')
remapNvim('n', 'nnp', '"bp')
remapNvim('v', 'nnf', '"bgPgvy')
remapNvim('v', 'nnp', '"bpgvy')

-- Paste from register C
remapNvim('n', 'nnnf', '"cgP')
remapNvim('n', 'nnnp', '"cp')
remapNvim('v', 'nnnf', '"cgPgvy')
remapNvim('v', 'nnnp', '"cpgvy')

-- Paste secondary
remapNvim('n', 'F', 'gp')
remapNvim('v', 'F', 'gpgvy')

-- Paste secondary
remapNvim('v', 'P', 'Pgvy')

--[[









***************************************************************************************************

 .d8888b.                                                              888          
d88P  Y88b                                                             888          
888    888                                                             888          
888         .d88b.  88888b.d88b.  88888b.d88b.   8888b.  88888b.   .d88888 .d8888b  
888        d88""88b 888 "888 "88b 888 "888 "88b     "88b 888 "88b d88" 888 88K      
888    888 888  888 888  888  888 888  888  888 .d888888 888  888 888  888 "Y8888b. 
Y88b  d88P Y88..88P 888  888  888 888  888  888 888  888 888  888 Y88b 888      X88 
 "Y8888P"   "Y88P"  888  888  888 888  888  888 "Y888888 888  888  "Y88888  88888P' 
           
***************************************************************************************************
]]

-- Undo 
remapVsCode('n', 'z', 'undo')
remapVsCode('v', 'z', 'undo')

-- Redo
remapVsCode('n', 'Z', 'redo')
remapVsCode('v', 'Z', 'redo')

-- Insert line below and enter insert mode
remapNvim('n', '<Enter>', 'o')
remapNvim('v', '<Enter>', 'o')

-- Insert line above and enter insert mode fix
remapNvim('n', 'gzj', 'O')
remapNvim('v', 'gzj', 'O')

-- Insert command
remapNvim('n', '|', ':')
remapNvim('v', '|', ':')

-- Join with line below with space
remapNvim('n', '<Leader>l', 'J')

-- Put cursor at start of selection
remapNvim('v', '<Leader>j', 'O')

-- Put cursor at end of selection
remapNvim('v', '<Leader>l', 'o')

--[[










.d88888b                             
88.    "'                            
`Y88888b. .d8888b. dP   .dP .d8888b. 
      `8b 88'  `88 88   d8' 88ooood8 
d8'   .8P 88.  .88 88 .88'  88.  ... 
Y88888P   `88888P8 8888P'   `88888P' 

]]

-- Save file
remapVsCode('n', '<Leader>s', 'workbench.action.files.save')
remapVsCode('v', '<Leader>s', 'workbench.action.files.save')

-- Save all files
remapVsCode('n', '<Leader><Leader>s', 'saveAll')
remapVsCode('v', '<Leader><Leader>s', 'saveAll')

-- Close editor
remapVsCode('n', '<Leader>ww', 'workbench.action.closeActiveEditor')

-- Close window
remapNvim('n', '<Leader>WW', 'ZQ')

--[[










8888ba.88ba                    dP                
88  `8b  `8b                   88                
88   88   88 .d8888b. 88d888b. 88  .dP  .d8888b. 
88   88   88 88'  `88 88'  `88 88888"   Y8ooooo. 
88   88   88 88.  .88 88       88  `8b.       88 
dP   dP   dP `88888P8 dP       dP   `YP `88888P' 

]]

-- Go to mark
remapNvim('n', 'm', '`')
remapNvim('v', 'm', '`')

-- Set to mark
remapNvim('n', 'mm', 'm')
remapNvim('v', 'mm', 'm')

--[[









***************************************************************************************************

 .d8888b.                            888 888 
d88P  Y88b                           888 888 
Y88b.                                888 888 
 "Y888b.    .d8888b 888d888  .d88b.  888 888 
    "Y88b. d88P"    888P"   d88""88b 888 888 
      "888 888      888     888  888 888 888 
Y88b  d88P Y88b.    888     Y88..88P 888 888 
 "Y8888P"   "Y8888P 888      "Y88P"  888 888                                                                
          
***************************************************************************************************
]]

-- Maps z to b
remapNvim('n', 'b', 'z')
remapNvim('v', 'b', 'z')

-- Maps Z to b
remapNvim('n', 'B', 'z')
remapNvim('v', 'B', 'z')

-- Scroll page until cursor is on center
remapNvim('n', 'bj', 'zz')
remapNvim('v', 'bj', 'zz')

-- Scroll page until cursor is on top
remapNvim('n', 'bk', 'zt')
remapNvim('v', 'bk', 'zt')

-- Scroll page until cursor is at the bottom
remapNvim('n', 'bi', 'zb')
remapNvim('v', 'bi', 'zb')

--[[









***************************************************************************************************

 .d8888b.           
d88P  Y88b          
888    888          
888         .d88b.  
888  88888 d88""88b 
888    888 888  888 
Y88b  d88P Y88..88P 
 "Y8888P88  "Y88P"                                                                  
          
***************************************************************************************************
]]
-- Go to global definition
remapNvim('n', 'ggd', 'gD')
remapNvim('v', 'ggd', 'gD')

-- Go to top of screen
remapNvim('n', 'gi', 'H')
remapNvim('v', 'gi', 'H')

-- Go to middle of screen
remapNvim('n', 'gj', 'M')
remapNvim('v', 'gj', 'M')

-- Go to bottom of screen
remapNvim('n', 'gk', 'L')
remapNvim('v', 'gk', 'L')

-- Go to top of document
remapNvim('n', 'ggi', 'gg')
remapNvim('v', 'ggi', 'gg')

-- Go to bottom of document
remapNvim('n', 'ggk', 'G')
remapNvim('v', 'ggk', 'G')

-- Go back in change list
remapNvim('n', 'gn', 'g;')
remapNvim('v', 'gn', 'g;')

-- Go forth in change list
remapNvim('n', 'ggn', 'g,')
remapNvim('v', 'ggn', 'g,')

-- Indent line
remapVsCode('n', 'go', 'workbench.action.indentLines')
remapVsCode('v', 'go', 'workbench.action.indentLines')

-- Outdent line
remapVsCode('n', 'gu', 'workbench.action.outdentLines')
remapVsCode('v', 'gu', 'workbench.action.outdentLines')

--[[








  
***************************************************************************************************

 .d8888b.           888 888                                     
d88P  Y88b          888 888                                     
888    888          888 888                                     
888         .d88b.  888 888  8888b.  88888b.  .d8888b   .d88b.  
888        d88""88b 888 888     "88b 888 "88b 88K      d8P  Y8b 
888    888 888  888 888 888 .d888888 888  888 "Y8888b. 88888888 
Y88b  d88P Y88..88P 888 888 888  888 888 d88P      X88 Y8b.     
 "Y8888P"   "Y88P"  888 888 "Y888888 88888P"   88888P'  "Y8888  
                                    888                        
                                    888                        
                                    888                                                                  
          
***************************************************************************************************
]]

-- Manually define a fold up to motion
remapNvim('n', 'th', 'zf')
remapNvim('v', 'th', 'zf')

-- Delete fold
remapNvim('n', 'ts', 'zd')
remapNvim('v', 'ts', 'zd')

-- Toggle collapse region
remapVsCode('n', 'tj', 'editor.toggleFold')
remapVsCode('v', 'tj', 'editor.toggleFold')

-- Collapse region 1
remapVsCode('n', 'ty', 'editor.foldLevel1')
remapVsCode('v', 'ty', 'editor.foldLevel1')

-- Collapse region 2
remapVsCode('n', 'tu', 'editor.foldLevel2')
remapVsCode('v', 'tu', 'editor.foldLevel2')

-- Collapse region 3
remapVsCode('n', 'ti', 'editor.foldLevel3')
remapVsCode('v', 'ti', 'editor.foldLevel3')

-- Collapse region 4
remapVsCode('n', 'to', 'editor.foldLevel4')
remapVsCode('v', 'to', 'editor.foldLevel4')

-- Collapse region 5
remapVsCode('n', 'tp', 'editor.foldLevel5')
remapVsCode('v', 'tp', 'editor.foldLevel5')

-- Collapse all
remapVsCode('n', 'TT', 'editor.foldAll')
remapVsCode('v', 'TT', 'editor.foldAll')

-- Uncollapse all
remapVsCode('n', 'tt', 'editor.unfoldAll')
remapVsCode('v', 'tt', 'editor.unfoldAll')


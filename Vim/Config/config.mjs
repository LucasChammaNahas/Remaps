import { getTargetedMotions } from './getTargetedMotions.mjs';
import { getTextCommands } from './getTextCommands.mjs';

export const config = [
   {
      group: 'Mode Switching',
      modes: ['normal', 'visual'],
      mappings: [
         {
            description: 'Visual Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['cv'],
                  command: 'V',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Visual Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['cc'],
                  command: '<C-v>',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Basic Motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Move Cursor Up',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['i'],
                  command: 'k',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Move Cursor Down',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['k'],
                  command: 'j',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Move Cursor Left',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['j'],
                  command: 'h',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Move Cursor Right',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['l'],
                  command: 'l',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Big Block Motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Move Cursor a Big Block Up',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+i'],
                  command: '20i',
                  when: 'editorFocus',
               },
               {
                  // Todo
                  type: 'neovim',
               },
            ],
         },
         {
            description: 'Move Cursor a Big Block Down',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+k'],
                  command: '20k',
                  removeCommand: '-editor.action.deleteLines',
                  when: 'editorFocus',
               },
               {
                  // Todo
                  type: 'neovim',
               },
            ],
         },
         {
            description: 'Move Cursor a Big Block Left',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['J'],
                  command: '20h',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Move Cursor a Big Block Right',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['L'],
                  command: '20l',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Fast Motions',
      modes: ['normal', 'visual'],
      mappings: [
         {
            description: 'Move Cursor Strong Up',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['up'],
                  command: '2i',
                  when: 'editorTextFocus && vim.mode != "Insert"',
               },
            ],
         },
         {
            description: 'Move Cursor Strong Down',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['down'],
                  command: '2k',
                  when: 'editorTextFocus && vim.mode != "Insert"',
               },
            ],
         },
         {
            description: 'Move Cursor Strong Left',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['left'],
                  command: '2j',
                  when: 'editorTextFocus && vim.mode != "Insert"',
               },
            ],
         },
         {
            description: 'Move Cursor Strong Right',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['right'],
                  command: '2l',
                  when: 'editorTextFocus && vim.mode != "Insert"',
               },
            ],
         },
      ],
   },

   {
      group: 'Word Motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Go to Start of Next Word',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['w;'],
                  command: 'w',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Start of Next WORD',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ww;'],
                  command: 'W',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to End of Current Word',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wl'],
                  command: 'e',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to End of Current WORD',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wwl'],
                  command: 'E',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Start of Current Word',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wj'],
                  command: 'b',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Start of Current WORD',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wwj'],
                  command: 'B',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to End of Previous Word',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wh'],
                  command: 'ge',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to End of Previous WORD',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['wwh'],
                  command: 'gE',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Wide Motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Go to Start of Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['h'],
                  command: '^',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to End of Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: [';'],
                  command: 'g_',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Top of Screen',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gi'],
                  command: 'H',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Middle of Screen',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gj'],
                  command: 'M',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Bottom of Screen',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gk'],
                  command: 'L',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Top of Document',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ggi'],
                  command: 'gg',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Bottom of Document',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ggk'],
                  command: 'G',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Scroll Motions',
      modes: ['normal', 'visual'],
      mappings: [
         {
            description: 'Scroll Page Up (Until Cursor is at Bottom)',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['go'],
                  command: 'zb',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Scroll Page Until Cursor is at Center',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['g.'],
                  command: 'zz',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Scroll Page Down (Until Cursor is at Top)',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gl'],
                  command: 'zt',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Scroll Page Up Moving Cursor',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['I'],
                  command: '<C-u>',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Scroll Page Down Moving Cursor',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['K'],
                  command: '<C-d>',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Scroll Page Up',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+u'],
                  command: '<C-y>',
                  removeCommand: '-workbench.action.output.toggleOutput',
                  when: 'editorFocus',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Scroll Page Down',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+j'],
                  command: '<C-e>',
                  when: 'editorFocus',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
      ],
   },

   {
      group: 'Targeted Motions',
      // Todo
   },

   {
      group: 'Block Selection Motions',
      modes: ['visual'],
      mappings: [
         {
            description: 'Select Inner {} Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['uj'],
                  command: 'i{',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer {} Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['oj'],
                  command: 'a{',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Inner [] Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ue'],
                  command: 'i[',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer [] Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['oe'],
                  command: 'a[',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Inner () Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['us'],
                  command: 'i(',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer () Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['os'],
                  command: 'a(',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Inner <> Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['uu'],
                  command: 'i<',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer <> Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ou'],
                  command: 'a<',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Inner "" Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ["u'"],
                  command: 'i"',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer "" Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ["o'"],
                  command: 'a"',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Inner `` Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['uh'],
                  command: 'i`',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Select Outer `` Block',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['oh'],
                  command: 'a`',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: "Select Inner '' Block",
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ul'],
                  command: "i'",
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: "Select Outer '' Block",
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ol'],
                  command: "a'",
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Text Commands',
      // Todo
   },

   {
      group: 'Insert Commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Inner Selector',
            modes: ['pending'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['u'],
                  command: 'i',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Outer Selector',
            modes: ['pending'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['o'],
                  command: 'a',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Cursor Before',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['u'],
                  command: 'i',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Cursor at Start of Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['U'],
                  command: 'I',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Cursor After',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['o'],
                  command: 'a',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Cursor at End of Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['O'],
                  command: 'A',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Line Below and Enter Insert Mode',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['<enter>'],
                  command: 'o',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Line Above and Enter Insert Mode',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['shift+enter'],
                  commandFix: 'gza',
                  command: 'O',
                  when: 'editorTextFocus && vim.mode == "Normal"',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Insert Command on Command Line',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['|'],
                  command: ':',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Case commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Toggle Case',
            modes: ['normal', 'visual'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['yy'],
                  command: '~',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert to Upper Case',
            modes: ['visual'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['yu'],
                  command: 'U',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert to Lower Case',
            modes: ['visual'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['yi'],
                  command: 'u',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Toggle Word Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywy'],
                  command: 'viw~',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert Word to Upper Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywu'],
                  command: 'viwU',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert Word to Lower Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywi'],
                  command: 'viwu',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Toggle WORD Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywwy'],
                  command: 'EvB~',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert WORD to Upper Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywwu'],
                  command: 'EvBU',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Convert WORD to Lower Case',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ywwi'],
                  command: 'EvBu',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'GO Commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Go to Global Declaration',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ggd'],
                  command: 'gD',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Indent Lines',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['co'],
                  command: 'editor.action.indentLines',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Outdent Lines',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['cu'],
                  command: 'editor.action.outdentLines',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
      ],
   },

   {
      group: 'Fold Commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Define a Fold Up Motion',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['th'],
                  command: 'zf',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Delete a Fold Up Motion',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['ts'],
                  command: 'zd',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Toggle Fold Up Motion',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['tj'],
                  command: 'editor.toggleFold',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up Region Level 1',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['ty'],
                  command: 'editor.foldLevel1',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up Region Level 2',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['tu'],
                  command: 'editor.foldLevel2',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up Region Level 3',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['ti'],
                  command: 'editor.foldLevel3',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up Region Level 4',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['to'],
                  command: 'editor.foldLevel4',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up Region Level 5',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['tp'],
                  command: 'editor.foldLevel5',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Fold Up All Levels',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['TT'],
                  command: 'editor.foldAll',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Unfold Up All Levels',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['tt'],
                  command: 'editor.unfoldAll',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
      ],
   },

   {
      group: 'Mark commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Set Mark',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['M'],
                  command: 'm',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go to Mark',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['m'],
                  command: '`',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Copies From the current position up to mark #',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['dm'],
                  command: 'y`',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Change-List Commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Go Back in Change List',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gn'],
                  command: 'g;',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Go Forth in Change List',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['gm'],
                  command: 'g,',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Join line commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Join With Line Below Without Space',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['cj'],
                  command: 'gJ',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Join With Line Below With Space',
            platforms: [
               {
                  type: 'vim',
                  triggers: ['cl'],
                  command: 'J',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
      ],
   },

   {
      group: 'Miscellaneous Commands',
      mappings: [
         {
            description: 'Toggle Extremes of Selected Area',
            modes: ['visual'],
            platforms: [
               {
                  type: 'vim',
                  triggers: ['<enter>'],
                  command: 'o',
               },
               {
                  type: 'neovim',
                  isVimClone: true,
               },
            ],
         },
         {
            description: 'Rename Symbol',
            modes: ['normal'],
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['<leader>r'],
                  command: 'editor.action.rename',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
      ],
   },

   {
      group: 'VSCode Commands',
      mappings: [
         {
            description: 'Delete Left. (Required for Normal Mode)',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['backspace'],
                  command: 'deleteLeft',
                  when: 'textInputFocus',
               },
            ],
         },
         {
            description: 'Delete Right. (Required for Normal Mode)',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['delete'],
                  command: 'deleteRight',
                  when: 'textInputFocus',
               },
            ],
         },
         {
            description: "Trigger Suggestions (Mac Doesn't Work With ctrl+space)",
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+g'],
                  command: 'editor.action.triggerSuggest',
                  when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
                  removeCommand: '-editor.action.nextMatchFindAction',
               },
            ],
         },
         {
            description: 'Trigger Suggestions (Remove Default)',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+i'],
                  command: '-editor.action.triggerSuggest',
                  when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
               },
            ],
         },
         {
            description: 'Trigger Copilot',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+alt+space'],
                  command: 'github.copilot.generate',
                  when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
               },
            ],
         },
         {
            description: 'Disable Copilot When Pressing ctrl+enter',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+enter'],
                  command: '-github.copilot.generate',
                  when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
               },
            ],
         },
         {
            description:
               'Prevents From Going into Normal Mode When Closing Suggest Box (!inDebugRepl is Required for Some Reason)',
            platforms: [
               // This is not mistake. Both are required.
               {
                  type: 'vscode',
                  triggers: ['escape'],
                  command: 'extension.vim_escape',
                  when: 'editorTextFocus && vim.active && !inDebugRepl && !suggestWidgetVisible',
               },
               {
                  type: 'vscode',
                  triggers: ['escape'],
                  command: '-extension.vim_escape',
                  when: 'editorTextFocus && !inDebugRepl && vim.active',
               },
            ],
         },
      ],
   },

   {
      group: 'Peek commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Peek Definition',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['cd'],
                  command: 'editor.action.peekDefinition',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            description: 'Peek Call Hierarchy',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['cf'],
                  command: 'editor.showCallHierarchy',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
         {
            // Investigate this one.
            // looks like it's clashing with other commands.
            description: 'Toggle Peek Call Hierarchy Direction',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+j'],
                  command: 'editor.showOutgoingCalls',
                  when: 'callHierarchyVisible && callHierarchyDirection == "incomingCalls"',
               },
               {
                  type: 'vscode',
                  triggers: ['ctrl+j'],
                  command: 'editor.showIncomingCalls',
                  when: 'callHierarchyVisible && callHierarchyDirection == "outgoingCalls"',
               },
            ],
         },
         {
            description: 'Open Call Hierarchy View',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['bf'],
                  command: 'references-view.showCallHierarchy',
               },
               {
                  type: 'neovim',
                  // Todo
               },
            ],
         },
      ],
   },

   {
      group: 'Save commands',
      modes: ['normal', 'visual'],
      mappings: [
         {
            description: 'Save',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['<leader>s'],
                  command: 'workbench.action.files.save',
               },
               {
                  type: 'vscode',
                  triggers: ['ctrl+e space'],
                  command: 'workbench.action.files.save',
                  when: 'editorFocus && !editorReadonly',
               },
            ],
         },
         {
            description: 'Save All',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['<leader><leader>s'],
                  command: 'saveAll',
               },
               {
                  type: 'vscode',
                  triggers: ['ctrl+shift+s'],
                  command: 'saveAll',
               },
            ],
         },
      ],
   },

   {
      group: 'Close Commands',
      modes: ['normal'],
      mappings: [
         {
            description: 'Close Current Editor',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['q'],
                  command: 'workbench.action.closeActiveEditor',
               },
            ],
         },
         {
            description: 'Close Other Editors in Group',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['Q'],
                  command: 'workbench.action.closeOtherEditors',
               },
            ],
         },
         {
            description: 'Close Current Group',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['<leader>q'],
                  command: 'workbench.action.closeEditorsInGroup',
               },
            ],
         },
         {
            description: 'Close All Editors',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['<leader><leader>q'],
                  command: 'workbench.action.closeAllGroups',
               },
            ],
         },
         {
            description: 'Reopen Closed Editor',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['gq'],
                  command: 'workbench.action.reopenClosedEditor',
               },
            ],
         },
      ],
   },

   {
      group: 'Search and replace commands',
      mappings: [
         {
            description: 'Open Replace',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+d'],
                  command: 'editor.action.startFindReplaceAction',
                  when: 'editorFocus || editorIsOpen',
               },
            ],
         },
         {
            description: 'Removes Default Replace Command',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+h'],
                  command: '-editor.action.startFindReplaceAction',
                  when: 'editorFocus || editorIsOpen',
               },
            ],
         },
      ],
   },

   {
      group: 'Disabled Commands not Related to Other Mappings',
      mappings: [
         {
            description: 'Conflict With Symbols',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['alt+h'],
                  command: '-git.viewFileHistory',
               },
            ],
         },
         {
            description: 'Quit All Instances',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+q'],
                  command: '-workbench.action.quit',
               },
            ],
         },
         {
            description: 'Open View List',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+q'],
                  command: '-workbench.action.quickOpenView',
               },
            ],
         },
         {
            description: 'Toggle Tab Focus Mode',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+m'],
                  command: '-editor.action.toggleTabFocusMode',
               },
            ],
         },
      ],
   },

   {
      group: 'List navigation',
      mappings: [
         {
            description: 'Up',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['i'],
                  command: 'list.focusUp',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Down',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['k'],
                  command: 'list.focusDown',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Collapse Current Item',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['j'],
                  command: 'list.collapse',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Collapse All',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['t y'],
                  command: 'workbench.files.action.collapseExplorerFolders',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Expand Current Item',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['l'],
                  command: 'list.toggleExpand',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Navigate to Top',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['g i'],
                  command: 'list.focusFirst',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Navigate to Bottom',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['g k'],
                  command: 'list.focusLast',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
      ],
   },

   {
      group: 'Sidebar navigation',
      modes: ['normal'],
      mappings: [
         // Todo - Esc might not be the best option for this.
         {
            description: 'Go Back to Editor',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['escape'],
                  command: 'workbench.action.focusActiveEditorGroup',
                  when: '!editorTextFocus && !treeFindOpen && !renameInputVisible && !callHierarchyVisible',
               },
            ],
         },
         {
            description: 'Focus Sidebar',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['b b'],
                  command: 'workbench.action.focusSideBar',
                  when: '!inputFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['bb'],
                  command: 'workbench.action.focusSideBar',
               },
            ],
         },
         {
            description: 'Toggle Sidebar',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['b m'],
                  command: 'workbench.action.toggleSidebarVisibility',
                  when: '!inputFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['bm'],
                  command: 'workbench.action.toggleSidebarVisibility',
               },
            ],
         },
         {
            description: 'Next Sidebar',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['b k'],
                  command: 'workbench.action.nextSideBarView',
                  when: '!inputFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['bk'],
                  command: 'workbench.action.nextSideBarView',
               },
            ],
         },
         {
            description: 'Previous Sidebar',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['b i'],
                  command: 'workbench.action.previousSideBarView',
                  when: '!inputFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['bi'],
                  command: 'workbench.action.previousSideBarView',
               },
            ],
         },
      ],
   },

   {
      group: 'Tree Navigation',
      mappings: [
         {
            description: 'Open Tree View',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['b n'],
                  command: 'workbench.view.explorer',
                  when: 'listFocus && !inputFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['bn'],
                  command: 'workbench.view.explorer',
                  modes: ['normal'],
               },
            ],
         },
         {
            description: 'Go to File (Required for Mac)',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['Enter'],
                  command: 'list.select',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Create New File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['n'],
                  command: 'explorer.newFile',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'New Folder',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['m'],
                  command: 'explorer.newFolder',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Collapse Tree',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['q'],
                  command: 'workbench.files.action.collapseExplorerFolders',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Cut File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['a'],
                  command: 'filesExplorer.cut',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Delete File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['s'],
                  command: 'deleteFile',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Copy File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['d'],
                  command: 'filesExplorer.copy',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Paste File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['f'],
                  command: 'filesExplorer.paste',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Rename File',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['r'],
                  command: 'renameFile',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
         {
            description: 'Find in Tree',
            platforms: [
               {
                  type: 'vscode',
                  triggers: ['p'],
                  command: 'list.find',
                  when: 'listFocus && !inputFocus',
               },
            ],
         },
      ],
   },
];

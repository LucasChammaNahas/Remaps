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
];

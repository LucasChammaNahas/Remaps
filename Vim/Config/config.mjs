import { getTargetedMotions } from './getTargetedMotions.mjs';
import { getTextCommands } from './getTextCommands.mjs';

export const config = [
   {
      group: 'Mode switching',
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
      group: 'Basic motions',
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
];

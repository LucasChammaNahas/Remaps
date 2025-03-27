import { getTargetedMotions } from './getTargetedMotions.mjs';
import { getTextCommands } from './getTextCommands.mjs';

export const config = [
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
            ],
         },
      ],
   },

   {
      group: 'Big block motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Move Cursor a Big Block Down',
            platforms: [
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+k'],
                  command: '20j',
                  removeCommand: '-editor.action.potato',
               },
            ],
         },
      ],
   },

   {
      group: 'Go Commands',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Indent Lines',
            platforms: [
               {
                  type: 'vimToVscode',
                  triggers: ['co'],
                  command: 'editor.action.indentLines',
               },
            ],
         },
      ],
   },

   {
      group: 'VS Code',
      mappings: [
         {
            description: 'Delete Left. (Required to Delete While in Normal Mode)',
            platforms: [
               {
                  type: 'vscode',
                  key: ['backspace'],
                  command: 'deleteLeft',
                  removeCommand: '-editor.action.potato',
                  when: 'textInputFocus',
               },
            ],
         },
      ],
   },
];

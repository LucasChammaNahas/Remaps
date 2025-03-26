import { getTargetedMotions } from './getTargetedMotions.mjs';
import { getTextCommands } from './getTextCommands.mjs';

export const config = [
   {
      group: 'Basic motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Move Cursor Up',
            vscodeVim: {
               before: ['i'],
               after: 'k',
            },
         },
      ],
   },

   {
      group: 'Big block motions',
      modes: ['normal', 'visual', 'pending'],
      mappings: [
         {
            description: 'Move Cursor a Big Block Down',
            vscode: {
               key: ['ctrl+shift+k'],
               command: 'vim.remap',
               removeCommand: '-editor.action.deleteLines',
               when: 'editorFocus',
               vimCommand: '20k',
            },
         },
      ],
   },

   {
      group: 'VS Code',
      mappings: [
         {
            description: 'Delete Left. (Required to Delete While in Normal Mode)',
            vscode: {
               key: ['backspace'],
               command: 'deleteLeft',
               when: 'textInputFocus',
            },
         },
      ],
   },
];

const newConfig = [
   {
      comment: 'Move Cursor a Big Block Down',
      key: 'ctrl+shift+k',
      command: '-editor.action.deleteLines',
      when: 'editorFocus',
   },
   {
      comment: 'Move Cursor a Big Block Up',
      key: 'ctrl+shift+i',
      command: 'vim.remap',
      when: 'editorFocus',
      after: '20i',
   },

   // Nova estrutura:
   {
      description: 'Selecionar tudo',
      modes: ['normal', 'visual', 'pending'],
      vscode: {
         key: ['ctrl+shift+k'],
         command: 'vim.remap',
         removeCommand: '-editor.action.potato',
         when: 'editorFocus',
         vimCommand: '20i',
         modesOverride: ['normal', 'visual'],
      },
      vim: {
         before: ['A'],
         after: 'ggVG',
         modesOverride: ['normal', 'visual'],
      },
      neovim: {
         isVimClone: true,
         before: ['A'],
         after: 'ggVG',
         modesOverride: ['normal', 'visual'],
      },
   },
];

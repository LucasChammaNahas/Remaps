const newConfig = [
   {
      group: 'Basic moves',
      modes: ['normal', 'visual', 'pending'],

      mappings: [
         {
            description: 'Selecionar tudo',
            modes: ['normal', 'visual', 'pending'],

            vscode: {
               key: ['ctrl+shift+k'],
               command: 'vim.remap',
               vimCommand: '20i',
               removeCommand: '-editor.action.potato',
               when: 'editorFocus',
               modes: ['normal', 'visual'],
            },

            vscodeVim: {
               before: ['A'],
               after: 'ggVG',
               modes: ['normal', 'visual'],
            },

            neovim: {
               isVimClone: true,
               before: ['A'],
               after: 'ggVG',
               modes: ['normal', 'visual'],
            },
         },
      ],
   },
];

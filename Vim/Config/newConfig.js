const newConfig = [
   {
      group: 'Basic moves',
      modes: ['normal', 'visual', 'pending'],

      mappings: [
         {
            description: 'Selecionar tudo',
            modes: ['normal', 'visual', 'pending'],

            platforms: [
               {
                  type: 'vscode',
                  triggers: ['ctrl+e right'],
                  command: 'workbench.action.nextEditorInGroup',
                  removeCommand: '-editor.action.potato',
                  when: 'editorFocus',
               },
               {
                  type: 'vscodeToVim',
                  triggers: ['ctrl+shift+k'],
                  command: '20i',
                  removeCommand: '-editor.action.potato',
                  when: 'editorFocus',
               },
               {
                  type: 'vimToVscode',
                  triggers: ['co'],
                  command: 'editor.action.indentLines',
                  modes: ['normal', 'visual'],
               },
               {
                  type: 'vim',
                  triggers: ['A'],
                  command: 'ggVG',
                  modes: ['normal', 'visual'],
               },
               {
                  type: 'neovim',
                  isVimClone: true,
                  triggers: ['A'],
                  command: 'ggVG',
                  modes: ['normal', 'visual'],
               },
            ],
         },
      ],
   },
];

# AHK


   {
      // Was conflicting with symbols
      "key": "alt+h",
      "command": "-git.viewFileHistory"
   },
   {
      // NEW !!! doesnt work
      "key": "cmd+space",
      "command": "editor.action.inlineSuggest.trigger"
   },
   {
      // NEW !!! Deals with ctrl c not working on mac
      "key": "cmd+c",
      "command": "-extension.vim_cmd+c",
      "when": "editorTextFocus && vim.active && vim.overrideCopy && vim.use<D-c> && !inDebugRepl"
   },
   {
      // NEW !!! Disable toggle panel
      "key": "cmd+j",
      "command": "-workbench.action.togglePanel"
   },
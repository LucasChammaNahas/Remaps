# Fixes: 
 - bq conficting with q (close tab)
 - ctrl h not working on mac
 - add maximize current tab command



# Fonts:
  - Nancyj
  - Colossal


# Structure

  Vim JSON:
  {
    "comment": "Go forth in change list",
    "before": ["g", "g", "n"],
    "after": ["g", ","]
  },
  {
    "comment": "Indent Lines",
    "before": ["g", "o"],
    "commands": ["editor.action.indentLines"]
  },

  Vim js:
  {
    comment: 'Focus Editor Number #',
    before: 'eg', (Array if multiple)
    after: 'gt',
    modes: 'n',
  },
  {
    comment: 'Reopen Closed Tab',
    before: 'gq', (Array if multiple)
    command: 'workbench.action.reopenClosedEditor', (Array if multiple)
    modes: 'n',
  },


  VS Code JSON: 
  {
    "comment": "Deactivates find next match",
    "key": "ctrl+g",
    "command": "-editor.action.nextMatchFindAction",
    "when": "editorFocus"
  },
  {
    "comment": "Repeat backwards previous f, t, F or T",
    "key": "shift+,",
    "command": "vim.remap",
    "when": "editorTextFocus && vim.mode == 'Normal'",
    "args": {
      "after": ["g", "z", "a"]
    }
  },

  VS Code js:
  {
    comment: 'Move Line Up',
    key: 'ctrl+i', (Array if multiple)
    command: 'editor.action.moveLinesUpAction',
    when: 'editorTextFocus && !editorReadonly',
  },
  {
    comment: 'Move Cursor Strong Up',
    key: 'up', (Array if multiple)
    command: 'vim.remap',
    when: 'editorTextFocus && vim.mode != "Insert"',
    after: '2i',
  },
  

  Obs:
    - 'command' is used for both in the JS object
    - 'before' is only present in Vim. 'key' is only present in vs code
    - 'command' and 'commands' are one command only in the current logic
    - If 'key' or 'before' are arrays, for each item, a new rule with the same command must be created
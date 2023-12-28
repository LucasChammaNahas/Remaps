import { getTargetedMotions } from './utils/getTargetedMotions.mjs';
import { getTextManipulationMotions } from './Utils/getTextManipulationMotions.mjs';

export const config = {
  switching: [
    {
      comment: 'Visual Line',
      before: 'cv',
      after: 'V',
    },
    {
      comment: 'Visual Block',
      before: 'cc',
      after: '<C-v>',
    },
  ],

  movements: [
    {
      comment: 'Move Cursor Up',
      before: ['i'],
      after: 'k',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor Down',
      before: ['k'],
      after: 'j',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor Left',
      before: ['j'],
      after: 'h',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor Right',
      before: ['l'],
      after: 'l',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Small Block Up',
      before: ['<leader>I'],
      after: '5k',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Small Block Down',
      before: ['<leader>K'],
      after: '5j',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Small Block Left',
      before: ['<leader>J'],
      after: '12h',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Small Block Right',
      before: ['<leader>L'],
      after: '12l',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Big Block Up',
      before: ['I'],
      after: '10k',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Big Block Down',
      before: ['K'],
      after: '10j',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Big Block Left',
      before: ['J'],
      after: '10h',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor a Big Block Right',
      before: ['L'],
      after: '10l',
      modes: 'nvp',
    },
    {
      comment: 'Move Cursor Strong Up',
      key: ['up'],
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2i',
    },
    {
      comment: 'Move Cursor Strong Down',
      key: ['down'],
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2k',
    },
    {
      comment: 'Move Cursor Strong Left',
      key: ['left'],
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2j',
    },
    {
      comment: 'Move Cursor Strong Right',
      key: ['right'],
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2l',
    },
  ],

  word: [
    {
      comment: 'Go to Start of Word',
      before: ['w;'],
      after: 'w',
      modes: 'nvp',
    },
    {
      comment: 'Go to Start of WORD',
      before: ['ww;'],
      after: 'W',
      modes: 'nvp',
    },
    {
      comment: 'Go to End of Word',
      before: ['wl'],
      after: 'e',
      modes: 'nvp',
    },
    {
      comment: 'Go to Start of WORD',
      before: ['wwl'],
      after: 'E',
      modes: 'nvp',
    },
    {
      comment: 'Go Back to Start of Word',
      before: ['wj'],
      after: 'b',
      modes: 'nvp',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: ['wwj'],
      after: 'B',
      modes: 'nvp',
    },
    {
      comment: 'Go Back to End of Word',
      before: ['wh'],
      after: 'ge',
      modes: 'nvp',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: ['wwh'],
      after: 'gE',
      modes: 'nvp',
    },
  ],

  line: [
    {
      comment: 'Go to Start of Line',
      before: ['h'],
      after: '^',
      modes: 'nvp',
    },
    {
      comment: 'Go to End of Line',
      before: [';'],
      after: 'g_',
      modes: 'nvp',
    },
  ],

  ample: [
    {
      comment: 'Go to Top of Screen',
      before: ['gi'],
      after: 'H',
    },
    {
      comment: 'Go to Middle of Screen',
      before: ['gj', 'gl'],
      after: 'M',
    },
    {
      comment: 'Go to Bottom of Screen',
      before: ['gk'],
      after: 'L',
    },
    {
      comment: 'Go to Top of Document',
      before: ['ggi'],
      after: 'gg',
    },
    {
      comment: 'Go to Bottom of Document',
      before: ['ggk'],
      after: 'G',
    },
  ],

  scroll: [
    {
      comment: 'Scroll Page Until Cursor is at Top',
      before: ['go'],
      after: 'zb',
    },
    {
      comment: 'Scroll Page Until Cursor is at Center',
      before: ['g.'],
      after: 'zz',
    },
    {
      comment: 'Scroll Page Until Cursor is at Bottom',
      before: ['gl'],
      after: 'zt',
    },
    {
      comment: 'Scroll Page Up',
      before: ['gu'],
      after: '<C-u>',
    },
    {
      comment: 'Scroll Page Down',
      before: ['gj'],
      after: '<C-d>',
    },
  ],

  targeted: getTargetedMotions(),

  paste: [
    ...getTextManipulationMotions({
      before: 'wf',
      after: 'pgvy',
      operatorName: 'Paste',
      targetName: 'Word',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'wwf',
      after: 'pgvy',
      operatorName: 'Paste',
      targetName: 'WORD',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'f',
      after: 'gP',
      operatorName: 'Paste Before',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'f',
      after: 'gPgvy',
      operatorName: 'Paste Before',
      modes: 'v',
    }),
    ...getTextManipulationMotions({
      before: 'p',
      after: 'p',
      operatorName: 'Paste After',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'p',
      after: 'pgvy',
      operatorName: 'Paste After',
      modes: 'v',
    }),
  ],

  delete: [
    ...getTextManipulationMotions({
      before: 's',
      after: 'd',
      operatorName: 'Delete',
    }),
    ...getTextManipulationMotions({
      before: 'ss',
      after: 'd',
      operatorName: 'Delete',
      targetName: 'Word',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'SS',
      after: 'd',
      operatorName: 'Delete',
      targetName: 'WORD',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'sk',
      after: 'dd',
      operatorName: 'Delete',
      targetName: 'Line',
      modes: 'n',
    }),
  ],

  cut: [
    ...getTextManipulationMotions({
      before: 'a',
      after: 'd',
      operatorName: 'Cut',
    }),
    ...getTextManipulationMotions({
      before: 'aa',
      after: 'd',
      operatorName: 'Cut',
      targetName: 'Word',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'AA',
      after: 'd',
      operatorName: 'Cut',
      targetName: 'WORD',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'ak',
      after: 'dd',
      operatorName: 'Cut',
      targetName: 'Line',
      modes: 'n',
    }),
  ],

  change: [
    ...getTextManipulationMotions({
      before: 'x',
      after: 'c',
      operatorName: 'Cut',
    }),
    ...getTextManipulationMotions({
      before: 'xx',
      after: 'c',
      operatorName: 'Change',
      targetName: 'Word',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'XX',
      after: 'c',
      operatorName: 'Change',
      targetName: 'WORD',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'xk',
      after: 'cc',
      operatorName: 'Change',
      targetName: 'Line',
      modes: 'n',
    }),
  ],

  yank: [
    ...getTextManipulationMotions({
      before: 'd',
      after: 'y',
      operatorName: 'Yank',
    }),
    ...getTextManipulationMotions({
      before: 'dd',
      after: 'y',
      operatorName: 'Yank',
      targetName: 'Word',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'DD',
      after: 'y',
      operatorName: 'Yank',
      targetName: 'WORD',
      modes: 'n',
    }),
    ...getTextManipulationMotions({
      before: 'dk',
      after: 'yy',
      operatorName: 'Yank',
      targetName: 'Line',
      modes: 'n',
    }),
  ],

  insert: [
    {
      comment: 'Inner Selector',
      before: ['u'],
      after: 'i',
      modes: 'vp',
    },
    {
      comment: 'Outer Selector',
      before: ['o'],
      after: 'a',
      modes: 'vp',
    },
    {
      comment: 'Insert Cursor Before',
      before: ['u'],
      after: 'i',
      modes: 'n',
    },
    {
      comment: 'Insert Cursor at Start of Line',
      before: ['U'],
      after: 'I',
      modes: 'n',
    },
    {
      comment: 'Insert Cursor After',
      before: ['o'],
      after: 'a',
      modes: 'n',
    },
    {
      comment: 'Insert Cursor at End of Line',
      before: ['U'],
      after: 'A',
      modes: 'n',
    },
    {
      comment: 'Insert Line Below and Enter Insert Mode',
      before: ['<Enter>'],
      after: 'o',
      modes: 'n',
    },
    {
      comment: 'Insert Line Above and Enter Insert Mode',
      key: ['shift+enter'],
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode == "Normal"',
      after: 'gza',
    },
    {
      comment: 'Insert Line Above and Enter Insert Mode (Fix)',
      before: ['gza'],
      after: 'O',
      modes: 'n',
    },
    {
      comment: 'Insert Command on Command Line',
      before: ['|'],
      after: ':',
    },
    {
      comment: 'Join With Line Below With Space',
      before: ['cl'],
      after: 'J',
      modes: 'n',
    },
  ],

  miscellaneous: [
    {
      comment: 'Join With Line Below Without Space',
      before: ['cj'],
      after: 'gJ',
      modes: 'n',
    },
    {
      comment: 'Toggle Extremes of Selected Area',
      before: ['<Enter>'],
      after: 'o',
      modes: 'v',
    },
    {
      comment: 'Rename Symbol',
      before: ['<leader>r'],
      commands: 'editor.action.rename',
      modes: 'n',
    },
  ],

  case: [
    {
      comment: 'Toggle Case',
      before: ['yy'],
      after: '~',
    },
    {
      comment: 'Upper Case',
      before: ['yu'],
      after: 'U',
      modes: 'v',
    },
    {
      comment: 'Lower Case',
      before: ['yi'],
      after: 'u',
      modes: 'v',
    },
    {
      comment: 'Toggle Word Case',
      before: ['ywy'],
      after: 'viw~',
      modes: 'n',
    },
    {
      comment: 'Word Upper Case',
      before: ['ywu'],
      after: 'viwU',
      modes: 'n',
    },
    {
      comment: 'Word Lower Case',
      before: ['ywi'],
      after: 'viwu',
      modes: 'n',
    },
    {
      comment: 'Toggle WORD Case',
      before: ['ywwy'],
      after: 'EvB~',
      modes: 'n',
    },
    {
      comment: 'WORD Upper Case',
      before: ['ywwu'],
      after: 'EvBU',
      modes: 'n',
    },
    {
      comment: 'WORD Lower Case',
      before: ['ywwi'],
      after: 'EvBu',
      modes: 'n',
    },
  ],

  go: [
    {
      comment: 'Go to Global Declaration',
      before: ['ggd'],
      after: 'gD',
      modes: 'n',
    },
    {
      comment: 'Indent Lines',
      before: ['co'],
      commands: 'editor.action.indentLines',
    },
    {
      comment: 'Outdent Lines',
      before: ['cu'],
      commands: 'editor.action.outdentLines',
    },
  ],

  vsCode: [
    {
      comment: 'Delete Left. (Required to Delete While in Normal Mode)',
      key: ['Backspace'],
      command: 'deleteLeft',
      when: 'textInputFocus',
    },
    {
      comment: 'Delete Right. (Required to Delete While in Normal Mode)',
      key: ['delete'],
      command: 'deleteRight',
      when: 'textInputFocus',
    },
    {
      comment: "Trigger Suggestions (Mac Doesn't Work With ctrl+space)",
      key: ['ctrl+g'],
      command: 'editor.action.triggerSuggest',
      when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
    },
    {
      comment: "Trigger Suggestions (Mac Doesn't Work With ctrl+space)",
      key: ['ctrl+g'],
      command: '-editor.action.nextMatchFindAction',
      when: 'editorFocus',
    },
    {
      comment: 'Trigger Copilot',
      key: ['ctrl+alt+space'],
      command: 'github.copilot.generate',
      when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
    },
    {
      comment: 'Disables Copilot When Pressing ctrl+enter',
      key: ['ctrl+enter'],
      command: '-github.copilot.generate',
      when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
    },
    {
      comment:
        'Prevents from Going into Normal Mode When Closing Suggest Box (!inDebugRepl is Required for Some Reason)',
      key: ['escape'],
      command: 'extension.vim_escape',
      when: 'editorTextFocus && vim.active && !inDebugRepl && !suggestWidgetVisible',
    },
    {
      comment:
        'Prevents from Going into Normal Mode When Closing Suggest Box (!inDebugRepl is Required for Some Reason)',
      key: ['escape'],
      command: '-extension.vim_escape',
      when: 'editorTextFocus && !inDebugRepl && vim.active',
    },
  ],

  disabledCommands: [
    {
      coment: 'Conflict With Symbols',
      key: ['alt+h'],
      command: '-git.viewFileHistory',
    },
    {
      coment: 'Quit All Instances',
      key: ['ctrl+q'],
      command: '-workbench.action.quit',
    },
    {
      coment: 'Open View List',
      key: ['ctrl+q'],
      command: '-workbench.action.quickOpenView',
    },
    {
      coment: 'Trigger Suggest',
      key: ['ctrl+i'],
      command: '-editor.action.triggerSuggest',
      when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
    },
  ],

  listNavigation: [
    {
      comment: 'Up',
      key: ['i'],
      command: 'list.focusUp',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Down',
      key: ['k'],
      command: 'list.focusDown',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse Current Item',
      key: ['j'],
      command: 'list.collapse',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse All',
      key: ['t y'],
      command: 'workbench.files.action.collapseExplorerFolders',
      when: 'listFocus && !inputFocus && !inSearchEditor',
    },
    {
      comment: 'Expand Current Item',
      key: ['l'],
      command: 'list.toggleExpand',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Navigate to Top',
      key: ['g i'],
      command: 'list.focusFirst',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Navigate to Bottom',
      key: ['g k'],
      command: 'list.focusLast',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Go Back to Editor',
      key: ['escape'],
      command: 'workbench.action.focusActiveEditorGroup',
      when: '!textInputFocus && !treeFindOpen',
    },
    {
      comment: 'Toggle Side Panel',
      key: ['b m'],
      command: 'workbench.action.toggleSidebarVisibility',
      when: '!inputFocus',
    },
    {
      comment: 'Toggle Side Panel',
      before: ['bm'],
      commands: 'workbench.action.toggleSidebarVisibility',
      modes: 'n',
    },
  ],

  treeNavigation: [
    {
      comment: 'Open Tree View',
      key: ['b n'],
      command: 'workbench.view.explorer',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Tree View',
      before: ['bn'],
      commands: 'workbench.view.explorer',
      modes: 'n',
    },
    {
      comment: 'Go to File ',
      key: ['Enter'],
      command: 'list.select',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Create New File',
      key: ['n'],
      command: 'explorer.newFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'New Folder',
      key: ['m'],
      command: 'explorer.newFolder',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse Tree',
      key: ['q'],
      command: 'workbench.files.action.collapseExplorerFolders',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Cut File',
      key: ['a'],
      command: 'filesExplorer.cut',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Delete File',
      key: ['s'],
      command: 'deleteFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Copy File',
      key: ['d'],
      command: 'filesExplorer.copy',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Paste File',
      key: ['f'],
      command: 'filesExplorer.paste',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Rename File',
      key: ['r'],
      command: 'renameFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Find in Tree',
      key: ['p'],
      command: 'list.find',
      when: 'listFocus && !inputFocus',
    },
  ],

  openEditorsNavigation: [
    {
      comment: 'Open Open Editors View',
      key: ['b space n'],
      command: 'workbench.files.action.focusOpenEditorsView',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Open Editors View',
      before: ['b<leader>n'],
      commands: 'workbench.files.action.focusOpenEditorsView',
      modes: 'n',
    },
    {
      comment: 'Close File',
      key: ['q'],
      command: 'workbench.action.closeActiveEditor',
      when: 'workbench.explorer.openEditorsView.active',
    },
    {
      comment: 'Close All Files but Current',
      key: ['shift+q'],
      command: 'workbench.files.action.closeOtherEditors',
      when: 'workbench.explorer.openEditorsView.active',
    },
    {
      comment: 'New File',
      key: ['n'],
      command: 'explorer.newFile',
      when: 'workbench.explorer.openEditorsView.active',
    },
  ],

  outlineNavigation: [
    {
      comment: 'Open Outline View',
      key: ['b o'],
      command: 'outline.focus',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Outline View',
      before: ['bo'],
      commands: 'outline.focus',
      modes: 'n',
    },
  ],

  searchPanelNavigation: [
    {
      comment: 'Open Search Panel View',
      key: ['b p'],
      command: 'workbench.action.findInFiles',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Search Panel View',
      before: ['bp'],
      commands: 'workbench.action.findInFiles',
      modes: 'n',
    },
    {
      comment: 'Open Replace Panel View',
      key: ['b h'],
      command: 'workbench.action.replaceInFiles',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Replace Panel View',
      before: ['bh'],
      commands: 'workbench.action.replaceInFiles',
      modes: 'n',
    },
    {
      comment: 'Focus Search Input',
      key: ['ctrl+f'],
      command: 'workbench.action.findInFiles',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Replace Input',
      key: ['ctrl+h'],
      command: 'workbench.action.replaceInFiles',
      when: 'inSearchEditor',
    },
    {
      comment: 'Collapse Search Results',
      key: ['t y'],
      command: 'search.action.collapseSearchResults',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Expand Search Results',
      key: ['t t'],
      command: 'search.action.expandSearchResults',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Replace the Current Focused Item',
      key: ['Enter'],
      command: 'search.action.replace',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Replace All',
      key: ['ctrl+Enter'],
      command: 'search.action.replaceAll',
      when: 'inSearchEditor && replaceActive',
    },
    {
      comment: 'Toggle Match Case',
      key: ['ctrl+u'],
      command: 'toggleSearchEditorCaseSensitive',
      when: 'inSearchEditor',
    },
    {
      comment: 'Toggle Match Whole Word',
      key: ['ctrl+o'],
      command: 'toggleSearchEditorWholeWord',
      when: 'inSearchEditor',
    },
    {
      comment: 'Toggle Preserve Case',
      key: ['ctrl+j'],
      command: 'toggleSearchPreserveCase',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Next Input Box',
      key: ['ctrl+k'],
      command: 'search.focus.nextInputBox',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Previous Input Box',
      key: ['ctrl+i'],
      command: 'search.focus.previousInputBox',
      when: 'inSearchEditor',
    },
  ],

  findAndReplaceNavigation: [
    {
      comment: 'Go to Next Match',
      key: ['ctrl+k'],
      command: 'editor.action.nextMatchFindAction',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Go to Previous Match',
      key: ['ctrl+i'],
      command: 'editor.action.previousMatchFindAction',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Replace One',
      key: ['enter'],
      command: 'editor.action.replaceOne',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Replace All',
      key: ['ctrl+enter'],
      command: 'editor.action.replaceAll',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Match Case',
      key: ['ctrl+u'],
      command: 'toggleFindCaseSensitive',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Match Whole Word',
      key: ['ctrl+o'],
      command: 'toggleFindWholeWord',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Preserve Case',
      key: ['ctrl+j'],
      command: 'togglePreserveCase',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Find in Selection',
      key: ['ctrl+l'],
      command: 'toggleFindInSelection',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
  ],

  terminalPanelNavigation: [
    {
      coment: 'Toggle Terminal Panel',
      key: ['b t'],
      command: 'workbench.action.togglePanel',
      when: 'listFocus && !inputFocus',
    },
    {
      coment: 'Toggle Terminal Panel',
      key: ['ctrl+t'],
      command: 'workbench.action.togglePanel',
    },
    {
      coment: 'Toggle Terminal Panel',
      key: ['ctrl+t'],
      command: '-workbench.action.showAllSymbols',
    },
    {
      coment: 'Toggle Terminal Panel',
      before: ['bt'],
      commands: 'workbench.action.togglePanel',
      modes: 'n',
    },

    {
      coment: 'Toggle Terminal',
      key: ['b j'],
      command: 'workbench.action.toggleTerminal',
      when: 'listFocus && !inputFocus',
    },
    {
      coment: 'Toggle Terminal',
      before: ['bj'],
      commands: 'workbench.action.toggleTerminal',
      modes: 'n',
    },

    {
      coment: 'Open New Terminal',
      key: ['b space j'],
      command: 'workbench.action.terminal.new',
      when: 'listFocus && !inputFocus',
    },
    {
      coment: 'Open New Terminal',
      before: ['b<leader>j'],
      commands: 'workbench.action.terminal.new',
      modes: 'n',
    },
    {
      coment: 'Open New Terminal',
      key: ['ctrl+n'],
      command: 'workbench.action.terminal.new',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      coment: 'Up in Terminal List',
      key: ['i'],
      command: 'workbench.action.terminal.focusPrevious',
      when: 'terminalTabsFocus',
    },
    {
      coment: 'Up in Terminal List',
      key: ['ctrl+i'],
      command: 'workbench.action.terminal.focusPrevious',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },
    {
      coment: 'Down in Terminal List',
      key: ['k'],
      command: 'workbench.action.terminal.focusNext',
      when: 'terminalTabsFocus',
    },
    {
      coment: 'Down in Terminal List',
      key: ['ctrl+k'],
      command: 'workbench.action.terminal.focusNext',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      coment: 'Kill Terminal',
      key: ['ctrl+q'],
      command: 'workbench.action.terminal.killActiveTab',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },
    {
      coment: 'Kill Terminal',
      key: ['q'],
      command: 'workbench.action.terminal.killActiveTab',
      when: 'terminalTabsFocus',
    },

    {
      coment: 'Rename Terminal',
      key: ['r'],
      command: 'workbench.action.terminal.renameActiveTab',
      when: 'terminalTabsFocus',
    },

    {
      coment: 'Toggle Terminal Max Height',
      key: ['h'],
      command: 'workbench.action.terminal.toggleEditorVisibility',
      when: 'terminalTabsFocus',
    },
    {
      coment: 'Toggle Terminal Max Height',
      key: ['ctrl+h'],
      command: 'workbench.action.terminal.toggleEditorVisibility',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      coment: 'Go to Terminal Side List',
      key: ['ctrl+l'],
      command: 'workbench.action.terminal.focusTabs',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      coment: 'Clear Terminal Current Command',
      key: ['ctrl+backspace'],
      command: 'workbench.action.terminal.clearSelection',
      when: 'terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible',
    },
    {
      coment: 'Clear Terminal Current Command',
      key: ['escape'],
      command: '-workbench.action.terminal.clearSelection',
      when: 'terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible',
    },
  ],

  sourceControl: [
    {
      comment: 'Open Source Control View',
      key: ['b g'],
      command: 'workbench.view.scm',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Source Control View',
      before: ['bg'],
      commands: 'workbench.view.scm',
      modes: 'n',
    },

    {
      comment: 'Open Commits View',
      key: ['b space g'],
      command: 'gitlens.views.commits.focus',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Reveal File on Explorer',
      key: ['o'],
      command: 'git.revealInExplorer',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Discard Changes',
      key: ['q'],
      command: 'git.clean',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Discard All Changes',
      key: ['shift+q'],
      command: 'git.cleanAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Stage the Current File',
      key: ['a'],
      command: 'git.stage',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Stage All Files',
      key: ['shift+a'],
      command: 'git.stageAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Unstage the Current File',
      key: ['u'],
      command: 'git.unstage',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Unstage All Files',
      key: ['shift+u'],
      command: 'git.unstageAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Commit Changes',
      key: ['c'],
      command: 'git.commitStaged',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Push Changes',
      key: ['shift+p'],
      command: 'git.push',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Pull Changes',
      key: ['p'],
      command: 'git.pull',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Fetch Changes',
      key: ['f'],
      command: 'git.fetch',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Merge Changes',
      key: ['m'],
      command: 'git.merge',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Checkout Branch (Open Dialog)',
      key: ['z'],
      command: 'git.checkout',
      when: 'workbench.scm.active && !inputFocus',
    },
  ],
};

import { getTargetedMotions } from './getTargetedMotions.mjs';
import { getTextCommands } from './getTextCommands.mjs';

export const config = {
  modeSwitching: [
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

  basicMotions: [
    { defaultModes: 'nvp' },

    {
      comment: 'Move Cursor Up',
      before: 'i',
      after: 'k',
    },
    {
      comment: 'Move Cursor Down',
      before: 'k',
      after: 'j',
    },
    {
      comment: 'Move Cursor Left',
      before: 'j',
      after: 'h',
    },
    {
      comment: 'Move Cursor Right',
      before: 'l',
      after: 'l',
    },
  ],

  smallBlockMotions: [
    { defaultModes: 'nvp' },

    {
      comment: 'Move Cursor a Small Block Up',
      before: '<leader>I',
      after: '5k',
    },
    {
      comment: 'Move Cursor a Small Block Down',
      before: '<leader>K',
      after: '5j',
    },
    {
      comment: 'Move Cursor a Small Block Left',
      before: '<leader>J',
      after: '12h',
    },
    {
      comment: 'Move Cursor a Small Block Right',
      before: '<leader>L',
      after: '12l',
    },
  ],

  bigBlockMotions: [
    { defaultModes: 'nvp' },

    {
      comment: 'Move Cursor a Big Block Up',
      before: 'I',
      after: '10k',
    },
    {
      comment: 'Move Cursor a Big Block Down',
      before: 'K',
      after: '10j',
    },
    {
      comment: 'Move Cursor a Big Block Left',
      before: 'J',
      after: '10h',
    },
    {
      comment: 'Move Cursor a Big Block Right',
      before: 'L',
      after: '10l',
    },
  ],

  fastMotions: [
    {
      comment: 'Move Cursor Strong Up',
      key: 'up',
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2i',
    },
    {
      comment: 'Move Cursor Strong Down',
      key: 'down',
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2k',
    },
    {
      comment: 'Move Cursor Strong Left',
      key: 'left',
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2j',
    },
    {
      comment: 'Move Cursor Strong Right',
      key: 'right',
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode != "Insert"',
      after: '2l',
    },
  ],

  wordMotions: [
    { defaultModes: 'nvp' },

    {
      comment: 'Go to Start of Word',
      before: 'w;',
      after: 'w',
    },
    {
      comment: 'Go to Start of WORD',
      before: 'ww;',
      after: 'W',
    },
    {
      comment: 'Go to End of Word',
      before: 'wl',
      after: 'e',
    },
    {
      comment: 'Go to Start of WORD',
      before: 'wwl',
      after: 'E',
    },
    {
      comment: 'Go Back to Start of Word',
      before: 'wj',
      after: 'b',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: 'wwj',
      after: 'B',
    },
    {
      comment: 'Go Back to End of Word',
      before: 'wh',
      after: 'ge',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: 'wwh',
      after: 'gE',
    },
  ],

  lineMotions: [
    { defaultModes: 'nvp' },

    {
      comment: 'Go to Start of Line',
      before: 'h',
      after: '^',
    },
    {
      comment: 'Go to End of Line',
      before: ';',
      after: 'g_',
    },
  ],

  ampleMotions: [
    {
      comment: 'Go to Top of Screen',
      before: 'gi',
      after: 'H',
    },
    {
      comment: 'Go to Middle of Screen',
      before: ['gj', 'gl'],
      after: 'M',
    },
    {
      comment: 'Go to Bottom of Screen',
      before: 'gk',
      after: 'L',
    },
    {
      comment: 'Go to Top of Document',
      before: 'ggi',
      after: 'gg',
    },
    {
      comment: 'Go to Bottom of Document',
      before: 'ggk',
      after: 'G',
    },
  ],

  scrollMotions: [
    {
      comment: 'Scroll Page Until Cursor is at Top',
      before: 'go',
      after: 'zb',
    },
    {
      comment: 'Scroll Page Until Cursor is at Center',
      before: 'g.',
      after: 'zz',
    },
    {
      comment: 'Scroll Page Until Cursor is at Bottom',
      before: 'gl',
      after: 'zt',
    },
    {
      comment: 'Scroll Page Up',
      before: 'gu',
      after: '<C-u>',
    },
    {
      comment: 'Scroll Page Down',
      before: 'gj',
      after: '<C-d>',
    },
  ],

  targetedMotions: getTargetedMotions(),

  pasteCommands: [
    { defaultModes: 'n' },

    ...getTextCommands({
      before: 'wf',
      after: 'pgvy',
      operatorName: 'Paste',
      targetName: 'Word',
    }),
    ...getTextCommands({
      before: 'wwf',
      after: 'pgvy',
      operatorName: 'Paste',
      targetName: 'WORD',
    }),
    ...getTextCommands({
      before: 'f',
      after: 'gP',
      operatorName: 'Paste Before',
    }),
    ...getTextCommands({
      before: 'f',
      after: 'gPgvy',
      operatorName: 'Paste Before',
      modes: 'v',
    }),
    ...getTextCommands({
      before: 'p',
      after: 'p',
      operatorName: 'Paste After',
    }),
    ...getTextCommands({
      before: 'p',
      after: 'pgvy',
      operatorName: 'Paste After',
      modes: 'v',
    }),
  ],

  deleteCommands: [
    { defaultModes: 'n' },

    ...getTextCommands({
      before: 's',
      after: 'd',
      operatorName: 'Delete',
      modes: 'nv',
    }),
    ...getTextCommands({
      before: 'ss',
      after: 'd',
      operatorName: 'Delete',
      targetName: 'Word',
    }),
    ...getTextCommands({
      before: 'SS',
      after: 'd',
      operatorName: 'Delete',
      targetName: 'WORD',
    }),
    ...getTextCommands({
      before: 'sk',
      after: 'dd',
      operatorName: 'Delete',
      targetName: 'Line',
    }),
  ],

  cutCommands: [
    { defaultModes: 'n' },

    ...getTextCommands({
      before: 'a',
      after: 'd',
      operatorName: 'Cut',
      modes: 'nv',
    }),
    ...getTextCommands({
      before: 'aa',
      after: 'd',
      operatorName: 'Cut',
      targetName: 'Word',
    }),
    ...getTextCommands({
      before: 'AA',
      after: 'd',
      operatorName: 'Cut',
      targetName: 'WORD',
    }),
    ...getTextCommands({
      before: 'ak',
      after: 'dd',
      operatorName: 'Cut',
      targetName: 'Line',
    }),
  ],

  changeCommands: [
    { defaultModes: 'n' },

    ...getTextCommands({
      before: 'x',
      after: 'c',
      operatorName: 'Cut',
      modes: 'nv',
    }),
    ...getTextCommands({
      before: 'xx',
      after: 'c',
      operatorName: 'Change',
      targetName: 'Word',
    }),
    ...getTextCommands({
      before: 'XX',
      after: 'c',
      operatorName: 'Change',
      targetName: 'WORD',
    }),
    ...getTextCommands({
      before: 'xk',
      after: 'cc',
      operatorName: 'Change',
      targetName: 'Line',
    }),
  ],

  yankCommands: [
    { defaultModes: 'n' },

    ...getTextCommands({
      before: 'd',
      after: 'y',
      operatorName: 'Yank',
      modes: 'nv',
    }),
    ...getTextCommands({
      before: 'dd',
      after: 'y',
      operatorName: 'Yank',
      targetName: 'Word',
    }),
    ...getTextCommands({
      before: 'DD',
      after: 'y',
      operatorName: 'Yank',
      targetName: 'WORD',
    }),
    ...getTextCommands({
      before: 'dk',
      after: 'yy',
      operatorName: 'Yank',
      targetName: 'Line',
    }),
  ],

  insertCommands: [
    { defaultModes: 'n' },

    {
      comment: 'Inner Selector',
      before: 'u',
      after: 'i',
      modes: 'vp',
    },
    {
      comment: 'Outer Selector',
      before: 'o',
      after: 'a',
      modes: 'vp',
    },

    {
      comment: 'Insert Cursor Before',
      before: 'u',
      after: 'i',
    },
    {
      comment: 'Insert Cursor at Start of Line',
      before: 'U',
      after: 'I',
    },
    {
      comment: 'Insert Cursor After',
      before: 'o',
      after: 'a',
    },
    {
      comment: 'Insert Cursor at End of Line',
      before: 'U',
      after: 'A',
    },

    {
      comment: 'Insert Line Below and Enter Insert Mode',
      before: '<Enter>',
      after: 'o',
    },
    {
      comment: 'Insert Line Above and Enter Insert Mode',
      key: 'shift+enter',
      command: 'vim.remap',
      when: 'editorTextFocus && vim.mode == "Normal"',
      after: 'gza',
    },
    {
      comment: 'Insert Line Above and Enter Insert Mode (Fix)',
      before: 'gza',
      after: 'O',
    },

    {
      comment: 'Insert Command on Command Line',
      before: '|',
      after: ':',
    },
  ],

  caseCommands: [
    { defaultModes: 'n' },

    {
      comment: 'Toggle Case',
      before: 'yy',
      after: '~',
      modes: 'nv',
    },
    {
      comment: 'Upper Case',
      before: 'yu',
      after: 'U',
      modes: 'v',
    },
    {
      comment: 'Lower Case',
      before: 'yi',
      after: 'u',
      modes: 'v',
    },
    {
      comment: 'Toggle Word Case',
      before: 'ywy',
      after: 'viw~',
    },
    {
      comment: 'Word Upper Case',
      before: 'ywu',
      after: 'viwU',
    },
    {
      comment: 'Word Lower Case',
      before: 'ywi',
      after: 'viwu',
    },
    {
      comment: 'Toggle WORD Case',
      before: 'ywwy',
      after: 'EvB~',
    },
    {
      comment: 'WORD Upper Case',
      before: 'ywwu',
      after: 'EvBU',
    },
    {
      comment: 'WORD Lower Case',
      before: 'ywwi',
      after: 'EvBu',
    },
  ],

  goCommands: [
    {
      comment: 'Go to Global Declaration',
      before: 'ggd',
      after: 'gD',
      modes: 'n',
    },
    {
      comment: 'Indent Lines',
      before: 'co',
      command: 'editor.action.indentLines',
    },
    {
      comment: 'Outdent Lines',
      before: 'cu',
      command: 'editor.action.outdentLines',
    },
  ],

  foldCommands: [
    { defaultModes: 'n' },

    {
      comment: 'Define a Fold Up Motion',
      before: 'th',
      after: 'zf',
    },
    {
      comment: 'Delete a Fold Up Motion',
      before: 'ts',
      after: 'zd',
    },
    {
      comment: 'Toggle Fold Up Motion',
      before: 'tj',
      after: 'editor.toggleFold',
    },
    {
      comment: 'Fold Up Region Level 1',
      before: 'ty',
      after: 'editor.foldLevel1',
    },
    {
      comment: 'Fold Up Region Level 2',
      before: 'tu',
      after: 'editor.foldLevel2',
    },
    {
      comment: 'Fold Up Region Level 3',
      before: 'ti',
      after: 'editor.foldLevel3',
    },
    {
      comment: 'Fold Up Region Level 4',
      before: 'to',
      after: 'editor.foldLevel4',
    },
    {
      comment: 'Fold Up Region Level 5',
      before: 'tp',
      after: 'editor.foldLevel5',
    },
    {
      comment: 'Fold Up All Levels',
      before: 'TT',
      after: 'editor.foldAll',
    },
    {
      comment: 'Unfold Up All Levels',
      before: 'tt',
      after: 'editor.unfoldAll',
    },
  ],

  miscellaneousCommands: [
    { defaultModes: 'n' },

    {
      comment: 'Join With Line Below Without Space',
      before: 'cj',
      after: 'gJ',
    },
    {
      comment: 'Join With Line Below With Space',
      before: 'cl',
      after: 'J',
    },
    {
      comment: 'Toggle Extremes of Selected Area',
      before: '<Enter>',
      after: 'o',
      modes: 'v',
    },
    {
      comment: 'Rename Symbol',
      before: '<leader>r',
      command: 'editor.action.rename',
    },
  ],

  vsCode: [
    {
      comment: 'Delete Left. (Required to Delete While in Normal Mode)',
      key: 'Backspace',
      command: 'deleteLeft',
      when: 'textInputFocus',
    },
    {
      comment: 'Delete Right. (Required to Delete While in Normal Mode)',
      key: 'delete',
      command: 'deleteRight',
      when: 'textInputFocus',
    },
    {
      comment: "Trigger Suggestions (Mac Doesn't Work With ctrl+space)",
      key: 'ctrl+g',
      command: 'editor.action.triggerSuggest',
      when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
    },
    {
      comment: "Trigger Suggestions (Mac Doesn't Work With ctrl+space)",
      key: 'ctrl+g',
      command: '-editor.action.nextMatchFindAction',
      when: 'editorFocus',
    },
    {
      comment: 'Trigger Copilot',
      key: 'ctrl+alt+space',
      command: 'github.copilot.generate',
      when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
    },
    {
      comment: 'Disables Copilot When Pressing ctrl+enter',
      key: 'ctrl+enter',
      command: '-github.copilot.generate',
      when: 'editorTextFocus && github.copilot.activated && !inInteractiveInput && !interactiveEditorFocused',
    },
    {
      comment:
        'Prevents from Going into Normal Mode When Closing Suggest Box (!inDebugRepl is Required for Some Reason)',
      key: 'escape',
      command: 'extension.vim_escape',
      when: 'editorTextFocus && vim.active && !inDebugRepl && !suggestWidgetVisible',
    },
    {
      comment:
        'Prevents from Going into Normal Mode When Closing Suggest Box (!inDebugRepl is Required for Some Reason)',
      key: 'escape',
      command: '-extension.vim_escape',
      when: 'editorTextFocus && !inDebugRepl && vim.active',
    },
  ],

  saveCommands: [
    {
      comment: 'Save',
      before: '<leader>s',
      command: 'workbench.action.files.save',
    },
    {
      comment: 'Save',
      key: 'ctrl+e',
      command: 'workbench.action.files.save',
      when: 'editorFocus && !editorReadonly',
    },
    {
      comment: 'Save All',
      before: '<leader><leader>s',
      command: 'saveAll',
    },
    {
      comment: 'Save All',
      key: 'ctrl+shift+s',
      command: 'saveAll',
    },
  ],

  closeCommands: [
    {
      comment: 'Close Current Tab',
      before: 'q',
      command: 'workbench.action.closeActiveEditor',
      modes: 'n',
    },
    {
      comment: 'Force Close Current Tab',
      before: 'Q',
      after: 'ZQ',
      modes: 'n',
    },
    {
      comment: 'Close Current Group',
      before: '<leader>q',
      command: 'workbench.action.closeEditorsInGroup',
      modes: 'n',
    },
    {
      comment: 'Close All Tabs But Current',
      before: '<leader><leader>q',
      command: 'workbench.action.closeOtherEditors',
      modes: 'n',
    },
    {
      comment: 'Reopen Closed Tab',
      before: 'gq',
      command: 'workbench.action.reopenClosedEditor',
      modes: 'n',
    },
  ],

  disabledCommands: [
    {
      comment: 'Conflict With Symbols',
      key: 'alt+h',
      command: '-git.viewFileHistory',
    },
    {
      comment: 'Quit All Instances',
      key: 'ctrl+q',
      command: '-workbench.action.quit',
    },
    {
      comment: 'Open View List',
      key: 'ctrl+q',
      command: '-workbench.action.quickOpenView',
    },
    {
      comment: 'Trigger Suggest',
      key: 'ctrl+i',
      command: '-editor.action.triggerSuggest',
      when: 'editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible',
    },
  ],

  listNavigation: [
    {
      comment: 'Up',
      key: 'i',
      command: 'list.focusUp',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Down',
      key: 'k',
      command: 'list.focusDown',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse Current Item',
      key: 'j',
      command: 'list.collapse',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse All',
      key: 't y',
      command: 'workbench.files.action.collapseExplorerFolders',
      when: 'listFocus && !inputFocus && !inSearchEditor',
    },
    {
      comment: 'Expand Current Item',
      key: 'l',
      command: 'list.toggleExpand',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Navigate to Top',
      key: 'g i',
      command: 'list.focusFirst',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Navigate to Bottom',
      key: 'g k',
      command: 'list.focusLast',
      when: 'listFocus && !inputFocus',
    },
  ],

  panelNavigation: [
    {
      comment: 'Go Back to Editor',
      key: 'escape',
      command: 'workbench.action.focusActiveEditorGroup',
      when: '!textInputFocus && !treeFindOpen',
    },
    {
      comment: 'Toggle Side Panel',
      key: 'b m',
      command: 'workbench.action.toggleSidebarVisibility',
      when: '!inputFocus',
    },
    {
      comment: 'Toggle Side Panel',
      before: 'bm',
      command: 'workbench.action.toggleSidebarVisibility',
      modes: 'n',
    },
  ],

  treeNavigation: [
    {
      comment: 'Open Tree View',
      key: 'b n',
      command: 'workbench.view.explorer',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Tree View',
      before: 'bn',
      command: 'workbench.view.explorer',
      modes: 'n',
    },
    {
      comment: 'Go to File ',
      key: 'Enter',
      command: 'list.select',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Create New File',
      key: 'n',
      command: 'explorer.newFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'New Folder',
      key: 'm',
      command: 'explorer.newFolder',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Collapse Tree',
      key: 'q',
      command: 'workbench.files.action.collapseExplorerFolders',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Cut File',
      key: 'a',
      command: 'filesExplorer.cut',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Delete File',
      key: 's',
      command: 'deleteFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Copy File',
      key: 'd',
      command: 'filesExplorer.copy',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Paste File',
      key: 'f',
      command: 'filesExplorer.paste',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Rename File',
      key: 'r',
      command: 'renameFile',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Find in Tree',
      key: 'p',
      command: 'list.find',
      when: 'listFocus && !inputFocus',
    },
  ],

  openEditorsNavigation: [
    {
      comment: 'Open Open Editors View',
      key: 'b space n',
      command: 'workbench.files.action.focusOpenEditorsView',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Open Editors View',
      before: 'b<leader>n',
      command: 'workbench.files.action.focusOpenEditorsView',
      modes: 'n',
    },
    {
      comment: 'Close File',
      key: 'q',
      command: 'workbench.action.closeActiveEditor',
      when: 'workbench.explorer.openEditorsView.active',
    },
    {
      comment: 'Close All Files but Current',
      key: 'shift+q',
      command: 'workbench.files.action.closeOtherEditors',
      when: 'workbench.explorer.openEditorsView.active',
    },
    {
      comment: 'New File',
      key: 'n',
      command: 'explorer.newFile',
      when: 'workbench.explorer.openEditorsView.active',
    },
  ],

  outlineNavigation: [
    {
      comment: 'Open Outline View',
      key: 'b o',
      command: 'outline.focus',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Outline View',
      before: 'bo',
      command: 'outline.focus',
      modes: 'n',
    },
  ],

  searchPanelNavigation: [
    {
      comment: 'Open Search Panel View',
      key: 'b p',
      command: 'workbench.action.findInFiles',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Search Panel View',
      before: 'bp',
      command: 'workbench.action.findInFiles',
      modes: 'n',
    },
    {
      comment: 'Open Replace Panel View',
      key: 'b h',
      command: 'workbench.action.replaceInFiles',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Replace Panel View',
      before: 'bh',
      command: 'workbench.action.replaceInFiles',
      modes: 'n',
    },
    {
      comment: 'Focus Search Input',
      key: 'ctrl+f',
      command: 'workbench.action.findInFiles',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Replace Input',
      key: 'ctrl+h',
      command: 'workbench.action.replaceInFiles',
      when: 'inSearchEditor',
    },
    {
      comment: 'Collapse Search Results',
      key: 't y',
      command: 'search.action.collapseSearchResults',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Expand Search Results',
      key: 't t',
      command: 'search.action.expandSearchResults',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Replace the Current Focused Item',
      key: 'Enter',
      command: 'search.action.replace',
      when: 'inSearchEditor && !inputFocus',
    },
    {
      comment: 'Replace All',
      key: 'ctrl+Enter',
      command: 'search.action.replaceAll',
      when: 'inSearchEditor && replaceActive',
    },
    {
      comment: 'Toggle Match Case',
      key: 'ctrl+u',
      command: 'toggleSearchEditorCaseSensitive',
      when: 'inSearchEditor',
    },
    {
      comment: 'Toggle Match Whole Word',
      key: 'ctrl+o',
      command: 'toggleSearchEditorWholeWord',
      when: 'inSearchEditor',
    },
    {
      comment: 'Toggle Preserve Case',
      key: 'ctrl+j',
      command: 'toggleSearchPreserveCase',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Next Input Box',
      key: 'ctrl+k',
      command: 'search.focus.nextInputBox',
      when: 'inSearchEditor',
    },
    {
      comment: 'Focus Previous Input Box',
      key: 'ctrl+i',
      command: 'search.focus.previousInputBox',
      when: 'inSearchEditor',
    },
  ],

  findAndReplaceNavigation: [
    {
      comment: 'Go to Next Match',
      key: 'ctrl+k',
      command: 'editor.action.nextMatchFindAction',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Go to Previous Match',
      key: 'ctrl+i',
      command: 'editor.action.previousMatchFindAction',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Replace One',
      key: 'enter',
      command: 'editor.action.replaceOne',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Replace All',
      key: 'ctrl+enter',
      command: 'editor.action.replaceAll',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Match Case',
      key: 'ctrl+u',
      command: 'toggleFindCaseSensitive',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Match Whole Word',
      key: 'ctrl+o',
      command: 'toggleFindWholeWord',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Preserve Case',
      key: 'ctrl+j',
      command: 'togglePreserveCase',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
    {
      comment: 'Toggle Find in Selection',
      key: 'ctrl+l',
      command: 'toggleFindInSelection',
      when: 'editorFocus && findWidgetVisible && findInputFocused || editorFocus && findWidgetVisible && replaceInputFocused',
    },
  ],

  terminalPanelNavigation: [
    {
      comment: 'Toggle Terminal Panel',
      key: 'b t',
      command: 'workbench.action.togglePanel',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Toggle Terminal Panel',
      key: 'ctrl+t',
      command: 'workbench.action.togglePanel',
    },
    {
      comment: 'Toggle Terminal Panel',
      key: 'ctrl+t',
      command: '-workbench.action.showAllSymbols',
    },
    {
      comment: 'Toggle Terminal Panel',
      before: 'bt',
      command: 'workbench.action.togglePanel',
      modes: 'n',
    },

    {
      comment: 'Toggle Terminal',
      key: 'b j',
      command: 'workbench.action.toggleTerminal',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Toggle Terminal',
      before: 'bj',
      command: 'workbench.action.toggleTerminal',
      modes: 'n',
    },

    {
      comment: 'Open New Terminal',
      key: 'b space j',
      command: 'workbench.action.terminal.new',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open New Terminal',
      before: 'b<leader>j',
      command: 'workbench.action.terminal.new',
      modes: 'n',
    },
    {
      comment: 'Open New Terminal',
      key: 'ctrl+n',
      command: 'workbench.action.terminal.new',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      comment: 'Up in Terminal List',
      key: 'i',
      command: 'workbench.action.terminal.focusPrevious',
      when: 'terminalTabsFocus',
    },
    {
      comment: 'Up in Terminal List',
      key: 'ctrl+i',
      command: 'workbench.action.terminal.focusPrevious',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },
    {
      comment: 'Down in Terminal List',
      key: 'k',
      command: 'workbench.action.terminal.focusNext',
      when: 'terminalTabsFocus',
    },
    {
      comment: 'Down in Terminal List',
      key: 'ctrl+k',
      command: 'workbench.action.terminal.focusNext',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      comment: 'Kill Terminal',
      key: 'ctrl+q',
      command: 'workbench.action.terminal.killActiveTab',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },
    {
      comment: 'Kill Terminal',
      key: 'q',
      command: 'workbench.action.terminal.killActiveTab',
      when: 'terminalTabsFocus',
    },

    {
      comment: 'Rename Terminal',
      key: 'r',
      command: 'workbench.action.terminal.renameActiveTab',
      when: 'terminalTabsFocus',
    },

    {
      comment: 'Toggle Terminal Max Height',
      key: 'h',
      command: 'workbench.action.terminal.toggleEditorVisibility',
      when: 'terminalTabsFocus',
    },
    {
      comment: 'Toggle Terminal Max Height',
      key: 'ctrl+h',
      command: 'workbench.action.terminal.toggleEditorVisibility',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      comment: 'Go to Terminal Side List',
      key: 'ctrl+l',
      command: 'workbench.action.terminal.focusTabs',
      when: 'terminalFocusInAny || terminalTabsFocus',
    },

    {
      comment: 'Clear Terminal Current Command',
      key: 'ctrl+backspace',
      command: 'workbench.action.terminal.clearSelection',
      when: 'terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible',
    },
    {
      comment: 'Clear Terminal Current Command',
      key: 'escape',
      command: '-workbench.action.terminal.clearSelection',
      when: 'terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible',
    },
  ],

  sourceControlNavigation: [
    {
      comment: 'Open Source Control View',
      key: 'b g',
      command: 'workbench.view.scm',
      when: 'listFocus && !inputFocus',
    },
    {
      comment: 'Open Source Control View',
      before: 'bg',
      command: 'workbench.view.scm',
      modes: 'n',
    },

    {
      comment: 'Open Commits View',
      key: 'b space g',
      command: 'gitlens.views.commits.focus',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Reveal File on Explorer',
      key: 'o',
      command: 'git.revealInExplorer',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Discard Changes',
      key: 'q',
      command: 'git.clean',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Discard All Changes',
      key: 'shift+q',
      command: 'git.cleanAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Stage the Current File',
      key: 'a',
      command: 'git.stage',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Stage All Files',
      key: 'shift+a',
      command: 'git.stageAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Unstage the Current File',
      key: 'u',
      command: 'git.unstage',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Unstage All Files',
      key: 'shift+u',
      command: 'git.unstageAll',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Commit Changes',
      key: 'c',
      command: 'git.commitStaged',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Push Changes',
      key: 'shift+p',
      command: 'git.push',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Pull Changes',
      key: 'p',
      command: 'git.pull',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Fetch Changes',
      key: 'f',
      command: 'git.fetch',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Merge Changes',
      key: 'm',
      command: 'git.merge',
      when: 'workbench.scm.active && !inputFocus',
    },
    {
      comment: 'Checkout Branch (Open Dialog)',
      key: 'z',
      command: 'git.checkout',
      when: 'workbench.scm.active && !inputFocus',
    },
  ],

  textManipulation: [
    {
      comment: 'Move Line Up',
      key: 'ctrl+i',
      command: 'editor.action.moveLinesUpAction',
      when: 'editorTextFocus && !editorReadonly',
    },
    {
      comment: 'Move Line Down',
      key: 'ctrl+k',
      command: 'editor.action.moveLinesDownAction',
      when: 'editorTextFocus && !editorReadonly',
    },
    {
      comment: 'Copy Line Up',
      key: 'ctrl+u',
      command: 'editor.action.copyLinesUpAction',
      when: 'editorTextFocus && !editorReadonly',
    },
    {
      comment: 'Copy Line Down',
      key: 'ctrl+j',
      command: 'editor.action.copyLinesDownAction',
      when: 'editorTextFocus && !editorReadonly',
    },
    {
      comment: 'Duplicate Cursor Up',
      key: 'ctrl+o',
      command: 'cursorColumnSelectUp',
      when: 'editorTextFocus && !editorReadonly',
    },
    {
      comment: 'Duplicate Cursor Down',
      key: 'ctrl+l',
      command: 'cursorColumnSelectDown',
      when: 'editorTextFocus && !editorReadonly',
    },
  ],

  layoutManipulation: [
    {
      comment: 'Toggle Editor Group Layout (Vertical/Horizontal)',
      before: 'ev',
      command: 'workbench.action.toggleEditorGroupLayout',
    },
    {
      comment: 'Toggle Editor Group Sizes',
      before: 'eb',
      command: 'workbench.action.toggleEditorWidths',
    },
    {
      comment: 'Reset Editor Group Sizes',
      before: 'ey',
      command: 'workbench.action.evenEditorWidths',
    },
    {
      comment: 'Increase Editor Group Size',
      before: 'em',
      command: 'workbench.action.increaseViewSize',
    },
    {
      comment: 'Decrease Editor Group Size',
      before: 'en',
      command: 'workbench.action.decreaseViewSize',
    },
  ],

  tabManipulation: [
    // Focus Editors
    {
      comment: 'Focus Left Editor',
      before: 'ej',
      command: 'workbench.action.previousEditorInGroup',
    },
    {
      comment: 'Focus Right Editor',
      before: 'el',
      command: 'workbench.action.nextEditorInGroup',
    },
    {
      comment: 'Focus First Editor in Group',
      before: 'eh',
      command: 'workbench.action.firstEditorInGroup',
    },
    {
      comment: 'Focus Last Editor in Group',
      before: 'e;',
      command: 'workbench.action.lastEditorInGroup',
    },
    {
      comment: 'Focus Editor Number #',
      before: 'eg',
      after: 'gt',
    },

    // Move Editors
    {
      comment: 'Move Editor Left',
      before: 'eu',
      command: 'workbench.action.moveEditorLeftInGroup',
    },
    {
      comment: 'Move Editor Right',
      before: 'eo',
      command: 'workbench.action.moveEditorRightInGroup',
    },
  ],

  tabBetweenGroupsManipulation: [
    // Move Tabs
    {
      comment: 'Move Tab to Group on Left',
      before: '<leader>ej',
      command: 'workbench.action.moveEditorToLeftGroup',
    },
    {
      comment: 'Move Tab to Group on Right',
      before: '<leader>el',
      command: 'workbench.action.moveEditorToRightGroup',
    },
    {
      comment: 'Move Tab to Group Above',
      before: '<leader>ei',
      command: 'workbench.action.moveEditorToAboveGroup',
    },
    {
      comment: 'Move Tab to Group Below',
      before: '<leader>ek',
      command: 'workbench.action.moveEditorToBelowGroup',
    },

    // Split Tabs
    {
      comment: 'Split Editor',
      before: 'ee',
      command: 'workbench.action.splitEditor',
    },
    {
      comment: 'Split Editor Horizontally',
      before: '<leader>ee',
      command: 'workbench.action.splitEditorDown',
    },
  ],

  groupManipulation: [
    // Focus Groups
    {
      comment: 'Focus Left Group',
      before: 'ew',
      command: 'workbench.action.focusLeftGroup',
    },
    {
      comment: 'Focus Right Group',
      before: 'er',
      command: 'workbench.action.focusRightGroup',
    },
    {
      comment: 'Focus Group Above',
      before: 'ei',
      command: 'workbench.action.focusAboveGroup',
    },
    {
      comment: 'Focus Group Below',
      before: 'ek',
      command: 'workbench.action.focusBelowGroup',
    },

    // Move Groups
    {
      comment: 'Move Group Left',
      before: '<leader><leader>ej',
      command: 'workbench.action.moveActiveEditorGroupLeft',
    },
    {
      comment: 'Move Group Right',
      before: '<leader><leader>el',
      command: 'workbench.action.moveActiveEditorGroupRight',
    },
    {
      comment: 'Move Group Up',
      before: '<leader><leader>ei',
      command: 'workbench.action.moveActiveEditorGroupUp',
    },
    {
      comment: 'Move Group Down',
      before: '<leader><leader>ek',
      command: 'workbench.action.moveActiveEditorGroupDown',
    },
  ],
};

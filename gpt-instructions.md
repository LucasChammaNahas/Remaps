Keymap Transformation Rules

====================================
1. PLATFORM TYPES (auto-detected)
====================================

- Pure VSCode:
  type: 'vscode'

- VSCode command triggered via Vim:
  type: 'vimToVscode'

- Vim input triggered via VSCode:
  type: 'vscodeToVim'

- Pure Vim (VSCode Vim plugin):
  type: 'vim'

- Pure Neovim:
  type: 'neovim'


====================================
2. NEOVIM INHERITANCE
====================================

- For every 'vim' entry, also create a 'neovim' entry:
  {
    type: 'neovim',
    isVimClone: true
  }

- Do NOT repeat triggers/command in Neovim unless behavior differs.
- In the future, if Neovim differs, remove 'isVimClone' and define normally.


====================================
3. DEFAULT MODES
====================================

- If type is 'vim' or 'vimToVscode' and no modes are defined:
  Add: modes: ['normal', 'visual']

- If ALL mappings inside a group share the same modes:
  Move 'modes' to the GROUP level instead.


====================================
4. FIELD NAMING CONVENTIONS
====================================

- triggers         → array of keys that activate the mapping
- command          → the output action (Vim string or command ID)
- removeCommand    → optional command to unregister
- when             → VSCode context filter (optional)
- description      → human-readable summary (optional)
- group            → section name (capitalized)


====================================
5. OUTPUT PRINCIPLES
====================================

- Only include fields that are defined
- No null, undefined, or empty values
- Always generate the simplest valid version


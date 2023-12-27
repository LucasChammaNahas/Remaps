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
    },
    {
      comment: 'Move Cursor Down',
      before: ['k'],
      after: 'j',
    },
    {
      comment: 'Move Cursor Left',
      before: ['j'],
      after: 'h',
    },
    {
      comment: 'Move Cursor Right',
      before: ['l'],
      after: 'l',
    },
    {
      comment: 'Move Cursor Strong Up',
      before: ['<leader>I'],
      after: '5k',
    },
    {
      comment: 'Move Cursor Strong Down',
      before: ['<leader>K'],
      after: '5j',
    },
    {
      comment: 'Move Cursor Strong Left',
      before: ['<leader>J'],
      after: '12h',
    },
    {
      comment: 'Move Cursor Strong Right',
      before: ['<leader>L'],
      after: '12l',
    },
    {
      comment: 'Move Cursor Stronger Up',
      before: ['I'],
      after: '10k',
    },
    {
      comment: 'Move Cursor Stronger Down',
      before: ['K'],
      after: '10j',
    },
    {
      comment: 'Move Cursor Stronger Left',
      before: ['J'],
      after: '10h',
    },
    {
      comment: 'Move Cursor Stronger Right',
      before: ['L'],
      after: '10l',
    },
  ],

  word: [
    {
      comment: 'Go to Start of Word',
      before: ['w;'],
      after: 'w',
    },
    {
      comment: 'Go to Start of WORD',
      before: ['ww;'],
      after: 'W',
    },
    {
      comment: 'Go to End of Word',
      before: ['wl'],
      after: 'e',
    },
    {
      comment: 'Go to Start of WORD',
      before: ['wwl'],
      after: 'E',
    },
    {
      comment: 'Go Back to Start of Word',
      before: ['wj'],
      after: 'b',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: ['wwj'],
      after: 'B',
    },
    {
      comment: 'Go Back to End of Word',
      before: ['wh'],
      after: 'ge',
    },
    {
      comment: 'Go Back to Start of WORD',
      before: ['wwh'],
      after: 'gE',
    },
  ],

  line: [
    {
      comment: 'Go to Start of Line',
      before: ['h'],
      after: '^',
    },
    {
      comment: 'Go to End of Line',
      before: [';'],
      after: 'g_',
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
  ],

  case: [
    {
      comment: '',
      before: [''],
      after: '',
    },
  ],

  x: [
    {
      comment: 'Join With Line Below With Space',
      before: ['cl'],
      after: 'J',
      modes: 'n',
    },
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
  ],
};

import { getTargetedMotions } from './utils/getTargetedMotions.mjs';
import { getTextManipulationMotions } from './Utils/getTextManipulationMotions.mjs';

export const config = {
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
      afterPrefix: 'viw',
      targetName: 'Word',
    }),
    ...getTextManipulationMotions({
      before: 'DD',
      after: 'y',
      operatorName: 'Yank',
      afterPrefix: 'EvB',
      targetName: 'WORD',
    }),
    ...getTextManipulationMotions({
      before: 'dk',
      after: 'yy',
      operatorName: 'Yank',
      targetName: 'Line',
    }),
  ],

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
};

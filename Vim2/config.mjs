import * as f from './functions.mjs';

export const config = {
  movements: {
    basic: [
      // ...f.getMovements({ comment: 'Move Cursor' }),
      ...f.getMovements({
        comment: 'Move Cursor Strong',
        before: '<leader>',
        afterY: '5',
        afterX: '12',
      }),
      // ...f.getMovements({
      //   comment: 'Move Cursor Stronger',
      //   after: '10',
      //   direction: 'y',
      //   modifiers: ['shift'],
      // }),
    ],
  },
};

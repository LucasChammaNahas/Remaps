import { movementMap } from './constants.mjs';

export function getMovements(props) {
  const {
    comment = '',
    modes,
    before = '',
    after = '',
    afterY = '',
    afterX = '',
    modifiers = [],
  } = props;

  const remaps = [];

  for (const movement of movementMap) {
    let movementBefore = movement.before;
    if (modifiers.includes('shift')) {
      movementBefore = movementBefore.toUpperCase();
    }

    let updatedAfter = after;
    if (afterY || afterX) {
      if (movement.direction === 'y') {
        updatedAfter = afterY;
      } else if (movement.direction === 'x') {
        updatedAfter = afterX;
      }
    }

    const remap = {
      modes,
      comment: `${comment} ${movement.name}`.trim(),
      before: before + movementBefore,
      after: updatedAfter + movement.after,
    };

    remaps.push(remap);
  }

  return remaps;
}

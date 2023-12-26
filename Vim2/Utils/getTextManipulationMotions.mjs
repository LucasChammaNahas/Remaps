const leader = '<leader>';

export function getTextManipulationMotions(props) {
  const { before, after, operatorName, targetName = '' } = props;

  const operators = [];
  let auxLeader = '';
  let registers = ['"a', '"b', '"c'];
  let afterPrefix = '';

  if (operatorName === 'Yank') {
    registers.unshift('');
  }
  if (operatorName === 'Change') {
    registers.unshift('"_');
  }
  if (operatorName === 'Cut') {
    registers.unshift('');
  }
  if (operatorName === 'Delete') {
    registers = [''];
  }

  if (targetName === 'Word') {
    afterPrefix = 'viw';
  }
  if (targetName === 'WORD') {
    afterPrefix = 'EvB';
  }

  for (const register of registers) {
    let registerName = register[1]?.toUpperCase();
    if (register === '') {
      registerName = 'Clipboard';
    }
    if (register === '"_') {
      registerName = 'Black Hole';
    }

    let comment = `${operatorName} ${targetName} to Register ${registerName}`;
    comment = comment.replace(/\s{2,}/g, ' ');

    const operator = {
      comment,
      before: [auxLeader + before],
      after: afterPrefix + register + after,
    };

    operators.push(operator);
    auxLeader += leader;
  }

  return operators;
}

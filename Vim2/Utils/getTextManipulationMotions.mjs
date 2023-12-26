const leader = '<leader>';
const registers = ['0', 'a', 'b', 'c'];

export function getTextManipulationMotions(props) {
  const { before, after, operatorName, targetName = '', afterPrefix = '' } = props;

  const operators = [];
  let auxLeader = '';

  for (const register of registers) {
    const registerInfix = register === '0' ? '' : '"' + register;

    let comment = `${operatorName} ${targetName} to Register ${register.toUpperCase()}`;
    comment = comment.replace(/\s{2,}/g, ' ');

    const operator = {
      comment,
      before: [auxLeader + before],
      after: afterPrefix + registerInfix + after,
    };

    operators.push(operator);
    auxLeader += leader;
  }

  return operators;
}

const leader = '<leader>';

export function getTextCommands(props) {
   const { before, after, operatorName, targetName = '', modes } = props;

   const operators = [];
   let auxLeader = '';
   let registers = ['"a', '"b', '"c'];
   let afterPrefix = '';
   let toOrFrom = 'To';

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
      registers = ['"_'];
   }
   if (operatorName.includes('Paste')) {
      registers.unshift('');
      toOrFrom = 'From';
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

      let comment = `${operatorName} ${targetName} ${toOrFrom} Register ${registerName}`;
      comment = comment.replace(/\s{2,}/g, ' ');

      const operator = {
         comment,
         before: auxLeader + before,
         after: afterPrefix + register + after,
      };

      if (modes) {
         operator.modes = modes;
      }

      operators.push(operator);
      auxLeader += leader;
   }

   return operators;
}

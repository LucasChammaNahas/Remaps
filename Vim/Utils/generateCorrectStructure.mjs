export function generateCorrectVimStructure(command) {
   const updatedCommand = {
      comment: command.comment,
      before: splitInputCommands(command.before),
   };

   if ('after' in command) {
      updatedCommand.after = splitInputCommands(command.after);
   }

   if ('command' in command) {
      updatedCommand.commands = [command.command];
   }

   return updatedCommand;
}

export function generateCorrectCodeStructure(command, os) {
   let key = command.key;
   if (os === 'mac') {
      key = key.replace('ctrl', 'cmd');
      key = key.replace('win', 'ctrl');
   }

   const updatedCommand = {
      comment: command.comment,
      key,
      command: command.command,
   };

   if ('when' in command) {
      updatedCommand.when = command.when;
   }

   if ('after' in command) {
      updatedCommand.args = {
         after: splitInputCommands(command.after),
      };
   }

   return updatedCommand;
}

function splitInputCommands(inputString) {
   const inputArray = inputString.split('');
   const positions = [];

   for (const [mainIndex, char] of inputArray.entries()) {
      if (char === '<') {
         const restOfArray = inputArray.slice(mainIndex + 1);
         for (const [subIndex, char] of restOfArray.entries()) {
            if (char === '<') {
               break;
            }
            if (char === '>') {
               const position = { start: mainIndex, end: subIndex + mainIndex + 1 };
               if (position.end - position.start > 1) {
                  positions.unshift(position);
               }
               break;
            }
         }
      }
   }

   let returnArray = [...inputArray];
   for (const position of positions) {
      const start = position.start;
      const end = position.end;

      const beforeArray = returnArray.slice(0, start);
      const enclosedCommand = returnArray.slice(start, end + 1).join('');
      const afterArray = returnArray.slice(end + 1);

      returnArray = [...beforeArray, enclosedCommand, ...afterArray];
   }

   return returnArray;
}

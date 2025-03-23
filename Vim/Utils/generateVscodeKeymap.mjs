import { getCommandTypes } from './getCommandTypes.mjs';
import { splitInputCommands } from './splitInputCommands.mjs';

export function generateVscodeKeymap(keymapBlueprint, os) {
   const vscodeCurrentOsKeymap = [];

   for (const command of keymapBlueprint) {
      const commandTypes = getCommandTypes(command);

      if (!commandTypes.includes('code')) {
         continue;
      }
      const currentOsCommand = generateCorrectCodeStructure(command, os);
      vscodeCurrentOsKeymap.push(currentOsCommand);
   }

   return vscodeCurrentOsKeymap;
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
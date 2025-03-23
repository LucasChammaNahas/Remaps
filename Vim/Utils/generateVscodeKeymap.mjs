import { getCommandTypes } from './getCommandTypes.mjs';
import { generateCorrectCodeStructure } from './generateCorrectStructure.mjs';

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

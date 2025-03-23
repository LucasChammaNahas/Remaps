import { getCommandTypes } from './getCommandTypes.mjs';
import { generateCorrectVimStructure } from './generateCorrectStructure.mjs';

const VIM_MODES = {
   normal: 'vim.normalModeKeyBindingsNonRecursive',
   visual: 'vim.visualModeKeyBindingsNonRecursive',
   pending: 'vim.operatorPendingModeKeyBindingsNonRecursive',
};

export function generateVimKeymap(keymapBlueprint) {
   const vimKeymap = {
      [VIM_MODES.normal]: [],
      [VIM_MODES.visual]: [],
      [VIM_MODES.pending]: [],
   };

   for (const command of keymapBlueprint) {
      const commandTypes = getCommandTypes(command);

      if (commandTypes.includes('code')) {
         continue;
      }

      const vimCommand = generateCorrectVimStructure(command);

      for (const type of commandTypes) {
         vimKeymap[VIM_MODES[type]].push(vimCommand);
      }
   }

   return vimKeymap;
}

export function assembleKeymapBlueprint(config) {
   const allCommands = [];

   for (const subCommands of Object.values(config)) {
      let defaultModes = 'nv';

      if ('defaultModes' in subCommands[0]) {
         defaultModes = subCommands[0].defaultModes;
         subCommands.shift();
      }

      for (const command of subCommands) {
         let isOnList = false;
         command.modes = command.modes ?? defaultModes;

         for (const [entryName, entry] of Object.entries(command)) {
            if (Array.isArray(entry)) {
               isOnList = true;

               for (const shortcut of entry) {
                  const singleCommand = { ...command, [entryName]: shortcut };
                  allCommands.push(singleCommand);
               }
            }
         }

         if (!isOnList) {
            allCommands.push({ ...command });
         }
      }
   }

   return allCommands;
}

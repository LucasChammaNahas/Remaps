const result = {
   type: 'vim',
   description: 'Move Cursor Up',
   group: 'Basic motions',
   mode: 'normal',
   trigger: 'i',
   command: 'k',
};

export function assembleKeymapBlueprint(configArray) {
   const commandList = [];

   for (const element of configArray) {
      const { group, modes: highLevelModes, mappings } = element;

      for (const mapping of mappings) {
         const { description, modes: mappingLevelModes, platforms } = mapping;

         for (const platform of platforms) {
            const {
               command,
               isVimClone,
               modes: platformLevelModes,
               removeCommand,
               triggers,
               type,
               when,
            } = platform;

            const commands = [command, removeCommand].filter(Boolean);

            for (const command of commands) {
               for (const trigger of triggers) {
                  const modes = platformLevelModes ?? mappingLevelModes ?? highLevelModes;

                  for (const mode of modes ?? [undefined]) {
                     commandList.push({
                        command,
                        description,
                        group,
                        isVimClone,
                        mode,
                        type,
                        trigger,
                        when,
                     });
                  }
               }
            }
         }
      }
   }

   return commandList;
}

export function assembleKeymapBlueprintOld(config) {
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

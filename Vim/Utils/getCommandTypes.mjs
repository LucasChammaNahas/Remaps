export function getCommandTypes(command) {
   const isCode = 'key' in command;
   if (isCode) {
      return ['code'];
   }

   const isVim = 'before' in command;
   if (!isVim) {
      throw new Error('Command type not recognized');
   }
   if (!command.modes) {
      throw new Error('Modes not defined');
   }

   const modes = [];
   if (command.modes.includes('n')) {
      modes.push('normal');
   }
   if (command.modes.includes('v')) {
      modes.push('visual');
   }
   if (command.modes.includes('p')) {
      modes.push('pending');
   }

   return modes;
}

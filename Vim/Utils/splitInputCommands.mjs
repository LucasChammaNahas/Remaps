export function splitInputCommands(input) {
   const result = [];

   for (let i = 0; i < input.length; ) {
      const char = input[i];

      if (char === '<') {
         const end = input.indexOf('>', i);
         const hasMatchingBracket = end !== -1;

         if (hasMatchingBracket) {
            const bracketToken = input.slice(i, end + 1);
            result.push(bracketToken);
            i = end + 1;
            continue;
         }
      }

      result.push(char);
      i++;
   }

   return result;
}

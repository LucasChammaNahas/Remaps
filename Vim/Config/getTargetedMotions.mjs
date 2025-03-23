export function getTargetedMotions() {
   const remaps = [];

   for (const key of keyToSymbolMap) {
      remaps.push(getObject(key[0], key[1], 'n', 'Forwards'));
      remaps.push(getObject(key[0], key[1], 'v', 'Forwards'));
      remaps.push(getObject(key[0], key[1], 'n', 'Backwards'));
      remaps.push(getObject(key[0], key[1], 'v', 'Backwards'));
   }

   return remaps;
}

function getObject(key0, key1, mode, type) {
   let afterSuffix = '';
   let leader = '';

   if (mode === 'n' && type === 'Forwards') {
      afterSuffix = 'f';
   }
   if (mode === 'v' && type === 'Forwards') {
      afterSuffix = 't';
   }
   if (mode === 'n' && type === 'Backwards') {
      afterSuffix = 'F';
      leader = '<leader>';
   }
   if (mode === 'v' && type === 'Backwards') {
      afterSuffix = 'T';
      leader = '<leader>';
   }

   return {
      comment: `Target ${type} Special Symbol`,
      modes: mode,
      before: leader + 'n' + key0,
      after: afterSuffix + key1,
   };
}

const keyToSymbolMap = [
   'q#',
   'w|',
   'e[',
   'r]',
   't~',
   'a@',
   's(',
   'd)',
   'f;',
   'g:',
   'z/',
   'x*',
   'c+',
   'v%',
   'b$',
   'y&',
   'u<',
   'i=',
   'o>',
   'p!',
   'h`',
   'j{',
   'k}',
   "l'",
   '\'"',
   'n-',
   'm_',
   ',,',
   '..',
   '/?',
   '  ',
];

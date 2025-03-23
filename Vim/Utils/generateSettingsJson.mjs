import fs from 'fs';

export function generateSettingsJson(vimSettings, os) {
   const complementarySettingsJson =
      fs.readFileSync(`./Config/${os}.settings.jsonc`, 'utf8') || '{}';

   const complementarySettings = JSON.parse(complementarySettingsJson) || {};

   const settings = { ...complementarySettings, ...vimSettings };

   const settingsJson = JSON.stringify(settings, null, 2);

   return settingsJson;
}

import { config } from './config.mjs';
import fs from 'fs';

const jsonData = JSON.stringify(config, null, 2);

fs.writeFileSync('output.json', jsonData);

// console.log(f.getMovements({ comment: 'Move cursor up', direction: 'y' }));

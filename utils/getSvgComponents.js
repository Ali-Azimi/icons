// utils/getSvgComponents.js
import fs from 'fs';
import path from 'path';

export function getSvgComponents() {
  const directoryPath = path.join(process.cwd(), '/icons');
  const filenames = fs.readdirSync(directoryPath);
  console.log(filenames);
  const svgComponents = {};

  filenames.forEach((filename) => {
    const componentName = path.basename(filename, '.svg');
    debugger;
    svgComponents[componentName] = dynamic(() => import(`/icons/${filename}`));
  });

  return svgComponents;
}

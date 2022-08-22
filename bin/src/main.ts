import { getOptions } from './options.js';
import { usage } from './usage.js';

const main = async (args = process.argv.slice(2)): Promise<void> => {
  const options = getOptions(args);

  if (options.help) {
    usage();
    return;
  }

  if (options.version) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    console.log(require('../package.json').version);
    return;
  }

  console.log(`Hello, ${args[0] || 'World'}!`);
};

export { main };

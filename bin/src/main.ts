import { usage } from './usage';

const main = async (args = process.argv.slice(2)): Promise<void> => {
  if (args.includes('--help')) {
    usage();
    return;
  }

  if (args.includes('--version')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    console.log(require('../package.json').version);
    return;
  }

  console.log(`Hello, ${args[0] || 'World'}!`);
};

export { main };

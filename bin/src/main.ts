import { usage } from './usage';

export async function main(args = process.argv.slice(2)): Promise<void> {
  if (args.includes('--help')) {
    usage();
    return;
  }

  if (args.includes('--version')) {
    // eslint-disable-next-line global-require
    console.log(require('../package.json').version);
    return;
  }

  console.log(`Hello, ${args[0] || 'World'}!`);
}

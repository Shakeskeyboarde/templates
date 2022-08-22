import { parseArgs } from 'node:util';

type Options = {
  readonly help: boolean;
  readonly version: boolean;
};

const getOptions = (args: readonly string[]): Options => {
  const options = parseArgs({
    args: [...args],
    options: {
      help: { short: 'h', type: 'boolean' },
      version: { short: 'v', type: 'boolean' },
    },
    strict: true,
  });

  return {
    help: Boolean(options.values.help),
    version: Boolean(options.values.version),
  };
};

export { getOptions };

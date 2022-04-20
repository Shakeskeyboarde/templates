const usage = (): void => {
  console.log(
    // eslint-disable-next-line prefer-template
    `
Usage: {{{&target}}} [options]
       {{{&target}}} --version
       {{{&target}}} --help

{{{Description}}}

Options:
  --version  Display the current version
  --help     Display this help text
    `.trim() + '\n',
  );
};

export { usage };

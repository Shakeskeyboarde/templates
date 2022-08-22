const usage = (): void => {
  console.log(
    `
Usage: {{{target.basename}}} [options]
       {{{target.basename}}} --version
       {{{target.basename}}} --help

{{{Description}}}

Options:
  -v, --version  Display the current version
  -h, --help     Display this help text
    `.trim() + '\n',
  );
};

export { usage };

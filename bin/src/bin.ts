#!/usr/bin/env node
const isDevelopment = process.env.NODE_ENV === 'development';

Promise.resolve()
  .then(async () => {
    if (isDevelopment) {
      try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        await import('source-map-support/register');
      } catch {
        // The source-map-support dependency is optional, and only installed
        // in development.
      }
    }

    return undefined;
  })
  .then(async () => import('./main'))
  .then(async ({ main }) => main())
  .catch((error) => {
    console.error(isDevelopment ? error : `${error}`);
    process.exitCode = 1;
  });

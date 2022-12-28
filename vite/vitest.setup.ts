/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import matchers, { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers.js';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

declare global {
  namespace Vi {
    interface Assertion<T = any> extends TestingLibraryMatchers<typeof expect.stringContaining, T> {}
  }
}

expect.extend(matchers as any);

afterEach(() => {
  cleanup();
});

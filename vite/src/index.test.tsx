import { type PropsWithChildren } from 'react';
import { type Root } from 'react-dom/client';
import { expect, test, vi } from 'vitest';

vi.mock('react', async () => ({
  ...(await vi.importActual<any>('react')),
  StrictMode: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));
vi.mock('react-dom/client', () => ({ createRoot: vi.fn() }));

test('render', async () => {
  vi.resetModules();

  const { createRoot } = await import('react-dom/client');
  const render = vi.fn();

  vi.mocked(createRoot).mockReturnValue({ render } as unknown as Root);

  await import('./index.js');

  expect(document.querySelector('body > div')).not.toBeNull();
  expect(render).toHaveBeenCalled();
  expect(render.mock.calls.at(-1)?.at(0)).toMatchSnapshot();
});

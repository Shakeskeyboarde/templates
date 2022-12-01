import { type PropsWithChildren } from 'react';
import { type Root } from 'react-dom/client';

jest.mock('react', () => ({
  ...jest.requireActual<any>('react'),
  StrictMode: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));
jest.mock('react-dom/client', () => ({ createRoot: jest.fn() }));

test('render', async () => {
  jest.resetModules();

  const { createRoot } = await import('react-dom/client');
  const render = jest.fn();

  jest.mocked(createRoot).mockReturnValue({ render } as unknown as Root);

  await import('./index.jsx');

  expect(document.querySelector('body > div')).not.toBeNull();
  expect(render).toHaveBeenCalled();
  expect(render.mock.calls.at(-1)?.at(0)).toMatchSnapshot();
});

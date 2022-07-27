import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './sidebar';

describe('Sidebar', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Sidebar hidden={false} />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should be hidden if passed with hidden true', () => {
    const tree = render(
      <BrowserRouter>
        <Sidebar hidden />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Header opened toggleOpened={() => {}} />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should be hidden when pass opened false', () => {
    const tree = render(
      <BrowserRouter>
        <Header opened={false} toggleOpened={() => {}} />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should change state when clicked on the burger button', () => {
    let opened = false;
    const toggle = () => {
      opened = true;
    };
    render(
      <BrowserRouter>
        <Header opened={opened} toggleOpened={toggle} />
      </BrowserRouter>
    );
    const burgerButton = screen.getByLabelText('BurgerButton');
    fireEvent.click(burgerButton);
    expect(opened).toEqual(true);
  });
});

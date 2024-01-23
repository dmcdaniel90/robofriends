import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('expect to render Header component', () => {
   
    const {container} = render(<Header />)
    expect(container.firstChild).toMatchSnapshot();
  })
})
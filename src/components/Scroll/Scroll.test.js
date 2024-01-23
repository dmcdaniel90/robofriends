import {render} from '@testing-library/react'
import Scroll from './Scroll';

describe('Scroll', () => {
  it('expect to render Scroll component', () => {
    const {container} = render(<Scroll />)
    expect(container).toMatchSnapshot();
  })
})
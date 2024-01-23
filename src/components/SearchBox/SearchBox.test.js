import {render} from '@testing-library/react'
import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('expect to render SearchBox component', () => {
    const {container} = render(<SearchBox />)
    expect(container).toMatchSnapshot();
  })
})
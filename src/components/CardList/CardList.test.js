import { render } from '../../utils/test-utils';
import CardList from './CardList';

describe('CardList', () => {
  it('expect to render CardList component', () => {
    const mockRobots = [ //This is needed because CardList expects a robots prop that is mapped over. Testing cannot be done for mapped components without a mock prop.
      {
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
      }
    ]
    
    const {container} = render(<CardList robots={mockRobots} />)
    expect(container.firstChild).toMatchSnapshot();
  })
})
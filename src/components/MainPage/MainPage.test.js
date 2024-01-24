import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = render(<MainPage {...mockProps} />)
})


describe('MainPage', () => {
  it('renders the MainPage component', () => {
    expect(wrapper.baseElement).toMatchSnapshot();
  })

  it('renders the loading page if isPending is true', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    }
    
    render(<MainPage {...mockProps} />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    }
  )

  it('filters robots correctly', async () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
        },
        {
        id: 4,
        name: 'Emily',
        email: 'emily@gmail.com'
        }
      ],
      searchField: 'emily',
    }
    render(<MainPage {...mockProps2} />)
    expect(screen.queryAllByText(/emily/i)).toHaveLength(2);
    expect(screen.queryAllByText(/john/i)).toHaveLength(0);
  })
})


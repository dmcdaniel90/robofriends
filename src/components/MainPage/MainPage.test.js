import { render, screen } from '../../utils/test-utils';
import App from '../../containers/App';


describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
  })

  it('renders the Loading screen', async () => {
    render(<App />)
    const loadingScreen = await screen.findByText('Loading');
    expect(loadingScreen).toBeInTheDocument();
  })

  it('renders the Header component once the loading screen has exited', async () => {
    render(<App />)
    await screen.findByTestId('card-list');

    const header = await screen.findByText(/RoboFriends/)
    expect(header).toBeInTheDocument();
  })
})


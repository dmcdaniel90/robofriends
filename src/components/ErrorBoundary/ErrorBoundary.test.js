import {render} from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders the ErrorBoundary component', () => {
    render(<ErrorBoundary />)
  })

  it('renders the ErrorBoundary component with an error', () => {
    const error = new Error('test error');
    const { container } = render(<ErrorBoundary error={error} />);
    expect(container).toMatchSnapshot();
  })
})
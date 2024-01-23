import {screen, render, fireEvent} from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  const mockProps = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    id: 1
  }
  
  it('expect to render Card component', () => {
    const {container} = render(<Card {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot();
  })

  it('renders the placeholder image when the image has not loaded', () => {
    render(<Card {...mockProps} />)
    const image = screen.getByTestId('card')

    expect(image).toHaveAttribute('src', 'placeholder.jpg')
  })

  it('renders the robot image when the image has loaded', () => {
    const id = 1

    render(<Card {...mockProps} />)
    const image = screen.getByTestId('card')

    fireEvent.load(image)
    expect(image).toHaveAttribute('src', `https://robohash.org/${id}?size=200x200`)
  })
})
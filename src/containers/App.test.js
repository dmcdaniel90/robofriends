import { mapDispatchToProps } from './App';
import { render } from '@testing-library/react';
import * as actions from '../actions';
import MainPage from '../components/MainPage/MainPage';

it('dispatches setSearchField action on search box change', () => {
  const mockDispatch = jest.fn();
  const mockSetSearchField = jest.spyOn(actions, 'setSearchField');
  const mockEvent = { target: { value: 'test' } };

  mapDispatchToProps(mockDispatch).onSearchChange(mockEvent);

  expect(mockSetSearchField).toHaveBeenCalledWith('test');
  expect(mockDispatch).toHaveBeenCalledTimes(1);
})

it('dispatches requestRobots action on component mount', () => {
  const mockDispatch = jest.fn();
  const mockRequestRobots = jest.spyOn(actions, 'requestRobots');

  mapDispatchToProps(mockDispatch).onRequestRobots();

  expect(mockRequestRobots).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledTimes(1);
})

it('renders the MainPage component', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }

  const {container} = render(<MainPage {...mockProps} />)
  expect(container).toMatchSnapshot();
})
import { mapDispatchToProps, mapStateToProps, App } from './App';
import { render } from '@testing-library/react';
import * as actions from '../actions';
import MainPage from '../components/MainPage/MainPage';

const mockDispatch = jest.fn();

describe('App component', () => {
  it('renders the App component', () => {
    const props = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }

    const { container } = render(<App {...props} />)
    expect(container).toMatchSnapshot();
  })

  it('renders the MainPage component by itself', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }

    const { container } = render(<MainPage {...mockProps} />)
    expect(container).toMatchSnapshot();
  })

  it('dispatches setSearchField action on search box change', () => {
    const mockSetSearchField = jest.spyOn(actions, 'setSearchField');
    const mockEvent = { target: { value: 'test' } };

    mapDispatchToProps(mockDispatch).onSearchChange(mockEvent);

    expect(mockSetSearchField).toHaveBeenCalledWith('test');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  })

  it('maps state to props', () => {
    const mockState = {
      searchRobots: {
        searchField: 'test'
      },
      requestRobots: {
        robots: [],
        isPending: false
      }
    }

    expect(mapStateToProps(mockState)).toEqual({ searchField: 'test', robots: [], isPending: false });
  })

  it('dispatches requestRobots action on component mount', () => {
    const mockRequestRobots = jest.spyOn(actions, 'requestRobots');

    mapDispatchToProps(mockDispatch).onRequestRobots();

    expect(mockRequestRobots).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  })
})

it('renders the App component', () => {
  const props = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }

  const { container } = render(<App {...props} />)
  expect(container).toMatchSnapshot();
})

it('renders the MainPage component by itself', () => {
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

it('dispatches setSearchField action on search box change', () => {
  const mockSetSearchField = jest.spyOn(actions, 'setSearchField');
  const mockEvent = { target: { value: 'test' } };

  mapDispatchToProps(mockDispatch).onSearchChange(mockEvent);

  expect(mockSetSearchField).toHaveBeenCalledWith('test');
  expect(mockDispatch).toHaveBeenCalledTimes(1);
})

it('maps state to props', () => {
  const mockState = {
    searchRobots: {
      searchField: 'test'
    },
    requestRobots: {
      robots: [],
      isPending: false
    }
  }

  expect(mapStateToProps(mockState)).toEqual({ searchField: 'test', robots: [], isPending: false });
})

it('dispatches requestRobots action on component mount', () => {
  const mockRequestRobots = jest.spyOn(actions, 'requestRobots');

  mapDispatchToProps(mockDispatch).onRequestRobots();

  expect(mockRequestRobots).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledTimes(1);
})


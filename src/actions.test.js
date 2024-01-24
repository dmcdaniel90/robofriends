import { setSearchField, requestRobots } from "./actions";
import * as reducers from "./constants";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";


const mockStore = configureMockStore([thunk]);

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: reducers.CHANGE_SEARCH_FIELD,
      payload: text
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });
})

describe("requestRobots", () => {
  it("should handle requesting robots API", () => {
    const store = mockStore({})
    store.dispatch(requestRobots())
    const actions = store.getActions();
  
    
    const expectedAction = {
      type: reducers.REQUEST_ROBOTS_PENDING
    };

    expect(actions[0]).toEqual(expectedAction);
  });

  it("should handle requesting robots API success", async () => {
    
    global.fetch = jest.fn()
    const mockFetch = (data, status = 200) => {
      return Promise.resolve({
        status,
        json: () => Promise.resolve(data)
      })
    }

    const mockedResponse = { mockResponse: 'test' };
    fetch.mockImplementation(() => mockFetch(mockedResponse))

    const expectedAction = [
      { type: 'REQUEST_ROBOTS_PENDING' },
      { type: 'REQUEST_ROBOTS_SUCESS', payload: { mockResponse: 'test' } }
    ]
    
    const store = mockStore()
    await store.dispatch(requestRobots())

    const actions = store.getActions();
    expect(actions).toEqual(expectedAction);
  });

  it("should handle requesting robots API error", async () => {
    
    global.fetch = jest.fn()
    const mockFetch = (data, status = 200, error) => {
      if(status === 200) {
        return Promise.resolve({
          status,
          json: () => Promise.resolve(data)
        })
      } else {
        return Promise.reject({
          error,
          status
        })
      }
    }
    const errorMessage = 'There was an error'
    fetch.mockImplementation(() => mockFetch(undefined, 404, errorMessage))

    const expectedAction = [
      { type: 'REQUEST_ROBOTS_PENDING' },
      { type: 'REQUEST_ROBOTS_FAILED', payload: {error: errorMessage, status: 404 } }
    ]
    
    const store = mockStore()
    await store.dispatch(requestRobots())

    const actions = store.getActions();
    expect(actions).toEqual(expectedAction);
  });
})


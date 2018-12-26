import {
  FETCH_ID_REQUEST,
  FETCH_ID_FAILURE,
  FETCH_ID_SUCCESS,
  requestID,
  failureID,
  successID,
} from './action';

describe('actions', () => {
  it('should create an action to request an id', () => {
    const id = 1;
    const expectedAction = {
      type: FETCH_ID_REQUEST,
      id,
    };
    expect(requestID(id)).toEqual(expectedAction);
  });
  it('should create an action to failure an id', () => {
    const id = 1;
    const error = new Error('failure to fetch');
    const expectedAction = {
      type: FETCH_ID_FAILURE,
      id,
      error
    };
    expect(failureID(id, error)).toEqual(expectedAction);
  });
  it('should create an action to success an id', () => {
    const id = 1;
    const response = { id: 1 };
    const expectedAction = {
      type: FETCH_ID_SUCCESS,
      id,
      response,
    };
    expect(successID(id, response)).toEqual(expectedAction);
  });
});

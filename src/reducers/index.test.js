import reducer from "./ ";


describe("Accordion reducer", () => {
  it("does not update state when action type is missing or unknown", () => {
    const initialState = {};
    const action = {};

    const newState = reducer(initialState, action);

    expect(newState).toBe(initialState);
  });

  it("does not update the state when action type is undefined", () => {
    const initialState = {};
    const action = undefined;

    const newState = reducer(initialState, action);

    expect(newState).toBe(initialState);
  });

  it("adds one item to isOpen list", () => {
    const initialState = {};
    const action = { type: "OPEN_ACCORDION", payload: 'id-1' };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ isOpen: ['id-1'] });
  });

  it("adds item to isOpen with existing items", () => {
    const initialState = { isOpen: ['id-1'] };
    const action = { type: "OPEN_ACCORDION", payload: 'id-2' };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ isOpen: ['id-1', 'id-2'] });
  });

  it("adds multiple items to isOpen list", () => {
    const initialState = {};
    const action = { type: "OPEN_ACCORDIONS", payload: ['id-1', 'id-2'] };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ isOpen: ['id-1', 'id-2'] });
  });

  it("adds items to isOpen with existing isOpen", () => {
    const initialState = { isOpen: ['id-1'] };
    const action = { type: "OPEN_ACCORDIONS", payload: ['id-2', 'id-3'] };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ isOpen: ['id-1', 'id-2', 'id-3'] });
  });

  it("removes one item from the isOpen list", () => {
    const initialState = Object.freeze({ isOpen: Object.freeze(['id-1', 'id-2', 'id-3']) });
    const action = { type: "CLOSE_ACCORDION", payload: 'id-2' };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ isOpen: ['id-1', 'id-3'] });
  });

  it("removes multiple items from the isOpen list", () => {
    const initialState = { isOpen: ['id-1', 'id-2', 'id-3'] };
    const action = { type: "CLOSE_ACCORDIONS", payload: ['id-1', 'id-2'] };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ isOpen: ['id-3'] });
  });
});

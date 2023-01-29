import usersReducer, { UsersState } from "./usersSlice";

describe("users reducer", () => {
  const initialState: UsersState = { usersList: [] };

  it("should handle initial state", () => {
    expect(usersReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });
});

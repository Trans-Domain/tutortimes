import hashPassword from "./passwordHashing";

describe("Make sure password gets hashed", () => {
  test("regular password does not equal hashed password", () => {
    expect(
      hashPassword({ fullname: "John Doe", password: "password" }).password
    ).not.toMatch("password");
  });
});

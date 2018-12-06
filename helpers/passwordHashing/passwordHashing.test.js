import hashPassword from "./passwordHashing";

describe("Make sure password gets hashed", () => {
  test("regular password does not equal hashed password", () => {
    expect.assertions(1);
    return hashPassword({
      fullname: "John Doe",
      password: "password"
    }).then(data => expect(data.password).not.toMatch("password"));
  });
});

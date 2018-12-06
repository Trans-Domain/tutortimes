import hashPassword from "./passwordHashing";

describe("Make sure password gets hashed", () => {
  test("regular password does not equal hashed password", () => {
    return hashPassword({
      fullname: "John Doe",
      password: "password"
    }).then(data => expect(data.password).not.toMatch("password"));
  });
});

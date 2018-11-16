import getInfoUpdates from "./getInfoUpdates";

describe("Tutor: Get tutor info updates", () => {
  test("return tutor bio with modified object", () => {
    expect(getInfoUpdates({ bio: "I like studying" }, "tutors")).toEqual({
      "tutors.$.bio": "I like studying"
    });
  });

  test("return tutor bio and phone modified object", () => {
    expect(
      getInfoUpdates(
        {
          bio: "I like studying",
          phone: "123-456-7890"
        },
        "tutors"
      )
    ).toEqual({
      "tutors.$.bio": "I like studying",
      "tutors.$.phone": "123-456-7890"
    });
  });
});

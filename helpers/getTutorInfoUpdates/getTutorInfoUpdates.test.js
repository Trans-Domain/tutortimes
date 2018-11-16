import getTutorInfoUpdates from "./getTutorInfoUpdates";

describe("get tutor info updates", () => {
  test("return bio with modified object", () => {
    expect(getTutorInfoUpdates({ bio: "I like studying" })).toEqual({
      "tutors.$.bio": "I like studying"
    });
  });

  test("return bio and phone modified object", () => {
    expect(
      getTutorInfoUpdates({
        bio: "I like studying",
        phone: "123-456-7890"
      })
    ).toEqual({
      "tutors.$.bio": "I like studying",
      "tutors.$.phone": "123-456-7890"
    });
  });
});

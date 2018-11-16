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

describe("Student: Get student info updates", () => {
  test("return student modified bio object", () => {
    expect(
      getInfoUpdates({ bio: "I am NOT a random student." }, "students")
    ).toEqual({
      "students.$.bio": "I am NOT a random student."
    });
  });
  test("return student modified bio, goal and phone object", () => {
    expect(
      getInfoUpdates(
        {
          bio: "I'm a student",
          goal: "To score good grades",
          phone: "123-456-7890"
        },
        "students"
      )
    ).toEqual({
      "students.$.bio": "I'm a student",
      "students.$.goal": "To score good grades",
      "students.$.phone": "123-456-7890"
    });
  });
});


const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const collagetest = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", collagetest);
    expect(e.school).toBe(collagetest);
});

test("getRole() should return \"Intern\"", () => {
    const collagetest = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(collagetest);
});

test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
import { omit, pick } from "../../helpers/objectHelper";

describe("helpers", () => {
    describe("object", () => {
        describe("omit", () => {
            it("should omit given properties to new object", () => {
                const source = { a: 1, b: 2, s1: "string1", s2: "string2" };
                expect(omit({ a: 1, b: 2, s1: "string1", s2: "string2" }, "a", "s1")).toEqual({ b: 2, s2: "string2" });
                expect(source).toEqual({ a: 1, b: 2, s1: "string1", s2: "string2" });
            });
        });

        describe("pick", () => {
            it("should omit given properties", () => {
                const source = { a: 1, b: 2, s1: "string1", s2: "string2" };
                expect(pick({ a: 1, b: 2, s1: "string1", s2: "string2" }, "a", "s1")).toEqual({ a: 1, s1: "string1" });
                expect(source).toEqual({ a: 1, b: 2, s1: "string1", s2: "string2" });
            });
        });
    });
});

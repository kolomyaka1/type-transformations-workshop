import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataResults = typeof fakeDataDefaults;

export type StringType = FakeDataResults["String"];
export type IntType = FakeDataResults["Int"];
export type FloatType = FakeDataResults["Float"];
export type BooleanType = FakeDataResults["Boolean"];
export type IDType = FakeDataResults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];

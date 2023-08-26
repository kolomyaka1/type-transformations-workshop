import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = typeof fruits[0] | typeof fruits[1];
type correctNumber = 0 | 1 | 2
type Fruit = typeof fruits[correctNumber]

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];

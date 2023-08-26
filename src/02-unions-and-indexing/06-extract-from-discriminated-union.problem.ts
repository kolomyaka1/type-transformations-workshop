import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// can delete event, cause we get this event only if getting type "click"
type ClickEvent = Extract<Event, { type: 'click', event: MouseEvent }>

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];

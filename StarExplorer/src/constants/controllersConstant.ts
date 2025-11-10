import { Input } from "../types";

export const KeyMap: Record<string, Input> = {
  w: Input.Up,
  ArrowUp: Input.Up,
  a: Input.Left,
  ArrowLeft: Input.Left,
  s: Input.Down,
  ArrowDown: Input.Down,
  d: Input.Right,
  ArrowRight: Input.Right,
  " ": Input.Space,
  Enter: Input.Enter,
  Control: Input.Control,
  "1": Input.Key1,
  "2": Input.Key2,
  "3": Input.Key3,
  "4": Input.Key4,
  "5": Input.Key5,
  "6": Input.Key6,
  "7": Input.Key7,
  "8": Input.Key8,
  "9": Input.Key9,
  "0": Input.Key0,
};

export const currentInput: Record<Input, boolean> = Object.values(Input).reduce(
  (acc, key) => {
    acc[key] = false;
    return acc;
  },
  {} as Record<Input, boolean>
);

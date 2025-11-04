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
};

export const currentInput: Record<Input, boolean> = {
  [Input.Up]: false,
  [Input.Left]: false,
  [Input.Down]: false,
  [Input.Right]: false,
  [Input.Space]: false,
  [Input.Enter]: false,
  [Input.Control]: false,
  [Input.ArrowUp]: false, // може да ги махнеш ако ползваш map
  [Input.ArrowLeft]: false,
  [Input.ArrowDown]: false,
  [Input.ArrowRight]: false,
  [Input.Key1]: false,
  [Input.Key2]: false,
  [Input.Key3]: false,
  [Input.Key4]: false,
  [Input.Key5]: false,
  [Input.Key6]: false,
  [Input.Key7]: false,
  [Input.Key8]: false,
  [Input.Key9]: false,
  [Input.Key0]: false,
};

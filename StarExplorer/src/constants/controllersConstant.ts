import { InputEnum } from "../types/enums";

export const KeyMap: Record<string, InputEnum> = {
  w: InputEnum.Up,
  ArrowUp: InputEnum.Up,
  a: InputEnum.Left,
  ArrowLeft: InputEnum.Left,
  s: InputEnum.Down,
  ArrowDown: InputEnum.Down,
  d: InputEnum.Right,
  ArrowRight: InputEnum.Right,
  " ": InputEnum.Space,
  Enter: InputEnum.Enter,
  Control: InputEnum.Control,
  "1": InputEnum.Key1,
  "2": InputEnum.Key2,
  "3": InputEnum.Key3,
  "4": InputEnum.Key4,
  "5": InputEnum.Key5,
  "6": InputEnum.Key6,
  "7": InputEnum.Key7,
  "8": InputEnum.Key8,
  "9": InputEnum.Key9,
  "0": InputEnum.Key0,
};

export const currentInput: Record<InputEnum, boolean> = Object.values(InputEnum).reduce(
  (acc, key) => {
    acc[key] = false;
    return acc;
  },
  {} as Record<InputEnum, boolean>
);

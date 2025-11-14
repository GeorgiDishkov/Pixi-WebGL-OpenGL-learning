import { currentInput } from "../constants/controllersConstant";
import type { InputEnum } from "../types/enums";

export const isActive = (input: InputEnum) => currentInput[input];

const prevInput: Record<InputEnum, boolean> = { ...currentInput };

export const onPress = (input: InputEnum) => {
  const activeNow = currentInput[input];
  const wasActive = prevInput[input];
  return activeNow && !wasActive;
};

export const onRelease = (input: InputEnum) => {
  const activeNow = currentInput[input];
  const wasActive = prevInput[input];
  return !activeNow && wasActive;
};

export const updateInputState = () => {
  for (const key in currentInput) {
    prevInput[key as InputEnum] = currentInput[key as InputEnum];
  }
};

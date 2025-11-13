import { currentInput } from "../constants/controllersConstant";
import type { Input } from "../types/types";

export const isActive = (input: Input) => currentInput[input];

const prevInput: Record<Input, boolean> = { ...currentInput };

export const onPress = (input: Input) => {
  const activeNow = currentInput[input];
  const wasActive = prevInput[input];
  return activeNow && !wasActive;
};

export const onRelease = (input: Input) => {
  const activeNow = currentInput[input];
  const wasActive = prevInput[input];
  return !activeNow && wasActive;
};

// 🔄 Извиквай това веднъж на frame (в main game loop-а)x
export const updateInputState = () => {
  for (const key in currentInput) {
    prevInput[key as Input] = currentInput[key as Input];
  }
};

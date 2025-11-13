import { PlayerHUD } from "../constants/HUDConfig";
import { InputEnum } from "../types/enums";
import { onPress } from "../utils/helpers";

export function updateHUD() {
  const { abilities } = PlayerHUD;

  if (onPress(InputEnum.Key1)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key1)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(InputEnum.Key2)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key2)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(InputEnum.Key3)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key3)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(InputEnum.Key4)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key4)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(InputEnum.Key5)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key5)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(InputEnum.Key6)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(InputEnum.Key6)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }
}

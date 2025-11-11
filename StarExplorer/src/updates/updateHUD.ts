import { PlayerHUD } from "../constants/HUDConfig";
import { Input } from "../types";
import { onPress } from "../utils/helpers";

export function updateHUD() {
  const { abilities } = PlayerHUD;

  if (onPress(Input.Key1)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key1)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(Input.Key2)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key2)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(Input.Key3)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key3)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(Input.Key4)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key4)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(Input.Key5)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key5)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }

  if (onPress(Input.Key6)) {
    abilities.forEach((ability) => {
      if (ability.id === Number(Input.Key6)) {
        ability.isActive = !ability.isActive;
      } else {
        ability.isActive = false;
      }
    });
  }
}

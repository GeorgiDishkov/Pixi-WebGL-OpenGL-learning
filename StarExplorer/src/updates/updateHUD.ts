import { PlayerHUD } from "../constants/HUDConfig";
import { Input } from "../types";
import { onPress } from "../utils/helpers";

export function updateHUD() {
  const { abilities } = PlayerHUD;

  if (onPress(Input.Key1)) {
    abilities[0].isActive = !abilities[0].isActive;
  }

  if (onPress(Input.Key2)) {
    abilities[1].isActive = !abilities[1].isActive;
  }

  if (onPress(Input.Key3)) {
    abilities[2].isActive = !abilities[2].isActive;
  }

  if (onPress(Input.Key4)) {
    abilities[3].isActive = !abilities[3].isActive;
  }

  if (onPress(Input.Key5)) {
    abilities[4].isActive = !abilities[4].isActive;
  }

  if (onPress(Input.Key6)) {
    abilities[5].isActive = !abilities[5].isActive;
  }
}

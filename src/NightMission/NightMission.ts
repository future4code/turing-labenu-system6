import { Mission } from "../Missions/Mission";

export class NightMission extends Mission {
  public setName(name: string) {
    super.setName(name + "-na-night");
  }
}

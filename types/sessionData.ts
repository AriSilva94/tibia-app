interface LootedItem {
  Count: number;
  Name: string;
}

interface KilledMonster {
  Count: number;
  Name: string;
}

interface SessionData {
  Balance: string;
  Damage: string;
  "Damage/h": string;
  Healing: string;
  "Healing/h": string;
  "Killed Monsters": KilledMonster[];
  Loot: string;
  "Looted Items": LootedItem[];
  "Raw XP Gain": string;
  "Raw XP/h": string;
  "Session end": string;
  "Session length": string;
  "Session start": string;
  Supplies: string;
  "XP Gain": string;
  "XP/h": string;
}

export type { SessionData, LootedItem, KilledMonster };

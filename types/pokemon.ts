export interface Pokemon {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  index?: number;
  url?: string;
}

export interface SectionTypes {
  id: number;
  title: string;
}

export interface StatType {
  stat: { name: string };
  base_stat: number;
}

export interface HeldItemType {
  item: { name: string };
}

export interface MoveType {
  move: { name: string };
}

export interface PokeInfoType {
  stats: StatType[];
  held_items: HeldItemType[];
  moves: MoveType[];
}

export interface EvoType {
  name: string;
  id: number;
  img: string;
  evolvesTo: any;
}

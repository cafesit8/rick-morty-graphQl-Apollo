export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
 }

export interface Character {
  created: Date;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: Species;
  status: Status;
  type: string;
  url: string;
}

export interface characters {
  info: Info;
  results: Character[];
}

export interface Root {
  characters: characters;
}

export interface Resident {
  name: string
  image: string
}

export interface Origin {
  name: string
  type: string
  dimension: string
  created: string
  residents: Resident[]
}

export interface LocationInfo {
  name: string
  dimension: string
  created: string
}

export interface CharacterInfo {
  name: string
  status: string
  species: string
  gender: string
  image: string
  location: LocationInfo
  origin: Origin
}

export interface Data {
  character: CharacterInfo
}

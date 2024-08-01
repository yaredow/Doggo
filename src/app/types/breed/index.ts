export type DogBreed = {
  id: number;
  breedName: string;
  breedShortDescription: string;
  traits: string[];
  diseases: string[];
  breedLongDescription: string;
  breedCharacteristics: string[];
  breedImages: string[];
  averageHeight?: number;
  averageWeight?: number;
  lifeExpectancy?: number;
  temperament?: string;
  hairShedding?: string;
  activity?: string;
  sociability?: string;
  intelligence?: string;
  childFriendly?: string;
  careLevel?: string;
  healthProblems?: string;
  geneticProfile?: string;
  feedingHabits?: string;
};
interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }


const isCharacterFavorites = (id: number, favoriteCharacters:Character[]): boolean => {
    return favoriteCharacters?.some((character) => character.id === id);
}
export default isCharacterFavorites
import { Person } from "../types/people";

export const PERSON_1_DATA: Person = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/6/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/7/",
  ],
  species: ["https://swapi.dev/api/species/1/"],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

export const PERSON_2_DATA: Person = {
  name: "Darth Vader",
  height: "202",
  mass: "136",
  hair_color: "none",
  skin_color: "white",
  eye_color: "yellow",
  birth_year: "41.9BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [],
  starships: ["https://swapi.dev/api/starships/13/"],
  created: "2014-12-10T15:18:20.704000Z",
  edited: "2014-12-20T21:17:50.313000Z",
  url: "https://swapi.dev/api/people/4/",
};

export const PERSON_3_DATA: Person = {
  name: "Leia Organa",
  height: "150",
  mass: "49",
  hair_color: "brown",
  skin_color: "light",
  eye_color: "brown",
  birth_year: "19BBY",
  gender: "female",
  homeworld: "https://swapi.dev/api/planets/2/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: ["https://swapi.dev/api/vehicles/30/"],
  starships: [],
  created: "2014-12-10T15:20:09.791000Z",
  edited: "2014-12-20T21:17:50.315000Z",
  url: "https://swapi.dev/api/people/5/",
  isFavorite: true,
};

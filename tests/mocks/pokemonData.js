const pokemonList = [{
  pokedexNumber: 1,
  name: 'Bulbasaur',
  generationNumber: 1,
  fromId: null,
  protected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z'
}, {
  pokedexNumber: 1,
  name: 'Bulbasaur',
  generationNumber: 1,
  fromId: null,
  protected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z'
}]

const formsList = [{
  id: 4,
  name: 'Alolan',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z'
}]

const typesList = [{
  id: 1,
  name: 'Bug',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z'
}]

const singlePokemonWithAltForm = {
  pokedexNumber: 88,
  name: 'Grimer',
  generationNumber: 1,
  fromId: null,
  protected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  'AlternateForms': [
    {
      id: 4,
      name: 'Alolan',
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonAlternateForms: {
        PokemonPokedexNumber: 88,
        AlternateFormId: 4,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z'
      }
    }
  ],
  Types: [
    {
      id: 14,
      name: 'Poison',
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonTypes: {
        PokemonPokedexNumber: 88,
        TypeId: 14,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      }
    }
  ]
}

const singleAltFormWithPokemon = {
  id: 4,
  name: 'Alolan',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  Pokemons: [
    {
      pokedexNumber: 19,
      name: 'Rattata',
      generationNumber: 1,
      fromId: null,
      protected: 1,
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonAlternateForms: {
        PokemonPokedexNumber: 19,
        AlternateFormId: 4,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z'
      }
    }
  ]
}

const singleTypeWithPokemon = {
  id: 1,
  name: 'Bug',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  Pokemons: [
    {
      pokedexNumber: 10,
      name: 'Caterpie',
      generationNumber: 1,
      fromId: null,
      protected: 1,
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonTypes: {
        PokemonPokedexNumber: 10,
        TypeId: 1,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      }
    }
  ]
}


module.exports = {
  pokemonList,
  formsList,
  typesList,
  singlePokemonWithAltForm,
  singleAltFormWithPokemon,
  singleTypeWithPokemon
}

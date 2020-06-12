module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    await queryInterface.bulkInsert('Pokemons', [
      { name: 'Bulbasaur', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Ivysaur', generationNumber: 1, fromId: 1, isProtected: 1 },
      { name: 'Venusaur', generationNumber: 1, fromId: 2, isProtected: 1 },
      { name: 'Charmander', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Charmeleon', generationNumber: 1, fromId: 4, isProtected: 1 },
      { name: 'Charizard', generationNumber: 1, fromId: 5, isProtected: 1 },
      { name: 'Squirtle', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Wartortle', generationNumber: 1, fromId: 7, isProtected: 1 },
      { name: 'Blastoise', generationNumber: 1, fromId: 8, isProtected: 1 },
      { name: 'Caterpie', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Metapod', generationNumber: 1, fromId: 10, isProtected: 1 },
      { name: 'Butterfree', generationNumber: 1, fromId: 11, isProtected: 1 },
      { name: 'Weedle', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Kakuna', generationNumber: 1, fromId: 13, isProtected: 1 },
      { name: 'Beedrill', generationNumber: 1, fromId: 14, isProtected: 1 },
      { name: 'Pidgey', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Pidgeotto', generationNumber: 1, fromId: 16, isProtected: 1 },
      { name: 'Pidgeot', generationNumber: 1, fromId: 17, isProtected: 1 },
      { name: 'Rattata', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Raticate', generationNumber: 1, fromId: 19, isProtected: 1 },
      { name: 'Spearow', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Fearow', generationNumber: 1, fromId: 21, isProtected: 1 },
      { name: 'Ekans', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Arbok', generationNumber: 1, fromId: 23, isProtected: 1 },
      { name: 'Pikachu', generationNumber: 1, fromId: 172, isProtected: 1 },
      { name: 'Raichu', generationNumber: 1, fromId: 25, isProtected: 1 },
      { name: 'Sandshrew', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Sandslash', generationNumber: 1, fromId: 27, isProtected: 1 },
      { name: 'Nidoran♀', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Nidorina', generationNumber: 1, fromId: 29, isProtected: 1 },
      { name: 'Nidoqueen', generationNumber: 1, fromId: 30, isProtected: 1 },
      { name: 'Nidoran♂', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Nidorino', generationNumber: 1, fromId: 32, isProtected: 1 },
      { name: 'Nidoking', generationNumber: 1, fromId: 33, isProtected: 1 },
      { name: 'Clefairy', generationNumber: 1, fromId: 173, isProtected: 1 },
      { name: 'Clefable', generationNumber: 1, fromId: 35, isProtected: 1 },
      { name: 'Vulpix', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Ninetales', generationNumber: 1, fromId: 37, isProtected: 1 },
      { name: 'Jigglypuff', generationNumber: 1, fromId: 174, isProtected: 1 },
      { name: 'Wigglytuff', generationNumber: 1, fromId: 39, isProtected: 1 },
      { name: 'Zubat', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Golbat', generationNumber: 1, fromId: 41, isProtected: 1 },
      { name: 'Oddish', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Gloom', generationNumber: 1, fromId: 43, isProtected: 1 },
      { name: 'Vileplume', generationNumber: 1, fromId: 44, isProtected: 1 },
      { name: 'Paras', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Parasect', generationNumber: 1, fromId: 46, isProtected: 1 },
      { name: 'Venonat', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Venomoth', generationNumber: 1, fromId: 48, isProtected: 1 },
      { name: 'Diglett', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Dugtrio', generationNumber: 1, fromId: 50, isProtected: 1 },
      { name: 'Meowth', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Persian', generationNumber: 1, fromId: 52, isProtected: 1 },
      { name: 'Psyduck', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Golduck', generationNumber: 1, fromId: 55, isProtected: 1 },
      { name: 'Mankey', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Primeape', generationNumber: 1, fromId: 56, isProtected: 1 },
      { name: 'Growlithe', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Arcanine', generationNumber: 1, fromId: 58, isProtected: 1 },
      { name: 'Poliwag', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Poliwhirl', generationNumber: 1, fromId: 60, isProtected: 1 },
      { name: 'Poliwrath', generationNumber: 1, fromId: 61, isProtected: 1 },
      { name: 'Abra', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Kadabra', generationNumber: 1, fromId: 63, isProtected: 1 },
      { name: 'Alakazam', generationNumber: 1, fromId: 64, isProtected: 1 },
      { name: 'Machop', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Machoke', generationNumber: 1, fromId: 66, isProtected: 1 },
      { name: 'Machamp', generationNumber: 1, fromId: 67, isProtected: 1 },
      { name: 'Bellsprout', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Weepinbell', generationNumber: 1, fromId: 69, isProtected: 1 },
      { name: 'Victreebel', generationNumber: 1, fromId: 70, isProtected: 1 },
      { name: 'Tentacool', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Tentacruel', generationNumber: 1, fromId: 72, isProtected: 1 },
      { name: 'Geodude', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Graveler', generationNumber: 1, fromId: 74, isProtected: 1 },
      { name: 'Golem', generationNumber: 1, fromId: 75, isProtected: 1 },
      { name: 'Ponyta', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Rapidash', generationNumber: 1, fromId: 77, isProtected: 1 },
      { name: 'Slowpoke', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Slowbro', generationNumber: 1, fromId: 79, isProtected: 1 },
      { name: 'Magnemite', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Magneton', generationNumber: 1, fromId: 81, isProtected: 1 },
      { name: 'Farfetch\'d', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Doduo', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Dodrio', generationNumber: 1, fromId: 84, isProtected: 1 },
      { name: 'Seel', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Dewgong', generationNumber: 1, fromId: 86, isProtected: 1 },
      { name: 'Grimer', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Muk', generationNumber: 1, fromId: 88, isProtected: 1 },
      { name: 'Shellder', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Cloyster', generationNumber: 1, fromId: 90, isProtected: 1 },
      { name: 'Gastly', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Haunter', generationNumber: 1, fromId: 92, isProtected: 1 },
      { name: 'Gengar', generationNumber: 1, fromId: 93, isProtected: 1 },
      { name: 'Onix', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Drowzee', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Hypno', generationNumber: 1, fromId: 96, isProtected: 1 },
      { name: 'Krabby', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Kingler', generationNumber: 1, fromId: 98, isProtected: 1 },
      { name: 'Voltorb', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Electrode', generationNumber: 1, fromId: 100, isProtected: 1 },
      { name: 'Exeggcute', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Exeggutor', generationNumber: 1, fromId: 102, isProtected: 1 },
      { name: 'Cubone', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Marowak', generationNumber: 1, fromId: 104, isProtected: 1 },
      { name: 'Hitmonlee', generationNumber: 1, fromId: 236, isProtected: 1 },
      { name: 'Hitmonchan', generationNumber: 1, fromId: 236, isProtected: 1 },
      { name: 'Lickitung', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Koffing', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Weezing', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Rhyhorn', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Rhydon', generationNumber: 1, fromId: 111, isProtected: 1 },
      { name: 'Chansey', generationNumber: 1, fromId: 440, isProtected: 1 },
      { name: 'Tangela', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Kangaskhan', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Horsea', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Seadra', generationNumber: 1, fromId: 116, isProtected: 1 },
      { name: 'Goldeen', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Seaking', generationNumber: 1, fromId: 118, isProtected: 1 },
      { name: 'Staryu', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Starmie', generationNumber: 1, fromId: 120, isProtected: 1 },
      { name: 'Mr. Mime', generationNumber: 1, fromId: 439, isProtected: 1 },
      { name: 'Scyther', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Jynx', generationNumber: 1, fromId: 238, isProtected: 1 },
      { name: 'Electabuzz', generationNumber: 1, fromId: 239, isProtected: 1 },
      { name: 'Magmar', generationNumber: 1, fromId: 240, isProtected: 1 },
      { name: 'Pinsir', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Tauros', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Magikarp', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Gyrados', generationNumber: 1, fromId: 129, isProtected: 1 },
      { name: 'Lapras', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Ditto', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Eevee', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Vaporeon', generationNumber: 1, fromId: 133, isProtected: 1 },
      { name: 'Jolteon', generationNumber: 1, fromId: 133, isProtected: 1 },
      { name: 'Flareon', generationNumber: 1, fromId: 133, isProtected: 1 },
      { name: 'Porygon', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Omanyte', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Omastar', generationNumber: 1, fromId: 138, isProtected: 1 },
      { name: 'Kabuto', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Kabutops', generationNumber: 1, fromId: 140, isProtected: 1 },
      { name: 'Aerodactyl', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Snorlax', generationNumber: 1, fromId: 446, isProtected: 1 },
      { name: 'Articuno', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Zapdos', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Moltres', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Dratini', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Dragonair', generationNumber: 1, fromId: 147, isProtected: 1 },
      { name: 'Dragonite', generationNumber: 1, fromId: 148, isProtected: 1 },
      { name: 'Mewtwo', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Mew', generationNumber: 1, fromId: null, isProtected: 1 },
      { name: 'Chikorita', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Bayleef', generationNumber: 2, fromId: 153, isProtected: 1 },
      { name: 'Meganium', generationNumber: 2, fromId: 154, isProtected: 1 },
      { name: 'Cyndaquil', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Quilava', generationNumber: 2, fromId: 155, isProtected: 1 },
      { name: 'Typhlosion', generationNumber: 2, fromId: 156, isProtected: 1 },
      { name: 'Totodile', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Croconaw', generationNumber: 2, fromId: 158, isProtected: 1 },
      { name: 'Feraligatr', generationNumber: 2, fromId: 159, isProtected: 1 },
      { name: 'Sentret', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Furret', generationNumber: 2, fromId: 161, isProtected: 1 },
      { name: 'Hoothoot', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Noctowl', generationNumber: 2, fromId: 163, isProtected: 1 },
      { name: 'Ledyba', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Ledian', generationNumber: 2, fromId: 165, isProtected: 1 },
      { name: 'Spinarak', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Ariados', generationNumber: 2, fromId: 167, isProtected: 1 },
      { name: 'Crobat', generationNumber: 2, fromId: 42, isProtected: 1 },
      { name: 'Chinchou', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Lanturn', generationNumber: 2, fromId: 170, isProtected: 1 },
      { name: 'Pichu', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Cleffa', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Igglybuff', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Togepi', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Togetic', generationNumber: 2, fromId: 175, isProtected: 1 },
      { name: 'Natu', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Xatu', generationNumber: 2, fromId: 177, isProtected: 1 },
      { name: 'Mareep', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Flaaffy', generationNumber: 2, fromId: 179, isProtected: 1 },
      { name: 'Ampharos', generationNumber: 2, fromId: 180, isProtected: 1 },
      { name: 'Bellossom', generationNumber: 2, fromId: 44, isProtected: 1 },
      { name: 'Marill', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Azumarill', generationNumber: 2, fromId: 183, isProtected: 1 },
      { name: 'Sudowoodo', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Politoed', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Hoppip', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Skiploom', generationNumber: 2, fromId: 187, isProtected: 1 },
      { name: 'Jumpluff', generationNumber: 2, fromId: 188, isProtected: 1 },
      { name: 'Aipom', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Sunkern', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Sunflora', generationNumber: 2, fromId: 191, isProtected: 1 },
      { name: 'Yanma', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Wooper', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Quagsire', generationNumber: 2, fromId: 194, isProtected: 1 },
      { name: 'Espeon', generationNumber: 2, fromId: 133, isProtected: 1 },
      { name: 'Umbreon', generationNumber: 2, fromId: 133, isProtected: 1 },
      { name: 'Murkrow', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Slowking', generationNumber: 2, fromId: 79, isProtected: 1 },
      { name: 'Misdreavus', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Unown', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Wobbuffet', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Girafarig', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Pineco', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Forretress', generationNumber: 2, fromId: 204, isProtected: 1 },
      { name: 'Dunsparce', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Gligar', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Steelix', generationNumber: 2, fromId: 95, isProtected: 1 },
      { name: 'Snubbull', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Granbull', generationNumber: 2, fromId: 209, isProtected: 1 },
      { name: 'Qwilfish', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Scizor', generationNumber: 2, fromId: 12, isProtected: 1 },
      { name: 'Shuckle', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Heracross', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Sneasel', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Teddiursa', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Ursaring', generationNumber: 2, fromId: 216, isProtected: 1 },
      { name: 'Slugma', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Magcargo', generationNumber: 2, fromId: 218, isProtected: 1 },
      { name: 'Swinub', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Piloswine', generationNumber: 2, fromId: 220, isProtected: 1 },
      { name: 'Corsola', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Remoraid', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Octillery', generationNumber: 2, fromId: 223, isProtected: 1 },
      { name: 'Delibird', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Mantine', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Skarmory', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Houndour', generationNumber: 2, fromId: 228, isProtected: 1 },
      { name: 'Houndoom', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Kingdra', generationNumber: 2, fromId: 117, isProtected: 1 },
      { name: 'Phanpy', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Donphan', generationNumber: 2, fromId: 231, isProtected: 1 },
      { name: 'Porygon2', generationNumber: 2, fromId: 137, isProtected: 1 },
      { name: 'Stantler', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Smeargle', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Tyrogue', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Hitmontop', generationNumber: 2, fromId: 236, isProtected: 1 },
      { name: 'Smoochum', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Elekid', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Magby', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Miltank', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Blissey', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Raikou', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Entei', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Suicune', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Larvitar', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Pupitar', generationNumber: 2, fromId: 246, isProtected: 1 },
      { name: 'Tyranitar', generationNumber: 2, fromId: 247, isProtected: 1 },
      { name: 'Lugia', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Ho-Oh', generationNumber: 2, fromId: null, isProtected: 1 },
      { name: 'Celebi', generationNumber: 2, fromId: null, isProtected: 1 },
    ])

    await queryInterface.bulkInsert('Types', [
      { name: 'Bug' },
      { name: 'Dark' },
      { name: 'Dragon' },
      { name: 'Electric' },
      { name: 'Fairy' },
      { name: 'Fighting' },
      { name: 'Fire' },
      { name: 'Flying' },
      { name: 'Ghost' },
      { name: 'Grass' },
      { name: 'Ground' },
      { name: 'Ice' },
      { name: 'Normal' },
      { name: 'Poison' },
      { name: 'Psychic' },
      { name: 'Rock' },
      { name: 'Steel' },
      { name: 'Water' }
    ])

    await queryInterface.bulkInsert('Forms', [
      { name: 'Gender' },
      { name: 'Alternate' },
      { name: 'Mega' },
      { name: 'Alolan' },
      { name: 'Galarian' },
      { name: 'Gigantamax' }
    ])

    await queryInterface.bulkInsert('PokemonTypes', [
      { PokemonPokedexNumber: 1, typeId: 10 },
      { PokemonPokedexNumber: 1, typeId: 14 },
      { PokemonPokedexNumber: 2, typeId: 10 },
      { PokemonPokedexNumber: 2, typeId: 14 },
      { PokemonPokedexNumber: 3, typeId: 10 },
      { PokemonPokedexNumber: 3, typeId: 14 },
      { PokemonPokedexNumber: 4, typeId: 7 },
      { PokemonPokedexNumber: 5, typeId: 7 },
      { PokemonPokedexNumber: 6, typeId: 7 },
      { PokemonPokedexNumber: 6, typeId: 8 },
      { PokemonPokedexNumber: 7, typeId: 18 },
      { PokemonPokedexNumber: 8, typeId: 18 },
      { PokemonPokedexNumber: 9, typeId: 18 },
      { PokemonPokedexNumber: 10, typeId: 1 },
      { PokemonPokedexNumber: 11, typeId: 1 },
      { PokemonPokedexNumber: 12, typeId: 1 },
      { PokemonPokedexNumber: 12, typeId: 8 },
      { PokemonPokedexNumber: 13, typeId: 1 },
      { PokemonPokedexNumber: 13, typeId: 14 },
      { PokemonPokedexNumber: 14, typeId: 1 },
      { PokemonPokedexNumber: 14, typeId: 14 },
      { PokemonPokedexNumber: 15, typeId: 1 },
      { PokemonPokedexNumber: 15, typeId: 14 },
      { PokemonPokedexNumber: 16, typeId: 13 },
      { PokemonPokedexNumber: 16, typeId: 8 },
      { PokemonPokedexNumber: 17, typeId: 13 },
      { PokemonPokedexNumber: 17, typeId: 8 },
      { PokemonPokedexNumber: 18, typeId: 13 },
      { PokemonPokedexNumber: 18, typeId: 8 },
      { PokemonPokedexNumber: 19, typeId: 13 },
      { PokemonPokedexNumber: 20, typeId: 13 },
      { PokemonPokedexNumber: 21, typeId: 13 },
      { PokemonPokedexNumber: 21, typeId: 8 },
      { PokemonPokedexNumber: 22, typeId: 13 },
      { PokemonPokedexNumber: 22, typeId: 8 },
      { PokemonPokedexNumber: 23, typeId: 14 },
      { PokemonPokedexNumber: 24, typeId: 14 },
      { PokemonPokedexNumber: 25, typeId: 4 },
      { PokemonPokedexNumber: 26, typeId: 4 },
      { PokemonPokedexNumber: 27, typeId: 11 },
      { PokemonPokedexNumber: 28, typeId: 11 },
      { PokemonPokedexNumber: 29, typeId: 14 },
      { PokemonPokedexNumber: 30, typeId: 14 },
      { PokemonPokedexNumber: 31, typeId: 14 },
      { PokemonPokedexNumber: 31, typeId: 11 },
      { PokemonPokedexNumber: 32, typeId: 14 },
      { PokemonPokedexNumber: 33, typeId: 14 },
      { PokemonPokedexNumber: 34, typeId: 14 },
      { PokemonPokedexNumber: 34, typeId: 11 },
      { PokemonPokedexNumber: 35, typeId: 5 },
      { PokemonPokedexNumber: 36, typeId: 5 },
      { PokemonPokedexNumber: 37, typeId: 7 },
      { PokemonPokedexNumber: 38, typeId: 7 },
      { PokemonPokedexNumber: 39, typeId: 13 },
      { PokemonPokedexNumber: 39, typeId: 5 },
      { PokemonPokedexNumber: 40, typeId: 13 },
      { PokemonPokedexNumber: 40, typeId: 5 },
      { PokemonPokedexNumber: 41, typeId: 14 },
      { PokemonPokedexNumber: 41, typeId: 8 },
      { PokemonPokedexNumber: 42, typeId: 14 },
      { PokemonPokedexNumber: 42, typeId: 8 },
      { PokemonPokedexNumber: 43, typeId: 10 },
      { PokemonPokedexNumber: 43, typeId: 14 },
      { PokemonPokedexNumber: 44, typeId: 10 },
      { PokemonPokedexNumber: 44, typeId: 14 },
      { PokemonPokedexNumber: 45, typeId: 10 },
      { PokemonPokedexNumber: 45, typeId: 14 },
      { PokemonPokedexNumber: 46, typeId: 1 },
      { PokemonPokedexNumber: 46, typeId: 10 },
      { PokemonPokedexNumber: 47, typeId: 1 },
      { PokemonPokedexNumber: 47, typeId: 10 },
      { PokemonPokedexNumber: 48, typeId: 1 },
      { PokemonPokedexNumber: 48, typeId: 14 },
      { PokemonPokedexNumber: 49, typeId: 1 },
      { PokemonPokedexNumber: 49, typeId: 14 },
      { PokemonPokedexNumber: 50, typeId: 11 },
      { PokemonPokedexNumber: 51, typeId: 11 },
      { PokemonPokedexNumber: 52, typeId: 13 },
      { PokemonPokedexNumber: 53, typeId: 13 },
      { PokemonPokedexNumber: 54, typeId: 18 },
      { PokemonPokedexNumber: 55, typeId: 18 },
      { PokemonPokedexNumber: 56, typeId: 6 },
      { PokemonPokedexNumber: 57, typeId: 6 },
      { PokemonPokedexNumber: 58, typeId: 7 },
      { PokemonPokedexNumber: 59, typeId: 7 },
      { PokemonPokedexNumber: 60, typeId: 18 },
      { PokemonPokedexNumber: 61, typeId: 18 },
      { PokemonPokedexNumber: 62, typeId: 18 },
      { PokemonPokedexNumber: 62, typeId: 6 },
      { PokemonPokedexNumber: 63, typeId: 15 },
      { PokemonPokedexNumber: 64, typeId: 15 },
      { PokemonPokedexNumber: 65, typeId: 15 },
      { PokemonPokedexNumber: 66, typeId: 6 },
      { PokemonPokedexNumber: 67, typeId: 6 },
      { PokemonPokedexNumber: 68, typeId: 6 },
      { PokemonPokedexNumber: 69, typeId: 10 },
      { PokemonPokedexNumber: 69, typeId: 14 },
      { PokemonPokedexNumber: 70, typeId: 10 },
      { PokemonPokedexNumber: 70, typeId: 14 },
      { PokemonPokedexNumber: 71, typeId: 10 },
      { PokemonPokedexNumber: 71, typeId: 14 },
      { PokemonPokedexNumber: 72, typeId: 18 },
      { PokemonPokedexNumber: 72, typeId: 14 },
      { PokemonPokedexNumber: 73, typeId: 18 },
      { PokemonPokedexNumber: 73, typeId: 14 },
      { PokemonPokedexNumber: 74, typeId: 16 },
      { PokemonPokedexNumber: 74, typeId: 11 },
      { PokemonPokedexNumber: 75, typeId: 16 },
      { PokemonPokedexNumber: 75, typeId: 11 },
      { PokemonPokedexNumber: 76, typeId: 16 },
      { PokemonPokedexNumber: 76, typeId: 11 },
      { PokemonPokedexNumber: 77, typeId: 7 },
      { PokemonPokedexNumber: 78, typeId: 7 },
      { PokemonPokedexNumber: 79, typeId: 18 },
      { PokemonPokedexNumber: 79, typeId: 15 },
      { PokemonPokedexNumber: 80, typeId: 18 },
      { PokemonPokedexNumber: 80, typeId: 15 },
      { PokemonPokedexNumber: 81, typeId: 4 },
      { PokemonPokedexNumber: 81, typeId: 17 },
      { PokemonPokedexNumber: 82, typeId: 4 },
      { PokemonPokedexNumber: 82, typeId: 17 },
      { PokemonPokedexNumber: 83, typeId: 13 },
      { PokemonPokedexNumber: 83, typeId: 8 },
      { PokemonPokedexNumber: 84, typeId: 13 },
      { PokemonPokedexNumber: 84, typeId: 8 },
      { PokemonPokedexNumber: 85, typeId: 13 },
      { PokemonPokedexNumber: 85, typeId: 8 },
      { PokemonPokedexNumber: 86, typeId: 18 },
      { PokemonPokedexNumber: 87, typeId: 18 },
      { PokemonPokedexNumber: 87, typeId: 12 },
      { PokemonPokedexNumber: 88, typeId: 14 },
      { PokemonPokedexNumber: 89, typeId: 14 },
      { PokemonPokedexNumber: 90, typeId: 18 },
      { PokemonPokedexNumber: 91, typeId: 18 },
      { PokemonPokedexNumber: 91, typeId: 12 },
      { PokemonPokedexNumber: 92, typeId: 9 },
      { PokemonPokedexNumber: 92, typeId: 14 },
      { PokemonPokedexNumber: 93, typeId: 9 },
      { PokemonPokedexNumber: 93, typeId: 14 },
      { PokemonPokedexNumber: 94, typeId: 9 },
      { PokemonPokedexNumber: 94, typeId: 14 },
      { PokemonPokedexNumber: 95, typeId: 16 },
      { PokemonPokedexNumber: 95, typeId: 11 },
      { PokemonPokedexNumber: 96, typeId: 15 },
      { PokemonPokedexNumber: 97, typeId: 15 },
      { PokemonPokedexNumber: 98, typeId: 18 },
      { PokemonPokedexNumber: 99, typeId: 18 },
      { PokemonPokedexNumber: 100, typeId: 4 },
      { PokemonPokedexNumber: 101, typeId: 4 },
      { PokemonPokedexNumber: 102, typeId: 10 },
      { PokemonPokedexNumber: 102, typeId: 15 },
      { PokemonPokedexNumber: 103, typeId: 10 },
      { PokemonPokedexNumber: 103, typeId: 15 },
      { PokemonPokedexNumber: 104, typeId: 11 },
      { PokemonPokedexNumber: 105, typeId: 11 },
      { PokemonPokedexNumber: 106, typeId: 6 },
      { PokemonPokedexNumber: 107, typeId: 6 },
      { PokemonPokedexNumber: 108, typeId: 13 },
      { PokemonPokedexNumber: 109, typeId: 14 },
      { PokemonPokedexNumber: 110, typeId: 14 },
      { PokemonPokedexNumber: 111, typeId: 11 },
      { PokemonPokedexNumber: 111, typeId: 16 },
      { PokemonPokedexNumber: 112, typeId: 11 },
      { PokemonPokedexNumber: 112, typeId: 16 },
      { PokemonPokedexNumber: 113, typeId: 13 },
      { PokemonPokedexNumber: 114, typeId: 10 },
      { PokemonPokedexNumber: 115, typeId: 13 },
      { PokemonPokedexNumber: 116, typeId: 18 },
      { PokemonPokedexNumber: 117, typeId: 18 },
      { PokemonPokedexNumber: 118, typeId: 18 },
      { PokemonPokedexNumber: 119, typeId: 18 },
      { PokemonPokedexNumber: 120, typeId: 18 },
      { PokemonPokedexNumber: 121, typeId: 18 },
      { PokemonPokedexNumber: 121, typeId: 15 },
      { PokemonPokedexNumber: 122, typeId: 15 },
      { PokemonPokedexNumber: 122, typeId: 5 },
      { PokemonPokedexNumber: 123, typeId: 1 },
      { PokemonPokedexNumber: 123, typeId: 8 },
      { PokemonPokedexNumber: 124, typeId: 12 },
      { PokemonPokedexNumber: 124, typeId: 15 },
      { PokemonPokedexNumber: 125, typeId: 4 },
      { PokemonPokedexNumber: 126, typeId: 7 },
      { PokemonPokedexNumber: 127, typeId: 1 },
      { PokemonPokedexNumber: 128, typeId: 13 },
      { PokemonPokedexNumber: 129, typeId: 18 },
      { PokemonPokedexNumber: 130, typeId: 18 },
      { PokemonPokedexNumber: 130, typeId: 8 },
      { PokemonPokedexNumber: 131, typeId: 18 },
      { PokemonPokedexNumber: 131, typeId: 12 },
      { PokemonPokedexNumber: 132, typeId: 13 },
      { PokemonPokedexNumber: 133, typeId: 13 },
      { PokemonPokedexNumber: 134, typeId: 18 },
      { PokemonPokedexNumber: 135, typeId: 4 },
      { PokemonPokedexNumber: 136, typeId: 7 },
      { PokemonPokedexNumber: 137, typeId: 13 },
      { PokemonPokedexNumber: 138, typeId: 16 },
      { PokemonPokedexNumber: 138, typeId: 18 },
      { PokemonPokedexNumber: 139, typeId: 16 },
      { PokemonPokedexNumber: 139, typeId: 18 },
      { PokemonPokedexNumber: 140, typeId: 16 },
      { PokemonPokedexNumber: 140, typeId: 18 },
      { PokemonPokedexNumber: 141, typeId: 16 },
      { PokemonPokedexNumber: 141, typeId: 18 },
      { PokemonPokedexNumber: 142, typeId: 16 },
      { PokemonPokedexNumber: 142, typeId: 8 },
      { PokemonPokedexNumber: 143, typeId: 13 },
      { PokemonPokedexNumber: 144, typeId: 12 },
      { PokemonPokedexNumber: 144, typeId: 8 },
      { PokemonPokedexNumber: 145, typeId: 4 },
      { PokemonPokedexNumber: 145, typeId: 8 },
      { PokemonPokedexNumber: 146, typeId: 7 },
      { PokemonPokedexNumber: 146, typeId: 8 },
      { PokemonPokedexNumber: 147, typeId: 3 },
      { PokemonPokedexNumber: 148, typeId: 3 },
      { PokemonPokedexNumber: 149, typeId: 3 },
      { PokemonPokedexNumber: 149, typeId: 8 },
      { PokemonPokedexNumber: 150, typeId: 15 },
      { PokemonPokedexNumber: 151, typeId: 15 },
      { PokemonPokedexNumber: 152, typeId: 10 },
      { PokemonPokedexNumber: 153, typeId: 10 },
      { PokemonPokedexNumber: 154, typeId: 10 },
      { PokemonPokedexNumber: 155, typeId: 7 },
      { PokemonPokedexNumber: 156, typeId: 7 },
      { PokemonPokedexNumber: 157, typeId: 7 },
      { PokemonPokedexNumber: 158, typeId: 18 },
      { PokemonPokedexNumber: 159, typeId: 18 },
      { PokemonPokedexNumber: 160, typeId: 18 },
      { PokemonPokedexNumber: 161, typeId: 13 },
      { PokemonPokedexNumber: 162, typeId: 13 },
      { PokemonPokedexNumber: 163, typeId: 13 },
      { PokemonPokedexNumber: 163, typeId: 8 },
      { PokemonPokedexNumber: 164, typeId: 13 },
      { PokemonPokedexNumber: 164, typeId: 8 },
      { PokemonPokedexNumber: 165, typeId: 1 },
      { PokemonPokedexNumber: 165, typeId: 8 },
      { PokemonPokedexNumber: 166, typeId: 1 },
      { PokemonPokedexNumber: 166, typeId: 8 },
      { PokemonPokedexNumber: 167, typeId: 1 },
      { PokemonPokedexNumber: 167, typeId: 14 },
      { PokemonPokedexNumber: 168, typeId: 1 },
      { PokemonPokedexNumber: 168, typeId: 14 },
      { PokemonPokedexNumber: 169, typeId: 14 },
      { PokemonPokedexNumber: 169, typeId: 8 },
      { PokemonPokedexNumber: 170, typeId: 18 },
      { PokemonPokedexNumber: 170, typeId: 4 },
      { PokemonPokedexNumber: 171, typeId: 18 },
      { PokemonPokedexNumber: 171, typeId: 4 },
      { PokemonPokedexNumber: 172, typeId: 4 },
      { PokemonPokedexNumber: 173, typeId: 5 },
      { PokemonPokedexNumber: 174, typeId: 13 },
      { PokemonPokedexNumber: 174, typeId: 5 },
      { PokemonPokedexNumber: 175, typeId: 5 },
      { PokemonPokedexNumber: 176, typeId: 5 },
      { PokemonPokedexNumber: 176, typeId: 8 },
      { PokemonPokedexNumber: 177, typeId: 15 },
      { PokemonPokedexNumber: 177, typeId: 8 },
      { PokemonPokedexNumber: 178, typeId: 15 },
      { PokemonPokedexNumber: 178, typeId: 8 },
      { PokemonPokedexNumber: 179, typeId: 4 },
      { PokemonPokedexNumber: 180, typeId: 4 },
      { PokemonPokedexNumber: 181, typeId: 4 },
      { PokemonPokedexNumber: 182, typeId: 10 },
      { PokemonPokedexNumber: 183, typeId: 18 },
      { PokemonPokedexNumber: 183, typeId: 5 },
      { PokemonPokedexNumber: 184, typeId: 18 },
      { PokemonPokedexNumber: 184, typeId: 5 },
      { PokemonPokedexNumber: 185, typeId: 16 },
      { PokemonPokedexNumber: 186, typeId: 18 },
      { PokemonPokedexNumber: 187, typeId: 10 },
      { PokemonPokedexNumber: 187, typeId: 8 },
      { PokemonPokedexNumber: 188, typeId: 10 },
      { PokemonPokedexNumber: 188, typeId: 8 },
      { PokemonPokedexNumber: 189, typeId: 10 },
      { PokemonPokedexNumber: 189, typeId: 8 },
      { PokemonPokedexNumber: 190, typeId: 13 },
      { PokemonPokedexNumber: 191, typeId: 10 },
      { PokemonPokedexNumber: 192, typeId: 10 },
      { PokemonPokedexNumber: 193, typeId: 1 },
      { PokemonPokedexNumber: 193, typeId: 8 },
      { PokemonPokedexNumber: 194, typeId: 18 },
      { PokemonPokedexNumber: 194, typeId: 11 },
      { PokemonPokedexNumber: 195, typeId: 18 },
      { PokemonPokedexNumber: 195, typeId: 11 },
      { PokemonPokedexNumber: 196, typeId: 15 },
      { PokemonPokedexNumber: 197, typeId: 2 },
      { PokemonPokedexNumber: 198, typeId: 2 },
      { PokemonPokedexNumber: 198, typeId: 8 },
      { PokemonPokedexNumber: 199, typeId: 18 },
      { PokemonPokedexNumber: 199, typeId: 15 },
      { PokemonPokedexNumber: 200, typeId: 9 },
      { PokemonPokedexNumber: 201, typeId: 15 },
      { PokemonPokedexNumber: 202, typeId: 15 },
      { PokemonPokedexNumber: 203, typeId: 13 },
      { PokemonPokedexNumber: 203, typeId: 15 },
      { PokemonPokedexNumber: 204, typeId: 1 },
      { PokemonPokedexNumber: 205, typeId: 1 },
      { PokemonPokedexNumber: 205, typeId: 17 },
      { PokemonPokedexNumber: 206, typeId: 13 },
      { PokemonPokedexNumber: 207, typeId: 11 },
      { PokemonPokedexNumber: 207, typeId: 8 },
      { PokemonPokedexNumber: 208, typeId: 17 },
      { PokemonPokedexNumber: 208, typeId: 11 },
      { PokemonPokedexNumber: 209, typeId: 5 },
      { PokemonPokedexNumber: 210, typeId: 5 },
      { PokemonPokedexNumber: 211, typeId: 18 },
      { PokemonPokedexNumber: 211, typeId: 14 },
      { PokemonPokedexNumber: 212, typeId: 1 },
      { PokemonPokedexNumber: 212, typeId: 17 },
      { PokemonPokedexNumber: 213, typeId: 16 },
      { PokemonPokedexNumber: 214, typeId: 1 },
      { PokemonPokedexNumber: 214, typeId: 16 },
      { PokemonPokedexNumber: 215, typeId: 1 },
      { PokemonPokedexNumber: 215, typeId: 6 },
      { PokemonPokedexNumber: 216, typeId: 13 },
      { PokemonPokedexNumber: 217, typeId: 13 },
      { PokemonPokedexNumber: 218, typeId: 7 },
      { PokemonPokedexNumber: 219, typeId: 7 },
      { PokemonPokedexNumber: 219, typeId: 16 },
      { PokemonPokedexNumber: 220, typeId: 12 },
      { PokemonPokedexNumber: 220, typeId: 11 },
      { PokemonPokedexNumber: 221, typeId: 12 },
      { PokemonPokedexNumber: 221, typeId: 11 },
      { PokemonPokedexNumber: 222, typeId: 18 },
      { PokemonPokedexNumber: 222, typeId: 16 },
      { PokemonPokedexNumber: 223, typeId: 18 },
      { PokemonPokedexNumber: 224, typeId: 18 },
      { PokemonPokedexNumber: 225, typeId: 12 },
      { PokemonPokedexNumber: 225, typeId: 8 },
      { PokemonPokedexNumber: 226, typeId: 18 },
      { PokemonPokedexNumber: 226, typeId: 8 },
      { PokemonPokedexNumber: 227, typeId: 17 },
      { PokemonPokedexNumber: 227, typeId: 8 },
      { PokemonPokedexNumber: 228, typeId: 2 },
      { PokemonPokedexNumber: 228, typeId: 7 },
      { PokemonPokedexNumber: 229, typeId: 2 },
      { PokemonPokedexNumber: 229, typeId: 7 },
      { PokemonPokedexNumber: 230, typeId: 18 },
      { PokemonPokedexNumber: 230, typeId: 3 },
      { PokemonPokedexNumber: 231, typeId: 11 },
      { PokemonPokedexNumber: 232, typeId: 11 },
      { PokemonPokedexNumber: 233, typeId: 13 },
      { PokemonPokedexNumber: 234, typeId: 13 },
      { PokemonPokedexNumber: 235, typeId: 13 },
      { PokemonPokedexNumber: 236, typeId: 6 },
      { PokemonPokedexNumber: 237, typeId: 6 },
      { PokemonPokedexNumber: 238, typeId: 12 },
      { PokemonPokedexNumber: 238, typeId: 15 },
      { PokemonPokedexNumber: 239, typeId: 4 },
      { PokemonPokedexNumber: 240, typeId: 7 },
      { PokemonPokedexNumber: 241, typeId: 13 },
      { PokemonPokedexNumber: 242, typeId: 13 },
      { PokemonPokedexNumber: 243, typeId: 4 },
      { PokemonPokedexNumber: 244, typeId: 7 },
      { PokemonPokedexNumber: 245, typeId: 18 },
      { PokemonPokedexNumber: 246, typeId: 16 },
      { PokemonPokedexNumber: 246, typeId: 11 },
      { PokemonPokedexNumber: 247, typeId: 16 },
      { PokemonPokedexNumber: 247, typeId: 11 },
      { PokemonPokedexNumber: 248, typeId: 16 },
      { PokemonPokedexNumber: 248, typeId: 2 },
      { PokemonPokedexNumber: 249, typeId: 15 },
      { PokemonPokedexNumber: 249, typeId: 8 },
      { PokemonPokedexNumber: 250, typeId: 7 },
      { PokemonPokedexNumber: 250, typeId: 8 },
      { PokemonPokedexNumber: 251, typeId: 15 },
      { PokemonPokedexNumber: 251, typeId: 10 },
    ])

    return queryInterface.bulkInsert('PokemonForms', [
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Venusaur\')'),
        FormId: 1
      },

      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Butterfree\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Rattata\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Raticate\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Pickachu\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Raichu\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Nidoran♀\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Nidoran♂\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Zubat\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Golbat\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Gloom\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Vileplume\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Kadabra\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Alakazam\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Doduo\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Dodrio\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Hypno\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Rhyhorn\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Rhydon\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Goldeen\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Seaking\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Scyther\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Magikarp\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Gyarados\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Eevee\')'),
        FormId: 1
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Venusaur\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Charizard\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Charizard\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Blastoise\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Alakazam\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Gengar\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Kangaskhan\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Pinsir\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Gyarados\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Aerodactyl\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Mewtwo\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Mewtwo\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Beedrill\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Pidgeot\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Slowbro\')'),
        FormId: 3
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Rattata\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Raticate\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Raichu\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Sandshrew\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Sandslash\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Ninetales\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Vulpix\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Diglett\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Dugtrio\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Meowth\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Persian\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Geodude\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Graveler\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Golem\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Grimer\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Muk\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Exeggutor\')'),
        FormId: 4
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Marowak\')'),
        FormId: 4
      },

      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Meowth\')'),
        FormId: 5
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Ponyta\')'),
        FormId: 5
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Rapidash\')'),
        FormId: 5
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Slowpoke\')'),
        FormId: 5
      },
      { PokemonPokedexNumber: 83, FormId: 5 },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Weezing\')'),
        FormId: 5
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Mr. Mime\')'),
        FormId: 5
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Venusaur\')'),
        FormId: 6
      },

      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Charizard\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Blastoise\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Butterfree\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Pikachu\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Meowth\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Machamp\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Gengar\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Kingler\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Lapras\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Eevee\')'),
        FormId: 6
      },
      {
        PokemonPokedexNumber: Sequelize.literal('(SELECT pokedexNumber FROM Pokemons WHERE name = \'Snorlax\')'),
        FormId: 6
      },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('PokemonTypes')

    await queryInterface.bulkDelete('PokemonForms')

    await queryInterface.bulkDelete('Forms')

    await queryInterface.bulkDelete('Types')

    return queryInterface.bulkDelete('Pokemons')
  }
}

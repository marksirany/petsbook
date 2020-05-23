// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var petArray = [
    {
        petName: "Chowzee",
        petSpecies: "Feline",
        petGender: "Female",
        petDob: "07.07.2007",
        petVet: "dr no",
        petVetnum: "612.867.2808",
        petVetaddress: "2323 n120th",
        petMeds: "zolofty",
        petMedsstrength: "alot",
        petMedsfrequency: "all day",
        petFood: "Beer",
        petFoodbrand: "Coors",
        petFoodfrequency: "every day",
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = petArray;

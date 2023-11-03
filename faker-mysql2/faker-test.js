const { faker, ko, fakerKO } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');

const randomName = fakerKO.person.fullName(); // Rowan Nikolaus
const randomEmail = fakerKO.internet.email(); // Kassandra.Haley@erich.biz
const randomTitle = fakerKO.lorem.sentence({ min: 2, max: 3 });

console.log("randomName:"+randomName);
console.log("randomEmail:"+randomEmail);
console.log("randomTitle:"+randomTitle);
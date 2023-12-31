const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/exampleApp')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const Cat = mongoose.model('Cat', { name: String });

function addNewCat(catName) {
  const kitty = new Cat({ name: catName });

  kitty
    .save()
    .then(newCat => console.log(`A new cat is created: ${newCat}!`))
    .catch(err => console.log(`Error while creating a new cat: ${err}`));
}

function showCats() {
  console.log('All the CATS!');
  Cat.find()
    .then(catsFromDB => {
      catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat.name}`));
    })
    .catch(err => console.log(`Error occurred during getting cats from DB: ${err}`));
}

function addTenCats() {
  for (let i = 0; i < 10; i++) {
    addNewCat(`Sterling ${i}`);
  }
}

addTenCats();
setTimeout(showCats, 1500);

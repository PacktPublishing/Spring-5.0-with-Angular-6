conn = new Mongo();
db = conn.getDB("petStore");

// Pets
db.pet.insert({'cost' : NumberLong(5000000), 'numberInStock': 1, 'itemName': 'French Bulldog', 'pictureUrl': "https://cdn.pixabay.com/photo/2018/02/14/08/51/french-bulldog-3152394_1280.jpg"});
db.pet.insert({'cost' : NumberLong(10000), 'numberInStock': 5, 'itemName': 'Poodle', 'pictureUrl': "https://cdn.pixabay.com/photo/2017/03/14/01/51/poodle-2141699_1280.jpg"});
db.pet.insert({'cost' : NumberLong(45000), 'numberInStock': 2, 'itemName': 'Boxer', 'pictureUrl': "https://cdn.pixabay.com/photo/2016/03/24/22/53/boxer-1277804_1280.jpg"});
db.pet.insert({'cost' : NumberLong(1000), 'numberInStock': 10, 'itemName': 'Golden Fish', 'pictureUrl': "https://cdn.pixabay.com/photo/2015/11/04/10/09/gold-1022229_1280.jpg"});
db.pet.insert({'cost' : NumberLong(35000), 'numberInStock': 3, 'itemName': 'Parrot', 'pictureUrl': "https://cdn.pixabay.com/photo/2014/08/05/04/38/macaw-410144_1280.jpg"});

// Users
db.petStoreUser.insert({'name' : 'Aaron Peterson', 'moneyAvailable': NumberLong(100000), 'email': 'fred@yahoo.com'});
db.petStoreUser.insert({'name' : 'Joseph White', 'moneyAvailable': NumberLong(100000), 'email': 'joseph@yahoo.com'});

print('* Documents created');
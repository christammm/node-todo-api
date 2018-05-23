//MongoDB essentials


//To establish a connection
const Mongo  = require('mongodb');
var MongoClient = Mongo.MongoClient;
//The destructured versions
// const {MongoClient} = require('mongodb');
const {
    MongoClient, //This is the client for Mongo DB, require to connect to the server.
    ObjectID, //This is so you can establish your own unique identifier.
  } = require('mongodb');

//To connect to the Database This
MongoClient.connect('/*mongodb://Insert URL here*/', (err, db) => { //The callback returns either an error or the db.

    //Return error if connection to database fails.
    if(err){
      return console.log('Error has occured');
    } console.log('Connected to Database.');
    //No else statement needed if return console.log('error')



    //To create a collection.
    db.collection('Calculus'); //Just call 'collections(string)' functions.


    //To insert a single document into your collection, use 'insertOne(object, callback(err,res))'
    db.collection('Users').insertOne({
      name: 'Fucko',
      age: 69
    }, (err, response){
      if(err){
        return console.log('failed to insertOne document');
      }
      console.log(JSON.stringify(response,undefined,2); // response will return what is inputed
    });

    //To find documents within your collection do find({}). An object input is optional to find specific documents.
    db.collection('Users').find({
      name: "bob"
    }).then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Cant get todo:',err);
    });

    //To count the number of documents within your collection chain a count()''
    db.collection('Users').count().then((count) => {
      console.log('Total users: ', count);
    },(err) =>{
      console.log('Cant count Users', err);
    })

    //To delete from a collection
    // deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      console.log(result);
    });

    // deleteOne is used to delete a single document
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      console.log(result);
    });

    // findOneAndDelete returns the deleted document after having deleted it
    // (in case you need its contents after the delete operation);
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
    });

    // findOneAndDelete should be able to delete on _id. reee
    // long live PEPE
    db.collection('Users').findOneAndDelete({
      _id: new ObjectID("57ac8d47878a299e5dc21bc8")
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

    /*
    ⢠⠤⣤⠀⠤⡤⠄⢠⡤⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⢸⠲⣏⠀⢀⡇⠀⢸⡗⠚⢀⣤⣶⣾⣿⣷⣶⣤⣄⠀⠀⣀⣤⣤⣴⣦⣤⡀⠀⠀⠀⠀⠀⠀⠀
    ⠈⠀⠈⠀⠉⠉⠁⠈⠁⣴⣿⣿⣿⡿⠿⣛⣛⠻⠿⣧⢻⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣫⣵⣾⣿⣿⣿⡿⠷⠦⠔⣶⣶⣶⣶⣶⠶⠶⠶⠤⡀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⠿⠛⢁⣀⣌⣿⣿⣷⣶⣈⠿⣒⣒⣭⣭⣭⣭⣑⣒⠄⠀⠀
    ⠀⠀⠀⠀⠀⠀⣠⡎⣾⣿⣿⣿⣿⢫⣡⡥⠶⠿⣛⠛⠋⠳⢶⣶⣾⣜⣫⣭⣷⠖⡁⠀⠐⢶⣯⡆⠀
    ⠀⠀⠀⣰⣿⣷⣿⣿⣿⣿⣿⣷⣖⢟⡻⢿⠃⢸⠱⠶⠀⠿⠟⡻⠿⣿⡏⠀⠅⠛⠀⣘⠟⠁⠀ ⠀
    ⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣮⣥⣤⣴⣤⣦⠄⣠⣾⣿⡻⠿⠾⠿⠿⠟⠛⠁⠀⠀⠀ ⠀
    ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣭⣶⣿⣿⣿⣿⣿⣷⣿⣿⣿⣧⡀⠀⠀⠀⠀ ⠀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀ ⠀
    ⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢩⡤⠶⠶⠶⠦⠬⣉⣛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⣋⣡⠀⠀⠀ ⠀
    ⠘⣿⣿⣿⣿⣿⣿⣟⢿⣧⣙⠓⢒⣚⡛⠳⠶⠤⢬⣉⣉⣉⣉⣉⣉⣉⣉⣉⣉⡄⠀⠀⠀⠀ ⠀
    ⠀⠈⠻⢿⣿⣿⣿⣿⣶⣽⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣤⣤⣤⣤⣤⣤⡥⠄⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠐⠒⠭⢭⣛⣛⡻⠿⠿⠿⠿⣿⣿⣿⣿⣿⠿ ....3
    */

    db.close();
});

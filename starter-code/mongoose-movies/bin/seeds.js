require("../config/celebrity-setup");
const CelebrityModel = require("../models/celebrity");

const celebSchema = [
  {
    name: "Drake",
    occupation: "Singer",
    catchPhrase: "YOLO"
  },
  {
    name: "Eminem",
    occupation: "Singer",
    catchPhrase: "Will the real slim shady please stand up. I repeat, will the real slim shady please stand up"
  },
  {
    name: "Chris Hemsworth",
    occupation: "Actor",
    catchPhrase: "By Odin's beard!"
  }
];

CelebrityModel.create(celebSchema)
.then( celebrityResults => {
  console.log(`Inserted ${celebrityResults.length}
  celebrities`);
})
.catch( err => {
  console.log(err);
});

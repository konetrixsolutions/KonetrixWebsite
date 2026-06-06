const mongoose = require("mongoose");

const uri ="mongodb://konetrixsolutions_db_user:Hx1vmZkbjwYiC2oG@ac-chulvkr-shard-00-00.c5lgtbr.mongodb.net:27017,ac-chulvkr-shard-00-01.c5lgtbr.mongodb.net:27017,ac-chulvkr-shard-00-02.c5lgtbr.mongodb.net:27017/konetrix?ssl=true&replicaSet=atlas-v8q3q9-shard-0&authSource=admin&appName=Cluster0";

async function test() {
  try {
    await mongoose.connect(uri);
    console.log("Connected!");
    process.exit(0);
  } catch (err) {
    console.error("Failed:", err);
    process.exit(1);
  }
}

test();
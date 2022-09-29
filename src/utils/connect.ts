import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("MongooseDB was connect...");
  } catch (error) {
    console.error("Could not connnect MongoseDB");
    process.exit(1);
  }
}

export default connect;

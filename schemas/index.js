import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:axisotherwise@localhost:27017/admin",
      {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
      }
    )
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

// EvenListener
mongoose.connection.on("error", (err) => console.error(err));
mongoose.connection.on("disconnected", () => connect());

export default connect;
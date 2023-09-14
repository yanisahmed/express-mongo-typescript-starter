import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  await mongoose.connect(config.database_url as string);
  console.log("Database Connected Successfully");
  try {
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to Connect Database", error);
  }
}

bootstrap();

import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// main().catch( error => console.log( error) );

async function bootstrap() {
  //hqvRGOrUn5Muo0sV
  await mongoose.connect(config.database_url as string);
  try {
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();

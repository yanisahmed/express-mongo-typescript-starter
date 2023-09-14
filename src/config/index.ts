import dotenv from "dotenv";
import path from "path";
// Default: path.resolve(process.cwd(), '.env')
// Custom: require('dotenv').config({ path: '/custom/path/to/.env' })
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};

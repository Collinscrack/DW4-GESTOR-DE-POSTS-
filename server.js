import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from "./routes/post.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors()); 
app.use(express.json());
app.use('/api/post', postRoutes);

async function main() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/api/post`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
}

main();

import express from 'express'
import cors from 'cors';
import { students } from "./modules/module.js";
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Разрешаем CORS для фронтенда на Next.js
app.use(cors({ origin:["http://localhost:3000", "https://eyecodeuniversity.ru","http://87.228.25.133/"] }));


app.use(express.json());


app.get('/api/users', (req, res) => {
  res.json([
      {
        ...students 
      }
  ]);
});

// Запуск сервера
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

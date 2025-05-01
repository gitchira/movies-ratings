import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import  { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Movies Ratings' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

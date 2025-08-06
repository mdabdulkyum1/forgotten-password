import express from 'express';
import { PrismaClient } from '@prisma/client';
import { json } from 'body-parser';

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.get('/', (req, res) => {
    res.send('Welcome to the Prisma Backend!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
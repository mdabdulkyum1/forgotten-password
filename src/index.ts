import express from 'express';
import { PrismaClient } from '@prisma/client';
import { json } from 'body-parser';

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.get('/', (req, res) => {
    res.send('Welcome to the Prisma Backend!');
});

// Example route to get all users
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
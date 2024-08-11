import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../syop-fronted/dist')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Serve Vite app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../syop-fronted/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

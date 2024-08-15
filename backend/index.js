import express from 'express'
import {user} from './components/auth.js'
import cors from 'cors'
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api/v1/user",user)





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

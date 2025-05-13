import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import testRoutes from './routes/testRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Allow CORS
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/test', testRoutes);

app.get('/', (req, res) => res.send('API is Working'));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', paymentRoutes);

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
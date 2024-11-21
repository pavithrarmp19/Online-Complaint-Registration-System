import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/post.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL =' mongodb+srv://pavithra19:root@cluster0.kbrsr.mongodb.net/Registration_1?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT || 5000;

mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
    }).catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

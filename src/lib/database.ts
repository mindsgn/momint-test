import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

(async () => {
    try {
        const db: any = await mongoose.connect(
            `${process.env.MONGO_URL}`
        );
        console.log("Databse is connected to: ", db.connection.name);
      } catch (error) {
        console.error(error);
      }
})();

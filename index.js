import express from "express";
import blogUserRoutes from "./blogUserRoutes.js";
import { extractUserFromHeader } from "./middleware/extractUserFromHeader.js";
const app = express();

app.use(express.json());

const PORT = 5001;
app.use("/", extractUserFromHeader, blogUserRoutes);
app.listen(PORT, () => {
  console.log(`User service is running on port: ${PORT}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/' , (req,res)=>{
    res.send("Hello Node Server !")
})

app.put("/api/tasks/:id", async (req, res) => {
    const { title, completed } = req.body;
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { title, completed },
        { new: true }
      );
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: "Failed to update task" });
    }
  });
  

app.use("/api", taskRoutes);
app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})
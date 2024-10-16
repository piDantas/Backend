const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes"); 

const app = express();
app.use(cors()); 
app.use(express.json()); 

app.use("/todos", todosRoutes); 

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3333`);
});

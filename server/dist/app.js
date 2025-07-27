"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
//Middleware
app.use(express_1.default.json());
app.use((req, res, next) => {
    req.startTime = Date.now(); 
    next();  
});
//route
app.get("/", (req, res) => {
    res.send("Server is now running");
});
app.post("/user", (req, res) => {
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

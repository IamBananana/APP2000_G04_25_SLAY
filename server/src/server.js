"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Serve static files from the dist directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
// A simple API route
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});
// Catch-all route to serve index.html for any unknown route
app.get('*', (req, res) => {
    const indexPath = path_1.default.join(__dirname, 'index.html');  // Endret fra 'dist' til root
    console.log('Attempting to send index.html from: ', indexPath);
    res.sendFile(indexPath);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

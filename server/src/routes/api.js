"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/example', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});
const apiRoutes = router; // Her gir vi routeren et navn
exports.default = apiRoutes; // Eksporter apiRoutes

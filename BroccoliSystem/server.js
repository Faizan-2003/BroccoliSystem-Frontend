import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Use the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files served from 'dist' directory
const staticPath = path.join(__dirname, "dist");
app.use(express.static(staticPath));

// SPA routing: Redirect to index.html for any route
app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

// Set the port to Azure's provided port or default to 80
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// Serve static assets from 'public' if they don't exist in 'dist'
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Handle SPA routing (redirect all unmatched routes to index.html)
app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

// Ensure your app uses the correct port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

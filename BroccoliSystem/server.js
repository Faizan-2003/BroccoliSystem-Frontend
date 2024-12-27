import express from "express"; // Use 'import' instead of 'require'
import path from "path";
import { fileURLToPath } from "url";

// Create an Express server
const app = express();

// Determine __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
const staticPath = path.join(__dirname, "dist");
app.use(express.static(staticPath));

// Handle SPA routing (redirect all unmatched routes to index.html)
app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

// Set the port to use environment variable PORT or default to 8080
const PORT = process.env.PORT || 5173;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express"; // Use 'import' instead of 'require'
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
const staticPath = path.join(__dirname, "dist");
app.use(express.static(staticPath));

// Handle SPA routing (redirect all unmatched routes to index.html)
app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

// Ensure your app uses the correct port
const PORT = process.env.PORT || 8080; // Azure uses this port for HTTP traffic
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import app from "./app.js";



const PORT = process.env.PORT || 4000; // Use environment variable or default to 4000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
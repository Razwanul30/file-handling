import express from "express";
import multer from "multer";


const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.json({ message: "File uploaded successfully.", file: req.file });
});

const PORT =3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
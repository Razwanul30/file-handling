import express from "express";
import multer from "multer";


const app = express();
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }
//   res.json({ message: "File uploaded successfully.", file: req.file });
// });

app.post("/profile", upload.array("images", 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.files.length);

  res.json({
    name: req.body.name,
    email: req.body.email,
    files: req.files.map((file) => file.filename),
  })});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
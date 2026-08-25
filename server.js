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

app.post("/profile", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.file);

  res.json({
    name: req.body.name,
    email: req.body.email,
    file: req.file.filename,
  })});

const PORT =3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
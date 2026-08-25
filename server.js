import express from "express";
import multer from "multer";


const app = express();
app.use(express.json());

const upload = multer({ dest: "uploads/",
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true);
        } else {
            cb(new Error("Only JPEG and PNG files are allowed."), false);
        }
    },
 });

app.post("/profile", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.json({ message: "File uploaded successfully.", file: req.file });
});

// app.post("/profile", upload.fields([
//     {name: "thumbnail", maxCount: 1},
//     {name: "gallery", maxCount: 5}
// ]),(req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).send("No files uploaded.");
//   }
//   console.log(req.body.name);
//   console.log(req.body.email);
//   console.log(req.files.thumbnail.length+req.files.gallery.length);


//   res.json({
//     name: req.body.name,
//     email: req.body.email,
//     thumbnail: req.files.gallery.map((file) => file.filename),
//     gallery: req.files.gallery.map((file) => file.filename),
//   })});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
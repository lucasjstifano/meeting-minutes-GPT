import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), (req, res) => {
  // req.file contains the uploaded file
  // Process the video file here, extract audio, transcribe, and generate email content

  res.json({ message: "File uploaded successfully" });
});

// const PORT = process.env.PORT || 3001;
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

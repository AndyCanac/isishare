const express = require('express');
const multer = require('multer');
const router = express.Router();
const pool = require('../db');

// Configuration de Multer pour limiter la taille du fichier à 20 Mo
const upload = multer({
  limits: {
    fileSize: 2024 * 2024 * 40, // Limite à 20 Mo (en octets)
  },
});

// Route pour gérer le téléchargement d'une image
router.post('/', upload.single('profilePic'), async (req, res) => {
  const { userId, filePath } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const result = await pool.query(`
      UPDATE users
      SET picture = ?
      WHERE id = ?
    `, [filePath, userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ url: filePath });
  } catch (e) {
    console.error('Error updating database:', e.message);
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

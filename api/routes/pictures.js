const express = require("express");
const router = express.Router();
const upload = require('../upload');
const pool = require("../db");

router.post('/', upload.single('profilePic'), async (req, res) => {
  const filePath = `${req.file.filename}`;
  const userId = req.body.userId;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    console.log('Requête SQL : UPDATE users SET profile_pic_url = ? WHERE id = ?');
    console.log('Valeurs :', [filePath, userId]);

    const result = await pool.query(`
      UPDATE users
      SET profile_pic_url = ?
      WHERE id = ?
    `, [filePath, userId]);

    // Log du résultat de la requête
    console.log('Résultat de la requête :', result);

    // Vérifiez si la mise à jour a affecté des lignes
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ url: filePath });
  } catch (e) {
    console.error('Erreur lors de la mise à jour de la base de données :', e.message);
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

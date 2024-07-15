const multer = require('multer');
const path = require('path');

// Configuration du stockage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, '../isishare/public/uploads');
    cb(null, uploadPath); // Dossier de destination des fichiers uploadés
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Nom du fichier avec suffixe unique
  }
});

// Filtrage des fichiers
const fileFilter = (req, file, cb) => {
  // Accepter uniquement les fichiers image
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

// Configuration de Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // Limite de taille de fichier à 5MB
});

module.exports = upload;

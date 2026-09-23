const { param } = require('express-validator');

exports.genreId = param('genre_id').exists().notEmpty().escape().isInt().withMessage('Genre ID must be a valid integer');
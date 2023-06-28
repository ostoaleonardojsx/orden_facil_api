const express = require('express');

const router = express.Router();

const service = require('./service');

router.get('/', service.getAllArticles);
router.get('/:id', service.getArticleById);
router.post('/', service.createArticle);
router.delete('/:id', service.deleteArticle);
router.put('/:id', service.updateArticle);

module.exports = router;
const router = require('express').Router();
const { getCards, createCard, deleteUserId } = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteUserId);
module.exports = router;

const { Router } = require('express');
const indexController = require('../controllers/indexController');
const { validationResult, matchedData, body } = require('express-validator');
const validator = require('../validators/validator');

const indexRouter = Router();

indexRouter.get("/", indexController.messagesGet);
indexRouter.get("/new", indexController.newGet);

indexRouter.post("/new",
    validator.validateNewMessage,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return indexController.newPostFailed(res, errors.array(), { username: req.body.username, text: req.body.text });
        }
        next();
    },
    indexController.newPost
);

indexRouter.get('/:id',
    validator.validateMessageID,
    indexController.singleMessageGet
);

module.exports = indexRouter;
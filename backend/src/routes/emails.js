const {Router} = require('express');
const router = Router(); 

const { createUser, getUsers, sendCovid, sendObesidad } = require('../controllers/emails.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/obesidad')
    .post(sendObesidad);

router.route('/covid')
    .post(sendCovid);

module.exports = router;
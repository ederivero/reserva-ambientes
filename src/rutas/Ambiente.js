const express = require('express');
const Ambiente = require('../controleadores/Ambiente');
const ambiente_router = express.Router();
const { wachiman } = require('../utils/utils');

ambiente_router.get('/ambiente', Ambiente.getAmbientesWithPabellon);
ambiente_router.post('/ambiente', Ambiente.postAmbientes);
ambiente_router.put('/ambiente/:id_ambiente',wachiman, Ambiente.putAmbientes);

module.exports = {
    ambiente_router
}
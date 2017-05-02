'use strict'
var express = require('express')
var ImageController = require('../controllers/image')
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: "./uploads"});



var api = express.Router();

api.get('/prueba',ImageController.pruebas)
api.get('/image/:id',ImageController.getImage)
api.post('/image',ImageController.saveImage)
api.get('/images/:album?',ImageController.getImages)
api.put('/images/:id',ImageController.UpdateImage)
api.delete('/images/:id',ImageController.deleteImage)
api.post('/uploadimage/:id',multipartMiddleware,ImageController.UploadImage)
api.post('/UploadimageI',multipartMiddleware,ImageController.saveImage2)
api.get('/getImage/:imageFile',multipartMiddleware,ImageController.getImageFile)


module.exports = api;

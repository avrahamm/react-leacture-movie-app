const express = require('express')
const Model = require('../../models/Movie')
const crudUtil = require('../../utilites/MongooseCrud')

module.exports = express
  .Router()
  .get('/', crudUtil.getAllResources(Model))
  .get('/:id', crudUtil.getAllResourcesById(Model))
  .post('/', crudUtil.createResource(Model))
  .put('/:id', crudUtil.updateResource(Model))
  .delete('/:id', crudUtil.deleteResource(Model))

const ErrorHandler = (err, res) => res.status(400).json(err)

exports.getAllResources = Model => (req, res) => {
  Model.find({}, (err, document) => {
    if (err) return ErrorHandler(err, res)
    return res.json(document)
  })
}

exports.getAllResourcesById = Model => ({ params }, res) => {
  Model.findById(params.id, (err, document) => {
    if (err) return ErrorHandler(err, res)
    return res.json(document)
  })
}

exports.createResource = Model => ({ body }, res) => {
  const document = new Model(body)
  document.save((err, document) => {
    if (err) return ErrorHandler(err, res)
    return res.json(document)
  })
}

exports.updateResource = Model => ({ params, body }, res) => {
  Model.findByIdAndUpdate(params.id, body, { new: true }, (err, document) => {
    if (err) return ErrorHandler(err, res)
    return res.json(document)
  })
}

exports.deleteResource = Model => ({ params, body }, res) => {
  Model.findByIdAndDelete(params.id, (err, document) => {
    if (err) return ErrorHandler(err, res)
    return res.json(document)
  })
}

exports.bulkInsertToArray = (Model, key) => (req, res) => {
  Model.findOneAndUpdate(
    { _id: req.params.id },
    {
      $addToSet: { [key]: { $each: req.body } }
    },
    { new: true },
    (err, document) => {
      if (err) return res.status(400).json(err)
      return res.json(document)
    }
  )
}

exports.bulkRemoveFromArray = (Model, key) => (req, res) => {
  Model.findOneAndUpdate(
    { _id: req.params.id },
    {
      $pullAll: { [key]: req.body }
    },
    { new: true },
    (err, document) => {
      if (err) return res.status(400).json(err)
      return res.json(document)
    }
  )
}

exports.getRandomResources = (Model, num = 4) => (req, res) => {
  Model.aggregate([{ $sample: { size: num } }], (err, documents) => {
    res.json(documents)
  })
}

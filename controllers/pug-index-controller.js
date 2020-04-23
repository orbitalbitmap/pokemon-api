function activateEndpoint(id) {
  var endPointId = id + '-end-point'
  // eslint-disable-next-line no-undef
  var endPoints = document.getElementsByClassName('endpoint')

  for (var i = 0; i < endPoints.length; i++) {
    if (endPoints[i].id === endPointId) {
      endPoints[i].classList.add('selected')
    } else {
      endPoints[i].classList.remove('selected')
    }
  }

  var docId = id + '-doc'
  // eslint-disable-next-line no-undef
  var docs = document.getElementsByClassName('doc')

  for (var j = 0; j < docs.length; j++) {
    if (docs[j].id === docId) {
      docs[j].classList.remove('hidden')
    } else {
      docs[j].classList.add('hidden')
    }
  }
}

module.exports = activateEndpoint()

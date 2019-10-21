const { Router } = require('express')

const router = Router()

function result (guess) {
  const rightGuess = 50
  let final = ''

  if (guess === rightGuess) {
    final = 'Bingoo!'
  } else if (guess < rightGuess) {
    final = 'low'
  } else if (guess > rightGuess) {
    final = 'high'
  } else {
    final = 'invalid input'
  }

  return final
}

router.get('/result/:guess', function (req, res) {
  const userGuess = +req.params.guess

  res.send({ guess: result(userGuess) })
})

module.exports = router

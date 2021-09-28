const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'

let case_number = [1234,1111,2222,5555]


router.post('/checkinput', function (req, res) {


    // Check whether the variable matches a condition
    if (req.session.data['case number'] == case_number[0] ){
      // Send user to next page
      res.redirect('FineInfo')
    } else {
      // Send user to ineligible page
      res.redirect('ineligible')
    }
  
  })

module.exports = router

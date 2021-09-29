const express = require('express')
const router = express.Router()

//use this to test login, valid login where fine needs paid, incorrect info given, and where the fine has already been paid
let Divisions = ["48095961","93926077","91990106","28955127","00725231"];
let AccountNumbers = ["08006811","08006812","08006813","08006814","08006815"];
let Settled = [false,false,false,true,true];

// use this to populate fine info page, currently not implemented
let Addresss = ["123 Fake Street","124 Fake Street","125 Fake Street","126 Fake Street","127 Fake Street"];
let Names = ["John Smith","Mary Archer","Jim Bean","Jack Daniels","Ally cord"];
let FineAmounts = [1000, 700, 400, 300, 200];
let OffenderLevys = [15,15,15,15,15];
let CompensationAmounts = [250,0,0,0,0];
let ProsecutionCosts = [63,21,21,21,21];
let TotalPayableAmounts = [1328,736,436,336,236];


// store details users entered on landing page, case number and account number
router.post('/checkinput', function (req, res) {
  
  caseNum = req.session.data['case number']
  accountNum = req.session.data['Account number']
  caseNumPos = Divisions.indexOf(caseNum)
  accountNumPos = AccountNumbers.indexOf(accountNum)


// Check that both the case number and account number are included in provided test data, and that they are in same array position
// i.e. mimic a password/username
if (Divisions.includes(caseNum)  && AccountNumbers.includes(accountNum) && caseNumPos == accountNumPos ){
  // Check if fine has not been paid, move to fine information page
  if(Settled[accountNumPos] == false){
    res.redirect('FineInfo')
  }
  //if fine has been paid, display message showing this
    else{
      res.redirect('finepaid')
    }
  }  
else {
  // If user enters incorrect details, display warning on page.
  res.redirect('ineligible')
}


})




module.exports = router

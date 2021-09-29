const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Simple if statement for now, potentially change to iterate through Conors sample database?

let storedUserArr = [];
//use this to test login, valid login where fine needs paid, incorrect info given, and where the fine has already been paid
let CaseNumbers = ["164","164","164","164","164"];
let AccountNumbers = ["08006811G","08006812G","08006813G","08006814G","08006815G"];
let Settleds = [false,false,false,true,true];

// use this to populate fine info page
let Addresss = ["123 Fake Street","124 Fake Street","125 Fake Street","126 Fake Street","127 Fake Street"];
let Names = ["John Smith","Mary Archer","Jim Bean","Jack Daniels","Ally cord"];
let FineAmounts = [1000, 700, 400, 300, 200];
let OffenderLevys = [15,15,15,15,15];
let CompensationAmounts = [250,0,0,0,0];
let ProsecutionCosts = [63,21,21,21,21];
let TotalPayableAmounts = [1328,736,436,336,236];


  // Notused
 
// for(let i = 0; i < 5; i ++ ){
//   let object = {
//   id: i,
//   Division: Divisions[i],
//   AccountNumber: AccountNumbers[i],
//   Address: Addresss[i],
//   Name: Names[i],
//   FineAmount: FineAmounts[i],
//   OffenderLevy: OffenderLevys[i],
//   CompensationAmount: CompensationAmounts[i],
//   ProsecutionCost: ProsecutionCosts[i],
//   TotalPayableAmount: TotalPayableAmounts[i],
//   Settled: Settleds[i],
//   }
//   storedUserArr.push(object);
//   }

  // function login(Division, AccountNumber) {
  //   for (let user of storedUserArr) {
  //   if (user["Division"] === Division && user["AccountNumber"] === AccountNumber) {
  //   console.log("You have logged in");
  //   hasPaidFine(user)
  //   // Return here so that you don't break out of the for loop hit the console log below for a failed login
  //   return;
  //   }
  //   }
  //   console.log("You have entered the wrong details, please try again");
  //   return;
  //   }  


  // function hasPaidFine(user) {
  //   if (user["Settled"] === true) {
  //   console.log("You've already paid");
  //   } else {
  //   goToNextPage();
  //   }
  //   }
  


let case_number = CaseNumbers
let Acount_number = AccountNumbers

router.post('/checkinput', function (req, res) {


  // Check whether the variable matches a condition
  if (req.session.data['case number'] == case_number[0] && req.session.data['Account number'] == Acount_number[0] ){
    // Send user to next page
    res.redirect('FineInfo')
  } else {
    // Send user to ineligible page
    res.redirect('ineligible')
  }

})




module.exports = router 

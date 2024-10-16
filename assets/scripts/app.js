const defultResult = 0;
 let currentResult = defultResult;
 let logEntries = [];
 
 function getUserInput(){
 return parseInt(userInput.value);
 }

 // CALCULATION LOG
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDiscription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult (currentResult, calcDiscription)
}
function writeToLog(
   operationIdentifier,
   prevResult,
   operationNumber,
   newResult
) {
   const logEntry ={
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

 //IF CONDITION

 function calculationResult(calculationType){
   const enterNumber = getUserInput();
   const initialResult = currentResult;
   let mathOperator;
   if (calculationType === "ADD"){
      currentResult +=enterNumber;
      mathOperator = "+";
   }
   else if (calculationType ==="SUBSTRACT"){
      currentResult -=enterNumber;
      mathOperator = "-"
   }
   else if (calculationType === "MULTIPLY"){
      currentResult *= enterNumber;
      mathOperator = "*"
   }
   else{
      currentResult /= enterNumber;
      mathOperator = "/"
   }
   if (calculationType !== "ADD" &&
      calculationType !== "SUBSTRACT"&&
      calculationType !== "MULTIPLY"
      calculationTypeC !== "DIVIDE"
      return

   ){
      
   }
   createAndWriteOutput(mathOperator, initialResult, enterNumber);
   writeToLog (calculationType, initialResult, enterNumber, currentResult)
 }

 function add() {
   calculationResult("ADD")
 }

 function substract() {
   calculationResult("SUBSTRACT")
 }

 function multiply() {
   calculationResult("MULTIPLY")
 }

 function divide() {
   calculationResult("DIVIDE")
 }
 

/* function add() {
   const enterNumber = getUserInput()
   const initialResult = currentResult
   currentResult += enterNumber;
   createAndWriteOutput("+", initialResult, enterNumber)
   writeToLog("ADD", initialResult, enterNumber, currentResult);
 }

function substract(){
   const enterNumber = getUserInput()
   const initialResult = currentResult
   currentResult -= enterNumber;
   createAndWriteOutput("-", initialResult, enterNumber)
   writeToLog("SUBSTRACT", initialResult, enterNumber, currentResult);

}
function multiply(){
   const enterNumber = getUserInput()
   const initialResult = currentResult
   currentResult *= enterNumber;
   createAndWriteOutput("*", initialResult, enterNumber)
   writeToLog("MULTIPLY", initialResult, enterNumber, currentResult);

}
function divide(){
   const enterNumber = getUserInput()
   const initialResult = currentResult;
   currentResult /=  enterNumber;
   createAndWriteOutput("/", initialResult, enterNumber)
   writeToLog("DIVIDE", initialResult, enterNumber, currentResult);

}*/

 addBtn.addEventListener("click", add);
 subtractBtn.addEventListener("click", substract)
 multiplyBtn.addEventListener("click", multiply)
 divideBtn.addEventListener("click", divide)
 
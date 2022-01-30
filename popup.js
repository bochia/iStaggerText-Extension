document.addEventListener('DOMContentLoaded', function() {
	var convertButton = document.getElementById('convertButton');
  convertButton.addEventListener('click', function() {
  	ConvertInputToStaggeredText();
  }, false);
}, false);


function ConvertInputToStaggeredText() {
	var inputTextBox = document.getElementById("inputText");
  var inputText = inputTextBox.value;
  
  var isStaggerTypeLowerCase = isSelectedStaggerTypeLowerCase();
  
  var outputTextBox = document.getElementById("outputText");
  outputTextBox.value = StaggerText(inputText, isStaggerTypeLowerCase);
  outputTextBox.value = StaggerText(inputText, isStaggerTypeLowerCase);
}

function isSelectedStaggerTypeLowerCase(){
	var staggerTypeSelectBox = document.getElementById("staggerTypes");
  
  return staggerTypeSelectBox.options[staggerTypeSelectBox.selectedIndex] == staggerTypeSelectBox.options[0];
}


function StaggerText(inputText, startWithLowerCase){
	var outputText = "";
  inputText = inputText.toLowerCase();
  
  var nextCharacter = '';
  
  for (let i = 0; i < inputText.length; i++) {
  
  	if(i % 2 == startWithLowerCase){
    	nextCharacter = inputText[i].toUpperCase();
    }else{
    	nextCharacter = inputText[i];
    }
    
    outputText  += nextCharacter;
	}
  
  return outputText;
}
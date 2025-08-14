// Calculator js

const display = document.getElementById("display");

function appendToDisplay(input)
{
  display.value += input;

}

function clearDisplay()
{
  display.value = "";
}

function deleteWords()
{
  let string = display.value;
   display.value = string.substr(0, string.length -1);
}

function calculate()
{
  try 
  {
    let input = display.value.replace(/\^/g, '**');
    input = input.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    display.value = eval(input);
  }
  catch(error)
  {
    display.value = "Error";
  }
}

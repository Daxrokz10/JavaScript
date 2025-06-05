let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operations = ['+','-','*','/','%'];

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value = e.target.innerText;

        if(value == 'AC'){
            display.value = '';
        }
        else if(value == '='){
            display.value = eval(display.value);
        }
        else if(value == 'DEL'){
            display.value = display.value.slice(0,-1);
        }
        else if(operations.includes(value)){
            if(operations.includes(display.value.slice(-1))){
                display.value = display.value.slice(0,-1);
                display.value += value;
            }
            else{
                display.value += value;
            }
        }
        else{
            display.value += value;
        }
    })
})

document.addEventListener('keydown', (e) => {
  const key = e.key;

  // Create a mapping for Enter and Backspace
  let keyValue = key;
  if (key === 'Enter') keyValue = '=';
  if (key === 'Backspace') keyValue = 'DEL';
  if (key === 'Escape') keyValue = 'AC';

  // Find the button with that text and click it
  document.querySelectorAll('.btn').forEach((btn) => {
    if (btn.innerText === keyValue) {
      btn.click();
    }
  });
});

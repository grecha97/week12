const random = document.querySelector('.random');
function makeWord(words) {
    let text = '';
    let alphabet='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    
      for(let i=0; i<words; i=i+2){
        text += alphabet[Math.floor(Math.random()*alphabet.length)];
      }
    console.log(text);
    random.innerHTML =text;
    }
    makeWord(8);
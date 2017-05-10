const notes = {
  a: document.querySelector('#a_audio'),
  b: document.querySelector('#b_audio'),
  c: document.querySelector('#c_audio'),
  d: document.querySelector('#d_audio'),
  e: document.querySelector('#e_audio'),
  f: document.querySelector('#f_audio'),
  g: document.querySelector('#g_audio')
}


const keys = document.querySelectorAll('.key')

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function(event) {
    notes[keys[i].id].currentTime = 0     //keys[i] is the same of event.target
    notes[event.target.id].play()
  }
}
const keyCodes = {
  '97': 'c',
  '115': 'd',
  '100': 'e',
  '102': 'f',
  '103': 'g',
  '104': 'a',
  '106': 'b'
}

document.addEventListener('keypress', function(event) {
  console.log(event.keyCode);
  //  if(event.keyCode ===97){
  //    notes['c'].currentTime = 0;
  //    notes['c'].play();
  //  }
  const note = keyCodes[event.keyCode] //97
  notes[note].currentTime = 0;
  notes[note].play();
})

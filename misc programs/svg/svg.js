let whichOne

function click(obj){
  let others = obj.parentNode.children;
  for (let i=0; i < others.length; i++){
    others[i].classList.remove("clicked")
  }
  obj.classList.add('clicked');
}

function add(obj){
  if (obj.getElementsByTagName('select')[0].value == 'line'){
    addLine();
  }
  else if (obj.getElementsByTagName('select')[0].value == 'circle'){
    addCircle();
  }
}

function addLine(){
  let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  newLine.setAttribute('x1', 5);newLine.setAttribute('y1', 5);
  newLine.setAttribute('x2', 100);newLine.setAttribute('y2', 5);
  newLine.setAttribute('stroke', '#ff0000');newLine.style.strokeWidth = '2';
  newLine.setAttribute('onclick', 'click(this);chooseElementLine(this)');
  newLine.id = 'line' + document.getElementById('canvas').getElementsByTagName('line').length;
  document.getElementById('canvas').appendChild(newLine);
}

function chooseElementLine(obj){
  whichOne = obj.id;
  document.getElementById('line').style.display = 'block';
  document.getElementById('circle').style.display = 'none';
  document.getElementById('x1').value = document.getElementById(whichOne).getAttribute('x1')
  document.getElementById('y1').value = document.getElementById(whichOne).getAttribute('y1')
  document.getElementById('x2').value = document.getElementById(whichOne).getAttribute('x2')
  document.getElementById('y2').value = document.getElementById(whichOne).getAttribute('y2')

  document.getElementById('color').value = document.getElementById(whichOne).getAttribute('stroke')
  document.getElementById('width').value = document.getElementById(whichOne).style.strokeWidth
}

function addCircle(){
  let newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  newCircle.setAttribute('cx', 15);newCircle.setAttribute('cy', 15);
  newCircle.setAttribute('r', 10);newCircle.setAttribute('fill', '#ff7000');
  newCircle.setAttribute('stroke', '#ff0000');newCircle.style.strokeWidth = '2';
  newCircle.setAttribute('onclick', 'click(this);chooseElementCircle(this)');
  newCircle.id = 'circle' + document.getElementById('canvas').getElementsByTagName('circle').length;
  document.getElementById('canvas').appendChild(newCircle);
}

function chooseElementCircle(obj){
  whichOne = obj.id;
  document.getElementById('circle').style.display = 'block';
  document.getElementById('line').style.display = 'none';
  document.getElementById('cx').value = document.getElementById(whichOne).getAttribute('cx');
  document.getElementById('cy').value = document.getElementById(whichOne).getAttribute('cy');
  document.getElementById('r').value = document.getElementById(whichOne).getAttribute('r');
  document.getElementById('fill').value = document.getElementById(whichOne).getAttribute('fill');

  document.getElementById('color').value = document.getElementById(whichOne).getAttribute('stroke')
  document.getElementById('width').value = document.getElementById(whichOne).style.strokeWidth
}

function removeElement(){
  document.getElementById(whichOne).remove();
  document.getElementById('line').style.display = 'none';
  document.getElementById('circle').style.display = 'none';
}

function save(){
  document.getElementById('canvas').getElementsByClassName('clicked')[0].classList.remove('clicked');
  localStorage.setItem('svg', document.getElementById('canvas').innerHTML)
}
function upload(){
  document.getElementById('canvas').innerHTML = localStorage.getItem('svg')
}

function unselect(){
  document.getElementById('canvas').getElementsByClassName('clicked')[0].classList.remove('clicked');
  document.getElementById('line').style.display = 'none';
  document.getElementById('circle').style.display = 'none';
}
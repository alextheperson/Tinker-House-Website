function toFixed(num, amount) {//recreation of p5's 'toFixed()' function
    if (num === null){
      num = "0.00";
    }
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (amount || -1) + '})?');
    return num.toString().match(re)[0];
}
function cock(obj){
  obj.getElementsByTagName("i")[0].classList.add("cock");
}
function uncock(obj){
  obj.getElementsByTagName("i")[0].classList.remove("cock");
}
function cockThis(obj){
  obj.remove("cock");
}
function uncockThis(obj){
  obj.remove("cock");
}
function toggleFaState(obj){
  obj.classList.toggle("fas")
}
function spin(obj){
  obj.classList.add("fa-spin")
}
function unSpin(obj){
  obj.classList.remove("fa-spin")
}
function fold(obj){
  obj.classList.toggle("hov");
  button();
  window.onclick = function() {
    obj.classList.remove("hov")
  }
}

function displayCart(){
  let cart = localStorage.getItem("itemList");
  price = toFixed(localStorage.getItem("itemPrice"), 2);
  if (cart === null || cart === undefined){
    cart = []
  }
  else {
    cart = cart.split(",");
    cartLen = cart.length;
    if (cartLen > 1){
      output = "<ul>";
      for (let i = 1; i < cartLen; i++){
        output += "<li>" + cart[i] + "</li>";
      }
      output += "</ul>"
      document.getElementById("empty").classList.remove("not-allowed");
    }
    else {
      output = "Nothing Here...<br><b>YET!</b>";
      document.getElementById("empty").classList.add("not-allowed");
    }

    document.getElementById("cart").innerHTML = output;
    document.getElementById("num").innerHTML = cartLen - 1 + "&nbsp;&nbsp;&nbsp;$" + price + "&nbsp;&nbsp;";
  }
  
}

function addToCart(thing, price){
  cart = localStorage.getItem("itemList");
  oldPrice = localStorage.getItem("itemPrice");
  if (oldPrice === null || oldPrice == 'NaN'){
    oldPrice = 0;
  }
  oldPrice = parseFloat(oldPrice);
  if (cart === null || cart === undefined){
    cart = '[]'
  }
  cart = cart.split(",");
  cart.push(thing);
  oldPrice += price;
  localStorage.setItem("itemPrice", oldPrice)
  localStorage.setItem("itemList", cart);
  displayCart();
}

function resetCart(){
  localStorage.setItem("itemPrice", 0);
  localStorage.setItem("itemList", []);
  displayCart();
  return "Done!"
}

function button(){
  event.cancelBubble = true;
  if(event.stopPropagation) event.stopPropagation();
}

function getUrlVars(){
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

function productPrint(){
  let product = getUrlParam("product", "discoLightShow");
  document.getElementById("imgs").innerHTML = '<img src="../../images/productImgs/' + product + '/pic1.jpg" class="display img">' + '<img src="../../images/productImgs/' + product + '/pic2.jpg" class="display img">' + '<img src="../../images/productImgs/' + product + '/pic3.jpg" class="display img">' + '<img src="../../images/productImgs/' + product + '/pic4.jpg" class="display img">';
  document.getElementById("desc").innerHTML = "<h1>Description Of The " + decriptions[product]["name"] + "</h1><p>" + decriptions[product]["decription"] + "<br>Price: " + decriptions[product]["price"] + "</p>";
  document.getElementById("vide").innerHTML = '<div class="cen"><video autoplay muted loop controls height="400"><source src="../../images/productImgs/' + product + '/vid.mp4" type="video/mp4">Your browser does not support HTML5 video.</video><img src="../../images/productImgs/' + product + '/schematic.jpg" height="400"></div>';
  document.getElementsByTagName("title")[0].innerHTML += decriptions[product]["name"]
}

function changeSheet(num){
  links = document.getElementsByTagName("head")[0].getElementsByTagName("link");
  link = links[links.length-1];
  link.href = "css" + num + ".css";
  for (let i = 1; i <= 4; i++){
    document.getElementById(i).classList.remove("active");
  }
  if (num == ""){
    document.getElementById("4").classList.add("active");
  }
  else {
    document.getElementById(num).classList.add("active");
  }
}

function msieversion() {
    //Credit to SpiderCode on Stack Overflow for this code! Yay
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        window.locaton = "https://tinker-house-new--alextheperson.repl.co/IE.html"
        //alert("IE v" + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) + ". Sorry, this website won't work. Also, WHY ARE YOU USING INTERNET EXPLORER?!?");
    }
    else  // If another browser, return 0
    {
        //alert('Not IE!! Yay!');
    }

    return false;
}
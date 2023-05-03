var wrapperMenu = document.querySelector('.wrapper-menu');
var headerItems = document.querySelector('.header__items');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
  headerItems.classList.toggle('display'); 
})

var amounts = document.getElementById('amounts')
var returns = document.getElementById('returns')

function increment(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('number').value = value;

  amounts.innerHTML = parseInt(amounts.innerHTML) + 20000

  newAmount = (amounts.innerHTML * 0.2) + parseInt(amounts.innerHTML);
  returns.innerHTML = newAmount 
}

function decrement(){
  var value = parseInt(document.getElementById('number').value, 10);

  if(value === 1 ){
    
    return 1
  }else{
    value--
    document.getElementById('number').value = value; 
    amounts.innerHTML = amounts.innerHTML - 20000;
    newAmount = parseInt(amounts.innerHTML) + (amounts.innerHTML * 0.2);
    returns.innerHTML = newAmount 
  }
  
}



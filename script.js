function calculate(){
  let cost = Number(document.querySelector('#cost').value);
  let percent = Number(document.querySelector('#percent').value);
  let tip  = document.querySelector('#tip');
  if(isNaN(cost) || isNaN(percent)){
    tip.value='Invalid Input'
  }
  else{
    tip.value = cost+cost*(percent/100);  
  }
}

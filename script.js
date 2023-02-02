let billAmount= 100
let numberDiners=4
let serviceQuality="Great"

function calculateTip(){
  let tipPercent
  if (serviceQuality === 'Great') {
    tipPercent = 0.2
  }
  else if (serviceQuality === 'Good') {
   tipPercent = 0.15
  }
  else if (serviceQuality === 'Terrible'){
    tipPercent = 0.1
  }
  return tipPercent * billAmount
}
function calculateBill() {
  return calculateTip() + billAmount
}
function divideBill(){
   return calculateTip() /numberDiners
}
console.log('Total Tip: $' + calculateTip())
console.log('Total Bill: $' + calculateBill())
console.log('Each Person Ownes: $' + divideBill())
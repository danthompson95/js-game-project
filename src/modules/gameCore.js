import * as data from './data'
let currentTier = localStorage.getItem('currentTier')

export function progressValues() {
  if (!currentTier) {
    localStorage.setItem('currentTier', 0)
    currentTier = localStorage.getItem('currentTier')
  }
  const currentFood = document.getElementById('foodValue')
  const currentStone = document.getElementById('stoneValue')
  const currentWood = document.getElementById('woodValue')
  const currentWorkers = document.getElementById('workerValue')

  const farmerRate = document.getElementById('farmerRate').innerHTML
  if (farmerRate) {
    let foodCap = data.initialData.tier[currentTier].foodMax
    if (parseFloat(currentFood.innerHTML) < 100) {
      currentFood.innerHTML = (
        parseFloat(currentFood.innerHTML) + parseFloat(farmerRate)
      ).toFixed(2)
    } else {
      currentFood.innerHTML = 100
    }
  }
}

export function updateButtons() {
  const currentFood = document.getElementById('foodValue')
  if (parseFloat(currentFood.innerHTML) < 25) {
    document.getElementById('farmerBuy').setAttribute('disabled', true)
  } else {
    document.getElementById('farmerBuy').removeAttribute('disabled', true)
  }
}

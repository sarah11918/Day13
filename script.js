let dataFile = 'day13.txt'

async function getAllData() {
  let response = await fetch(dataFile)
  let data = await response.text()
  return data
}

function separateLines(data) {
  return data.split("\n")
}


function removeExtra(data){
  let timestamp = data[0]
  let validBusIDs = data[1].split(",")
  let busIDs = validBusIDs.map(bus => [validBusIDs.indexOf(bus), parseInt(bus)])
  let pairs = busIDs.filter(bus => (bus[0] !== 1))  
  return pairs
}

//HERE I HAVE AN ARRAY OF MINUTES/BUS IDS


//NOW I AM LOOKING FOR 
function getSoonestBus(timestamp, busID){
  let soonestBus = (Math.ceil(timestamp / busID))*busID
  let waitTime = soonestBus - timestamp
  let productOfWaitBus = waitTime * busID
  return {waitTime, productOfWaitBus, busID }
}

function checkAllBus(data) {
  let nextBuses = []
  data.busIDs.map(bus => {
    nextBuses.push(getSoonestBus(data.timestamp,bus))
  })
  return nextBuses
 
}


getAllData()
.then(separateLines)
.then(removeExtra)
// .then(results => checkAllBus(results))
.then(result => console.log(result)) 

// let dataFile = 'day13.txt'

// async function getAllData() {
//   let response = await fetch(dataFile)
//   let data = await response.text()
//   return data
// }

// function separateLines(data) {
//   return data.split("\n")
// }


// function removeExtra(data){
//   let timestamp = data[0]
//   let validBusIDs = data[1].split(",").filter(id => id !== "x")
//   let busIDs = validBusIDs.map(id => parseInt(id))
//   return {timestamp, busIDs }
// }

// function getSoonestBus(timestamp, busID){
//   let soonestBus = (Math.ceil(timestamp / busID))*busID
//   let waitTime = soonestBus - timestamp
//   let productOfWaitBus = waitTime * busID
//   return {waitTime, productOfWaitBus, busID }
// }

// function checkAllBus(data) {
//   let nextBuses = []
//   data.busIDs.map(bus => {
//     nextBuses.push(getSoonestBus(data.timestamp,bus))
//   })
//   return nextBuses
 
// }


// getAllData()
// .then(separateLines)
// .then(removeExtra)
// .then(results => checkAllBus(results))
// .then(result => console.log(result)) 
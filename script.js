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
  let pairs = busIDs.filter(bus => (bus[1] > 0))  
  return pairs
}

//HERE I HAVE AN ARRAY OF MINUTES/BUS IDS


//NOW I AM LOOKING FOR smallest timestamp such that (timestamp + pairs[0]) is divisible by pairs[1]

function startChecking(pairs) {
   
   for (let timestamp=100000000000000; timestamp < 100020000000000; timestamp++){

      if (
        (timestamp + pairs[0][0]) % pairs[0][1] == 0 && 
        (timestamp + pairs[1][0]) % pairs[1][1] == 0 &&
        (timestamp + pairs[2][0]) % pairs[2][1] == 0 &&
        (timestamp + pairs[3][0]) % pairs[3][1] == 0 &&
        (timestamp + pairs[4][0]) % pairs[4][1] == 0 &&
        (timestamp + pairs[5][0]) % pairs[5][1] == 0 &&
        (timestamp + pairs[6][0]) % pairs[6][1] == 0 &&
        (timestamp + pairs[7][0]) % pairs[7][1] == 0 &&
        (timestamp + pairs[8][0]) % pairs[8][1] == 0
        
      )
      {
      return timestamp
      }
      
  }

  return 0
}

// timestamp=100000000000000

getAllData()
.then(separateLines)
.then(removeExtra)
.then(startChecking)
// .then(results => checkAllBus(results))
.then(result => console.log(result))

/////////// PART ONE ////////////
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
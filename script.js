let dataFile = 'day13.txt' //-example answer 295

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
  let validBusIDs = data[1].split(",").filter(id => id !== "x")
  let busIDs = validBusIDs.map(id => parseInt(id))
  return {timestamp, busIDs }
}

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


//console.log (getSoonestBus(939, 7) )

getAllData()
.then(separateLines)
.then(removeExtra)
.then(results => checkAllBus(results))
// .then(commands => makeFirstMove([0,0,"E"],commands))
// .then(makeAllTheMoves)
.then(result => console.log(result)) 
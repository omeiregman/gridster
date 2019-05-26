let nextSpotQueue = []
let previousSpotMap = new Map();
let reachedEnd = false;
let shortestPath = new Set()
let unvisitedSpots = new Set()
let numberOfSpots = 0;

const shortestPathFinder = (allSpots, start, end, columnLength) => {
    nextSpotQueue = []
    previousSpotMap = new Map();
    reachedEnd = false;
    shortestPath = new Set()
    unvisitedSpots = new Set()
    numberOfSpots = allSpots.length;

    for (let i = 1; i <= numberOfSpots; i++) {
        if (allSpots[i - 1] == 0) {
            unvisitedSpots.add(i);
        }
    }

    nextSpotQueue.push(start);

    while (nextSpotQueue.length != 0 && reachedEnd == false) {
        checkValidSpotsToVisit(nextSpotQueue.shift(), columnLength, end)
    }

    if (reachedEnd) {
        getPath(start, end);
    }

    return shortestPath;
}

const checkValidSpotsToVisit = (currentSpot, columnLength, end) => {
    const down = ((currentSpot + columnLength) > numberOfSpots) ? -1 : currentSpot + columnLength;
    const right = ((currentSpot % columnLength) == 0) ? -1 : currentSpot + 1;
    const up = (currentSpot <= columnLength) ? -1 : currentSpot - columnLength;
    const left = ((currentSpot % columnLength) == 1) ? -1 : currentSpot - 1;

    pushToQueue(down, currentSpot, end)
    pushToQueue(right, currentSpot, end)
    pushToQueue(up, currentSpot, end)
    pushToQueue(left, currentSpot, end)
}

function pushToQueue(spot, previousSpot, end) {
    if (spot == -1) {
        return;
    }
    if (spot == end) {
        previousSpotMap.set(end, previousSpot)
        reachedEnd = true;
    } else if (unvisitedSpots.has(spot)) {
        previousSpotMap.set(spot, previousSpot)
        nextSpotQueue.push(spot);
        unvisitedSpots.delete(spot);
    }
}

function getPath(start, end) {
    let position = end;
    while (position != start) {
        position = previousSpotMap.get(position);
        shortestPath.add(position - 1);
    }
}


module.exports = shortestPathFinder;
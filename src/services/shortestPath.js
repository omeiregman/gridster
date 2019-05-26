
export const shortestPath = (allSpots, start, end, columnIndex) => {
    let nextSpotQueue = []
    let previousSpotMap = new Map();
    let reachedEnd = false;
    let shortestPath = new Set()
    let unvisitedSpots = new Set()

    shortestPathFinder = (allSpots, start, end, columnLength) => {
        let numberOfSpots = allSpots.length;

        for (let i = 1; i <= numberOfSpots; i++) {
            if (allSpots[i - 1] == 0) {
                unvisitedSpots.add(i);
            }
        }

        nextSpotQueue.push(start);

        //Move Down then Right then Up then Left
        while (nextSpotQueue.size != 0 || reachedEnd == true) {
            checkValidSpotsToVisit(nextSpotQueue.shift())
        }

        if (reachedEnd) {
            getPath(end);
        }

        console.log([...shortestPath]);
        return shortestPath;
    }

    function checkValidSpotsToVisit(currentSpot, columnLength) {
        let down = currentSpot + columnLength;
        let right = currentSpot + 1;
        let up = currentSpot - columnLength;
        let left = currentSpot - 1;

        pushToQueue(down)
        pushToQueue(right)
        pushToQueue(up)
        pushToQueue(left)
    }

    function pushToQueue(spot, previousSpot, end) {
        if (spot == end) {
            previousSpotMap.set(end, previousSpot)
            reachedEnd = true;
        } else if (unvisitedSpots.has(spot)) {
            nextSpotQueue.push(spot);
            unvisitedSpots.delete(spot);
        }
    }

    function getPath() {
        let position = end;
        while (position != start) {
            position = previousSpot.get(position);
            shortestPath.add(position);
        }
    }

}
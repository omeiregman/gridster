
export const shortestPath = (cellMatrix, startIndex, endIndex, columns) => {

    let queue = [startIndex];
    let currentIndex = 0;

    let visited = { startIndex: true };

    let relMap = {};

    while (true) {
        let neighbours = getNeighbours(cellMatrix, queue[currentIndex], columns);

        for (let i = 0; i < neighbours.length; i++) {

            let neighbourIndex = neighbours[i];

            //end found
            if (neighbourIndex == endIndex) {
                relMap[endIndex] = queue[currentIndex];
                queue = [];
                break;
            }

            //blocked path
            if (cellMatrix[neighbourIndex] == 1) {
                continue;
            }

            //check if visited
            if (visited[neighbourIndex]) continue;

            visited[neighbourIndex] = true;

            relMap[neighbourIndex] = queue[currentIndex];


            queue.push(neighbourIndex);
        }

        if (queue.length == 0) {
            break;
        }

        currentIndex++;

        if (currentIndex > queue.length - 1) {
            return {};
        }
    }

    let pathMap = { [endIndex]: relMap[endIndex] };
    let lastEntry = pathMap[endIndex];

    while (true) {
        pathMap[lastEntry] = relMap[lastEntry];
        lastEntry = pathMap[lastEntry];

        if (lastEntry == startIndex) break;
    }

    return pathMap;
}



const getNeighbours = (cellMatrix, index, columns) => {
    let res = [];

    let horzCor = [0, 1, 0, -1];
    let vertCor = [-1, 0, 1, 0];

    let x = index % columns;
    let y = Math.floor(index / columns);
    for (let i = 0; i < 4; i++) {

        const neighbourX = x + horzCor[i];
        const neighbourY = y + vertCor[i];

        if (neighbourX < 0 || neighbourY < 0) continue;
        if (neighbourX > columns - 1 || neighbourY > columns - 1) continue;

        res.push(neighbourY * columns + neighbourX);
    }

    return res;
}
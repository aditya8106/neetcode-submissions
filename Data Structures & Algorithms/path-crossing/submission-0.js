class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        
    let x = 0, y = 0;

    let visited = new Set();
    visited.add(`${x},${y}`);

    for (let dir of path) {
        if (dir === 'N') y++;
        else if (dir === 'S') y--;
        else if (dir === 'E') x++;
        else if (dir === 'W') x--;

        let position = `${x},${y}`;

        if (visited.has(position)) {
            return true;
        }

        visited.add(position);
    }

    return false;

    }
}

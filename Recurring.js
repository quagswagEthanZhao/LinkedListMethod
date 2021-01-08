const nums = [1, 2, 3, 1, 4, 5, 5, 6, 7]; //If fist index is a recurring num then is gonna return 0 index which is falsy number in JS;

const recurring = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined;
} //Performance: O(n^2) space: O(1);

const hashTableSolution = (input) => {
    let map = {};
    for (var i = 0; i < input.length; i++) {
        console.log(map[input[i]]);
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
} //Performance: O(n) space: O(n);

console.log(hashTableSolution(nums));
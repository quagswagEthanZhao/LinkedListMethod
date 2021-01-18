let cunter = 0;

const inception = () => {
    if (cunter > 3) return 'Done!';
    cunter++;
    return inception();
} // Usually have two returns 

// Find Factorial => recursive method

const findFactorialRecursion = (num, resoult = 1) => {
    if (num === 1) {
        return resoult;
    }
    return findFactorialRecursion(num - 1, resoult * num);
}



//Find Factorial => Loop

const findFactorialLoop = (num) => {
    let result = 1;
    for (var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

//Fibonacci
//0,1,1,2,3,5,8,13
const fibonacciRecursice = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursice(n - 1) + fibonacciRecursice(n - 2)
}// O(2^n)

const fibnacciLoop = (n) => {
    if (n < 2) {
        return n;
    }
    let pre = 0;
    let curr = 1;
    for (var i = 2; i <= n; i++) {
        let next = pre + curr;
        pre = curr;
        curr = next;
    }
    return curr;
}

//reverse an array

const num = [1, 2, 3, 4, 5];

const reverseLoop = (arr) => {
    const resoult = [];
    const round = arr.length;
    if (num.length > 0) {
        for (var i = 0; i < round; i++) {
            console.log(resoult + '------');
            resoult.push(arr.pop());
        }
        return resoult;
    }
    return 'Nothing detected';
}

const reverseRecursive = (str) => {
    if (str.length < 1) {
        return '';
    }
    return reverseRecursive(str.substr(1)) + str.charAt(0);
}

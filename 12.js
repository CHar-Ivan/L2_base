function longest(arr, n) {
    let used = [];
    for (let i = 0; i < arr.length; i++) {
        used[i] = false;
    }
    let result = [];

    for (let k = 0; k < n; k++) {
        let maxLen = -1;
        let maxIndex = -1;

        for (let i = 0; i < arr.length; i++) {
            if (!used[i] && arr[i].length > maxLen) {
                maxLen = arr[i].length;
                maxIndex = i;
            }
        }

        used[maxIndex] = true;
        result.push(maxIndex);
    }

    return arr[result[n - 1]];
}
arr = ["Hello", "World", "Codewars", "Katas"]
n = 3
console.log(longest(arr,n));
let arr = [10, 20, -35, 17, 15, -8, 95, 0, -100, 99];

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        let swapped = false; // boolean: for checking if any element was swapped during cycle
        for(let j = 1, swap; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                swap = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = swap;
                swapped = true;
            }
        }
        if(!swapped) {
            console.log(`Array is sorted, break, i = ${i}`);
            break;
        }
    }
    return arr;
}

console.log(`Initial array: ${arr}`);
console.log(`Bubble-sorted array: ${bubbleSort(arr)}`);
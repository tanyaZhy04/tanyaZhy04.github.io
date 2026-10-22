let arr = [10, 20, -35, 17, 15, -8, 75, -8, -100, 99];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let  min = arr[i], minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                minIndex = j;
            }
        }
        arr[minIndex] = arr[i];
        arr[i] = min;
    }
    return arr;
}

console.log(`Initial array: ${arr}`);
console.log(`Selection-sorted array: ${selectionSort(arr)}`);
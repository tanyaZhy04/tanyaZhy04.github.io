let arr = [10, 20, -35, 17, 15, -8, 95, 0, -100, 99];

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i, el = arr[j];
        while(j > 0 && el < arr[j - 1]){
            arr[j] = arr[--j]; 
        }  
        arr[j] = el;      
    }
    return arr;
}

console.log(`Initial array: ${arr}`);
console.log(`Inserion-sorted array: ${insertionSort(arr)}`);
const swap = (list,p1,p2) => {
    let temp = list[p1];
    list[p1] = list[p2];
    list[p2] = temp;
}

const randomArray = (quantity,maxNumber) => {    
    let newList = [];
    for (let value = 0; value < quantity; value++) {
        newList.push(Math.floor(Math.random() * maxNumber));
    }
    return newList;
}

const randomArrayNonRepetitive = (quantity,maxNumber) => {    
    let newList = [];
    for (let value = 0; value < quantity; value++) {
        let newNumber = Math.floor(Math.random() * maxNumber);
        if(!newList.includes(newNumber)){
            newList.push(newNumber);
        }

    }
    return newList;
}


const isSort = (list) => {
    for (let i = 1; i < list.length; i++) {
        if (list[i-1] > list[i]) {
            return false;
        }
    }
    return true;
}


const quickSort = (list, left, right) => {
    let i = left;
    let j = right;

    // let posicionPivote = pivot(left,right,list);
    let posicionPivote = Math.floor(Math.random() * (list.length -1));

    if (posicionPivote >= 0){            
        let pivote = list[posicionPivote]; 
        while (left <= right) {
            while ((list[left] < pivote) && (left < j)) {
                left++; 
            }
            while ((pivote < list[right]) && (right > i)) {
                right--; 
            }

            if (left <= right) {
                swap(list, left, right); 
                left++;
                right--;
            }
        }
        if (i < right)
            quickSort(list, i, right);

        if (left < j)
            quickSort(list, left, j);
                            
    }
    return list;
}


const pivot = ( left,  right, list) => {
    if(list[left] > list[right]){
        return left;
    }else{
        return right;     
    }
}


const bubbleSort = (list) => {
    //Get the list length
    let timeStart = Date.now();
    let n = list.length;
    if(list !== null && n>1){
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++){
                if (list[j] > list[j + 1]){
                    swap(list,j,j+1);
                }
            }
        }
    }
    console.log('Time: ' + (Date.now() - timeStart));
    return list;
}

const insertionSort = (list) => {
    let timeStart = Date.now();
    let n = list.length;
    if (list != null || n>1 ){
        for (let i = 1; i < n; i++) {
            position = i;
            aux = list[i];
            while ((position > 0) && (list[position-1] > aux)){
                list[position] = list[position-1];
                position--;
            }
            list[position] = aux;
        }
    }
    console.log('Time: ' + (Date.now() - timeStart));
    return list;
};


const selectionSort = (list) => {
    let timeStart = Date.now();
    let n = list.length;
    if (list != null || n>1 ){
        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i+1; j < n; j++) {
                if(list[j]< list[min]){
                    min = j;
                }
            }
            swap(list,i,min);
        }
    }
    console.log('Time: ' + (Date.now() - timeStart));
    return list;
}


const randomNumbers = randomArrayNonRepetitive(100,10000);
//Para clonar un array
const insertion = randomNumbers.slice(0);
const selection = randomNumbers.slice(0);
const bubble = randomNumbers.slice(0);
const quick = randomNumbers.slice(0);
let timeInit = 0;


console.log('Insertion Sort');
console.log(insertionSort(insertion));
console.log(isSort(insertion));
console.log();
console.log('Selection Sort');
console.log(selectionSort(selection));
console.log(isSort(selection));
console.log();
console.log('Bubble Sort');
console.log(bubbleSort(bubble));
console.log(isSort(bubble));
console.log();
console.log('Quick Sort');
timeInit =  Date.now();
console.log(quickSort(quick,0,quick.length-1));
console.log('Time: ' + (Date.now() - timeInit));
console.log(isSort(quick));
console.log();
console.log('Sort');
timeInit =  Date.now();
console.log(randomNumbers.slice(0).sort());
console.log('Time: ' + (Date.now() - timeInit));



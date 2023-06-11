// Problem Description Given a matrix of m * n elements (m rows, n columns), 
// return allelements of the matrix in spiral order.
// Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
// You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]



// Here Time complexity would be O(n) and Space complexity would be O(n)

let arr1 =  [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;
let arr2 =  [[ 1, 2, 3, 4], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [13, 14, 15, 16] ] ;


function SpiralPrint(arr){

let topRow = 0;
let leftCol = 0;
let rightCol = arr[0].length-1;
let bottomRow = arr.length-1


while(topRow<=bottomRow && leftCol <=rightCol){

    //print top row from Left-Right
    for(let i = leftCol; i<=rightCol; i++){
        console.log(arr[topRow][i])
    }
    topRow++;

    //print right column from Top ->bottom
    for(let i = topRow;i<=bottomRow;i++){
        console.log(arr[i][rightCol])
    }
    rightCol--;

    //print bottom row from left->Right
    for(let i = rightCol;i>=leftCol;i--){
        console.log(arr[bottomRow][i])
    }
    bottomRow--;

    //print left column from Bottom->Top
    for(let i = bottomRow;i>=topRow; i--){
        console.log(arr[i][leftCol])
    }
    leftCol++;
}
}

SpiralPrint(arr1)
SpiralPrint(arr2)



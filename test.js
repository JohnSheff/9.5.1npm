function newArray(arr, value) {
let newArr=arr
    newArr.push(value)
    return newArr
}

// добавляем новый элемент в массив не похожий на другие
// newArray([1,2,3,4],6)
console.log(newArray([1,2,3,4],6))
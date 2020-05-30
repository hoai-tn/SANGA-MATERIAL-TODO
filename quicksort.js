let a = [23,6,44,22,8,5,11,40,34,18];

const swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const bubbleSort = () => {
  for(let i = 0; i < a.length; i++) {
    for(let j = a.length - 1; j > i; j--) {
      if(a[j] < a[i]) {
        swap(a, i, j);
      }
    }
  }
}
console.log(a);
bubbleSort(a);
console.log(a);


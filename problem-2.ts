{
  function removeDuplicates(arr: number[]): number[] {
    let uniqueNum: number[] = [];
    for (const num of arr) {
      if (uniqueNum.includes(num) === false) {
        uniqueNum.push(num);
      }
    }
    return uniqueNum;
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}

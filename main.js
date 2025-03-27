function deleteNth(arr,n){
  
  const counts = {}; // Object to keep track of occurrences
  const result = []; // Array to store the final list

  arr.forEach(item => {
    // Check current count of the item, default to 0 if not present
    if (counts[item] === undefined) {
      counts[item] = 0;
    }

    // If the count is less than the limit, include the item
    if (counts[item] < n) {
      result.push(item);
      counts[item] += 1;
    }
  });

  return result;
}
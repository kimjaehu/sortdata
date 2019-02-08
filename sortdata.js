

        // Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

        // Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

        // Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

//1. create a module that exports a function
//2. create a function that takes a number as a parameter and stores it in a list
//3. create another function that returns a version of data list that is sorted in a ascending order
//4. implement a node.js script that imports the functionality of your module.

var list = []
//------------------------------------
var dataList =  function(num) {
  list.push(num)
    // return arrNum;
}

var listSort = function(list) {
  console.log(list)
  list.sort(function(a,b){
    return a - b;
  });
  return list;
}

// listSort(result);

// console.log(listSort(result));

module.exports = {
  numberToList: dataList,
  sortNumberList: function() {return listSort(list)}
}
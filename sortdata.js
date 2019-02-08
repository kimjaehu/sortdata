

        // Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

        // Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

        // Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

//1. create a module that exports a function
//2. create a function that takes a number as a parameter and stores it in a list
//3. create another function that returns a version of data list that is sorted in a ascending order
//4. implement a node.js script that imports the functionality of your module.


//------------------------------------
var dataList = function(){

  var arrNum = [];
  return function(num) {
  arrNum.push(num)

    return arrNum;
  }
}
// var numToList = dataList()

// numToList(1);
// numToList(2);
// numToList(3);
// numToList(4);
// console.log(numToList(5));

// var result = numToList(2);

//var arrNum = [2, 5, 6, 3, 8, 6, 7, 8, 9]

var listSort = function(list) {

  list.sort(function(a,b){
    return a - b;
  });
  return list
}

// listSort(result);

// console.log(listSort(result));

module.exports = {
  numberToList: dataList(),
  sortNumberList: listSort()
}

////////App flow

// user presses + button
// modal pops up
// user adds todo details
// take details and store into object
//         also needs to include a key of completed = false
//          also include a counter number i.g. i++
//                  this way, each added item (completed or not) has their own id
// pull data from said object and show it on the list
//         if completed = false put it on the top with li and class of .todo-item
//         if completed = true put it at the bottom with li and class of .todo-completed-item
//         store the id number to a data-variable assigned to the html
//         when an item is completed and removed, take the id number from the data-variable in html
//          and use it to identify which object the task belongs to
//                  use that to identify the object in the array and add it to either ul .todo-completed-items
//                  or ul .todo-items.
//          change boolean accordingly
// with every added item, store into an array which is saved to local storage/memory
// DO SOMETIIME BETWEEN OTHERS ->
//        create the completed button which appears after clicking the elipsis.
// add function to CLEAR button that clears the whole array and updates the whole list accordingly.
// create an initial check to look for data saved in the local storage/memory.

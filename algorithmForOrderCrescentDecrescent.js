(function() {
    /*
     *   Algorithim that organize numbers order crescent and descrecent
     */

    //This is the array that we going to organize
    var list = [0, 2, 1, 5, 4, 3, 6, 35, 20, 7];

    //This variable is for decide be we want in crescent order or descending
    var decision = 1;
    var order = (decision) ? 1 : 0;

    //This function is that organize the our array
    function organized(order, list) {
        if (order === 1) {
            // We go to use a variable for find size of array
            var size = list.length;

            //we need of Two loop that are doing  a compare between the values of the array
            for (var i = 0; i < size; i++) {

                //The value variable valueI will be the value find of the array list in the position provided for variable i of the loop
                var valueI = list[i];

                //The second loop inner going to compare the variable valueI with all values of the array.
                for (var j = i + 1; j < size; j++) {

                    //The value variable valueJ will be the value find of the array list in the position provided for variable j of the loop
                    var valueJ = list[j]

                    //Our conditional going to compare o value of  variable valueI with o value of variable valueJ if the value is less that the of variable valueJ them going to keep yours positions in the  array

                    //remember that we want in crescent order
                    if (valueI < valueJ) {
                        list[i] = valueI;
                        list[j] = valueJ;
                    } else {
                        //if the conditional is false so we changed position the values of the variables between them and the variable valueI get the value of variable valueJ 
                        list[i] = valueJ;
                        list[j] = valueI;
                        valueI = valueJ;
                    }
                }
            }
            console.log(list);
        } else {
            var size = list.length;
            for (var i = 0; i < size; i++) {
                var valueI = list[i];
                for (var j = i + 1; j < size; j++) {
                    var valueJ = list[j]
                        //If we want in decrescent order only we change the operator < for >
                    if (valueI > valueJ) {
                        list[i] = valueI;
                        list[j] = valueJ;
                    } else {
                        list[i] = valueJ;
                        list[j] = valueI;
                        valueI = valueJ;
                    }
                }
            }
            console.log(list);
        }
    }
    organized(order, list);
})();

/**
 * Of course it is possible to do this in several ways and I believe that all languages provide this * * * support so that it does not need to write as much, but the idea is just to understand the algorithm * * and provide a solution using basic programming logic concepts
 * 
 * 
 */
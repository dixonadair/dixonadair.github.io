

var my_array = [4, 34, 1, 23, 990, 23, 2]

for (i=0; i<my_array.length; i++) {
	my_array[i] = my_array[i]*2;
}

console.log(my_array)

// -------------------------------

var my_array = [4, 34, 1, 23, 990, 23, 2]

for (num in my_array) {
	my_array[num] = my_array[num]*2;
}

console.log(my_array)
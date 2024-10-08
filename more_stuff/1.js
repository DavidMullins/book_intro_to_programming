/*
[1, 4, 3]
array[1] = 4 will mutate the original array. Since this mutates, it will not
change the pointer for array1 and so array1 and array will be pointing to the
same object in memory which was just mutated. Therefore they are pointing to
the same value.
*/

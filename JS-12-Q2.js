// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function outerFunc(x,y,operation){
    return operation ( x , y );
}
function multiplication(a,b){
    return a + b;
}
console.log(outerFunc(1,20,multiplication))
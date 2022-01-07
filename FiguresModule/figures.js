/* 
    Square
    Perimeter = side * 4 || Area = side ** 2
*/

function perimeterSquare(sideSquare) {
    return sideSquare * 4;
}

function areaSquare(sideSquare){
    return sideSquare ** 2;
}

console.group("Square measurement");

console.log("The sides of square are: " + sideSquare + " cm.");
console.log("The perimeter of square is: " + perimeterSquare(sideSquare) + " cm.");
console.log("The area of square is: " + areaSquare(sideSquare) + "cm^2.");

console.groupEnd();

/*
    Triangle
    Perimeter = (base * height) / 2 || Area = sideA + sideB + sideC
*/

function trianglePerimeter(sideATriangle,sideBTriangle,baseTriangle) {
    return sideATriangle + sideBTriangle + baseTriangle;
}

function triangleArea(baseTriangle,heightTriangle){
    return (baseTriangle * heightTriangle)/2;
}

console.group("Triangle measurement");

var sideATriangle = 6;
var sideBTriangle = 6;
var baseTriangle = 4;
var heightTriangle = 5.5;

console.log(
    "The sides of triangle are: "
    + sideATriangle 
    + " cms, "
    + sideBTriangle 
    + " cms, " 
    + baseTriangle
    + " cms and height is: "
    + heightTriangle 
    +"cms."
    );
console.log("The triangle Perimeter is: " + trianglePerimeter(sideATriangle,sideBTriangle,baseTriangle) + " cms.");
console.log("The triangle Area is: " + triangleArea(baseTriangle,heightTriangle) + " cms^2.");

console.groupEnd();

/*
    Circle
    Perimeter = Diameter * PI || Area = (Radius**2) * PI || .toFixed(x) method is used to round the operation in x decimals.
*/

function perimeterCircle(radius){
    var diameter = radius * 2;
    return (diameter * PI).toFixed(2); 
}

function areaCircle(radius){
    return ((radius ** 2) * PI).toFixed(2); 
}

console.group("Circle measurement");

const PI = Math.PI;
var radius = 4;

console.log("The circunference of circle is: " + perimeterCircle(radius,PI) + " cms");
console.log("The circle area is: " + areaCircle(radius,PI) + " cms^2");

console.groupEnd();

//HTML interaction

function clickSquarePerimeter(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}
function clickSquareArea(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = areaSquare(value);
    alert(area);

}


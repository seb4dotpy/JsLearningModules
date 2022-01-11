const sideA = 5; const sideB = 15; const sideC = 32;

/*
    Triangle types
    equilateral = Al sides equal
    isosceles = Two sides equal
    scalene = No side equal
*/
<<<<<<< HEAD
function sideComparison(sideA, sideB, sideB){

}
=======
const sides = {
    sideA = 1,
    sideB = 5,
    sideC = 3
};

function sideComparison(sideA, sideB, sideC){
    var Triangle;
    if (sideA == sideB && sideC == sideA) {
        triangle = "equilateral";
        return triangle ;
    } else if ((sideA == sideB && sideA != sideC) || (sideA == sideC & sideA != sideB) || (sideB == sideC && sideB != sideA)){
        triangle = "isosceles";
        return triangle ;
    } else {
        triangle = "scalene";
        return triangle;
    }
}

function findHypotenuse( )
>>>>>>> 09cdf66f746bda1a3665f32f8cb24355958fbb94

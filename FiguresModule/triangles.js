const sideA = 5; const sideB = 15; const sideC = 32;

/*
    Triangle types
    equilateral = Al sides equal
    isosceles = Two sides equal
    scalene = No side equal
*/
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

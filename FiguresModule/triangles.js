/*
    Triangle types
    equilateral = Al sides equal
    isosceles = Two sides equal
    scalene = No side equal
*/

function calculatePerimeter(sideA,sideB,sideC){
    return sideA + sideB + sideC;
}

function sideComparison(sideA, sideB, sideC){
    var triangle;
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

function base(sideA,sideB,sideC){ //Verifying the shortest side

    var base;

    if(sideA == sideB && sideA > sideC || sideA == sideB && sideA < sideC  ){
        base = sideC;
        return base;

    } else if (sideA == sideC && sideA > sideB || sideA == sideC && sideA < sideB){
        base = sideB;
        return base;

    } else {
        base = sideA;
        return base;
    }
}

function calculateHeight(sideA,sideB,sideC){ //Calculate height
    var height;

    if (sideComparison(sideA,sideB,sideC) == "equilateral") { 

        return height = (sideA * Math.sqrt(3))/2; //Pitagoras

    } else if (sideComparison(sideA,sideB,sideC) == "isosceles"){

        if(base(sideA,sideB,sideC) == sideC){

            height = (sideA**2)-((sideC/2)**2);
            return Math.sqrt(height);

        } else if(base(sideA,sideB,sideC) == sideB){

            height = (sideA**2)-((sideB/2)**2);
            return Math.sqrt(height);

        } else {

            height = (sideC**2)-((sideA/2)**2);
            return Math.sqrt(height);
        }
        
       
    } else if (sideComparison(sideA,sideB,sideC) == "scalene"){

        console.log("Is scalene");

        var semiPerimeter = (sideA + sideB + sideC)/2;
        var sidesOperation = (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC);

        if(sidesOperation < 1){
            alert("No es un triangulo valido");
        }
        return height = (2/sideA) * (Math.sqrt(semiPerimeter * sidesOperation));
    }
}

function calculateArea(sideA,sideB,sideC){
    
    if (sideComparison(sideA,sideB,sideC) == "equilateral") {

        return (sideA * calculateHeight(sideA,sideB,sideC))/2;

    } else if(sideComparison(sideA,sideB,sideC) == "isosceles"){

        return (base(sideA,sideB,sideC) *  calculateHeight(sideA,sideB,sideC))/2; 

    } else {

        return calculateHeight(sideA,sideB,sideC);
    }
}










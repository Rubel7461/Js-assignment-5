

// Assigment -01
// Create a function that will return children, teenagers, young people, old people from the age

const ageCal = ( name, age) =>{
    if(age >= 0 && age < 5){
        console.log(` Hello ${name}, you are => Children`);
    }else if (age >= 5 && age < 18){
        console.log(` Hello ${name}, you are => Teenagers`);
    }else if (age >= 18 && age < 30){
        console.log(` Hello ${name}, you are => Young People`);
        
    }else if (age >= 30 && age < 80){
        console.log(` Hello ${name}, you are => Old People`);
        
    }
}



// Assigment -02
// Create a function that will return the area of a rectangle, square, triangle

const areaCal = ( type , length , width ) => {

   let area = '';
   let shape = '';

    switch(type){
        case 'r':
            area = (length * width) ;
            shape = 'rectangle' ;  
            break;
        case 's':
            area = ( length * length ) ;
            shape = 'square' ;  
            break;
        case 't':
            area = .5 * ( length * width ) ;
            shape = 'triangle' ;  
            break;
        
    
        }


        console.log( `The Area of ${shape} is = ${area} `);
}






// Assigment 03
// GPA, CGPA, GRADE function for result publishing

// GPA function

let gpa = marks =>{

    let gpa ;

    if( marks >= 0 && marks < 33 ){
        gpa = 0;
    } else if (marks >= 33 && marks < 40){
        gpa = 1;
    }else if (marks >= 40 && marks < 50){
        gpa = 2;
    }else if (marks >= 50 && marks < 60){
        gpa = 3;
    }else if (marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if (marks >= 70 && marks < 80){
        gpa = 4;
    }else if (marks >= 80 && marks <= 100){
        gpa = 5;
    }
    return gpa;
}

// GPA function

let grade = marks =>{

    let grade ;

    if( marks >= 0 && marks < 33 ){
        grade = 'F';
    } else if (marks >= 33 && marks < 40){
        grade = 'D';
    }else if (marks >= 40 && marks < 50){
        grade = 'C';
    }else if (marks >= 50 && marks < 60){
        grade = 'B';
    }else if (marks >= 60 && marks < 70){
        grade = 'A-';
    }else if (marks >= 70 && marks < 80){
        grade = 'A';
    }else if (marks >= 80 && marks <= 100){
        grade = 'A+';
    }
    return grade;
}





// Assigment 
//===============
// Create an age calculator function

let devsInfo = (name, year, skill, id) => {

    console.log(`
    
Hello I am ${name}. I am ${ 2022 - year } years old. I am  a ${skill}. My Id is ${id}
    
    `);

}



// Assigment 05
//=================
// Create a BMI function for health

let bmiCal = (name, weight, height ) => { 

   let bmi = weight / (height * height )

    if(bmi < 18.5 ){
        console.log(` 
            BMI = ${bmi}
            Hey, ${name} Your Health is Underweight .
        `);
    } else if(bmi < 18.5 && bmi >=  24.9 ){
        console.log(` 
            BMI = ${bmi}
            Hey, ${name} Your Health is Normal weight .
        `);
    } else if(bmi >= 30 ){
        console.log(` 
            BMI = ${bmi}
            Hey, ${name} Your Health is Obesity  .
        `);
    }
   
    return bmi;
}


// Assigment 06
// ===================
//Create a currency converter function from taka to USD, CAD, POUND, EURO etc

let currency = (type, amount )=> {

    let rate;
 
    switch(type){
        case 'USD':
            rate = 86;
             break;
        case 'CAD':
            rate = 68.67;
             break;
        case' POUND':
            rate = 112.37;
             break;
        case 'EURO' :
            rate = 93.88;
             break;
    }
    

    console.log(`
    
    ${amount} ${type} = ${amount * rate} BDT

    `);


}


// GPA, CGPA, GRADE function for result publishing

let name = prompt('Your Name :');
let roll = prompt('Your Rool');

let bn = prompt('Bangla');
let en = prompt('English');
let math = prompt('math');




console.log(`

    student Name : ${name}
    student Rool : ${roll}
   =======================

    SUBJECT         GPA         GRADE
    -------         ----        -------
    Bangla :        ${gpa(bn)}           ${grade(bn)}        
    English :       ${gpa(en)}           ${grade(en)}
    Math :          ${gpa(math)}           ${grade(math)}
    ------------------------------------------

`);


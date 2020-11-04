(function(){
    'use strict';

    class Student{
        constructor(firstName, lastName, age, grade){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const students = [
        new Student('Shira', 'Shiffman', 22, 8),
        new Student('Ilana', 'Gibber', 14, 5),
        new Student('Yitzchak', 'Shiffman', 5, 1),
        new Student('Reuven', 'Shiffman', 24, 11)

    ];

    //order - true for first last, false for last first
    function printStudents(order, ...studentArray){
        
        studentArray.forEach((student)=>{
                
            const {firstName, lastName}= student;
            if(order){
                 console.log(firstName, lastName);
            } 
            else{
                console.log(lastName, firstName);
            }
        });
        
    }
    
    function flipNames(...studentArray){
        let newStudentArray = [];
        studentArray.forEach((student)=>{
            const {firstName, lastName, ...rest}= student;
            newStudentArray.push(new Student(lastName, firstName, rest.age, rest.grade));
        });

        return newStudentArray;
    }

    printStudents(true, ...students);
    printStudents(false, ...students);
    const studentsFlipped = flipNames(...students);
    //console.log(studentsFlipped);
    printStudents(true, ...studentsFlipped);

}());
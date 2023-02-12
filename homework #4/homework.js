fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
.then(response => {
    response.json()
    .then(students => {
       //female students with averge grade 5
       const femaleStudentsWithAverageGrade5 = students.filter(student => student.gender === "Female" && student.averageGrade === 5)
       .map(student => `${student.firstName} ${student.lastName}`);
       console.log(femaleStudentsWithAverageGrade5);

       //All male student full names who live in Skopje and are over 18 years old
       const maleStudentsFromSkopjeOver18 = students.filter(student => student.gender === "Male" && student.age >= 18 && student.city === "Skopje")
       .map(student => `${student.firstName} ${student.lastName}`)
       console.log(maleStudentsFromSkopjeOver18);

       //The average grades of all female students over the age of 24
        const averageGradesOfFemaleStudentsOver24 = students
        .filter(student => student.gender === "Female" && student.age > 24)
        .map(student => student.averageGrade)
        .reduce((sum, grade) => sum += grade, 0);
        console.log(averageGradesOfFemaleStudentsOver24);

        //Sort the students according to Last name (ascending)
        const sortingStudents = students.sort((a, b) => {
            if(a.lastName < b.lastName){return -1}
            if(a.lastName < b.lastName){return 1}
            return 0;
        })
    
        console.log(sortingStudents);
    })
    
}).catch(error => {console.log(error)})


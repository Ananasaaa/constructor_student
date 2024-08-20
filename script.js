function Student(name, surname, birthYear, grades = []) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);

    this.calculateAge = function() {
       const currentYear = new Date().getYear() + 1900;
        return currentYear - this.birthYear;
    };

    this.findAverageGrade = function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length ? sum / this.grades.length : 0;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    this.summary = function() {
        const averageGrade = this.findAverageGrade();
        const attendedClasses = this.attendance.reduce((count, day) => day === true ? count + 1 : count, 0);
        const attendanceRate = attendedClasses / this.attendance.length;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Well done!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Good, but could be better";
        } else {
            return "Naughty!";
        }
    };
}
const student1 = new Student("John", "Smith", 2000, [98, 87, 97]);
const student2 = new Student("Alice", "Klim", 2001, [76, 83, 89]);
const student3 = new Student("Jake", "Lond", 2003, [99, 100, 97]);

student1.present();
student1.present();
student1.absent();
console.log(student1.summary()); 

student2.present();
student2.absent();
student2.absent();
console.log(student2.summary()); 

student3.present();
student3.present();
student3.present();
console.log(student3.summary()); 
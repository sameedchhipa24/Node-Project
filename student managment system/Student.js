import inquirer from 'inquirer';
class Student {
    constructor(name, id, grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
}
class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    listStudents() {
        return this.students;
    }
}
const studentManager = new StudentManager();
// Function to prompt for adding a new student
async function addStudent() {
    let addstudent = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter student name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter student ID:',
        },
        {
            type: 'input',
            name: 'grade',
            message: 'Enter student grade:',
        },
    ])
        .then((answers) => {
        const { name, id, grade } = answers;
        const newStudent = new Student(name, id, grade);
        studentManager.addStudent(newStudent);
        console.log('Student added successfully!');
        mainMenu();
    });
}
// Function to prompt for listing all students
function listStudents() {
    const students = studentManager.listStudents();
    console.table('List of Students:');
    students.forEach((student) => {
        console.table(`Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}`);
    });
    mainMenu();
}
// Function to prompt for finding a student by ID
function findStudent() {
    inquirer
        .prompt({
        type: 'input',
        name: 'id',
        message: 'Enter student ID to find:',
    })
        .then((answer) => {
        const student = studentManager.getStudentById(answer.id);
        if (student) {
            console.log('Student Found:');
            console.log(`Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}`);
        }
        else {
            console.log('Student not found.');
        }
        mainMenu();
    });
}
async function mainMenu() {
    // Main menu for user interaction
    let mainmenu = await inquirer
        .prompt({
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: ['Add Student', 'List Students', 'Find Student', 'Exit'],
    })
        .then((answer) => {
        switch (answer.action) {
            case 'Add Student':
                addStudent();
                break;
            case 'List Students':
                listStudents();
                break;
            case 'Find Student':
                findStudent();
                break;
            case 'Exit':
                console.log('Exiting Student Management System.');
                break;
        }
    });
}
mainMenu();

/**
 * @class StudentController - Controller for students
 */
class StudentController {
    /**
   * @constructor Constructor of StudentController
   */
    constructor() {
        this.fetcher = fetcherObject;
        this.studentsEndpoint = 'students';
    }

    /**
   * List all students
   * @returns {Array} Student
   */
    async all() {
        const data = await this.fetcher.fetch(this.studentsEndpoint);
        const objs = data.map(studentJSON => new Student(studentJSON));

        return objs;
    }

    async byId(studentId) {
        const data = await this.fetcher.fetch(this.studentsEndpoint + '/' + studentId);
        const objs = data.map(studentJSON => new Student(studentJSON));

        return objs;
    }

    async create(student) {
        delete student.props.id; // Just to be safe

        const data = student.props;
        const returnStudent = await this.fetcher.post(this.studentsEndpoint, data);

        return returnStudent;
    }

    /**
   * Filter students by term OR name OR education
   * @param {Object} props - term OR name OR education are optional
   * @returns {Array} Student
   */
    async filterStudents(props) {
        this.props = {
            term: props.term || '',
            name: props.name || '',
            education: props.education || '',
        };

        let filterdStudents = await this.all()
            .filter( student =>  
                ( ( this.props.term==='' || this.props.term === student.term )
               && ( this.props.name==='' || this.props.name === student.name ) 
               && ( this.props.education==='' || this.props.education === student.education ) )
            );

        return filterdStudents;
    }
<<<<<<< HEAD
=======

    /**
   * insert new student
   * @param {Object} student - object Student
   * @returns {Object} Student with NEW id
   */
    async insertStudent(student) {
        student.idStudent = await this.insertStudent(student);
        return student;
        //TODO : check what to do in case of error
    }

// methods come here
>>>>>>> develop
}

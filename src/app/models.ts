export interface Credit {
    L: number; // Lecture hours
    T: number; // Tutorial hours
    P: number; // Practical hours
    C: number; // Total credits
  }
  
  export interface CourseDetail {
    courseCode: string; // Unique code for the course
    courseName: string; // Name of the course
    credits: Credit; // Credit structure
    instructor: string[]; // List of instructors
    slot: string; // Time slot for the course
    prerequisites: string[]; // List of prerequisite courses
    textBooks: string[]; // List of textbooks
    referenceBooks: string[]; // List of reference books
  }
  
  export interface StudentCourse {
	isComplete:boolean
    course: CourseDetail; // Details of the course
    prerequisiteMet: boolean; // Indicates if prerequisites are met
    prerequisiteWaiver: boolean; // Indicates if a prerequisite waiver is granted
  }
  
  export interface StudentInfo {
    program: string; // Program name
    branch: string; // Branch name
    semester: string[]; // List of semesters
    coreCourses: StudentCourse[]; // List of core courses
    electiveCourses: StudentCourse[]; // List of elective courses
  }
  
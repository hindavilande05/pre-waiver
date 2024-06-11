export interface Credit {
    L: number; // Lecture hours
    T: number; // Tutorial hours
    P: number; // Practical hours
    C: number; // Total credits
  }
  

  export interface Course {
    code: string;
    name: string;
    credits: Credit; // Format: "L-T-P-C"
    instructor: [];
    slot: string;
    prerequisites: [];
    textBooks: string[]
    referenceBooks: string[];
  }
  

 export interface StudentProfile {
    rollNo: string;
    name: string;
    program: string;
    branch: string;
    semester: number;
  }

  export interface CourseItem{
    semester: []
	  isCompleted:boolean
    detail: Course; // Details of the course
    isPrerequisiteMet: boolean; // Indicates if prerequisites are met
    isWaiverApplied: boolean; // Indicates if a prerequisite waiver is granted

  }

  export interface StudentCourseInfo extends StudentProfile{
    coreCourses: CourseItem[]; // List of core courses
    electiveCourses: CourseItem[]; // List of elective courses
  }
  

  export interface WaiverRequest {
    rollNo: string;
    course: Course;
    reason: string;
    preReqWaiverRequest: boolean;
  }
  

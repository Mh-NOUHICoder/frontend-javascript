// main file for task 4
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

namespace Subjects {
  // Create and export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Create and export a Teacher object with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: "Mohammed",
    lastName: "NOUHI",
    experienceTeachingC: 10
  };

  // For C++ subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
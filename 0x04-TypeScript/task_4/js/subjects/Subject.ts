/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    protected teacher: Teacher;  // Private attribute

    // Setter method named setTeacher as required
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    
  }
}
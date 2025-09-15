/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    protected _teacher: Teacher;  // Private attribute

    // Setter method named setTeacher as required
    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    
  }
}
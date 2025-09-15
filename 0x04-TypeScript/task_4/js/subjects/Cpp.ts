//Cpp file named Cpp.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
    if (this._teacher && this._teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this._teacher.firstName}`;
    } else {
        return "No available teacher";
    }
    }
  }
}
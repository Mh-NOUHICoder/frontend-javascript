/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging - extend Teacher interface for React
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React class extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const teacher = this._teacher;
      
      if (teacher && teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
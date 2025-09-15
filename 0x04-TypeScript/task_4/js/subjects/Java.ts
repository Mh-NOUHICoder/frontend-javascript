/// <reference  path="Teacher.ts" />
/// <reference  path="Subject.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            const teacher = this.teacher;
            if (teacher && teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return 'No available teachar';
            }
        }
    }
}

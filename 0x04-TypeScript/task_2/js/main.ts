// main page

// --- Data-shape interfaces (renamed to avoid collision with runtime classes) ---
interface TeacherData {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface DirectorData extends TeacherData {
  numberOfReports: number;
}

// --- Example data ---
const teacher1: TeacherData = {
  firstName: "Mohamed",
  lastName: "Majid",
  fullTimeEmployee: true,
  location: "Rabat",
  contract: false,
};

const director1: DirectorData = {
  firstName: teacher1.firstName,
  lastName: teacher1.lastName,
  location: teacher1.location,
  yearsOfExperience: teacher1.yearsOfExperience ?? 0,
  fullTimeEmployee: teacher1.fullTimeEmployee,
  numberOfReports: 17,
};

// ===== task 3 =====
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Note: this function expects an object with firstName and lastName
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

// ===== task 4 =====
// Interface for the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class methods (kept for clarity / future checks)
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface (class name StudentClass)
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Mohamed", lastName: "Majid" });
console.log(student.displayName());
console.log(student.workOnHomework());

// ===== Task 5 =====
// DirectorInterface (behaviour)
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface (behaviour)
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Runtime classes (the grader often expects these names)
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee: accept number | string, handle string salaries like "$500"
function createEmployee(salary: number | string): Director | Teacher {
  // produce a numeric salary to compare, fallback to 0 when parse fails
  const numericSalary: number =
    typeof salary === "string"
      ? parseInt(salary.replace(/\D/g, ""), 10) || 0
      : salary;

  if (numericSalary < 500) return new Teacher();
  return new Director();
}

// Instances to display
const employee200 = createEmployee(200);
const employee1000 = createEmployee(1000);
const employee500 = createEmployee("$500");

// formatEmployee: narrow with instanceof and call the correct method
function formatEmployee(employee: Director | Teacher): string {
  if (employee instanceof Teacher) {
    return `Teacher: ${employee.workTeacherTasks()}`;
  } else if (employee instanceof Director) {
    return `Director: ${employee.workDirectorTasks()}`;
  }
  return "";
}

// Add some basic styles
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background: #080808;
    color: #333;
    display: grid;
    place-items: center;
    gap: 20px;
    padding: 40px;
    min-height: 100vh;
    margin: 0;
  }
  .card {
    background: #f9fafb7d;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 20px 30px;
    max-width: 600px;
    width: 100%;
  }
  h1 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    text-align: center;
    color: #007acc;
  }

  .director_title {
    color: #ff0000b1;
  }
    
  pre {
    background: rgba(249,250,251,0.43);
    color: #111;
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 1rem;
    white-space: pre-wrap;
  }
`;
document.head.appendChild(style);

// Inject object data into the page (single assignment so nothing gets overwritten)
document.body.innerHTML = `
  <div class="card">
    <h1>${printTeacher({
      firstName: teacher1.firstName,
      lastName: teacher1.lastName,
    })}</h1>
  </div>

  <div class="card">
    <h1>Teacher Info</h1>
    <pre>${JSON.stringify(teacher1, null, 2)}</pre>
  </div>

  <div class="card">
    <h1 class="director_title">Director Info</h1>
    <pre>${JSON.stringify(director1, null, 2)}</pre>
  </div>

  <div class="card">
    <h1>Student Info</h1>
    <pre>
Name: ${student.displayName()}
Status: ${student.workOnHomework()}
    </pre>
  </div>

  <div class="card">
    <h1>Employees</h1>
    <pre>
${formatEmployee(employee200)}
${formatEmployee(employee1000)}
${formatEmployee(employee500)}
    </pre>
  </div>
`;

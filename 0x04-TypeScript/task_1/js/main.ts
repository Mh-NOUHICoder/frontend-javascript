// main page 

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}


const teacher1: Teacher = {
    firstName: "Mohamed",  
    lastName: "Majid",
    fullTimeEmployee: true,
    location: "Rabat",
    contract: false
}

const director1: Director = {
    firstName: teacher1.firstName,
    lastName: teacher1.lastName,
    location: teacher1.location,
    yearsOfExperience: teacher1.yearsOfExperience ?? 0,
    fullTimeEmployee: teacher1.fullTimeEmployee,
    numberOfReports: 17
}
//=====task 3 ======
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
    return `${firstName}. ${lastName}`;
}

            //=====task 4 ======
// Interface for the constructor arguments
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the class methods
interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Class implementing the interface
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




// Add some basic styles
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background: #080808;
    color: #333;
    display:grid;
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
    max-width: 400px;
    width: 100%;
  }
  h1 {
    font-size: 1.7rem;
    margin-bottom: 15px;
    text-align: center;
    color: #007acc;
  }

  .director_title {
    color: #ff0000b1;
  }
    
  pre {
    background: #f9fafb6e;
    color: #fff;
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 1.3rem;
  }
`;
document.head.appendChild(style);

// Inject object data into the page
document.body.innerHTML = `
  <h1>${printTeacher({ firstName: teacher1.firstName, lastName: teacher1.lastName })}</h1>
  <div class="card">
    <h1>Teacher Info</h1>
    <pre>${JSON.stringify(teacher1, null, 2)}</pre>
  </div>
  <div class="card">
    <h1 class="director_title">Director Info</h1>
    <pre>${JSON.stringify(director1, null, 2)}</pre>
  </div>
`;
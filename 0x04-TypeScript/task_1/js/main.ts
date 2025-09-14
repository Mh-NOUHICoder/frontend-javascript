// main page 

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}


const teacher1: Teacher = {
    firstName: "Mohamed",  
    lastName: "Majid",
    fullTimeEmployee: true,
    location: "Rabat",
    contract: false
}

const director1: Directors = {
    firstName: 'Said',
    lastName: 'Chraibi',
    fullTimeEmployee: true,
    location: 'Casablanca',
    numberOfReports: 17
}

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

  .direcotr_title {
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
  <div class="card">
    <h1>Teacher Info</h1>
    <pre>${JSON.stringify(teacher1, null, 2)}</pre>
  </div>
  <div class="card">
    <h1 class="direcotr_title">Director Info</h1>
    <pre>${JSON.stringify(director1, null, 2)}</pre>
  </div>
`;
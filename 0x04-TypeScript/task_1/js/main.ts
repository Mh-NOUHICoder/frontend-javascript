// main page 

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Mohamed",  
    lastName: "Majid",
    fullTimeEmployee: true,
    location: "Rabat",
    contract: false
}

// Add some basic styles
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background: #080808;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;
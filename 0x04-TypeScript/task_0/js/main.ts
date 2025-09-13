interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'Paris' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'London' };
const student3: Student = { firstName: 'Alice', lastName: 'Brown', age: 21, location: 'Berlin' };

const studentsList: Student[] = [student1, student2, student3];

function renderTable(students: Student[]) {
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '50%';
  table.style.marginTop = '20px';

  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>First Name</th><th>Location</th></tr>';
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  students.forEach(s => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = s.firstName;
    nameCell.style.border = '1px solid black';
    nameCell.style.padding = '5px';

    const locCell = document.createElement('td');
    locCell.textContent = s.location;
    locCell.style.border = '1px solid black';
    locCell.style.padding = '5px';

    row.appendChild(nameCell);
    row.appendChild(locCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '20px';
  document.body.style.backgroundColor = '#f5f5f5';
  document.body.style.textAlign = 'center';

}

// Ensure DOM is loaded before rendering
window.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});

// Create array of 10 student objects
const arrStudents = [
    { firstName: "John", lastName: "Smith", email: "john@email.com", grade: "A" },
    { firstName: "Emma", lastName: "Brown", email: "emma@email.com", grade: "B" },
    { firstName: "Liam", lastName: "Jones", email: "liam@email.com", grade: "A" },
    { firstName: "Olivia", lastName: "Taylor", email: "olivia@email.com", grade: "C" },
    { firstName: "Noah", lastName: "Wilson", email: "noah@email.com", grade: "B" },
    { firstName: "Ava", lastName: "Moore", email: "ava@email.com", grade: "A" },
    { firstName: "James", lastName: "Martin", email: "james@email.com", grade: "B" },
    { firstName: "Sophia", lastName: "Lee", email: "sophia@email.com", grade: "A" },
    { firstName: "William", lastName: "Clark", email: "william@email.com", grade: "C" },
    { firstName: "Isabella", lastName: "Hall", email: "isabella@email.com", grade: "B" }
];

// Select table body
const tableBody = document.querySelector("#studentsTable tbody");

// Use forEach loop to output table rows
arrStudents.forEach(function(student) {
    tableBody.innerHTML += `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.grade}</td>
        </tr>
    `;
});

const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return btoa(String.fromCharCode(hash & 0xFF));
};

const signupForm = document.getElementById('signupForm');
const tableBody = document.getElementById('tableBody');
const message = document.getElementById('message');
const emptyRow = document.getElementById('emptyRow');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const hashedPassword = simpleHash(password);

    // Validation
    const usernameRegex = /^[a-z][a-z0-9]*$/;
    const emailRegex = /@srmist\.edu\.in$/;

    if (!usernameRegex.test(username)) {
        message.className = 'alert';
        message.textContent = 'Username must start with a lowercase letter and contain only letters and numbers.';
        return;
    }
    if (!emailRegex.test(email)) {
        message.className = 'alert';
        message.textContent = 'Email must end with @srmist.edu.in.';
        return;
    }
    if (password.length < 6) {
        message.className = 'alert';
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Hide "No information to display"
    emptyRow.style.display = "none";

    // Create new row
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${hashedPassword}</td>
        <td><button class="red" onclick="deleteRow(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);

    signupForm.reset();
    message.className = 'success';
    message.innerText = "User added successfully!";
});

// Function to delete row & check if table is empty
function deleteRow(button) {
    button.closest('tr').remove();

    const hasUsers = [...tableBody.querySelectorAll("tr")].some(
        row => row.id !== "emptyRow"
    );

    if (!hasUsers) {
        emptyRow.style.display = "table-row";
    }
}

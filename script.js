// STUDENT REGISTRATION
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const student = {
            name: document.getElementById("studentName").value.trim(),
            id: document.getElementById("studentId").value.trim(),
            email: document.getElementById("studentEmail").value.trim(),
            room: document.getElementById("room").value.trim(),
            password: document.getElementById("studentPassword").value
        };

        let students = JSON.parse(localStorage.getItem("students")) || [];

        const exists = students.some(s => s.id === student.id);

        if (exists) {
            document.getElementById("registrationMessage").textContent =
                "Student ID already registered!";
            return;
        }

        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        document.getElementById("registrationMessage").textContent =
            "Registration successful! You can now login.";

        registrationForm.reset();
    });
}


// STUDENT LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const id = document.getElementById("studentId").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        let students = JSON.parse(localStorage.getItem("students")) || [];

        const student = students.find(s =>
            s.id === id &&
            s.email === email &&
            s.password === password
        );

        if (student) {
            document.getElementById("loginMessage").textContent =
                "Login successful! Welcome " + student.name;

            // Demo only: move to your student dashboard when available.
        } else {
            document.getElementById("loginMessage").textContent =
                "Invalid Student ID, Email or Password.";
        }
    });
}

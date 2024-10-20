// Initial user and company data
let users = [];
let companies = [];
let loggedInUser = null;

// Show screens based on login
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let newUser = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        role: document.getElementById("role").value,
    };
    users.push(newUser);
    alert("User registered successfully");
    switchScreen("loginScreen");
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    loggedInUser = users.find(user => user.username === username && user.password === password);
    
    if (loggedInUser) {
        alert("Login successful");
        if (loggedInUser.role === "IT_ADMIN") {
            switchScreen("adminScreen");
            // loadCompanyList();
        } else {
            alert("Normal user view can be implemented similarly!");
        }
    } else {
        alert("Invalid credentials");
    }
});

// Admin functionality to approve companies
// function loadCompanyList() {
//     const companyTableBody = document.getElementById("companyTableBody");
//     companyTableBody.innerHTML = ""; // Clear current list
//     companies.forEach((company, index) => {
//         let row = `<tr>
//             <td>${index + 1}</td>
//             <td>${company.name}</td>
//             <td>${company.createdBy}</td>
//             <td>${company.address}</td>
//             <td>
//                 <button class="edit" onclick="editCompany(${index})">Edit</button>
//                 <button class="delete" onclick="deleteCompany(${index})">Delete</button>
//                 ${company.status === 'unapproved' ? `<button class="approve" onclick="approveCompany(${index})">Approve</button>` : ''}
//             </td>
//         </tr>`;
//         companyTableBody.insertAdjacentHTML("beforeend", row);
//     });
// }

// function editCompany(index) {
//     let company = companies[index];
//     document.getElementById("companyFormTitle").textContent = "Edit Company";
//     document.getElementById("companyName").value = company.name;
//     document.getElementById("companyAddress").value = company.address;
//     document.getElementById("createdBy").value = company.createdBy;
//     switchScreen("createEditCompanyScreen");
// }

// function deleteCompany(index) {
//     companies.splice(index, 1);
//     loadCompanyList();
// }

// function approveCompany(index) {
//     companies[index].status = 'approved';
//     loadCompanyList();
// }

// Helper functions
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
}


switchScreen("registerScreen");

const editButton=document.getElementById("editButton");
const createEditCompanyScreen=document.getElementById("createEditCompanyScreen");

editButton.addEventListener("click",function(){
    createEditCompanyScreen.style.display="block";
});

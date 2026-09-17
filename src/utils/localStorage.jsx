const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using HTML, CSS and JavaScript.",
        taskDate: "2026-09-18",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription: "Fix the navbar layout issues on tablet and mobile devices.",
        taskDate: "2026-09-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing functionality and update the profile UI.",
        taskDate: "2026-09-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix Payment Button",
        taskDescription: "Resolve the issue where the payment button was not working correctly.",
        taskDate: "2026-09-12",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Create Dashboard Cards",
        taskDescription: "Design reusable dashboard cards for employee statistics.",
        taskDate: "2026-09-20",
        category: "UI Design"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Build Employee Dashboard",
        taskDescription: "Develop the main employee dashboard with task statistics.",
        taskDate: "2026-09-18",
        category: "React"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Create Task Cards",
        taskDescription: "Create reusable task cards to display employee tasks.",
        taskDate: "2026-09-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Test Login Form",
        taskDescription: "Test the login form with valid and invalid credentials.",
        taskDate: "2026-09-14",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix Form Validation",
        taskDescription: "Fix validation errors in the employee registration form.",
        taskDate: "2026-09-13",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Add a search feature to find employees quickly.",
        taskDate: "2026-09-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the project documentation with the latest features.",
        taskDate: "2026-09-16",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Create Product Page",
        taskDescription: "Develop a responsive product details page.",
        taskDate: "2026-09-18",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Add Product Filter",
        taskDescription: "Implement category and price filters for products.",
        taskDate: "2026-09-20",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Optimize website images to improve page loading speed.",
        taskDate: "2026-09-15",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Fix overlapping elements on smaller mobile screens.",
        taskDate: "2026-09-11",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Design and implement a responsive website footer.",
        taskDate: "2026-09-22",
        category: "UI Design"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Implement API Integration",
        taskDescription: "Connect the frontend application with the backend API.",
        taskDate: "2026-09-18",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Fetch Employee Data",
        taskDescription: "Fetch and display employee information from the API.",
        taskDate: "2026-09-19",
        category: "API"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Database Testing",
        taskDescription: "Test database queries and verify employee records.",
        taskDate: "2026-09-14",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Resolve the 500 error returned by the employee API.",
        taskDate: "2026-09-12",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Create Employee API",
        taskDescription: "Create an API endpoint for retrieving employee information.",
        taskDate: "2026-09-23",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "API Documentation",
        taskDescription: "Document all employee API endpoints and their responses.",
        taskDate: "2026-09-24",
        category: "Documentation"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Design Admin Panel",
        taskDescription: "Create the UI layout for the admin management panel.",
        taskDate: "2026-09-18",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Create Employee Table",
        taskDescription: "Build a responsive table to display employee information.",
        taskDate: "2026-09-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Add Delete Function",
        taskDescription: "Add a delete button for removing employee records.",
        taskDate: "2026-09-15",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix Dashboard UI",
        taskDescription: "Fix alignment and spacing issues on the admin dashboard.",
        taskDate: "2026-09-13",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Add Employee Search",
        taskDescription: "Implement search functionality in the employee table.",
        taskDate: "2026-09-21",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription: "Create a page for viewing employee task reports.",
        taskDate: "2026-09-22",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Test Admin Panel",
        taskDescription: "Perform functional testing of the admin panel.",
        taskDate: "2026-09-16",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)
}
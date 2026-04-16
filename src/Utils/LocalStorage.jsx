
// localStorage.clear();


const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-04-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-04-08",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate login API",
        taskDate: "2026-04-07",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create admin dashboard UI",
        taskDate: "2026-04-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add test cases for auth module",
        taskDate: "2026-04-09",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-04-06",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Charts",
        taskDescription: "Integrate charts in dashboard",
        taskDate: "2026-04-13",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Initialize MongoDB schema",
        taskDate: "2026-04-11",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy on Vercel",
        taskDate: "2026-04-05",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Auth",
        taskDescription: "Implement JWT authentication",
        taskDate: "2026-04-14",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Revamp",
        taskDescription: "Improve landing page UI",
        taskDate: "2026-04-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer",
        taskDescription: "Correct footer alignment",
        taskDate: "2026-04-09",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Animation Bug",
        taskDescription: "Fix animation lag",
        taskDate: "2026-04-08",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark mode toggle",
        taskDate: "2026-04-15",
        category: "Feature"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API",
        taskDescription: "Develop REST APIs",
        taskDate: "2026-04-12",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review team code",
        taskDate: "2026-04-10",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Logging System",
        taskDescription: "Implement logging",
        taskDate: "2026-04-14",
        category: "Backend"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];



export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    
    return {employees,admin};
      
} 

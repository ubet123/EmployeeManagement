const employees = [
  {
    "id": 1,
    "name": "Ethan Carter",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": 
    [
    
      {
        "active": 3,
        "newTask": 5,
        "completed": 2,
        "failed": 1,
        "title": "Create Landing Page",
        "description": "Design and develop the landing page for the new product.",
        "date": "2024-12-15",
        "category": "Design"
      }
    ]
  },
  {
    "id": 2,
    "name": "Sophia Bennett",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": 
    [
      {
        "active": 7,
        "newTask": 2,
        "completed": 9,
        "failed": 4,
        "title": "Test API",
        "description": "Perform integration testing on the payment gateway API.",
        "date": "2024-12-16",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "name": "Liam Mitchell",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": 
    [
      {
        "active": 6,
        "newTask": 3,
        "completed": 8,
        "failed": 0,
        "title": "Write Documentation",
        "description": "Complete the developer documentation for the backend services.",
        "date": "2024-12-14",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "name": "Olivia Harper",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": 
    [
      {
        "active": 5,
        "newTask": 1,
        "completed": 4,
        "failed": 3,
        "title": "Fix UI Bugs",
        "description": "Resolve critical UI bugs on the dashboard page.",
        "date": "2024-12-13",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "name": "Noah Richardson",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": 
    [
      {
        "active": 2,
        "newTask": 6,
        "completed": 7,
        "failed": 5,
        "title": "Schedule Social Media Posts",
        "description": "Plan and schedule posts for the week on all social media platforms.",
        "date": "2024-12-12",
        "category": "Marketing"
      }
    ]
  }
];

  
  const admin = [
    {
      "id": 1,
      "name":"Ava Brooks",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  

   export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))

}

   export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))

return {employees,admin}

   }
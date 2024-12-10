
![Computer Banner](https://github.com/user-attachments/assets/96b0ca14-ec20-4d64-8686-d8de5c4e59ef)

<h1 align=center> IT Project Management Web Application  </h1>

A **full-stack solution** for managing IT projects, designed to address core functionalities required for efficient project and task management. This project was built in response to detailed requirements for role-based management and task tracking, with a focus on scalable, secure, and user-friendly design.

---

## 🛠️ Technologies  

1. **Backend**:  
   - **ASP.NET Core Web API**: Provides robust, scalable RESTful services.  
   - **Entity Framework Core**: Simplifies data operations with **MSSQL Server**.  

2. **Frontend**:  
   - **React**: A dynamic, component-based JavaScript library.  
   - **React-Bootstrap**: Ensures responsive, professional UI.  

3. **Database**:  
   - **MSSQL Server**: Centralized database for secure and efficient data storage.

---

## 🎯 Project Features  

### General Overview  
This application provides role-specific functionalities for **Administrators**, **Project Managers**, **Systems Analysts**, and **Web Developers** to manage projects effectively.

### Key Functionalities  

#### Administrator  
- Manage system users:  
  - Add, update, or delete users (Project Managers, Systems Analysts, Web Developers).  
- Role-based Authentication and Authorization for secure user access.  

#### Project Manager  
- Authentication: Login/Logout.  
- Project and Task Management:  
  - **CRUD Operations**: Create, Read, Update, Delete projects and tasks.  
  - Assign tasks to Systems Analysts and Web Developers.  
- View team members:  
  - Search by name.  
  - Filter by job title.  
- Track Task Status:  
  - Statuses include "To Start," "In Progress," and "Complete."  
  - Track assigned completion times and actual completion times.  

#### Systems Analysts & Web Developers  
- Authentication: Login/Logout.  
- View tasks assigned by the Project Manager.  
- Update task statuses via dropdown menu:  
  - Transition statuses from "To Start" → "In Progress" → "Complete."  

---

## 📋 How It Works  

### Role-Based Authentication  
The application ensures that user roles define the extent of system access and available actions. Administrators, Project Managers, and team members have specific views and permissions.  

### Task Lifecycle  
Tasks are fully managed by Project Managers and tracked from assignment to completion. Developers and analysts provide updates to reflect progress and facilitate monitoring.  

---

## 📦 Deployment  

This project can be deployed locally or hosted on a server. Ensure the following are configured:  
1. **Connection Strings**: Update `appsettings.json` with your MSSQL Server details.  
2. **Frontend**: Run the React app using `npm start`.  
3. **Backend**: Deploy ASP.NET Core APIs via Visual Studio or CLI.  

---

## 🤝 Contribution  

Contributions are welcome to improve or extend the project. However, please note:  
- Redistribution of code without prior permission is prohibited.  
- Submit pull requests with a detailed explanation of changes.  

---

## 📬 Contact  

For further information, suggestions, or collaboration inquiries, feel free to reach out via **[My Email](mailto:tinomhedziso21@gmail.com)**.  

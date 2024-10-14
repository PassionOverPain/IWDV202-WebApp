using IT_ProjectManagementApp.Controllers.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IT_ProjectManagementApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ITWebAppController : ControllerBase
    {
        private readonly AppDBContext appContext;
        public ITWebAppController(AppDBContext appContext)
        {
            this.appContext = appContext;
        }

        // ----------------------------------------------------Employees API-----------------------------------------------------------------------------------------------------------//

        [HttpGet]
        [Route("GetEmployees")]
        public List<Employee> GetEmployees()
        {
            return appContext.Employees.ToList();
        }
        [HttpPost]
        [Route("AddEmployees")]
        public string AddEmployee(Employee employees)
        {
            string response = string.Empty;
            appContext.Employees.Add(employees);
            appContext.SaveChanges();
            return "Employee successfully added";
        }
        [HttpGet]
        [Route ("GetEmployee")]
        public Employee GetEmployee(int id)
        {
            return appContext.Employees.Where(x => x.EmployeeId == id).FirstOrDefault();
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public string UpdateEmployee(Employee employees)
        {
            appContext.Entry(employees).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            appContext.SaveChanges();
            return "Employee successfully updated.";
        }
        [HttpDelete]
        [Route("DeleteEmployee")]
        public string DeleteEmployee(int id)
        {
            Employee employees = appContext.Employees.Where(x => x.EmployeeId == id).FirstOrDefault();
            if(employees != null)
            {
                appContext.Employees.Remove(employees);
                appContext.SaveChanges();
                return "Employee successfully removed";
            }
            else
            {
                return "Employee not found.";
            }
           
        }
        // ---------------------------------------------------------------------Project API-----------------------------------------------------------------------------------------------------------//


        [HttpGet]
        [Route("GetProjects")]
        public List<Project> GetProjects()
        {
            return appContext.Projects.ToList();
        }
        [HttpPost]
        [Route("AddProject")]
        public string AddProject(Project project)
        {
            string response = string.Empty;
            appContext.Projects.Add(project);
            appContext.SaveChanges();
            return "Project successfully added";
        }
        [HttpGet]
        [Route("GetProject")]
        public Project GetProject(int id)
        {
            return appContext.Projects.Where(x => x.ProjectId == id).FirstOrDefault();
        }
        [HttpPut]
        [Route("UpdateProject")]
        public string UpdateProject(Project project)
        {
            appContext.Entry(project).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            appContext.SaveChanges();
            return "Project successfully updated.";
        }
        [HttpDelete]
        [Route("DeleteProject")]
        public string DeleteProject(int id)
        {
            Project project = appContext.Projects.Where(x => x.ProjectId == id).FirstOrDefault();
            if (project != null)
            {
                appContext.Projects.Remove(project);
                appContext.SaveChanges();
                return "Project successfully removed";
            }
            else
            {
                return "Project not found.";
            }

        }

        // ---------------------------------------------------------------------Task API--------------------------------------------------------------------------------------------------------------//

        [HttpGet]
        [Route("GetTasks")]
        public List<AppTask> GetTasks()
        {
            return appContext.Tasks.ToList();
        }
        [HttpPost]
        [Route("AddTask")]
        public string AddTask(AppTask task)
        {
            string response = string.Empty;
            appContext.Tasks.Add(task);
            appContext.SaveChanges();
            return "Task successfully added";
        }
        [HttpGet]
        [Route("GetTask")]
        public AppTask GetTask(int id)
        {
            return appContext.Tasks.Where(x => x.TaskId == id).FirstOrDefault();
        }
        [HttpPut]
        [Route("UpdateTask")]
        public string UpdateTask(AppTask task)
        {
            appContext.Entry(task).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            appContext.SaveChanges();
            return "Task successfully updated.";
        }
        [HttpDelete]
        [Route("DeleteTask")]
        public string DeleteTask(int id)
        {
            AppTask task = appContext.Tasks.Where(x => x.TaskId == id).FirstOrDefault();
            if (task != null)
            {
                appContext.Tasks.Remove(task);
                appContext.SaveChanges();
                return "Task successfully removed";
            }
            else
            {
                return "Task not found.";
            }

        }
    }
}

using Microsoft.EntityFrameworkCore;

namespace IT_ProjectManagementApp.Controllers.Models
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {

        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer();

        //}

        public DbSet<Employees> Employees { get; set; }
        public DbSet<Projects> Projects { get; set; }
        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<EmployeesProjects> EmployeesProjects { get; set; }
    }

}

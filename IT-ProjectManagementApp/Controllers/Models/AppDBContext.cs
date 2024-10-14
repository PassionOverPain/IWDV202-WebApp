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

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<AppTask> Tasks { get; set; }

        //Added this from YT video 🤣

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


            builder.Entity<AppTask>().HasOne(x => x.Project).WithMany(u => u.Tasks).HasForeignKey(x => x.ProjectId).IsRequired();
            builder.Entity<Employee>().HasMany(x => x.Projects).WithMany(u => u.Employees).UsingEntity(j => j.ToTable("EmployeeProject"));
            // A Task belongs to a Project
            // A Project can have many tasks but a task belongs to Only one Project

        }
    }

}

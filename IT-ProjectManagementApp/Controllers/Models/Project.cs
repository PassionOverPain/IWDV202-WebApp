using Microsoft.EntityFrameworkCore.Metadata.Internal;

using System.ComponentModel.DataAnnotations;

namespace IT_ProjectManagementApp.Controllers.Models

{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }

        [Required]
        [StringLength(50)]
        public string ProjectName { get; set; }
        [Required]
        [StringLength(50)]
        public string ProjectStatus { get; set; }

        [Required]
        [StringLength(50)]
        public string ProjectDesc { get; set; }

        public ICollection<AppTask> Tasks { get; set; }

        public ICollection<Employee> Employees { get; set; }
    }
}

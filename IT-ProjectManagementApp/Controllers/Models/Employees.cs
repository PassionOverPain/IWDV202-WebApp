using Microsoft.EntityFrameworkCore.Metadata.Internal;

using System.ComponentModel.DataAnnotations;
namespace IT_ProjectManagementApp.Controllers.Models
{
    public class Employees
    {
        [Key]
        public int  EmployeeId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Surname { get; set; }

        [Required]
        [StringLength(50)]
        public string Job-Title { get; set; }
    }
}

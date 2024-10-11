using System.ComponentModel.DataAnnotations;

namespace IT_ProjectManagementApp.Controllers.Models
{
    public class Tasks
    {
        [Key]
        public int TaskId { get; set; }

        [Required]
        [StringLength(50)]
        public string TaskName { get; set; }
        [Required]
        [StringLength(50)]
        public string TaskDesc { get; set; }

        [Required]
        [StringLength(50)]
        public string TaskStatus { get; set; }

        [Required]
        [StringLength(50)]
        public string AssignedTOC { get; set; }

        [Required]
        [StringLength(50)]
        public string ActualTOC { get; set; }
    }
}

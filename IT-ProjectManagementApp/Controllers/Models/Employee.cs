﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;

using System.ComponentModel.DataAnnotations;
namespace IT_ProjectManagementApp.Controllers.Models
{
    public class Employee
    {
        [Key]
        public int  EmployeeId { get; set; }

        [Required]
        [StringLength(50)]
        public string EmployeeName { get; set; }

        [Required]
        [StringLength(50)]
        public string EmployeeSurname { get; set; }

        [Required]
        [StringLength(50)]
        public string JobTitle { get; set; }

        public ICollection<Project> Projects { get; set; }
    }
}
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IT_ProjectManagementApp.Migrations
{
    public partial class IdNameRollback : Migration

    {   //I Reverted back to the orignal database layout with ID being EmployeesID,TaskID etc
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tasks",
                newName: "TaskId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Projects",
                newName: "ProjectsId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Employees",
                newName: "EmployeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TaskId",
                table: "Tasks",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProjectsId",
                table: "Projects",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "Employees",
                newName: "Id");
        }
    }
}

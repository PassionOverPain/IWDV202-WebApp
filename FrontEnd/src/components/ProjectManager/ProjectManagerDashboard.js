// import React, { useState, useEffect } from "react";
// import { Button, Table, Modal, Form } from "react-bootstrap";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const ProjectManagerDashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [showProjectModal, setShowProjectModal] = useState(false);
//   const [showTaskModal, setShowTaskModal] = useState(false);
//   const [editProject, setEditProject] = useState(null);
//   const [editTask, setEditTask] = useState(null);
//   const [newProject, setNewProject] = useState({
//     projectName: "",
//     projectDesc: "",
//     projectStatus: "To Start", // Default status
//     startDate: "", // Added field
//     endDate: "", // Added field
//   });
//   const [newTask, setNewTask] = useState({
//     taskName: "",
//     taskDesc: "",
//     taskStatus: "To Start", // Default status
//     projectId: null,
//     assignedToEmployeeId: null, // Assuming this will be set later
//     assignedTime: "", // Added field
//     completedTime: "", // Added field
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProjects();
//     fetchTasks();
//   }, []);

//   // Fetch projects from the API
//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5220/api/projectmanager/get-projects"
//       );
//       setProjects(response.data);
//     } catch (error) {
//       console.error(error);
//       toast.error("Error fetching projects");
//     }
//   };

//   // Fetch tasks from the API
//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5220/api/projectmanager/get-tasks"
//       );
//       setTasks(response.data);
//     } catch (error) {
//       console.error(error);
//       toast.error("Error fetching tasks");
//     }
//   };

//   // Handle Add or Edit Project
//   const handleSaveProject = async () => {
//     try {
//       if (editProject) {
//         // Update Project
//         await axios.put(
//           `http://localhost:5220/api/projectmanager/update-projects/${editProject.projectId}`,
//           {
//             projectName: newProject.projectName,
//             projectDesc: newProject.projectDesc,
//             projectStatus: newProject.projectStatus,
//             startDate: newProject.startDate, // Send the new field
//             endDate: newProject.endDate, // Send the new field
//           }
//         );
//         toast.success("Project updated successfully!");
//       } else {
//         // Add Project
//         await axios.post(
//           "http://localhost:5220/api/projectmanager/create-project",
//           newProject
//         );
//         toast.success("Project added successfully!");
//       }
//       fetchProjects();
//       handleCloseProjectModal();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error saving project");
//     }
//   };

//   // Handle Add or Edit Task
//   const handleSaveTask = async () => {
//     try {
//       if (editTask) {
//         // Update Task
//         await axios.put(
//           `http://localhost:5220/api/projectmanager/update-task/${editTask.taskId}`,
//           {
//             taskName: newTask.taskName,
//             taskDesc: newTask.taskDesc,
//             taskStatus: newTask.taskStatus,
//             projectId: newTask.projectId,
//             assignedToEmployeeId: newTask.assignedToEmployeeId,
//             assignedTime: newTask.assignedTime, // Send the new field
//             completedTime: newTask.completedTime, // Send the new field
//           }
//         );
//         toast.success("Task updated successfully!");
//       } else {
//         // Add Task
//         await axios.post(
//           "http://localhost:5220/api/projectmanager/create-task",
//           newTask
//         );
//         toast.success("Task added successfully!");
//       }
//       fetchTasks();
//       handleCloseTaskModal();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error saving task");
//     }
//   };

//   // Delete project
//   const handleDeleteProject = async (id) => {
//     try {
//       await axios.delete(
//         `http://localhost:5220/api/projectmanager/delete-project/${id}`
//       );
//       toast.success("Project deleted successfully!");
//       fetchProjects();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error deleting project");
//     }
//   };

//   // Delete task
//   const handleDeleteTask = async (id) => {
//     try {
//       await axios.delete(
//         `http://localhost:5220/api/projectmanager/delete-task/${id}`
//       );
//       toast.success("Task deleted successfully!");
//       fetchTasks();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error deleting task");
//     }
//   };

//   // Open modal for editing project
//   const handleEditProject = (project) => {
//     setEditProject(project);
//     setNewProject({
//       projectName: project.projectName,
//       projectDesc: project.projectDesc,
//       projectStatus: project.projectStatus,
//       startDate: project.startDate || "", // Added field
//       endDate: project.endDate || "", // Added field
//     });
//     setShowProjectModal(true);
//   };

//   // Open modal for editing task
//   const handleEditTask = (task) => {
//     setEditTask(task);
//     setNewTask({
//       taskName: task.taskName,
//       taskDesc: task.taskDesc,
//       taskStatus: task.taskStatus,
//       projectId: task.projectId,
//       assignedToEmployeeId: task.assignedToEmployeeId,
//       assignedTime: task.assignedTime || "", // Added field
//       completedTime: task.completedTime || "", // Added field
//     });
//     setShowTaskModal(true);
//   };

//   // Handle close modal for projects
//   const handleCloseProjectModal = () => {
//     setEditProject(null);
//     setNewProject({
//       projectName: "",
//       projectDesc: "",
//       projectStatus: "To Start",
//       startDate: "", // Reset new field
//       endDate: "", // Reset new field
//     });
//     setShowProjectModal(false);
//   };

//   // Handle close modal for tasks
//   const handleCloseTaskModal = () => {
//     setEditTask(null);
//     setNewTask({
//       taskName: "",
//       taskDesc: "",
//       taskStatus: "To Start",
//       projectId: null,
//       assignedToEmployeeId: null,
//       assignedTime: "", // Reset new field
//       completedTime: "", // Reset new field
//     });
//     setShowTaskModal(false);
//   };

//   // Logout function
//   const handleLogout = () => {
//     navigate("/"); // Redirect to login page
//     toast.success("Logged out successfully");
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Project Manager Dashboard</h2>
//       <Button variant="danger" className="mb-3" onClick={handleLogout}>
//         Logout
//       </Button>

//       {/* Add Project */}
//       <Button
//         variant="primary"
//         className="mb-3"
//         onClick={() => setShowProjectModal(true)}
//       >
//         Add New Project
//       </Button>

//       {/* Project Table */}
//       <h3>Projects</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Project Name</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Start Date</th> {/* Added field */}
//             <th>End Date</th> {/* Added field */}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project, index) => (
//             <tr key={project.projectId}>
//               <td>{index + 1}</td>
//               <td>{project.projectName}</td>
//               <td>{project.projectDesc}</td>
//               <td>{project.projectStatus}</td>
//               <td>
//                 {project.startDate
//                   ? new Date(project.startDate).toLocaleDateString()
//                   : "N/A"}
//               </td>{" "}
//               {/* Added field */}
//               <td>
//                 {project.endDate
//                   ? new Date(project.endDate).toLocaleDateString()
//                   : "N/A"}
//               </td>{" "}
//               {/* Added field */}
//               <td>
//                 <Button
//                   variant="warning"
//                   className="me-2"
//                   onClick={() => handleEditProject(project)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleDeleteProject(project.projectId)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Task Table */}
//       <h3>Tasks</h3>
//       <Button
//         variant="primary"
//         className="mb-3"
//         onClick={() => setShowTaskModal(true)}
//       >
//         Add New Task
//       </Button>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Assigned Time</th> {/* Added field */}
//             <th>Completed Time</th> {/* Added field */}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={task.taskId}>
//               <td>{index + 1}</td>
//               <td>{task.taskName}</td>
//               <td>{task.taskDesc}</td>
//               <td>{task.taskStatus}</td>
//               <td>
//                 {task.assignedTime
//                   ? new Date(task.assignedTime).toLocaleDateString()
//                   : "N/A"}
//               </td>{" "}
//               {/* Added field */}
//               <td>
//                 {task.completedTime
//                   ? new Date(task.completedTime).toLocaleDateString()
//                   : "N/A"}
//               </td>{" "}
//               {/* Added field */}
//               <td>
//                 <Button
//                   variant="warning"
//                   className="me-2"
//                   onClick={() => handleEditTask(task)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleDeleteTask(task.taskId)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Project Modal */}
//       <Modal show={showProjectModal} onHide={handleCloseProjectModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editProject ? "Edit Project" : "Add Project"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Project Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newProject.projectName}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, projectName: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={newProject.projectDesc}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, projectDesc: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={newProject.projectStatus}
//                 onChange={(e) =>
//                   setNewProject({
//                     ...newProject,
//                     projectStatus: e.target.value,
//                   })
//                 }
//               >
//                 <option>To Start</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Start Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={newProject.startDate}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, startDate: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>End Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={newProject.endDate}
//                 onChange={(e) =>
//                   setNewProject({ ...newProject, endDate: e.target.value })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseProjectModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveProject}>
//             Save Project
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Task Modal */}
//       <Modal show={showTaskModal} onHide={handleCloseTaskModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editTask ? "Edit Task" : "Add Task"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Task Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newTask.taskName}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, taskName: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={newTask.taskDesc}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, taskDesc: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={newTask.taskStatus}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, taskStatus: e.target.value })
//                 }
//               >
//                 <option>To Start</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Assigned To (Employee ID)</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newTask.assignedToEmployeeId}
//                 onChange={(e) =>
//                   setNewTask({
//                     ...newTask,
//                     assignedToEmployeeId: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Assigned Time</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 value={newTask.assignedTime}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, assignedTime: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Completed Time</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 value={newTask.completedTime}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, completedTime: e.target.value })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseTaskModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveTask}>
//             Save Task
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectManagerDashboard;
// src/components/ProjectManagerDashboard.js
import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProjectManagerDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [newProject, setNewProject] = useState({
    projectName: "",
    projectDesc: "",
    projectStatus: "To Start", // Default status
    startDate: "", // Added field
    endDate: "", // Added field
  });
  const [newTask, setNewTask] = useState({
    taskName: "",
    taskDesc: "",
    taskStatus: "To Start", // Default status
    projectId: null,
    assignedToEmployeeId: null, // Assuming this will be set later
    assignedTime: "", // Added field
    completedTime: "", // Added field
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  // Fetch projects from the API
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5220/api/projectmanager/get-projects"
      );
      setProjects(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching projects");
    }
  };

  // Fetch tasks from the API
  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5220/api/projectmanager/get-tasks"
      );
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching tasks");
    }
  };

  // Handle Add or Edit Project
  const handleSaveProject = async () => {
    try {
      if (editProject) {
        // Update Project
        await axios.put(
          `http://localhost:5220/api/projectmanager/update-project/${editProject.projectId}`,
          newProject
        );
        toast.success("Project updated successfully!");
      } else {
        // Add Project
        await axios.post(
          "http://localhost:5220/api/projectmanager/create-project",
          newProject
        );
        toast.success("Project added successfully!");
      }
      fetchProjects();
      handleCloseProjectModal();
    } catch (error) {
      console.error(error);
      toast.error("Error saving project");
    }
  };

  // Handle Add or Edit Task
  const handleSaveTask = async () => {
    try {
      if (editTask) {
        // Update Task
        await axios.put(
          `http://localhost:5220/api/projectmanager/update-task/${editTask.taskId}`,
          {
            taskName: newTask.taskName,
            taskDesc: newTask.taskDesc,
            taskStatus: newTask.taskStatus,
            projectId: newTask.projectId,
            assignedToEmployeeId: newTask.assignedToEmployeeId,
            assignedTime: newTask.assignedTime, // Send the new field
            completedTime: newTask.completedTime, // Send the new field
          }
        );
        toast.success("Task updated successfully!");
      } else {
        // Add Task
        await axios.post(
          "http://localhost:5220/api/projectmanager/create-task",
          newTask
        );
        toast.success("Task added successfully!");
      }
      fetchTasks();
      handleCloseTaskModal();
    } catch (error) {
      console.error(error);
      toast.error("Error saving task");
    }
  };

  // Delete project
  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5220/api/projectmanager/delete-project/${id}`
      );
      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error(error);
      toast.error("Error deleting project");
    }
  };

  // Delete task
  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5220/api/projectmanager/delete-task/${id}`
      );
      toast.success("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Error deleting task");
    }
  };

  // Open modal for editing project
  const handleEditProject = (project) => {
    setEditProject(project);
    setNewProject({
      projectName: project.projectName,
      projectDesc: project.projectDesc,
      projectStatus: project.projectStatus,
      startDate: project.startDate || "", // Added field
      endDate: project.endDate || "", // Added field
    });
    setShowProjectModal(true);
  };

  // Open modal for editing task
  const handleEditTask = (task) => {
    setEditTask(task);
    setNewTask({
      taskName: task.taskName,
      taskDesc: task.taskDesc,
      taskStatus: task.taskStatus,
      projectId: task.projectId,
      assignedToEmployeeId: task.assignedToEmployeeId,
      assignedTime: task.assignedTime || "", // Added field
      completedTime: task.completedTime || "", // Added field
    });
    setShowTaskModal(true);
  };

  // Handle close modal for projects
  const handleCloseProjectModal = () => {
    setEditProject(null);
    setNewProject({
      projectName: "",
      projectDesc: "",
      projectStatus: "To Start",
      startDate: "", // Reset new field
      endDate: "", // Reset new field
    });
    setShowProjectModal(false);
  };

  // Handle close modal for tasks
  const handleCloseTaskModal = () => {
    setEditTask(null);
    setNewTask({
      taskName: "",
      taskDesc: "",
      taskStatus: "To Start",
      projectId: null,
      assignedToEmployeeId: null,
      assignedTime: "", // Reset new field
      completedTime: "", // Reset new field
    });
    setShowTaskModal(false);
  };

  // Logout function
  const handleLogout = () => {
    navigate("/"); // Redirect to login page
    toast.success("Logged out successfully");
  };

  return (
    <div className="container mt-5">
      <h2>Project Manager Dashboard</h2>
      <Button variant="danger" className="mb-3" onClick={handleLogout}>
        Logout
      </Button>

      {/* Add Project */}
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => setShowProjectModal(true)}
      >
        Add New Project
      </Button>

      {/* Project Table */}
      <h3>Projects</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Start Date</th> {/* Added field */}
            <th>End Date</th> {/* Added field */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.projectId}>
              <td>{index + 1}</td>
              <td>{project.projectName}</td>
              <td>{project.projectDesc}</td>
              <td>{project.projectStatus}</td>
              <td>
                {project.startDate
                  ? new Date(project.startDate).toLocaleDateString()
                  : "N/A"}
              </td>{" "}
              {/* Added field */}
              <td>
                {project.endDate
                  ? new Date(project.endDate).toLocaleDateString()
                  : "N/A"}
              </td>{" "}
              {/* Added field */}
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEditProject(project)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProject(project.projectId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Task Table */}
      <h3>Tasks</h3>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => setShowTaskModal(true)}
      >
        Add New Task
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assigned Time</th> {/* Added field */}
            <th>Completed Time</th> {/* Added field */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.taskId}>
              <td>{index + 1}</td>
              <td>{task.taskName}</td>
              <td>{task.taskDesc}</td>
              <td>{task.taskStatus}</td>
              <td>
                {task.assignedTime
                  ? new Date(task.assignedTime).toLocaleDateString()
                  : "N/A"}
              </td>{" "}
              {/* Added field */}
              <td>
                {task.completedTime
                  ? new Date(task.completedTime).toLocaleDateString()
                  : "N/A"}
              </td>{" "}
              {/* Added field */}
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEditTask(task)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteTask(task.taskId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Project Modal */}
      <Modal show={showProjectModal} onHide={handleCloseProjectModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editProject ? "Edit Project" : "Add Project"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                value={newProject.projectName}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newProject.projectDesc}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectDesc: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={newProject.projectStatus}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    projectStatus: e.target.value,
                  })
                }
              >
                <option>To Start</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={newProject.startDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, startDate: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={newProject.endDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, endDate: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProjectModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveProject}>
            Save Project
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Task Modal */}
      <Modal show={showTaskModal} onHide={handleCloseTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editTask ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                value={newTask.taskName}
                onChange={(e) =>
                  setNewTask({ ...newTask, taskName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newTask.taskDesc}
                onChange={(e) =>
                  setNewTask({ ...newTask, taskDesc: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={newTask.taskStatus}
                onChange={(e) =>
                  setNewTask({ ...newTask, taskStatus: e.target.value })
                }
              >
                <option>To Start</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Assigned To (Employee ID)</Form.Label>
              <Form.Control
                type="text"
                value={newTask.assignedToEmployeeId}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    assignedToEmployeeId: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Assigned Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newTask.assignedTime}
                onChange={(e) =>
                  setNewTask({ ...newTask, assignedTime: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Completed Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newTask.completedTime}
                onChange={(e) =>
                  setNewTask({ ...newTask, completedTime: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTaskModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            Save Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectManagerDashboard;

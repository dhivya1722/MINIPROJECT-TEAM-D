// import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/Projecttable.css';

interface Project {
  project_id: string;
  project_name: string;
  start_date: string;
  end_date: string;
  team_leader: string;
  emp_id: string;
  status: string;
}

export default function BasicAccordion() {
  // const [projectData, setProjectData] = useState<Project[]>([]);

  

  return (


    
    <div className="accordion-container"  >
      <Accordion className="Project" >
        <div className='header'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  className="expand-icon"  />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion-title">Project Allocation</Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails >
          <Typography>
          <div className="accordion-body">
            <table className="project-table">
              <thead>
                <tr>
                  <th>Project_Id</th>
                  <th>Project Name</th>
                  <th>Start_Date</th>
                  <th>End_Date</th>
                  <th>Team_Leader</th>
                  <th>Emp_Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {projectData.map((project) => (
                  <tr key={project.project_id} className="row-highlight">
                    <td>{project.project_id}</td>
                    <td>{project.project_name}</td>
                    <td>{project.start_date}</td>
                    <td>{project.end_date}</td>
                    <td>{project.team_leader}</td>
                    <td>{project.emp_id}</td>
                    <td>{project.status}</td>
                  </tr>
                ))} */}
                <td>sdweds</td>
                <td>esfwcsfr</td>
                <td>srfv</td>
                <td>srfve</td>
                <td>sdrvsvd</td>
                <td>sdf</td>
                <td>sdsdf</td>
              </tbody>
            </table>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

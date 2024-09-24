import React from "react";
import styles from "./ProjectStyle.module.css";
import resQ from "../../assets/ResQ.svg";
import toDo from "../../assets/To-Do List.svg";
import ceer from "../../assets/Code Reengineering.svg";
import allergyDiary from "../../assets/AllergyDiary.svg";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section
      id="projects"
      className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={resQ}
          link="https://github.com/ChristoperChend/ResQ"
          h3="ResQ"
          p="emergency application"
        />
        <ProjectCard
          src={allergyDiary}
          link="https://github.com/ChristoperChend/allergy-diary"
          h3="Allergy Diary"
          p="health application"
        />
        <ProjectCard
          src={toDo}
          link="https://github.com/ChristoperChend/ChristoperChend-GDSCUI-WebDev-ChristoperChendra.github.io"
          h3="YourList"
          p="To-Do List website"
        />
        <ProjectCard
          src={ceer}
          link="https://github.com/ChristoperChend/Code-Reengineering"
          h3="Code Reengineering"
          p="explanation website"
        />
      </div>
    </section>
  );
}

export default Project;

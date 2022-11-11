import React from 'react'
import { 
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#007BFF">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#444452", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NLP Engineer - Botco.ai
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Arizona, US (Remote from Mexico)
          </h4>
          <ul>
            <li>
              Developed clustering microservice with Python and Scikit-Learn to help automate the training of chatbots,
  reducing maintenance cost.
            </li>
            <li>
              Developed NLP microservice in Python to automatically generate a trained chatbot that is able to answer business
questions from source documents, reducing the effort to create the chatbot to just a few clicks.
            </li>
            <li>
              Packaged and deployed several python microservices into docker containers that can be scaled up/down in
production environments.
            </li>
            <li>
              Created Torchserve API server that exposes PyTorch trained models used by the other developed systems, allowing
easier maintenance.
            </li>
            <li>
              Developed Python scripts for prepossessing of large amounts of data for later use in finetuning of deep neural
networks
            </li>
            <li>
              Defined and created MLOps pipeline with MLflow server for experiment tracking and DVC for data versioning
control.
            </li>
            <li>
              Fine-tuned and evaluated large language models for reading comprehension tasks.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#444452", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CIMAT (Mathematics Research Centre), Guanajuato, Mexico
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master of Science
          </h4>

          <p> Computer Science and Industrial Mathematics </p>

          <ul>
            <li>
              Main author of paper: <a href='https://aclanthology.org/2021.maiworkshop-1.1/'>Multimodal Weighted Fusion of Transformers for Movie Genre Classification</a> presented at NAACL 2021 MAI (Multimodal AI) workshop. With code available <a href='https://github.com/IsaacRodgz/multimodal-transformers-movies'>here</a>.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2018 - July 2019"
          iconStyle={{ background: "#444452", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Big Data Developer - BBVA Next Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mexico City, Mexico
          </h4>
          <ul>
            <li>
              Executed Spark jobs with Scala to ingest and process data from local file system to HDFS in order to make information available to Data Scientists for future analytics and building of predictive models.
            </li>
            <li>
              Validated data quality of migrated information in avro/parquet format with Spark in Python/Scala and Jupyter notebooks.
            </li>
            <li>
              Collaborated with business teams to define and create data dictionaries of database tables using Teradata SQL and python.
            </li>
            <li>
              Organized weekly algorithm problem solving workshop.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#444452", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UNAM, Mexico City, Mexico
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Engineering
          </h4>
          <p> Computer Engineering </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi!</h2>

            <div className='prompt'>
                <p>I'm <span id="name">Isaac Rodríguez</span>, a Machine Learning / Software Engineer.
                I'm currently focused on building AI systems for conversational agents through the implementation of NLP technologies.
                </p>
                <Link href="https://github.com/IsaacRodgz">
                  <GitHubIcon/>
                </Link>
                <Link href='https://www.linkedin.com/in/isaacrodgz/'>
                  <LinkedInIcon />
                </Link>
            </div>
        </div>

        <div className="background">
          <h1> Background</h1>
          <div className="background-text"><p>I'm currently a <span>ML Engineer with a focus on NLP at Botco.ai</span>. I work on the whole pipeline of several AI projects.
            Some of my responsibilities include: Data collection / labeling / preprocessing, model finetuning and model deployment,
            development of APIs and microservices and keeping up with state of the art research for implementation. I love being in the intersection
            of Data Engineering, Data Science and Software Development where data is at the core. <br></br> <br></br>

            I am a <span>Computer Engineer with a MSc in Computer Science</span> where I learned all the foundations about machine learning and NLP.
            During my master I had the opportunity to publish a <a target="_blank" href="https://aclanthology.org/2021.maiworkshop-1.1/"><span>research paper</span></a> on multimodal AI at the <span>NAACL 2021 Conference</span> . <br></br> <br></br>

            On my free time I love collaborating on open source communities and AI for good organizations. I'm currently
            working with <span>Omdena Mexico Chapter</span>, where I've had the opportunity to work on a project related to identifying Fake News
            on the web by developing a Google Chrome extension. I'm also an active collaborator in the Spanish HuggingFace community called <span>Somos NLP</span>.
          </p></div>
        </div>

        <div className="skills-section">
          <h1> Skills</h1>
          <div className="skills">
          <div className="skills-block">
              <h2> Languages</h2>
              <ol className="list">
                <li className="item">Python</li>
                <li className="item">Javascript</li>
                <li className="item">SQL</li>
                <li className="item">Scala</li>
                <li className="item">Java</li>
                <li className="item">C</li>
                <li className="item">C++</li>
              </ol>
            </div>
            <div className="skills-block">
              <h2> Machine Learning</h2>
              <ol className="list">
                <li className="item">PyTorch</li>
                <li className="item">HuggingFace</li>
                <li className="item">Pandas</li>
                <li className="item">Numpy</li>
                <li className="item">Spark</li>
                <li className="item">Scikit Learn</li>
                <li className="item">NLTK</li>
                <li className="item">Spacy</li>
                <li className="item">Tensorflow</li>
              </ol>
            </div>
            <div className="skills-block">
              <h2> MLOps</h2>
              <ol className="list">
                <li className="item">Torchserve</li>
                <li className="item">MLflow</li>
                <li className="item">DVC</li>
                <li className="item">ONNX</li>
                <li className="item">W&B</li>
              </ol>
            </div>
            <div className="skills-block">
              <h2>Back End</h2>
              <ol className="list">
                <li className="item">FastAPI</li>
                <li className="item">Flask</li>
                <li className="item">Docker</li>
                <li className="item">MySQL</li>
                <li className="item">Mongo DB</li>
                <li className="item">AWS S3</li>
                <li className="item">AWS SQS</li>
                <li className="item">Appsmith apps</li>
              </ol>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
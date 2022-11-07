import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, my name is Isaac</h2>

            <div className='prompt'>
                <p>I'm a Machine Learning / Software Engineer</p>
                <Link href="https://github.com/IsaacRodgz">
                  <GitHubIcon/>
                </Link>
                <Link href='https://www.linkedin.com/in/isaacrodgz/'>
                  <LinkedInIcon />
                </Link>
            </div>
        </div>
        <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Machine Learning Frameworks/libraries</h2>
            <span>
                PyTorch, PyTorch Lightning, Keras, Tensorflow, HuggingFace, Scikit Learn, Numpy,
                Pandas, NLTK, Spacy, Jupyter Notebooks
            </span>
          </li>
          <li className="item">
            <h2> MLOps</h2>
            <span>
                TorchServe, MLFlow, ONNX, DVC, Weights & Biases
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
                Flask, FastAPI, Docker, MySQL, MongoDB, AWS S3, AWS SQS, Appsmith
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Java, C, C++, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
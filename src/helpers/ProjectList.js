import Proj1 from "../assets/mult-gmu-v3.png";
import Proj2 from "../assets/web-extension.png";

export const ProjectList = [
  {
    name: "Multimodal Transformer with GMU Fusion",
    description: `This project was the result of my master thesis. I proposed a novel architecture based on the Transformer architecture.
    This model is capable of fusing information from multiple modalities, including: text, images, video, audio and tabular data. With this model
    I achieved state of the art results in the task of multimodal movie genre classification. This project was accepted as a research paper at the
    NAACL conference of 2021 in the MAI (Multimodal AI) Workshop.`,
    image: Proj1,
    skills: "NLP, PyTorch, Python, HuggingFace",
    url: "https://github.com/IsaacRodgz/multimodal-transformers-movies",
  },
  {
    name: "Fake News Validator",
    description: `In this project I developed a Google Chrome extension both for the frontend and the backend side. This plugin was the result
    of a project in Omdena Mexico challenge organization where the objective was to create a product that could guide users to decide if a
    news article is fake or not. The extension consists of the user interface (the chrome extension itself), a backend API written with FastAPI and deveral
    Document DBs used by the backend API.`,
    image: Proj2,
    skills: "Python, FastAPI, Javascript, HTML, CSS",
    url: "https://github.com/OmdenaAI/latam-chapters-news-validator/tree/main/src/tasks/task-3-plugin",
  }
];
import React from "react";

const Projects = (props) => {
  // Get the image URL from the manager (parent)
  const { imageSrc } = props;

  return (
    <div className="card" style={{ width: "15rem;", margin: "20px", borderRadius: "40px;" }}>
      <img
        src={imageSrc}
        className="card-img-top"
        alt="website's homepage preview"
      />
      <div className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text"> {props.text}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Github Link
        </a>
        <a
          href={props.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Deployed Website
        </a>
      </div>
    </div>
  );
};

export default Projects;

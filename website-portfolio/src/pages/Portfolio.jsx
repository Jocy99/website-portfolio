import React from "react";
// projects are the child component
import Projects from "../components/Projects";

// portfolio is the parent component
const Portfolio = () => {
  // define then decide which img will appear based on the image source URL
  const bookSearchImg = "https://i.imgur.com/W3nc3OD.png";
  const codeQuizImg = "https://i.imgur.com/m4WZ98V.png";
  const coolDiceImg = "https://i.imgur.com/8PZlyLe.png";
  const hamonyHubImg = "https://i.imgur.com/4lF4FBq.png";
  const PasswordGeneratorImg = "https://i.imgur.com/XCMCL5g.png";
  const dailyPlannerImg = "https://i.imgur.com/DogWY42.png";

  return (
    <div className="projectContainer">
      <h2>Portfolio </h2>
      <br></br>
      <br></br>
      <p>
        Over the last six months in the full-stack web development bootcamp,
        I've had the opportunity to immerse myself in a variety of challenging
        and rewarding projects that have significantly enriched my skill set.
        First and foremost, I tackled a dynamic portfolio website that showcased
        my proficiency in HTML, CSS, and JavaScript, emphasizing responsive
        design. Building a weather application utilizing APIs and integrating it
        with a user-friendly interface allowed me to deepen my understanding of
        asynchronous JavaScript and data manipulation. In the realm of back-end
        development, crafting a RESTful API with Node.js and Express for a task
        management system honed my server-side skills. Further, implementing
        user authentication and authorization in a secure manner became a
        pivotal aspect in a social media application where users could create,
        edit, and delete posts. Lastly, delving into database design and
        management, I created a robust e-commerce platform with features such as
        product listing, shopping cart functionality, and order processing.
        These projects collectively represent my journey from front-end design
        to back-end logic, providing me with a comprehensive foundation as a
        full-stack web developer
      </p>
      <br></br>
      <br></br>
      <Projects
        imageSrc={bookSearchImg}
        title="Book Search Engine"
        subtitle="MERN Stack"
        text="This project is a fully functioning book search engine that leverages the Google Books API. Originally built as a RESTful API using the MERN stack (MongoDB, Express.js, React, and Node.js), it has been refactored to utilize GraphQL with Apollo Server for enhanced performance and flexibility."
        url="https://github.com/Jocy99/book-search-engine"
        websiteUrl="https://mysupercoolbooksearchengine-2766b913b12f.herokuapp.com/"
      />
      <Projects
        imageSrc={dailyPlannerImg}
        title="Daily Planner"
        subtitle="HTML, CSS, JavaScript"
        text="The Daily Planner Website is a tool designed to help employees manage their time more efficiently. It provides a user-friendly interface for creating and organizing important tasks, making it easier to plan and prioritize work."
        url="https://github.com/Jocy99/DailyPlanner"
        websiteUrl="https://jocy99.github.io/DailyPlanner/"
      />
      <Projects
        imageSrc={hamonyHubImg}
        title="Harmony Hub"
        subtitle="HTML, CSS, Node, Express, & MySql"
        text="Try out the top 10 Songs & Playlist Creator website. This web application allows users to explore and listen to the top 10 rated songs in different countries and allows users to create their own playlists by registering an account."
        url="https://github.com/Jocy99/Harmony-Hub"
        websiteUrl="https://salty-reaches-51385-c76877b9c210.herokuapp.com/"
      />
      <Projects
        imageSrc={codeQuizImg}
        title="Coding Quiz"
        subtitle="HTML, CSS, & Javacrsipt"
        text="Code Quiz is designed to test your coding knowledge. It features a timer that deducts ten seconds from the allotted time every time you select an incorrect choice. At the end of the quiz, you have the option to insert your initials to submit your high scores."
        url="https://github.com/Jocy99/CodingQuiz"
        websiteUrl="https://jocy99.github.io/CodingQuiz/"
      />
      <Projects
        imageSrc={PasswordGeneratorImg}
        title="Password Generator"
        subtitle="HTML, CSS, & Javascript"
        text="This is a simple website that generates strong and secure passwords based on the users preferences. It aims to provide users with a convinient and reliable tool for creating passwords that are difficult to guess and highly secure."
        url="https://github.com/Jocy99/PasswordGenerator/blob/main/README.md"
        websiteUrl="https://jocy99.github.io/PasswordGenerator/"
      />
      <Projects
        imageSrc={coolDiceImg}
        title="Cool Dice"
        subtitle="MERN Stack"
        text="This is a web-based dice game application that allows users to log in and compete with the computer to roll two dice, aiming to achieve the highest possible rolled number. The game keeps track of user wins and losses, saving this information in a MongoDB database. This README provides information on how to set up, run, and use the application."
        url="https://github.com/Jocy99/cool-dice-game"
        websiteUrl="https://cool-dice-game-9c029df8dfbf.herokuapp.com/"
      />
    </div>
  );
};

export default Portfolio;
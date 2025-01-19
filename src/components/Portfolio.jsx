import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "pracflow",
      title: "pracflow.ai",
      value: "internship",
      icon: "job",
      description: "i",
      images: [
        "/assets/image copy 56.png",
        "/assets/image copy 57.png",
        "/assets/image copy 58.png",
        "/assets/image copy 59.png",
        "/assets/image copy 60.png"
      ],
      links: {
        pracflow: "https://pracflow.ai/",
        mentor: "https://www.linkedin.com/in/sourabh-goyal-22601734/"
      },
    },
    
    {
      id: "amfoss",
      title: "amFOSS Amrita",
      value: "club member",
      icon: "job",
      description: "amfoss",
      images: [
        "/assets/image copy 61.png",
        "/assets/image copy 62.png",
        "/assets/image copy 65.png",
        "/assets/image copy 64.png",
        "/assets/image copy 63.png"
      ],
      links: {
        amfoss: "https://amfoss.in/",
        mentor: "https://www.linkedin.com/in/vipin-pavithran/",
        amfoss_tasks: "https://github.com/Aadarshprajapati777/amfoss-tasks"
      },
    },
    {
      id: "agromaster",
      title: "Agromaster",
      value: "For Farmers and Researchers",
      icon: "trophy",
      description: "agromaster",
      images: [
        "/assets/image copy 22.png",
        "/assets/image copy 21.png",
        "/assets/image copy 23.png",
        "/assets/image copy 24.png",
        "/assets/image copy 25.png",
        "/assets/image copy 26.png",
        "/assets/image copy 27.png",
        "/assets/image copy 28.png",
        "/assets/image copy 29.png",
        "/assets/image copy 30.png",
        "/assets/image copy 31.png",
      ],
      links: {
        project: "https://docs.google.com/presentation/d/1LR85gy5eMOjArn5Rqwgc_yOwytM6OGxO/edit",
        live: "https://frontend-onh3.vercel.app/presentation",
        presentation: "https://youtube.com/shorts/EGvvKXFa5WY?si=vTbbY5e3VPSBy7vG",
        award: "https://youtube.com/shorts/zTr1WfEYA0Q?si=kMm4zFTJYHsz5L-I",
        video: "https://youtu.be/rhhvM_IEV70?si=CI0tmPSadtEQOtDn",
        about: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/divide_by_4/?tab=details",
        github: "https://github.com/Aadarshprajapati777/AgroMaster/blob/main/backend/server.js",
      },
    },
    {
      id: "Web3exchange",
      title: "Exchange Platform",
      value: "An exchange platform that allows users to buy and sell cryptocurrencies",
      icon: "money",
      description: "exchange",
      images: [
        "/assets/image copy 32.png",
        "/assets/image copy 33.png",
      ],
      links: {
        github: "https://github.com/Aadarshprajapati777/Exchange-Platform",
      },
    },
    {
      id: "Detection",
      title: "Deep Learning For Computer Vision - Object Detection",
      value: "AlexNet Architecture",
      icon: "trophy",
      description: "dl",
      images: [
        "/assets/image copy 47.png",
        "/assets/image copy 46.png",
        "/assets/image copy 48.png",
        "/assets/image copy 50.png",

      ],
      links: {
        link: "https://colab.research.google.com/drive/12g-SKgqk9zCsWpaTuVvZrzWEZ4W3isXo?usp=sharing",
      },
    },
    {
      id: "ml",
      title: "Nepal Bike Sharing Demand Prediction",
      value: "Machine Learning Project",
      icon: "money",
      description: "ml",
      images: [
        "/assets/image copy 51.png",
        "/assets/image copy 52.png",
        "/assets/image copy 53.png",
        "/assets/image copy 54.png",
        "/assets/image copy 55.png"
      ],
      links: {
        link: "https://colab.research.google.com/drive/1lvpvv3VvTPfRqljeIPZ1_lh5Xvlgzejv?usp=sharing",
      },
    },
    {
      id: "data_science",
      title: " Employee Productivity Prediction using Synthetic Data",
      value: "A Data Science project that predicts employee productivity using synthetic data.",
      icon: "money",
      description: "employee",
      images: [
        "/assets/image copy 43.png",
        "/assets/image copy 44.png",
        "/assets/image copy 45.png"
      ],
      links: {
        link: "https://colab.research.google.com/drive/1xlxch9xbAbKIz32tPrFXZW6nO_nenGoA?usp=sharing",
      },
    },
    {
      id: "iot",
      title: "Smart Luggage Tracker",
      value: "A multipurpose IoT device",
      icon: "money",
      description: "iot",
      images: [
        "/assets/image copy 39.png",
        "/assets/image copy 42.png",
        "/assets/image copy 38.png",
        "/assets/image copy 40.png",
        "/assets/image copy 41.png",
      ],
      links: {
        link: "https://www.linkedin.com/posts/aadarshprajapati777_embeddedsystems-iot-bluetooth-activity-7281546742355898368-WgzC?utm_source=share&utm_medium=member_desktop",
      },
    },
    {
      id: "elt",
      title: "ELT FullStack Application",
      value: "FullStack Application",
      icon: "money",
      description: "elt",
      images: [
        "/assets/image copy 34.png",
        "/assets/image copy 35.png",
        "/assets/image copy 36.png",
        "/assets/image copy 37.png",
      ],
      links: {
        github: "https://github.com/Aadarshprajapati777/data_engineering_ELT_fullstack_application",
      },
    },
   
    
  ];

  const handleCardClick = (project) => {
    navigate(`/stats/${project.id}`, { state: project });
  };
  return (
    <section id="portfolio" className="px-4 pt-4 sm:px-8 sm:pt-8">
      {/* Section Title */}
      <h2
        className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
        style={{
          textShadow:
            "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
        }}
      >
        <span className="font-brand-primary text-green-700">My </span>work
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(project)}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-xl shadow-black/30 bg-gray-800 hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.images[0]}
              alt={project.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.value}</p>
            </div>
            <div className="absolute bottom-2 right-2">
              <span className="text-sm font-semibold text-green-500 bg-gray-900 px-2 py-1 rounded-md shadow">
                Know More
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

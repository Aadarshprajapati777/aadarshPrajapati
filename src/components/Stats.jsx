import React from "react";
import { useNavigate } from "react-router-dom";


const Stats = () => {
  const navigate = useNavigate();

  const stats = [
    {
    id: "nasa2024",
    title: "NASA Space App Challenge Hackathon -2024",
    value: "1st Prize Winner and Global Nomination",
    icon: "trophy",
    description: "Winning the NASA Space Apps Challenge hackathon was an incredibly rewarding experience. As the team leader, I efficiently managed time and tasks, dividing work based on team members' strengths. We focused on core functionalities and used existing APIs to speed up development. Despite the 36-hour time constraint, the team worked seamlessly, overcoming challenges and delivering a refined solution. To my surprise, we won the hackathon and received a global nomination. This achievement reinforced the power of teamwork, strategic planning, and leveraging technology to solve real-world problems, motivating me to continue exploring innovative solutions.",
    images: [
      "/assets/image copy 3.png",
      "/assets/image copy 4.png",
      "/assets/image copy 5.png",
      "/assets/image.png",
      "/assets/image copy.png",
      "/assets/image copy 2.png",
      "/assets/image copy 6.png"

    ],
    links: {
      Project:"https://docs.google.com/presentation/d/1LR85gy5eMOjArn5Rqwgc_yOwytM6OGxO/edit?amp;ouid=100036530914893009593&amp;rtpof=true&amp;sd=true#slide=id.p1",
      live: "https://frontend-onh3.vercel.app/presentation",
      presentation: "https://youtube.com/shorts/EGvvKXFa5WY?si=vTbbY5e3VPSBy7vG",
      award:"https://youtube.com/shorts/zTr1WfEYA0Q?si=kMm4zFTJYHsz5L-I",
      video:"https://youtu.be/rhhvM_IEV70?si=CI0tmPSadtEQOtDn",
      About: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/divide_by_4/?tab=details",
      github: "https://github.com/Aadarshprajapati777/AgroMaster/blob/main/backend/server.js",
    }
  },
  {
    id: "nasa2022",
    title: "NASA Space App Challenge Hackathon -2022",
    value: "Global Nomination",
    icon: "globe",
    description: "Participating in my first hackathon during the COVID-19 period was an incredible experience. The challenge was to build a real-time ISS tracking website, and I had the opportunity to create the third one of its kind. It was a fast-paced, remote project, but I loved every minute of it—from planning to execution. Despite the pressure, I was able to deliver a working app that not only tracked the ISS in real-time but also provided a 3D experience. To my surprise, I won a global nomination from Kathmandu, Nepal, which was a huge milestone for me. It was a reminder of how passion, hard work, and teamwork can lead to amazing results.Participating in my first hackathon during the COVID-19 period was a memorable experience. The challenge was to build an open-source web application that tracks the ISS in real time. I developed the third website of its kind, focusing on interactive and accurate tracking in three dimensions. My project was successful, and I was honored with a global nomination from Kathmandu, Nepal. This achievement motivated me to continue exploring innovative solutions in technology and space exploration.",
    images: [
      "/assets/image copy 7.png",
      "/assets/image copy 8.png",
      "/assets/image copy 9.png",
    ],
    links: {
      Project:"https://www.linkedin.com/posts/aadarshprajapati777_nasaspaceappchallenge-project-css-activity-6983823125201215488-tsAv?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/Aadarshprajapati777/TRACK-THE-SPACE-STATION-IN-3D",
    }
  },
  {
    id: "ICTR3",
    title: "International Conference on TSUNAMI RISK REDUCTION AND RESILIENCE (ICTR3)",
    value: "Certificate",
    icon: "certificate",
    description: "I had the privilege of participating in the International Conference on Tsunami Risk Reduction & Resilience (ICR3) at the Amritapuri Campus, Kerala, India, from December 13th to 15th, 2024. The conference marked the 20th anniversary of the 2004 Indian Ocean Tsunami and brought together experts and policymakers from over 15 countries. I had the opportunity to engage in workshops, learn from over 40 distinguished speakers, and network with professionals dedicated to disaster risk reduction and resilience-building. This experience deepened my understanding of global challenges and the importance of international collaboration.",
    images: [
      "/assets/image16.png",
      "/assets/image copy 12.png",
      "/assets/image copy 13.png",
      "/assets/image copy 14.png",
      "/assets/image copy 15.png"
    ],
    links: {
      Event:"https://www.amrita.edu/events/international-conference-on-tsunami-risk-reduction-resilience/",
      Detail: "https://www.linkedin.com/posts/aadarshprajapati777_disastermanagement-tsunamiriskreduction-resilience-activity-7278465589205983232-0s4g?utm_source=share&utm_medium=member_desktop",
    }
  },
  {
    id: "fullstack",
    title: "  Full Stack, DevOps, System Design Cohort",
    value: "Certificate",
    icon: "certificate",
    description: "I’m thrilled to have earned the 1-100 certificate on 100xDevs, an intensive program that has significantly expanded my expertise in full-stack engineering. Throughout the journey, I explored a wide range of topics, including JavaScript, Node.js, TypeScript, databases like MongoDB and PostgreSQL, backend frameworks like Express.js, and frontend technologies such as React, Next.js, and Tailwind CSS. I also delved into advanced concepts like Redis, Kafka, system design, container orchestration with Kubernetes, CI/CD pipelines, AWS services, and monitoring tools like Prometheus and Grafana. Balancing this extensive learning during vacations while managing college studies was a challenge, but it was incredibly rewarding. A huge thanks to Harkirat Singh, whose mentorship and impactful content made complex topics feel approachable and engaging. His guidance has been instrumental in helping me productively utilize my free time and achieve this milestone.",
    images: [
      "/assets/image copy 16.png",
      "/assets/image copy 17.png",
      "/assets/image copy 18.png",
      "/assets/image copy 19.png",
      "/assets/image copy 20.png"
    ],
    links: {
      Course:"https://harkirat.classx.co.in/new-courses/7-live-1-100",
      Mentor: "https://www.linkedin.com/in/kirat-li/",
      Certificate: "https://app.100xdevs.com/certificate/verify/92AAZEZI"
    }
  },
    // Add more stats here
  ];

  const handleCardClick = (stat) => {
    navigate(`/stats/${stat.id}`, { state: stat }); // Navigate with `state`
  };
  
  const getIcon = (type) => {
    switch (type) {
      case "trophy":
        return <span className="text-yellow-500 text-3xl">🏆</span>;
      case "globe":
        return <span className="text-blue-500 text-3xl">🌐</span>;
      case "certificate":
        return <span className="text-green-500 text-3xl">🎓</span>;
      case "money":
        return <span className="text-green-500 text-3xl">💰</span>;
      case "job":
        return <span className="text-purple-500 text-3xl">💼</span>;
      default:
        return <span className="text-gray-500 text-3xl">🔖</span>;
    }
  };

  return (
    <section id="stats" className="p-4 md:p-8">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
        <span className="text-green-700">Achievements</span> and Certifications
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="relative flex flex-col items-center justify-center space-y-2 rounded-xl bg-gray-900 px-4 py-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handleCardClick(stat)}
          >
            {getIcon(stat.icon)}
            <h3 className="text-center font-bold text-stone-200 sm:text-lg">
              {stat.title}
            </h3>
            <span className="text-gray-400 sm:text-base">{stat.value}</span>
            <span className="absolute bottom-2 right-2 text-sm text-green-500 underline">
              Know More
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
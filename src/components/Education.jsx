import React from 'react';

const EducationExperience = () => {
    const educationData = [
        {
            period: "2022 - 2026",
            institution: "Amrita Vishwa Vidyapeetham ",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            description: "I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at Amrita Vishwa Vidyapeetha, one of India’s top-ranked institutions. I joined this prestigious university after securing admission through a highly competitive entrance examination and interview process. My time here has been instrumental in building a strong foundation in computer science fundamentals and hands-on experience in solving real-world problems. The curriculum, combined with the guidance of experienced professors and a focus on research-driven learning, has allowed me to explore cutting-edge technologies like machine learning, embedded systems, and web development. This environment has significantly shaped my skills and instilled a passion for innovation and practical problem-solving."
        },
        {
            period: "2021 - 2022",
            institution: "AIFT Mumbai University",
            degree: "Bachelor of Arts in Film, TV and New Media Production",
            description: "During my time at AIFT Mumbai University, I pursued a Bachelor of Arts in Film, TV, and New Media Production, where I explored my passion for storytelling and visual creativity. The program allowed me to develop technical skills in filmmaking, editing, and screenwriting while gaining a deeper understanding of narrative construction and media production. Despite my enthusiasm for the field, I made the decision to step away from the program after one year to focus on other opportunities that aligned more closely with my evolving goals and interests. This experience, however, reinforced my love for storytelling as a powerful medium to connect with audiences and express unique perspectives."
        }
    ];

    const experienceData = [
        {
            "period": "Oct 2024 – Present",
            "company": "Kasicare 2 (Remote)",
            "role": "SDE - Intern",
            "description": "I am currently working as an SDE Intern at Kasicare, where I have architected a library and community platform for selling and sharing digital resources. I integrated a secure payment system for error-free transactions and optimized storage efficiency by preventing redundant S3 uploads through resource-link mapping. Additionally, I automated the sitemap generation process for all therapist sites with their dynamic content.",
            "tech": {
                "frontend": "React, TailwindCss",
                "backend": "Node.js, MongoDB, GraphQL"
            }
        },
        {
            "period": "Nov 2022 – Aug 2023",
            "company": "amFOSS 2 - Amritapuri, India",
            "role": "Full-Stack Engineer",
            "description": "As a Full-Stack Engineer at amFOSS, I engineered full-stack applications focusing on performance, security, and cost efficiency. I also developed custom bots to automate daily tasks, significantly improving productivity and reducing manual workload for team members. Additionally, I refactored codebases to enhance performance and maintainability.",
            "tech": {
                "frontend": "React/Typescript, TailwindCss",
                "backend": "Node.js, Python"
            }
        }
        
    ];

    const TimelineItem = ({ data, type }) => (
        <div className="mb-8 relative pl-6 border-l border-gray-700">
            <div className="absolute -left-3 top-0 w-5 h-5 rounded-full border-4 border-green-500 bg-gray-900" />
            <div className="bg-gray-800 rounded-lg p-6">
                <div className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm text-gray-400 mb-4">
                    {data.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                    {type === 'education' ? data.degree : data.role}
                </h3>
                <div className="text-green-500 mb-4">
                    {type === 'education' ? data.institution : data.company}
                </div>
                <p className="text-gray-400 mb-4">{data.description}</p>
                {data.tech && (
                    <div className="space-y-2">
                        <div className="text-sm">
                            <span className="text-gray-500">Frontend:</span>
                            <span className="text-gray-400 ml-2">{data.tech.frontend}</span>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-500">Backend:</span>
                            <span className="text-gray-400 ml-2">{data.tech.backend}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full p-6" style={{ backgroundColor: '#030712' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-green-500">Edu</span>
                            <span className="text-white">cation</span>
                        </h2>
                        <div className="space-y-6">
                            {educationData.map((edu, index) => (
                                <TimelineItem key={index} data={edu} type="education" />
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-green-500">Exp</span>
                            <span className="text-white">erience</span>
                        </h2>
                        <div className="space-y-6">
                            {experienceData.map((exp, index) => (
                                <TimelineItem key={index} data={exp} type="experience" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationExperience;
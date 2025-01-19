import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StatDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, value, description, images, links, icon } = location.state;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Normalize images to array
    const imageArray = Array.isArray(images) ? images : images ? [images] : [];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };

    // Link Icons
    const getLinkIcon = (type) => {
        switch (type) {
            case 'github':
                return (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                );
            case 'video':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'live':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                );
        }
    };


    // Check if description is "agromaster" and display the detailed HTML content
    const fullDescription = `
  <h2>Project Overview</h2>
<p>
  AgroMaster is a cutting-edge tool developed during the NASA Space Apps Challenge, designed to help farmers tackle critical water-related challenges in agriculture. By leveraging real-time environmental data, such as weather patterns, pest occurrences, diseases, and fluctuating water levels, AgroMaster provides farmers with actionable insights. Through the integration of advanced technologies, including NASA’s Earthdata and Landsat datasets, AgroMaster empowers farmers to make informed decisions that maximize crop yields and ensure the sustainable use of water and resources.
</p>

<h3>Key Features of AgroMaster</h3>
<p>AgroMaster offers a wide range of features that are essential for modern farming:</p>

<table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Crop Suggestion & Prediction</strong></td>
      <td>AgroMaster helps farmers determine the most suitable crops for their region based on local weather, soil conditions, and market costs. It provides personalized recommendations in both English and local languages, ensuring alignment with local economic conditions.</td>
    </tr>
    <tr>
      <td><strong>Plant Health Monitoring</strong></td>
      <td>Farmers can upload images of their crops, which are then analyzed by AI-powered tools to detect diseases. Preventative measures are suggested to help protect crops, preventing large-scale losses and ensuring early intervention.</td>
    </tr>
    <tr>
      <td><strong>Mega – Personal Farming Assistant</strong></td>
      <td>Powered by artificial intelligence, Mega is a real-time chatbot that assists farmers with a variety of farming-related queries, from crop selection to pest management, offering accessible advice at their fingertips.</td>
    </tr>
    <tr>
      <td><strong>Farming Plan Report</strong></td>
      <td>AgroMaster allows farmers to create customized farming plans tailored to their location, crop choices, and environmental conditions. The plan is generated in a downloadable PDF format, providing farmers with specific guidance for optimal agricultural practices.</td>
    </tr>
    <tr>
      <td><strong>Water Level Monitoring</strong></td>
      <td>By integrating data from NASA’s Landsat satellites, AgroMaster provides real-time information on water availability. This helps farmers make informed decisions about irrigation, reducing water wastage and improving overall water management.</td>
    </tr>
  </tbody>
</table>

<h3>How AgroMaster Works</h3>
<p>AgroMaster functions through a seamless integration of data, AI, and user input, making it a powerful tool for farmers:</p>

<ul>
  <li><strong>Data Integration:</strong> AgroMaster uses NASA Earthdata to monitor soil moisture and NASA Landsat data to track water levels. By accessing real-time environmental data, farmers can assess their current conditions and make informed decisions.</li>
  <li><strong>User Input:</strong> Farmers can enter basic details such as location, farming period, and crop preferences. They can also upload images of their plants for health analysis, enabling more accurate monitoring and predictions.</li>
  <li><strong>AI and APIs:</strong> Using the Google Gemini API, AgroMaster offers crop suggestions based on AI-driven insights, while weather data from OpenWeatherMap API improves crop prediction accuracy. The Mega chatbot, powered by AI, is available to answer questions in real-time.</li>
  <li><strong>Frontend and Backend:</strong> The user-friendly frontend is built using React and Material UI, ensuring a responsive and easy-to-navigate experience. The backend, developed with Node.js and Express, manages data processing and communication with NASA’s APIs.</li>
</ul>

<h3>Technologies and Tools Used</h3>
<p>AgroMaster leverages a combination of advanced technologies to deliver its powerful capabilities:</p>

<table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
  <thead>
    <tr>
      <th>Technology/Tool</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frontend</strong></td>
      <td>React, Material UI, CSS - For creating a responsive and interactive user interface.</td>
    </tr>
    <tr>
      <td><strong>Backend</strong></td>
      <td>Node.js, Express - The backend handles API calls, user input processing, and communication with external data sources.</td>
    </tr>
    <tr>
      <td><strong>APIs</strong></td>
      <td>NASA Earthdata, NASA Landsat, Google Gemini API, OpenWeatherMap API - These APIs provide real-time environmental data, including soil moisture, weather patterns, and water levels.</td>
    </tr>
    <tr>
      <td><strong>Deployment</strong></td>
      <td>Vercel (Frontend), Render (Backend) - Deployment platforms for hosting and scaling the application.</td>
    </tr>
    <tr>
      <td><strong>Artificial Intelligence</strong></td>
      <td>ChatGPT - AI used for researching NASA data and enhancing the backend with better performance and data integration.</td>
    </tr>
  </tbody>
</table>

<h3>Artificial Intelligence in AgroMaster</h3>
<p>Artificial intelligence plays a vital role in AgroMaster’s functionality, particularly for crop prediction and plant health monitoring:</p>
<ul>
  <li>AI-driven crop suggestions and disease detection ensure that farmers receive accurate and timely information to enhance productivity.</li>
  <li>Machine learning models, powered by Google Gemini and ChatGPT, process vast datasets to offer tailored recommendations and identify plant diseases from uploaded images.</li>
  <li>ChatGPT’s integration also helps developers quickly access technical information about NASA’s datasets, accelerating development and improving the app’s performance.</li>
</ul>

<h3>Accomplishments and Completion within 36 Hours</h3>
<p>The development team worked tirelessly to bring AgroMaster to life within just 36 hours. Here’s how they achieved this remarkable feat:</p>

<table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
  <thead>
    <tr>
      <th>Accomplishment</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pre-Planning</strong></td>
      <td>The team conducted brainstorming sessions to define the scope, objectives, and features, ensuring clarity from the beginning to prevent scope creep.</td>
    </tr>
    <tr>
      <td><strong>Efficient Use of Technology</strong></td>
      <td>By utilizing existing NASA APIs and AI tools like Google Gemini and ChatGPT, the team focused on integrating data rather than creating it from scratch, speeding up development.</td>
    </tr>
    <tr>
      <td><strong>Modular Development</strong></td>
      <td>The team worked in parallel on different modules, including the frontend, backend, and AI features, ensuring that progress was made on multiple fronts simultaneously.</td>
    </tr>
    <tr>
      <td><strong>Real-Time Problem Solving</strong></td>
      <td>The team used AI tools like ChatGPT to troubleshoot issues, gather knowledge, and resolve technical queries quickly, ensuring rapid development.</td>
    </tr>
    <tr>
      <td><strong>Focus on Core Features</strong></td>
      <td>The team focused on delivering the app’s core functionalities that would directly benefit farmers, ensuring a polished product within the time constraints.</td>
    </tr>
  </tbody>
</table>

<h3>Impact and Future Aspirations</h3>
<p>AgroMaster has the potential to revolutionize farming practices by providing farmers with easy access to advanced technologies, empowering them to make data-driven decisions. In the future, AgroMaster plans to integrate IoT devices, such as soil moisture sensors, weather stations, and automated irrigation systems, to further enhance farming operations. These integrations will allow farmers to monitor their crops and environment in real-time, improving efficiency, reducing waste, and increasing productivity.</p>

<p>The future of farming lies in embracing technology, and AgroMaster is at the forefront of this transformation, driving sustainable agriculture and helping farmers adapt to changing environmental conditions.</p>
`;

    const fullExchangeDescription = `<h2>Scalable Exchange Platform</h2>
<p>
  Welcome to the Scalable Exchange Platform project! This platform is under active development and is designed to handle high volumes of user traffic and data efficiently. With a robust, scalable architecture, it leverages a microservices approach to ensure that each component can independently scale based on user demand, providing a seamless experience even during periods of high traffic.
</p>

<h3>Key Components of the Exchange Platform</h3>
<p>The platform comprises several essential components that work together to provide a reliable and scalable solution:</p>

<table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>API Service</strong></td>
      <td>The core backend service responsible for managing user traffic. It handles CRUD operations for users, communicates with queues, and facilitates pub/sub systems to ensure smooth data exchange.</td>
    </tr>
    <tr>
      <td><strong>WebSocket (WS) Service</strong></td>
      <td>Manages WebSocket connections between the frontend and backend engine. This service ensures real-time data exchange, enabling live updates, such as price changes, trades, and account information.</td>
    </tr>
    <tr>
      <td><strong>Engine</strong></td>
      <td>Acts as the central processing unit, handling incoming user data. It updates the WebSocket connections, database, and frontend interface based on user interactions, ensuring a dynamic and responsive platform.</td>
    </tr>
    <tr>
      <td><strong>Database (DB) Service</strong></td>
      <td>Handles all database operations, including data storage and retrieval. This service ensures reliable management of user data, transactions, and platform-related information.</td>
    </tr>
    <tr>
      <td><strong>Docker Service</strong></td>
      <td>Facilitates the deployment of containerized applications by pulling Docker images and running them within containers. This service enables smooth and consistent deployment, improving the flexibility of the platform.</td>
    </tr>
    <tr>
      <td><strong>Market Maker (MM) Service</strong></td>
      <td>Temporarily feeds dummy data into the backend for testing and development purposes. This service simulates real market conditions, helping developers test data flows and user interactions without the need for live market data.</td>
    </tr>
  </tbody>
</table>

<h3>Current Status</h3>
<p>The platform is still in the development phase, with several key improvements underway:</p>
<ul>
  <li><strong>Under Development:</strong> The platform is being actively developed, and significant progress has been made in terms of its core architecture.</li>
  <li><strong>Bugs:</strong> Some known bugs are being actively addressed to ensure a more stable and reliable experience for users.</li>
  <li><strong>UI Improvements:</strong> The user interface is undergoing substantial improvements to enhance both usability and aesthetics. Future versions will offer a more polished and intuitive experience.</li>
</ul>

<h3>Architecture</h3>
<p>The architecture of the platform is designed for scalability and reliability, utilizing a combination of Pub/Sub and Queues to enable efficient communication between services:</p>

<ul>
  <li><strong>Decoupling:</strong> Services communicate asynchronously, reducing dependencies between components. This allows for greater flexibility, as each service can function independently and be scaled according to demand.</li>
  <li><strong>Scalability:</strong> The microservices architecture ensures that each service can scale independently, allowing the platform to handle growing user traffic and data demands without compromising performance.</li>
</ul>

<h3>Future Enhancements</h3>
<p>The platform is being continuously improved, with several major updates and enhancements planned for the near future:</p>

<table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
  <thead>
    <tr>
      <th>Enhancement</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Bug Fixes</strong></td>
      <td>I am actively working on identifying and fixing known bugs to enhance the platform's stability and performance.</td>
    </tr>
    <tr>
      <td><strong>UI/UX Improvements</strong></td>
      <td>Major upgrades are planned to improve the user interface and overall user experience, ensuring the platform is not only functional but also intuitive and visually appealing.</td>
    </tr>
    <tr>
      <td><strong>Performance Optimization</strong></td>
      <td>Ongoing performance optimizations are being made to improve the platform's efficiency, responsiveness, and overall speed, ensuring it can handle a growing number of users and transactions.</td>
    </tr>
  </tbody>
</table>

<h3>Impact and Future Vision</h3>
<p>The Scalable Exchange Platform is designed to provide a high-performance, reliable solution for the Web3 space, enabling users to trade digital assets in real time with minimal latency. The platform’s microservices architecture ensures that it can grow with increasing user demand, allowing it to scale seamlessly while maintaining optimal performance.</p>

<p>Looking ahead, the platform plans to integrate advanced features such as decentralized finance (DeFi) protocols, smart contract support, and advanced security measures to further enhance user experience and safeguard digital assets. The future of the platform also includes exploring the use of IoT devices for enhanced data tracking and real-time analytics, providing users with an even more powerful and insightful trading experience.</p>
`

    const fullEltDescription = `
  <h2>ELT Process Application</h2>
  <p>This robust and scalable ELT (Extract, Load, Transform) process application is designed to efficiently handle and process data from two key datasets: a Payment Report and a Merchant Tax Report (MTR). Built using Next.js for the front-end and FastAPI for the back-end, with a PostgreSQL database for storing processed data, this application is an essential tool for data engineering tasks involving large datasets.</p>
  <h3>Database Schema</h3>
  <p>The database consists of the following tables:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Table</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>processed_payment</strong></td>
        <td>Stores the refined payment data from the Payment Report.</td>
      </tr>
      <tr>
        <td><strong>processed_mtr</strong></td>
        <td>Stores the processed MTR data after transformation.</td>
      </tr>
      <tr>
        <td><strong>merged_data</strong></td>
        <td>Stores the merged data from both the Payment and MTR reports.</td>
      </tr>
    </tbody>
  </table>

  <h3>API Design</h3>
  <ul>
    <li><strong>POST /upload/:</strong> Upload and process datasets.</li>
    <li><strong>GET /summary/:</strong> Retrieve a summary of the processed data.</li>
    <li><strong>GET /grouped_data/:</strong> Retrieve detailed processed data from the merged table.</li>
  </ul>

  <h3>ELT Pipeline</h3>
  <p>The ELT pipeline is divided into the following stages:</p>
  <ul>
    <li><strong>Extraction:</strong> Upload the Payment Report (CSV) and Merchant Tax Report (XLSX) datasets and extract the data.</li>
    <li><strong>Transformation:</strong> The transformation stage processes the MTR and Payment Report datasets by filtering out unwanted data and renaming columns as necessary.</li>
    <ul>
      <li>For MTR: Remove rows with Transaction Type as Cancel. Rename Refund and FreeReplacement to Return.</li>
      <li>For Payment Report: Remove rows with Type as Transfer. Rename Type to Payment Type and assign Transaction Type as Payment.</li>
    </ul>
    <li><strong>Merge Datasets:</strong> Combine the MTR and Payment Report datasets into a single merged dataset.</li>
    <li><strong>Loading:</strong> Store the processed data in the corresponding database tables: processed_payment, processed_mtr, and merged_data.</li>
  </ul>

  <h3>Known Issues</h3>
  <ul>
    <li>No comprehensive error handling for malformed data files.</li>
  </ul>

  <h3>Future Improvements</h3>
  <ul>
    <li><strong>Error Handling:</strong> Enhance error handling and validation for uploaded datasets.</li>
    <li><strong>Performance Optimization:</strong> Optimize the ELT pipeline to handle larger datasets more efficiently.</li>
    <li><strong>Additional Features:</strong> Add more filters and data transformation options based on user feedback.</li>
  </ul>
`;

    const fullLuggageDescription = `
  <h2>Smart Luggage Tracker</h2>
  <p>
    I'm excited to share my work on the Smart Luggage Tracker, a unique and innovative solution designed to monitor and secure luggage during travel. This project utilizes Bluetooth Low Energy (BLE) technology to send real-time notifications and includes environmental monitoring with the DHT11 sensor for tracking temperature and humidity. The tracker offers a convenient way for travelers to ensure their luggage is secure and alert them of any abnormal environmental conditions.
  </p>

  <h3>Key Technical Insights</h3>
  <p>The system is designed to be efficient, low-cost, and user-friendly. Here are the main components:</p>

  <h4>System Design</h4>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Component</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>ESP32 Microcontroller</strong></td>
        <td>Handles BLE communication and manages the sensor data, ensuring efficient data transmission to mobile devices.</td>
      </tr>
      <tr>
        <td><strong>DHT11 Sensor</strong></td>
        <td>Monitors temperature and humidity. Alerts users of any abnormal changes in these environmental conditions.</td>
      </tr>
      <tr>
        <td><strong>BLE Notifications</strong></td>
        <td>Sends real-time alerts to mobile devices whenever there is a disconnection or when environmental thresholds are breached.</td>
      </tr>
      <tr>
        <td><strong>Piezo Buzzer</strong></td>
        <td>Provides audible feedback for connection status and environmental thresholds (e.g., temperature or humidity breach).</td>
      </tr>
    </tbody>
  </table>

  <h4>Code & Functionality</h4>
  <p>The code and functionality were developed using the Arduino IDE, ensuring compatibility with the ESP32 microcontroller. Key functionalities include:</p>
  <ul>
    <li>Utilized BLE libraries such as <code>BLEDevice</code> and <code>BLEServer</code> to manage communication.</li>
    <li>Implemented buzzer logic to alert the user in cases of disconnection or environmental breaches.</li>
    <li>Used the <code>DHT</code> library to interface with the DHT11 sensor for temperature and humidity readings.</li>
    <li>Simulated battery status and BLE notifications for battery updates.</li>
  </ul>

  <h3>Real-World Applications</h3>
  <ul>
    <li><strong>Traveler's Security:</strong> Ideal for travelers looking to secure their luggage by providing real-time alerts for any disconnections or environmental risks.</li>
    <li><strong>Environmental Monitoring:</strong> The DHT11 sensor ensures that any abnormal changes in temperature or humidity are detected, enhancing luggage safety.</li>
    <li><strong>Accessibility:</strong> The tracker operates on a low-cost 9V battery, ensuring long-lasting functionality at a cost-effective price of around INR 600.</li>
  </ul>

  <h3>Low-Cost & Energy-Efficient</h3>
  <p>The tracker operates efficiently on a 9V battery, offering extended use with minimal power consumption. The system is cost-effective, priced at approximately INR 600, making it accessible for a wide range of travelers.</p>

  <h3>Business Potential</h3>
  <p>This project has the potential to be transformed into a commercial product. Possible future enhancements include:</p>
  <ul>
    <li>GPS integration for real-time luggage location tracking.</li>
    <li>Mobile app development for enhanced user control and notifications.</li>
    <li>AI-powered predictive analytics to forecast potential security threats based on environmental data.</li>
  </ul>
  <p>This unique tracker can be expanded into a larger business idea focused on enhancing luggage security and improving traveler safety.</p>

  <h3>Next Steps</h3>
  <ul>
    <li><strong>GPS Integration:</strong> Enhancing the tracker with GPS capabilities to offer real-time location tracking.</li>
    <li><strong>Battery Optimization:</strong> Improving power consumption for longer-lasting battery performance.</li>
    <li><strong>Mobile App Development:</strong> Creating a companion mobile app to manage the tracker and receive alerts directly on your device.</li>
  </ul>
  
`;
    const fullEmployeeProductivityDescription = `
  <h2>Employee Productivity Prediction using Synthetic Data</h2>
  <p>
    I’m excited to share my work on building a data science project aimed at predicting employee productivity. This project utilizes synthetic data generation, data preprocessing, machine learning, and advanced visualization techniques to create an effective system for analyzing employee performance.
  </p>

  <h3>Key Technical Insights</h3>
  <p>This project leverages several key techniques and tools to generate, preprocess, and model the data:</p>

  <h4>1. Data Generation & Preprocessing</h4>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Technique</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Synthetic Data Generation</strong></td>
        <td>Used the Faker library to generate synthetic employee data with 15 features, including Employee_ID, Age, Department, Salary, Job_Satisfaction, and more.</td>
      </tr>
      <tr>
        <td><strong>Controlled Inconsistencies</strong></td>
        <td>Introduced missing values in features like Tasks_Completed, Salary, and Feedback_Score to simulate real-world data challenges.</td>
      </tr>
      <tr>
        <td><strong>Data Preprocessing</strong></td>
        <td>Applied preprocessing techniques such as imputation for missing values, label encoding for categorical variables, normalization for numeric features, and dimensionality reduction using PCA.</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Modeling & Evaluation</h4>
  <p>The project includes the following modeling and evaluation steps:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Step</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Model Building</strong></td>
        <td>Built two models using the RandomForestClassifier: one on raw data and another on preprocessed data.</td>
      </tr>
      <tr>
        <td><strong>Data Split</strong></td>
        <td>Split the dataset into training and testing sets to evaluate model performance.</td>
      </tr>
      <tr>
        <td><strong>Performance Metrics</strong></td>
        <td>The model was evaluated for accuracy and classification metrics such as precision, recall, and F1-score.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. Performance Insights</h4>
  <p>We compared the results from the raw data versus the preprocessed data, providing insights into how preprocessing improves model performance.</p>

  <h4>4. Visualizations</h4>
  <p>Several visualizations were generated to interpret model results and feature importance:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Visualization</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Confusion Matrices</strong></td>
        <td>Used to evaluate model performance on both raw and preprocessed datasets, helping us understand classification accuracy and error types.</td>
      </tr>
      <tr>
        <td><strong>Feature Importance</strong></td>
        <td>Plots were created to show the importance of different features in predicting employee productivity, highlighting the most influential factors.</td>
      </tr>
      <tr>
        <td><strong>Histograms</strong></td>
        <td>Visualized the distribution of key features such as Age, Salary, and Job Satisfaction, helping to identify patterns and potential outliers.</td>
      </tr>
    </tbody>
  </table>

  <h3>Streamlit Dashboard</h3>
  <p>Developed an interactive Streamlit dashboard to allow users to explore the dataset and model results easily:</p>
  <ul>
    <li><strong>Raw Dataset Exploration:</strong> Users can view and interact with the raw dataset.</li>
    <li><strong>Normalization:</strong> Allows users to normalize specific columns for further analysis.</li>
    <li><strong>Visualizations:</strong> Provides interactive charts like histograms, scatter plots, and heatmaps to visualize key features and model results.</li>
  </ul>
  <p>This dashboard can be used for further exploration and real-time analysis of employee productivity-related features.</p>

  <h3>Project Link</h3>
  <p>Check out the project details and demo: <a href="https://lnkd.in/gVuJ4hF2" target="_blank">Employee Productivity Prediction Project</a></p>

  <h3>Next Steps</h3>
  <ul>
    <li><strong>Hyperparameter Tuning:</strong> I am continuing to refine the model by exploring hyperparameter tuning techniques to improve performance.</li>
    <li><strong>Feature Expansion:</strong> Adding more features to the model to improve its predictive capabilities.</li>
    <li><strong>Scaling Analysis:</strong> Scaling this analysis to work with larger, real-world datasets to make the solution more robust and applicable in different industries.</li>
  </ul>
`;

    const fullObjectDetectionDescription = `
  <h2>Advanced Deep Learning-Based Object Detection System</h2>
  <p>
    I’m excited to share the completion of my deep learning-based object detection project, utilizing an AlexNet-inspired CNN architecture for image classification and object detection. This project leverages advanced deep learning techniques to detect and classify objects in images, utilizing modern CNN architectures to ensure high accuracy and robustness.
  </p>

  <h3>Key Technical Insights</h3>
  <p>This project implements various advanced techniques to improve the object detection process:</p>

  <h4>1. Data Preparation & Augmentation</h4>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Technique</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Dataset</strong></td>
        <td>Used a Kaggle dataset for object detection, containing images of various objects for classification.</td>
      </tr>
      <tr>
        <td><strong>Augmentation</strong></td>
        <td>Applied augmentation strategies such as shear, zoom, and horizontal flip to simulate real-world conditions and enhance model generalization.</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Model Architecture</h4>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Component</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>AlexNet-like CNN</strong></td>
        <td>Implemented an AlexNet-inspired architecture with five convolutional layers designed to capture both low- and high-level features of the images.</td>
      </tr>
      <tr>
        <td><strong>Filter Sizes</strong></td>
        <td>Utilized varying filter sizes (96, 256, 384) to capture a wide range of feature details from the images.</td>
      </tr>
      <tr>
        <td><strong>Batch Normalization & Dropout</strong></td>
        <td>Used batch normalization and dropout layers to ensure stable learning and to mitigate overfitting during training.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. Optimization & Hyperparameter Tuning</h4>
  <p>The model was optimized using the following techniques to improve performance:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Technique</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Adam Optimizer</strong></td>
        <td>Used the Adam optimizer to update model weights efficiently and avoid overfitting.</td>
      </tr>
      <tr>
        <td><strong>Early Stopping</strong></td>
        <td>Implemented early stopping to halt training when the model performance plateaus, preventing overfitting.</td>
      </tr>
      <tr>
        <td><strong>Learning Rate Scheduling</strong></td>
        <td>Utilized learning rate scheduling to adjust the learning rate during training for optimal convergence.</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Evaluation & Performance Metrics</h4>
  <p>The model was trained for 35 epochs, and its performance was evaluated using the following metrics:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Metric</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Accuracy</strong></td>
        <td>Evaluated accuracy to assess how well the model can correctly predict object classes.</td>
      </tr>
      <tr>
        <td><strong>Loss</strong></td>
        <td>Monitored loss to ensure that the model is learning effectively and minimizing error during training.</td>
      </tr>
    </tbody>
  </table>

  <h4>5. Challenges & Learnings</h4>
  <p>While the model architecture was robust, several challenges were encountered:</p>
  <ul>
    <li><strong>Dataset Imbalance:</strong> The model's performance was affected by dataset imbalance, where certain object categories had more data than others.</li>
    <li><strong>Object Detection Performance:</strong> Despite the successful classification, the object detection performance did not meet expectations, indicating a need for further fine-tuning.</li>
  </ul>

  <ul>
    <li><strong>Transfer Learning:</strong> I plan to explore transfer learning with pre-trained models to enhance performance and reduce training time.</li>
    <li><strong>Reinforcement Learning:</strong> Investigating reinforcement learning techniques to improve the model's ability to adapt to real-world challenges.</li>
    <li><strong>Fine-Tuning & Hyperparameter Optimization:</strong> Continuing to fine-tune the model and optimize hyperparameters for better performance in complex scenarios.</li>
  </ul>
`;

    const fullBikeSharingDescription = `
  <h2>Nepal Bike Sharing Demand Prediction</h2>
  <p>
    I am excited to share the completion of my project, Nepal Bike Sharing Demand Prediction. This project allowed me to apply data-driven techniques to real-world challenges and gain valuable experience in developing machine learning models to predict bike-sharing demand.
  </p>

  <h3>Key Learnings</h3>
  <p>This project involved several critical steps and techniques to achieve accurate demand predictions:</p>

  <h4>1. End-to-End ML Pipeline</h4>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Step</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Data Preprocessing</strong></td>
        <td>Handled missing values, outliers, and addressed multicollinearity and data skewness to ensure clean and reliable data.</td>
      </tr>
      <tr>
        <td><strong>Feature Engineering</strong></td>
        <td>Developed new features from the raw data, including weather data, to make the model more robust and predictive.</td>
      </tr>
      <tr>
        <td><strong>Model Training & Evaluation</strong></td>
        <td>Trained and evaluated multiple models, ensuring that they performed optimally with fine-tuned hyperparameters.</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Feature Engineering & EDA</h4>
  <p>Exploratory Data Analysis (EDA) was crucial in understanding the relationships between key features like weather conditions and bike demand. Here’s how it contributed to the project:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Technique</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Weather Data Integration</strong></td>
        <td>Incorporated weather data such as temperature and humidity to improve model performance by considering external factors affecting demand.</td>
      </tr>
      <tr>
        <td><strong>Data Visualization</strong></td>
        <td>Used visualizations like heatmaps and scatter plots to understand patterns and correlations, helping with feature selection and model choices.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. Machine Learning Models</h4>
  <p>Several machine learning models were implemented and optimized to predict bike-sharing demand accurately:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Model</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Linear Regression</strong></td>
        <td>Used as the baseline model to predict continuous bike-sharing demand. It helped in understanding the linear relationship between features and demand.</td>
      </tr>
      <tr>
        <td><strong>Decision Trees</strong></td>
        <td>Utilized for handling non-linear relationships and predicting demand based on different decision-making factors.</td>
      </tr>
      <tr>
        <td><strong>Random Forest</strong></td>
        <td>Implemented to increase prediction accuracy by averaging over multiple decision trees, reducing overfitting and improving generalization.</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Evaluation & Performance Metrics</h4>
  <p>The models were evaluated using several key metrics to assess their accuracy and reliability:</p>
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
    <thead>
      <tr>
        <th>Metric</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MSE (Mean Squared Error)</strong></td>
        <td>Measures the average squared difference between predicted and actual values, helping to understand the model’s error rate.</td>
      </tr>
      <tr>
        <td><strong>RMSE (Root Mean Squared Error)</strong></td>
        <td>Provides the square root of MSE, making the error interpretation more intuitive by having the same units as the target variable.</td>
      </tr>
      <tr>
        <td><strong>R² (Coefficient of Determination)</strong></td>
        <td>Measures the proportion of variance in the target variable explained by the model, indicating the model’s fit.</td>
      </tr>
    </tbody>
  </table>

  <h3>Real-World Impact</h3>
  <p>The results of this project have significant implications for urban planning, sustainability, and business strategy:</p>
  <ul>
    <li><strong>Urban Planning:</strong> Optimized fleet sizes and station placements, reducing costs and improving service quality for bike-sharing companies.</li>
    <li><strong>Sustainability:</strong> Contributed to greener cities by promoting bike-sharing as a means of reducing traffic congestion and cutting carbon emissions.</li>
    <li><strong>Business Strategy:</strong> Identified patterns for seasonal and weather-related demand, enabling dynamic pricing and targeted promotions to maximize utilization.</li>
  </ul>

  <h3>Future Directions</h3>
  <ul>
    <li><strong>Deep Learning:</strong> Exploring time-series forecasting using LSTMs to improve prediction accuracy, especially for seasonal and time-dependent trends.</li>
    <li><strong>Real-Time Integration:</strong> Integrating live data sources for dynamic fleet management, ensuring that bike-sharing stations are optimized for real-time demand.</li>
    <li><strong>IoT & Automation:</strong> Leveraging IoT data to optimize maintenance schedules and improve user experience with smart bikes and stations.</li>
  </ul>

  <h3>Challenges & Learnings</h3>
  <p>While the project was a success, I encountered challenges related to dataset imbalances and model optimization. These obstacles helped me develop better problem-solving skills and provided valuable insights into improving prediction models.</p>

  `
        ;
    const fullKasicareDescription = `
        <h2>Kasicare (Pracflow) - SDE Intern (Oct 2024 – Present)</h2>
        <p>
          My internship at Kasicare (Pracflow), a practice management platform tailored for mental health professionals, has been a journey of continuous learning and hands-on development. Under the mentorship of Sourabh Goyal Sir, I have gained invaluable experience in building production-level applications that real users rely on. This opportunity has allowed me to contribute to critical features that streamline therapists' workflows, enhancing the efficiency and accessibility of mental health care.
        </p>
      
        <h3>Key Contributions</h3>
        <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
          <thead>
            <tr>
              <th>Responsibility</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Real-World Application Development</strong></td>
              <td>Contributed to the development of a live, production application that helps mental health therapists manage their practices. This experience has helped me understand the complexities of building scalable applications for real-world users.</td>
            </tr>
            <tr>
              <td><strong>Task Automation & Efficiency</strong></td>
              <td>Automated the WorkshopPass generation process, improving administrative efficiency. This allowed therapists to focus more on client care and less on paperwork, improving productivity across the board.</td>
            </tr>
            <tr>
              <td><strong>Performance & Storage Optimization</strong></td>
              <td>Enhanced storage efficiency by implementing resource-link mapping, which prevented redundant uploads and saved costs while ensuring a smoother user experience.</td>
            </tr>
            <tr>
              <td><strong>Version Control & Seamless Updates</strong></td>
              <td>Implemented dynamic version control, enabling therapists to access the most up-to-date versions of resources without the risk of duplication, streamlining their workflow and ensuring resource integrity.</td>
            </tr>
            <tr>
              <td><strong>Automated Sitemap Generation</strong></td>
              <td>Automated sitemap generation for therapist sites and platform content, improving SEO and boosting visibility, which ultimately helped therapists attract more clients.</td>
            </tr>
            <tr>
              <td><strong>Bug Fixing & Feature Development</strong></td>
              <td>Fixed over 30 critical bugs and developed 20+ new features, improving the platform’s reliability and making it more intuitive for end-users.</td>
            </tr>
            <tr>
              <td><strong>Advanced Search & Filter Optimization</strong></td>
              <td>Developed advanced search and filtering systems that improved resource discovery and significantly enhanced the user experience, allowing therapists to find resources more easily.</td>
            </tr>
            <tr>
              <td><strong>Data Management with MongoDB</strong></td>
              <td>Utilized MongoDB Aggregation Pipelines to efficiently manage data, resolve inconsistencies, and optimize server traffic, ensuring smooth operations during high traffic periods.</td>
            </tr>
          </tbody>
        </table>
      
        <h3>Mentorship under Sourabh Goyal Sir</h3>
        <p>
          Working under the mentorship of Sourabh Goyal Sir, a seasoned leader with over 11 years of experience in the software industry, has been incredibly enriching. Sourabh Sir's expertise in designing, optimizing, and scaling complex systems has guided me through real-world problem-solving and helped me understand the importance of scalability, performance, and security in production systems. His leadership style fosters innovation and encourages learning through hands-on experience, which has played a significant role in my growth as a Full-Stack Engineer.
        </p>
      
        <h3>Continuous Learning and Application</h3>
        <p>
          Throughout my time at Kasicare, I've had the opportunity to learn and grow continuously. Building applications that real users depend on has taught me the importance of attention to detail, testing, and constant improvement. Every task, whether it was automating workflows or optimizing the platform's performance, contributed to my understanding of building reliable, scalable, and user-centric software. I'm excited to continue contributing to Kasicare’s mission to empower mental health therapists and help improve the quality of care they provide.
        </p>
      `;

    const fullAmfossDescription = `
      <h2>Full-Stack Developer (Nov 2022 – Aug 2023)</h2>
      <p>
        My time at amFOSS was incredibly enriching and rewarding. I started my journey at amFOSS right from my first day of college, where I was given a month-long task by the mentors. The challenge was both exciting and motivating, and I managed to complete these tasks within the given time frame. After two rounds of interviews, I was selected and joined amFOSS under the mentorship of Vipin Sir, who guided me and my batch mates through the various technologies and tasks. His mentorship and support played a vital role in my growth as a Full-Stack Engineer.
      </p>
    
      <h3>Key Contributions</h3>
      <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-bottom: 20px;">
        <thead>
          <tr>
            <th>Responsibility</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Full-Stack Application Development</strong></td>
            <td>Engineered full-stack applications with a focus on performance, security, and cost efficiency. Delivered scalable solutions that met high standards of quality and supported the operational needs of the project.</td>
          </tr>
          <tr>
            <td><strong>Task Automation</strong></td>
            <td>Developed custom bots to automate repetitive tasks, significantly improving team productivity and reducing the manual workload, enabling us to focus on more complex challenges.</td>
          </tr>
          <tr>
            <td><strong>Code Refactoring</strong></td>
            <td>Refactored codebases for improved performance, maintainability, and security. Ensured the application met the highest quality standards, optimizing deployments for robust and reliable performance.</td>
          </tr>
          <tr>
            <td><strong>Performance & Security Optimization</strong></td>
            <td>Focused on optimizing system performance and security, applying best practices to ensure robustness and reliability, which significantly contributed to the overall system's operational efficiency.</td>
          </tr>
        </tbody>
      </table>
      
      <h3>My Journey at amFOSS</h3>
      <p>
        From the very beginning, every minute at amFOSS was productive and engaging. I got hands-on experience with full-stack technologies, which allowed me to learn and grow quickly. 
        After the initial task on my first day at college, I was given more challenging assignments that helped me hone my problem-solving skills. As I progressed, I started taking on more responsibility, from backend development to frontend optimization. 
        Vipin Sir’s mentorship was instrumental in pushing my limits, as he assigned tasks that kept me engaged in productive work and taught me valuable lessons on code quality, performance, and collaboration.
      </p>
    
      <p>
        My contributions to the team not only focused on building features but also on enhancing the overall efficiency and performance of the platform. 
        The knowledge I gained from working with various technologies such as web development frameworks, databases, and security protocols was incredibly valuable and shaped my understanding of the tech industry.
      </p>
      
      <h3>Reflections</h3>
      <p>
        Being part of amFOSS not only helped me grow as a Full-Stack Engineer but also as a team player. Working with mentors and collaborating with fellow batch mates was an enriching experience. The real-world tasks, feedback loops, and the trust instilled in me to deliver high-quality code made this internship an incredibly fulfilling and learning experience.
      </p>
    `;


    const displayDescription = description === "agromaster" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About AgroMaster
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
        </div>
    ) : description === "exchange" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About the Scalable Exchange Platform
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullExchangeDescription }} />
        </div>
    ) : description === "elt" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About the ELT Process Application
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullEltDescription }} />
        </div>
    ) : description === "iot" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About the Smart Luggage Tracker
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullLuggageDescription }} />
        </div>
    ) : description === "employee" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About the Employee Productivity Prediction
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullEmployeeProductivityDescription }} />
        </div>
    ) : description === "dl" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About the Object Detection for Computer Vision Project
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullObjectDetectionDescription }} />
        </div>
    ) : description === "ml" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About Nepal Bike Sharing Demand Prediction Project
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullBikeSharingDescription }} />
        </div>
    ) : description === "i" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                Kasicare (Pracflow) - SDE Intern (Oct 2024 – Present)
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullKasicareDescription }} />
        </div>
    ) : description === "amfoss" ? (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                My time in amFOSS club
            </h2>
            <div dangerouslySetInnerHTML={{ __html: fullAmfossDescription }} />
        </div>
    ) : (
        <div className="prose prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
                About this Achievement
            </h2>
            <p className="text-stone-300 leading-relaxed">{description}</p>
        </div>
    );


    return (
        <div className="min-h-screen bg-[#0D1117] text-stone-200 p-6 md:p-8">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center text-stone-200 hover:text-green-700 transition-colors duration-200"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back
            </button>

            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">
                                {icon === "trophy" ? "🏆" : icon === "globe" ? "🌐" : icon === "certificate" ? "🎓" : "🌐"}
                            </span>
                            <span className="text-green-700 font-semibold text-xl">
                                {value}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-[#1A1F26] rounded-xl p-6 shadow-lg">
                    {/* Image Carousel */}
                    {imageArray.length > 0 && (
                        <div className="relative mb-8">
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={imageArray[currentImageIndex]}
                                    alt={`${title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>

                            {imageArray.length > 1 && (
                                <>
                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
                                        {currentImageIndex + 1} / {imageArray.length}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    <div className="prose prose-invert max-w-none mb-8">
                        {displayDescription}
                    </div>
                    {/* Links Section */}
                    {links && Object.keys(links).length > 0 && (
                        <div className="border-t border-gray-800 pt-6 mt-6">
                            <h3 className="text-lg font-semibold mb-4">Resources & Links</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(links).map(([type, url]) => (
                                    <a
                                        key={type}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 px-4 py-3 bg-[#2D3748] hover:bg-[#374151] rounded-lg transition-colors duration-200"
                                    >
                                        <span className="text-green-700">
                                            {getLinkIcon(type)}
                                        </span>
                                        <span className="capitalize">{type}</span>
                                        <svg
                                            className="w-4 h-4 ml-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatDetail;
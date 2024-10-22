# ksu-rec-center-app
Kennesaw State University Rec Center Mobile App Redesign

Table of Contents

	•	Introduction
	•	System Overview
	•	Features
	•	Tech Stack
	•	Installation
	•	Usage
	•	Contributing
	•	License
	•	Contact

Introduction

Purpose

This project focuses on redesigning the KSU Rec Center app to enhance user experience and maximize accessibility. The current app lacks modern design and usability, leading to a decline in usage. Our redesigned app aims to address these issues with a clean, user-friendly interface that simplifies navigation and interaction.

Scope

The redesigned app will include features such as personal profiles, event registrations, facility information (maps and hours), and form submissions. It will be developed using modern technologies like React Native, with a secure backend to manage data and integrate APIs for real-time scheduling and notifications.

Audience

The app is designed for KSU students, faculty, and staff who frequently use the Rec Center facilities and seek a seamless way to interact with the services offered by the center.

System Overview

System Purpose

The goal of the new KSU Rec Center app is to provide a modern platform for users to easily access and engage with Rec Center services.

Architecture Overview

The app follows a client-server architecture where the mobile app serves as the client and interacts with a secure backend server that manages data and business logic.

Key Components

	•	Client (Mobile App):
	•	Developed using React Native for cross-platform functionality (iOS/Android).
	•	Users can register, log in, view events, and access Rec Center information.
	•	Includes features like form submissions, event registration, and facility maps.
	•	Backend Server:
	•	Manages user authentication, profile data, event handling, and facility information.
	•	Integrates with third-party APIs for real-time scheduling, notifications, and maps.
	•	Ensures secure communication with KSU’s cybersecurity protocols.
	•	Database:
	•	Stores user data, event information, and facility details securely.

Features

User Management:

	•	Account Creation: Users can sign up using their Owl Express credentials.
	•	User Authentication: Secure login with KSU’s DUO two-factor authentication.
	•	Profile Management: Users can edit their personal profiles and track activity.

Event Management:

	•	Event Listings: View upcoming events with details like date, time, and location.
	•	Event Registration: Register for events, receive notifications, and manage registrations.

Facility Information:

	•	Operating Hours: View hours for KSU’s Marietta and Kennesaw campus Rec Centers.
	•	Maps: Interactive maps with descriptions of Rec Center facilities and features.

Feedback and Support:

	•	Comment Card: Submit feedback with a thumbs-up/thumbs-down rating and comments.

User Notifications:

	•	In-App Notifications: Receive updates on events, classes, and important alerts.

Admin and Staff Roles:

	•	General Users: Can manage profiles, access facility information, register for events, and submit forms.
	•	Admins, Event Coordinators, and Facility Managers: Manage content, update facility info, and monitor user feedback and activity.

Tech Stack

	•	Frontend: React Native (cross-platform development for iOS and Android).
	•	Backend: Node.js, Express, Firebase for authentication, KSU API for data management.
	•	Database: MongoDB for secure storage of user profiles, events, and facility details.
	•	APIs: Integration with third-party services for maps and notifications (e.g., Google Maps API).
	•	Version Control: GitHub for code collaboration and version management.

Installation

To set up the project locally:

	1.	Clone the repository:

git clone https://github.com/username/ksu-rec-center-app.git


	2.	Navigate to the project directory:

cd ksu-rec-center-app


	3.	Install dependencies:

npm install


	4.	Set up environment variables:
	•	Create a .env file in the root directory and add Firebase and database credentials.
	5.	Run the app:

npm start



Usage

Once the app is running, users can:

	•	Register for and manage events.
	•	Access interactive maps for navigation.
	•	Submit forms and feedback.
	•	View gym hours and receive real-time notifications.

For more detailed instructions, refer to the [User Guide](link to user guide).

Contributing

Contributions are welcome! To contribute:

	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature-branch


	3.	Make changes and commit:

git commit -m "Add feature"


	4.	Push to the branch:

git push origin feature-branch


	5.	Open a pull request.

Please refer to our [Code of Conduct](link to code of conduct) for more details.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Contact

For any questions, reach out to the project team:

	•	Project Manager: [Name] (your.email@kennesaw.edu)
	•	GitHub Repository: GitHub Link

This version incorporates the technical and functional details outlined in the provided specifications, focusing on the architecture, features, and key components. You can further tailor it with specific GitHub links and developer details.

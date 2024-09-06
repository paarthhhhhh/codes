# MERN Voting Application
A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that enables users to participate in voting activities, cast votes for candidates, and provides an admin panel for managing candidates and fetching results.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User Features](#user-features)
  - [Admin Panel Features](#admin-panel-features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **User Features:**
  - User authentication: Sign up, log in, and log out securely.
  - Browse and participate in voting for candidates.
  - Real-time updates: View live results as votes are cast.

- **Admin Panel Features:**
  - Secure admin login.
  - Add new candidates with relevant information.
  - Delete candidates who are no longer participating.
  - Fetch voting results and candidate statistics.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Login As Admin

Aadhar Number : 123456789101
Password : admin
Role : Admin

## Configure Environment Variables 
Create a .env file in the server directory with the following content:

MONGO_URI=your-mongoDB-atlas-connection-string
PORT=5000
JWT_SECRET=anyRandomString


![Homepage](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/home.png)
![Login Screen](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/login.png)
![Register Screen](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/register.png)
![Admin Dashboard](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/admin-dashboard.png)
![Add New Candidate](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/new-candidate.png)
![Result](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/result.png)
![Voter Dashboard](https://github.com/varun-chandola/online-voting-system/blob/main/Screenshots/voter-dashboard.png)


# KOU Social Media Platform

**KOU.com.tr** is a modern social media web application designed exclusively for university students. The platform fosters connections, collaboration, and engagement among students through innovative features.

## Features

- **Posting**: Share updates, photos, and more with your university network.
- **Real-Time Chat**: Instant messaging for seamless communication.
- **Real-Time Whiteboard**: Collaborate on projects or brainstorm ideas interactively.
- **Tinder-like Features**: Connect with other students through mutual interests.

## Technology Stack

- **Frontend**: React, React Query
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/andullahhan/kou.com.tr.git
   cd kou.com.tr
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and set the required variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the Application**  
   - **Backend**:  
     ```bash
     npm run start:backend
     ```
   - **Frontend**:  
     ```bash
     npm run start:frontend
     ```

5. **Access the Application**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

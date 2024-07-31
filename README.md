# Queendom_frontend
A student life website for universities and colleges.

## Project Description
- **Project Type**: Self-developed Social Media Website 
- **Project Motivations**: When university students want to access the information, some information is posted on various platforms, including websites, social media, or even on bulletin boards spread around the campus. There needs to be one platform to gather all the unacademic information and make them
accessible to all students

## Project Summary
- **Completed Functionalities**:
- **Project Goal**: Build a stronger community, improve resource acquisition and exchange efficiency, and collect data to enhance school services.
- **Language Package**:<br>
**Frontend**: *Javascript, HTML, CSS*<br>
**Backend**: *Node.js, Django*<br>
  
## Project Feature
**[Innovative Features]**<br>
**1. Data-Driven Profile Management**
<div style="display: flex;">
  <img src="screenshot/profile_1.JPG" alt="User Profile 1" width="480">
</div>
Users can manage their profiles, including uploading profile pictures and updating bio, and personal information. Additionally, users can add their major to their profile, which helps push related club and career information. This feature enhances user engagement by allowing personalized experiences and providing relevant information based on their major.<br><br>

**2. Trending Topics**
<div style="display: flex;">
  <img src="screenshot/trend_1.JPG" alt="Trends 1" width="480" style="margin-right: 10px;">
  <img src="screenshot/trends_2.JPG" alt="Trends 2" width="480">
</div>
This feature displays the highest trending topics in real time, allowing users to see what is currently popular on the platform. It helps users stay updated with the most discussed topics and join relevant conversations.<br><br>

**3. Q&A Board**
<div style="display: flex;">
  <img src="screenshot/q_and_a_1.JPG" alt="Q and A 1" width="480" style="margin-right: 10px;">
  <img src="screenshot/q_and_a_2.JPG" alt="Q and A 2" width="480">
</div>
This feature provides a dedicated space for users to ask and answer questions. Also, by inviting school clubs and service providers to offer professional solutions, it will students' waiting time for email responses and help schools reduce the need to reply to repetitive emails.<br><br>

**[Normal Social Media Web Features]**<br>
**1. User Authentication**
<div style="display: flex;">
  <img src="screenshot/sign-in.png" alt="Sign In" width="240" style="margin-right: 10px;">
  <img src="screenshot/sign-up.png" alt="Sign Up" width="240" style="margin-right: 10px;">
  <img src="screenshot/forget-password.png" alt="Forget Password" width="240" style="margin-right: 10px;">
  <img src="screenshot/profile_2.JPG" alt="User Profile 2" width="240">
</div>
This feature allows users to securely sign up, log in, and log out of the application. Also, users can change their password on their profile page to ensure account security. It ensures that only authenticated users can access certain functionalities and protects user data.<br><br>

**2. Personal Homepage**
<div style="display: flex;">
  <img src="screenshot/home_page.PNG" alt="Home Page" width="480">
</div>
This feature provides users with a personal homepage where they can view their posts and their favorite posts from others. The search bar in the navbar allows users to search for keywords to locate specific posts. It helps users to keep track of their activity and easily access the content they like.<br><br>

**3. Block Functionality**
<div style="display: flex;">
  <img src="screenshot/block_1.JPG" alt="Block 1" width="480" style="margin-right: 10px;">
  <img src="screenshot/block_2.JPG" alt="Block 2" width="480">
</div>
This feature allows users to block other users, preventing them from seeing their posts or interacting with them.<br><br>

**4. Posting Content**
<div style="display: flex;">
  <img src="screenshot/post.JPG" alt="Post" width="480">
</div>
Users can create posts with text and images. This functionality supports rich media content, making the platform more engaging. Posts are displayed in a feed format where other users can interact with them.<br><br>

**5. Real-time Notifications**
<div style="display: flex;">
  <img src="screenshot/notification_1.PNG" alt="Notification 1" width="480" style="margin-right: 10px;">
  <img src="screenshot/notification_2.png" alt="Notification 2" width="480">
</div>
This feature provides users with real-time notifications for likes, comments, and new followers. It ensures users stay updated with interactions on their posts and activities on the platform.<br><br>

- **Environment Setup**:<br>
To run the project, you need to set up the following environment: <br>
**1. Install Python**<br>
If Python is not already installed on your system, follow these steps:<br>
**2. Download Python**：Go to the [official Python website](https://www.python.org/downloads/) and download the latest version of Python.<br>
**3. Install Python:** <br>
  **Windows:** Run the installer and make sure to check the box that says "Add Python to PATH" before proceeding with the installation. <br>
  **macOS:** You can use the installer package provided or install Python via Homebrew: (*brew install python*). <br>
**4. Create Virtual Environment:** <br>
*python -m venv venv* <br>
**5. Activate Virtual Environment:** <br>
**Windows:** venv\Scripts\activate <br>
 **macOS:** source venv/bin/activate <br>
**6. Install Django:** <br>
*pip install django* <br>
**7. Install Additional Dependencies:** <br>
*pip install dj-database-url* <br>
*pip install -r requirements.txt* <br>
**8. Run Django Development Server:** <br>
*python manage.py runserver* <br>

## Iterative Design
- **Unit Test**:
Focused on testing user authentication, post-creation, and real-time notifications. Additionally, 10 users tested the application for 5 rounds, providing valuable feedback for further improvements.
- **Improvements**:<br>
Added tooltips and hover effects for **better user guidance**.<br>
Resolved issues with the **comment** system not **updating in real-time**.<br>
Fixed **broken links** and **navigation** issues.<br>
Corrected problems with **user profile** updates **not saving** properly.<br>
Added a feature to **allow users** to report bugs and **provide feedback** directly within the app.<br>
**Improved the efficiency** of **real-time notifications** by reducing the frequency of server calls.<br>
Added a **drag-and-drop images upload** feature in the POST function to enhance user experience.

## Video Demo
[![Watch the video](screenshot/queendom_youtube_video.PNG)](https://www.youtube.com/watch?v=SeSH-yGvLrM)

 * video link: https://www.youtube.com/watch?v=SeSH-yGvLrM




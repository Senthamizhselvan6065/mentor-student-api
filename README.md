<h3> Assigning Mentor and Students with Database</h3>


1. Write API to create Mentor
2. Write API to create Student
3. Write API to Assign a student to Mentor
      > Select one mentor and Add multiple Student 
      > A student who has a mentor should not be shown in List
4. Write API to Assign or Change Mentor for particular Student
      > Select One Student and Assign one Mentor
5. Write API to show all students for a particular mentor
6. Write an API to show the previously assigned mentor for a particular student.

-------------------------------------------------

### BASE_URL - <a>http://utl/api/v1/</a>

## Mentor's Api

<pre>GET || GET ALL MENTORS : <a href="https://URL/api/v1/mentors">/mentors </a></pre>

<pre>POST || CRESTE A MENTOR : <a href="https://URL/api/v1/mentor">/mentor </a></pre>

<pre>GET || GET A SPECIFIC MENTOR : <a href="https://URL/api/v1/mentor/:mentorId">/mentor/:mentorId</a></pre>

--------------------------------------------------

# Student Api's

<pre>GET || GET ALL STUDENTS : <a href="https://URL/api/v1/students"> /students </a></pre>

<pre>POST || CREATE A STUDENT : <a href="https://URL/api/v1/student"> /student </a></pre>

<b>To not assign mentor and get list of students </b>

<pre>GET          <a href="https://URL/api/v1/no-mentors">/no-mentors</a></pre>

<b> To Assign or Change Mentor for particular student </b>
  > Pass Mentor ID in request Body and Pass Student ID in request Params

<pre>PATCH        <a href="https://URL/api/v1/assign-mentor/">/assign-mentor/:student-id</a> </pre>

<b> To Assign mentor for multiple students </b>
  > Pass Mentor ID and Student ID as list in request body
 
<pre>PATCH        <a href="https://URL/api/v1/assign-mentor-students">/assign-mentor-students</a> </pre>

<b> To get all students of particular Mentor

<pre>GET          <a href="https://URL/api/v1/mentor-students/:mentorId">/mentor-students/:mentorId </a></pre>

------------------------------------------------
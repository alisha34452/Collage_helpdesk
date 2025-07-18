import React from "react";

import "../css/resources.css";
const Resources = () => {
  return (
    <div>
      <div>
        {/* Student Resources Section  */}
        <section className="student-resources" id="resources">
          <h2>
            <i className="fas fa-toolbox"></i> Student Resources
          </h2>
          <div className="resource-grid">
            <a href="#notice" className="resource-card" data-detail-id="notice">
              <i className="fas fa-bullhorn"></i>
              <h3>Notice Board</h3>
              <p>Stay updated with latest announcements and college news.</p>
            </a>

            <a
              href="#counseling"
              className="resource-card"
              data-detail-id="counseling"
            >
              <i className="fas fa-user-friends"></i>
              <h3>Counseling Services</h3>
              <p>Academic, personal, and mental health support.</p>
            </a>

            <a
              href="#library"
              className="resource-card"
              data-detail-id="library"
            >
              <i className="fas fa-book-reader"></i>
              <h3>Library Services</h3>
              <p>Access books, journals, digital resources, and study zones.</p>
            </a>

            <a href="#career" className="resource-card" data-detail-id="career">
              <i className="fas fa-briefcase"></i>
              <h3>Career Services</h3>
              <p>Placements, internships, resume help, and training.</p>
            </a>

            <a href="#sports" className="resource-card" data-detail-id="sports">
              <i className="fas fa-futbol"></i>
              <h3>Sports Facilities</h3>
              <p>Indoor, outdoor games, gym, and yoga sessions.</p>
            </a>

            <a href="#health" className="resource-card" data-detail-id="health">
              <i className="fas fa-clinic-medical"></i>
              <h3>Health Services</h3>
              <p>Medical rooms, first-aid, and hospital tie-ups.</p>
            </a>

            <a
              href="#calendar"
              className="resource-card"
              data-detail-id="calendar"
            >
              <i className="fas fa-calendar-alt"></i>
              <h3>Academic Calendar</h3>
              <p>Semester dates, holidays, and academic schedules.</p>
            </a>

            <a
              href="#timetable"
              className="resource-card"
              data-detail-id="timetable"
            >
              <i className="fas fa-clock"></i>
              <h3>Timetable</h3>
              <p>Daily schedules for classes, labs, and electives.</p>
            </a>

            <a href="#" className="resource-card" data-detail-id="exam">
              <i className="fas fa-pen-fancy"></i>
              <h3>Exam Schedule</h3>
              <p>Internal, midterm, and final exam date sheets.</p>
            </a>

            <a href="#exam" className="resource-card" data-detail-id="syllabus">
              <i className="fas fa-book"></i>
              <h3>Syllabus & Curriculum</h3>
              <p>AICTE-approved programs and semester-wise syllabus.</p>
            </a>

            <a
              href="#syllabus"
              className="resource-card"
              data-detail-id="alumni"
            >
              <i className="fas fa-users"></i>
              <h3>Alumni Network</h3>
              <p>Connect with successful alumni and mentors.</p>
            </a>
          </div>
        </section>

        {/* Detailed Sections (Scroll Targets)  */}
        <section id="notice" className="resource-detail">
          <h2>
            <i className="fas fa-bullhorn"></i> Notice Board
          </h2>
          <p>
            Access all official announcements, circulars, exam updates, events,
            and placement drives. Updated regularly for your convenience.
          </p>
        </section>

        <section id="counseling" className="resource-detail">
          <h2>
            <i className="fas fa-user-friends"></i> Counseling Services
          </h2>
          <p>
            We offer academic and personal counseling. Mental health support,
            mentorship, stress relief sessions, and guidance are available for
            all students.
          </p>
        </section>

        <section id="library" className="resource-detail">
          <h2>
            <i className="fas fa-book-reader"></i> Library Services
          </h2>
          <p>
            Our library includes over 50,000 volumes, journals, magazines, and
            access to e-resources like IEEE, Springer, and J-Gate. Study rooms
            and digital library terminals are available.
          </p>
        </section>

        <section id="career" className="resource-detail">
          <h2>
            <i className="fas fa-briefcase"></i> Career Services
          </h2>
          <p>
            The T&P Cell conducts placement drives, resume workshops, mock
            interviews, and internships. Our top recruiters include Infosys,
            Wipro, TCS, and HCL.
          </p>
        </section>

        <section id="sports" className="resource-detail">
          <h2>
            <i className="fas fa-futbol"></i> Sports Facilities
          </h2>
          <p>
            Facilities include cricket, football, volleyball, table tennis, gym,
            yoga center, and annual sports meet. Students are encouraged to
            participate in inter-college tournaments.
          </p>
        </section>

        <section id="health" className="resource-detail">
          <h2>
            <i className="fas fa-clinic-medical"></i> Health Services
          </h2>
          <p>
            Our medical room is equipped for basic care and emergencies. We have
            tie-ups with nearby hospitals and organize free health camps &
            vaccination drives.
          </p>
        </section>

        <section id="calendar" className="resource-detail">
          <h2>
            <i className="fas fa-calendar-alt"></i> Academic Calendar
          </h2>
          <p>
            Download the current academic calendar with semester start/end
            dates, holidays, internal exams, and project submission timelines.
          </p>
          <img
            src="2025_holiday.jpg"
            alt=""
            srcset=""
            className="rounded-2xl"
          />
        </section>

        <section id="timetable" className="resource-detail">
          <h2>
            <i className="fas fa-clock"></i> Timetable
          </h2>
          <p>
            Check class schedules department-wise, semester-wise. Includes
            theory, labs, and elective course timings.
          </p>
        </section>

        <section id="exam" className="resource-detail">
          <h2>
            <i className="fas fa-pen-fancy"></i> Exam Schedule
          </h2>
          <p>
            Stay informed about internal assessments, mid-terms, end-sem exams,
            and practicals. Hall ticket details and admit card links included.
          </p>
        </section>

        <section id="syllabus" className="resource-detail">
          <h2>
            <i className="fas fa-book"></i> Syllabus & Curriculum
          </h2>
          <p>
            Get the latest AICTE-approved syllabus for all programs.
            Semester-wise curriculum PDFs are available for download.
          </p>
        </section>

        <section id="alumni" className="resource-detail">
          <h2>
            <i className="fas fa-users"></i> Alumni Network
          </h2>
          <p>
            Connect with our alumni on LinkedIn, attend talks, and access
            mentorship and job referrals. Alumni success stories are regularly
            shared here.
          </p>
        </section>
      </div>

      <script src="/src/script/script.js"></script>
      <script src="/src/script/res.js"></script>
    </div>
  );
};

export default Resources;

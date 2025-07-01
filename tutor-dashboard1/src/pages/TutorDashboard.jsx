import React from "react";
import Header from "../components/Header/Header";
import UpcomingSessions from "../components/UpcomingSessions/UpcomingSessions";
import ActiveStudentsTable from "../components/ActiveStudentsTable/ActiveStudentsTable";
import RecentSessions from "../components/RecentSessions/RecentSessions";
import {
  tutorName,
  upcomingSessions,
  activeStudents,
  recentSessions,
} from "../data/mockData"; // Assuming you have mock data in this file
import "../styles/index.css";

function TutorDashboard() {
  return (
    <div className="dashboard-container">
      <Header tutorName={tutorName} />
      <div className="section">
        <UpcomingSessions sessions={upcomingSessions} />
      </div>
      <div className="section">
        <ActiveStudentsTable students={activeStudents} />
      </div>
      <div className="section">
        {/* <RecentSessions sessions={recentSessions} /> */}
        <RecentSessions sessions={upcomingSessions} />
      </div>
    </div>
  );
}

export default TutorDashboard;
import React from "react";
import Card from "../../shear/Card/Card";
import Button from "../../shear/Button/Button";
import Avatar from "../../shear/Avatar/Avatar";
import "./UpcomingSessions.css";

// Example: You may want to update your mockData.js to include these extra fields for each session
// subject, subjectDetail, gradeLevel, gradeColor, time, status, tutor {name, avatar, age, grade}, isActive

function UpcomingSessions({ sessions }) {
  return (
    <>
      <h2 className="upcoming-title">Upcoming Active Sessions</h2>
      <Card style={{ borderRadius: "18px", padding: "2rem" }}>
        {/* <h2 className="upcoming-title">Upcoming Active Sessions</h2> */}
        <div className="upcoming-list">
          {sessions.map((session) => (
            <div className="upcoming-item" key={session.id}>
              <div className="upcoming-left">
                <div className="upcoming-subject">{session.subject}</div>
                <div className="upcoming-detail">
                  <span className="upcoming-link">{session.subjectDetail}</span>
                </div>
                <div
                  className="upcoming-grade"
                  style={{ color: session.gradeColor }}
                >
                  Grade Level : {session.gradeLevel}
                </div>
                <div className="upcoming-time-row">
                  <span className="upcoming-time-icon">🕒</span>
                  <span className="upcoming-time-text">{session.time}</span>
                </div>
                <div className="upcoming-actions">
                  <span className="upcoming-status upcoming-status-upcoming">
                    Upcoming
                  </span>
                  <button className="upcoming-edit-btn">✏️ Edit</button>
                  <span
                    className={`upcoming-status ${
                      session.isActive
                        ? "upcoming-status-active"
                        : "upcoming-status-inactive"
                    }`}
                  >
                    {session.isActive ? "Active" : "In Active"}
                  </span>
                </div>
              </div>
              <div className="upcoming-right">
                <div className="upcoming-tutor-info-block">
                  <Avatar src={session.tutor.avatar} alt={session.tutor.name} />
                  <div>
                    <div className="upcoming-tutor-name">
                      {session.tutor.name}
                    </div>
                    <div className="upcoming-tutor-info">
                      Age: {session.tutor.age}
                    </div>
                    <div className="upcoming-tutor-info">
                      Grade: {session.tutor.grade}
                    </div>
                  </div>
                </div>
                <Button
                  className="upcoming-join-btn"
                  style={{ background: "#ff9800" }}
                >
                  Join Now
                </Button>
              </div>
            </div>
          ))}
          {sessions.length === 0 && <div>No upcoming sessions.</div>}
        </div>
      </Card>
    </>
  );
}

export default UpcomingSessions;

// import React from "react";
// import Card from "./common/Card";
// import Button from "./common/Button";
// import "./UpcomingSessions.css";

// function UpcomingSessions({ sessions }) {
//   return (
//     <Card>
//       <h2>Upcoming Active Sessions</h2>
//       <div className="upcoming-list">
//         {sessions.map(session => (
//           <div className="upcoming-item" key={session.id}>
//             <div>
//               <strong>{session.subject}</strong> | Group {session.group} | Room {session.room}
//               <div className="upcoming-time">{new Date(session.time).toLocaleString()}</div>
//             </div>
//             <Button>Join</Button>
//           </div>
//         ))}
//         {sessions.length === 0 && <div>No upcoming sessions.</div>}
//       </div>
//     </Card>
//   );
// }

// export default UpcomingSessions;

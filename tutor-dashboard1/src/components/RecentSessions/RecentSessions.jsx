import React from "react";
import Card from "../../shear/Card/Card";
import Avatar from "../../shear/Avatar/Avatar";
import Button from "../../shear/Button/Button";
import "./RecentSessions.css";

function RecentSessions({ sessions }) {
  return (
    <>
      <h2>Recent Session</h2>

      <Card>
        <div className="recent-list">
          {sessions.map((session) => (
            <div className="recent-session-card" key={session.id}>
              <div className="recent-session-left">
                <div className="recent-session-title">{session.subject}</div>
                <div className="recent-session-detail">
                  {session.subjectDetail}
                </div>
                <div className="recent-session-grade">
                  Grade :{" "}
                  <span style={{ color: session.gradeColor }}>
                    {session.gradeLevel}
                  </span>
                </div>
                <div className="recent-session-time-row">
                  <span className="recent-session-time-icon">🕒</span>
                  <span className="recent-session-time">{session.time}</span>
                </div>
                <div className="recent-session-status-row">
                  <span className="recent-session-status upcoming">
                    Upcoming
                  </span>
                  <span className="recent-session-status inactive">
                    In Active
                  </span>
                </div>
              </div>
              <div className="recent-session-right">
                <div className="recent-session-tutor-info-block">
                  <Avatar src={session.tutor.avatar} alt={session.tutor.name} />
                  <div>
                    <div className="recent-session-tutor-name">
                      {session.tutor.name}
                    </div>
                    <div className="recent-session-tutor-info">
                      Age: {session.tutor.age}
                    </div>
                    <div className="recent-session-tutor-info">
                      Grade: {session.tutor.grade}
                    </div>
                  </div>
                </div>
                <Button className="recent-session-publish-btn">Publish</Button>
              </div>
            </div>
          ))}
          {sessions.length === 0 && <div>No recent sessions.</div>}
        </div>
      </Card>
    </>
  );
}

export default RecentSessions;

// import React from "react";
// import Card from "./common/Card";
// import Avatar from "./common/Avatar";
// import Button from "./common/Button";
// import "./RecentSessions.css";

// function RecentSessions({ sessions }) {
//   return (
//     <Card>
//       <h2>Recent Session</h2>
//       <div className="recent-list">
//         {sessions.map(session => (
//           <div className="recent-session-card" key={session.id}>
//             <div className="recent-session-left">
//               <div className="recent-session-title">{session.subject}</div>
//               <div className="recent-session-detail">{session.subjectDetail}</div>
//               <div className="recent-session-grade">
//                 Grade : <span style={{ color: session.gradeColor }}>{session.gradeLevel}</span>
//               </div>
//               <div className="recent-session-time-row">
//                 <span className="recent-session-time-icon">🕒</span>
//                 <span className="recent-session-time">{session.time}</span>
//               </div>
//               <div className="recent-session-status-row">
//                 <span className="recent-session-status upcoming">Upcoming</span>
//                 <span className="recent-session-status inactive">In Active</span>
//               </div>
//             </div>
//             <div className="recent-session-right">
//               <div className="recent-session-tutor">
//                 <Avatar src={session.tutor.avatar} alt={session.tutor.name} />
//                 <div>
//                   <div className="recent-session-tutor-name">{session.tutor.name}</div>
//                   <div className="recent-session-tutor-info">
//                     Age: {session.tutor.age}<br />
//                     Grade: {session.tutor.grade}
//                   </div>
//                 </div>
//               </div>
//               <Button className="recent-session-publish-btn">Publish</Button>
//             </div>
//           </div>
//         ))}
//         {sessions.length === 0 && <div>No recent sessions.</div>}
//       </div>
//     </Card>
//   );
// }

// export default RecentSessions;
// import React from "react";
// import Card from "./common/Card";
// import "./RecentSessions.css";

// function RecentSessions({ sessions }) {
//   return (
//     <Card>
//       <h2>Recent Sessions</h2>
//       <ul className="recent-list">
//         {sessions.map(session => (
//           <li key={session.id} className="recent-item">
//             <div>
//               <strong>{session.subject}</strong> | Group {session.group} | Room {session.room}
//             </div>
//             <div className="recent-date">{session.date}</div>
//           </li>
//         ))}
//         {sessions.length === 0 && <li>No recent sessions.</li>}
//       </ul>
//     </Card>
//   );
// }

// export default RecentSessions;

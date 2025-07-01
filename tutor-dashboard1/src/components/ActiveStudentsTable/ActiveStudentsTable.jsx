import React, { useState } from "react";
import Card from "../../shear/Card/Card";
import Avatar from "../../shear/Avatar/Avatar";
import FilterDropdown from "../../shear/FilterDropdown/FilterDropdown";
import "./ActiveStudentsTable.css";
import "../../shear/Table/Table.css";

const filterOptions = ["Active", "All"];

// Pagination constants
const PAGE_SIZE = 2;

function ActiveStudentsTable({ students }) {
  const [filter, setFilter] = useState("Active");
  const [page, setPage] = useState(1);

  // For demo, filter does nothing. You can implement logic as needed.
  const filteredStudents = students;

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / PAGE_SIZE);
  const paginatedStudents = filteredStudents.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <>
      <div className="active-table-header">
        <h2>Active Students</h2>

        <FilterDropdown
          value={filter}
          options={filterOptions}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <Card>
        {/* <div className="active-table-header">
        <FilterDropdown
          value={filter}
          options={filterOptions}
          onChange={e => setFilter(e.target.value)}
        />
      </div> */}
        <table className="table active-students-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Student</th>
              <th>Session Days & Hours</th>
              <th>Upcoming inactive session</th>
              <th>Upcoming active session</th>
            </tr>
          </thead>
          <tbody>
            {paginatedStudents.map((student) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="student-info">
                    <Avatar src={student.avatar} alt={student.name} />
                    <div>
                      <div className="student-name">{student.name}</div>
                      <div className="student-meta">
                        {student.age || "12 yr"}, Grade-{student.grade || "3"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Mon 3PM - 4 PM </div>
                    <div>Tue 3PM - 4 PM</div>
                    <div>Sat 10AM - 11 AM</div>
                  </div>
                </td>
                <td>
                  <span className="inactive-session">14</span>
                </td>
                <td>
                  <span className="active-session">2</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && <div>No active students.</div>}
        <div className="active-pagination">
          <button
            className="active-pagination-btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            &#8592; Previous
          </button>
          <div className="active-pagination-pages">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                className={`active-pagination-page${
                  page === idx + 1 ? " active" : ""
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            className="active-pagination-btn"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next &#8594;
          </button>
        </div>
      </Card>
    </>
  );
}

export default ActiveStudentsTable;

// import React, { useState } from "react";
// import Card from "./common/Card";
// import Avatar from "./common/Avatar";
// import FilterDropdown from "./common/FilterDropdown";
// import "./ActiveStudentsTable.css";
// import "./common/Table.css";

// const filterOptions = ["Active", "All"];

// function ActiveStudentsTable({ students }) {
//   const [filter, setFilter] = useState("Active");

//   // For demo, filter does nothing. You can implement logic as needed.
//   const filteredStudents = students;

//   return (
//     <Card>
//       <div className="active-table-header">
//         <h2>Active Students</h2>
//         <FilterDropdown
//           value={filter}
//           options={filterOptions}
//           onChange={e => setFilter(e.target.value)}
//         />
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Student</th>
//             <th>Group & Room</th>
//             <th>Session Time</th>
//             <th>Upcoming</th>
//             <th>Live</th>
//             <th>Missing</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.map(student => (
//             <tr key={student.id}>
//               <td>
//                 <div className="student-info">
//                   <Avatar src={student.avatar} alt={student.name} />
//                   {student.name}
//                 </div>
//               </td>
//               <td>
//                 Group {student.group} <br /> Room {student.room}
//               </td>
//               <td>{student.sessionTime}</td>
//               <td>{student.upcoming}</td>
//               <td>{student.live}</td>
//               <td>{student.missing}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {filteredStudents.length === 0 && <div>No active students.</div>}
//     </Card>
//   );
// }

// export default ActiveStudentsTable;

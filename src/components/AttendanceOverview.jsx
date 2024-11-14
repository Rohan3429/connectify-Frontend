import { useState, useEffect } from 'react';

function AttendanceOverview() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetchAttendanceRecords();
  }, []);

  const fetchAttendanceRecords = async () => {
    const response = await fetch('http://localhost:5000/attendance/records');
    const data = await response.json();
    setAttendanceRecords(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance Records</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Subject</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record._id}>
                <td className="border px-4 py-2">
                  {new Date(record.date).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{record.studentName}</td>
                <td className="border px-4 py-2">
                  <span className={`px-2 py-1 rounded ${
                    record.status === 'present' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="border px-4 py-2">{record.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceOverview;

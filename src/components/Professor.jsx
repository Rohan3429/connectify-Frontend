import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Professor() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceStats, setAttendanceStats] = useState({
    totalStudents: 0,
    presentToday: 0,
    absentToday: 0
  });

  useEffect(() => {
    fetchStudents();
    fetchAttendanceStats();

    socket.on('attendanceUpdate', (data) => {
      setAttendance(prev => ({...prev, [data.studentId]: data.status}));
      fetchAttendanceStats(); // Refresh stats when attendance is marked
    });

    return () => socket.disconnect();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setStudents(data.filter(user => user.role === 'student'));
  };

  const fetchAttendanceStats = async () => {
    const response = await fetch('http://localhost:5000/attendance/stats');
    const data = await response.json();
    setAttendanceStats(data);
  };

  const markAttendance = async (studentId, status) => {
    const data = {
      studentId,
      professorId: localStorage.getItem('userId'),
      status,
      subject: 'Mathematics' // You can make this dynamic based on professor's subject
    };

    await fetch('http://localhost:5000/attendance/mark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    socket.emit('markAttendance', data);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Professor Dashboard</h1>
        <button 
          onClick={() => setShowAttendance(!showAttendance)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showAttendance ? 'Hide Attendance' : 'Mark Attendance'}
        </button>
      </div>

      {/* Attendance Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-2xl">{attendanceStats.totalStudents}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Present Today</h3>
          <p className="text-2xl">{attendanceStats.presentToday}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Absent Today</h3>
          <p className="text-2xl">{attendanceStats.absentToday}</p>
        </div>
      </div>

      {/* Attendance Marking Section */}
      {showAttendance && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>
          <div className="space-y-4">
            {students.map(student => (
              <div key={student._id} className="flex items-center justify-between border-b pb-2">
                <span>{student.fullName}</span>
                <div className="space-x-2">
                  <button 
                    onClick={() => markAttendance(student._id, 'present')}
                    className={`px-3 py-1 rounded ${
                      attendance[student._id] === 'present' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-green-100 hover:bg-green-200'
                    }`}
                  >
                    Present
                  </button>
                  <button 
                    onClick={() => markAttendance(student._id, 'absent')}
                    className={`px-3 py-1 rounded ${
                      attendance[student._id] === 'absent' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-red-100 hover:bg-red-200'
                    }`}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Professor;

// Add this function inside the Professor component
const generateSampleData = async () => {
  await fetch('http://localhost:5000/attendance/generate-sample', {
    method: 'POST'
  });
  fetchAttendanceStats(); // Refresh the stats after generating data
};

// Add this button in the JSX, perhaps near the other buttons
<button 
  onClick={generateSampleData}
  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
>
  Generate Sample Data
</button>

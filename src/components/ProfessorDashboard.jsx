import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfessorDashboard() {
  const [attendanceStats, setAttendanceStats] = useState({
    totalStudents: 0,
    presentToday: 0,
    absentToday: 0
  });
  const navigate = useNavigate();

  // Fetch attendance overview
  useEffect(() => {
    fetchAttendanceStats();
  }, []);

  const fetchAttendanceStats = async () => {
    const response = await fetch('http://localhost:5000/attendance/stats');
    const data = await response.json();
    setAttendanceStats(data);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Professor Dashboard</h1>
        <button 
          onClick={() => navigate('/attendance/mark')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Mark Attendance
        </button>
      </div>

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

      <div className="text-center">
        <button 
          onClick={() => navigate('/attendance/overview')}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          View Full Attendance Records
        </button>
      </div>
    </div>
  );
}

export default ProfessorDashboard;

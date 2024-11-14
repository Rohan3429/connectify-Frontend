import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function AttendanceMarking() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    socket.on('attendanceUpdate', (data) => {
      setAttendance(prev => ({...prev, [data.studentId]: data.status}));
    });

    return () => socket.disconnect();
  }, []);

  const markAttendance = (studentId, status) => {
    const data = {
      studentId,
      professorId: localStorage.getItem('userId'),
      status,
      subject: 'Mathematics'
    };

    fetch('http://localhost:5000/attendance/mark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    socket.emit('markAttendance', data);
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      {students.map(student => (
        <div key={student._id}>
          <span>{student.fullName}</span>
          <button onClick={() => markAttendance(student._id, 'present')}>Present</button>
          <button onClick={() => markAttendance(student._id, 'absent')}>Absent</button>
        </div>
      ))}
    </div>
  );
}

export default AttendanceMarking;

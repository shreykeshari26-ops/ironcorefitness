import React from 'react';
import './Timetable.css';

const schedule = [
  { time: '06:00 AM', classes: ['Yoga', '-', 'HIIT', '-', 'Cardio', 'Yoga'] },
  { time: '08:00 AM', classes: ['-', 'Zumba', 'Cardio', 'Yoga', 'HIIT', '-'] },
  { time: '05:00 PM', classes: ['HIIT', 'Cardio', '-', 'Zumba', '-', 'HIIT'] },
  { time: '07:00 PM', classes: ['Zumba', '-', 'Yoga', 'Cardio', 'Zumba', 'Cardio'] },
];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Timetable = () => {
  return (
    <section className="timetable" id="timetable">
      <div className="container">
        <div className="section-header">
          <h2>CLASS <span className="text-accent">TIMETABLE</span></h2>
          <p>Find a class that fits your schedule.</p>
        </div>
        
        <div className="table-responsive">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                {days.map(day => <th key={day}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, idx) => (
                <tr key={idx}>
                  <td className="time-col">{row.time}</td>
                  {row.classes.map((cls, cIdx) => (
                    <td key={cIdx} className={cls !== '-' ? 'active-class' : ''}>
                      {cls !== '-' ? <span className="class-name">{cls}</span> : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timetable;

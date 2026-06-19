import React, { useState } from "react";

function Calendar({ events = [] }) {
  const [date, setDate] = useState(new Date());

  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const prevMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const nextMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));

  const days = [];
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  // empty cells before start of month
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(new Date(date.getFullYear(), date.getMonth(), d));

  const isToday = (d) => {
    if (!d) return false;
    const t = new Date();
    return d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth() && d.getDate() === t.getDate();
  };

  const eventsByDate = events.reduce((acc, ev) => {
    if (!ev.date) return acc;
    acc[ev.date] = acc[ev.date] || [];
    acc[ev.date].push(ev);
    return acc;
  }, {});

  return (
    <div className="calendar">
      <div className="calendar-header text-center">
        <button className="btn btn-default" onClick={prevMonth}>&lt;</button>
        <strong style={{margin: '0 12px'}}>{date.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</strong>
        <button className="btn btn-default" onClick={nextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-row calendar-weekdays">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
            <div key={d} className="calendar-cell calendar-weekday">{d}</div>
          ))}
        </div>

        <div className="calendar-row calendar-days">
          {days.map((d, i) => (
            <div key={i} className={`calendar-cell calendar-day ${isToday(d) ? 'today' : ''}`}>
              {d ? (
                <>
                  <div className="date-number">{d.getDate()}</div>
                  <div className="events">
                    {eventsByDate[d.toISOString().slice(0,10)] && eventsByDate[d.toISOString().slice(0,10)].map((ev, idx) => (
                      <div key={idx} className="event">{ev.title}</div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Schedule = (props) => {
  const events = props.data || [];

  return (
    <div id="schedule">
      <div className="container">
        <div className="section-title text-center">
          <h2>Schedule</h2>
          <p>Browse upcoming classes, workshops, and events.</p>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <Calendar events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

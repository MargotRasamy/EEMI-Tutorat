import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }

  render() {
    return (
        //<FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
        <FullCalendar
        defaultView="dayGridMonth"
        dateClick={this.handleDateClick} 
        plugins={[ dayGridPlugin, interactionPlugin ]} 
        //plugins={calendarPlugins}
        events={[
          { title: 'event 1', date: '2020-06-22' },
          { title: 'event 2', date: '2020-06-23' }
        ]}
        />
    );
  }

}
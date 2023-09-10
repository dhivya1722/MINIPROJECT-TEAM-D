import React, { useState, useEffect } from "react";
import "../Styles/Eventcard.css";

interface Event {
  event_name: string;
  event_date: string;
  event_description: string;
  event_venue: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);


  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  useEffect(() => {

    fetch(`http://localhost:8081/events?page=${currentPage}`)
      .then((response) => response.json())
      .then((data: Event[]) => {
        if (data.length === 0) {
          // If no data is returned, reset to the first page (cyclic behavior)
          setIsLastPage(true);
          // alert("No more details available");
        } else {
          setIsLastPage(false);
          setEvents(data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  return (
    <div className="container">
      <div className="headers">
        <h1>Upcoming Events</h1>
      </div>
      {events.length > 0 && (
        <div className="event_details">
          <strong>Event Name:</strong> {events[0].event_name}
          <br />
          <strong>Start Date:</strong> {events[0].event_date}
          <br />
          <strong>Description:</strong> {events[0].event_description}
          <br />
          <strong>Venue:</strong> {events[0].event_venue}
        </div>
      )}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default EventList;

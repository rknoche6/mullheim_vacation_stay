import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";

const CalendarComponent=()=> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, onChange] = useState(new Date());

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileDisabled({ date, view }) {
    // Disable tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of disabled dates
      return data.find((dDate) => isSameDay(dDate, date));
    }
  }
  let today= new Date()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://api.apify.com/v2/acts/dtrungtin~airbnb-scraper/runs/last/dataset/items?token=apify_api_7asbDQIJMMsbk23ygS6KkQyKV5rbtL1JX2om"
        );
        let temp = [];
        response.map((e) =>
          e.calendar.map((n) => {
            if (!n["available"]) {
              temp.push(n["date"]);
            }
          })
        );
        setData(temp);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} tileDisabled={tileDisabled} selectRange={true} minDate={new Date(2022,3,13)}/>
    </div>
  );
}
export default CalendarComponent
import { useState } from "react";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);

  const getWeatherDataFromApi = async () => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = "metric";
    let lang = "tr";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;
  };
  return (
    <section className="main">
      <form>
        <input
          type="text"
          placeholder="Search for a city"
          autoFocus
          value={searchText || ""}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
        <span className="msg"></span>
      </form>
      <div className="container">
        <ul className="cities"></ul>
      </div>
    </section>
  );
};

export default Main;

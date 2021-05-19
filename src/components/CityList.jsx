function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1>CityList</h1>

      <ul>
        {cities.map((item, index) => {
          return <a
            className="weather-element"
            href={"https://www.google.com/search?q=" + item + " weather"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li key={index}>{item}</li>
          </a>
        })}
      </ul>
    </div>
  );
}

export default CityList;
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import Card from "./components/card";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://api.jikan.moe/v4/anime");
        setMovies(resp.data.data);
        setFilterData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const myValue = e.target.value;
    setQuery(myValue);
    console.log(myValue);

    if (movies) {
      const myData = movies.filter((oneMovie) =>
        oneMovie.title.toLowerCase().includes(myValue.toLowerCase())
      );
      setFilterData(myData);
    }
  };

  return (
    <div className="bg-[#121829] w-full min-h-screen px-[50px] py-[10px]">
      <NavBar />
      <HeroSection />
      <div className="border-2 border-color-[#00000] items-center bg-inherit w-[344px] flex h-[34px] px-2 gap-[3px] mt-[60px] gap-5">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#475069"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#475069"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search Movies or TV Shows"
          className="border-none outline-none bg-transparent w-full text-white"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {!filterData ? (
          <Preloader />
        ) : (
          <div className="w-full grid mt-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-between">
            {filterData.map((singleMovie) => (
              <Card
                key={singleMovie.mal_id}
                title={singleMovie.title}
                image={singleMovie.images.jpg.image_url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

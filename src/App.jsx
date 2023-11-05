import { useEffect, useState } from 'react'
import axios from 'axios'
import './assets/css.css'

function App() {

  const [data, setData] = useState({})

  const fetch = async () => {
    try {
      let res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=138167c6c7c4034d8e2ea5d6459686b0`)
      setData(res.data)
    }

    catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    // Make an Axios API call when the component is mounted
    axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=138167c6c7c4034d8e2ea5d6459686b0`)
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>
      <div className="app">
        <div className="nav">
          <div className='left'>
          <a href="#">MovieDb App</a>
          <a href="#">Trending</a>
          </div>
          <div className='right'>
            <input type="text" name="" id="" placeholder='Movie Search' />
          <button>Search</button>
          </div>
        </div>

        <div className="cards">
          {
            data.results && data.results.map((val) => {
              return (
                <>
                  {
                    <div className="card">
                      <img src={`https://image.tmdb.org/t/p/w300/${val.poster_path}`} alt="" />
                      <button>View More</button>
                    </div>
                  }
                </>
              )
            }
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
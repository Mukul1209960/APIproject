import React , {useState} from 'react';
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import MovieBox from '../Components/MovieBox';
import MovieChip from '../Components/MovieChip';
import { useNavigate } from 'react-router-dom';



const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img className="width={160} height={120}" src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img className="width={160} height={120}" src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img className="width={160} height={120}" src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img className="width={160} height={120}" src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img className="width={160} height={120}" src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img className="width={160} height={120}" src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img className="width={160} height={120}" src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img className="width={160} height={120}" src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img className="width={160} height={120}" src={western} />,
  },
];

const Movies = () => {
  const [selected,setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () =>{
    if(selected.length < 3){
      return ;
    }
    else {
      localStorage.setItem("MovieInfo",JSON.stringify(selected));
      navigate("/Display");
    }

  }
  console.log(selected);
  return (<>
    <div className="grid grid-col sm:grid-col-2 lg:grid-col-3 gap-5  rounded-lg" style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
    {genres.map((genres,index)=>{
      return( <>
        <MovieBox key={index} data={genres} selected={selected} setSelected={setSelected} />
        </>
  );
})};
</div>
<div className="flex flex-wrap gap-5 mt-10">
{selected.map((item,index)=>{
  return <MovieChip key={index} data={item} selected={selected} setSelected={setSelected} />
})};
</div>
{selected.length < 3 ? <p className="text-red-500">Minimum 3 categories required</p> : <> </>}
<button onClick={handleClick} className="border border-neutral-600 bg-green-500 text-white">Next Page</button>
</>

  )};

  

export default Movies

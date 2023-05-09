import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import {useNavigate} from "react-router-dom";
import ReactGA from "react-ga"

function Homepage() {

  useEffect(() => {
     ReactGA.initialize('')

     ReactGA.pageview('/')
  },[])
 
  const navigate = useNavigate();
  const goToArray = () => {
    navigate("/Array");
  };

  const navigate2 = useNavigate();
  const goToString = () => {
    navigate2("/String");
  };

  const navigate3 = useNavigate();
  const goToMatrix = () => {
    navigate3("/Matrix");
  };

  const navigate4 = useNavigate();
  const goToSearchsort = () => {
    navigate4("/Searchsort");
  };

  const navigate5 = useNavigate();
  const goToStackqueue = () => {
    navigate5("/Stackqueue");
  };

  const navigate6 = useNavigate();
  const goToLinkedlist = () => {
    navigate6("/Linkedlist");
  };

  const [cards] = useState([
    {
      index: '1',
      title: "Array",
      Text: "Total Questions: 22"
      ,Text1: <button className='buttonn' onClick={goToArray} >Start Now</button>
    },
    {
      index: '2',
      title: "String",
      Text: "Total Questions: 24"
      ,Text1: <button className='buttonn' onClick={goToString}>Start Now</button> 
    },
    {
      index: '3',
      title: "Search & Sort",
      Text: "Total Questions: 24"
      ,Text1: <button className='buttonn' onClick={goToSearchsort}>Start Now</button>
    },
    {
      index: '4',
      title: "Stack & Queue",
      Text: "Total Questions: 24"
      ,Text1: <button className='buttonn' onClick={goToStackqueue}>Start Now</button>
    },
    {
      index: '5',
      title: "Linked List",
      Text: "Total Questions: 20"
      ,Text1: <button className='buttonn' onClick={goToLinkedlist}>Start Now</button>   
    },
    {
      index: '6',
      title: "Matrix",
      Text: "Total Questions: 15"
      ,Text1: <button className='buttonn' onClick={goToMatrix}>Start Now</button>
    },
  ])

  return (
    <div className='Homepagee'>
      <section>
        <div className='containerr'>
          <div className="heading">
          <h1>DSA TRACKER DASHBOARD</h1>
           </div>
           <div className='cards'>
            {
              cards.map((card, i) => (
            
            <div key={i} className='card'>
              <h2>{card.index}</h2>
              <h4>{card.title}</h4>
              <p>{card.Text}</p>
             <div className='button'> {card.Text1}</div>
           </div>
            ))
          }
      </div>
      </div> 
      </section>
    </div>
  );

}
export default Homepage

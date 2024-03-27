import { useState } from "react";
import { sculptureList } from "../SculptureListConst";
export default function Gallery(){

    const [index, setIndex]=useState(0);
    const [showMore, setShowMore] =useState(false);


    function handleClickNext(){
        if(index<sculptureList.length)
            setIndex(index+1);
            setShowMore(false);
    }

    function handleClickPrevious(){
        if(index>0)
            setIndex(index-1);
            setShowMore(false);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture=sculptureList[index];


    return (
        <>
          <button onClick={handleClickNext}>
            Next
          </button>
          <button onClick={handleClickPrevious}>
            Previous
          </button>
          <button style={{backgroundColor: 'red'}} onClick={handleMoreClick}>
            {showMore?'Hide':'Show'} Details
          </button>
          <h2>
            <i>{sculpture.name} </i> 
            by {sculpture.artist}
          </h2>
          <h3>  
            ({index + 1} of {sculptureList.length})
          </h3>

          
          {showMore && <p>{sculpture.description}</p>}
          <img 
            src={sculpture.url} 
            alt={sculpture.alt}
          />
         
        </>
      );

}
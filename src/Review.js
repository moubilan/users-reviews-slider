import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const person = people[index];
  const {id, name, job, text, image} = person

  console.log('reload')

  function nextReview() {
    setIndex( oldIndex => {
      return ( oldIndex < people.length-1 ) ? oldIndex + 1 : oldIndex = 0
    })
  }

  function prevReview() {
    setIndex( oldIndex => {
      return (oldIndex !== 0) ? oldIndex - 1 : oldIndex = people.length-1  
    })
  }

  function surprise() {
    let number;
    do {
      number = Math.floor(Math.random() * people.length);
    } while (number === index);

    setIndex(number)
  }

  return (
    <article key={id} className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt='face'/>
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>           
      <div className='button-container'>
        <button className='prev-btn' onClick={prevReview}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextReview}><FaChevronRight/></button>
      </div>
      <button className='random-btn' onClick={surprise}>Surprise me</button>
    </article>
  );
};

export default Review;

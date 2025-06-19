import React from 'react';
import './Reading.css';
// Add images for the new books if you have them
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import thinkAgain from '../images/think_again.jpg'; // Add this image path
import hiddenPotential from '../images/hidden_potential.jpg'; // Add this image path
import startWithWhy from '../images/start_with_why.jpg'; // Add this image path
import leadersEatLast from '../images/leaders_eat_last.jpg'; // Add this image path
import infiniteGame from '../images/infinite_game.jpg'; // Add this image path

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy.",
  },
  {
    title: "Think Again",
    author: "Adam Grant",
    imgSrc: thinkAgain,
    description: "A thought-provoking book on the power of rethinking and changing your mind.",
  },
  {
    title: "Hidden Potential",
    author: "Adam Grant",
    imgSrc: hiddenPotential,
    description: "A deep dive into discovering and unlocking your hidden potential.",
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    imgSrc: startWithWhy,
    description: "An insightful look at the importance of understanding the 'why' behind everything.",
  },
  {
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    imgSrc: leadersEatLast,
    description: "A book about leadership and creating environments where people feel safe and valued.",
  },
  {
    title: "The Infinite Game",
    author: "Simon Sinek",
    imgSrc: infiniteGame,
    description: "A book that explores the idea of playing an infinite game to create long-term success.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;

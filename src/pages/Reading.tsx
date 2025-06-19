import React from 'react';
import './Reading.css';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: "https://jamesclear.com/wp-content/uploads/2018/10/atomic-habits-book-cover.jpg",
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: "https://www.richdad.com/sites/default/files/styles/large/public/2020-10/richdadbookcover.jpg?itok=Z3mYh7Wq",
    description: "An eye-opener on wealth, assets, and financial literacy.",
  },
  {
    title: "Think Again",
    author: "Adam Grant",
    imgSrc: "https://adamgrant.net/wp-content/uploads/2021/02/ThinkAgain_9781984878106.jpg",
    description: "A thought-provoking book on the power of rethinking and changing your mind.",
  },
  {
    title: "Hidden Potential",
    author: "Adam Grant",
    imgSrc: "https://www.penguin.co.nz/sites/default/files/styles/large/public/2023-01/hidden_potential_9780753560068.jpg?itok=F2vD2QfG",
    description: "A deep dive into discovering and unlocking your hidden potential.",
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    imgSrc: "https://simonsinek.com/wp-content/uploads/2019/10/StartWithWhy-BookCover.jpg",
    description: "An insightful look at the importance of understanding the 'why' behind everything.",
  },
  {
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    imgSrc: "https://simonsinek.com/wp-content/uploads/2013/10/LeadersEatLast-BookCover.jpg",
    description: "A book about leadership and creating environments where people feel safe and valued.",
  },
  {
    title: "The Infinite Game",
    author: "Simon Sinek",
    imgSrc: "https://simonsinek.com/wp-content/uploads/2019/10/InfiniteGame-BookCover.jpg",
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

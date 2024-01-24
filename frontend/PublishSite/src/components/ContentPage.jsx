import React from 'react';
import './styles/ContentPage.css'; 

const ContentPage = () => {
  return (
    <div className="content-page">
      <div className="box">
        <h2>Box 1</h2>
        <PoemContainer />
      </div>
      <div className="box">
        <h2>Box 2</h2>
        <BookContainer />
      </div>
      <div className="box">
        <h2>Box 3</h2>
        <StoryContainer />
      </div>
      <div className="box">
        <h2>Box 4</h2>
        <WordsContainer />
      </div>
    </div>
  );
};

export default ContentPage;

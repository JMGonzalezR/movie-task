import React from 'react';
import './App.css';
import HeaderMovie from './components/HeaderMovie'
import data from './utils/data'
import Slider from './components/Slider/index'

function App() {
  return (
    <div className="App">
      <HeaderMovie data={data.headerMovieInfo}/>
      <div className="body-app">
      <Slider categoryTitle="Category Title">
          {data.movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
      
        <Slider categoryTitle="Movie Title">
          {data.moviesTitle.map(movie => (
            <Slider.ItemMovieTitle movie={movie} key={movie.id}>item1</Slider.ItemMovieTitle>
          ))}
        </Slider>

        <Slider  categoryTitle="Title">
          {data.people.map(movie => (
            <Slider.ItemActors movie={movie} key={movie.id}>item1</Slider.ItemActors>
          ))}
        </Slider>
        
        <div className="footer">
        <div className="line-divider"/>
          <div className="flexbox row">
            <div className="flexbox column footer-section">
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sem ac tortor hendrerit fringilla. Phasellus quis turpis et elit lacinia efficitur. Phasellus viverra purus vel est tincidunt consectetur vitae eu dui.</div>
                </div>
                
            </div>
            <div className="flexbox column footer-section">
                <div className="flexbox row footer-row">
                    <div>Lorem</div>
                    <div>English (Dolby Digit</div>
                </div>
                
            </div>
            <div className="flexbox column footer-section">
                <div className="flexbox row footer-row">
                    <div><i class="far fa-closed-captioning"></i></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sem ac tortor hendrerit fringilla. Phasellus quis turpis et elit lacinia efficitur. Phasellus viverra purus vel est tincidunt consectetur vitae eu dui.</div>
                </div>
                <div className="flexbox row footer-row">
                    <div><i class="fas fa-audio-description"></i></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sem ac tortor hendrerit fringilla. Phasellus quis turpis et elit lacinia efficitur. Phasellus viverra purus vel est tincidunt consectetur vitae eu dui.</div>
                </div>
                
            </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

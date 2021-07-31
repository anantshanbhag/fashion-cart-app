import React from 'react';
import { Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TestHomePage = props => {
  console.log(props);
  let isButton = true;
  return (
    <div>
      {isButton
        ? <button onClick={() => props.history.push("/topics")}>Topics </button>
        : <Link to="/topics">Topics</Link>
      }
      <h1>HOME PAGE </h1>
    </div>
  );
};

const TopicsList = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE </h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE : {props.match.params.topicId}</h1>
    </div>
  );
};

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  let isTestHomePage = false;
  // isTestHomePage = true;
  return (
    <div>
      <Route exact path="/" component={isTestHomePage ? TestHomePage : HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/hats" component={HatsPage} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;

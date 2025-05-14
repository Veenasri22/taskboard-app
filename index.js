// pages/index.js
import React from 'react';
import Board from "../components/Board";

export default function Home() {
  return <Board />;
}


const Home = () => {
  return (
    <div>
      <h1>Welcome to the Taskboard App!</h1>
    </div>
  );
};

export default Home;

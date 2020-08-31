import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
            <div className="intro">
              <h2>Create Your Own Pull or vote with just fiew clicks and share the url with your audience to vote there</h2>
              <Link to="/signup"><button className="btn btn-light">Create Pull or Vote</button></Link>
              <div><a href="https://github.com/dsnehasish74"><i className="fab fa-github-square fa-3x"></i></a></div>
            </div>
    </div>
  );
}

export default Home;
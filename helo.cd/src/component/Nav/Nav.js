import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <div>
                <div className="NavBar">
                    <p className="home"></p>
                    <Link to="/Dashboard">
                        <button>Home</button>
                    </Link>
                    <p className="newPost"></p>
                    <Link to="/Post/:Postid">
                        <button>New Post</button>
                    </Link>
                    <p className="logout"></p>
                    <Link to="/">
                        <button>logout</button>
                    </Link>
                </div>
        </div>
    )
 }
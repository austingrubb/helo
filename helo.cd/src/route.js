import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Post from './component/Post/Post';
import Form from './component/Form/Form';

export default function routes(){
    return <Switch>
        <Route exact path= '/' component={Auth}/>
        <Route path= '/Dashboard' component={Dashboard}/>
        <Route path='/Post/:Postid' component={Post}/>
        <Route path='/New' component={Form}/>
        {/* <Route path='/Post' component={Post}/> */}
    </Switch>
}
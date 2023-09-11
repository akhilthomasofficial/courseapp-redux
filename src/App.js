// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar'; 
import Home from './Home'; 
import CourseList from './CourseList'; 
import CourseDetail from './CourseDetail'; 
import Footer from './Footer'; 
import Enquiries from './Enquiries';


function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={CourseList} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/enquiries" component={Enquiries} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

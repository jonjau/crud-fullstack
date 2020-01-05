import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';

class InstructorApp extends Component {
  render() {
    return (
      // empty brackets is syntactic sugar for React.Fragment
      <>
        <h1>Instructor Application</h1>
        <ListCoursesComponent />
      </>
    );
  }
}

export default InstructorApp;
import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';

class ListCoursesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      message: null
    }
    this.refreshCourses = this.refreshCourses.bind(this);
    this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourses("lorem ipsum")
      .then(response => {
        console.log(response);
        this.setState({ courses: response.data });
      })
      .catch(error => console.log(error));
  }

  deleteCourseClicked(id) {
    CourseDataService.deleteCourse("lorem ipsum", id)
      .then(response =>{
        this.setState({ message: `Deleted course ${id}.` });
        this.refreshCourses();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <h3>All Courses</h3>
        { this.state.message &&
          <div className="alert alert-success">
            {this.state.message}
          </div>
        }
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.courses.map(
                  course =>
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.description}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteCourseClicked(course.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListCoursesComponent;
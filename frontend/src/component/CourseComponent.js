import React, { Component } from "react";
import CourseDataService from "../service/CourseDataService";
import { Formik, Form, Field, ErrorMessage } from 'formik';

class CourseComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    CourseDataService.retrieveCourse("loremipsum", this.state.id)
      .then(response => this.setState({
        description: response.data.description
      }));
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { description, id } = this.state;

    return (
      <div>
        <h3>Course</h3>
        <div className="container">
          <Formik
            initialValues={{ id, description }}
            onSubmit={this.onSubmit}
          >
            {
              props => (
                <Form>
                  <fieldset className="form-group">
                    <label>ID</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="id" disabled
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Description</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="description"
                    />
                  </fieldset>
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
    );
  }
}

export default CourseComponent;
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { name, breed, age, sex }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create Form</h3>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>Name</label>
          <input type="text" className="form-control" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>
        <div className={`form-group ${breed.touched && breed.invalid ? 'has-danger' : ''}`}>
          <label>Breed</label>
          <input type="text" className="form-control" {...breed} />
          <div className="text-help">
            {breed.touched ? breed.error : ''}
          </div>
        </div>
        <div className={`form-group ${age.touched && age.invalid ? 'has-danger' : ''}`}>
          <label>Age</label>
          <input type="text" className="form-control" {...age} />
          <div className="text-help">
            {age.touched ? age.error : ''}
          </div>
        </div>
        <div className={`form-group ${sex.touched && sex.invalid ? 'has-danger' : ''}`}>
          <label>Gender</label>
          <input type="text" className="form-control" {...sex} />
          <div className="text-help">
            {sex.touched ? sex.error : ''}
          </div>
        </div>


        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.breed) {
    errors.breed = 'Enter breed';
  }

  if (!values.age) {
    errors.age = 'Enter kittens age';
  }

  if (!values.sex) {
    errors.sex = 'Enter kitten gender';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'breed', 'age', 'sex'],
  validate
}, null, { createPost })(PostsNew);

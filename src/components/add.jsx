import React from 'react';
import Navbar from './Navbar';
import Form from './../common/Form';
import Joi from 'joi-browser';

class Add extends Form {
  file = React.createRef();
  state = {
    data: { name: '', price: '', description: '' },
    errors: {},
    productGenre: ['Clothes', 'Electronics', 'Games', 'Furniture', 'Other'],
  };

  schema = {
    name: Joi.string().required().label('Name'),
    price: Joi.number().integer().required().label('Price'),
    description: Joi.string().required(),
  };

  doSubmit = () => {
    this.props.history.push({
      pathname: '/products',
      state: this.state.data,
    });
  };

  ValidateSingleInput = (e) => {
    let _validFileExtensions = [
      '.jpg',
      '.jpeg',
      '.bmp',
      '.gif',
      '.png',
      '.webp',
    ];
    if (e.target.type === 'file') {
      let sFileName = e.target.value;
      if (sFileName.length > 0) {
        let blnValid = false;
        for (let j = 0; j < _validFileExtensions.length; j++) {
          let sCurExtension = _validFileExtensions[j];
          let wordHolder = sFileName
            .substr(
              sFileName.length - sCurExtension.length,
              sCurExtension.length
            )
            .toLowerCase();
          if (wordHolder === sCurExtension.toLowerCase()) {
            blnValid = true;
            this.file.current.innerText = 'Image Uploaded Successfully.';
            return;
          }
        }
        if (!blnValid) {
          alert(
            'Sorry, ' +
              sFileName +
              ' is invalid, allowed extensions are: ' +
              _validFileExtensions.join(', ')
          );
          e.target.value = '';
          this.file.current.value = '';
          return false;
        }
      }
    }
    return true;
  };

  render() {
    return (
      <div className='add-page pb-5'>
        <Navbar />
        <hr className='w-75 mx-auto mb-4' />
        <form
          className='add-product text-center w-50 mx-auto'
          onSubmit={this.handleSubmit}
        >
          <header className='fs-1'>Enter Your product's Info</header>
          {this.renderInput('name', 'Name')}
          {this.renderInput('price', 'Price', 'number')}
          <select
            name='genre'
            className='rounded-pill fs-4 my-3 p-1 d-block mx-auto pointer'
          >
            {this.state.productGenre.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <label
            ref={this.file}
            className='rounded-pill fs-4 my-3 p-1 d-block mx-auto pointer bg-white p-2'
          >
            <input
              type='file'
              className='d-none'
              onChange={this.ValidateSingleInput}
            />
            <span className='me-3 text-danger'>Click Here</span>
            To Choose image for your Product
          </label>
          {this.renderInput('description', 'Description')}
          {this.renderButton('Add')}
        </form>
      </div>
    );
  }
}

export default Add;

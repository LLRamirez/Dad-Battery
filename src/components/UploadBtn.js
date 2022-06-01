import React from 'react';
import Form from 'react-bootstrap/Form';

export default class UploadBtn extends React.Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
      super(props)
      this.state = {
          file: [null]
      }
      this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
      this.uploadFiles = this.uploadFiles.bind(this)
  }
  uploadMultipleFiles(e) {
      this.fileObj.push(e.target.files)
      for (let i = 0; i < this.fileObj[0].length; i++) {
          this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
      }
      this.setState({ file: this.fileArray })
  }
  uploadFiles(e) {
      e.preventDefault()
      console.log(this.state.file)
  }
  render() {
      return (
          <form>
          <Form.Label class="labelTitleB">Battery Image</Form.Label>
              <div className="form-group">
                  <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
              </div>
              <div className="form-group multi-preview">
                  {(this.fileArray || []).map(url => (
                      <img src={url} alt="..." />
                  ))}
              </div>
              <div className='upBtnContainer'>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
              </div>
          </form>
      )
  }
}
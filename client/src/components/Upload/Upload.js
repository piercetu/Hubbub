import React, { Component } from 'react';
import FileUpload from 'react-file-base64';
import axios from 'axios';

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };
    }

    handleSubmit = file => {
        axios.post('http://localhost:8000/hubbub/analyze-audio', 
        { 
            file: file.base64,
            time: Date.now()
        },{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                alert(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        return (
            <div>
                <FileUpload 
                    multiple={ false }
                    onDone={this.handleSubmit}
                />
            </div>
        );
    }
}
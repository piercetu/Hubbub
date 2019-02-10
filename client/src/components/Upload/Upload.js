import React, { Component } from 'react';
import FileUpload from 'react-file-base64';
import axios from 'axios';
import { db, storage } from '../../config/firebase.js';

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };
    }

    handleSubmit = file => {
        console.log(Object.keys(file))
        this.uploadFile(file.file);

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

    uploadFile = file => {
        // Create a root reference.
        var storageRef = storage.ref();

        // Create a reference to audios directory.
        var audioFolderRef = storageRef.child('audios/KILLME.mp3');

        // Upload file onto firebase.
        audioFolderRef.put(file).then(function(snapshot) {
            console.log('Uploaded a file!');
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
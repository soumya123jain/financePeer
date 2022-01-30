import axios from 'axios';
import React, { useEffect } from 'react';

const ImportFromFileBodyComponent = () => {
    let fileReader;
    
    const handleFileRead = (e) => {
      const content = fileReader.result;
      console.log(content)
      
      // … do something with the 'content' …
    };
    
    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };
    
    return <div className='upload-expense'>
      <input
        type='file'
        id='file'
        className='input-file'
        accept='.csv'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
    </div>;
  };
  
  export default ImportFromFileBodyComponent;
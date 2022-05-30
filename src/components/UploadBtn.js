import React, { useState, useRef } from 'react';

const UploadBtn = () => {

    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

    const inputRef = useRef(null);
  
    const handleUpload = () => {
        // inputRef?.click();
      };

    const handleDisplayFileDetails = () => {
      return '';
    };

    return (
      <div className="m-3">
        <label className="mx-3">Choose file:</label>
        <input
          ref={inputRef}
          onChange={handleDisplayFileDetails}
          className="d-none"
          type="file"
        />

        <button
          onClick={handleUpload}
          className={`btn btn-outline-${
            uploadedFileName ? "success" : "primary"
          }`}
        >
          {uploadedFileName ? uploadedFileName : "Upload"}
        </button>
      </div>
    );
}

export default UploadBtn;
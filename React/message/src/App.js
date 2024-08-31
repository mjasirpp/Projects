import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { uploadMessage } from './services/allApi';
import View from './View';

function App() {
  // const [uploadingMessage,setuploadingMessage] = useState([])
  const [message,setMessage] = useState("")

  const handleUpload = async () => {
    if (message.length === 0) {
        alert("No Message to upload");
        return;
    }
    try {
        console.log('uploading message before upload:', message);
        const response = await uploadMessage({ message });
        console.log('Response from uploadTask:', response);

        if (response.status >= 200 && response.status < 300) {
            alert("Message Added");
            setMessage([]);
        } else {
            alert("Upload failed with status: " + response.status);
        }
    } catch (error) {
        console.error('Error during upload:', error);
        alert('Failed to add Message');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
        setMessage(message);
    }

};
  return (
    <div className="App">
      <h4 className='mt-4' style={{textAlign:"center"}}>Give a Message to the world</h4>
      <Form style={{textAlign:"center"}} onSubmit={handleSubmit}>
                <Form.Control
                    style={{textAlign:"center"}}
                    className="mb-2"
                    placeholder="Enter your message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
            </Form>
            <div style={{textAlign:"center"}}>
              <Button onClick={handleUpload} className="mb-2">
                  Add Your Message
              </Button>
            </div>

            <div style={{alignItems:"center"}}>
              <View message={message} />
            </div>
    </div>
  );
}

export default App;
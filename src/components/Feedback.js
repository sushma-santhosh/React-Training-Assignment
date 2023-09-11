import {useLocation} from "react-router-dom" 
import { useState } from "react";
//import Form from "react-bootstrap/Form"
import Alert from 'react-bootstrap/Alert';

const Feedback = ()=>{
    const location = useLocation();
    const [feedback,setFeedback] = useState(location?.state?.value);
    console.log(location);
    const handleFeedback=(e)=>{
        setFeedback(e.target.value);
        console.log(feedback);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        setFeedback("");
        //alert("Feedback submitted successfully!");
         return (
             <Alert variant="success">
              <Alert.Heading>Sucess</Alert.Heading>
               <p>
                 Feedback submitted successfully!
               </p>
             </Alert>
           );
    }
    return(
        // <Form>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //     <Form.Label for="feedback">Feedback:</Form.Label>
        //     <Form.Control as="textarea" value={feedback} onChange={(e)=>{handleFeedback(e)}} rows={3} cols="30"/>
        //     </Form.Group>
        //     <br/><button type="submit" onClick={onSubmit}>Submit</button>  
        // </Form>
        <>
        <form>
            <label>Feedback:</label>
            <textarea value={feedback} onChange={(e)=>{handleFeedback(e)}} rows="3" cols="30"></textarea>
            <br/><button type="submit" onClick={onSubmit}>Submit</button>
        </form>
        {/* <Alert variant="success">
              <Alert.Heading>Sucess</Alert.Heading>
              <p>
                Feedback submitted successfully!
              </p>
            </Alert> */}
</>
        
    )
}

export default Feedback;
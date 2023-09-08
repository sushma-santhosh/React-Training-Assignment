import {useLocation} from "react-router-dom" 
import { useState } from "react";
import Form from "react-bootstrap/Form"

const Feedback = (state)=>{
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
        alert("Feedback submitted successfully!");
    }
    return(
        <Form>
            <label for="feedback">Feedback: </label>
            <textarea id="GetFeedback" value={feedback} onChange={(e)=>{handleFeedback(e)}} rows="4" cols="30"></textarea>
            <br/><button onClick={onSubmit}>Submit</button>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label for="feedback">Feedback:</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    )
}

export default Feedback;
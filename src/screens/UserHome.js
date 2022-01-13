import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button} from 'react-bootstrap';

const UserHome = () => {
    let [ model, setModel ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9090/data/bookDetails`)
        .then(response => {
            setModel([...response.data])
            console.log(model)
        })
        // eslint-disable-next-line
    },[setModel])

    return (
        <div>
            <h1>User HOME</h1> 
            <Link to='/userhome/uploadbook'>
                <Button>Upload Book</Button>
            </Link>
               
                <Row>
                {/* Traverse through received Object            */}
                { model &&
                    model.map((item, index) => {
                        // Print data Object
                        console.log(item)

                        return(
                            <div key={index}>
                            <hr /> 
                            <Col >
                                <Card className='my-3 p-3 rounded' >
                                {/* 5. Traversing through the object data field which contains all the field and values */}
                                {item && Object.entries(item.data).map((f, index) => 
                                    
                                    {
                                        //Print Keys
                                        console.log(f[0]);
                                        return(
                                            <Card.Text key={index} as='h6'>
                                                {f[0]}: {f[1]}
                                            </Card.Text>
                                        )  
                                    })}
                                </Card>
                            </Col>
                            </div>
                        )
                    
                    })
                }
                </Row>
        </div>
    )
}

export default UserHome;





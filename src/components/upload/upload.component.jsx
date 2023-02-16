import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from 'jquery';
import Sidebar from "../sidebar/Sidebar";


export default function Upload() {


    return (
        <div>
            
            <div className="m-3">
                <div className="d-flex align-items-center bd-highlight">
                    <div className="box w-25"><Sidebar/></div>
                    <div className="d-grid align-items-center gap-2 box w-100 p-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="file" />
                            </Form.Group>
                        </Form>

                        <Button variant="primary" size="lg">
                            Upload
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
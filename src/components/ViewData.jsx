import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import './ViewData.css'

function ViewData() {
    const [state, setstate] = useState([])
    const [dat, setdat] = useState([])
    const details = (index) => {
        var temp = state.map((obj, i) => {
            console.log(obj);
            if (index == i) {
                setdat(obj)
                return ({})
            }
        })
    }
    setInterval(btn, 20000)
    function btn() {
        if (document.getElementById('slct').value === "On") {
            axios.get('https://randomuser.me/api/').then(response => {
                console.log(response.data);
                setstate([
                    ...state,
                    {
                        gender: response.data.results[0].gender,
                        tname: response.data.results[0].name.title,
                        fname: response.data.results[0].name.first,
                        lname: response.data.results[0].name.last,
                        age: response.data.results[0].dob.age,
                        mimage: response.data.results[0].picture.medium,
                        cell: response.data.results[0].cell,
                        email: response.data.results[0].email,
                        picture: response.data.results[0].picture.large,
                        dob: response.data.results[0].dob.date,
                        nationality: response.data.results[0].location.country,
                        locCity: response.data.results[0].location.city,
                        locState: response.data.results[0].location.state,
                        locPostcode: response.data.results[0].location.postcode,
                        sname: response.data.results[0].location.street.name,
                        snumber: response.data.results[0].location.street.number
                    }
                ])
            })
        }
    }
    return (
        <div>
            <div className="container">
                <div className='topdiv'>
                    <button className='btn btn-success mr-3' onClick={btn}>Add data</button>
                    <select className='btn btn-primary' name="" id="slct">
                        <option value="On">ON</option>
                        <option value="Off">OFF</option>
                    </select><br />
                    <i>Click 'Add data' or turn button to 'ON' to add data.<br />Turning button 'ON' will fetch data automatically every 20s.</i>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {
                                state.map((obj, index) => {
                                    return (
                                        <div>
                                            <div className="card lcard">
                                                <img className="card-img-top limg" src={obj.mimage} alt="Image unavailable" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{obj.tname}.{obj.fname} {obj.lname}</h4>
                                                    <h6 className="card-text">Age : {obj.age}</h6>
                                                    <h6 className='card-text'>{obj.gender}</h6>
                                                    <a href="#" onClick={() => { details(index) }} className="btn btn-primary">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="card rcard">
                                <h2 className='h'>Details : </h2>
                                <img className="card-img-top" src={dat.picture} alt="Select a person to view following details" />
                                <div className="card-body">
                                    <h4 className="card-title">Name : {dat.tname}.{dat.fname} {dat.lname}</h4>
                                    <h6 className="card-text">Age : {dat.age}</h6>
                                    <h6 className="card-text">Gender : {dat.gender}</h6>
                                    <h6 className="card-text">DOB : {dat.dob}</h6>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Contact Number : <a href="">{dat.cell}</a></li>
                                    <li className="list-group-item">Email-Id : <a href="">{dat.email}</a></li>
                                </ul>
                                <h5 className='mt-3'>Residential address : </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Country : {dat.nationality}</li>
                                    <li className="list-group-item">State : {dat.locState}</li>
                                    <li className="list-group-item">City : {dat.locCity}</li>
                                    <li className="list-group-item">Street name : {dat.sname}</li>
                                    <li className="list-group-item">Street Number : {dat.snumber}</li>
                                    <li className="list-group-item">PostCode : {dat.locPostcode}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewData
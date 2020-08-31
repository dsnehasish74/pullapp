import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux'
import { db } from '../config/fbConfig'
import {Link} from 'react-router-dom'



function Result(props) {
    const [order, Setorder] = useState([])

    useEffect(() => {

        console.log(props.uid);
        db.collection("pull").where("userId", "==", props.uid).get()
            .then(snapshot => {
                const orders = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    orders.push(data)
                })
                Setorder(orders)
                console.log(orders)
            })
    }, []);

    function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
      }


    return (
        <div className="Result">
            <Container maxWidth="md">
                <div className="header_tab">
                    <h4>{order.map((item) => (<span>{item.title}</span>))}</h4>
                    <div><input type="text" value={"https://pullapp-eeb7f.web.app/vote/"+props.uid} id="myInput"/>
                            <button onClick={myFunction} className="copybtn">Copy url</button></div>
                    <button  type="submit" onClick={()=>window.location.reload(false)} className="btn btn-danger">refresh</button>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <div>
                            {
                                // console.log(order.pull)
                                order.map((item) => (
                                    item.pull.map((i) => {
                                        console.log(item[i]);                                        return (
                                            <div className="list" key={i}>
                                                <div >{i}</div>
                                                <div>{item[i]}</div>
                                            </div>
                                        )
                                    })
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div>
                    <Link to="/home"><button className="col-12 mt-5 btn btn-primary">Create new pull+</button></Link>
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        uid: state.firebase.auth.uid
    }
}


export default connect(mapStateToProps)(Result);
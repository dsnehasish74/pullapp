import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { db } from '../config/fbConfig';
import {connect} from 'react-redux'
import {Addvote} from '../store/action/addpull'



function Vote(props) {
    const [order, Setorder] = useState([])
    const [vote,setvote]=useState("");
    const id = props.match.params.id;
    useEffect(() => {


        db.collection("pull").where("userId", "==", id).get()
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

    const handleChange = (e) => {
        console.log(e.target.value);
        setvote(e.target.value);
        props.Addvote(e.target.value,id);
    }

    return (
        <div className="vote">
            <Container maxWidth="sm">
            {!vote? <div>
                <h4>{order.map((item) => (
                    <span key={item.title}>{item.title}</span>
                ))}</h4>
               
                {
                    // console.log(order.pull)
                    order.map((item) => (
                        item.pull.map((i) => (
                         
                                    <div className="input-group-text" key={i}>
                                        <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleChange} value={i} />
                                        <label>
                                            {i}
                                        </label>
                                    </div>
                        ))
                    ))
                }
                </div>
                :<div>You have successfully Updated the vote
                    
                    </div>}
            </Container>
        </div>
    );
}
  const mapDispatchToProps=(dispatch)=>{
    return{
      Addvote:(vote,userId)=>{dispatch(Addvote(vote,userId))}
    }
  }

export default connect(null,mapDispatchToProps)(Vote);
import React,{useState} from 'react';
import { Container, TextField } from '@material-ui/core';
import {connect} from 'react-redux'
import {Addpull} from '../store/action/addpull'


function Main(props) {
    const [inputElement,updateInputElement]=useState("");
    const [element,updateElement]=useState([]);
    const [title,updateTitle]=useState("");
    
    const handelChange=(e)=>{
        updateInputElement(e.target.value);
    };

    const handeltitleChange=(e)=>{
        updateTitle(e.target.value);
    };

    const addItem=(e)=>{
        e.preventDefault();
        updateElement([...element,inputElement]);
        console.log(element);
    };
    
    const CreatePull=(e)=>{
        e.preventDefault();
        const userId=props.userId;
        props.Addpull(title,element,userId);
        props.history.push('/result')
    }
    return (
        <div className="Main">
            <Container maxWidth="sm">
                <h4>Hi!!! Create your own pull.</h4>
                <form className="main-input">
                <TextField
                            label="Title of the Pull"
                            style={{ margin: 8 }}
                            placeholder="Enter your pull title"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handeltitleChange}
                        />
                    <div className="input-item">
                        <div id="Pullitem">
                            
                            <TextField
                            label="Pull item"
                            style={{ margin: 8 }}
                            placeholder="Enter Your Pull item"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handelChange}
                        />
                        </div>
                        <button className="add" onClick={addItem} >+</button>
                    </div>
                    <button className="create-pull" onClick={CreatePull}>Create Pull</button>
                </form>
                        <div>
                            Selected Pull items
                            {element.map((ele)=>(
                            
                                <span className="pullitem" key={ele}>{ele}</span>
                        ))}</div>
            </Container>
        </div>
    );
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        userId:state.firebase.auth.uid
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      Addpull:(title,element,userId)=>{dispatch(Addpull(title,element,userId))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Main);
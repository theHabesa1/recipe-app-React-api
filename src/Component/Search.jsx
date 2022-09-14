import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/' + input)


    };

  return (
    
        <FormStyle onSubmit={submitHandler}>
             <div>
                <FaSearch></FaSearch>
                <input 
                onChange={(e)=>{
                    setInput(e.target.value);
                }}
                type="text"
                value={input} />
            </div>
        </FormStyle>
    
  )

}

const FormStyle = styled.form`
    margin:3rem -2rem;


    div{
        width:90%;
        height:0%;
        position:relative;
        
    }
    input {
        border: none;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 65%, rgba(27,25,25,1) 100%, rgba(255,253,253,1) 100%);
        font-size:1.5rem;
        padding: 1rem 3rem;
        color:black;
        border:none;
        border-radius:1rem;
        outline:none;
        width:100%;
        height:20%;
    }

    svg {
        position:absolute;
        top:50%;
        left:0%;
        transfrom:translate (100%, -50%)
        color:white;

    }
`

export default Search
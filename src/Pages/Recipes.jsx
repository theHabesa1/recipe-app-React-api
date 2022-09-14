import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipes() {

    let params = useParams();
    const [details,setDetails] = useState({});
    const [activeTab, setActiveTab] =useState('instructions');

    useEffect(() => {
    const fetchDetails = async () =>{
        const data =await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

   
        fetchDetails();

    },[params.name])
    return  (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt=""/>
            </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => {
                setActiveTab('instructions');
            }}>Instraction</Button> 

            <Button className={activeTab === 'ingridiants' ? 'active' : ''}onClick={() => {
                setActiveTab('ingridiants');
            }}
            >Ingridiants</Button>
        {activeTab === 'instructions' && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>

        )}
        
        {activeTab === 'ingridiants' && (
            <ui>
            {details.extendedIngredients.map((ingridiant)=>(
                <li key = {ingridiant.id}> {ingridiant.original}</li>
            ))}
        </ui>
        )}
        
        </Info>
        </DetailWrapper>
    );
  
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    
    display:flex;

    .active{
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 65%, rgba(27,25,25,1) 100%, rgba(255,253,253,1) 100%);
        color:white;
    }

    h2 {
        margin-bottom:2rem;

    }

    li{
        font-size:1.2rem;
        line-height:2.5rem;
    }

    ul{
        margin-top:2rem;

    }
    img{
       
        width: 90%;
        height: 80%;
        
    }

`

const Button = styled.button`
    padding:1rem 2rem;
    color: #313131;
    backgorund:white;
    border:2px solid black;
    margin-right:1rem;
    font-weight:200;
   

`

const Info = styled.div`
    margin-left:41rem;
    justify-content: space-between;
    position: absolute;
    `

export default Recipes
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

    const[popular,setPopular] = useState([]);

    useEffect(() =>{
        getPopular();
    },[])

    const getPopular = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        setPopular(data.recipes);

    }
  return (
    <div>
                <Wrapper>
                    <h3>Popular picks </h3>
                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination:false,
                        drag: 'free',
                        gap:'5rem',
                    }}>
                    {popular.map((recipe) => { 
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src = {recipe.image} alt={recipe.title}/>
                                
                            </Card>
                            </SplideSlide>
                        );
                     })};
                    </Splide>
                </Wrapper>
            
        
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card= styled.div`
    min-height: 15rem;
    border-radius:2rem;
    overflow: hidden;
    cursor: grab;

    :active{
        cursor:grabbing;
    }

    img{
        border-radius:2rem;
        left:0;
        position: absolute;
        object-fit:cover;
        width: 100%;
        height: 100%;
        
    }

    p{
        position : absolute;
        z-index: 10;
        left:70%
        bottom:0;
        transform: translate(0%,120%);
        color : black;
        width : 100%;
        text-align: center;
        font-weight: 700;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Gradient = styled.div`
 z-index: 3;
 position : relative;


`

export default Popular
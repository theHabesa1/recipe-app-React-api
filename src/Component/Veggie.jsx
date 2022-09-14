import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
    const[veggie,setVeggie] = useState([]);

    useEffect(() =>{
        getVeggie();
    },[])

    const getVeggie = async () =>{
        const check= localStorage.getItem('veggie');
        if(check){
            setVeggie(JSON.parse(check));
            }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie',JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
        
         }
  return (
    <div>
        <Wrapper>
                    <h3>Our Veggie picks for you </h3>
                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination:false,
                        drag: 'free',
                        gap:'5rem',
                    }}>
                    {veggie.map((recipe) => { 
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                            <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src = {recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Link>
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
        color : white;
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
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));



    `



export default Veggie
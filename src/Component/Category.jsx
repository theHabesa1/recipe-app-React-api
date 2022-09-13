
import { FaPizzaSlice,FaHamburger } from 'react-icons/fa'
import { GiNoodles , GiChopsticks } from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'} >
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>

        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>

        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>

        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>


    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background: linear-gradient(90deg, rgba(83,82,82,1) 0%, rgba(187,187,187,1) 51%, rgba(255,250,250,1) 100%);
    width: 6rem;
    height: 6rem;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(0.8);

    &:hover {
        transform: scale(0.7);
        }
    svg {
            color:white;
            font-size:1.5rem;

        }
    &.active{
        background: linear-gradient(90deg, rgba(65,62,62,1) 0%, rgba(1,1,1,1) 51%, rgba(101,101,101,1) 100%);
    
        svg {
            color:white;

        }

        h4{
            color:white;
        }
    }


    `


export default Category


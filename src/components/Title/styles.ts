import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 10px;
    
    ::after{
    	display: block;
    	content: '';
    	width: 60px;
    	height: 3px;
    	background-color: red;
    }

`

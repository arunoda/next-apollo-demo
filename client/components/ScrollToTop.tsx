import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUpwardRounded } from '@material-ui/icons'

const ScrollToTop: React.FC = (props) => {
    const [show, setShow] = useState(false);
    const myref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.innerHeight < myref.current!.scrollHeight ? setShow(true) : setShow(false)
    })
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div style={{ position: 'absolute',width:'100%' }} ref={myref}>
            {props.children}
            {
                show ? <TopArrowIcon onClick={scrollTop} /> : ''
            }
        </div>
    )
}

const TopArrowIcon = styled(ArrowUpwardRounded)`
    color:white;
    right:30px!important;
    font-size:30px!important;
    background-color:#3f51b5;
    border-radius:20px;
    cursor: pointer;
    z-index:1000000000;
    bottom:2vw;
    position:absolute;
    right:0vw;
`

export default ScrollToTop;
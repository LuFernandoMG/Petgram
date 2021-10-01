import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'
export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    position: fixed;
    left: 0;
    height: 50px;
    margin: 0 auto;
    max-width: 500px;
    right: 0;
    width: 100%;
    z-index: 100000;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    justify-content: center;
    display: inline-flex;
    color: #888;
    height: 100%;
    text-decoration: none;
    width: 100%;

    &[aria-current] {
        color: #000;

        &:after {
            ${fadeIn({ time: '0.5s' })};
            position: absolute;
            bottom: 0;
            font-size: 34px;
            content: '·';
            line-height: 20px;
        }
    }
`

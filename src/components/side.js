import * as React from 'react'
import * as side from './css/side.module.css'
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";

// Side bar Component to store my social media links
const Side = () => {

    return (
        <div className={side.container}>
            <ul className={side.inner}>    
                <li><a href='https://github.com/devynchew' target="_blank" rel="noreferrer" aria-label="GitHub"><AiOutlineGithub /></a></li>
                <li><a href='https://www.linkedin.com/in/devyn-chew-798653126/' target="_blank" rel="noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a></li>
                <li><a href='https://www.instagram.com/devyn_chew/' target="_blank" rel="noreferrer" aria-label="Instagram"><AiFillInstagram /></a></li>
            </ul>
        </div>
    )
}
export default Side
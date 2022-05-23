import * as React from 'react'
import * as side from './css/side.module.css'
import { Link } from 'gatsby'
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";

const Side = () => {

    return (
        <div className={side.container}>
            <ul className={side.inner}>    
                <li><Link to='https://github.com/devynchew' target="_blank"><AiOutlineGithub /></Link></li>
                <li><Link to='https://www.linkedin.com/in/devyn-chew-798653126/' target="_blank"><AiFillLinkedin /></Link></li>
                <li><Link to='https://www.instagram.com/devyn_chew/'><AiFillInstagram /></Link></li>
            </ul>
        </div>
    )
}
export default Side
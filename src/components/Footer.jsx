import React from 'react'
import cn from '../lib/cn'
import Container from './layer/Container'
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className={cn('text-white mt-5 ')}>
        <Container className={cn('bg-black p-2')}>
            <div className="folow us on py-2 text-lg flex flex-col items-center">
                <h1>Follow us on</h1>
                <div className="icon flex py-2 gap-5">
                    <a href="https://www.facebook.com/vienna.apparel.official/" target='_blank'><RiFacebookFill /></a>
                    <a href="https://www.instagram.com/vienna.apparel_official" target='_blank'><BsInstagram /></a>
                </div>
            </div>
            <div className="text-base text-center">
            © Vienna Apparel 2024. All rights reserved
            </div>
        </Container>
    </footer>
  )
}

export default Footer

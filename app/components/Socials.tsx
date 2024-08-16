'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faFacebookMessenger, faGithub, faGooglePlusG, faInstagram, faLinkedinIn, faXTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons'

/** This SocialBrand type is used in the SocialProps interface so any new brands must be included in this list of literals */

type SocialBrand = "Facebook" | "Instagram" | "LinkedIn" | "Github" | "Slack" | "Messenger" | "Google" | "YouTube" | "Twitter" | ""

interface SocialProps {
    brand: SocialBrand;
    icon: IconDefinition;
    color: string;
    url?: string;
}

const SocialSection = ({ props }: { props: SocialProps } ) => {
    return (
        <div
            className={ ` flex-wrap inline-flex cursor-pointer h-[50px] w-[50px] rounded-full bg-slate-200 ${props.color} overflow-hidden hover:transition-all duration-500 hover:w-[200px] ease-linear` }
            onClick={() => window.open(props.url, '_blank')}
            >
            <FontAwesomeIcon
                icon={props.icon}
                className={` h-[30px] w-[30px] m-[10px] ${props.color} rounded-full text-center overflow-hidden`}
                onClick={() => window.open(props.url, '_blank')}
            />
            <span className=' h-[50px] w-[50px] p-3'>{ props.brand }</span>
        </div>
    );
}

/** Add new social icon property objects here using the SocialProps interface as the template
 *  The object url needs to be included in the next.config.mjs file else will default to blank
*/

const Facebook: SocialProps = {
    brand: 'Facebook',
    icon: faFacebookF,
    color: 'text-[#1877f2]',
    url: process.env.FACEBOOK_URL
}

const Instagram: SocialProps = {
    brand: 'Instagram',
    icon: faInstagram,
    color: 'text-[#fd1d1d]',
    url: process.env.INSTAGRAM_URL
}

const Messenger: SocialProps = {
    brand: 'Messenger',
    icon: faFacebookMessenger,
    color: 'text-[#1877f2]',
    url: process.env.MESSENGER_URL
}

const LinkedIn: SocialProps = {
    brand: 'LinkedIn',
    icon: faLinkedinIn,
    color: 'text-[#5533f1]',
    url: process.env.LINKEDIN_URL
}

const YouTube: SocialProps = {
    brand: 'YouTube',
    icon: faYoutube,
    color: 'text-[#fd5e5e]',
    url: process.env.YOUTUBE_URL
}

const Github: SocialProps = {
    brand: 'Github',
    icon: faGithub,
    color: 'text-[#333]',
    url: process.env.GITHUB_URL
}

const Google: SocialProps = {
    brand: 'Google',
    icon: faGooglePlusG,
    color: 'text-[#0f9d58]',
    url: process.env.GOOGLE_URL
}

const Twitter: SocialProps = {
    brand: 'Twitter',
    icon: faXTwitter,
    color: 'text-[#340742]',
    url: process.env.TWITTER_URL
}

/** To include new social object add the related property object to the data array */

const data = [ Facebook, Instagram, Messenger, LinkedIn, YouTube, Github, Google, Twitter ]

const socialIconList = data.map((brand, i) => {
    return <SocialSection props={ brand } key={i}/>
})

const Socials = () => {
  return (
    <div className=' inline-flex gap-4 w-full justify-center overflow-hidden font-mono '>
        { socialIconList }
    </div>
  )
}

export default Socials


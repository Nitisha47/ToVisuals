import logo from './logo.png'
//import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.png'
import step_icon_2 from './step_icon_2.png'
import step_icon_3 from './step_icon_3.png'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.svg'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.svg'
import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.jpg'
import profile_img_3 from './profile_img_3.jpg'

export const assets = {
    logo,
    //logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    profile_img_1,
    profile_img_2,
    profile_img_3
}

export const stepsData = [
    {
        title:'Describe Your Vision',
        description: 'Type a phrase, sentence, or paragraph that describs the image you want to create.',
        icon: step_icon_1,
    },
    {
        title:'Describe Your Vision',
        description: 'Type a phrase, sentence, or paragraph that describs the image you want to create.',
        icon: step_icon_2,
    },
    {
        title:'Describe Your Vision',
        description: 'Type a phrase, sentence, or paragraph that describs the image you want to create.',
        icon: step_icon_3,
    },
];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Robert Milton',
        role:'Graphic Designer',
        stars:5,
        text:'I am a person who have moved into a new place. and trying to make friends.'
    },
    
    {
        image:profile_img_2,
        name:'Robert Milton',
        role:'Graphic Designer',
        stars:4,
        text:'I am a person who have moved into a new place. and trying to make friends.'
    },

    {
        image:profile_img_3,
        name:'Robert Milton',
        role:'Graphic Designer',
        stars:5,
        text:'I am a person who have moved into a new place. and trying to make friends.'
    },
];

export const plans = [
    {
        id:'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        id:'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use.'
    },
    {
        id:'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    },
];

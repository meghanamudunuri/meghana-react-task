import React from 'react';
import Images from './Images';
import mobile from './mobile.png';
import Heading from './Heading';

const imgstyle={
    width: "5vw" , 
    height : "5vw"
}

const textstyle = {
    fontSize : "15px",
    color : "white"
}

const MOCKDATA = [{'link': 'https://www.google.com/search?q=flipkart+fashion&rlz=1C1GCEU_enIN986IN986&oq=flipkart+fashion&aqs=chrome..69i57j69i59j0i512l8.2912j0j7&sourceid=chrome&ie=UTF-8', 'pic': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-xEIhsttGXgW7q-IuwLPkmRhML10M8_R-4le8VMupZS3cIVTA1_z03hSxTS-pFjZxD4&usqp=CAU"  ,'name' : 'Fashion'},
{'link': 'https://www.google.com/search?q=mobiles&safe=active&rlz=1C1GCEU_enIN986IN986&source=lnms&tbm=isch&sa=X&ved=2ahUKEwig1snD6uj2AhUMR2wGHdi2DIUQ_AUoAnoECAIQBA&biw=1600&bih=789&dpr=1','pic': "https://upload.wikimedia.org/wikipedia/commons/3/3c/OnePlus_6T.jpg",'name' : 'Mobile'},
{'link': 'https://www.google.com/search?q=jewellery&safe=active&rlz=1C1GCEU_enIN986IN986&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj02MPT6uj2AhU4RmwGHeB1CAkQ_AUoAnoECAMQBA&biw=1600&bih=789&dpr=1','pic': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl6jAMy24XFPpZARutSAnrE89wKxQnKuX9A&usqp=CAU",'name' : 'Jewellery'},

];

const LinkB = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            
            return  <li key = {index}>
                        <a class = "app-name" href = {value.link}>
                           
                                <Images src={value.pic} style = {imgstyle}/><br/>
                                <Heading heading = {value.name} style = {textstyle}/>
                            
                        </a>
                    </li>
        })
    }
    return (
        <nav class = "App-nav">
        <ul >
            {createList(MOCKDATA)}
        </ul>
        </nav>
    )
}
export default LinkB;
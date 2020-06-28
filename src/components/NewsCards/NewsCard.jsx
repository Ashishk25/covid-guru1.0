import React from 'react';
import 'tachyons';
import styles from './NewsCard.module.css';



const NewsCard = (props) => {
    return (
                         // assign the fuction and not actually calling it like earlier openlink(); below
         <div className="ma3 shadow-2 grow fl w-90 w-30-ns pa2 " onClick={()=>openLink(props.link)}> 
            <img src={props.image} className={styles.newsimg} alt="Loading.." />
            <div className={styles.content}>
                <h2 className="mv3">{props.title}</h2>
                <p className="db mv0 avenir">{props.content}</p>
                <p className="dib gray">{props.paper}</p>
                <p className="dib fr gray">{new Date(props.date).toDateString()}</p>
            </div>
        </div>
    )
}
const openLink = (link) =>{
    console.log("clicked");
    window.open(link, '_blank');
}
export default NewsCard;
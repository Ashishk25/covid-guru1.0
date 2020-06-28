import React from 'react';
import NewsCard from '../NewsCards/NewsCard';
import 'tachyons';
import header from '../../images/newsheader.png'
import { fetchNewsData } from '../../api';

export default class News extends React.Component{
    state={
        data: []
    }

    async componentDidMount(){
        const data = await fetchNewsData();

        this.setState({ data }); //whenever state change render function is called;
    }
      
    render(){
        console.log(this.state);
        const { data }= this.state;
        console.log(data);
        const buffer =[];
        const tags=[ 'covid' , 'corona' , 'china' , 'virus' , 'exaam' , 'infected' , 'positive', 'lockdown' , 'vaccine' ];

        if(data.length>=0){      
        for( var i=0 ; i<data.length ; i++ ){
            for( var j=0 ; j<tags.length ; j++ ){
                var head=data[i].title.toLowerCase();
                if( head.search(tags[j]) >= 0 ){
                    buffer.push( 
                    <NewsCard  key={i}
                        title={data[i].title}
                        image={data[i].urlToImage}
                        paper={data[i].source.name}
                        content={data[i].description}
                        date={data[i].publishedAt}
                        link={data[i].url}
                    />    );
                    break;
                }
            }
        }
    }
       return (
        <div className="ml5">
        <img src={header} className="w-100 h4.1" alt="loading"/>
        <div className="mv4 pl5">
           {buffer}
        </div>
        </div>
        )
    }
}
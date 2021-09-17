import { useEffect, useState } from 'react'
import Spinner from '../Utility/Spinner'
import NewsItem from './NewsItem'

//mention your APi key here
const apiKeyforNewsApi = '879e404dedb44f4ea5bdff7615aca072'

function News() {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalnews, setTotalnews] = useState(1)
    const [loading, setLoading] = useState(false)
    // using useEffect to not call again and again
    // default pagesize is 18, to change to edit the 18 on line 16 to any limit you wish
    useEffect(()=>{
        setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKeyforNewsApi}&pageSize=18&page=${page}`)
        .then(res=>res.json()).then((data)=>{
            const news = data.articles;
            const totalnews = data.totalResults;
            setNews(news);
            setTotalnews(totalnews)
            setLoading(false)
        })
    },[page])

    //method to return news item on each news fetched from API
    const newsCard = news.map((news, index)=>{
        return(
            <NewsItem
            key={index}
            title = {news.author}
            source= {news.source.name}
            desc= {news.description}
            image = {news.urlToImage}
            url = {news.url}
            />   
        )
    })

    let nextBtnHandler = () =>{
        //this will avoid to update page if max news reached
        if( page+1 >  Math.ceil(totalnews/18)  ){
        }
        else{
            setLoading(true)
            let newpage = page+1;
            setPage(newpage)
        }  
    }

    let previousBtnHandler = () =>{
        // to reach previous page, 
        setLoading(true)
        let newpage = page-1;
        setPage(newpage)
    }



    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {loading && <Spinner/>}
                    {newsCard}  
                </div>
            </div>  
            <div className="container pb-4 mt-3 mx-5 d-flex justify-content-center">
                <button type="button" disabled={page === 1} className="btn btn-primary mx-3" onClick={previousBtnHandler}>&larr; Previews Page</button>
                <button type="button" disabled={page === (Math.ceil(totalnews/18)) } className="btn btn-primary mx-3 mr-4" onClick={nextBtnHandler}>Next Page &rarr;</button>
            </div>
        </> 
    )
}

export default News;





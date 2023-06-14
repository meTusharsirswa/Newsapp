import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




const  News =(props) => {
  const [articles,setArticles]= useState([])
  const [loading,setLoading]= useState(true)
  const [page,setPage]= useState(1)
  const [totalResults,setTotalResults] =useState(0)

 
const capitalizerFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  

const updateNews= async ()=>{
  props.setProgress(10)
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=69461d4b06ca4f8e8618685cdfe06fa9&page=${page}&pageSize=${props.pageSize}`
  setLoading(true)
  let data = await fetch(url)
  props.setProgress(30)
  let parsedData = await data.json()
  props.setProgress(70)
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)

  props.setProgress(100)

}

useEffect(()=>{
  document.title = `${capitalizerFirstLetter(props.category)} - NewsMonkey`

  updateNews();
}, [])  

  // const handelPreviousClick= async()=>{
  //   setPage(page - 1)

  //   updateNews()
  // }
  // const handelNextClick = async()=>{
  //   setPage(page + 1)
  //   updateNews()
  // }

    const fetchMoreData =async() =>{
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=69461d4b06ca4f8e8618685cdfe06fa9&page=${page + 1}&pageSize=${props.pageSize}`
      setPage(page + 1)
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      
    }
     

  
 
    return (
      <>
      <h6 className='text-left' style={{margin:'30px 0px',marginTop:'60px'}}>Created by - Tushar Sirswa</h6>
        <h1 className="text-center">NewsMonkey - Top {capitalizerFirstLetter(props.category)} Headlines</h1>
       {loading &&<Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
      <div className='row'>
         {articles.map((element)=>{
       return  <div className="col-md-4" key={element.url}>
      <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
         })}

      </div>
      </div>
      </InfiniteScroll>
     
   </>
    )
        
  }


News.defaultProps ={
  country : 'in',
  pageSize:8,
  category:'general',
}
News.propTypes ={
  country: propTypes.string,
  pageSize:Number,
  category:propTypes.string
}

export default News




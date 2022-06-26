import React, { useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Category() {
    const [searchParams] = useSearchParams();
    var cat = searchParams.get('cat');

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=282452ef6b2c4569a90306153123a010`)
            .then(response => response.json())
            .then(response => setNews(response.articles))
    }, [cat])

    return (
        <div className='welcome container-fluid'>
            <div className='welcome-title'>National News - {cat}</div>
            <div className='articles container'>
                <div className='row'>
                    {news.map((article) =>
                        <div className='article col-md-6' key={article.title}>
                            <img src={article.urlToImage} className='article-img' alt="..." /><br />
                            <div className='article-title'>
                                <a
                                    href={article.url}
                                    className='article-link'
                                    target="blank">
                                    {article.title}
                                </a>
                            </div><hr />
                            <p
                                dangerouslySetInnerHTML={{ __html: article['description'] }}
                                className="article-summary">
                            </p>
                            <div className='article-dateTime'>
                                Published on {(article.publishedAt.slice(0, 10))} at {article.publishedAt.slice(11, 16)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

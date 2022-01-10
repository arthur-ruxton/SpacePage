import SpaceCard from './SpaceCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const SpaceList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
            setArticles([...articles, ...response.data])
        }
        getArticles()
    })

    return (
        <div className='spaceList'>
            {articles.map((article) => (
                <SpaceCard key={article.id} {...article} />
            ))}
        </div>
    )
    
}

export default SpaceList


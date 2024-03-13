export const getSingleNews = async (id:string)=>{
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`,
    {
        cache:'no-store'
    })

    return res.json()
}
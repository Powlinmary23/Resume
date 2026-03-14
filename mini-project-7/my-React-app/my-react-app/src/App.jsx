import { useEffect, useState } from "react";

function App() {

const API_KEY = "066e25a85b7d4c0e9966ab02e0db7cb2";

const [news,setNews] = useState([]);
const [search,setSearch] = useState("");
const [page,setPage] = useState(1);
const [loading,setLoading] = useState(false);

const fetchNews = () => {

setLoading(true);

fetch(`https://newsapi.org/v2/everything?q=${search || "india"}&language=en&sortBy=relevancy&pageSize=9&page=${page}&apiKey=${API_KEY}`)
.then(res => res.json())
.then(data => {

if(page === 1){
setNews(data.articles);
}
else{
setNews(prev => [...prev,...data.articles]);
}

setLoading(false);

});

}

useEffect(()=>{
fetchNews();
},[page])

const handleSearch = () =>{
setPage(1);
fetchNews();
}

return (

<div style={{background:"#f4f4f4",minHeight:"100vh"}}>

{/* NAVBAR */}

<div style={{
background:"#111",
color:"white",
padding:"15px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<h2>Live News</h2>

<div>

<input
type="text"
placeholder="Search news..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{padding:"8px"}}
/>

<button
onClick={handleSearch}
style={{padding:"8px",marginLeft:"10px"}}
>
Search
</button>

</div>

</div>

{/* NEWS GRID */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"20px",
padding:"30px"
}}>

{news.map((article,index)=>(

<div key={index} style={{
background:"white",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
overflow:"hidden"
}}>

<img
src={article.urlToImage || "https://via.placeholder.com/300"}
style={{width:"100%",height:"200px",objectFit:"cover"}}
/>

<div style={{padding:"15px"}}>

<h3>{article.title}</h3>

<p>{article.description}</p>

<a href={article.url} target="_blank">

<button style={{
background:"red",
color:"white",
border:"none",
padding:"10px",
cursor:"pointer"
}}>
Read More
</button>

</a>

</div>

</div>

))}

</div>

{/* LOAD MORE */}

<div style={{textAlign:"center",padding:"20px"}}>

{loading ? (
<h3>Loading...</h3>
) : (
<button
onClick={()=>setPage(page+1)}
style={{
padding:"12px 20px",
fontSize:"16px",
cursor:"pointer"
}}
>
Load More
</button>
)}

</div>

</div>

);

}

export default App;
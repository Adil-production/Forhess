const api = "https://newsapi.org/v2/top-headlines?country=ma&apiKey=5b438e69b36542379bf7f41be38b6070";
async function getData(){
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
        document.querySelector("#container img").src = data.articles[0].urlToImage;
        document.querySelector("#container h5").innerHTML += data.articles[0].title;
        document.querySelector("#container h4").innerHTML += data.articles[0].publishedAt;

        document.querySelector("#container1 img").src = data.articles[1].urlToImage;
        document.querySelector("#container1 h5").innerHTML += data.articles[1].title;
        document.querySelector("#container1 h4").innerHTML += data.articles[1].publishedAt;

        document.querySelector("#container2 img").src = data.articles[2].urlToImage;
        document.querySelector("#container2 h5").innerHTML += data.articles[2].title;
        document.querySelector("#container2 h4").innerHTML += data.articles[2].publishedAt;

        document.querySelector("#container3 img").src = data.articles[3].urlToImage;
        document.querySelector("#container3 h5").innerHTML += data.articles[3].title;
        document.querySelector("#container3 h4").innerHTML += data.articles[3].publishedAt;

        document.querySelector("#container4 img").src = data.articles[4].urlToImage;
        document.querySelector("#container4 h5").innerHTML += data.articles[4].title;
        document.querySelector("#container4 h4").innerHTML += data.articles[4].publishedAt;

        document.querySelector("#container5 img").src = data.articles[5].urlToImage;
        document.querySelector("#container5 h5").innerHTML += data.articles[5].title;
        document.querySelector("#container5 h4").innerHTML += data.articles[5].publishedAt;

        document.querySelector("#container6 img").src = data.articles[6].urlToImage;
        document.querySelector("#container6 h5").innerHTML += data.articles[6].title;
        document.querySelector("#container6 h4").innerHTML += data.articles[6].publishedAt;

        document.querySelector("#container7 img").src = data.articles[7].urlToImage;
        document.querySelector("#container7 h5").innerHTML += data.articles[7].title;
        document.querySelector("#container7 h4").innerHTML += data.articles[7].publishedAt;

        document.querySelector("#container8 img").src = data.articles[8].urlToImage;
        document.querySelector("#container8 h5").innerHTML += data.articles[8].title;
        document.querySelector("#container8 h4").innerHTML += data.articles[8].publishedAt;

        document.querySelector("#container9 img").src = data.articles[9].urlToImage;
        document.querySelector("#container9 h5").innerHTML += data.articles[9].title;
        document.querySelector("#container9 h4").innerHTML += data.articles[9].publishedAt;

        document.querySelector("#container10 img").src = data.articles[10].urlToImage;
        document.querySelector("#container10 h5").innerHTML += data.articles[10].title;
        document.querySelector("#container10 h4").innerHTML += data.articles[10].publishedAt;

        document.querySelector("#container11 img").src = data.articles[11].urlToImage;
        document.querySelector("#container11 h5").innerHTML += data.articles[11].title;
        document.querySelector("#container11 h4").innerHTML += data.articles[11].publishedAt;

        document.querySelector("#container12 img").src = data.articles[12].urlToImage;
        document.querySelector("#container12 h5").innerHTML += data.articles[12].title;
        document.querySelector("#container12 h4").innerHTML += data.articles[12].publishedAt;

        document.querySelector("#container13 img").src = data.articles[13].urlToImage;
        document.querySelector("#container13 h5").innerHTML += data.articles[13].title;
        document.querySelector("#container13 h4").innerHTML += data.articles[13].publishedAt;

        document.querySelector("#container14 img").src = data.articles[14].urlToImage;
        document.querySelector("#container14 h5").innerHTML += data.articles[14].title;
        document.querySelector("#container14 h4").innerHTML += data.articles[14].publishedAt;

        document.querySelector("#container15 img").src = data.articles[15].urlToImage;
        document.querySelector("#container15 h5").innerHTML += data.articles[15].title;
        document.querySelector("#container15 h4").innerHTML += data.articles[15].publishedAt;

        document.querySelector("#container16 img").src = data.articles[16].urlToImage;
        document.querySelector("#container16 h5").innerHTML += data.articles[16].title;
        document.querySelector("#container16 h4").innerHTML += data.articles[16].publishedAt;

        document.querySelector("#container17 img").src = data.articles[17].urlToImage;
        document.querySelector("#container17 h5").innerHTML += data.articles[17].title;
        document.querySelector("#container17 h4").innerHTML += data.articles[17].publishedAt;

        document.querySelector("#container18 img").src = data.articles[18].urlToImage;
        document.querySelector("#container18 h5").innerHTML += data.articles[18].title;
        document.querySelector("#container18 h4").innerHTML += data.articles[18].publishedAt;
        
        document.querySelector("#container19 img").src = data.articles[19].urlToImage;
        document.querySelector("#container19 h5").innerHTML += data.articles[19].title;
        document.querySelector("#container19 h4").innerHTML += data.articles[19].publishedAt;



}



getData()
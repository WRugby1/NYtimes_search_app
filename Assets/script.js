var query = "Sports"
//The Article Search API returns a max of 10 results at a time. 
//The meta node in the response contains the total number of matches ("hits") and the current offset. 
//Use the page query parameter to paginate thru results (page=0 for results 1-10, page=1 for 11-20, ...). 
//You can paginate thru up to 100 pages (1,000 results). If you get too many results try filtering by date range.
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&fq=The New York Times&api-key=QfQdrttNuPoNbGQTTbp9paz5uPVcz9Rt'
console.log(url)
$.ajax({
    url: url,
    method: "GET"
}).then(function (response) {
    console.log(response)
})

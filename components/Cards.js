// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardEntry = document.querySelector('.cards-container')
	axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then( (res) => {
	console.log(res)
	res.data.articles.javascript.forEach(item => {
	cardEntry.append(makeCard(item))
	})
	res.data.articles.bootstrap.forEach(item => {
	cardEntry.append(makeCard(item))
	})
	res.data.articles.node.forEach(item => {
	cardEntry.append(makeCard(item))
	})
	res.data.articles.technology.forEach(item => {
	cardEntry.append(makeCard(item))
	})
	res.data.articles.jquery.forEach(item => {
	cardEntry.append(makeCard(item))
	})
	})
	.catch(function(error){
    alert(error)
    })
	
	function makeCard(dataObj){
        const card = document.createElement('div')
        card.className = 'card'
        card.setAttribute('id', `${dataObj.headline}`)
        cardEntry.appendChild(card)
        const headline = document.createElement('div')
        headline.className = 'headline'
        headline.textContent = dataObj.headline
        card.appendChild(headline)
        const author = document.createElement('div')
        author.className = 'author'
        card.appendChild(author)
        const imgCon = document.createElement('div')
        imgCon.className = 'img-container'
        author.appendChild(imgCon)
        const img = document.createElement('img')
        imgCon.appendChild(img)
        img.src = dataObj.authorPhoto
        const span1 = document.createElement('span')
        span1.textContent = `By: ${dataObj.authorName}`
        author.appendChild(span1)
    
        card.addEventListener('click', evt => {
         console.log(card.id)
   })
   
	return card
    }

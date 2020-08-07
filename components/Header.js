// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


const headerEntryPoint = document.querySelector('.header-container')	
	function Header() {
	const header1 = document.createElement('div')
	header1.className = 'header'
	headerEntryPoint.appendChild(header1)
	const date = document.createElement('span')
	date.className = 'date'
	date.textContent = 'March 28, 2020'
	header1.appendChild(date)
	const h1Header = document.createElement('h1')
	h1Header.textContent = 'Lambda Times'
	header1.appendChild(h1Header)
	const temp = document.createElement('span')
	temp.className = 'temp'
	temp.textContent = '98°'
	header1.appendChild(temp)
	return header1
	}
	headerEntryPoint.appendChild(Header())

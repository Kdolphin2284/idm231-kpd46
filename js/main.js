const inputNameObj = document.getElementById('inputName');
const inputDateObj = document.getElementById('inputDate');
const submitInputObj = document.getElementById('submitInput');

const modalObj = document.getElementById('modalContainer');
const modalHeadObj = document.getElementById('modalHead');
const modalDateObj = document.getElementById('modalDate');
const modalTextOneObj = document.getElementById('modalTextOne');
const modalTextTwoObj = document.getElementById('modalTextTwo');
const modalTextThreeObj = document.getElementById('modalTextThree');
const modalImageObj = document.getElementById('modalImage');

const helpObj = document.getElementById('helpLogo');

const googleObj = document.getElementById('googleLogo');
const teslaObj = document.getElementById('teslaLogo');
const jnjObj = document.getElementById('jnjLogo');
const msftObj = document.getElementById('msftLogo');
const appleObj = document.getElementById('appleLogo');
const gmeObj = document.getElementById('gmeLogo');
const pfizerObj = document.getElementById('pfizerLogo');
const amznObj = document.getElementById('amznLogo');
const nflxObj = document.getElementById('nflxLogo');
const nvdaObj = document.getElementById('nvdaLogo');
const btcObj = document.getElementById('btcLogo');
const etherObj = document.getElementById('etherLogo');

modalImageObj.addEventListener('click', function(){
  console.log('Close this modal!')
  document.getElementById('modalContainer').style.display = "none";
})

helpObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/helpButtonImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

googleObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/googleImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

teslaObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/teslaImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

jnjObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/jnjImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

msftObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/msftLogo.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

appleObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/appleImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

gmeObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/gmeImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

pfizerObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/pfizerImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

amznObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/amznImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

nflxObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/nflxImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

nvdaObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/nvdaImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

btcObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/btcImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})

etherObj.addEventListener('click', function(){
  console.log('Lets check out: ' + this.id)
  modalObj.style = "background: url('../media/images/etherImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
  document.getElementById('modalContainer').style.display = "block";
  const idName = (this.id);
  userPicked(idName);
})


// MODAL CLICK FUNCTION AHHHHHHHHHH


function userPicked(whichOne) {
  console.log('The user has picked: ' + whichOne);
  switch (whichOne) {
    case 'helpLogo':
      modalHeadObj.innerHTML = 'Need Some Help?';
      modalDateObj.innerHTML = 'I know this can be confusing, so I’m here to help!';
      modalTextOneObj.innerHTML = 'This is a project which allows people to find some pretty cool information about some popular stocks. It’s also a fun way to see what stock your birthday represents! Wanna give it a try?';
      modalTextTwoObj.innerHTML = 'To find information about the stocks, click on the logos hovering above the big green \“stocks.\”';
      modalTextThreeObj.innerHTML = 'To find out which stock your birthday represents, click on the input fields at the top of the site, and fill in the boxes with your name and your birthday. When that’s done, press the submit button to view the cooresponding stock.';
      // document.modalObj.style.backgroundImage = "url('../media/images/helpButtonImg.png') no-repeat center";
      // display date range
      // display description
      // play sound
      break;
    case 'googleLogo':
      modalObj.style = "background: url('../media/images/googleImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Alphabet Inc. (GOOGL)';
      modalDateObj.innerHTML = 'January 20 - February 18';
      modalTextOneObj.innerHTML = 'Google, now known as a child company of Alphabet Inc., was founded September 4, 1998, in Menlo Park, California. It was founded by Larry Page and Sergey Brin, who were both students at Standford University in California.';
      modalTextTwoObj.innerHTML = 'Google is the most popular search engine in the world, and has been since 2000. Even Yahoo has used Googleas their search engine provider for over 20 years!';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $2,101.14, and is down a total of -0.76%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
    case 'teslaLogo':
      modalObj.style = "background: url('../media/images/teslaImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Tesla Inc. (TSLA)';
      modalDateObj.innerHTML = 'February 19 - March 20';
      modalTextOneObj.innerHTML = 'Tesla was founded July 1, 2003, in San Carlos, California. It was founded by Elon Musk, who is now currently the richest person in the world, with a net worth of $199.9 billion. ';
      modalTextTwoObj.innerHTML = 'Tesla is a company that specializes in clean energy and creating electric vehicles. The first car that was made at Tesla is called the Roadster, and was first built in 2009.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $781.30, and is down a total of -0.77%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;  
    case 'jnjLogo':
      modalObj.style = "background: url('../media/images/jnjImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Johnson and Johnson (JNJ)';
      modalDateObj.innerHTML = 'March 21 - April 19';
      modalTextOneObj.innerHTML = 'Johnson and Johnson was founded January 1886, in New Brunswick, New Jersey. It was founded by James Wood Johnson, Edward Mead Johnson, and Robert Wood Johnson I.';
      modalTextTwoObj.innerHTML = 'Johnson and Johnson is pharmaceutical company that develops medical devices, vaccines, as well as consumer packaged goods.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $162.98, and is down a total of -1.67%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'msftLogo':
      modalObj.style = "background: url('../media/images/msftImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Microsoft Corp. (MSFT)';
      modalDateObj.innerHTML = 'April 20 - May 20';
      modalTextOneObj.innerHTML = 'Microsoft was founded April 4, 1975, in Albuquerque, New Mexico. It was founded by Bill Gates and Paul Allen, who were childhood friends with interests in topics like computer science.';
      modalTextTwoObj.innerHTML = 'Microsoft is a company which develops, manufactures, licenses, supports, and sells computer software, and is responsible for the Xbox series of gaming consoles.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $240.97, and is down a total of -1.16%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'appleLogo':
      modalObj.style = "background: url('../media/images/appleImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Apple Inc. (AAPL)';
      modalDateObj.innerHTML = 'May 21 - June 20';
      modalTextOneObj.innerHTML = 'Apple was founded April 1, 1976, in Cupertino, California. It was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne. Fun fact: Both Steve’s were college dropouts, and yet were extremely successful!';
      modalTextTwoObj.innerHTML = 'Apple was the first company in the world to be valued at $1 trillion. Apple currently specializes in easy to use technologies, such as their smartphones and laptops.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $129.87, and is up a total of 0.12%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'gmeLogo':
      modalObj.style = "background: url('../media/images/gmeImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Gamestop Corp. (GME)';
      modalDateObj.innerHTML = 'June 21 - July 22';
      modalTextOneObj.innerHTML = 'Gamestop was founded 1984 in Dallas, Texas, by James McCurry and Gary M. Kusin. It was formerly called Babbge’s, and was a software retailer before being renamed in December 2000.';
      modalTextTwoObj.innerHTML = 'Gamestop specializes in the distribution of video games, video game consoles, and themed collectibles. The stock was recently shorted, and went as high as $483.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $40.59, and is down a total of -0.25%';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'pfizerLogo':
      modalObj.style = "background: url('../media/images/pfizerImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Pfizer Inc. (PFE)';
      modalDateObj.innerHTML = 'July 23 - August 22';
      modalTextOneObj.innerHTML = 'Pfizer was founded 1849 in Brooklyn, New York, New York. It was founded by Charles F. Erhart and Charles Pfizer, hence the name \“Pfizer.\"';
      modalTextTwoObj.innerHTML = 'Pfizer is a large pharmaceutical company specializing in vaccines and medicines. They have developed and are currently distributing one of the few working COVID-19 vaccines.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $34.44 and is down a total of -0.35%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'amznLogo':
      modalObj.style = "background: url('../media/images/amznImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Amazon.com Inc. (AMZN)';
      modalDateObj.innerHTML = 'August 23 - September 22';
      modalTextOneObj.innerHTML = 'Amazon was founded July 5, 1994, in Bellevue, Washington. It was founded by Jeff Bezos, who is the past \“richest person in the world\”, just recently surpassed by Elon Musk.';
      modalTextTwoObj.innerHTML = 'Amazon specializes in the online ordering  of goods with fast shipping. The company also offers other services, such as digital streaming of movies/shows, and music.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $3,200.00, and is down a total of -1.52%';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'nflxLogo':
      modalObj.style = "background: url('../media/images/nflxImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Libra - Netflix Inc. NFLX';
      modalDateObj.innerHTML = 'September 23 - October 22';
      modalTextOneObj.innerHTML = 'Netflix was founded August 29. 1997, in Scotts Valley, California. It was founded by Reed Hastings and Marc Randolph, who both worked at Reed Hastings’ company called Pure Atria.';
      modalTextTwoObj.innerHTML = 'Netflix is a popular streaming service consisting of popular shows and movies. As of January 2021, the platform has over 203.7 million subscribers.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $533.16, and is down a total of -1.31%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'nvdaLogo':
      modalObj.style = "background: url('../media/images/nvdaImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'NVIDIA Corp. (NVDA)';
      modalDateObj.innerHTML = 'October 23 - November 21';
      modalTextOneObj.innerHTML = 'NVIDIA was founded April 1993, in Santa Clara, California. It was founded by Jensen Huang, Chris Malachowsky, and Curtis Priem. Jensen Huang has been the CEO since 1993.';
      modalTextTwoObj.innerHTML = 'NVIDIA is a company which creates chip units for the mobile computing and automotive markets, as well as a very popular manufacturer of computer parts.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $603.07, and is up a total of 1.01%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'btcLogo':
      modalObj.style = "background: url('../media/images/btcImg.png') center no-repeat, linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4674361861861862) 100%);";
      modalHeadObj.innerHTML = 'Bitcoin (BTC)';
      modalDateObj.innerHTML = 'November 22 - December 21';
      modalTextOneObj.innerHTML = 'Bitcoin was created January 2009. The “creator” goes by the name Satoshi Nakamoto, which is the presumed name of the person/people who made the currency.';
      modalTextTwoObj.innerHTML = 'Bitcoin is a decentralized digital currency which is self reliant. This means that in order for the currency to hold value, people must use it.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current price of a single Bitcoin is $53,582.50.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
      case 'etherLogo':
      modalHeadObj.innerHTML = 'Ethereum (ETH)';
      modalDateObj.innerHTML = 'December 22 - January 19';
      modalTextOneObj.innerHTML = 'Ethereum was created July 30, 2015. It was founded by Vitalik Buterin, and financed by Gavin Wood, Charles Hoskinson, and Anthony Di Iorio.';
      modalTextTwoObj.innerHTML = 'Ethereum is a decentralized digital currency which is self reliant. This means that in order for the currency to hold value, people must use it.';
      modalTextThreeObj.innerHTML = 'As of creating this experience, the current share price is $1,749.75, and is down a total of -10.57%.';
      document.getElementById('modalContainer').style.display = "block";
      // play sound
      break;
  }
}

submitInputObj.addEventListener('click', function () {
  // Get the user first name and store it in a variable
  event.preventDefault()

  const userNameObj = document.getElementById('username').value;
  console.log('User has submitted their name! Their name is: ' + userNameObj);

  // Get the user date and extract the month of year and day of month
  const userBirthdayObj = new Date(document.getElementById('date').value);
  console.log('User has submitted their birthday! It is: ' + userBirthdayObj);

  // Figure out the zodiac sign based on month and of year and day of month
  let whichMonth = userBirthdayObj.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  const whichDayOfMonth = userBirthdayObj.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "etherLogo";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "btcLogo";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = 'nvdaLogo';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = 'nflxLogo';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = 'amznLogo';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = 'pfizerLogo';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = 'gmeLogo';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = 'appleLogo';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = 'msftLogo';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = 'jnjLogo';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = 'teslaLogo';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = 'googleLogo';
  }
  
  console.log('Congratulations! Your stock is: ' + AstroSign);
  
  userPicked(AstroSign);
  // Display custom image based on zodiac sign
  

}); 
const quotes = [
  {
    quote: "I never dreamed about success, i worked for it \n\n 나는 결코 성공에 대해 꿈꾸지않았다, 나는 꿈을 위해 행동했다",  // 
    author:"Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good. \n\n 독특한 사람이 되려 하지말아라, 좋은사람이 되도록 해라",  // 
    author:"Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great. \n\n 더 좋은 것을 쫒기 위해 좋은 것을 버리는 것을 두려워하지 마라",  // 
    author:"John D. Rockefeller",
  },
  {
    quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be. \n\n 자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다. ",  // 
    author:"Reid Hoffman",
  },
  {
    quote: "Some people dream of success, while other people get up every morning and make it happen. \n\n 성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.",  // 
    author:"Wayne Huizenga",
  },
  {
    quote: "The only thing worse than starting something and failing ... is not starting some thing. \n\n 무언가를 시작하고 실패하는 것보다 더 나쁜 것은 ... 아무것도 시작하지 않는 것이다.",  // 
    author:"Seth Godin",
  },
  {
    quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse \n\n 무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다 ",  // 
    author:"Jim Rohn",
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same. \n\n 성공으로 가는 길과 실패로 가는 길은 거의 같다.",  //  
    author:"Colin R. Davis",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation \n\n 창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다 ",  // 
    author:"Herman Melville",
  },
  {
    quote: "Success is from failure to failure with no loss of enthusiasm \n\n 성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다. ",  // 
    author:"Winston Churchill",
  },
  {
    quote: "All progress takes place outside the comfort zone \n\n 모든 성과는 요령을 피우지 않을 때 생긴다. ",  // 
    author:"Michael John Bobak",
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it \n\n 성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다. ",  // 
    author:"Henry David Thoreau",
  },
  {
    quote: "The way to get started is to quit talking and begin doing \n\n 무언가를 시작하려면 말은 멈추고 행동해야 한다. ",  // 
    author:"Walt Disney",
  },
  {
    quote: "Success seems to be connected with action. Successful people keep moving \n\n 성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",  //  
    author:"Conrad Hilton",
  },
  {
    quote: "In order to succeed, we must first believe that we can \n\n 성공하기 위해서 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다. ",  // 
    author:"Nikos Kazantzakis",
  },
  {
    quote: "The only place where success comes before work is in the dictionary. \n\n 노력 전에 성공이 나오는 곳은 사전뿐이다",  // 
    author:"Vidal Sassoon",
  },
  {
    quote: "All your life, you will be faced with a choice. You can choose love or hate…I choose love. \n\n  평생 동안 모든 사람들은  선택에 직면하게 될 것이다. \n 사랑이나 미움을 선택할 수 있다. 나는 사랑을 선택한다.",  // 
    author:"Johnny Cash",
  },
  {
    quote: "Three things in life – your health, your mission, and the people you love. That’s it. \n\n 인생의 세 가지는 건강, 사명, 그리고 여러분이 사랑하는 사람이다.",  //  
    author:"Naval Ravikant",
  }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;


var says = [
   "<style>.splash-text{ color:cyan;}</style>Credit to 3kh0",
   "<style>.splash-text{ color:cyan;}</style>3kh0 rocks",
   "<style>.splash-text{ color:cyan;}</style>Check out <a href='https://3kh0.github.io' target='_blank'>3kh0.github.io</a> also",
   "murhahaha",
   "<style>.splash-text{ color:red;}</style>give me your vbux",
   "Sorry for the ads",
   "I need my moolah",
   "erm what the sigma",
   "<style>.splash-text{ color:cyan;}</style>3kh0 reference",
   "Giggity",
   "Geometry tryhard V3!!",
   "Check out ultraviolet up top",
   "*explosion sfx*",
   "Does anyone even scroll all the way down?",
   "<style>.splash-text{ color:cyan;}</style>3kh0 is awesome",
   "Redbull gives you wiings",
   "If you skid please submit the link in Alternate links!",
   "Tell me to add games up top",
   "<style>.splash-text{ color:#20C20E;}</style>Ж呖N%@ωψ흥",
   "loads of games",
   "optimized by Opera AI",
   "<a href='https://discord.gg/auxXTY8x8P' target='_blank'>https://discord.gg/auxXTY8x8P</a>",
   "<a href='https://discord.gg/auxXTY8x8P' target='_blank'>https://discord.gg/auxXTY8x8P</a> also",
   "<a href='https://discord.gg/auxXTY8x8P' target='_blank'>https://discord.gg/auxXTY8x8P</a> again?",
   "&#128128;&#128128;&#128128;",
   "why",
   "how",
   "when",
   "what", 
   "uh", 
   "Primus sucks", 
   "<style>.splash-text{ color:cyan;}</style>Sponsored by 3kh0", 
   "the person who made this websites pretty cool i think", 
   "when do I get to go home?", 
   "many hours wasted", 
   "shut up ryan",
   "<style>.splash-text{ color:cyan;}</style>3kh0",
   "why do i do this?",
  "&#128511;",//moai emoji
  "&#128511;&#128511;",
  "&#128511;&#128511;&#128511;",
  "&#127863;&#128511;",//wine, moai
  "&#128293;",//fire emoji
  "Curse you, Perry the Platypus!",
  "moyai",
  "yesn't",
  "mayhaps",
  "nope",
  "what's your Toss The Turtle hi-score?",
  "Toss the Turtle is straight fire &#128293;",
  "P.S. You can read btw",
  "For legal reasons, that's a joke!",
  "You got Clash of Clans on your phone?",
  "Did you know you have rights? The constitution says you do!",
  "gotta go x-games mode",
  "Hello. This is Microsoft Refund Department, how can I help you?",
  "Sir, your games were unblocked over 30 days ago, voiding our return policy",
  'Your Honor, my client pleads "oopsie doopsie"',
  '"It is better to poop in the sink, than to sink in the poop"- Master Oogway',
  "Refresh for a new message",
  "Gotta make a move to a town that's right for me",
  "Town to keep me moovin', keep me groovin', with some energy",
  "Won't you take me to Funkytown?",
  '"La familia es todo"- Tio Salamanca, Breaking Bad',
  "Nice passwords!",
  "Made you look!",
  "<style>.splash-text{ color:yellow;}</style>WARNING: BRAINCELL LOSS IMMINENT",
  "2 + 2 = 5",
  "I'm not a robot",
  "Hello world",
  "undefined",
  "<style>.splash-text{ color:yellow;}</style>If you wish to support me, click a ad every now and then. It helps out a ton!",
  "<style>.splash-text{ color:yellow;}</style>If you wish to support me, click a ad every now and then. It helps out a ton!",
  "<style>.splash-text{ color:yellow;}</style>If you wish to support me, click a ad every now and then. It helps out a ton!",
  "<style>.splash-text{ color:yellow;}</style>If you wish to support me, click a ad every now and then. It helps out a ton!",
  "Noot Noot",
  "<a href='https://github.com/Memelite70/Memelite70.github.io' target='_blank'>Official Github Repository</a>",
  "There is someone looking over your shoulder",
  "tysm stackoverflow",
  "shimmy shimmy ay shimmy ahh shimmy ahh",
  "1 + 1 = 3",
  "Avocados from Mexico\ud83e\udd51",
  "Me fail english? That's unpossible!",
  "He stomped on his fruit loops and thus became a cereal killer.",
  "<style>.splash-text{ color:red;}</style>mogus",
  "<style>.splash-text{ color:red;}</style>sus",
  "<style>.splash-text u{ color:red;}</style>a- amogu- <u>*gets instantaneously vaporized*</u>",
  "unfunny",
  "I've a feeling we're not in Kansas anymore",
  "Do your homework kids",
  "Will the real slim shady please stand up?",
  "We're going to have a problem here",
  "<style>.splash-text i{ color:yellow;}</style>I'm not in danger, Skyler. <i>I</i> am the danger",
  "My cats breath smells like cat food",
  "I'm the one who knocks",
  "YOU'RE CRINGE!",
  "1 in a million (minus 4 zeros)",
  "My name is Walter Hartwell White. I live at 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104.",
  "<style>.splash-text{ color:yellow;}</style>RARE TIP SIGHTING",
 ];

function splashText() {
  document.querySelector(".splash-text").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}
fetch("https://ipv6.wtfismyip.com/json")
.then((response) => response.json())
.then((data) => {
  ipAddress = data.YourFuckingIPAddress;
  says.push(`<style>.splash-text{ color:#20C20E;}</style>Your IP is: ${ipAddress}`);
});
//credit to https://railin.vercel.app/ for the o.g code
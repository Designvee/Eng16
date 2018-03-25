var objects = [
  { russian:  "Я буду любить?", english: "Will I love?" },
  { russian:  "Я люблю?", english: "Do I love?" },
  { russian:  "Я любил?", english: "Did I love?" },
  { russian:  "Я буду любить.", english: "I will love." },
  { russian:  "Я люблю.", english: "I love." },
  { russian:  "Я любил.", english: "I loved." },
  { russian:  "Я не буду любить.", english: "I will not love." },
  { russian:  "Я не люблю.", english: "I don't love." },
  { russian:  "Я не любил.", english: "I didn't love." },
  ]; 

  var rand = Object.keys(objects)[Math.floor(Math.random() * objects.length)];
  
  document.getElementById("question").innerHTML = objects[rand].russian;

  // document.getElementById("Right").innerHTML = objects[rand].english;

  function student() {
      
  switch (document.getElementById("answer").value) {
      
      case "Will I love?":
          if ("Will I love?" == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "Do I love?":
          if ("Do I love?" == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "Did I love?":
          if ("Did I love?" == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I will love.":
          if ("I will love." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I love.":
          if ("I love." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I loved.":
          if ("I loved." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I will not love.":
          if ("I will not love." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I don't love.":
          if ("I don't love." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      case "I didn't love.":
          if ("I didn't love." == objects[rand].english) {
          document.getElementById("Right").innerHTML = 'You are right!'; }
          else { document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake"; }
      break;

      default:
      document.getElementById("Wrong").innerHTML = "Sorry, but you was mistake";
     }
  }
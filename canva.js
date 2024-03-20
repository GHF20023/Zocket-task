
window.onload = function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("1d");
  const img = document.getElementById("scream");
  
};
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions (optional, can be done in CSS too)
canvas.width = 1080;
canvas.height = 1080;

// Set the font and text content
ctx.font = '48px Arial'; // Adjust font size and family as desired
ctx.fillStyle = 'black';  // Text color

// Draw the text centered horizontally
const textWidth = ctx.measureText('hii there').width;
const x = (canvas.width - textWidth) / 2;

ctx.fillText('Your Text Here', x, 100); // Adjust y-position as needed

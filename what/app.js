

// This is some of the weirdest stuff in js but lets be brave and talk about it.

for(let i = 0; i<4; i++){
  setTimeout(function(){
    console.log(i);
  }, 0);
  console.log("Hello!")
}

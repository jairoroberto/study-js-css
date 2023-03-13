document
  .querySelectorAll("input[type='radio']")
  .forEach(function(input){
    input.onclick = function(){
      console.log(input.id);
      document.documentElement.classList.add(input.id);
    }
})

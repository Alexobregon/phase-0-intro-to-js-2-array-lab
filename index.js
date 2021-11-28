// Write your solution here!
let cats = ["Milo", "Otis", "Garfield",]

 function destructivelyAppendCat(name) {
    cats.push(name);
 return cats
  }

  function destructivelyPrependCat(name) {
   cats.unshift(name);
   return cats;
  }

  function destructivelyRemoveLastCat(name) {
     cats.pop(name);
     return cats;
  }

  function destructivelyRemoveFirstCat(name) {
     cats.shift(name);
     return cats;
  }
  
  function appendCat(name) {
   let newAppendCat = cats.slice()
      newAppendCat.push(name)
     return newAppendCat;
  }
  
  function prependCat(name) {
     let newPrependCat =cats.slice()
     newPrependCat.unshift(name)
     return newPrependCat;
  }
  function removeLastCat(name) {
     let newRemoveLastCat =cats.slice();
     newRemoveLastCat.pop(name);
     return newRemoveLastCat
     }
   function removeFirstCat(name) {
      let newRemoveFirstCat =cats.slice();
      newRemoveFirstCat.shift(name);
      return newRemoveFirstCat;
   }
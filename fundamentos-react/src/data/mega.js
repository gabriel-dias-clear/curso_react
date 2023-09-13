function mega(){

    function getRandomInt() {
        return Math.floor(Math.random() * (60-0) + 0);
      }

      const array = []
 
        for(let i = 0 ; array.length < 7 ; i++){
            const randomNumber = getRandomInt()
                
            if(!array.includes(randomNumber)){
                array.push(randomNumber)
            }

        }
        
        return array
      
}

mega()

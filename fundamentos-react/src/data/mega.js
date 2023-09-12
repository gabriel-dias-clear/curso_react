function mega(){
    const array = []

    function getRandomInt() {
        return Math.floor(Math.random() * (60-0) + 0);
      }


 
        for(var i = 0 ; array.length < 7; i++){
            const randomNumber = getRandomInt()
                
            if(!array.includes(randomNumber)){
                array.push(randomNumber)
            }

        }
        
        return array
      
}

mega()



export const ScoreAdder = (myChoice,house) =>{
    if (myChoice === "Rock" && house === "Scissors") {
        return 1
      }
      else if (myChoice === "Scissors" && house === "Rock") {
        return -1
      }  
      else if (myChoice === "Rock" && house === "Paper") {
        return -1
      }
      else if (myChoice === "Paper" && house === "Rock") {
        return 1
      }
       else if (myChoice === "Scissors" && house === "Paper") {
        return 1
      } else if (myChoice === "Paper" && house === "Scissors") {
        return -1
      } else {
        return 0
      }

    
}

const Moves = [ "Rock", "Paper","Scissors"]
export const houseMovePicker = () =>{return Moves[Math.floor(Math.random() * 3)]}


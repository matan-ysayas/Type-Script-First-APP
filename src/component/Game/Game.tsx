const Game = () => {
  const NumberCheck = (userNum:number) => {
  
    let higshNum: number = userNum;
    let lowNum: number = userNum;
    while (userNum !== 0) {
         userNum = Number(prompt("enter number"));
        if (userNum > higshNum) {
            higshNum = userNum;
          }  if (userNum < lowNum) {
            lowNum = userNum;
          }
    }
    console.log(`the highes num is${higshNum} and the lowe num is${lowNum}`);

  };
  const Get10=(userNum:number)=>{
      let courtier=0
      let numArray:number[]=[]
      while(courtier<10){
    
      userNum=Number(prompt("enter number"));
      numArray.push(userNum)
      courtier++;
      }
      console.log(numArray.filter((item)=>item%2==0));
      

  }

  return <div>
    <button onClick={()=>NumberCheck(Number(prompt("enter number")))}> 21</button>
    <button onClick={()=>Get10(Number(prompt("enter number")))}>22</button>
  

  </div>;
};
export default Game;

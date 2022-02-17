const Game = () => {
  const NumberCheck = (userNum: number) => {
    let higshNum: number = userNum;
    let lowNum: number = userNum;
    while (userNum !== 0) {
      userNum = Number(prompt("enter number"));
      if (userNum > higshNum) {
        higshNum = userNum;
      }
      if (userNum < lowNum) {
        lowNum = userNum;
      }
    }
    console.log(`the highes num is${higshNum} and the lowe num is${lowNum}`);
  };
  const Get10 = (userNum: number) => {
    let courtier = 0;
    let numArray: number[] = [];
    while (courtier < 10) {
      userNum = Number(prompt("enter number"));
      numArray.push(userNum);
      courtier++;
    }
    console.log(numArray.filter((item) => item % 2 == 0));
  };
  const Array100 = (num: number) => {
    let counter = 0;
    let randomArray: number[] = [];
    while (counter < 100) {
      randomArray.push(Math.floor(Math.random() * 100));
      counter++;
    }
    if (randomArray.find((item) => item == num)) {
      console.log(randomArray);

      console.log("number is in the array");
    } else {
      console.log(randomArray);
      console.log("number is not in the array");
    }
  };

  return (
    <div>
      <button onClick={() => NumberCheck(Number(prompt("enter number")))}>
        21
      </button>

      <button onClick={() => Get10(Number(prompt("enter number")))}>22</button>
      <button
        onClick={() => {
          Array100(10);
        }}
      >
        23
      </button>
    </div>
  );
};
export default Game;

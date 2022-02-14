const Home = () => {
  //   let age: number = 25;
  //   let FisrtName: string = "matan";
  //   let CameToClass: boolean = true;
  //   let GradeArray: number[] = [5, 2, 3];

  const Pop = (): void => {
    alert("welcome");
  };

  //   const PopAlert = () => {
  //     alert(`${age}+${FisrtName}+${CameToClass}+${GradeArray}`);
  //   };

  const PrintIfLong = (name: string): string => {
    if (name.length > 4) {
      return "long then 4";
    } else {
      return "les then 4";
    }
  };

  const AgeCheck = (name: string, age: number): string => {
    if (age > 15) {
      return name;
    } else {
      return "grade not true";
    }
  };
  const PrintAll = (FisrtName: string, LastName: string, age: number = 0) => {
    return `${FisrtName}+${LastName}+${age}`;
  };

  const PrintByLastName = (
    FisrtName: string,
    LastName?: string,
    grade: number = 60,
    ...Friends: number[]
  ) => {
    if (!LastName) {
      alert(`${FisrtName}+${grade}+${Friends}`);
    } else {
      console.log(`${FisrtName}+${LastName}+ ${grade}+${Friends}`);
    }
  };

  const PrintHighstNumber = (...numbers: number[]) => {
    return (Math.max(...numbers))
  };

  const PrintNameAndNumber=(name:string,...numbers:number[])=>{
return(`${name}+${Math.min(...numbers)}`)
  }



  
  return (
    <div>
      {/* <button onClick={PopAlert}>click</button> */}

      {console.log(PrintIfLong("matan"))}
      {console.log(AgeCheck("matan", 25))}
      {console.log(PrintAll("matan", "ysayas"))}
      <button onClick={() => PrintByLastName("matan", "avi", 55, 55, 63, 8)}>
        {" "}
        click
      </button>
      {console.log(PrintHighstNumber(8, 9, 10,22,855,12))}
      {console.log(PrintNameAndNumber("matan",10,12,5,8))}
      
    </div>
  );
};
export default Home;

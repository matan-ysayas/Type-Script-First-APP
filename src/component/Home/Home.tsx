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
    return Math.max(...numbers);
  };

  const PrintNameAndNumber = (name: string, ...numbers: number[]) => {
    return `${name}+${Math.min(...numbers)}`;
  };

  const NameCheck = (name: string, ...names: string[]) => {
    const result = names.filter((item) => item == name);
    if (result.length == 2) {
      return "the name is here twice";
    } else {
      return "the name is not here twice";
    }
  };
  const ClassCheck = (grade?: Number, ...names: string[]) => {
    if (grade) {
      return names.sort();
    } else {
      return names.sort().reverse();
    }
  };
  const ArrayCheck = (num: number = 1) => {
    const array: number[] = [];

    array.push(Math.floor(Math.random() * 10));
    array.push(Math.floor(Math.random() * 10));
    array.push(Math.floor(Math.random() * 10));
    array.push(Math.floor(Math.random() * 10));
    array.push(Math.floor(Math.random() * 10));

    if (array.find((item) => item == num)) {
      return "the number is in the array";
    } else {
      return "the number is not in the array";
    }
  };

  const objCheck = (...objs: {}[]) => {
    objs.forEach((element) => {
      console.log(element);
    });
  };

  const objNumber=(...objs: {name:string,age:number}[])=>{
    let highst=objs[0];
    objs.forEach((item)=>{
      if(item.age>highst.age){
        highst=item;
      } 
    }
    )
    return(highst);
  }


  

  return (
    <div>
      {/* <button onClick={PopAlert}>click</button> */}

      {console.log(PrintIfLong("matan"))}
      {console.log(AgeCheck("matan", 25))}
      {console.log(PrintAll("matan", "ysayas"))}
      <button onClick={() => PrintByLastName("matan", "avi", 55, 55, 63, 8)}>
        click
      </button>
      {console.log(PrintHighstNumber(8, 9, 10, 22, 855, 12))}
      {console.log(PrintNameAndNumber("matan", 10, 12, 5, 8))}
      {console.log(NameCheck("matan", "avi", "matan", "matan"))}
      {console.log(
        ClassCheck(undefined, "matan", "avi", "yosi", "bibi", "cicko")
      )}
      {console.log(ArrayCheck())}
      <button
        onClick={() =>
          objCheck({ name: "matan", age: "bob" }, { name: "matan", age: "bob" })
        }
      >
        18
      </button>

      {console.log(objNumber({name:"matan",age:27},{name:"matan",age:26}))
      }
    </div>
  );
};
export default Home;

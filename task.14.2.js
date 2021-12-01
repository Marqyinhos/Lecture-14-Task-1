let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalary(salaries){
    let max = 0;
    let name = null;
    for(var num in salaries) {
      if (max < salaries[num]) {
        max = salaries[num];
        name = num;
      }
    }
    return name;  
} 
alert("Найбільша зарплатня у " + topSalary(salaries));
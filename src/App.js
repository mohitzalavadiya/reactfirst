import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';



function App() {

  const person_1 = {
    name: "Amit",
    age: 25
  }

  console.log(person_1.name, person_1.age);
  
  
  
  const person_2 = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },
  ];
  person_2.map((p,i) => {
    console.log(p.name, p.age);
  })
  
  
  
  const person_3 = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }
  console.log(person_3.name, person_3.age);
  person_3.course.map((v, i) => console.log(v));
  
  
  const person_4 = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]
  person_4.map((p, i) => {
    console.log(p.name, p.age);
    p.course.map((v, i) => console.log(v));
  })
  
  
  const myObj = {
    name: "John",
    age: 30,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

  for(let k in myObj){
    if(k === 'cars'){
      for(let k1 in myObj[k]){
        console.log(myObj[k][k1]);
      }
    }else{
      console.log(myObj[k])
    }
  }
  
  const data = {
    personal_info: {
      name: 'amit',
      age: 25,
      city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
      rwl: {
        admission: 50,
        vacant_seat: 10
      },
      rw2: {
        admission: 30,
        vacant_seat: 20
      },
      rw3: {
        admission: 25,
        vacant_seat: 25
      },
      rw4: {
        admission: 40,
        vacant_seat: 10
      }
    }
  }

  for(let k in data){
    if(k === 'personal_info'){
      console.log(data[k].name, data[k].age, data[k].city);
    }
    else if(k === 'courses'){
      data[k].map((v, i) => console.log(v));
    }
    else{
      for(let k1 in data[k]){
        console.log(data[k][k1].admission, data[k][k1].vacant_seat);
      }
    }
  }
  
  return (
    <div></div>
  )
};

export default App;

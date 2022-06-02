import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
    

const person_1 = {
  name: "Amit",
  age: 25
}


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


const person_3 = {
  name: "Amit",
  age: 25,
  course: [
      "C",
      "HTML"
  ]
}


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


const myObj = {
  name: "John",
  age: 30,
  cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
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


person_2.map((p.i) => {

})

function App() {
  return (
    <div>
      <ul>
        <li>{person_1.name}</li>
        <li>{person_1.age}</li>
      </ul>

    <ul>
    
      
    </ul>
     
    </div>


  )
}

export default App;

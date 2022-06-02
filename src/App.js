import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';



function App() {


  const Data =
    [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
    ];

  const Employee_Data =
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ]


  let fdata = Data.filter((d, i) => d.status === true && d.expiry >= 2022);
  let ans = fdata.reduce((acc, d, i) => acc + d.price, 0);
  console.log(ans);

  let Edata = Employee_Data.filter((d, i) => d.status === true);
  let Rtotal = Edata.reduce((acc, a, i) => acc + (a.salary + a.bonus), 0)
  console.log(Rtotal);


  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
        {
          fdata.map((v, i) => {
            const { id, name, quantity, price, expiry, status } = v;
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {i === 0 ? <td rowSpan={2}>{ans}</td> : null}
              </tr>
            )
          })
        }
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>total</th>
          <th>Status</th>
          <th>total_expence</th>
        </tr>
        {
          Edata.map((v, i) => {
            const { name, age, salary, bonus, status } = v;
            return (
              <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{bonus + salary}</td>
                <td>{status.toString()}</td>
                {i === 0 ? <td rowSpan={5}>{Rtotal}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App;

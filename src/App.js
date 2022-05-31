import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
    

const Data= 
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
 

function App() {
  return (
    <table border="1" cellPadding="2" cellSpacing="0"> 
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Status</th>
      </tr>
      {
        Data.map((v, i) => {
          const {id, name, quantity, price, expiry, status} = v;
          return(
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{expiry}</td>
            <td>{status.toString()}</td>
          </tr>
          )
        })
      }
    </table>

  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
    

const Medicine_Data= 
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
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>quantity</th>
        <th>price</th>
        <th>expiry</th>
        <th>status</th>
      </tr>
    </table>
    
  );
}

export default App;

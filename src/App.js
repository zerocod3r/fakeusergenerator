import logo from './logo.svg';
import './index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = React.useState({"results":[]});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  function fetchUserData(){
      setLoading(true);
      fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    
  function showProfileData(data){
    return (
      <div>
        <img src={data.results[0].picture.medium} alt="image" />
        <h1>{data.results[0].name.first} {data.results[0].name.last}</h1>
            <table>
            <tr>
                <td><strong>Email</strong></td>
                <td>{data.results[0].email}</td>
            </tr>
            <tr>
                <td><strong>Username</strong></td>
                <td>{data.results[0].login.username}</td>
            </tr>
            <tr>
                <td><strong>Password</strong></td>
                <td>{data.results[0].login.password}</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>{data.results[0].gender}</td>
            </tr>
            <tr>
                <td><strong>Age</strong></td>
                <td>{data.results[0].dob.age}</td>
            </tr>
            <tr>
                <td><strong>DOB</strong></td>
                <td>{data.results[0].dob.date}</td>
            </tr>
            <tr>
                <td><strong>Address</strong></td>
                <td>{data.results[0].location.street.name}, {data.results[0].location.city}, {data.results[0].location.state}, {data.results[0].location.country}</td>
            </tr>
            <tr>
                <td><strong>Phone</strong></td>
                <td>{data.results[0].phone}</td>
            </tr>
        </table>
               
        </div>
            )
  }
  
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: There was an error loading your data!</p>;
    }

    return (
      <div class="card">
        <h1>Random Fake User Generator</h1>
        <form onSubmit={fetchUserData}>
          <input type="submit" value="Generate" />
        </form>
        <br/>
        {data.results.length ? showProfileData(data) : <p></p>}
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
        <form>
            <div class="imgcontainer">
                <img src="avatar.png" alt="Avatar" class="avatar"/>
            </div>

            <div class="input-container">
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required/>
            </div>

            <div class="input-container">
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required/>
            </div>

            <button type="submit">Login</button>
            <div>
            <label>Remember me</label>
            <input type="checkbox" checked="checked" name="remember"/>
            </div>
        </form>
    </div>
  );
}

export default App;

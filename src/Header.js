
const Header = (props) => {
    const weather = props.weather
    const handleSubmit = props.handleSubmit

    return(
        <>
        <label>
        <p>Please Enter your address in the following format.. (Zip Code is optional)<br></br> <em> CITY, STATE ZIP CODE</em></p>
          Address
           <input name="New Address" id ='userAddress' />
        </label>
        <br />
        <button onClick={handleSubmit} id='addressButton'>Submit</button>
        <p><b>Temperature: {weather} (°F)</b></p>
        </>
    );
}

export default Header;
class Garment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gar_name : ''
        }
    }
}

changeGar = (gar_drp_val) => {
    this.setState({gar_name:gar_drp_val});
}

// I need to receive the value from the dropdown and change the state to match

// That "This" value above will be the one referenced for each img url...

// https://www.w3schools.com/react/react_state.asp
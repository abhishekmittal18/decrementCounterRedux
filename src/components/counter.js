import React from 'react';
import {connect} from 'react-redux';
import {decrementCount} from '../redux/counterActions';

function Counter (props){
    return (
        <div>
            <h2>My Count - {props.number}</h2>
            <button onClick={props.decrementCount}>Decrement Count</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        number: state.num
    }
}

const mapDispatchToProps = dispatch => {
    return{
        decrementCount: () => dispatch(decrementCount())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
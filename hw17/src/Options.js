import React,{useState,useContext} from 'react';
import PropTypes from 'prop-types';

function Options (props) {


        

    return (
                
        <li style={{listStyle:'none'}}><input type='checkbox'
        id={props.title.id}
        value={props.title.task}
        onChange={props.handle}
        >
    </input><label for={props.title.id}>{props.title.task}</label></li>
   
    )

}


export default Options;

Options.prototype={
    title:PropTypes.object,
    handle:PropTypes.func
}


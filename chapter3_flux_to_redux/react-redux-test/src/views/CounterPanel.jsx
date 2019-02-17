import React, {Component} from 'react';
import Counter from './Counter.jsx';
import Summary from './Summary.jsx';

class CounterPanel extends Component{
    render(){
        return(
            <div>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>
                <hr/>
                <Summary/>
            </div>
        );
    }
}

export default CounterPanel;
import React, {Component} from 'react';

import Auxiliary from '../../hocs/Auxiliary';

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxiliary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
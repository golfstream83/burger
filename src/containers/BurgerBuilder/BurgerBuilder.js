import React, {Component} from 'react';

import Auxiliary from '../../hocs/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxiliary>
                <Burger />
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
import React, {Component} from 'react';
import './ripple.scss'
class Ripple extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ripple: null
        };
    }

    //Create the ripple element
    createRipple = (e) => {
        let top, left;

        //Checks to see if we should use touch or click events to capture the cursor's position
        if(e.touches) {
            top = e.touches[0].clientY;
            left = e.touches[0].clientX;
        } else {
            top = e.pageY;
            left = e.pageX;
        }
        
        let styles = {top: top -15 + 'px', left: left -15 + 'px', position:'absolute'}
        let ripple = <div className='ripple' style={styles}></div>;
        this.setState({ripple: ripple})
    }

    //Render the ripple on the DOM
    renderRipple = () => {
        if(this.state.ripple !== null) {
            return this.state.ripple;
        }
        return null;
    }

    //Sets the ripple to null, deleting it from the DOM
    removeRipple = (e) => {
        this.setState({ripple: null})
    }

    render() {
        return (
            <div draggable='true' className='ripple-object' onTouchStart={this.createRipple} onTouchEnd={this.removeRipple} onDrag={this.createRipple} onMouseDown={this.createRipple} onMouseUp={this.removeRipple}>
                {this.props.children}
                {this.renderRipple()}
            </div>
        )
    }
}

export default Ripple
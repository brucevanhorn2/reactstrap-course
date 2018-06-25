import React from 'react';

class ColorPicker extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const colorChips = this.props.colors.map((color)=>{
            return <div className="colorChip" style={{backgroundColor: color.color}} id={color.color}></div>;
        });
        return(<h2>Color Picker</h2>);
    }
}

export default ColorPicker;
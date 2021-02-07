import React, {Component} from 'react';
import ColorContext, {ColorConsumer} from '../contexts/color';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component{
    static contextType = ColorContext;

    handleSetColor = color =>{
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render(){
        
        return(
            <div>
                <h2>색상을 선택하세요.</h2>
                <ColorConsumer>
                    {({actions})=> (
                        <div style={{display: 'flex'}}> 
                            {colors.map( color =>(
                                <div 
                                    key={color}
                                    style={{
                                        background: color,
                                        width: '24px',
                                        height:'24px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => this.handleSetColor(color)}
                                    onContextMenu = {e => {
                                        //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시한다.
                                        e.preventDefault();
                                        this.handleSetSubcolor(color);
                                    }}
                                />

                            ))}
                        </div>
                    )}
                
                </ColorConsumer>
            </div>
        );
    }
}

export default SelectColors;
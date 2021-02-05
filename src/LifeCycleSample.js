import React, { Component } from 'react';

class LifeCycleSample extends Component{
    state = {
        number: 0,
        color:null
    }

    myRef = null; //ref를 설정할 부분

    constructor(props){
        super(props);
        console.log('constructor');
    }

    //부모에게 받은 color값을 state에 동기화
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        //state를 변경할 필요가 없으면 null반환
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링하지 않는다.
        return nextState.number % 10 !==4;
    }

    componentWillUnmount(){
        console.log('componentWIllInmount');
    }

    //버튼을 누르면 state.number 값을 1씩 더한다.
    handleClick = () => {
        this.setState({
            number: this.state.number +1
        });

    }

    //DOM에서 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    //snapshot 조회
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상', snapshot);
        }
    }

    render(){
        console.log('render');

        const style={
            color: this.props.color
        };

        return(
            <div>
                
                {this.props.missing.value
                /*의도적 에러 발생 */}
                <h1 style={style} ref={ref => this.myRef =ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;


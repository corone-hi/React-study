import React,{useState} from 'react';

const Counter = () => {
    //배열 비구조화 할당을 사용한 useState
    //[현재상태, 세터함수]
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={()=>setValue(value +1)}> +1</button>
            <button onClick={()=>setValue(value -1)}> -1</button>
        </div>
    );
}

export default Counter;
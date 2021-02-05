import React,{useState, useMemo, useCallback, useRef} from 'react';

//useMemo를 이용한 불필요한 함수 호출을 없앤다.
//useCallback으로 렌더링마다 새로 함수를 생성하는 것을 최적화

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    
    return sum/numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]);

    const onInsert = useCallback(e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list]);

    const avg = useMemo(()=>getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>

    );

}

export default Average;
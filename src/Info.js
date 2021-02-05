import React,{useState, useEffect} from 'react';

//useState 여러개 사용 (useState한개당 하나의 상태값만 관리 가능)
//useEffect 사용


/*
const App = () => {
  const [visible, setVisible] = useState(false);
  return(
    <div>
      <button onClick={()=> {
        setVisible(!visible);
      }}>{visible ? '숨기기' : '보이기'}</button>
      <hr/>
      {visible && <Info />}
    </div>
  );
}
*/

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // 처음렌더링 때만 실행하려면 두번째 파라미터로 비어있는 배열을 넣어준다.
    useEffect(()=>{
       console.log('effect');
       console.log(name);
       return()=>{
           console.log('cleanup');
           console.log(name);
       };
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
                
            </div>
        </div>
    );

}

export default Info;
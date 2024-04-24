import React, { useState, useEffect } from 'react';
// const demo123= ()=>{
//     return(
//         <h1>welcome to react</h1>
//     )
// }

function demo1403() {
    // let myArr: any[] = [{ id: 0, color: 'red' }]
    // console.log(myArr);
    // const [universities, setUniversities] = useState<any[]>([]);
    // useEffect(() => {
    //   fetch('https://internship-api.dev.altasoftware.vn/api/University', {
    //     method: 'GET'
    //   })
    //     .then(response => response.json())
    //     .then((data: any) => {
    //       console.log(data);
    //       setUniversities(data)
    //     })
    // }, [])
    // return (
     
    //   <table style={{ width: '400px', border: '2px solid black' }}>
    //     <tr style={{ border: '2px solid black',color:'red' }}><td>STT</td>Tên trường</tr>
    //     {
    //       universities.filter(x => x.tentruong.includes('HCM')).map((item, index) => {
    //         return (
    //           <tr>
    //             <td>{index + 1}</td><td>{item.tentruong}</td>
    //           </tr>
    //         )
    //       }
    //       )
    //     }
    //   </table>
    // );
    //buổi 2
  
      const[ketqua1, setKetqua1]=useState(0);
      const[ketqua2, setKetqua2]=useState(0);
      const [inputValue, setInputValue]=useState(0);
      function handleClick(){
       // alert("so trong the input ban vua nhap la: "+inputValue)
      // let sum:number = 0;
      //  for(let i=1; i <=inputValue; i++){
      //   sum +=i;
      //  }
      let luythua:number;
      luythua = Math.pow(inputValue, inputValue);
  
       setKetqua1(luythua);
  
       let sum: number = inputValue;
       let d: number;
       let i:number = 1;
       let binary: number = 0;
       
       while (sum > 0) {
         d = sum % 2;
         binary = d*i + binary;
         sum = Math.floor(sum / 2);
         i=i*10;
       }
       setKetqua2(binary);
       }
      
  
      return (
        <div>
          <h1>bai tap react ngay 14-03</h1>
          nhap vao so tu nhien:&nbsp;&nbsp;< input type="number" value={inputValue}
          onChange={(e)=>{
            setInputValue(Number(e.currentTarget.value));
          }}
          />
          <button onClick={handleClick}>Xu ly</button>
          ket qua:<br/>
          <p style={{marginLeft : '20px'}}>a/ {ketqua1}</p>
          <p style={{marginLeft : '20px'}}>b/ {ketqua2}</p>
        </div>
      )
    
  } 
  export default demo1403;
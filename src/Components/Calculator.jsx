import React, { useState }from 'react'
import "./Calculator.css"
import Container from '@mui/material/Container'
import{Box} from "@mui/system"

export default function Calculator() {
  const [num, setNum] = useState(0.0);
  const [oldnum, setOldNum] = useState();
  const [operador, setoperador] = useState();

  function inputNum(e){
    if(num===0){
      setNum(e.target.value)
    }else{
    setNum (num + e.target.value)
    }
  }
  function operadorhandler(e){

    setoperador(e.target.value)
    setOldNum(num)
    setNum(0)
  }
  function limpar(){
    setNum(0)
  }
  function limparTudo(){
    setNum(0)
    setOldNum()
    setoperador()
  }
  function calc(){
    if(operador ==="/"){
      setNum(oldnum / num)
      setOldNum()
      setoperador()
    }if(operador ==="X"){
      setNum(oldnum * num)
      setOldNum()
      setoperador()
    }if(operador ==="+"){
      setNum(parseFloat (oldnum) + parseFloat (num))
      setOldNum()
      setoperador()
    }if(operador ==="-"){
      setNum(oldnum - num)
      setOldNum()
      setoperador()
    }
  }
  function porcent() {
    setNum(num/100)
  }

    function apagar1  ()  {
        let verTela = num
        verTela = verTela.substring(0, verTela.length - 1)
        setNum(verTela)
        setoperador(false)
        return
  }

  function sing(){
    if(num>0){
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }

  return (
    <Container>
      <Box m={1}/>
      <div className='wrapper'>
        <Box m={1}/>
        <h2 className='result'>{oldnum}{operador}{num}</h2>
        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button onClick={inputNum} value={0}>0</button>
        <button onClick={apagar1}>BS</button>
        <button className='cor'onClick={operadorhandler} value='+'>+</button>
        <button className='cor'onClick={operadorhandler} value='-'>-</button>
        <button className='cor'onClick={operadorhandler} value='X'>X</button>
        <button className='cor'onClick={operadorhandler} value='/'>/</button>
        <button className='cor'onClick={porcent}>%</button>
        <button className='cor'onClick={sing}>+/-</button>
        <button className='cor'onClick={limpar} >C</button>
        <button className='cor'onClick={inputNum} value={'.'}>.</button>
        <button className='cor'onClick={calc}>=</button>
        <button className='cor'onClick={limparTudo}>CA</button>
      </div>
    </Container>
  )
}

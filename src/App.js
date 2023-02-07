import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button, Tooltip } from '@material-ui/core';
const App=()=>{
  const [Count,Setcount]=useState(0)

  const Inrem=()=>{
    Setcount(Count+1);
  }
  const Derem=()=>{
    if(Count>0)
    {
    Setcount(Count-1);
    }else{
      alert("Reached to zero!!")
        }
  }
  return (
  <>
  <div className='main_div'>
  <div className='card_div'>
  <h1>{Count}</h1>
  <div className='btn_div'>
  <Tooltip title="Add">
  <Button onClick={Inrem} className="btn_green"><AddIcon/>
  </Button>
  </Tooltip>
  <Tooltip title="Delete">
  <Button onClick={Derem} className="btn_red"><RemoveIcon/>
  </Button>
  </Tooltip>
  </div>
  </div>
  </div>
  </>
  );
}
export default App;
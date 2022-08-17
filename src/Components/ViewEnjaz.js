import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewEnjaz({closeEnjaz}) {
  
  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        TransitionComponent={Transition}
    >
        <h1 onClick={closeEnjaz}>asdasdasd</h1>
        
      </Dialog>
    </div>
  );
}

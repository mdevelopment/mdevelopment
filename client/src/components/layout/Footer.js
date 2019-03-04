import React from 'react';

export default () => {
  return (
    <footer className="mt-5 p-4 text-center"
    style={{fontSize: '.7em',color:'#815268', position:'fixed', bottom:'0', zIndex:'5000', width:'100%'}}
    >
      Copyright &copy; {new Date().getFullYear()} MDEVELOPMENT
    </footer>
  );
};

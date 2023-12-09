import React from 'react'

export default function Alert(props) {
    // in js there is no function to capitalize 1st letter so below loc are used

    // const Capitalize = (word)=> {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).ToUpperCase() + lower.slice(1);
    // }

    

  return (
    <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/*find out why it is not working when i write {capitalize(props.alert.type)} */}
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
    </div>
  )
}

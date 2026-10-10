import React from 'react'
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

export default function Message_toast({Error ,text ,fetch_error ,onClose}) {
    let toast_icon = <FaCircleCheck size={20}/>;
    if (Error && fetch_error) {
        toast_icon = <MdOutlineWifiTetheringErrorRounded size={20}/>;
    } else if(Error && !fetch_error) {
        toast_icon = <MdError size={20}/>;
    } 
  return (
    <div className='centerbox'>
        <div className='message-toast'>
            <div className='flex gap-1'>
                {toast_icon}
                <p>
                    {text}
                </p>
            </div>
            <i className='fa fa-close cursor-pointer' onClick={onClose}></i>
        </div>
    </div>
  )
}

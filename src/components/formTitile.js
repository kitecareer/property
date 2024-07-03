import '../css/Home.css';
import React from 'react';
const Title = ({ title = "" }) => {
    return (
        <div  className='form_Title'><h3 className='heading_Text_style'>
        {title}
    </h3>
    <hr/>
    </div>)
}
export default Title
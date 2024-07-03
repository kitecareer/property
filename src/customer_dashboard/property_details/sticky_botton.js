import { Button } from "@mui/material"
import '../../css/Home.css'
import React from 'react';

const StickyBotton = ({ disable=false, backText = "Back", saveText = "Save", fun_save = () => { console.log("missing_savefun") }, fun_back = () => { console.log("missing_backfun") }}) => {
    return (
        <div className='sticky_Botton'>
            {disable ? null : <Button type="submit" variant="contained"  style={{ margin: '10px 20px' }} onClick={fun_back} >
                {backText}
            </Button>}
            <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ margin: '10px 20px' }}
                onClick={fun_save}
            >
              {saveText}
            </Button>

        </div>
    )
}

export default StickyBotton

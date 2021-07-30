import React from 'react'
import './css/AddFilter.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const AddFilter = ({ openStatus, close }) => {

    return (
        <div className='Filter' id={openStatus ? 'FilterOpen' : ''}>
            <div className="filterheader">
                <h4>+ AddFilter</h4>
                <h4 id='closebtn' onClick={close}>close x</h4>
            </div>
            <div className="condition">
                <form>
                <p>Medium of rent</p>
                <input type="reset" value="Clear" name="Button"></input>
                <fieldset id="Medium">
                <input type="radio" value="Pick Up" name="Medium"></input>
                <lable htmlFor="Pick Up">Pick Up</lable>
                <br></br>
                <input type="radio" value="Delivery" name="Medium"></input>
                <lable htmlFor="Delivery">Delivery</lable>
                </fieldset>
                </form>
            </div>
            <div className="clearAll">
                <div className="deleteIcon">
                    <DeleteRoundedIcon color='error' />
                </div>
                <div className="clearText">
                    <h4>Clear All Filters</h4>
                </div>
                <button className="doneButton">Done</button>
            </div>

        </div>
    )
}

export default AddFilter

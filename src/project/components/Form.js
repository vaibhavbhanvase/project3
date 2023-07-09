import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sectionData } from '../redux/accordionReducer'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Form() {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    const handleChange = (e) => {

        const { name, value } = e.target

        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const dispatch = useDispatch()

    const data = useSelector((state) => state.accordion.info)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sectionData(input))

        setInput({
            title: "",
            content: ""
        })
    }

    console.log(data);

    return (
        <>
        <h1 className='bg-primary p-4 text-center text-white'>Accordion</h1>

           <div className='d-flex justify-content-around'>
           <div className=' col-3  shadow p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 " }}>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label> Section Header<br />
                            <input type='text' name='title' value={input.title} onChange={handleChange} className='form-control'/>
                        </label>
                    </div>

                    <div className='form-group my-4'>
                        <label> Section Details<br />
                            <textarea rows='3' col='7' type='text' name='content' value={input.content} onChange={handleChange} className='form-control'/>
                        </label>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn px-5 btn-primary btn-block' type='submit'>Add</button>
                    </div>
                </form>
            </div>

            <div className=' col-6  mt-5'>
            {data?.map((info) => {
                return <div className='mb-3'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography  variant="h5">{info.title}</Typography>
                        </AccordionSummary>
                        <hr/>
                        <AccordionDetails>
                            <Typography>
                                {info.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            })}
            </div>
           </div>
        </>
    )
}

export default Form
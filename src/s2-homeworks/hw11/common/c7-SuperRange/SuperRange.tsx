import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

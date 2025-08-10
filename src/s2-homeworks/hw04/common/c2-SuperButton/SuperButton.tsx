import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let baseClasses = s.button;

    if (disabled) {
        baseClasses += ' ' + s.disabled;
    } else if (xType === 'red') {
        baseClasses += ' ' + s.red;
    } else if (xType === 'secondary') {
        baseClasses += ' ' + s.secondary;
    } else {
        baseClasses += ' ' + s.default;
    }

    const finalClassName = baseClasses + (className ? ' ' + className : '');
    //ИЛИ ЕСЛИ НЕ ПОНЯТНО С finalClassName  ТОЖЕ САМОЕ ПРИ ПОМОЩИ ШАБЛОННЫХ СТРОК:
    // `${s.СТИЛЬ КНОПКИ}  ${xType==='КРАСНЫЙ' ? ДАВАЙ КРАСНЫЙ СТИЛЬ : xType === 'secondary' ? ДАВАЙ СЕКОНДАРИ СТИЛЬ: ДАВАЙ ПО ДЕФОЛТУ } ${disabled ? ДАВАЙ ДИЗАБЛЕТ СТИЛЬ :  ПУСТУЮ СТРОКУ} `
    // ЭТУ АЛХИМИЯ БУДЕМ ПОДРОБНО РАЗБИРАТЬ НА ДОПАХ

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton

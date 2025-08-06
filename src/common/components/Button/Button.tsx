type TButton = {
    name: string,
    clickHandler : () => void,
    isDisabled?: boolean
}

export const Button = ({name, clickHandler, isDisabled} : TButton) => {

    return(
        <button className="button" disabled={isDisabled} onClick={clickHandler}>{name}</button>
    )
}
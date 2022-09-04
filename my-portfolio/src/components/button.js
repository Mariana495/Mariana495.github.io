import React from 'react';

// esto ya se puede exportar en como un elemento <Button/>
function Button(props){

    const onUserClick = () => {
        props.onClick && props.onClick()
    }

    return (
        <React.Fragment>
            <button onClick={onUserClick} className={"button"}>
                <b> View Project </b>
            </button>
        </React.Fragment>
    )
}

export default Button
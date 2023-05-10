function CustomButton (props) {
    console.log("Custom Button worked")
    return <>
    <button onClick={() => {
        alert(props.message)
        props.setPage(!props.page)
    }}>{props.name}</button>
    </>
}

export default CustomButton

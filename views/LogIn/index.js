import CustomButton from '../../components/CustomButton'

function LogIn(props) {
    return <>
    <h1>This is Log in Page</h1>
    <CustomButton name='Log IN' message='Log in Successful' page={props.page} setPage={props.setPage}/>    
    </>

}

export default LogIn 
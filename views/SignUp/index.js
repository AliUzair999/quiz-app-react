import CustomButton from "../../components/CustomButton"

function SignUp(props) {
    return <>
    <h1>This is Signup Page</h1>
    <CustomButton name="Sign UP" message="Successfully signed Up" setPage={props.setPage} page={props.page}/>

    </>
}

export default SignUp

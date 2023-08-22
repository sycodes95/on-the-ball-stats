import { Oval } from "react-loader-spinner";

function OvalLoadingSpinner () {
  return (
    <Oval
    color="#000000"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#A9A9A9"
    strokeWidth={4}
    strokeWidthSecondary={4}
    />

  )
}

export default OvalLoadingSpinner;
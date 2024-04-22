import { MutatingDots, } from 'react-loader-spinner'

const Loader = () => {


return(
    <>

<MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: "10",
  }}
  wrapperClass=""
  />
  <MutatingDots
//   visible={true}
  height="100vh"
  width="100vw"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="0"
//   ariaLabel="mutating-dots-loading"
  wrapperStyle={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: "2",
  }}
  wrapperClass=""
  />


  </>
)

}



export default Loader;
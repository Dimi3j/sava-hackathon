const LandingPage = () => {
return(
  <div className="container-bg bg-landingPage d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}> 
  <div className="btn-container">
   <div className="button-najava p-2"><a href='/signin' className="btn bg-success rounded-pill   text-white">Најави се</a></div>
   <div className="button-najava"><a href='/signup' className="btn bg-success  rounded-pill  text-white rounded">Регистрирај се</a></div>
   </div>
   </div>
)
}
export default LandingPage;
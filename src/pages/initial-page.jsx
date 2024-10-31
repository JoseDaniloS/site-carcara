import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Main from "../components/main/main"
function initialPage(){
    return(
      <body className="w-screen h-screen bg-[#ffff] flex flex-col space-y-10 font-apotek">
        <Header />
        <Main />
        <Footer />
      </body>
    )
  }
  
  export default initialPage
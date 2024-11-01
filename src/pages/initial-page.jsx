import Footer from "../components/footer/footer"
import Main from "../components/main/main"

function initialPage(){
    return(
      <body className="w-screen h-screen bg-[#ffff] flex flex-col font-montserrat overflow-x-hidden">
        <Main />
        <Footer />
      </body>
    )
  }
  
  export default initialPage
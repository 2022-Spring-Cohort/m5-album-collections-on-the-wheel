import Footer from "./components/Footer";
import Header from "./components/Header";


const footer = document.getElementById('footer');
const navbar = document.getElementById('navbar');

export default() => {
    Setup();

}



function Setup(){
// footer.innerHTML = Footer.SetupFooter();
navbar.innerHTML = Header.SetupNavBar()
Header.SetupEventListeners();
}
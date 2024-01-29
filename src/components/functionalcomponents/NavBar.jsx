import "../css/NavBar.css"
const NavBar=()=>{
    return(
        <ol> 
                 <li> <a href="/Login"><button class="dropbtn">Login</button></a></li>
                <li> <a href="/Home"><button class="dropbtn">Home</button></a></li>
                <li> <a href="/about"><button class="dropbtn">About</button></a></li>
                <li> <a href="/experience"><button class="dropbtn">Experience</button></a></li>
                <li> <a href="/useRef"><button class="dropbtn">useRef</button></a></li>
                <li> <a href="/Memo"><button class="dropbtn">Memo</button></a></li>
                <li> <a href="/Callback"><button class="dropbtn">Callback</button></a></li>
                <li> <a href="/map"><button class="dropbtn">Map</button></a></li>
        </ol>
    )
}
export default NavBar
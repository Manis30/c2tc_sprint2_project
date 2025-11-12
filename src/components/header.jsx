import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 pt-[20px] pb-[20px]">
            <div className="flex flex-row justify-between px-[20px] items-center">
            <h3 className="font-semibold text-[30px] uppercase cursor-pointer text-white hover:text-[#090909]">Placement Management</h3>
           <Link to='/add'><button type="button"  className="bg-black text-white  px-[20px] py-[7px] rounded-[4px] text-[22px]  font-semibold uppercase hover:bg-[#585151] hover:shadow-lg">Add Student</button></Link> 
        </div>
        </div>
    );
}
export default Header
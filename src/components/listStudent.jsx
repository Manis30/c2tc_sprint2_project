import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
function ListStudent() {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/student').then((response) => {
            console.log(response.data)
            setUserList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const deleteStudent = (id) => {
        console.log(id, '--------------')
        axios.delete(`http://localhost:8080/student/${id}`).then((response) => {
            console.log('Deleted data', response.data)
            alert('Student data deleted')
            setUserList(userList.filter((student) => student.studentId !== id));
        }).catch((error) => { console.log(error) })
    }
    return (
        <div className="bg-[#e0e4fd] px-[30px] text-center py-10">
            <h1 className="font-bold text-[27px] uppercase text-[#f04444] mb-2">Student Records 📖</h1>
            <div className="grid grid-cols-3 gap-5 text-left py-5">
                {userList.map((item) => (
                    <div className=" rounded-md p-4 font-semibold text-[20px] bg-[#0085ff] cursor-pointer translate hover:translate-y-[-10px] duration-1000 hover-shadows  hover:bg-[#5bb3fa]  ">
                        <h2>Name: <span className="font-medium text-[18px]">{item.studentName}</span></h2>
                        <h3 >Id: <span className="font-medium text-[18px]">{item.studentId}</span></h3>
                        <h4>Course: <span className="font-medium text-[18px]">{item.course}</span></h4>
                        <h4>Qualification: <span className="font-medium text-[18px]">{item.qualification}</span></h4>
                        <h4>Percentage: <span className="font-medium text-[18px]">{item.percentage}</span></h4>
                        <h4>Year: <span className="font-medium text-[18px]">{item.year}</span></h4>
                        <h5>College: <span className="font-medium text-[18px]">{item.collegeName}</span></h5>
                        <div className="mt-3">
                            <Link to={`/update/${item.studentId}`}><button type="button" className="bg-[#ded056] uppercase font-medium text-[17px] px-5 rounded-md hoverbtn-shadows text-white mr-5 py-1 hover:bg-yellow-500 ">Edit ✏️</button></Link>
                            <button type="button" className="bg-[#ef4646] uppercase font-medium text-[17px] px-5 rounded-md hoverbtn-shadows text-white py-1 hover:bg-red-600" onClick={() => { deleteStudent(item.studentId) }}>Delete ✖️</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default ListStudent
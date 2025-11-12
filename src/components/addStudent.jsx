import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function AddStduent() {
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [college, setCollege] = useState('')
    const [qualification, setQualification] = useState('')
    const [year, setYear] = useState('')
    const [percentage, setPercentage] = useState('')
    const [error, setError] = useState({})
    const navigate=useNavigate()
    const newErrors = {}
    const validateForm = () => {
        if (!name) {
            newErrors.name = true
        }
        else {
            newErrors.name = false
        }
        if (!course) {
            newErrors.course = true
        }
        else {
            newErrors.course = false
        }
        if (!year) {
            newErrors.year = true
        }
        else {
            newErrors.year = false
        }
        if (!college) {
            newErrors.college = true
        }
        else {
            newErrors.college = false
        }
        if (!percentage) {
            newErrors.percentage = true
        }
        else {
            newErrors.percentage = false
        }
        if (!qualification) {
            newErrors.qualification = true
        }
        else {
            newErrors.qualification = false
        }
        if(!newErrors.name && !newErrors.college && !newErrors.course && !newErrors.percentage && !newErrors.qualification && !newErrors.year){
            console.log('true')
            axios.post('http://localhost:8080/student',{studentName:name,
  course,
  qualification,
  percentage: parseFloat(percentage),
  year: parseInt(year),
  collegeName: college}).then((response)=>{
                console.log(response.data)
                alert('Student added successfully')
               navigate('/')
            }).catch((err)=>{console.log(err)})
        }
        setError(newErrors)
    }
    return (
        <div className="bg-[#e0e4fd] justify-center flex flex-row ">
            <form className="flex flex-col  justify-center p-[20px] w-[500px] text-center bg-white my-10 rounded-md">
                <h3 className="text-[27px] uppercase font-bold text-[#3f51b5] mb-3">Add student</h3>
                <input type='text' placeholder="Student Name" className={`mb-3 p-2  focus:outline-none border-2 rounded-md ${error.name ? 'border-red-700' : 'border-[#6793e0] '} focus:border-[#0008c5]`} value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Course Name" className={`mb-3 p-2  focus:outline-none border-2 ${error.course ? 'border-red-700' : 'border-[#6793e0] '} rounded-md focus:border-[#0008c5]`} value={course} onChange={(e) => setCourse(e.target.value)} />
                <input type="text" placeholder="Qualification" className={`mb-3 p-2  focus:outline-none border-2 ${error.qualification ? 'border-red-700' : 'border-[#6793e0] '} rounded-md focus:border-[#0008c5]`} value={qualification} onChange={(e) => setQualification(e.target.value)} />
                <input type="text" placeholder="Percentage" className={`mb-3 p-2  focus:outline-none border-2 ${error.percentage ? 'border-red-700' : 'border-[#6793e0] '} rounded-md focus:border-[#0008c5]`} value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                <input type='number' placeholder="Year" className={`mb-3 p-2  focus:outline-none border-2 ${error.year ? 'border-red-700' : 'border-[#6793e0] '} rounded-md focus:border-[#0008c5]`} value={year} onChange={(e) => setYear(e.target.value)} />
                <input type="text" placeholder="College Name" className={`mb-3 p-2  focus:outline-none border-2 ${error.college ? 'border-red-700' : 'border-[#6793e0] '} rounded-md focus:border-[#0008c5]`} value={college} onChange={(e) => setCollege(e.target.value)} />
                <div className="text-center">
                    <Link to='/'> <button type="button" className="bg-red-500 py-2 px-4 text-[20px] font-semibold rounded-[4px] uppercase hoverbtn-shadows mt-3 mr-5 text-white hover:ring-blue-400   hover:bg-[#f96060]">Cancel ✖️</button></Link>
                    <button type="button" className=" bg-[#0052d7] py-2 px-4 text-[20px] font-semibold rounded-[4px] uppercase mt-3 text-white hoverbtn-shadows hover:ring-blue-400   hover:bg-blue-500" onClick={validateForm}>Add ➕</button>
                </div>
            </form>
        </div>
    );
}
export default AddStduent;
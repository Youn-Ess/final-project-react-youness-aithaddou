import { useContext, useState } from "react"
import { MyContext } from "../../../utils/ContextProvider"
import { useNavigate } from "react-router-dom"

export const Section1SignUp = () => {
    const [firstName, setFirstName] = useState(``)
    const [lastName, setLastName] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const { customer, setCustomer } = useContext(MyContext)

    const navigate = useNavigate()



    const handlCreactUser = () => {
        if (firstName && lastName && email && password) {
            const isUserExist = customer.find(element => (element.Email == email))

            if (isUserExist) {
                return alert(`email all ready used`)
            }
            let user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            setCustomer([...customer, user])
            setFirstName(``)
            setLastName(``)
            setEmail(``)
            setPassword(``)
        } else {
            alert(`must fill all inputs`)
        }
    }
    console.log(customer);

    return (
        <>
            <div className="lg:pt-[4.4rem]">
                <div className="lg:px-[13rem] py-[5rem] flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[2.6rem] font-normal">Create Account</h1>
                        <p className=" text-[1.2rem] text-gray-500">Your Personal Details</p>
                    </div>
                    <div className="flex flex-col gap-2 px-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">First Name</label>
                            <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="First Name" type="text" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Last Name</label>
                            <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="Email" type="email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="Password" type="password" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={handlCreactUser} className="bg-[#222222] text-white font-thin text-[1rem]  w-fit px-[2.5rem] py-[0.7rem] ">CREATE</button>
                        <p className="text-[1rem ] text-gray-400 cursor-pointer transition delay-100 hover:text-[#e7654c]" onClick={() => { navigate(`/`) }}>or Return to Store</p>
                    </div>
                </div>

            </div>
        </>
    )
}
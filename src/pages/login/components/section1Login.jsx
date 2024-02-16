import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MyContext } from "../../../utils/ContextProvider"

export const Section1Login = () => {
    const navigate = useNavigate()

    const { customer, setCustomer } = useContext(MyContext)

    const [email, setEmail] = useState(``)

    const [password, setPassword] = useState(``)

    const handleSignUp = () => {
        const isUserExist = customer.find(element => (element.email == email) && (element.password == password))
        console.log(isUserExist);
        if (!isUserExist) {
            alert(`email or password uncorrect`)
        } else {
            alert(`welcome`)
            setEmail(``)
            setPassword(``)
        }
    }


    return (
        <>
            <div className="lg:pt-[4.4rem]">
                <div className="px-[13rem] py-[5rem] flex lg:flex-row gap-4">
                    <div className="border w-[50%] px-[1rem] py-[1.5rem] h-full flex flex-col gap-4">
                        <div>
                            <h1 className="text-[2.2rem]">New Customer</h1>
                            <p className="font-medium text-[1rem] text-gray-500">Register Account</p>
                            <p className="font-thin text-[1rem ] text-gray-400">By creating an account  you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        </div>
                        <button className="bg-[#222222] text-white font-thin text-[1rem]  w-fit px-[2.5rem] py-[0.7rem] " onClick={() => { navigate(`/signUp`) }} >CONTINUE</button>
                    </div>

                    <div className="border w-[50%] px-[1rem] py-[1.5rem] h-full flex flex-col gap-2">
                        <div>
                            <h1 className="text-[2.2rem]">Returning Customer</h1>
                            <p className="font-medium text-[1rem] text-gray-500">i am a returnign customer</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="email" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password</label>
                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="border px-[1rem] py-[0.5rem]" placeholder="password" type="Password" />
                                <p className="font-thin text-[1rem ] text-gray-400">Forget you password?</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="bg-[#222222] text-white font-thin text-[1rem]  w-fit px-[2.5rem] py-[0.7rem] " onClick={handleSignUp}>SIGN UP</button>
                                <p className="text-[1rem ] text-gray-400 cursor-pointer transition delay-100 hover:text-[#e7654c]" onClick={() => { navigate(`/`) }}>or Return to Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
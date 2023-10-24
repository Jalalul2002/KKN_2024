import Image from "next/image" 
import StoriImage from '../../public/images/speker-logo.png'
import Link from "next/link"

const forgotPassword = () => {
  return (
    <div className="flex justify-center py-9">
        <div className="justify-between items-center">
            <div className="flex justify-center">
                <h1 className="font-bold text-xl font-serif">SILAHKAN HUBUNGI ADMIN JURUSAN</h1>
            </div>

            <Image src={StoriImage} alt="tetxt" />
            
            <div className="flex justify-center">
                <h1 className="py-1 px-4 bg-[#85997D] text-[#FFFFFF] justify-items-center font-bold ">08279847502</h1>
            </div>

            <h6 className="flex justify-center py-9 font-bold font-serif">KKN UIN SGD 2024</h6>
        </div>
    </div>
  )
}

export default forgotPassword
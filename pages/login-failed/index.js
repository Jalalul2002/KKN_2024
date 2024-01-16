import Image from "next/image"
import MyImage from "../../public/images/face-pana.png"
import Link from "next/link"

const loginFailed = () => {
  return (
    <>
    <div className="grid justify-items-center ">
        <Image src={MyImage} alt="" />
        <div className="bg-[#FE8477] rounded-md py-2 px-2 shadow-lg">
            <h4 className="font-bold">LOGIN GAGAL !!!</h4>
            <h4>Username/Password tidak cocok</h4>
        </div>
    </div>

    <div className="grid justify-items-center py-3">
    <Link href='/login' className="bg-[#85997D] px-4 py-1 rounded-md hover:bg-[#8FBB63]">Kembali</Link>
    </div>

    <h6 className="flex justify-center py-6 font-bold font-serif">KKN UIN SGD 2024</h6>
    </>
  )
}

export default loginFailed
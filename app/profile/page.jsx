'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useProfileMutation } from "@/redux/api/user";
import {useState, useEffect } from "react";
import { toast } from "react-toastify";


const Profile = () => {
  const router = useRouter();
  const {data:session, status: sessionStatus}  = useSession();
  const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();
  // console.log(session?.user._id)
  
      // if (!session){
      //     router.push("/login")
      // }
  

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setUsername(session?.user.username);
    setEmail(session?.user.email);
  }, [session?.user.username, session?.user.email]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log({
    //   _id: session?.user._id,
    //   username,
    //   email,
    //   password,
    // })
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: session?.user._id,
          username,
          email,
          password,
        }).unwrap();
        toast.success("Profile updated successfully");
      } catch (err) {
        console.log(err);
      }
    }
  };
  
  return (
    <div className='flex min-h-screen bg-[#191919] flex-col items-center justify-center p-24'>
        <div className='backdrop-blur-sm bg-black/40 text-white p-8 rounded shadow-md w-96'>
            <h2 className='text-2xl font-semibold text-center text-red-500 mb-4'>Update Profile</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-4 ">
                    <div className="mb-4">
                        <label htmlFor="username" className='block   text-sm font-bold mb-2'>Username</label>
                        <input type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)} name="username" id="username" className='w-full text-black outline-none p-2 border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className='block text-sm font-bold mb-2'>Email</label>
                        <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} name="email" id="email" className='w-full text-black outline-none p-2 border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className='block  text-sm font-bold mb-2'>Password</label>
                        <input type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)} name="password" id="password" className='w-full text-black outline-none p-2 border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password-confirm" className='block text-sm font-bold mb-2'>Confirm Password</label>
                        <input type="password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} id="password-confirm" className='w-full text-black outline-none p-2 border border-gray-300 rounded' />
                    </div>

                    <div>
                        <button type="submit" className='mb-5 p-3 w-full bg-red-500 text-white rounded-md'>Update</button>
                    </div>
                    {/* {isLoading && <Loader/>} */}

                   
                </div>
            </form>
    </div>
    </div>
  )
}

export default Profile;

import "./globals.css";
import SessionProvider from "@/utils/SessionProvider"
import {getServerSession} from 'next-auth'

import ReactToast from "@/components/react-toast";
import StoreProvider from "@/redux/StoreProvider"
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineMax - Home",
  description: "A movie streaming web app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <StoreProvider>
    <html lang="en">
      {/* className={inter.className} */}
      <body>       
            <SessionProvider session={session}>
                <Navbar/>                            
                {children}
                <ReactToast/>
                <Footer/>                      
            </SessionProvider>
           
      </body>
    </html>
    </StoreProvider> 
  );
}


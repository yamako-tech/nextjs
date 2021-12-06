import Layout from '../components/Layout';
import Image from "next/image";

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="bg-yellow-50 text-center shadow-xl p-8 w-80 rounded">
                <div className="mt-4">
                    <p className="font-bold">Contact Me!</p>                    
                </div>
                <div className="flex justify-center mt-4">
                    <Image 
                    className="rounded-full"
                    src="/hero-img2.png"
                    width={60}
                    height={60}
                    alt="Avatar"
                    />
                </div>
                <div className="mt-4">
                    <p className="font-bold">Address</p>
                    <p className="text-xs mt-2 text-green-700">Osaka, Japan</p>
                    <p className="font-bold mt-3">email</p>
                    <p className="text-xs mt-2 text-green-700">askkyodai@gmail.com</p>
                </div>
                <div className="mt-6 flex justify-around">
                    
                </div>
            </div>
        </Layout>
     )
};

export default Contact;

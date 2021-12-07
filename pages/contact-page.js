import Layout from '../components/Layout';
import Image from "next/image";

export default function Contact() {
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
                    <a href="https://twitter.com/t_yamamomo">
                    <Image src="/twitter.svg" alt="twitter icon" width={20} height={20} />
                    </a>
                    <a href="https://www.instagram.com/yamako2222/">
                    <Image src="/instagram.svg" alt="instagram icon" width={20} height={20} />
                    </a>
                    <a href="https://github.com/yamako-tech/">
                    <Image src="/github.svg" alt="github icon" width={20} height={20} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCmdIQNlqNMrczJRCeZioiCw">
                    <Image src="/youtube.svg" alt="youtube icon" width={20} height={20} />
                    </a>
                </div>
            </div>
        </Layout>
     )
};


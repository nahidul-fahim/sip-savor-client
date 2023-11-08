

const OutStory = () => {

    // necessary images
    const about1 = 'https://i.ibb.co/vxzZf40/about4.png';
    const about2 = 'https://i.ibb.co/nM0Yh4j/about3.png';
    const about3 = 'https://i.ibb.co/KhLvwwQ/about2.png';
    const about4 = 'https://i.ibb.co/wshYjYq/about1.png';


    return (
        <div className="p-5 gap-10 container mx-auto flex flex-col lg:flex-row justify-between items-center py-[100px] bg-white w-full">

            {/* details section */}
            <div className="w-full md:w-[80%] lg:w-[50%] flex flex-col justify-center items-center text-center font-heading">
                <h3 className="text-9xl font-fancy text-main text-center">This is</h3>
                <h2 className="mt-[-40px] text-5xl tracking-[1px] font-extrabold uppercase font-heading text-second">Our story</h2>
                <p className="font-regular text-[gray] font-medium tracking-[1px] mt-8">
                    Welcome to Sip & Savor, where we craft exceptional culinary experiences. As your culinary oasis, we offer an extensive menu, spanning from delectable appetizers to indulgent desserts. Our dedicated chefs source the finest local ingredients, ensuring each dish is a work of art.
                    Our passion for flavor extends to your convenience. Explore our diverse menu from the comfort of your home through our seamless online ordering platform. Whether you seek classic comfort food or daring fusion creations, our menu offers a culinary journey like no other.
                </p>
            </div>

            {/* image section */}
            <div className="w-full md:w-[80%] lg:w-[50%] grid grid-cols-2 gap-7 justify-items-stretch content-stretch">

                <img src={about1} alt="" />
                <img src={about2} alt="" />
                <img src={about3} alt="" />
                <img src={about4} alt="" />

            </div>
        </div>
    );
};

export default OutStory;
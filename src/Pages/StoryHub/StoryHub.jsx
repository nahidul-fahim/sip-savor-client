import { Helmet } from "react-helmet";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import useAxiosFetch from "../../Hooks/useAxiosFetch/useAxiosFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";


// Necessary images
const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';
const pageBg = 'https://i.ibb.co/vZnrkYc/groupbg.png';


const StoryHub = () => {


    // hooks
    const axiosFetch = useAxiosFetch();
    const [allPosts, setAllPosts] = useState('');
    const postSubmitForm = useRef(null);
    const [postLoading, setPostLoading] = useState(true);



    // get current user
    const { currentUser, loading } = useAuthenticate();
    const userEmail = currentUser?.email;
    const userName = currentUser?.displayName;
    const userImg = currentUser?.photoURL;

    console.log(userEmail, userName, userImg);



    // get all the submitted posts
    useEffect(() => {
        axiosFetch.get("/allposts")
            .then(res => {
                setAllPosts(res.data);
                setPostLoading(false);
            })
    }, [axiosFetch])




    // conditional loading
    if (loading && postLoading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }


    // get today's date and time
    const todayDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString();



    // submit new post
    const handleNewPostSubmit = e => {
        e.preventDefault();
        const postDesc = e.target.postDesc.value;

        const newPostInfo = { userName, userEmail, userImg, postDesc, todayDate, currentTime }

        axiosFetch.post("/newpost", newPostInfo)
            .then(res => {
                const data = res.data;
                if (data?.insertedId) {
                    console.log(data);
                    postSubmitForm.current.reset();
                }
            })
            .catch(err => {
                console.log(err.code)
            })
    }





    return (
        <div>
            <Helmet>
                <title>Shop page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* Banner Part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Story Hub</h2>
            </div>

            {/* main content section button */}
            <div className="container mx-auto p-5 flex flex-col justify-center items-center">

                {/* post button and modal */}
                <div className="w-full flex justify-end items-center mt-5">
                    <button onClick={() => document.getElementById('postStoriesModal').showModal()}
                        className="w-fit bg-main px-5 py-2 font-heading uppercase text-white tracking-[3px] font-medium hover:bg-second duration-500 hover:scale-110 cursor-pointer">Post Your Story</button>

                    {/* modal to post new stroies */}
                    <dialog id="postStoriesModal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box w-full flex flex-col justify-center items-center gap-5">
                            <h3 className="font-heading text-3xl text-main font-medium">Post Your Story</h3>

                            <div className="modal-action w-full">

                                {/* new post submission form */}
                                <form method="dialog" ref={postSubmitForm}
                                    onSubmit={handleNewPostSubmit}
                                    className="w-full flex flex-col justify-center items-start gap-5">

                                    <div className="w-full flex justify-center items-center gap-3">
                                        {/* user name */}
                                        <input readOnly type="text" name="name" id="name" value={userName} className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-1/2 font-medium tracking-[2px]" />

                                        {/* user email */}
                                        <input readOnly type="email" name="email" id="email" value={userEmail} className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-1/2 font-medium tracking-[2px]" />
                                    </div>

                                    {/* post description area */}
                                    <textarea name="postDesc" id="postDesc" placeholder="Enter post description" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-regular tracking-[2px]"></textarea>

                                    <input type="submit" value="Share" className="w-fit bg-main px-5 py-2 font-heading uppercase text-white tracking-[3px] font-medium hover:bg-second duration-500 hover:scale-110 cursor-pointer" />
                                </form>
                            </div>
                        </div>
                    </dialog>


                </div>


                {/* all post display */}
                <div>
                    {
                        allPosts.map(post =>
                            <div key={post._id}
                                className="flex justify-start items-start gap-2">
                                <div className="flex justify-start items-start">
                                    <img src={post?.userImg} alt="" className="rounded-full" />
                                </div>
                                <div>
                                    <p className="font-body text-bodyText">{post?.postDesc}</p>
                                </div>
                            </div>)
                    }
                </div>



            </div >




        </div >
    );
};

export default StoryHub;
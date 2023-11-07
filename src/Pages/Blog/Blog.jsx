

const Blog = () => {

    // Page banner image
    const pageBg = 'https://i.ibb.co/D1MZR58/blogBg.png';


    return (
        <div>

            {/* Banner Part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Blog</h2>
            </div>

            {/* blog part */}
            <div className='mt-12 container mx-auto p-5 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 font-heading'>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-semibold">
                        What is One way data binding?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[gray] font-medium">One-way data binding is a technique that allows data to flow in one direction, from the data source to the user interface (UI). This means that when the data source changes, the UI is automatically updated to reflect the new data. However, changes made to the UI do not affect the data source.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-semibold">
                        What is NPM in node.js?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[gray] font-medium">NPM (Node Package Manager) is the default package manager for Node.js. It is a package ecosystem that allows developers to share code and manage dependencies. NPM is included with Node.js and can be used to install, manage, and uninstall packages.</p>
                    </div>
                </div>


                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-semibold">
                        Difference between Mongodb database vs mySQL database.
                    </div>
                    <div className="collapse-content space-y-3">
                        <h3 className="font-semibold text-[18px] text-[gray]">MongoDB</h3>
                        <p className="font-medium text-[gray]">MongoDB is a NoSQL database that stores data in JSON-like documents. This makes it a good choice for applications that need to store and retrieve unstructured data. MongoDB is also horizontally scalable, meaning that it can be distributed across multiple servers to handle large amounts of data.</p>
                        <h3 className="font-semibold text-[18px] text-[gray]">MySQL</h3>
                        <p className="font-medium text-[gray]">MySQL is a relational database that stores data in tables. This makes it a good choice for applications that need to store and retrieve structured data. MySQL is also vertically scalable, meaning that it can be scaled up by adding more hardware to a single server.</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blog;
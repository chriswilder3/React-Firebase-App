import React from 'react'

function PostCreate() {
    const handleCreatePost = () =>{
        
        console.log();
    }

  return (
    <div className='mt-14 '>
        <h1 className=' mb-2 text-2xl fira-mono text font-medium '>
            Add the blog contents here :
        </h1>
        <div className="flex justify-center items-center min-h-screen bg-slate-100 p-6">
            <form onSubmit={handleCreatePost} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center">Create a New Blog Post</h1>

                {/* Blog Title */}
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title of the Blog:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter blog title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Blog Content */}
                <div>
                    <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Your Content:</label>
                    <textarea
                        id="content"
                        rows="8"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write something..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default PostCreate
import React, { useEffect, useState } from 'react';

function Konten() {
    const[Posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
        .then (response => response.json())
        .then (data => setPosts(data))
    }, []);

    return(
        <div className='bg-gray-100 py-10 px-5'>
            <div className='max-w-6xl mx-auto'>                
                <div className='mb-10'>
                    <p className='text-sm font-semibold text-teal-600'>KATEGORI</p>
                    <h2 className='font-bold text-3xl mt-2'>Apa yang baru di Petani Kode? 🔥</h2>
                    <p className='text-slate-500 mt-1'>Baca artikel terbaru yang masih fresh dan hangat.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {Posts.map(Posts => (
                    <div
                    key={Posts.id}
                    className='bg-white rounded-lg shadow-md p-5'
                    >
                        <h2 className='font-bold text-lg mb-2'>
                            {Posts.title}
                        </h2>
                        <p className='text-gray-700 text-sm '>
                            {Posts.body}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Konten;
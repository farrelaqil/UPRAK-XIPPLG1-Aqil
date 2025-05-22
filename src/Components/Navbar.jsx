import React from 'react'
import Topi from '../assets/Tani.svg';
import Home from '../assets/Home.svg';
import Kelas from '../assets/Play.svg';
import Tutorial from '../assets/Tutorial.svg';
import Buku from '../assets/Buku.svg';
import Discord from '../assets/DiscordPhoto.svg';
import SearchIcon from '../assets/Kanan1.svg'; 

function Navbar(){
    return(
        <div className='bg-teal-600 w-full p-2'>
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                <div className='flex items-center gap-7'>
                    <img src={Topi} alt="" className='w-8 h-8'/>

                    <ul className='flex gap-6 items-center'>
                        <li className='text-white text-md font-semibold flex items-center gap-1'>
                            <img src={Home} alt="" className='w-5 h-5'/> Home
                        </li>
                        <li className='text-white text-md font-semibold flex items-center gap-1'>
                            <img src={Kelas} alt="" className='w-6 h-6'/> Kelas
                        </li>
                        <li className='text-white text-md font-semibold flex items-center gap-1'>
                            <img src={Tutorial} alt="" className='w-5 h-5'/> Tutorial
                        </li>
                        <li className='text-white text-md font-semibold flex items-center gap-1'>
                            <img src={Buku} alt="" className='w-5 h-5'/> Buku
                        </li>
                        <li className='text-white text-md font-semibold flex items-center gap-1'>
                            <img src={Discord} alt="" className='w-5 h-5'/> Discord
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
                    <img src={SearchIcon} alt="search" className='w-5 h-5'/>
                    <button className='bg-teal-400 text-white px-4 py-1 rounded-md font-medium'>
                        Join Newsletter
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;

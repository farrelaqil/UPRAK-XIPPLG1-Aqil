import React from 'react';
import Kode from '../assets/PetaniKode.svg';

function Hero() {
    return (
        <div className="text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20 bg-slate-800">
            <div className="max-w-xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-5">Petani Kode</h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                    Belajar budidaya kode <em>(coding)</em> dengan tutorial yang mudah dipahami. 
                    <span className="font-semibold"> Mostly</span> pakai Linux.
                </p>
                <div className="flex gap-4">
                    <button className="bg-teal-500 text-white px-5 py-2.5 rounded-md hover:bg-teal-600 text-base">Mulai Belajar</button>
                    <button className="border border-teal-400 text-white px-5 py-2.5 rounded-md hover:bg-teal-600 text-base">Join Newsletter</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={Kode} alt="Petani Kode" className="w-[80%] max-w-lg" />
            </div>
        </div>
    );
}

export default Hero;

import React from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router-dom';
import BlogItem from '../components/BlogItem';

function Blog(props) {
    const blogs = useLoaderData()
    const {title, img, sections, introduction} = blogs
    return (
        <div>
            <Navbar></Navbar>
            <section className="my-20 p-5 sizing bg-orange-100" id='blog'>

              <h1 className="text-center text-3xl font-semibold">{title}</h1>

              <p className='text-center md:mx-32 my-5'>{introduction}</p>

              <img src={img} alt="" />

              <div className="mt-5">
               {
                sections.length && sections?.map((item ,ind)=> <BlogItem key={ind} item={item}></BlogItem>)
               }
              </div>
              

            </section>
        </div>
    );
}

export default Blog;
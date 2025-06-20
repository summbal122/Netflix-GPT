import { useState } from "react"

  const SectionSignUpAbout = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-20">
    
    <div className='space-y-4'>
      <h1 className='text-xl md:text-2xl font-bold text-white'> More Reasons to Join</h1>
      <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-4 '>
        <div className='bg-[#1b1b36] p-6 flex flex-col gap-16 justify-between bg-gradient-to-t from-pink-800/20 rounded-xl'> 
          <div className='text-white space-y-4' >
            <h1 className='font-bold text-2xl'>Enjoy on your TV</h1>
            <p className='text-sm text-white/70 '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='text-end'>
            <i className="fa-solid fa-tv text-3xl bg-gradient-to-l from-pink-800 to-purple-600 bg-clip-text text-transparent"></i>
          </div>
          
        </div>
         <div className='bg-[#1b1b36] p-6 flex flex-col gap-16 justify-between bg-gradient-to-t from-pink-800/20
          rounded-xl'> 
          <div className='text-white space-y-4' >
            <h1 className='font-bold text-2xl'>Download your shows to watch offline</h1>
            <p className='text-sm text-white/70 '>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className='text-end '>
            <i className="fa-solid border-3 border-pink-900 py-1 px-2 rounded-full fa-arrow-down text-3xl bg-gradient-to-l from-pink-800 to-purple-600 bg-clip-text text-transparent"></i>
          </div>
          
        </div>

       <div className='bg-[#1b1b36] p-6 flex flex-col gap-16 justify-between bg-gradient-to-t from-pink-800/20
        rounded-xl'> 

          <div className='text-white space-y-4' >
            <h1 className='font-bold text-xl'>Enjoy on your TV</h1>
            <p className='text-sm text-white/70 '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='text-end'>
            <i 
            className="fa-solid fa-binoculars text-3xl bg-gradient-to-l from-pink-800 to-purple-600 bg-clip-text text-transparent"></i>
          </div>
          
        </div>

      <div className='bg-[#1b1b36] p-6 flex flex-col gap-16 justify-between bg-gradient-to-t from-pink-800/20
       rounded-xl'> 
          <div className='text-white space-y-4' >
            <h1 className='font-bold text-xl'>Enjoy on your TV</h1>
            <p className='text-sm text-white/70 '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='text-end'>
            <i className="fa-solid  fa-users text-3xl bg-gradient-to-l from-pink-800 to-purple-600 bg-clip-text text-transparent"></i>
          </div>
          
        </div>

     </div>
     </div>
     
      <div className="space-y-4">
        <h1 className='text-white font-bold text-xl md:text-2xl'>Frequently Asked Questions</h1>
      
       <div className='flex flex-col space-y-2'>

        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>What is Netflix?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            className='text-xl md:text-xl font-thin'>{openIndex=== 0 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 0 && (
             <div className='bg-[#2d2d2d] py-4 px-6 text-md md:text-2xl  space-y-8'>
            <p >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
           </p>
             <p> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </div>
           )}
            </div> 

                
        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>How much does Netflix cost?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            className='text-xl font-thin'>{openIndex === 1 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 1 && (
             <div className='bg-[#2d2d2d] py-4 px-6 text-md md:text-2xl '>
            <p >Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.
           </p>
            </div>
           )}
            </div> 
        
                
        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>Where can I watch?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            className='text-xl font-thin'>{openIndex === 2 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 2 && (
             <div className='bg-[#2d2d2d] py-4 px-6 text-md md:text-2xl  space-y-8'>
            <p >Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
           </p>
             <p> You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
           )}
            </div> 
          
                  
        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>How do I cancel?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
            className='text-xl font-thin'>{openIndex=== 3 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 3 && (
             <div className='bg-[#2d2d2d] py-4 px-6 text-md md:text-2xl  space-y-8'>
            <p >Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
           </p>
            </div>
           )}
            </div> 

                  
        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>what can I watch on Netflix?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
            className='text-xl font-thin'>{openIndex===4 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 4 && (
             <div className='bg-[#2d2d2d] py-4 px-6  text-md md:text-2xl space-y-8'>
            <p >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
           </p>
            </div>
           )}
            </div> 

                  
        <div className='space-y-[2px] text-white'>
          <div className='bg-[#2d2d2d] py-4 px-6 flex items-center justify-between'>
            <p className='text-md md:text-2xl '>Is Netflix good for Kids?</p>
            <span  
            onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
            className='text-xl font-thin'>{openIndex===5 ? '-' : '+'}</span>
           
          </div>
          {openIndex === 5 && (
             <div className='bg-[#2d2d2d] py-4 px-6 text-md md:text-2xl space-y-8'>
            <p >The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
           </p>
             <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
           )}
            </div> 


        </div>
      </div>

     </div>
  
  )
}

export default SectionSignUpAbout;

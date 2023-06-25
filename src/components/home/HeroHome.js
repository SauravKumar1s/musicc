import React from 'react'
import Typography from '../typography'

const HomeHero = () => {
  return (
    <section className="bg-black">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <Typography variant="h7" className=" text-white  uppercase ">wE<br/>ARE<br/>LOWFIED</Typography>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section>
  )
}
export default HomeHero
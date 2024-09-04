import {Button} from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello, I'm <br/> <span className="text-blue-500">Mridul Sharma</span>
            </h1>
            <p className="max-w-[450px] mb-9 text-white/80">
              I am pursuing bachelors in technology in Computer Science and Engineering with Artificial Intelligence. I have been working in various domains like web development, AI/ML and UI/UX for the past 3 years.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1hN0DhubBBdvubyKcqOiYXaMfC3eyPplw&export=download" download="Mridul_Sharma_CV.pdf">
              <Button
              variant='outline'
              size='lg'
              className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button> 
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles = "flex gap-6" iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-slate-950 hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
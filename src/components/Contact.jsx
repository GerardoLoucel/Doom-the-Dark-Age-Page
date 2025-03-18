import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-42 overflow-hidden sm:block lg:left-20 lg:w-40">
          <ImageClipBox
            src="/img/contact-1.png"
            clipClass=" rotate-12 scale-85"
          />
          <ImageClipBox
            src="/img/contact-2.png"
            clipClass=" lg:translate-y-10 translate-y-60 scale-85 rotate-1"
          />
        </div>

        <div className="absolute -top-40 left-10 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-10 lg:w-80">
          <ImageClipBox
            src="/img/swordman.jpg"
            clipClass="md:scale-125"
          />
        </div>
        <div className="absolute top-800 left-20 w-60 sm:top-[120%] md:left-auto md:right-10 lg:top-80 lg:w-80">
          <ImageClipBox
            src="/img/swordman2.jpg"
            clipClass="scale-50 rotate-3"
          />
        </div>
        <div className="flex flex-col items-center text-center">
     
          <p className="mb-10 font-general text-[10px] uppercase">
            Join The Slayer Club
          </p>

          <AnimatedTitle
            title="
            Join to follow up  <br /> to date on everything <br /> related to id Software <br /> and DOOM: The Dark Ages!"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Join Us" containerClass="mt-10 cursor-pointer !bg-red-800" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

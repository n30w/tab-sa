export default function Contact() {
  return (
    <>
      <div className="font-atkinson">
        <div className="sectionHeader">
          <h1>Let's get in touch.</h1>
        </div>
        <div className="sectionContent">
          <h2 className="text-3xl text-left md:text-center pt-9 text-black">
            Send us a message by filling in the boxes below.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 justify-items-center">
              <label className="block w-80 md:w-96">
                <span className="text-black text-xl">First name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    text-xl
                    md:text-2xl
                    block
                    w-full
                    rounded-md
                    bg-white
                    border-transparent
                    border-black focus:ring-0
                  "
                  placeholder=""
                />
              </label>
              <label className="block w-80 md:w-96">
                <span className="text-black text-xl">Last name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    text-xl
                    md:text-2xl
                    block
                    w-full
                    rounded-md
                    bg-white
                    border-transparent
                    border-black focus:ring-0
                  "
                  placeholder=""
                />
              </label>
              <label className="block w-80 md:w-96">
                <span className="text-black text-xl">Email address</span>
                <input
                  type="email"
                  className="
                    mt-1
                    text-xl
                    md:text-2xl
                    block
                    w-full
                    rounded-md
                    bg-white
                    border-transparent
                    border-black focus:ring-0
                  "
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-black text-xl">Message</span>
                <textarea
                  className="
                    mt-1
                    block
                    w-80
                    md:w-96
                    h-80
                    rounded-md
                    bg-white
                    border-transparent
                    border-black focus:ring-0
                  "
                  rows={3}
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 pb-36">
          <button
            className="btn btn-lg font-normal text-black hover:bg-[#007A4D] hover:text-white bg-white border-2 border-black"
            style={{
              textTransform: "none",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

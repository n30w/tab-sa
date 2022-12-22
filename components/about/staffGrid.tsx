import Image from "next/image";

export default function staffGrid({ staff }: any) {
  // const staff = [
  //   {
  //     first: "Yunus",
  //     last: "Peer",
  //     role: "Founder and Director",
  //     image: "/yunus_peer.png",
  //   },
  //   {
  //     first: "Laurie",
  //     last: "Lee",
  //     role: "Assistant Administrator",
  //     image: "/laurie_lee.png",
  //   },
  //   {
  //     first: "Thokozani",
  //     last: "Mteshane",
  //     role: "Assistant Director",
  //     image: "/thokozani_mteshane.png",
  //   },
  // ];
  return (
    <>
      {/* <div>{staff.role}</div> */}
      <ul className="flow flex-col justify-center items-center px-3 py-9 md:items-start md:grid md:w-auto md:grid-cols-3 md:justify-items-center md:gap-4 align-top">
        {staff?.map((p, i) => (
          <li
            key={i}
            className="grid grid-cols-1 justify-items-center content-center w-auto px-8"
          >
            <div className="grid justify-items-center text-center grid-cols-1 pt-4 font-bold tabGradientText">
              <h2 className="text-2xl 2xl:text-5xl">{p.staff.firstName}</h2>
              <h2 className="text-2xl 2xl:text-5xl">{p.staff.lastName}</h2>
            </div>
            <div className="flex flex-col space-x-4 py-3 justify-center items-center">
              <div className="w-72 overflow-hidden rounded-xl">
                <Image
                  src={p.staff.image.url}
                  height={500}
                  width={500}
                  className="object-cover w-96 h-96 px-4 select-none grayscale"
                  alt={`${p.staff.firstName} ${p.staff.lastName}`}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl pt-4 px-2 text-center tabGradientText">
                  {p.staff.role}
                </h3>
              </div>
              <div className="flex text-left px-2 py-5">
                <p className="text-xl md:text-xl">{p.staff.blurb}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

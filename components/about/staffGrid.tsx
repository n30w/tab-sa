export default function staffGrid() {
  const staff = [
    {
      first: "Yunus",
      last: "Peer",
      role: "Founder and Director",
      image: "/yunus_peer.png",
    },
    {
      first: "Laurie",
      last: "Lee",
      role: "Assistant Administrator",
      image: "/laurie_lee.png",
    },
    {
      first: "Thokozani",
      last: "Mteshane",
      role: "Assistant Director",
      image: "/thokozani_mteshane.png",
    },
  ];
  return (
    <>
      <ul className="flow flex-col justify-center items-center px-3 py-9 md:items-start md:grid md:w-auto md:grid-cols-3 md:justify-items-center md:gap-4 align-top">
        {staff.map((person) => (
          <li
            key={person.first}
            className="grid grid-cols-1 justify-items-center content-center w-auto px-8"
          >
            <div className="grid justify-items-center text-center grid-cols-1 pt-4 font-bold tabGradientText">
              <h2 className="text-2xl 2xl:text-5xl">{person.first}</h2>
              <h2 className="text-2xl 2xl:text-5xl">{person.last}</h2>
            </div>
            <div className="flex flex-col space-x-4 py-3 justify-center items-center">
              <div className="w-72">
                <img
                  src={person.image}
                  className="object-cover w-96 h-96 px-4 select-none grayscale"
                  alt={`${person.first} ${person.last}`}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl pt-4 px-2 text-center tabGradientText">
                  {person.role}
                </h3>
              </div>
              <div className="flex text-left px-2 py-5">
                <p className="text-xl md:text-xl">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla voluptatibus illo dignissimos illum? Minus ipsa nesciunt
                  laudantium architecto ducimus hic pariatur, suscipit non rem
                  saepe laborum fugiat esse recusandae numquam.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="flex flex-col md:flex-row py-14 px-9"></div> */}
    </>
  );
}

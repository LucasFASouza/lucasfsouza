import React from "react";

const ListResume = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="py-5">
          <div className="flex justify-between gap-12">
            <p className="uppercase tracking-wide text-sm font-semibold opacity-60 w-1/4 text-end">
              {item.startDate} {item.endDate && <span>- {item.endDate}</span>}
            </p>

            <div className="w-3/4">
              <h2 className="text-lg font-bold">
                {item.title}{" "}
                <div className="inline-block text-accent-pink ">
                  <span className="font-semibold"> @ </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-pink underline-transition cursor-pointer"
                  >
                    {item.place}
                  </a>
                </div>
              </h2>

              <p>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListResume;

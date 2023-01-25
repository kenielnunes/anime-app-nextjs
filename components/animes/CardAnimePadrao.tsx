import React from "react";

interface Prop {
    link: string;
    imageSrc: string;
    id: string;
    name: string;
}

export default function CardAnimePadrao({ link, imageSrc, id, name }: Prop) {
    return (
        <div>
            <a
                href={link}
                style={{
                    backgroundImage: `url(
                                          ${imageSrc}
                                      )`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                key={id}
                id={id}
                className="h-[300px] w-[220px] flex items-end rounded-lg opacity-90 hover:opacity-100 duration-300"
            >
                <div className="h-[35%] w-full bg-black bg-opacity-60 ">
                    <div className="font-semibold text-white p-2 max-h-full overflow-y-auto">
                        {name}
                    </div>
                </div>
            </a>
        </div>
    );
}

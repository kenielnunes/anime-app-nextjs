import React from "react";

interface Props {
    epsList: any;
}

export default function AnimesListOverflow({ epsList }: Props) {
    const [filter, setFilter] = React.useState([]);
    const [search, setSearch] = React.useState("");
    console.log(
        "🚀 ~ file: AnimesListOverflow.tsx:10 ~ AnimesListOverflow ~ search",
        search
    );

    const epsFiltered = epsList.includes(search);

    return (
        <div className="w-full p-10 rounded-md bg-[#2D2C33]">
            <div className="text-black pb-10">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3"
                    type="text"
                    placeholder="Pesquisar..."
                />
            </div>
            {epsFiltered}
            <div className="max-h-[500px] flex flex-col-reverse overflow-y-auto divide-y-2">
                {epsList}
            </div>
        </div>
    );
}

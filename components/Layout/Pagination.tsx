/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

interface Props {
    items: any[];
}

const MyPagination: React.FC<Props> = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    const [filteredAnimes, setFilteredAnimes] = useState<any>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        setFilteredAnimes(
            items.filter((ep: any) =>
                ep.category_name?.includes(search.toLowerCase())
            )
        );
    }, [search]);

    const buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startIndexOfButtons = currentPage > 2 ? currentPage - 2 : 0;
    const endIndexOfButtons =
        currentPage + 2 < totalPages ? currentPage + 2 : totalPages - 1;
    const visibleButtons = buttons.slice(
        startIndexOfButtons,
        endIndexOfButtons + 1
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col justify-center mt-5 text-black">
            {/* <input
                value={search}
                type="text"
                onChange={(e: any) => setSearch(e.target.value)}
            /> */}

            <div className="flex flex-wrap gap-8 container mx-auto">
                {visibleItems}
            </div>

            <div className="flex w-full items-center justify-center py-10">
                {visibleButtons.map((page) => (
                    <button
                        key={page}
                        className={`mx-1 px-2 py-1 rounded-lg ${
                            currentPage === page
                                ? "bg-teal-500 text-white"
                                : "bg-teal-200 text-teal-900"
                        }`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className="flex w-full items-center justify-center">
                {currentPage > 5 && (
                    <button
                        className="mx-1 px-2 py-1 rounded-lg bg-teal-200 text-teal-900"
                        onClick={() => handlePageChange(currentPage - 5)}
                    >
                        &lt;
                    </button>
                )}
                {currentPage < totalPages - 4 && (
                    <button
                        className="mx-1 px-2 py-1 rounded-lg bg-teal-200 text-teal-900"
                        onClick={() => handlePageChange(currentPage + 5)}
                    >
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyPagination;

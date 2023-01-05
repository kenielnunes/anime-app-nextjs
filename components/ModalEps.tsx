import React, { useState } from "react";

type Modal = {
    srcVideo: string;
    idModal: string;
    closeStream: any;
    epTitle: string;
    setBeforeEp: any;
    setNextEp: any;
};
export default function ModalEps({
    srcVideo,
    idModal,
    closeStream,
    epTitle,
    setNextEp,
    setBeforeEp,
}: Modal) {
    return (
        <div>
            <div className="flex  flex-wrap gap-4">
                <div className=""></div>

                <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id={idModal}
                    tabIndex={-1}
                    aria-labelledby="exampleModalCenterTitle"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered relative w-2/3">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-col flex-shrink-0 gap-4 justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <button
                                    onClick={closeStream}
                                    type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <div className="text-black flex gap-10 justify-center items-center font-bold ">
                                    {/* <div>
                                        <button
                                            onClick={setBeforeEp}
                                            className="beforeButton flex rotate-180"
                                        >
                                            <span className="rotate-180">
                                                Anterior
                                            </span>
                                            <svg
                                                viewBox="0 0 13 10"
                                                height="10px"
                                                width="15px"
                                                className=""
                                            >
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>
                                    </div> */}
                                    <div className="text-2xl ">{epTitle}</div>
                                    {/* <div>
                                        <button
                                            onClick={setNextEp}
                                            className="nextButton flex"
                                        >
                                            <span>Próximo</span>
                                            <svg
                                                viewBox="0 0 13 10"
                                                height="10px"
                                                width="15px"
                                            >
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>
                                    </div> */}
                                </div>
                                <div
                                    className="text-xl font-medium leading-normal text-gray-800"
                                    id="exampleModalScrollableLabel"
                                >
                                    <video
                                        controls
                                        className="w-full"
                                        src={srcVideo}
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {animeData.map((anime: any) => {
                    return (
                        <>
                            <img
                                className="w-[150px] rounded-xl hover:-translate-y-2 duration-150 cursor-pointer"
                                src={`${urlImage}${anime.category_image}`}
                                alt="erro"
                            />
                        </>
                    );
                })} */}
            </div>
        </div>
    );
}

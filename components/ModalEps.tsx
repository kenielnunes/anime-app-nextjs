import React, { useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import VideoPlayer from "./video/VideoPlayer";

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
                <div
                    style={{
                        backgroundImage: 'url("/backgroundModal.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="modal bg-opacity-75 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id={idModal}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered relative w-full md:w-2/3 ">
                        <div className="modal-content border-none shadow-lg relative flex bg-white text-black flex-col w-screen pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-col flex-shrink-0 gap-4 justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <button
                                    onClick={closeStream}
                                    type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <div className="flex gap-10 justify-center items-center font-bold ">
                                    <div className="text-2xl text-black ">
                                        {epTitle}
                                    </div>
                                </div>
                                <div id="exampleModalScrollableLabel">
                                    {/* <VideoPlayer url={srcVideo} /> */}
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

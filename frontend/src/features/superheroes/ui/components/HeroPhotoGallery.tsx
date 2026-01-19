import {useMemo, useState} from "react";
import PhotoAlbum, {type Photo} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {useDropzone} from "react-dropzone";
import {useAppDispatch} from "../../../../app/hooks.ts";
import type {ImageType} from "../../../../shared/types/image.type.ts";
import "react-photo-album/styles.css";
import {addHeroImage, deleteHeroImage} from "../../model/thunks.ts";

type Props = {
    heroId: number;
    images: ImageType[];
};

export function HeroPhotoGallery({heroId, images = []}: Props) {

    const dispatch = useAppDispatch();

    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);


    const onUpload = async (files: File[]) => {
        if (!files.length) return;

        setIsLoading(true);
        try {
            dispatch(addHeroImage({heroId, image: files[0]}));
        } finally {
            setIsLoading(false);
        }
    };

    const onDelete = async (imgId: number) => {
        setIsLoading(true);
        try {
            dispatch(deleteHeroImage({superheroId:heroId,imgId}));

            setLightboxIndex((idx) => {
                if (idx < 0) return -1;
                const newList = images.filter((x) => x.id !== imgId);
                if (newList.length === 0) return -1;
                return Math.min(idx, newList.length - 1);
            });
        } finally {
            setIsLoading(false);
        }
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: onUpload,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
        },
        maxSize: 5 * 1024 * 1024,
        multiple: true,
    });


    const photos = useMemo<Photo[]>(
        () =>
            images.map((img) => ({
                src: img.imgUrl,
                width: 800,
                height: 800,
            })),
        [images]
    );

    const slides = useMemo(
        () => images.map((img) => ({src: img.imgUrl})),
        [images]
    );

    return (
        <div className="space-y-4">
            <div
                {...getRootProps()}
                className={`rounded-2xl border-2 border-dashed p-5 text-center cursor-pointer select-none
        ${isDragActive ? "border-blue-500" : "border-gray-300"}`}
            >
                <input {...getInputProps()} />
                <div className="text-sm text-gray-700">
                    {isDragActive ? "Drop images here..." : "Drag & drop images or click"}
                </div>
                <div className="text-xs text-gray-400 mt-1">jpg/png/webp up to 5MB</div>
            </div>


            {isLoading && (
                <div className="text-sm text-gray-500">Loading...</div>
            )}


            {images.length === 0 && !isLoading ? (
                <div className="text-sm text-gray-500">No images yet</div>
            ) : (
                <div className="rounded-2xl border border-gray-200 p-4">

                    <PhotoAlbum
                        layout="rows"
                        photos={photos}
                        spacing={12}
                        targetRowHeight={150}
                        onClick={({index}) => setLightboxIndex(index)}
                    />

                </div>
            )}


            <Lightbox
                open={lightboxIndex >= 0}
                close={() => setLightboxIndex(-1)}
                index={lightboxIndex}
                slides={slides}
                toolbar={{
                    buttons: [
                        lightboxIndex >= 0 && images[lightboxIndex] ? (
                            <button
                                key="delete"
                                className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto py-3 cursor-pointer rounded bg-red-500 px-8 text-sm font-medium text-white hover:bg-red-600 transition-colors mr-5"
                                onClick={() => onDelete(images[lightboxIndex].id)}
                            >
                                Delete
                            </button>
                        ) : null,
                        "close",
                    ],
                }}
            />
        </div>
    );
}
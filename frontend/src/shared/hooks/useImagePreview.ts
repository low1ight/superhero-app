import {useEffect, useMemo} from "react";

export function useImagePreview(file?: File | null) {
    const previewUrl = useMemo(() => {
        console.log('func')
        if (!file) return null;
        console.log('memo')
        return URL.createObjectURL(file);
    }, [file]);

    useEffect(() => {
        return () => {
            console.log('hook')
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    return previewUrl;
}
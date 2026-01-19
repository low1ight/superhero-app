type ConfirmDialogProps = {
    open: boolean;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    onConfirm: () => void;
    onClose: () => void;
};

export function ConfirmModal({
                                 open,
                                 title = "Confirmation",
                                 description = "Are you sure?",
                                 confirmText = "Delete",
                                 cancelText = "Cancel",
                                 loading = false,
                                 onConfirm,
                                 onClose,
                             }: ConfirmDialogProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}>

            <div className="absolute inset-0 bg-black/50"/>


            <div
                className="relative w-full max-w-md rounded-xl bg-white p-4 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{description}</p>

                <div className="mt-4 flex justify-end gap-2">
                    <button
                        type="button"
                        className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                        onClick={onClose}
                        disabled={loading}
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
                        onClick={onConfirm}
                        disabled={loading}
                    >
                        {loading ? "Deleting..." : confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
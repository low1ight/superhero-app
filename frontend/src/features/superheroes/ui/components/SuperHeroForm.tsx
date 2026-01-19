import {Link} from "react-router-dom";
import Button from "../../../../shared/ui/Button.tsx";
import {type SubmitHandler, useFormContext} from "react-hook-form";
import type {HeroFormValues} from "../../model/validators/superhero.validation.ts";
import {useImagePreview} from "../../../../shared/hooks/useImagePreview.ts";
import  {type ChangeEvent} from "react";
import heroPlaceholder from "../../../../assets/hero-placeholder.png";
import * as React from "react";


const SectionHeader = ({title, colorClass = "from-blue-500 to-blue-600"}: { title: string, colorClass?: string }) => (
    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <span className={`w-1 h-6 bg-gradient-to-b ${colorClass} rounded-full`}></span>
        {title}
    </h2>
);

const FormInput = ({label, error, children}: { label: string, error?: any, children: React.ReactNode }) => {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label} <span className="text-red-500">*</span>
            </label>
            {children}
            {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {error.message}
                </p>
            )}
        </div>
    );
};

const getInputClass = (isError: boolean) => `
  w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 
  ${isError ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"}
`

type Props = {
    onSubmit: SubmitHandler<HeroFormValues>;
    submitButtonName: string;
    currentImage?: string | null
};

export function SuperHeroForm({submitButtonName, currentImage, onSubmit}: Props) {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors, isSubmitting},
    } = useFormContext<HeroFormValues>();


    const file = watch("image");
    const localPreview = useImagePreview(file);
    const imgSrc = localPreview || currentImage || heroPlaceholder

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextFile = e.target.files?.[0];
        if (!nextFile) return;

        setValue("image", nextFile, {
            shouldDirty: true,
            shouldValidate: true,
        });
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl rounded-3xl border border-gray-200 bg-white shadow-lg p-8 space-y-6"
        >
            <div className="space-y-6 pb-6 border-b border-gray-200">
                <SectionHeader title="Basic Information"/>

                <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="Nickname" error={errors.nickname}>
                        <input className={getInputClass(!!errors.nickname)}
                               placeholder="e.g., Spiderman" {...register("nickname")} />
                    </FormInput>

                    <FormInput label="Real Name" error={errors.realName}>
                        <input className={getInputClass(!!errors.realName)}
                               placeholder="e.g., Peter Parker" {...register("realName")} />
                    </FormInput>
                </div>
            </div>

            <img src={imgSrc}
                 alt="preview"
                 className="h-64 w-64 rounded-2xl object-cover border"
                 onError={(e) => {
                     e.currentTarget.src = imgSrc;}}/>


            <input type="file"
                   accept="image/png, image/jpeg, image/webp"
                   className="block w-full"
                   onChange={onFileChange}/>


            {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message as string}</p>
            )}

            <div className="space-y-6 pb-6 border-b border-gray-200">
                <SectionHeader title="Hero Details" colorClass="from-purple-500 to-purple-600"/>

                <FormInput label="Origin Description" error={errors.originDescription}>
                    <textarea rows={4}
                              className={`${getInputClass(!!errors.originDescription)} resize-none`} {...register("originDescription")} />
                </FormInput>

                <FormInput label="Superpower" error={errors.superPower}>
                    <textarea rows={3}
                              className={`${getInputClass(!!errors.superPower)} resize-none`} {...register("superPower")} />
                </FormInput>

                <FormInput label="Catch Phrase" error={errors.catchPhrase}>
                    <textarea rows={2}
                              className={`${getInputClass(!!errors.catchPhrase)} resize-none`} {...register("catchPhrase")} />
                </FormInput>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
                <Link to="/heroes">
                    <Button
                        type="button"
                        variant="secondary"
                        buttonName='Cancel'
                        className="px-7 py-2.5"
                    />

                </Link>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    buttonName={submitButtonName}
                    isSubmitting={isSubmitting}
                    className="px-10 py-2.5"
                />
            </div>
        </form>
    )
}


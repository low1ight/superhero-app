import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common';

const maxSize = { maxSize: 5 * 1024 * 1024 };
const fileTypes = /(jpeg|png|webp)$/;

export function UploadedImage(isRequired: boolean) {
  return UploadedFile(
    new ParseFilePipe({
      fileIsRequired: isRequired,
      validators: [
        new MaxFileSizeValidator(maxSize),
        new FileTypeValidator({ fileType: fileTypes }),
      ],
    }),
  );
}

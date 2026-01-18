import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common';

const maxSize = { maxSize: 5 * 1024 * 1024 };
const fileTypes = /(jpeg|png|webp)$/;

export function UploadedImage() {
  return UploadedFile(
    new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator(maxSize),
        new FileTypeValidator({ fileType: fileTypes }),
      ],
    }),
  );
}
